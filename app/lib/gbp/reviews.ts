import { unstable_cache } from "next/cache";
import { gbpFetch } from "./client";

const accountId = process.env.GBP_ACCOUNT_ID!;
const locationId = process.env.GBP_LOCATION_ID!;

const BLOCKED_REVIEW_IDS = [
  "AbFvOqka2X2XZm3kNWlYi68jyKIBKfl-XQ7siNW0ENPmb_ZRA0pdgT_zY4KxKavE9vt0Xu09BiTpMg", // troy GAINES
];

// Shown only if the GBP API is unreachable, so an outage never breaks the
// homepage or reviews page — they fall back to the last-known good numbers.
const FALLBACK_AVERAGE_RATING = 4.8;
const FALLBACK_REVIEW_COUNT = 50;

export interface Reviewer {
  displayName: string;
  isAnonymous: boolean;
  profilePhotoUrl?: string;
}

export interface Review {
  name: string;
  reviewId: string;
  reviewer: Reviewer;
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment: string;
  createTime: string;
  updateTime: string;
}

export interface ReviewResponse {
  reviews: Review[];
  averageRating: number;
  totalReviewCount: number;
}

export interface RatingSummary {
  averageRating: number;
  totalReviewCount: number;
}

async function fetchReviews(): Promise<ReviewResponse> {
  const response = await gbpFetch(
    `${accountId}/${locationId}/reviews?pageSize=50`,
  );
  if (!response.ok)
    throw new Error(`GBP reviews fetch failed: ${response.status}`);

  const data = await response.json();

  const fiveStarReviews = (data.reviews ?? [])
    .filter(
      (r: Review) =>
        r.starRating === "FIVE" && !BLOCKED_REVIEW_IDS.includes(r.reviewId),
    )
    .slice(0, 8);

  return {
    reviews: fiveStarReviews,
    averageRating: data.averageRating ?? 0,
    totalReviewCount: data.totalReviewCount ?? 0,
  };
}

// Cached for an hour so the Google API (and OAuth token refresh) is hit at most
// once per hour across every page that reads reviews, instead of on each request.
export const getReviews = unstable_cache(fetchReviews, ["gbp-reviews"], {
  revalidate: 3600,
  tags: ["gbp-reviews"],
});

// Reviews + summary with graceful fallback — never throws, so a GBP/network
// outage degrades to empty reviews + fallback rating instead of crashing render.
export async function getReviewsSafe(): Promise<ReviewResponse> {
  try {
    return await getReviews();
  } catch (error) {
    console.error("[GBP] reviews unavailable, using fallback:", error);
    return {
      reviews: [],
      averageRating: FALLBACK_AVERAGE_RATING,
      totalReviewCount: FALLBACK_REVIEW_COUNT,
    };
  }
}

// Just the rating + count, for the rating badge / metadata / structured data.
export async function getRatingSummary(): Promise<RatingSummary> {
  const { averageRating, totalReviewCount } = await getReviewsSafe();
  return {
    averageRating: averageRating || FALLBACK_AVERAGE_RATING,
    totalReviewCount: totalReviewCount || FALLBACK_REVIEW_COUNT,
  };
}

// ─── GBP Review Response Shape ───────────────────────────────────────────────
// Returned from: GET accounts/{accountId}/locations/{locationId}/reviews
//
// {
//   "reviews": [
//     {
//       "name": "accounts/112233445566778899/locations/987654321/reviews/abc123xyz",
//       "reviewId": "abc123xyz",
//
//       "reviewer": {
//         "profilePhotoUrl": "https://lh3.googleusercontent.com/a/photo.jpg",
//         "displayName": "John Smith",
//         "isAnonymous": false
//       },
//
//       "starRating": "FIVE",               // ONE | TWO | THREE | FOUR | FIVE
//
//       "comment": "Best barbershop in Akron. Clean cuts every time.",
//
//       "createTime": "2024-10-02T15:01:23Z",
//       "updateTime": "2024-10-02T15:01:23Z",
//
//       "reviewReply": {
//         "comment": "Thank you! We appreciate you coming in, see you next time.",
//         "updateTime": "2024-10-03T10:00:00Z",
//         "reviewReplyState": "APPROVED"    // PENDING | REJECTED | APPROVED
//       },
//
//       "reviewMediaItems": [
//         {
//           "thumbnailUrl": "https://lh3.googleusercontent.com/a/thumbnail.jpg",
//           "thumbnailLabel": "Interior shot",
//           "videoUrl": ""                  // only present if media item is a video
//         }
//       ]
//     }
//   ],
//
//   "averageRating": 4.8,
//   "totalReviewCount": 83,
//   "nextPageToken": "token_for_next_page"  // only present if more pages exist
// }

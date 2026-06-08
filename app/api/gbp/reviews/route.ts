import { getReviews } from "@/lib/gbp/reviews";

export async function GET() {
  try {
    const data = await getReviews();
    return Response.json(data);
  } catch (error) {
    console.error("[GBP] Reviews fetch error:", error);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

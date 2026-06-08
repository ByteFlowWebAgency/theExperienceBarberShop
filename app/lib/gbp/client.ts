// Fail fast instead of hanging on the default ~10s connect timeout (×retries)
// when Google is slow or unreachable, so page render falls back quickly.
const GBP_TIMEOUT_MS = 8000;

async function getAccessToken(): Promise<string> {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
      grant_type: "refresh_token",
    }),
    signal: AbortSignal.timeout(GBP_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`GBP token refresh failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

export async function gbpFetch(path: string, options?: RequestInit) {
  const token = await getAccessToken();
  return fetch(`https://mybusiness.googleapis.com/v4/${path}`, {
    signal: AbortSignal.timeout(GBP_TIMEOUT_MS),
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
}

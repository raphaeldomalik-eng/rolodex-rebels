import { SITE_URL } from "../../seo";
import { INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from "../../indexnow";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;

  if (!secret) {
    return Response.json({ error: "IndexNow is not configured." }, { status: 503 });
  }

  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorised." }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const submittedUrls = typeof payload === "object" && payload !== null && "urls" in payload
    ? (payload as { urls?: unknown }).urls
    : null;

  if (!Array.isArray(submittedUrls) || submittedUrls.length === 0 || submittedUrls.length > 100) {
    return Response.json({ error: "Provide between 1 and 100 URLs." }, { status: 400 });
  }

  const urls = [...new Set(submittedUrls)].filter((value): value is string => {
    if (typeof value !== "string") return false;
    try {
      const url = new URL(value, SITE_URL);
      return url.origin === SITE_URL && url.search === "" && url.hash === "";
    } catch {
      return false;
    }
  }).map((value) => new URL(value, SITE_URL).toString());

  if (urls.length !== submittedUrls.length) {
    return Response.json({ error: "Every URL must be a canonical Rolodex Rebels URL without a query string or fragment." }, { status: 400 });
  }

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: "rolodexrebels.co.uk",
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: urls,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("IndexNow submission failed with status", response.status);
      return Response.json({ error: "IndexNow rejected the submission." }, { status: 502 });
    }
  } catch (error) {
    console.error("IndexNow submission failed", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: "IndexNow could not be reached." }, { status: 502 });
  }

  return Response.json({ submitted: urls.length }, { status: 202 });
}

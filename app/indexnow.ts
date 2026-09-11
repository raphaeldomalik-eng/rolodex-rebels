import { SITE_URL } from "./seo";

// IndexNow verification keys are public by design. An environment override makes
// rotation possible without changing the application source.
export const INDEXNOW_KEY = process.env.INDEXNOW_KEY?.trim() || "8e1a4456fc134c48aa51da5a3be315a6";
export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/indexnow-key.txt`;


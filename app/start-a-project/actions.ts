"use server";

import { budgetOptions, goalOptions } from "./brief-options";

const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";
const FROM_EMAIL = "rr@eventsuite.pro";
const FROM_NAME = "Rolodex Rebels";
const TO_EMAIL = "joanne@rolodexrebels.co.uk";

export type ProjectBriefState = {
  status: "idle" | "success" | "error";
  message: string;
};

type Brief = {
  name: string;
  email: string;
  project: string;
  goal: string;
  keyDate: string;
  audience: string;
  locations: string;
  activity: string;
  budget: string;
  success: string;
};

const limits: Record<keyof Brief, number> = {
  name: 100,
  email: 254,
  project: 160,
  goal: 80,
  keyDate: 20,
  audience: 500,
  locations: 500,
  activity: 3000,
  budget: 80,
  success: 5000,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: keyof Brief) {
  const raw = formData.get(name);
  return typeof raw === "string" ? raw.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safe(value: string) {
  return value || "Not supplied";
}

function validate(brief: Brief) {
  if (!brief.name || !brief.email || !brief.goal || !brief.success) {
    return "Please complete every required field.";
  }

  if (!emailPattern.test(brief.email)) {
    return "Please enter a valid email address.";
  }

  for (const [name, maxLength] of Object.entries(limits) as [keyof Brief, number][]) {
    if (brief[name].length > maxLength) return "One or more answers are too long.";
  }

  if (!goalOptions.includes(brief.goal as (typeof goalOptions)[number])) {
    return "Please choose a valid campaign goal.";
  }

  if (brief.budget && !budgetOptions.includes(brief.budget as (typeof budgetOptions)[number])) {
    return "Please choose a valid budget range.";
  }

  return null;
}

function textEmail(brief: Brief) {
  return [
    "NEW ROLODEX REBELS PROJECT BRIEF",
    "",
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Artist / company / event: ${safe(brief.project)}`,
    "",
    `Goal: ${brief.goal}`,
    `Key date: ${safe(brief.keyDate)}`,
    `Audience: ${safe(brief.audience)}`,
    `Locations: ${safe(brief.locations)}`,
    `Current activity: ${safe(brief.activity)}`,
    `Budget range: ${safe(brief.budget)}`,
    "",
    "What success looks like:",
    brief.success,
  ].join("\n");
}

function htmlEmail(brief: Brief) {
  const rows: [string, string][] = [
    ["Name", brief.name],
    ["Email", brief.email],
    ["Artist / company / event", safe(brief.project)],
    ["Goal", brief.goal],
    ["Key date", safe(brief.keyDate)],
    ["Audience", safe(brief.audience)],
    ["Locations", safe(brief.locations)],
    ["Current activity", safe(brief.activity)],
    ["Budget range", safe(brief.budget)],
    ["What success looks like", brief.success],
  ];

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#090909;line-height:1.5">
      <h1 style="margin:0 0 24px;color:#ef006f">New Rolodex Rebels project brief</h1>
      <table role="presentation" style="width:100%;border-collapse:collapse">
        ${rows.map(([label, answer]) => `
          <tr>
            <th align="left" valign="top" style="width:180px;padding:10px;border-bottom:1px solid #dddddd">${escapeHtml(label)}</th>
            <td style="padding:10px;border-bottom:1px solid #dddddd">${escapeHtml(answer).replaceAll("\n", "<br>")}</td>
          </tr>
        `).join("")}
      </table>
    </div>
  `;
}

export async function submitProjectBrief(
  _previousState: ProjectBriefState,
  formData: FormData,
): Promise<ProjectBriefState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim()) {
    return { status: "success", message: "Thanks — your brief has been sent." };
  }

  const brief: Brief = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    project: field(formData, "project"),
    goal: field(formData, "goal"),
    keyDate: field(formData, "keyDate"),
    audience: field(formData, "audience"),
    locations: field(formData, "locations"),
    activity: field(formData, "activity"),
    budget: field(formData, "budget"),
    success: field(formData, "success"),
  };

  const validationError = validate(brief);
  if (validationError) return { status: "error", message: validationError };

  // Keep the correctly named variable as the primary production contract while
  // accepting the existing protected Vercel variable until it can be rotated.
  const apiKey = process.env.SENDGRID_API_KEY ?? process.env.SEBDGRID_API_KEY;
  if (!apiKey) {
    console.error("Project brief email is unavailable: SENDGRID_API_KEY is not configured.");
    return { status: "error", message: "We couldn’t send your brief just now." };
  }

  const subjectProject = (brief.project || brief.name).replace(/\s+/g, " ").slice(0, 120);

  try {
    const response = await fetch(SENDGRID_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: TO_EMAIL, name: "Joanne" }] }],
        from: { email: FROM_EMAIL, name: FROM_NAME },
        reply_to: { email: brief.email, name: brief.name },
        subject: `Project brief — ${subjectProject}`,
        content: [
          { type: "text/plain", value: textEmail(brief) },
          { type: "text/html", value: htmlEmail(brief) },
        ],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("SendGrid rejected a project brief email with status", response.status);
      return { status: "error", message: "We couldn’t send your brief just now." };
    }

    return { status: "success", message: "Brief sent. We’ll be in touch with the clearest next step." };
  } catch (error) {
    console.error("Project brief email failed", error instanceof Error ? error.message : "Unknown error");
    return { status: "error", message: "We couldn’t send your brief just now." };
  }
}

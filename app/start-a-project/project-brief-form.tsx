"use client";

import { useState, type FormEvent } from "react";

const goalOptions = [
  "Launch my music",
  "Build my audience",
  "Improve my digital presence",
  "Sell more tickets",
  "Run a guest or industry campaign",
  "Activate audiences on the ground",
  "Something else",
];

const budgetOptions = [
  "Still working it out",
  "Under £1,000",
  "£1,000–£2,500",
  "£2,500–£5,000",
  "£5,000–£10,000",
  "£10,000+",
];

function value(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim() || "Not supplied";
}

export function ProjectBriefForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const projectName = value(data, "project");
    const body = [
      "Hi Rolodex Rebels,",
      "",
      "I’d like to start a project.",
      "",
      "CONTACT",
      `Name: ${value(data, "name")}`,
      `Email: ${value(data, "email")}`,
      `Artist / company / event: ${projectName}`,
      "",
      "THE BRIEF",
      `Goal: ${value(data, "goal")}`,
      `Key date: ${value(data, "keyDate")}`,
      `Audience: ${value(data, "audience")}`,
      `Locations: ${value(data, "locations")}`,
      `Current activity: ${value(data, "activity")}`,
      `Budget range: ${value(data, "budget")}`,
      "",
      "WHAT SUCCESS LOOKS LIKE",
      value(data, "success"),
      "",
      "Thanks,",
      value(data, "name"),
    ].join("\n");

    const subject = `Project brief — ${projectName}`;
    setStatus("Your email app should open with your brief ready to send.");
    window.location.href = `mailto:joanne@rolodexrebels.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="project-form-section" aria-labelledby="project-brief-title">
      <div className="project-form-intro">
        <p className="eyebrow">A useful first brief</p>
        <h2 id="project-brief-title">GIVE US<br />THE SIGNAL.</h2>
        <p>Tell us where you want to go. We’ll work out how to make the right noise in the right places.</p>
        <ol>
          <li><span>01</span> Share the goal</li>
          <li><span>02</span> Give us the essentials</li>
          <li><span>03</span> We’ll shape the campaign</li>
        </ol>
      </div>

      <form className="project-brief-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>First, who are we talking to?</legend>
          <div className="form-grid">
            <label>
              Your name <span aria-hidden="true">*</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              Your email <span aria-hidden="true">*</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="form-field-wide">
              Artist, company or event
              <input name="project" autoComplete="organization" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>What are we making happen?</legend>
          <div className="form-grid">
            <label>
              Your goal <span aria-hidden="true">*</span>
              <select name="goal" defaultValue="" required>
                <option value="" disabled>Choose the main goal</option>
                {goalOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              Key date
              <input name="keyDate" type="date" />
            </label>
            <label>
              Audience
              <input name="audience" placeholder="Who needs to see or hear this?" />
            </label>
            <label>
              Locations
              <input name="locations" placeholder="Cities, regions or online" />
            </label>
            <label className="form-field-wide">
              What is already in motion?
              <textarea name="activity" rows={4} placeholder="PR, social, ads, street activity, ticket sales…" />
            </label>
            <label>
              Budget range
              <select name="budget" defaultValue="">
                <option value="" disabled>Choose a range</option>
                {budgetOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label className="form-field-wide">
              What would a great result look like? <span aria-hidden="true">*</span>
              <textarea name="success" rows={5} required placeholder="The outcome that would make this campaign a win" />
            </label>
          </div>
        </fieldset>

        <div className="form-submit-row">
          <button className="button form-submit" type="submit">Open my project email <span aria-hidden="true">↗</span></button>
          <p>This opens your email app with the brief ready to send. Your details stay on this device until you send it.</p>
        </div>
        <p className="form-status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}

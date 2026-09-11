"use client";

import { useActionState, useEffect, useRef } from "react";
import { trackEvent } from "../analytics-events";
import { submitProjectBrief, type ProjectBriefState } from "./actions";
import { budgetOptions, goalOptions } from "./brief-options";

const initialState: ProjectBriefState = { status: "idle", message: "" };

export function ProjectBriefForm() {
  const [state, formAction, isPending] = useActionState(submitProjectBrief, initialState);
  const started = useRef(false);
  const trackedSuccess = useRef(false);

  useEffect(() => {
    if (state.status === "success" && !trackedSuccess.current) {
      trackedSuccess.current = true;
      trackEvent("project_form_submitted", { form_name: "project_brief" });
    }
  }, [state.status]);

  function recordStart() {
    if (started.current) return;
    started.current = true;
    trackEvent("project_form_started", { form_name: "project_brief" });
  }

  return (
    <section className="project-form-section" aria-labelledby="project-brief-title">
      <div className="project-form-intro">
        <p className="eyebrow">A useful first brief</p>
        <h2 id="project-brief-title">GIVE US<br />THE SIGNAL.</h2>
        <p>Tell us what is launching, when it needs to move and who needs to care. We will shape the right campaign around it.</p>
        <ol>
          <li><span>01</span> Share the goal</li>
          <li><span>02</span> Give us the essentials</li>
          <li><span>03</span> Get a sensible next step</li>
        </ol>
      </div>

      <form className="project-brief-form" action={formAction} onFocusCapture={recordStart}>
        <div className="form-trap" aria-hidden="true">
          <label>Leave this field blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <fieldset>
          <legend>First, who are we talking to?</legend>
          <div className="form-grid">
            <label>
              Your name <span aria-hidden="true">*</span>
              <input name="name" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              Your email <span aria-hidden="true">*</span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
            <label className="form-field-wide">
              Artist, company or event
              <input name="project" autoComplete="organization" maxLength={160} />
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
              <input name="audience" maxLength={500} placeholder="Who needs to see or hear this?" />
            </label>
            <label>
              Locations
              <input name="locations" maxLength={500} placeholder="Cities, regions or online" />
            </label>
            <label className="form-field-wide">
              What is already in motion?
              <textarea name="activity" rows={4} maxLength={3000} placeholder="PR, social, ads, street activity, ticket sales…" />
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
              <textarea name="success" rows={5} maxLength={5000} required placeholder="The outcome that would make this campaign a win" />
            </label>
          </div>
        </fieldset>

        <div className="form-submit-row">
          <button className="button form-submit" type="submit" disabled={isPending}>
            {isPending ? "Sending brief…" : "Send project brief"} <span aria-hidden="true">↗</span>
          </button>
          <p>Your brief is sent directly to Rolodex Rebels. Prefer email? <a href="mailto:joanne@rolodexrebels.co.uk">Email Joanne</a>.</p>
        </div>
        <p className={`form-status ${state.status}`} aria-live="polite" role={state.status === "error" ? "alert" : "status"}>
          {state.message}
          {state.status === "error" && <> <a href="mailto:joanne@rolodexrebels.co.uk">Email Joanne directly.</a></>}
        </p>
      </form>
    </section>
  );
}

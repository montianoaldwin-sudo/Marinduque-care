# MARINDUQUE CARE — Prompt Log

**Course:** Web Systems and Technologies  
**Activity:** Hands-On Laboratory Activity #4 — Prompt, Observe, Refine  
**Selected sector:** Health & Wellness Innovation  
**Project name:** MARINDUQUE CARE

## Task 1 — Sector Selection

**Local challenge:** Community members may have difficulty finding basic, understandable health education and organizing everyday wellness habits in one convenient place.

**Target users:** Marinduque residents, students, and families.

**Proposed solution:** A responsive, single-page educational website that brings together a daily wellness checklist, general healthy living tips, and a health resource guide.

**Key features:**
1. Interactive daily wellness checklist.
2. General healthy living tip cards.
3. Health resource guide encouraging consultation with qualified health professionals.

**Technology and constraints:** Semantic HTML, CSS, and vanilla JavaScript; frontend only; no backend, database, authentication, or external APIs. Health information is general and educational, not diagnosis or personalized medical advice.

## Task 2 — Zero-Shot Prompting

**Objective:** Observe Copilot's first response to a basic prompt without examples.

**Exact Prompt:**
> Create a simple webpage named MARINDUQUE CARE that provides basic health and wellness information for people in Marinduque. Use HTML, CSS, and JavaScript.

**Actual Copilot Output:**  
[Paste the actual Copilot response here, or save the generated files in `outputs/task-2-zero-shot/` and reference them.]

**What Worked:** [Complete after inspecting the actual response.]

**What Needs Improvement:** [Complete after inspecting the actual response.]

**Next Action / Verification:** Save a baseline copy before making improvements.

## Task 3 — Structured Prompt Improvement

**Objective:** Improve relevance by specifying role, task, context, constraints, expected output, and acceptance criteria.

**Exact Prompt:**
> Act as a skilled frontend web developer. Create MARINDUQUE CARE, a responsive single-page health and wellness educational website for residents of Marinduque, Philippines. Address the challenge of accessing understandable health education and organizing everyday wellness habits. Include three features: an interactive daily wellness checklist, educational healthy living tip cards, and a health resource guide that encourages consultation with qualified health professionals. Use semantic HTML, modern CSS, and vanilla JavaScript. Do not use external frameworks, backend services, databases, authentication, or external APIs. Do not provide diagnoses, personalized medical advice, or fabricated live health information. Generate index.html, style.css, and script.js. Ensure the layout works on mobile and desktop, interactive controls work with a mouse and keyboard, labels are accessible, and text is readable. Return complete code for each file and explain how to run and test the prototype.

**Actual Copilot Output:**  
[Paste the actual Copilot response here, or save generated files in `outputs/task-3-structured/`.]

**Comparison with Task 2:** [Identify at least two differences that are actually present.]

**What Worked:** [Complete after inspecting the response.]

**What Needs Improvement:** [Complete after inspecting the response.]

**Next Action / Verification:** Open the generated webpage and check the requested features, semantics, and mobile layout.

## Task 4A — Few-Shot Prompting

**Objective:** Use examples to encourage consistent formatting for wellness checklist items.

**Exact Prompt:**
> For MARINDUQUE CARE, create wellness checklist items using this format:
>
> Example 1:
> Item: Drink water regularly
> Category: Hydration
> Description: Make time to drink water throughout the day.
>
> Example 2:
> Item: Maintain a regular sleep schedule
> Category: Rest
> Description: Try to follow a consistent sleep and wake routine.
>
> Generate four additional general wellness habits using the same format. Render all items as an accessible interactive checklist using HTML, CSS, and vanilla JavaScript. Keep the advice general and educational.

**Actual Copilot Output:**  
[Paste actual response or reference `outputs/task-4a-few-shot/`.]

**Observation:** [Did the examples improve the consistency of the generated items? Use evidence from the output.]

**Next Action / Verification:** Check that all items follow the same format and that checklist controls work.

## Task 4B — Role Assignment

**Objective:** Ask for a review from a specialized accessibility perspective.

**Exact Prompt:**
> Act as a frontend accessibility reviewer. Examine my MARINDUQUE CARE HTML, CSS, and JavaScript. Identify issues with semantic HTML, keyboard navigation, accessible labels, color contrast, responsive layout, and clarity of health information. Recommend the two or three most important targeted improvements without expanding the project's scope. Do not assume a problem exists unless the supplied code supports that finding.

**Actual Copilot Output:**  
[Paste the actual review in this section or reference `outputs/task-4b-role-review.md`.]

**Observation:** [Identify the concerns Copilot actually raised and whether the supplied code supports them.]

**Next Action / Verification:** Apply a relevant improvement and test it.

## Task 5 — Structured Analysis and Refinement

**Objective:** Diagnose a real implementation weakness, make a targeted correction, and verify it.

**Exact Prompt:**
> Review the current MARINDUQUE CARE implementation against the original requirements. Check whether the wellness checklist functions correctly, the three requested features are present, semantic HTML is appropriate, keyboard interaction works, and the layout is usable on mobile screens. Based on the supplied code, identify the two most important confirmed issues. Recommend the smallest appropriate corrections, provide the updated code for the affected sections, and give a practical verification procedure. Do not claim a fix has been verified until it has actually been tested.

**Actual Copilot Output:**  
[Paste the actual analysis and recommendations here.]

**Selected Correction:** [Describe the correction you actually applied.]

**Verification Procedure:** [Record the steps you performed.]

**Verification Result:** [Record the observed result. Do not report success without testing.]

## Task 6 — Comparison and Final Reflection

| Technique | Observation |
|---|---|
| Zero-shot | [What did Copilot assume or omit?] |
| Structured prompt | [What improved after adding context and constraints?] |
| Few-shot | [What became more consistent?] |
| Role assignment | [What specialized concerns were identified?] |
| Structured analysis | [What correction was applied and verified?] |

**Final Reflection — complete after experiments:**

uong pinaka madali na ipa prompt ay uong task 2 pag prompt lang sa kanya nang gagawa nang fie title  marinduque care nagawa na agad niya but in hmtl lahat hindi pa siya na papahiwalay.

## Output preservation checklist

- [ ] Save the exact prompt and actual response for each experiment.
- [ ] Preserve the Task 2 baseline before changing files.
- [ ] Save the selected generated code for each milestone in the `outputs/` folder.
- [ ] Record real observations rather than expected results.
- [ ] Test the final page at desktop and mobile widths.
- [ ] Test checklist interaction with a mouse and keyboard.
- [ ] Include the final comparison and reflection.

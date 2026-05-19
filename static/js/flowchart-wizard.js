// ============================================
// Interactive Flowchart Wizard
// ============================================
// Reads flowchart data embedded in a <script type="application/json">
// and renders an interactive step-by-step wizard.

(function () {
  "use strict";

  function initWizard(wizardEl) {
    const dataEl = wizardEl.querySelector('script[type="application/json"]');
    if (!dataEl) return;

    let data;
    try {
      data = JSON.parse(dataEl.textContent);
    } catch (e) {
      console.error("Flowchart: invalid JSON data", e);
      return;
    }

    const stepEl = wizardEl.querySelector(".flowchart-step");
    const pathEl = wizardEl.querySelector(".flowchart-breadcrumb__path");
    const restartBtn = wizardEl.querySelector(".flowchart-breadcrumb__restart");

    if (!stepEl || !pathEl || !restartBtn) return;

    const history = [];

    function render(stepId) {
      const step = data.steps[stepId];
      if (!step) {
        console.error("Flowchart: step not found:", stepId);
        return;
      }

      history.push({ id: stepId, label: step.short || step.text });

      // Reset classes
      stepEl.classList.remove(
        "flowchart-step--success",
        "flowchart-step--failure"
      );
      if (step.type === "success") {
        stepEl.classList.add("flowchart-step--success");
      } else if (step.type === "failure") {
        stepEl.classList.add("flowchart-step--failure");
      }

      // Render text
      const textEl = document.createElement("div");
      textEl.className = "flowchart-step__text";
      textEl.textContent = step.text;

      // Render choices
      const choicesEl = document.createElement("div");
      choicesEl.className = "flowchart-step__choices";

      if (step.choices && step.choices.length > 0) {
        step.choices.forEach((choice) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "flowchart-step__choice";
          btn.textContent = choice.label;
          btn.addEventListener("click", () => render(choice.next));
          choicesEl.appendChild(btn);
        });
      }

      stepEl.innerHTML = "";
      stepEl.appendChild(textEl);
      stepEl.appendChild(choicesEl);

      // Render breadcrumb
      pathEl.innerHTML = "";
      history.forEach((h) => {
        const span = document.createElement("span");
        span.className = "flowchart-breadcrumb__item";
        span.textContent = h.label;
        pathEl.appendChild(span);
      });
    }

    function restart() {
      history.length = 0;
      render(data.start);
    }

    restartBtn.addEventListener("click", restart);
    restart();
  }

  document.addEventListener("DOMContentLoaded", () => {
    document
      .querySelectorAll(".flowchart-wizard")
      .forEach((el) => initWizard(el));
  });
})();

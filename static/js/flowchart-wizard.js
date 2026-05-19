// ============================================
// Interactive Flowchart Wizard - cascade layout
// ============================================
// Renders a vertical flowchart: previous steps stay visible as small
// rectangles connected by arrows, current step is the big one at the bottom.

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

    const historyEl = wizardEl.querySelector(".flowchart-history");
    const stepEl = wizardEl.querySelector(".flowchart-step");
    const restartBtn = wizardEl.querySelector(".flowchart-toolbar__restart");

    if (!historyEl || !stepEl || !restartBtn) return;

    const history = []; // array of { stepId, chosenLabel }

    function createNode(text, chosenLabel, type) {
      const node = document.createElement("div");
      node.className = "flowchart-node";
      if (type === "success") node.classList.add("flowchart-node--success");
      if (type === "failure") node.classList.add("flowchart-node--failure");

      const textEl = document.createElement("div");
      textEl.textContent = text;
      node.appendChild(textEl);

      if (chosenLabel) {
        const label = document.createElement("div");
        label.className = "flowchart-node--chosen-label";
        label.textContent = "↳ chose: " + chosenLabel;
        node.appendChild(label);
      }

      return node;
    }

    function createArrow() {
      const arrow = document.createElement("div");
      arrow.className = "flowchart-arrow";
      return arrow;
    }

    function renderHistory() {
      historyEl.innerHTML = "";
      history.forEach((h, i) => {
        if (i > 0) historyEl.appendChild(createArrow());
        const step = data.steps[h.stepId];
        historyEl.appendChild(
          createNode(step.short || step.text, h.chosenLabel, step.type)
        );
      });
      // Arrow connecting history to current step
      if (history.length > 0) {
        historyEl.appendChild(createArrow());
      }
    }

    function renderCurrent(stepId) {
      const step = data.steps[stepId];
      if (!step) return;

      stepEl.classList.remove(
        "flowchart-step--success",
        "flowchart-step--failure"
      );
      if (step.type === "success") {
        stepEl.classList.add("flowchart-step--success");
      } else if (step.type === "failure") {
        stepEl.classList.add("flowchart-step--failure");
      }

      const textEl = document.createElement("div");
      textEl.className = "flowchart-step__text";
      textEl.textContent = step.text;

      const choicesEl = document.createElement("div");
      choicesEl.className = "flowchart-step__choices";

      if (step.choices && step.choices.length > 0) {
        step.choices.forEach((choice) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "flowchart-step__choice";
          btn.textContent = choice.label;
          btn.addEventListener("click", () => goTo(choice.next, choice.label));
          choicesEl.appendChild(btn);
        });
      }

      stepEl.innerHTML = "";
      stepEl.appendChild(textEl);
      stepEl.appendChild(choicesEl);
    }

    function goTo(stepId, chosenLabel) {
      // Move current step into history, then render new current
      const currentStepId =
        history.length > 0
          ? history[history.length - 1].nextStepId
          : data.start;
      history.push({ stepId: currentStepId, chosenLabel: chosenLabel, nextStepId: stepId });
      renderHistory();
      renderCurrent(stepId);
    }

    function restart() {
      history.length = 0;
      renderHistory();
      renderCurrent(data.start);
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

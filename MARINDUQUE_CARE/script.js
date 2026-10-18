const checkboxes = Array.from(document.querySelectorAll(".habit-check"));
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");
const progressFill = document.getElementById("progress-fill");
const statusMessage = document.getElementById("status-message");
const resetButton = document.getElementById("reset-checklist");

function updateProgress() {
  const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
  const total = checkboxes.length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  progressLabel.textContent = `${completed} of ${total} habits completed`;
  progressPercent.textContent = `${percent}%`;
  progressBar.setAttribute("aria-valuenow", String(completed));
  progressBar.setAttribute("aria-valuemax", String(total));
  progressFill.style.width = `${percent}%`;

  if (completed === total) {
    statusMessage.textContent = "Great work checking in with yourself today!";
  } else if (completed > 0) {
    statusMessage.textContent = "Nice progress. Every small step counts.";
  } else {
    statusMessage.textContent = "Every small step counts. Choose a habit to begin.";
  }
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", updateProgress));

resetButton.addEventListener("click", () => {
  checkboxes.forEach((checkbox) => { checkbox.checked = false; });
  updateProgress();
  checkboxes[0]?.focus();
});

updateProgress();

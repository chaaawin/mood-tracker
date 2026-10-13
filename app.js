const STORAGE_KEY = "mood-garden-entries-v1";

const form = document.querySelector("#mood-form");
const noteInput = document.querySelector("#note");
const characterCount = document.querySelector("#character-count");
const moodError = document.querySelector("#mood-error");
const formStatus = document.querySelector("#form-status");
const entryList = document.querySelector("#entry-list");
const emptyState = document.querySelector("#empty-state");
const entryCount = document.querySelector("#entry-count");
const todayLabel = document.querySelector("#today-label");

let entries = loadEntries();

function loadEntries() {
  try {
    const storedEntries = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(storedEntries) ? storedEntries : [];
  } catch {
    return [];
  }
}

function saveEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function updateTodayLabel() {
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  todayLabel.textContent = `${formattedDate} · A quiet moment for yourself`;
}

function createEntryElement(entry) {
  const item = document.createElement("li");
  item.className = "entry-item";

  const emoji = document.createElement("span");
  emoji.className = "entry-emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = entry.emoji;

  const content = document.createElement("div");
  content.className = "entry-content";

  const title = document.createElement("h3");
  title.textContent = `Feeling ${entry.mood.toLowerCase()}`;

  const time = document.createElement("time");
  time.dateTime = entry.createdAt;
  time.textContent = formatDate(entry.createdAt);

  content.append(title, time);

  if (entry.note) {
    const note = document.createElement("p");
    note.textContent = entry.note;
    content.append(note);
  }

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-entry";
  deleteButton.type = "button";
  deleteButton.dataset.entryId = entry.id;
  deleteButton.setAttribute("aria-label", `Delete ${entry.mood} entry from ${formatDate(entry.createdAt)}`);
  deleteButton.textContent = "×";

  item.append(emoji, content, deleteButton);
  return item;
}

function renderEntries() {
  entryList.replaceChildren(...entries.map(createEntryElement));
  emptyState.hidden = entries.length > 0;
  entryList.hidden = entries.length === 0;
  entryCount.textContent = `${entries.length} ${entries.length === 1 ? "check-in" : "check-ins"}`;
}

function showMoodError(message) {
  moodError.textContent = message;
  const moodGroup = document.querySelector(".mood-grid");
  moodGroup.setAttribute("aria-invalid", message ? "true" : "false");
}

noteInput.addEventListener("input", () => {
  characterCount.textContent = noteInput.value.length;
});

form.addEventListener("change", (event) => {
  if (event.target.name === "mood") {
    showMoodError("");
    formStatus.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedMood = form.querySelector('input[name="mood"]:checked');
  if (!selectedMood) {
    showMoodError("Choose the mood that feels closest before saving.");
    form.querySelector('input[name="mood"]').focus();
    return;
  }

  const entry = {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`,
    mood: selectedMood.value,
    emoji: selectedMood.dataset.emoji,
    note: noteInput.value.trim(),
    createdAt: new Date().toISOString(),
  };

  entries = [entry, ...entries];
  saveEntries();
  renderEntries();
  form.reset();
  characterCount.textContent = "0";
  showMoodError("");
  formStatus.textContent = "Your check-in has been saved.";

  window.setTimeout(() => {
    formStatus.textContent = "";
  }, 3500);
});

entryList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-entry");
  if (!deleteButton) return;

  entries = entries.filter((entry) => entry.id !== deleteButton.dataset.entryId);
  saveEntries();
  renderEntries();
  formStatus.textContent = "The check-in was removed.";
});

updateTodayLabel();
renderEntries();

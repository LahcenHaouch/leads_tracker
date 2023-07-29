// Fetch leads from localStorage or initialize it to an empty array
let leads = JSON.parse(localStorage.getItem("leads")) ?? [];

const addLeadInput = document.querySelector("#add-lead-input");
const addLeadBtn = document.querySelector("#add-lead-btn");
const clearLeadBtn = document.querySelector("#clear-lead-btn");

const leadList = document.querySelector("#lead-list");

function saveInLocalStorage(elements) {
  localStorage.setItem("leads", JSON.stringify(elements));
}

function renderList(elements) {
  leadList.innerHTML = "";

  elements.forEach(({ id, value }) => {
    const leadElement = document.createElement("li");
    leadElement.textContent = value;

    const deleteLeadElement = document.createElement("button");
    deleteLeadElement.setAttribute("type", "button");
    deleteLeadElement.textContent = "X";

    deleteLeadElement.addEventListener("click", () => {
      leads = leads.filter(({ id: leadId }) => leadId !== id);
      saveAndDisplay(leads);
    });

    leadElement.appendChild(deleteLeadElement);

    leadList.appendChild(leadElement);
  });
}

function saveAndDisplay(leads) {
  saveInLocalStorage(leads);
  renderList(leads);
}

function deleteLead(id) {
  leads = leads.filter(({ id: leadId }) => leadId !== id);

  saveAndDisplay(leads);
}

function addLead(input) {
  if (!input.value) return;

  leads.push({
    id: crypto.randomUUID(),
    value: input.value,
  });
  input.value = "";

  saveAndDisplay(leads);
}

document.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    addLead(addLeadInput);
  }
});

addLeadBtn.addEventListener("click", () => {
  addLead(addLeadInput);
});

clearLeadBtn.addEventListener("click", () => {
  leads.length = 0;

  saveAndDisplay(leads);
});

renderList(leads);

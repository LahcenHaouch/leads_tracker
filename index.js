// Fetch leads from localStorage or initialize it to an empty array
let leads = JSON.parse(localStorage.getItem('leads')) ?? []

const addLeadInput = document.querySelector('#add-lead-input')
const addLeadBtn = document.querySelector('#add-lead-btn')
const leadList = document.querySelector('#lead-list')

function renderList(leads) {
  console.log({leads})

  leadList.innerHTML = leads.map((lead, index) => (`<li>${lead} <button type="button" onclick="deleteLead(${index})">X</button></li>`)).join('')
}

function saveInLocalStorage(elements) {
  localStorage.setItem('leads', JSON.stringify(elements))
}

function deleteLead(leadIndex) {
  if (leadIndex === 0) {
    leads = leads.slice(1)
  } else {
    console.log('first slice', leads.slice(0, leadIndex - 1))
    console.log('second slice', leads.slice(leadIndex + 1))

    leads = [...leads.slice(0, leadIndex), ...leads.slice(leadIndex + 1)]
  }
  
  saveInLocalStorage(leads)
  renderList(leads)
}

function addLead(input) {
  if (!input.value) return

  leads.push(input.value)
  // Update localStorage on each added lead
  saveInLocalStorage(leads)

  input.value = ''

  renderList(leads)
}

document.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter') {
    addLead(addLeadInput)
  }
})

addLeadBtn.addEventListener('click', () => {
  addLead(addLeadInput)
})

renderList(leads)

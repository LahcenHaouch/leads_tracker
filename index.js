const leads = []

const addLeadInput = document.querySelector('#add-lead-input')
const addLeadBtn = document.querySelector('#add-lead-btn')
const leadList = document.querySelector('#lead-list')

function resetInput(input) {
  input.value = ''
}

function renderList(listElement, leads) {
  listElement.innerHTML = leads.map(lead => (`<li>${lead}</li>`)).join('')
}

function addLead(input, leadList, leads) {
  if (!input.value) return

  leads.push(input.value)
  resetInput(input)
  renderList(leadList, leads)
}

document.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter') {
    addLead(addLeadInput, leadList, leads)
  }
})

addLeadBtn.addEventListener('click', () => {
  addLead(addLeadInput, leadList, leads)
})

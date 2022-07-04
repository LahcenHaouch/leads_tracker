const leads = []

const addLeadInput = document.querySelector('#add-lead-input')
const addLeadBtn = document.querySelector('#add-lead-btn')
const leadList = document.querySelector('#lead-list')

function resetInput() {
  addLeadInput.value = ''
}

function renderList() {
  leadList.innerHTML = leads.map(lead => (`<li>${lead}</li>`)).join('')
}

function addLead(value) {
  if (value) {
    leads.push(value)
    resetInput()
    renderList()
  }
}

document.addEventListener('keydown', ({key}) => {
  if (key === 'Enter') {
    addLead(addLeadInput.value)
  }
})

addLeadBtn.addEventListener('click', () => {
  addLead(addLeadInput.value)
})

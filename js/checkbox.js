const checkbox = document.querySelector('#checkbox');
const checkboxLabel = document.querySelector('.label-for-checkbox');

checkbox.addEventListener('click', () => {
  checkbox.classList.toggle('checked');
})


checkboxLabel.addEventListener('click', () => {
  checkbox.classList.toggle('checked');
})
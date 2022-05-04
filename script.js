const openElement = document.querySelector('.dropdownElementButton');
const content = document.querySelector('.dropdownElementContent');

openElement.addEventListener('click' openElement);

function openElement() {
  if(!content.classList.contains('active')){
    content.classList.toggle('active');
  }
}
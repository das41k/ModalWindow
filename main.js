const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
btn.addEventListener('click' , () => {
  btn.classList.add('modal--open') 
})
modal.addEventListener('click' , () => {
  modal.classList.remove('modal--open')
})
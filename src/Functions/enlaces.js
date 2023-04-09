// @ts-nocheck

window.document.addEventListener('DOMContentLoaded', () => {
  let buttons = document.querySelectorAll('.enlace');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      let target = e.currentTarget.getAttribute('href');
      // scroll to target - 160px offset for navbar
      window.scrollTo({
        top: document.querySelector(target).offsetTop - 160,
        behavior: 'smooth'
      });
    })
  })
})
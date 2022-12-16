const menuBtn = document.getElementById('menu-btn')
const menuItem = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  menuItem.classList.toggle('hidden')
  menuItem.classList.toggle('flex')
})
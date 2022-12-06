const fecharMenu = document.querySelector(".btn-close-menu-mobile")
const openMenu = document.getElementById("btn-open-menu-mobile")
const overlay = document.getElementById("overlay")
const menuMobile = document.getElementById("js-menu-mobile")


function overlayOff() {
  overlay.style.display = "none"
}
function overlayOn() {
  overlay.style.display = "block"
}

openMenu.addEventListener('click', () => {
  overlayOn();
  menuMobile.classList.remove('closed')
})


fecharMenu.addEventListener('click', () => {
  overlayOff()
  menuMobile.classList.add('closed')

})


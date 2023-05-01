const clicks = document.querySelectorAll(".click")
const sections = document.querySelectorAll("section")
const firstTop = sections[0].offsetTop
const secondTop = sections[1].offsetTop



clicks[0].onclick = function() {
  window.scroll({top: firstTop, behavior: 'smooth'})
}
clicks[1].onclick = function() {
  window.scroll({top: secondTop, behavior: 'smooth'})
}

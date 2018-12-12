// Opening and closing of slide-out case studies
function closeCase() {
  const side = document.getElementById('side-bar');
  const body = document.getElementById('noscroll');
  side.style.width = "0%"
  body.classList.remove("noscroll");
}
function openCase() {
  const sideBar = document.getElementById('side-bar')
  const body = document.getElementById('noscroll')
  sideBar.style.width = "60%"
  body.classList.add("noscroll");
}
// Listens for esc key when viewing slide-out case studies
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) { closeCase() };
})

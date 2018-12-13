// Opening and closing of slide-out case studies
const media = window.matchMedia("(max-width: 700px)")

function closeCase() {
  const side = document.getElementById('side-bar');
  const body = document.getElementById('noscroll');
  side.style.width = "0%"
  body.classList.remove("noscroll");
}
function openCase(media) {
  const sideBar = document.getElementById('side-bar')
  const body = document.getElementById('noscroll')
  if (media.matches) {
    sideBar.style.width = "100%";
  } else {
    sideBar.style.width = "60%";
  };
  body.classList.add("noscroll");
}
// Listens for esc key when viewing slide-out case studies
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) { closeCase() };
})

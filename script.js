// Opening and closing of slide-out case studies
function closeCase() {
  document.getElementById("side-bar").style.width = "0px";
}
function openCase() {
  document.getElementById("side-bar").style.width = "60%";
}

// Listens for esc key when viewing slide-out case studies
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) { closeCase() };
})

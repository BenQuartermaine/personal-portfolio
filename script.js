// Opening and closing of slide-out case studies
function closeCase() {
  document.getElementById("side-bar").style.display = "none";
}
function openCase() {
  document.getElementById("side-bar").style.display = "block";
}

// Listens for esc key when viewing slide-out case studies
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) { closeCase() };
})

// Opening and closing of slide-out case studies
function closeCase(id) {
  const side = document.getElementById(`side-bar-${id}`);
  const body = document.getElementById('noscroll');
  side.style.width = "0%";
  // body.classList.remove("noscroll");
}
function openCase(id) {
  const media = window.matchMedia("(max-width: 700px)");
  const side = document.getElementById(`side-bar-${id}`);
  const body = document.getElementById('noscroll');
  if (media.matches) {
    side.style.width = "100%";
  } else {
    side.style.width = "60%";
  }
  body.classList.add("noscroll");
}
// Listens for esc key when viewing slide-out case studies
document.body.addEventListener("keydown", function (e) {
  if (e.keyCode === 27) { 
    document.getElementById("side-bar-cloudsuite").style.width = "0%";
    document.getElementById("side-bar-mirror").style.width = "0%";
    document.getElementById("side-bar-mindrock").style.width = "0%";
    document.getElementById('noscroll').classList.remove("noscroll");
  }
});

// KONAMI CODE!!
  const keysPressed = [];
  const secretCode = 'helloworld';

  window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    keysPressed.splice(-keysPressed.length - 1, keysPressed.length - secretCode.length);
    string = keysPressed.join('');
    if (string === secretCode) {
      const answer = 'steam';
      const riddle = prompt('What goes up when the rain comes down?');
      if (riddle.includes('steam') || riddle.includes('umbrella')) {
        alert('nailed it!');
      } else {
        alert('unluuucky');
      }
    }
  });

const pages = document.querySelectorAll('.page');
let current = 0;

function changePage(direction) {
  pages[current].classList.remove('active');
  current += direction;
  if (current < 0) current = 0;
  if (current >= pages.length) current = pages.length - 1;
  pages[current].classList.add('active');

  if (current === pages.length - 1) {
    setTimeout(showPopups, 1500);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const lyrics = [
  "My soul aches for you",
  "You belong with me",
  "Yeah, I was made for you",
  "And you were made for me"
];

let popupIndex = 0;

function showPopups() {
  if (popupIndex >= lyrics.length) {
    crashSite();
    return;
  }

  let popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "30%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#c0c0c0";
  popup.style.color = "#000";
  popup.style.border = "2px solid #000";
  popup.style.padding = "20px";
  popup.style.width = "300px";
  popup.style.boxShadow = "5px 5px #888";
  popup.style.zIndex = 9999;
  popup.style.fontFamily = "monospace";

  let title = document.createElement("h3");
  title.innerText = "Te quiero";
  title.style.marginBottom = "10px";
  popup.appendChild(title);

  let text = document.createElement("p");
  text.innerText = lyrics[popupIndex];
  popup.appendChild(text);

  let btn = document.createElement("button");
  btn.innerText = "OK";
  btn.style.marginTop = "15px";
  btn.onclick = () => {
    document.body.removeChild(popup);
    popupIndex++;
    showPopups();
  };
  popup.appendChild(btn);

  document.body.appendChild(popup);
}

function crashSite() {
  document.body.innerHTML = "";
  document.body.style.background = "#000";
  let glitch = document.createElement("div");
  glitch.innerHTML = "<h1 style='color: red; text-align:center; margin-top:40vh; font-family:monospace;'>SYSTEM FAILURE</h1>";
  document.body.appendChild(glitch);
}

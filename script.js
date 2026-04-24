fetch("/logicallyforgotten/menu.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);
  });

function toggleMenu() {
    const menu = document.getElementById("menu");

    if (!menu) {
        console.log("menu not loaded yet");
        return;
    }

    menu.classList.toggle("hidden");
}

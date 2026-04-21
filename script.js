fetch("menui.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);

    document.querySelector(".menu-btn")
      .addEventListener("click", toggleMenu);
  });

function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
}

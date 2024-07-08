var area = document.querySelector(".custom_cursor");

window.addEventListener("mousemove", function (details) {
  area.style.left = details.clientX + "px";
  area.style.top = details.clientY + "px";
  area.style.opacity = "1";
});

window.addEventListener("mouseleave", function () {
  area.style.opacity = "0";
});

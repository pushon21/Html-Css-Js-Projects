var obj = document.querySelectorAll("#obj");
var img = document.querySelectorAll("#obj img");

obj.forEach(function (val) {
  val.addEventListener("mousemove", function (details) {
    val.childNodes[3].style.left = details.clientX + "px";
    val.childNodes[3].style.top = details.clientY + "px";
    val.childNodes[3].style.opacity = "1";
  });

  val.addEventListener("mouseleave", function (details) {
    val.childNodes[3].style.opacity = "0";
  });
});

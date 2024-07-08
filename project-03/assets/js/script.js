window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("#rect");
  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect", {
    left: xval + "px",
    ease: "power3.inout",
  });
});

var win = document.querySelector(".main_section");
win.addEventListener("mousemove", function (direction) {
  var winlocation = win.getBoundingClientRect();
  var insidewin = direction.clientX - winlocation.left;
  console.log(insidewin);

  var leftBackgroundImage = "url('assets/image/sun.png')";
  var rightBackgroundImage = "url('assets/image/moon.png')";
  var blackbg = "black";

  if (insidewin < winlocation.width / 2) {
    gsap.to(win, {
      backgroundImage: leftBackgroundImage,
      ease: "power2.inout",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundColor: blackbg,
    });
  } else {
    gsap.to(win, {
      backgroundImage: rightBackgroundImage,
      ease: "power2.inout",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundColor: blackbg,
    });
  }
});

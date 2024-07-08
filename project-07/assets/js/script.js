var rect = document.querySelector("#obj");
rect.addEventListener("mousemove", function (details) {
  var rectLoc = rect.getBoundingClientRect();
  var insiderect = details.clientX - rectLoc.left;
  var green = gsap.utils.mapRange(0, rectLoc.width / 2, 255, 0, insiderect);
  var blue = gsap.utils.mapRange(
    rectLoc.width / 2,
    rectLoc.width,
    0,
    255,
    insiderect
  );

  if (insiderect < rectLoc.width / 2) {
    gsap.to(rect, {
      backgroundColor: `rgb(0,${green},0)`,
      ease: "power2.inout",
    });
    gsap.to(rect, {
      width: 700 + "px",
      ease: "power3.inout",
    });
  } else {
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blue})`,
      ease: "power2.inout",
    });

    gsap.to(rect, {
      width: 700 + "px",
      ease: "power3.inout",
    });
  }

  rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
      backgroundColor: "#000",
      width: "650px",
      ease: "power3.inout",
      delay: 0.1,
    });
  });
});

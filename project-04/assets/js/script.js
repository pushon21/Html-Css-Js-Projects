window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("#rect");

  var rectmap = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  console.log(details.clientX);

  gsap.to("#rect", {
    left: rectmap + "px",
    ease: "power2.inout",
  });
});

window.addEventListener("mousemove", function (Ydetails) {
  var Yrect = document.querySelector("#rect");
  var Tmap = gsap.utils.mapRange(
    0,
    window.innerHeight,
    Yrect.getBoundingClientRect().height / 2,
    window.innerHeight - Yrect.getBoundingClientRect().width / 2
    
  );
});

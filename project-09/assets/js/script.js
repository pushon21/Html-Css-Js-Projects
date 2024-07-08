var rect = document.querySelector("#obj");
rect.addEventListener("mousemove", function (details) {
  rectloc = rect.getBoundingClientRect();
  insiderect = details.clientX - rectloc.left;

  console.log(insiderect);

  var greenColor = gsap.utils.mapRange(
    0,
    rectloc.width / 2,
    255,
    0,
    insiderect
  );
  var redColor = gsap.utils.mapRange(
    rectloc.width / 2,
    rectloc.width,
    0,
    255,
    insiderect
  );
  if (insiderect < rectloc.width / 2) {
    gsap.to(rect, {
      backgroundColor: `rgb(0,${greenColor},0)`,
      ease: "power2.inout",
    });
  } else {
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: "power2.inout",
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "#000",
    ease: "power2.inout",
  });
});

const obj = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
document.querySelector("#obj").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    var div = document.createElement("div");
    div.classList.add("newdiv");
    document.body.appendChild(div);

    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var img = document.createElement("img");
    var imageSrc = "assets/image/gun.png";
    img.setAttribute("src", imageSrc);
    div.appendChild(img);

    gsap.to(img, {
      y: "0",
      ease: "power2.inout",
    });

    gsap.to(img, {
      y: "100%",
      ease: "power3.inout",
      delay: 1,
    });

    setTimeout(function () {
      div.remove();
    }, 1000);
  }, 500)
);

const obj = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

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
    var imageSrc = "assets/image/klipartz.com.png";
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

const btn = document.querySelector("#throttle");
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

document.querySelector(".obj").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    var div = document.createElement("div");
    div.classList.add("newdiv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";
    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://pixlr.com/images/index/ai-image-generator-two.webp"
    );
    gsap.to(img, {
      y: "0",
      ease: "power2",
      duration: 0.5,
    });

    gsap.to(img, {
      y: "100%",
      ease: "power2",
      delay: 1,
    });
    // img is appended in div
    div.appendChild(img);
    // showing div in the html body
    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);

    console.log("clicked");
  }, 500)
);

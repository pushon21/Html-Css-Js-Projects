// var obj = document.querySelector("#obj");
// obj.addEventListener("mousemove", function (details) {
//   var objlocation = obj.getBoundingClientRect();
//   var insideobjX = details.clientX;
//   var insideobjY = details.clientY;
//   console.log(insideobjX);
//   console.log(insideobjY);
// });
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

document.querySelector("#obj").addEventListener(
  "mousemove",
  throttleFunction((details) => {
    var div = document.createElement("div");
    div.classList.add("newDiv");

    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://i.pinimg.com/originals/2d/08/37/2d0837843d2f86a726945c574795c55b.gif"
    );

    gsap.to(img, {
      y: "0",
      ease: "power2",
      duration: 0.6,
    });

    gsap.to(img, {
      y: "100%",
      ease: "power3",
      delay: 1,
    });

    div.appendChild(img);

    document.body.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);

    console.log("button is clicked");
  }, 400)
);

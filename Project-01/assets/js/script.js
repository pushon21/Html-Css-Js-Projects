// var a = document.querySelector("h1");
// a.innerHTML = "Changed";
// a.style.color = "red";
// a.addEventListener("click", function () {
//   a.style.color = "black";
//   a.style.fontSize = "55px";
// });

// Code show error here.....

// var rect = document.querySelector("#center");
// rect.addEventListener("mousemove", function (details) {
//   var rectlocation = rect.getBoundingClientRect();
//   var insiderect = details.clientX - rectlocation.left;
//   console.log(insiderect);
//   if (insiderect < rectlocation.width / 2) {
//     console.log(
//       gsap.utils.mapRange(0, rectlocation.width / 2, 255, 0, insiderect)
//     );
//     gsap.to(rect, {
//       backgroundColor: `rgb(${redcolor}, 0, 0)`,
//       ease: Power4.inOut,
//     });
//   } else {
//     console.log("right");
//   }
// });

// solve error here.....
// var rect = document.querySelector("#center");
// rect.addEventListener("mousemove", function (details) {
//   var rectlocation = rect.getBoundingClientRect();
//   var insiderect = details.clientX - rectlocation.left;
//   console.log(insiderect);

//   var redcolor = gsap.utils.mapRange(
//     0,
//     rectlocation.width / 2,
//     255,
//     0,
//     insiderect
//   );

//   if (insiderect < rectlocation.width / 2) {
//     console.log(redcolor);
//     gsap.to(rect, {
//       backgroundColor: `rgb(${redcolor}, 0, 0)`,
//       ease: "power4.inOut", // Use string for the ease parameter
//     });
//   } else {
//     console.log("right");
//   }
// });

//once again code here.....

var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
  var objectlocation = rect.getBoundingClientRect();
  var insideObject = details.clientX - objectlocation.left;
  console.log(insideObject);
  var redcolor = gsap.utils.mapRange(
    0,
    objectlocation.width / 2,
    255,
    0,
    insideObject
  );

  var bluecolor = gsap.utils.mapRange(
    objectlocation.width / 2,
    objectlocation.width,
    0,
    255,
    insideObject
  );

  if (insideObject < objectlocation.width / 2) {
    console.log(redcolor);

    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor}, 0, 0)`,
      ease: "power2.inout",
    });
  } else {
    console.log(redcolor);
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${bluecolor})`,
      ease: "power2.inout",
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "White",
  });
});

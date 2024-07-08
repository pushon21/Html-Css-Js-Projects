var header = document.querySelector(".header");
header.addEventListener("mousemove", function (details) {
  var headerLocation = header.getBoundingClientRect();
  var insideHeader = details.clientX - headerLocation.left;

  console.log(insideHeader);

  var green = gsap.utils.mapRange(
    0,
    headerLocation.width / 2,
    175,
    0,
    insideHeader
  );

  var blue = gsap.utils.mapRange(
    headerLocation.width / 2,
    headerLocation.width,
    0,
    175,
    insideHeader
  );
  if (insideHeader < headerLocation.width / 2) {
    gsap.to(header, {
      backgroundColor: `rgb(0,${green},0)`,

      ease: "power2.inout",
    });
  } else {
    gsap.to(header, {
      backgroundColor: `rgb(0,0,${blue})`,
      ease: "power2.inout",
    });
  }
});

header.addEventListener("mouseleave", function () {
  gsap.to(header, {
    backgroundColor: "#ff4500",
  });
});

var mainSection = document.querySelector("#main");
mainSection.addEventListener("mousemove", function (sdetails) {
  var sectionLocation = mainSection.getBoundingClientRect();
  var insideSection = sdetails.clientY - sectionLocation.top; // Correct way to calculate the position within the section
  console.log(insideSection);

  var sgreen = gsap.utils.mapRange(
    0,
    sectionLocation.height / 2,
    175,
    0,
    insideSection
  );
  var sred = gsap.utils.mapRange(
    sectionLocation.height / 2,
    sectionLocation.height,
    0,
    175,
    insideSection
  );

  if (insideSection < sectionLocation.height / 2) {
    gsap.utils.to(mainSection, {
      backgroundColor: `rgb(0, ${sgreen}, 0)`,
      ease: "power2.inOut", // Corrected ease parameter value
    });
  } else {
    gsap.utils.to(mainSection, {
      backgroundColor: `rgb(${sred}, 0, 0)`,
      ease: "power2.inOut", // Corrected ease parameter value
    });
  }
});

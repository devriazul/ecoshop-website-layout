// Selector Element
const menuBtn = document.querySelector("#menu-bar");
const menuClosed = document.querySelector("#close");
const navBar = document.querySelector(".navbar");
const smallImage1 = document.querySelectorAll(".small-img-1");
const bigImage1 = document.querySelector(".big-img-1");
const smallImage2 = document.querySelectorAll(".small-img-2");
const bigImage2 = document.querySelector(".big-img-2");
const smallImage3 = document.querySelectorAll(".small-img-3");
const bigImage3 = document.querySelector(".big-img-3");
const themeToggler = document.querySelector("#theme-toggler");
// Add evemtlistener
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
menuClosed.addEventListener("click", () => {
  navBar.classList.remove("active");
});
window.addEventListener("scroll", () => {
  navBar.classList.remove("active");
});
// Theme Change
themeToggler.addEventListener("click", () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.querySelector("body").classList.add("active");
  } else {
    document.querySelector("body").classList.remove("active");
  }
});
// Featured product function
smallImage1.forEach((image) => {
  image.addEventListener("click", () => {
    let imagSrc = image.getAttribute("src");
    bigImage1.src = imagSrc;
  });
});
smallImage2.forEach((image) => {
  image.addEventListener("click", () => {
    let imagSrc = image.getAttribute("src");
    bigImage2.src = imagSrc;
  });
});
smallImage3.forEach((image) => {
  image.addEventListener("click", () => {
    let imagSrc = image.getAttribute("src");
    bigImage3.src = imagSrc;
  });
});
// Count down timer funtion
const countDate = new Date("dec 11 , 2021 00:00:00").getTime();
const countDown = () => {
  let now = new Date().getTime();
  let gap = countDate - now;
  let sec = 1000;
  let min = sec * 60;
  let hour = min * 60;
  let day = hour * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / min);
  let s = Math.floor((gap % min) / sec);
  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
};
setInterval(() => {
  countDown();
}, 1000);

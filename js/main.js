// Check to see if Media-Queries are supported to switch favicon icon
if (window.matchMedia) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    let dark_icon = document.getElementById("favicon");
    dark_icon.href = "../assets/logo.svg";
  } else {
    let light_icon = document.getElementById("favicon");
    light_icon.href = "../assets/schedule-logo.svg";
  }
} else {
  let light_icon = document.getElementById("favicon");
  light_icon.href = "../assets/schedule-logo.svg";
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function toSchedule() {
  const schedule = document.getElementById("schedule");
  schedule.scrollIntoView({ behavior: "smooth" });
}
function contactUs() {
  const contact = document.getElementById("contact");
  contact.scrollIntoView({ behavior: "smooth" });
}
function menuToggle(e) {
  e.classList.toggle("change");
}

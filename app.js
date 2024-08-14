let d = document.querySelectorAll(".switcher");
localStorage.getItem("color-theme") === "dark" || !("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
d.forEach(t => {
  t.addEventListener("click", function () {
    localStorage.getItem("color-theme") ? localStorage.getItem("color-theme") === "light" ? (document.documentElement.classList.add("dark"),
      localStorage.setItem("color-theme", "dark")) : (document.documentElement.classList.remove("dark"),
        localStorage.setItem("color-theme", "light")) : document.documentElement.classList.contains("dark") ? (document.documentElement.classList.remove("dark"),
          localStorage.setItem("color-theme", "light")) : (document.documentElement.classList.add("dark"),
            localStorage.setItem("color-theme", "dark"))
  })
}
);
let i = document.querySelectorAll(".tab")
  , a = document.querySelector(".tab-indicator")
  , u = document.querySelectorAll(".panel")
  , m = document.querySelectorAll(".panel-preview");
a !== null && (a.style.width = i[0].getBoundingClientRect().width + "px",
  a.style.left = i[0].getBoundingClientRect().left - i[0].parentElement.getBoundingClientRect().left + "px");
i.forEach(t => {
  t.addEventListener("click", () => {
    let r = t.getAttribute("aria-controls");
    a.style.width = t.getBoundingClientRect().width + "px",
      a.style.left = t.getBoundingClientRect().left - t.parentElement.getBoundingClientRect().left + "px",
      u.forEach(o => {
        let c = o.getAttribute("id");
        r === c ? (o.classList.remove("invisible", "opacity-0", "scale-90"),
          o.classList.add("visible", "opacity-100", "scale-100")) : (o.classList.add("invisible", "opacity-0", "scale-90"),
            o.classList.remove("visible", "opacity-100", "scale-100")),
          m.forEach(e => {
            let l = e.getAttribute("data-target");
            r === l ? (e.classList.replace("translate-y-[100%]", "translate-y-0"),
              e.classList.replace("scale-75", "scale-100"),
              e.classList.replace("opacity-50", "opacity-100"),
              e.classList.replace("z-0", "z-10")) : (e.classList.replace("scale-100", "scale-75"),
                e.classList.replace("opacity-100", "opacity-50"),
                e.classList.replace("z-10", "z-0"),
                setTimeout(() => {
                  e.classList.replace("translate-y-0", "translate-y-[100%]")
                }
                  , 300),
                clearTimeout())
          }
          )
      }
      )
  }
  )
}
);

const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('navbar-active');
});

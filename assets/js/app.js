let accordion = document.querySelectorAll(".accord_items");
let accordion_item_1 = document.querySelector(".accord_items");
let txt = document.querySelector(".disp_text");
let svg_icons = document.querySelector(".svg_icon");
txt.style.display = "block";
svg_icons.style.transform = "rotate(180deg)";
accordion.forEach(element => {
    let text = element.querySelector(".disp_text");
    let svg = element.querySelector(".svg_icon");
    let btn = element.querySelector(".click_btn");
    btn.addEventListener("click", () => {
        accordion.forEach(other => {
            if (other !== element) {
                let txt = other.querySelector(".disp_text");
                let svg = other.querySelector(".svg_icon");
                txt.style.display = "none";
                svg.style.transform = "rotate(0deg)";
            }
        });
        let text_disp = window.getComputedStyle(text).display;
        if (text_disp === "none") {
            text.style.display = "block";
            svg.style.transform = "rotate(180deg)";
        } else {
            text.style.display = "none";
            svg.style.transform = "rotate(0deg)";
        }
    });
});

let label = document.querySelector(".menubar");
let body = document.body;
let sm_screen = document.querySelector(".max-lg-view");
label.addEventListener("click", () => {
    body.style.overflow = "hidden";
    sm_screen.classList.toggle("show");
    let nav_items = document.querySelectorAll(".hover_effect");
    nav_items.forEach(otherElement => {
        otherElement.addEventListener("click", () => {
            sm_screen.classList.remove("show");
            body.style.overflow = "auto";
        });
    });
    if (sm_screen.classList.contains("show")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
});
let scroll_top = document.querySelector(".scroll_to_top");
let scrollPt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }
    scroll_top.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});


gsap.from(".scroll_to_top", {
    duration: 0.5,
    repeat: -1,
    y: 20,
    yoyo: true,
});

let loader = document.querySelector(".preloader");
loader.classList.remove("pos");
setTimeout(() => {
    loader.classList.add("pos");
}, 3000);
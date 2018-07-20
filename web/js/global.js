// menu logic
function toggle_menu() {
    let nav_btn_array = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav_btn_array.length; i++) {
        nav_btn_array[i].classList.toggle("nav-responsive");
    }
}
function hide_menu() {
    let nav_btn_array = document.getElementsByClassName("nav-link");
    for (let i = 0; i < nav_btn_array.length; i++) {
        nav_btn_array[i].classList.remove("nav-responsive");
    }
}
// modal logic

function connectModalAndTrigger(modalId, triggerId) {
    // Find connections
    let modal = document.getElementById(modalId);
    let modalOpenBtn = document.getElementById(triggerId);
    let modalCloseBtn = modal.getElementsByClassName("modal-close-btn")[0];

    // Add events
    modalOpenBtn.onclick = function () { modal.style.display = "block"; }
    modalCloseBtn.onclick = function () { modal.style.display = "none"; }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

connectModalAndTrigger('modal-1', "modal-1-open-btn");

// index testimonial fade scroll logic
let slideIndex = 0;
if (window.location.pathname.split("/").pop() === "index.html") {
    cycle_slides();
}
function cycle_slides() {
    let slide_array = document.getElementsByClassName("slide");

    for (let i = 0; i < slide_array.length; i++) {
        slide_array[i].classList.add("slide-off");
        slide_array[i].classList.remove("slide-on");
    }

    slideIndex++;
    if (slideIndex > slide_array.length) { slideIndex = 1 }
    slide_array[slideIndex - 1].classList.remove("slide-off");
    slide_array[slideIndex - 1].classList.add("slide-on");

    setTimeout(cycle_slides, 6000); //time interval must match css
}

// FAQ Logic
let accordions = document.getElementsByClassName("accordion");
if (accordions != undefined && accordions.length > 0) {
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("accordion-active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

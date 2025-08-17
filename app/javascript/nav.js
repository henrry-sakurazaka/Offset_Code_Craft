"use strict";

// navigation animation ////////////////////////////////////////////

document.addEventListener("mousemove", function() {
    const center = document.querySelector(".center");
    const nav = document.querySelector(".navi");
    const dot = document.querySelector(".dot");
    const top = document.querySelector(".top");
    const about = document.querySelector(".about");
    const contact = document.querySelector(".contact");
    const nav_array = [ top, about, contact ].filter(Boolean);

    nav.addEventListener("mouseover", function() {
      center.classList.add("inview");   
    });
    nav.addEventListener("mouseleave", function() {
      center.classList.remove("inview");
    });
    nav_array.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        if(el === e.target) {
          dot.classList.add("animate__animated");
        }
      })
      el.addEventListener("mouseleave", (e) => {
        if (e.target === el) {
          dot.classList.remove("animate__animated");
        }
      });
    }); 
  });

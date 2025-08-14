"use strict";

// navigation animation ////////////////////////////////////////////

document.addEventListener("mousemove", function() {
    const center = document.querySelector(".center");
    const nav = document.querySelector(".navi");
    const dot = document.querySelector(".dot");
    const slide_in = document.querySelector(".slide-in-nav");
    const slide_in2 = document.querySelector(".slide-in-nav2");
    const slide_in3 = document.querySelector(".slide-in-nav3");
    const slide_array = [slide_in, slide_in2, slide_in3]
  
    nav.addEventListener("mouseover", function() {
  
      center.classList.add("inview");
      
    });

    nav.addEventListener("mouseleave", function() {
  
      center.classList.remove("inview");
    });
  
    slide_array.forEach((slide) => {
      slide.addEventListener("mouseover", function() {
        dot.classList.add("animate__animated");
      });  
      slide.addEventListener("mouseleave", function() {
        dot.classList.remove("animate__animated")
      });
    })  
  });
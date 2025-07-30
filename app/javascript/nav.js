"use strict";

// navigation animation ////////////////////////////////////////////

document.addEventListener("mousemove", function() {
    const center = document.querySelector(".center");
    const nav = document.querySelector(".navi");
    const dot = document.querySelector(".dot");
    const about = document.querySelector(".about");
  
    nav.addEventListener("mouseover", function() {
  
      center.classList.add("inview");
      
    });
  
    nav.addEventListener("mouseleave", function() {
  
      center.classList.remove("inview");
    });
  
    about.addEventListener("mouseover", function() {
      dot.classList.add("animate__animated");
    });
  
    about.addEventListener("mouseleave", function() {
      dot.classList.remove("animate__animated")
    });
  });
"use strict";

  // nav /////////////////////////////////////////////////////////

  document.addEventListener("mousemove", function() {
    const center = document.querySelector(".center");
    const nav = document.querySelector(".navi");
    const dot = document.querySelector(".dot");
    const top = document.querySelector(".top");


    nav.addEventListener("mouseover", function() {

    center.classList.add("inview");
    });

    nav.addEventListener("mouseleave", function() {

    center.classList.remove("inview");
    });

    top.addEventListener("mouseover", function() {
      dot.classList.add("animate__animated");
    });
  
    top.addEventListener("mouseleave", function() {
      dot.classList.remove("animate__animated")
    });
});


// nav サイドバー\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////



// $(document).on("mousemove", function() {
//   const center = $(".center");
//   const nav = $(".navi");
//   const dot = $(".dot");
//   const about = $(".about");

//   nav.on("mouseover", function() {
//     center.addClass("inview");
//   });

//   nav.on("mouseleave", function() {
//     center.removeClass("inview");
//   });

//   about.on("mouseover", function() {
//     dot.addClass("animate__animated");
//   });

//   about.on("mouseleave", function() {
//     dot.removeClass("animate__animated");
//   });
// });

// プログレスバー・・・・・・・\\\\\\\\\\\\\\\\\\/////////////////////////

// $(document).ready(function() {
//   $(window).on("scroll", function() {
//     var h1 = window.pageYOffset;
//     var h2 = window.innerHeight;
//     var h3 = document.documentElement.offsetHeight;
//     const prg = $('progress');
//     var v = parseInt((h1 / (h3 - h2)) * 100);
//     prg.val(v);
//   });

//   const options = {
//     rootMargin: "96px",
//     threshold: 1
//   };  
// });

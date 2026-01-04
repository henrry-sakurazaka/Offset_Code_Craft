
"use strict";

// document.addEventListener('DOMContentLoaded', function() {});


const mouseStalker = document.getElementById("g-ms");

let msPos = {
  s: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2,
  },

  m: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2,
  },
};

document.addEventListener("mousemove", function (e) {
  msPos.m.x = e.clientX;
  msPos.m.y = e.clientY;
});

requestAnimationFrame(msPosUpdate);

    function msPosUpdate() {
      msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
      msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
      const x = Math.round(msPos.s.x * 10) / 10;
      const y = Math.round(msPos.s.y * 10) / 10;

      mouseStalker.style.transform = `translate(` + x + "px," + y + "px, 0)";
      requestAnimationFrame(msPosUpdate);
    }

const stalkerLinkObj = document.querySelectorAll("a");

    for (let i = 0; i < stalkerLinkObj.length; i++) {
      stalkerLinkObj[i].addEventListener("mouseover", function (e) {
        mouseStalker.classList.add("g-ms-hover");
      });

      stalkerLinkObj[i].addEventListener("mouseout", function (e) {
        mouseStalker.classList.remove("g-ms-hover");
      });
    }

const stalkerPushBtn = document.querySelectorAll(".btn");

    for (let i = 0; i < stalkerPushBtn.length; i++) {
      stalkerPushBtn[i].addEventListener("mouseover", function (e) {
        mouseStalker.classList.add("g-ms-hover");
      });

      stalkerPushBtn[i].addEventListener("mouseout", function (e) {
        mouseStalker.classList.remove("g-ms-hover");
      });
    }
const captionHover = document.querySelectorAll(".works-text");

    for (let i = 0; i < captionHover.length; i++) {
      captionHover[i].addEventListener("mouseover", function (e) {
        mouseStalker.classList.add("g-ms-hover");
      });

      captionHover[i].addEventListener("mouseout", function (e) {
        mouseStalker.classList.remove("g-ms-hover");
      });
    }

let cursorR = 4;

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
});

const linkElem = document.querySelectorAll("a");

    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener("mouseover", function (e) {
        cursor.classList.add("hov_");
      });
      linkElem[i].addEventListener("mouseout", function (e) {
        cursor.classList.remove("hov_");
      });
    }

let hovFlag = false;

document.addEventListener("mousemove", function (e) {
    if (!hovFlag) {
      mouseStalker.style.transform =
        "translate(" + e.clientX + "px, " + e.clientY + "px)";
    }
  });

const linkElm = document.querySelectorAll("a:not(.no_stick_");

    for (let i = 0; i < linkElm.length; i++) {
      linkElm[i].addEventListener("mouseover", function (e) {
        hovFlag = true;

        mouseStalker.classList.add("hov");

        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + rect.width / 2;
        let posY = rect.top + rect.height / 2;

        mouseStalker.style.transform = "translate(" + posX + "px," + posY + "px)";
      });

  linkElm[i].addEventListener("mouseout", function (e) {
    hovFlag = false;

    mouseStalker.classList.remove("hov");
  });
}

const hovBtn = document.querySelectorAll(".btn");

    for (let i = 0; i < hovBtn.length; i++) {
      hovBtn[i].addEventListener("mouseover", function (e) {
        hovFlag = true;

        mouseStalker.classList.add("hov");

        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + rect.width / 2;
        let posY = rect.top + rect.height / 2;

        mouseStalker.style.transform = "translate(" + posX + "px," + posY + "px)";
      });

  hovBtn[i].addEventListener("mouseout", function (e) {
    hovFlag = false;

    mouseStalker.classList.remove("hov");
  });
 }

const eventHandler = document.querySelectorAll(".works-text");

    for (let i = 0; i < eventHandler.length; i++) {
      eventHandler[i].addEventListener("mouseover", function (e) {
        hovFlag = true;

        mouseStalker.classList.add("hov");

        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + rect.width / 2;
        let posY = rect.top + rect.height / 2;

        mouseStalker.style.transform = "translate(" + posX + "px," + posY + "px)";
      });

  eventHandler[i].addEventListener("mouseout", function (e) {
    hovFlag = false;

    mouseStalker.classList.remove("hov");
  });
} 


  const circleID = document.getElementById('g-ms');
  const pointer = document.getElementById('cursor');
  const circle = document.querySelector('.g-ms_i');

      if(window.innerWidth < 800 ) {
          
        circleID.parentNode.removeChild(circleID);
        pointer.parentNode.removeChild(pointer);
        circle.classList.remove('g-ms_i');
      }
  

// JQueryの場合　/////////////////////////////////////////////////////////

// "use strict";

// $(document).ready(function() {
//   const mouseStalker = $("#g-ms");

//   let msPos = {
//     s: {
//       x: document.documentElement.clientWidth / 2,
//       y: document.documentElement.clientHeight / 2,
//     },
//     m: {
//       x: document.documentElement.clientWidth / 2,
//       y: document.documentElement.clientHeight / 2,
//     },
//   };

//   $(document).on("mousemove", function(e) {
//     msPos.m.x = e.clientX;
//     msPos.m.y = e.clientY;
//   });

//   requestAnimationFrame(msPosUpdate);

//   function msPosUpdate() {
//     msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
//     msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
//     const x = Math.round(msPos.s.x * 10) / 10;
//     const y = Math.round(msPos.s.y * 10) / 10;

//     mouseStalker.css("transform", `translate(${x}px, ${y}px, 0)`);
//     requestAnimationFrame(msPosUpdate);
//   }

//   const stalkerLinkObj = $("a");

//   stalkerLinkObj.on("mouseover", function(e) {
//     mouseStalker.addClass("g-ms-hover");
//   });

//   stalkerLinkObj.on("mouseout", function(e) {
//     mouseStalker.removeClass("g-ms-hover");
//   });

//   const stalkerPushBtn = $(".btn");

//   stalkerPushBtn.on("mouseover", function(e) {
//     mouseStalker.addClass("g-ms-hover");
//   });

//   stalkerPushBtn.on("mouseout", function(e) {
//     mouseStalker.removeClass("g-ms-hover");
//   });

//   let cursorR = 4;

//   const cursor = $("#cursor");

//   $(document).on("mousemove", function(e) {
//     cursor.css("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
//   });

//   const linkElem = $("a");

//   linkElem.on("mouseover", function(e) {
//     cursor.addClass("hov_");
//   });

//   linkElem.on("mouseout", function(e) {
//     cursor.removeClass("hov_");
//   });

//   let hovFlag = false;

//   $(document).on("mousemove", function(e) {
//     if (!hovFlag) {
//       mouseStalker.css("transform", `translate(${e.clientX}px, ${e.clientY}px)`);
//     }
//   });

//   const linkElm = $("a:not(.no_stick_)");

//   linkElm.on("mouseover", function(e) {
//     hovFlag = true;

//     mouseStalker.addClass("hov");

//     let rect = e.target.getBoundingClientRect();
//     let posX = rect.left + rect.width / 2;
//     let posY = rect.top + rect.height / 2;

//     mouseStalker.css("transform", `translate(${posX}px, ${posY}px)`);
//   });

//   linkElm.on("mouseout", function(e) {
//     hovFlag = false;

//     mouseStalker.removeClass("hov");
//   });

//   const hovBtn = $(".btn");

//   hovBtn.on("mouseover", function(e) {
//     hovFlag = true;

//     mouseStalker.addClass("hov");

//     let rect = e.target.getBoundingClientRect();
//     let posX = rect.left + rect.width / 2;
//     let posY = rect.top + rect.height / 2;

//     mouseStalker.css("transform", `translate(${posX}px, ${posY}px)`);
//   });

//   hovBtn.on("mouseout", function(e) {
//     hovFlag = false;

//     mouseStalker.removeClass("hov");
//   });
// });






"use strict";

// document.addEventListener('DOMContentLoaded', function() {});

document.addEventListener("turbo:load", () => {
  
  const mouseStalker = document.getElementById("g-ms");
  const circle = document.querySelector('.g-ms_i');
  const stalkerLinkObj = document.querySelectorAll("a");
  const stalkerPushBtn = document.querySelectorAll(".btn");
  const captionHover = document.querySelectorAll(".works-text");
  const stalkerAudioBtn = document.querySelectorAll(".audio_button");
  // const linkElms = document.querySelectorAll("a:not(.no_stick_)");
  const cursor = document.getElementById("cursor");
  const stalker_list = [ stalkerLinkObj, stalkerPushBtn, captionHover, stalkerAudioBtn ];

  let hovFlag = false;

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

     if (!cursor) return;  
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  requestAnimationFrame(msPosUpdate);

    function msPosUpdate() {
      msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
      msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
      const x = Math.round(msPos.s.x * 10) / 10;
      const y = Math.round(msPos.s.y * 10) / 10;

      mouseStalker.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(msPosUpdate);
    }

    stalker_list.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseover", function (e) {
          if (!mouseStalker || !stalkerLinkObj || !stalkerPushBtn || !captionHover || !stalkerAudioBtn ) return;

          hovFlag = true;
          mouseStalker.classList.add("hov");
          mouseStalker.classList.add("g-ms-hover")

          let rect = e.target.getBoundingClientRect();
          let posX = rect.left + rect.width / 2;
          let posY = rect.top + rect.height / 2;
        
          mouseStalker.style.transform = `translate(${posX}px, ${posY}px)`;
        });

        el[i].addEventListener("mouseout", function (e) {
          hovFlag = false; 
          mouseStalker.classList.remove("hov");
          mouseStalker.classList.remove("g-ms-hover");
        });
      }
    })

  let cursorR = 4;

    for (let i = 0; i < stalkerLinkObj.length; i++) {
      stalkerLinkObj[i].addEventListener("mouseover", function (e) {
        cursor.classList.add("hov_");
      });
      stalkerLinkObj[i].addEventListener("mouseout", function (e) {
        cursor.classList.remove("hov_");
      });
    }

  document.addEventListener("mousemove", function (e) {
    if (!hovFlag) {
      mouseStalker.style.transform =
        "translate(" + e.clientX + "px, " + e.clientY + "px)";
    }
  });

  if(window.innerWidth < 800 ) {    
    mouseStalker.parentNode.removeChild(mouseStalker);
    cursor.parentNode.removeChild(cursor);
    circle.classList.remove('g-ms_i');
  }
});




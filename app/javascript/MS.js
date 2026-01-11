
"use strict";
  
class MouseStalkerLogic {
  constructor () {
      this.mouseStalker = document.getElementById("g-ms");
      this.circle = document.querySelector('.g-ms_i');
      this.stalkerLinkObj = document.querySelectorAll("a");
      this.stalkerPushBtn = document.querySelectorAll(".btn");
      this.captionHover = document.querySelectorAll(".works-text");
      this.stalkerAudioBtn = document.querySelectorAll(".audio_button");
      // this. linkElms = document.querySelectorAll("a:not(.no_stick_)");
      this.cursor = document.getElementById("cursor");
      this.stalker_list = [ this.stalkerLinkObj, this.stalkerPushBtn, this.captionHover, this.stalkerAudioBtn ];
      this.hovFlag = false;
      this._basicLogic();
      this._hoverFunction();
      this._exceptFunction();
      this._commonFunction();
      this._responsiveFunction();
  }

  _basicLogic () {
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

    document.addEventListener("mousemove", (e) => {
      msPos.m.x = e.clientX;
      msPos.m.y = e.clientY;

      if (!this.cursor) return;  
        this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

      const msPosUpdate = () => {
        msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
        msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
        const x = Math.round(msPos.s.x * 10) / 10;
        const y = Math.round(msPos.s.y * 10) / 10;

        this.mouseStalker.style.transform = `translate(${x}px, ${y}px, 0)`;
        requestAnimationFrame(msPosUpdate);
      }
  }

  _hoverFunction () {
    this.stalker_list.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("mouseover", (e) => {
          if (!this.mouseStalker || !this.stalkerLinkObj || !this.stalkerPushBtn || !this.captionHover || !this.stalkerAudioBtn ) return;
          
          this.hovFlag = true;
          this.mouseStalker.classList.add("hov");
          this.mouseStalker.classList.add("g-ms-hover")

          let rect = e.target.getBoundingClientRect();
          let posX = rect.left + rect.width / 2;
          let posY = rect.top + rect.height / 2;

          this.mouseStalker.style.transform = `translate(${posX}px, ${posY}px)`;
        });

        el[i].addEventListener("mouseout", (e) => {
          this.hovFlag = false; 
          this.mouseStalker.classList.remove("hov");
          this.mouseStalker.classList.remove("g-ms-hover");
        });
      }
    });
  }

  _exceptFunction () {
    for (let i = 0; i < this.stalkerLinkObj.length; i++) {
      this.stalkerLinkObj[i].addEventListener("mouseover", (e) => {
        this.cursor.classList.add("hov_");
      });
      this.stalkerLinkObj[i].addEventListener("mouseout", (e) => {
        this.cursor.classList.remove("hov_");
      });
    }
  }
  
  _commonFunction () {
    document.addEventListener("mousemove", (e) => {
      if (!this.hovFlag) {
        this.mouseStalker.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
      }
    });
  }

  _responsiveFunction () {
    if(window.innerWidth < 800 ) {    
    this.mouseStalker.parentNode.removeChild(this.mouseStalker);
    this.cursor.parentNode.removeChild(this.cursor);
    circle.classList.remove('g-ms_i');
    }
  }
}

window.MouseStalkerLogic = MouseStalkerLogic;

document.addEventListener("turbo:load", () => {
  new MouseStalkerLogic();
});
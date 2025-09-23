// テキストアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const TA = new TextAnimation(".text-animation");
  TA._animate();
}) 

class TextAnimation {
  constructor(els) {
    this.els = document.querySelectorAll(".text-animation");
    this.els.forEach((el) => {
        if(!el.querySelector(".char")) {
            const chars = el.innerHTML.trim().split("");
            el.innerHTML = this._splitText(chars);
        }    
    }); 
  }

  _splitText(chars) {
    return chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp");
      return `${acc}<span class="char">${curr}</span>`;
    }, ""); 
  }  
 
  _animate() {
    this.els.forEach(el => {
        setTimeout(() => {
            el.classList.add("inview");
        }, i * 200);
    });
  }
}
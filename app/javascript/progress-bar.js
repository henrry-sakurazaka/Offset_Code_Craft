"use strict"

window.addEventListener("scroll", () => {
    var h1=window.pageYOffset;
    var h2=window.innerHeight;
    var h3=document.documentElement.offsetHeight;
    const prg=document.querySelector('progress');
    var v=parseInt(h1/(h3-h2)*100);
    prg.value=v;
  });

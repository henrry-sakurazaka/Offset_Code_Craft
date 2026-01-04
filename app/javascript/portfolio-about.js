"use strict";
  
// nav /////////////////////////////////////////////////////////

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

    // スクロール時にフワッと////////////////////////////////////////////

    const options = {
      rootMargin: "32px",
      threshold: 0.5
    } 
    const els = document.querySelectorAll(".observed");
    const io = new IntersectionObserver(cb, options);
    
    function cb(entries) {
     entries.forEach((entry)=>{
          if(entry.isIntersecting) {
            entry.target.classList.add("inview");
    
          }
      }); 
    }
     
    els.forEach((el) => io.observe(el));

    // 長いリンクの文字列の切り替え  ///////////////////////////////////////////////

    // const link = document.querySelector('.soundCloud');
    // const longText = 'https://soundcloud.com/a_s_up_2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
    // const shortText = 'https://on.soundcloud.com/xJPvF';  
    
    // if(window.innerWidth > 820) {
    //     link.textContent = longText;  
    //   }
    // if(window.innerWidth < 860) { 
    //     link.textContent = shortText; 
    //   } 
    
    

    // JQueryの場合 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
    
    // $(document).on('ready pjax:success', function() {
    //   const options = {
    //     rootMargin: "40px",
    //   };
      
    //   const els = $(".observed");
      
    //   function cb(entries) {
    //     entries.forEach(function(entry) {
    //       if (entry.isIntersecting) {
    //         $(entry.target).addClass("inview");
    //       }
    //     });
    //   }
      
    //   const io = new IntersectionObserver(cb, options);
      
    //   els.each(function() {
    //     io.observe(this);
    //   });
    // });
    

  
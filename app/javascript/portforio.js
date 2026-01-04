// / works img スクロールアニメーション///////////////////////////// 


  const options = {
    rootMargin: "96px",
    threshold: 1
  
  } 
  const els = document.querySelectorAll(".works-li");
  function cb(entries) {
   entries.forEach((entry)=>{
        if(entry.isIntersecting) {
          entry.target.classList.add("inview");
        } else {
          entry.target.classList.remove("inview");
        }
  
    });
  }; 
  
  const io = new IntersectionObserver(cb, options);
  
  els.forEach((el) => io.observe(el));
  
  // click caption ///////////////////////////////////////////////////
  
  const captionTexts = document.querySelectorAll('.works-text');
  const caption = document.querySelectorAll('.caption');
  const duration = 400;
  
  if(window.innerWidth >= 768) {
    captionTexts.forEach((Text, index) => {
      Text.addEventListener('mouseover', () => {
          caption.forEach((cap, i) => { 
            if(index == 0 && index == i) {
              setTimeout(() => {
                cap.classList.add('active2');
              }, duration); 
            } else if
             (index == i) {
              setTimeout(() => {
                cap.classList.add('active');
              }, duration);
             }
         });      
      });
    });
    captionTexts.forEach((Text, index) => {
      Text.addEventListener('mouseout', () => {
          caption.forEach((cap, i) => { 
            if(index == 0 && index == i) {
              setTimeout(() => {
                cap.classList.remove('active2');
              }, duration); 
            } else if
              (index == i) {
                setTimeout(() => {
                  cap.classList.remove('active');
                }, duration);
              }
         });      
      });
    });
  } else if(window.innerWidth < 768) {
    captionTexts.forEach((Text, index) => {
      Text.addEventListener('click', () => {
          caption.forEach((cap, i) => { 
            if(index == 0 && index == i) {
              setTimeout(() => {
                cap.classList.toggle('active2');
              }, duration); 
            } else if
              (index == i) {
                setTimeout(() => {
                  cap.classList.toggle('active');
                }, duration);
              }
        });      
      });
    });
  }
  if(window.innerWidth < 768) {
    captionTexts.forEach((Text, index) => {
      caption.forEach((cap, i) => {
        if(index == 0 && index == i) {
          cap.addEventListener('click', () => {
              setTimeout(() => {
                cap.classList.remove('active2');
              }, duration);
          })
        }
      })
    })
  }
  
  
    
  
  
  
   
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
  
  // Move text/////////////////////////////////////////////////////////////
  
  var element = document.querySelector('.moving');
  var currentAnimation = 'animLeft2'; // 現在のアニメーション名を保持する変数
  
  function switchAnimation() {
  
    if (window.innerWidth < 600 ) {
  
      currentAnimation = 'animLeft5';
      element.style.animationName = currentAnimation;
      
    } else if (window.innerWidth < 800 ) {
    
      currentAnimation = 'animLeft3';
      element.style.animationName = currentAnimation;
  
    }
  
    if (window.innerWidth > 1300) {
  
      currentAnimation = 'animLeft2';
      element.style.animationName = currentAnimation;
  
    }
  
    if (window.innerWidth > 1700) {
    
      currentAnimation = 'animLeft6';
      element.style.animationName = currentAnimation;
    }
  };
  
  window.addEventListener('resize', switchAnimation);
  switchAnimation();
  
  
  // jQuery に書き換え \\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
  
  
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
  
  
  // works ////////////////////////////////////////////////////////////////
  
  
    // const els = $(".works-img");
  
    // function cb(entries) {
    //   entries.forEach(function(entry) {
    //     if (entry.isIntersecting) {
    //       $(entry.target).addClass("inview");
    //     }
    //   });
    // }
  
    // const io = new IntersectionObserver(cb, options);
  
    // els.each(function(index, el) {
    //   io.observe(el);
    // });
  
  // nav サイドバー\\\\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
  
  
  
  //   $(document).on("mousemove", function() {
  //     const center = $(".center");
  //     const nav = $(".navi");
  //     const dot = $(".dot");
  //     const about = $(".about");
  
  //     nav.on("mouseover", function() {
  //       center.addClass("inview");
  //     });
  
  //     nav.on("mouseleave", function() {
  //       center.removeClass("inview");
  //     });
  
  //     about.on("mouseover", function() {
  //       dot.addClass("animate__animated");
  //     });
  
  //     about.on("mouseleave", function() {
  //       dot.removeClass("animate__animated");
  //     });
  //   });
  // });
  
  // move text ???????????????????????????????????????????????
  
  // $(document).ready(function() {
  //   var element = $('.moving');
  //   var currentAnimation = 'animLeft2';
  
  //   function switchAnimation() {
  //     if (window.innerWidth < 600) {
  //       currentAnimation = 'animLeft5';
  //       element.css('animation-name', currentAnimation);
  //     } else if (window.innerWidth < 800) {
  //       currentAnimation = 'animLeft3';
  //       element.css('animation-name', currentAnimation);
  //     } else {
  //       currentAnimation = 'animLeft2';
  //       element.css('animation-name', currentAnimation);
  //     }
  //   }
  
  //   $(window).on('resize', switchAnimation);
  //   switchAnimation();
  // });
  

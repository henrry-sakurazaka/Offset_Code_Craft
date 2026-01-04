



// Move text/////////////////////////////////////////////////////////////



var element = document.querySelector('.moving');
    var currentAnimation = 'animLeft2'; // 現在のアニメーション名を保持する変数
    
    function switchAnimation() {
      if (window.innerWidth < 786 && currentAnimation !== 'animLeft3') {
  
        element.style.animationName = 'animLeft3' 
        currentAnimation = 'animLeft3';
  

      } else if (window.innerWidth >= 786 && currentAnimation !== 'animLeft2') {
      
        element.style.animationName = 'animLeft2';
        currentAnimation = 'animLeft2';
      }
    }

    window.addEventListener('resize', switchAnimation);
    switchAnimation(); // 初期化

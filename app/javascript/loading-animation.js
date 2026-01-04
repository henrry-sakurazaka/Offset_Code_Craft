// loading animation ///////////////////////////////////////////////

// window.addEventListener('DOMContentLoaded', () => {});

  $('.line').animate({'width': '100%'}, 1500, function(){
    $(this).css({'right': '0'});
    $(this).animate({'width': '0%'}, function(){
      $('.count-down').remove();
      $('.mask').animate({'height': '0%'});
      $('.mask2').animate({'height': '0%'}, function(){
          $('.big-title2').animate({'opacity':'1'}, 500);
          $('.backgroundAvocad').animate({'opacity':'1'}, 500);
      });
  });
  });

  function time() {
    const start = Date.now();
    const countdown = document.querySelector(".count-down");
    var timeDisplay = 0;
    var timeLimit = 99; 
    let timeoutID; // setTimeout()のIDを格納する変数
   
    function updateDisplay() {

      const elapsed = Date.now() - start;
      timeDisplay = Math.floor(elapsed/10);
      countdown.textContent = timeDisplay < 10 ? "0"+ timeDisplay : timeDisplay ; 
      
      
      if (timeDisplay < timeLimit) {

          timeoutID = setTimeout(updateDisplay, 10); 
        }
       

      if (timeDisplay === timeLimit) {                                                          
          clearTimeout(timeoutID); // タイマーを停止
          countdown.textContent = 100;
        }
        
    }
      
    timeoutID = setTimeout(updateDisplay, 10); 
        
    updateDisplay();
  }

  time();
    

    

   







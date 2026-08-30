// loading animation ///////////////////////////////////////////////

// window.addEventListener('DOMContentLoaded', () => {});

//   $('.lightning-line').animate({'width': '100%'}, 1500, function(){
//     $(this).css({'right': '0'});
//     $(this).animate({'width': '0%'}, function(){
//       $('.count-down').remove();
//       $('.mask').animate({'height': '0%'});
//       $('.mask2').animate({'height': '0%'}, function(){
//           $('.big-title2').animate({'opacity':'1'}, 500);
//           $('.backgroundAvocad').animate({'opacity':'1'}, 500);
//       });
//     });
//   });

window.addEventListener('DOMContentLoaded', () => {
  const lightningLine = document.querySelector('.lightning-line');
  const countDown = document.querySelector('.count-down');
  const mask = document.querySelector('.mask');
  const mask2 = document.querySelector('.mask2');
  const bigTitle2 = document.querySelector('.big-title2');
  const backgroundAvocad = document.querySelector('.backgroundAvocad');

  if (!lightningLine) return;

  lightningLine.animate(
    [
      { width: '0%' },
      { width: '100%' }
    ],
    {
      duration: 1500,
      fill: 'forwards'
    }
  ).finished.then(() => {

    lightningLine.style.right = '0';

    return lightningLine.animate(
      [
        { width: '100%' },
        { width: '0%' }
      ],
      {
        duration: 400,
        fill: 'forwards'
      }
    ).finished;

  }).then(() => {

    countDown?.remove();

    if (mask) {
      mask.animate(
        [
          { height: getComputedStyle(mask).height },
          { height: '0%' }
        ],
        {
          duration: 400,
          fill: 'forwards'
        }
      );
    }

    if (mask2) {
      mask2.animate(
        [
          { height: getComputedStyle(mask2).height },
          { height: '0%' }
        ],
        {
          duration: 400,
          fill: 'forwards'
        }
      ).finished.then(() => {

        if (bigTitle2) {
          bigTitle2.animate(
            [
              { opacity: 0 },
              { opacity: 1 }
            ],
            {
              duration: 500,
              fill: 'forwards'
            }
          );
        }

        if (backgroundAvocad) {
          backgroundAvocad.animate(
            [
              { opacity: 0 },
              { opacity: 1 }
            ],
            {
              duration: 500,
              fill: 'forwards'
            }
          );
        }

      });
    }
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
    

    

   







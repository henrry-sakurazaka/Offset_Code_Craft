// loading animation ///////////////////////////////////////////////

// window.addEventListener('DOMContentLoaded', () => {});

  // $('.lightning-line').animate({'width': '100%'}, 1500, function(){
  //   $(this).css({'right': '0'});
  //   $(this).animate({'width': '0%'}, function(){
  //     $('.count-down').remove();
  //     $('.mask').animate({'height': '0%'});
  //     $('.mask2').animate({'height': '0%'}, function(){
  //         $('.big-title2').animate({'opacity':'1'}, 500);
  //         $('.backgroundAvocad').animate({'opacity':'1'}, 500);
  //     });
  //   });
  // });

  /**
 * Element.animate()をPromiseでラップし、アニメーション完了を待機する関数
 * @param {Element} element - アニメーション対象のDOM要素
 * @param {Keyframe[] | PropertyIndexedKeyframes | null} keyframes - キーフレーム
 * @param {KeyframeAnimationOptions | number | undefined} options - オプションまたは時間（ミリ秒）
 * @returns {Promise<void>} アニメーションが完了すると解決するPromise
 */
function animatePromise(element, keyframes, options) {
    return new Promise(resolve => {
        const animation = element.animate(keyframes, options);
        animation.onfinish = () => resolve();
    });
}

// -------------------------------------------------------------

// DOM要素を取得
const lightningLine = document.querySelector('.lightning-line');
const countDown = document.querySelector('.count-down');
const mask = document.querySelector('.mask');
const mask2 = document.querySelector('.mask2');
const bigTitle2 = document.querySelector('.big-title2');
const backgroundAvocad = document.querySelector('.backgroundAvocad');

// 要素が存在しない場合のエラーチェック
if (!lightningLine || !mask || !mask2 || !bigTitle2 || !backgroundAvocad) {
    console.error('必要な要素の一部が見つかりません。');
}

// アニメーション連鎖の実行
animatePromise(lightningLine, 
    [{ width: '100%' }], 
    1500
)
.then(() => {
    // 1. コールバック: $(this).css({'right': '0'}); に相当
    lightningLine.style.right = '0';

    // 2. コールバック内のネストされたアニメーション: $(this).animate({'width': '0%'}); に相当
    return animatePromise(lightningLine, 
        [{ width: '0%' }], 
        { duration: 500 } // jQueryのデフォルトdurationを考慮し、時間指定がない場合は適当な値を設定
    );
})
.then(() => {
    // 3. ネストされたコールバック: $('.count-down').remove(); に相当
    if (countDown) {
        countDown.remove();
    }

    // 4. ネストされたアニメーション: $('.mask').animate({'height': '0%'}); に相当
    // .animate()はPromiseを返すため、returnして次のthen()で完了を待つ
    return animatePromise(mask, 
        [{ height: '0%' }], 
        { duration: 500 }
    );
})
.then(() => {
    // 5. ネストされたアニメーション: $('.mask2').animate({'height': '0%'}); に相当
    return animatePromise(mask2, 
        [{ height: '0%' }], 
        { duration: 500 }
    );
})
.then(() => {
    // 6. mask2のアニメーション完了後のコールバック: $('.big-title2').animate({'opacity':'1'}, 500); に相当
    animatePromise(bigTitle2, 
        [{ opacity: '1' }], 
        500
    );

    // 7. mask2のアニメーション完了後のコールバック: $('.backgroundAvocad').animate({'opacity':'1'}, 500); に相当
    // こちらは待機せず、6と同時に実行される（Promiseをreturnしないため）
    animatePromise(backgroundAvocad, 
        [{ opacity: '1' }], 
        500
    );
})
.catch(error => {
    console.error('アニメーション中にエラーが発生しました:', error);
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
    

    

   







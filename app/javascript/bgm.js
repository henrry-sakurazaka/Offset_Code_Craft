// BGM制御
	// =========================================*/

    // $(function () {
    //     var audioBtn = $('.audio_button'),
    //     audioWrap = $('.audio_wrap'),
    //     audio = document.getElementById('audio');
      
    //     audioBtn.on('click', function () {
    //       if( audioWrap.hasClass('play') ) {
    //         audio.pause();
    //         audioWrap.removeClass('play');
    //       } else {
    //         audio.play();
    //         audioWrap.addClass('play');
    //       }
    //     });
    //   });
  
    // import barba from './path/to/@barba/core';

    // barba.init();


    //  var audioBtn = document.querySelector('.audio_button'),
    //  audioWrap = document.querySelector('.audio_wrap'),
    //  audio = document.querySelector('#audio'),
    //  soundLogo = document.querySelector('.sound-logo');
    //  let isAudioPlaying = false;

   
    // function init() {
    //   console.log("init called");
    //   // 初期化処理
    // }

    // document.addEventListener("turbo:load", () => {
    //   console.log("✅ turbo:load 発火した");
    // });


    // document.addEventListener("DOMContentLoaded", init);
    // document.addEventListener("turbo:load", init);


    // document.addEventListener("turbo:load", () => {
    //   // const audioIconPath = 'assets/images/audio-svgrepo-com.svg' 
    //   // const muteIconPath = 'assets/images/mute-svgrepo-com.svg'
    //   // 上記の部分はapplication .html.erbで読み込んでいる。
    //   const audioBtn = document.querySelector('.audio_button');
    //   const audioWrap = document.querySelector('.audio_wrap');
    //   const my_frame = document.querySelector('#myFrame');
    //   const audio_data = document.querySelector('#audio');
    //   const soundLogo = document.querySelector('.sound-logo');

    //   if (!audioIconPath || !muteIconPath || !audioBtn || !audioWrap || !soundLogo || !audio_data) {
    //     console.log('does not element required');        
    //     return;
    //   }
    //   let isAudioPlaying = false;

    //   // console.log("▶️ audio_button: ", document.querySelector('.audio_button'));
    //   // console.log("▶️ audioタグ: ", document.querySelector('#audio'));

    //     audioBtn.addEventListener('click', function () {
    //       if (audio_data.paused) {
    //         audio_data.play().then(() => {
    //         soundLogo.setAttribute('src', audioIconPath);
    //         audioWrap.classList.add('playing');
    //         isAudioPlaying = true;
    //         }).catch((error) => {
    //           console.error('再生失敗', error);
    //         });
          
    //       } else {
    //         audio_data.pause();
    //         soundLogo.setAttribute('src', muteIconPath);
    //         audioWrap.classList.remove('playing');
    //         isAudioPlaying = false;
    //       }
    //     });
    //   });
       
    
      
    // $(document).ready(function() {
    //   var audioBtn = $('#container #content .audio_button');
    //   var audioWrap = $('#container #content .audio_wrap');
    //   var audio = $('#container #content #audio')[0]; // jQueryのセレクタで取得した要素からプレーンなDOM要素を取得
    //   var soundLogo = $('#container #content .sound-logo');
    //   var isAudioPlaying = false;
    
    //   audioBtn.on('click', function() {
    //     if (audio.paused) {
    //       audioWrap.addClass('play');
    //       audio.play();
    //       soundLogo.attr('src', 'my-portfolio-img/audio-svgrepo-com.svg');
    //       isAudioPlaying = true;
    //     } else {
    //       audioWrap.removeClass('play');
    //       audio.pause();
    //       soundLogo.attr('src', 'my-portfolio-img/mute-svgrepo-com.svg');
    //       isAudioPlaying = false;
    //     }
    //   });
    // });

    // barba.init();
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

    // audioBtn.addEventListener('click', function() {

    //   barba.hooks.before((data ) => {
    //     if (audio.paused) {
    //       audioWrap.classList.add('play');
    //       audio.play();
    //       soundLogo.setAttribute('src','my-portfolio-img/audio-svgrepo-com.svg')
    //       isAudioPlaying = true;
    //     } else {
    //       audioWrap.classList.remove('play');
    //       audio.pause();
    //       soundLogo.setAttribute('src', 'my-portfolio-img/mute-svgrepo-com.svg');
    //       isAudioPlaying = false;
    //     }
    //   }); 

    //   barba.hooks.after((data) => {
    //     if(isAudioPlaying) {
    //       audioWrap.classList.add('play');
    //       audio.play();
    //       soundLogo.setAttribute('src','my-portfolio-img/audio-svgrepo-com.svg')
    //       isAudioPlaying = true;
    //     }
    //   })
    // });

 
    // import barba from '@barba/core';

    
    
    var audioBtn = document.querySelector('.audio_button'),
        audioWrap = document.querySelector('.audio_wrap'),
        audio = document.querySelector('#audio'),
        soundLogo = document.querySelector('.sound-logo');
    let isAudioPlaying = false;
      
        audioBtn.addEventListener('click', function() {
          if (audio.paused) {
            audioWrap.classList.add('play');
            audio.play();
            soundLogo.setAttribute('src', './my-portfolio-img/my-portfolio-img/audio-svgrepo-com.svg');
            isAudioPlaying = true;
          } else {
            audioWrap.classList.remove('play');
            audio.pause();
            soundLogo.setAttribute('src', './my-portfolio-img/my-portfolio-img/mute-svgrepo-com.svg');
            isAudioPlaying = false;
          }
    });
    
    
   

      
   

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
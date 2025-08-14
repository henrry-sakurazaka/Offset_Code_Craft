
 // const audioIconPath = 'assets/images/audio-svgrepo-com.svg' 
 // const muteIconPath = 'assets/images/mute-svgrepo-com.svg'
       // 上記の部分はapplication .html.erbで読み込んでいる。

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".audio_button");
  const soundLogo = document.querySelector('.sound-logo');
  const audioWrap = document.querySelector('.audio_wrap');

  let isAudioPlaying = localStorage.getItem('bgmPlaying') === 'true';
  let bgmWindow = null;
  let sound = false;

  if (isAudioPlaying) {
    soundLogo.setAttribute('src', audioIconPath);
    soundLogo.classList.add('playing');
    sound = true;
  
  }else {
    soundLogo.setAttribute('src', muteIconPath);
    soundLogo.classList.remove('playing');
    sound = false;
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (!isAudioPlaying || !bgmWindow || bgmWindow.closed) {
        bgmWindow = window.open(
          "/bgm-app/", 
          "play-bgm",
          "width=300,height=80,toolbar=no,location=no,status=no,menubar=no"
        );

        if (bgmWindow) {
          bgmWindow.addEventListener('load', () => {
            bgmWindow.postMessage({ type: "play-bgm" }, "*"); 
          });
          soundLogo.setAttribute('src', audioIconPath);
          soundLogo.classList.add('playing');
          isAudioPlaying = true;
          localStorage.setItem('bgmPlaying', 'true');
        } 
      } else {
          soundLogo.setAttribute('src', muteIconPath);
          bgmWindow.postMessage({ type: "stop-bgm" }, "*");
          audioWrap.classList.remove('playing');
          isAudioPlaying = false;
          localStorage.setItem('bgmPlaying', 'false');
        
          setTimeout(() => {
            if (bgmWindow && !bgmWindow.closed) {
                bgmWindow.close();
                bgmWindow = null;  
            }
          }, 300)  
      }     
    });
  }

  // ページ遷移時に状態を保存
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgmPlaying', isAudioPlaying ? 'true' : 'false');
  });
});



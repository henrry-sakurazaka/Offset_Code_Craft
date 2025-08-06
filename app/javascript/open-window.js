
 // const audioIconPath = 'assets/images/audio-svgrepo-com.svg' 
    //   // const muteIconPath = 'assets/images/mute-svgrepo-com.svg'
    //   // 上記の部分はapplication .html.erbで読み込んでいる。

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".audio_button");
  const soundLogo = document.querySelector('.sound-logo');
  const audioWrap = document.querySelector('.audio_wrap');

  let isAudioPlaying = localStorage.getItem('bgmPlaying') === 'true';
  let bgmWindow = null;

   // 初期表示のUI復元
  if (isAudioPlaying) {
    soundLogo.setAttribute('src', audioIconPath);
    audioWrap.classList.add('playing');
  } else {
    soundLogo.setAttribute('src', muteIconPath);
    audioWrap.classList.remove('playing');
  }


  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (!isAudioPlaying || !bgmWindow || bgmWindow.closed) {

        bgmWindow = window.open(
          "/bgm-app/", // Railsのpublic以下のbgm-appフォルダにあるindex.htmlへの相対パス
          "play-bgm",
          "width=300,height=80,toolbar=no,location=no,status=no,menubar=no"
        );

        // NOTE: ユーザー操作と同一スレッドで送信するため setTimeout は使わない
        if (bgmWindow) {
          // 安全のため短いポーリングを使ってロード完了を待つ
          const intervalId = setInterval(() => {
            try {
              if (bgmWindow.document && bgmWindow.document.readyState === "complete") {
                bgmWindow.postMessage({ type: "play-bgm" }, "*");
                soundLogo.setAttribute('src', audioIconPath);
                audioWrap.classList.add('playing');
                isAudioPlaying = true;
                clearInterval(intervalId);
                console.log("message sent (play)");
              }
            } catch (e) {
              // CORS のためアクセス不可な場合もあるので無視
            }
          }, 100);
        }
      } else {
        // 停止処理
        if (bgmWindow) {
          bgmWindow.postMessage("stop-bgm", "*");
          
          setTimeout(() => {
            if (bgmWindow && !bgmWindow.closed) {
              bgmWindow.close();
              bgmWindow = null;
            }   
          }, 300);
        }
        soundLogo.setAttribute('src', muteIconPath);
        audioWrap.classList.remove('playing');
        isAudioPlaying = false;
        localStorage.setItem('bgmPlaying', 'false');
        console.log("stop-message sent");
      }
    });
  }
  // ページ離脱時にフラグクリア（※必要なら）
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgmPlaying', isAudioPlaying ? 'true' : 'false');
  });
});


 // const audioIconPath = 'assets/images/audio-svgrepo-com.svg' 
    //   // const muteIconPath = 'assets/images/mute-svgrepo-com.svg'
    //   // 上記の部分はapplication .html.erbで読み込んでいる。

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".audio_button");
  const soundLogo = document.querySelector('.sound-logo');
  const audioWrap = document.querySelector('.audio_wrap');

  let isAudioPlaying = false;
  let bgmWindow = null;

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      if (!isAudioPlaying || !bgmWindow || bgmWindow.closed) {

        bgmWindow = window.open(
          "https://bgm-app-61f72-2c930.web.app",
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
          bgmWindow.close();
        }
        soundLogo.setAttribute('src', muteIconPath);
        audioWrap.classList.remove('playing');
        isAudioPlaying = false;
        bgmWindow = null;
        console.log("stop-message sent");
      }
    });
  }
});

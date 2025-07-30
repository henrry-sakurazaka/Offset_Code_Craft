
// オーディオ再生状態の保存
function saveAudioState(isPlaying) {
    localStorage.setItem('audioIsPlaying', isPlaying);
  }
  
  // オーディオ再生状態の読み取り
  function loadAudioState() {
    const isPlaying = localStorage.getItem('audioIsPlaying');
    return isPlaying === 'true'; // localStorage から取得した値は文字列なので、ブール値に変換します
  }
  
  // オーディオ再生状態を設定
  const isAudioPlaying = loadAudioState();
  
  // オーディオ再生状態をコンポーネントに渡す
  const audioComponent = document.querySelector('#root');
  const audioPlayer = audioComponent.querySelector('.audio_wrap')
//   audioComponent.setAudioState(isAudioPlaying); // このメソッドはコンポーネントに実装する必要があります
  
barba.init();
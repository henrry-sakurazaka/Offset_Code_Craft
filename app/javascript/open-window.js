// app/javascript/application.js
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector(".open-bgm");

  if (openButton) {
    openButton.addEventListener("click", () => {
      window.bgmWindow = window.open(
        "https://bgm-app-61f72-2c930.web.app",
        "bgmPlayer",
        "width=300,height=80,toolbar=no,location=no,status=no,menubar=no"
      );
    });
  }
});

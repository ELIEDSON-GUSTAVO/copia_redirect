const video = document.getElementById("video");
const playIcon = document.getElementById("playIcon");

let isSoundEnabled = false;

playIcon.addEventListener("click", function () {
  if (!isSoundEnabled) {
  backgroundVideo.muted = false;
  isSoundEnabled = true;
}
});
            

import $ from "./lib/import-jquery";

$("#target1").on("targetFound", () => {
  $("#video").append(
    `<video width="100%" autoplay muted loop webkit-playsinline playsinline >
            <source src="videoplayback.mp4" type="video/mp4" />
          </video>`
  );
  $("#videoShow").css("display", "block");
});

$("#target1").on("targetLost", () => {
  $("#videoShow").css("display", "none");
  $("#video").empty();
});

$("#start-btn").on("click", () => {
  $("#start-modal").hide();
});

// ios 本身需要點擊一下才能有聲音
window.addEventListener("click", (event) => {
  const video = document.querySelector("video")
  if (!video) {
    return;
  }
  video.muted = false
});

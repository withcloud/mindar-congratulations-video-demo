
import $ from "./lib/import-jquery";

$("#start-btn").on("click", () => {
  $("#start-modal").hide();
});

const exampleTarget1 = document.querySelector('#target1');
// detect target found
exampleTarget1.addEventListener("targetFound", event => {
  var videoEl = exampleTarget1.getAttribute("material").src;
  if (!videoEl) {
    return;
  }
  exampleTarget1.object3D.visible = true;
  videoEl.currentTime = 0//重頭播放
  videoEl.muted = false
  videoEl.play();
});
// // detect target lost
exampleTarget1.addEventListener("targetLost", event => {
  var videoEl = exampleTarget1.getAttribute("material").src;
  videoEl.pause()
});

const exampleTarget2 = document.querySelector('#target2');
var videoEl = exampleTarget2.getAttribute("material").src;
// detect target found
exampleTarget2.addEventListener("targetFound", event => {
  var videoEl = exampleTarget2.getAttribute("material").src;
  if (!videoEl) {
    return;
  }
  exampleTarget2.object3D.visible = true;
  videoEl.currentTime = 0//重頭播放
  videoEl.muted = false
  videoEl.play();
});
// // detect target lost
exampleTarget2.addEventListener("targetLost", event => {
  var videoEl = exampleTarget2.getAttribute("material").src;
  videoEl.pause()
});

const exampleTarget3 = document.querySelector('#target3');
var videoEl = exampleTarget3.getAttribute("material").src;
// detect target found
exampleTarget3.addEventListener("targetFound", event => {
  var videoEl = exampleTarget3.getAttribute("material").src;
  if (!videoEl) {
    return;
  }
  exampleTarget3.object3D.visible = true;
  videoEl.currentTime = 0//重頭播放
  videoEl.muted = false
  videoEl.play();
});
// // detect target lost
exampleTarget3.addEventListener("targetLost", event => {
  var videoEl = exampleTarget3.getAttribute("material").src;
  videoEl.pause()
});

const exampleTarget4 = document.querySelector('#target4');
var videoEl = exampleTarget4.getAttribute("material").src;
// detect target found
exampleTarget4.addEventListener("targetFound", event => {
  var videoEl = exampleTarget4.getAttribute("material").src;
  if (!videoEl) {
    return;
  }
  exampleTarget4.object3D.visible = true;
  videoEl.currentTime = 0//重頭播放
  videoEl.muted = false
  videoEl.play();
});
// // detect target lost
exampleTarget4.addEventListener("targetLost", event => {
  var videoEl = exampleTarget4.getAttribute("material").src;
  videoEl.pause()
});


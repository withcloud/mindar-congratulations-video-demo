
import $ from "./lib/import-jquery";

$("#start-btn").on("click", () => {
  $("#start-modal").hide();
});

// const exampleTarget = document.querySelector('#target');
// // detect target found
// exampleTarget.addEventListener("targetFound", event => {
//   var videoEl = exampleTarget.getAttribute("material").src;
//   if (!videoEl) {
//     return;
//   }
//   exampleTarget.object3D.visible = true;
//   videoEl.load()
//   videoEl.muted = false
//   videoEl.play();
// });
// // detect target lost
// exampleTarget.addEventListener("targetLost", event => {
//   var videoEl = exampleTarget.getAttribute("material").src;
//   this.el.object3D.visible = false;
//   videoEl.muted = true
// });

AFRAME.registerComponent("play-on-click", {
  init: function () {
    this.onClick = this.onClick.bind(this);
  },
  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },
  onClick: function (evt) {
    var videoEl = this.el.getAttribute("material").src;
    if (!videoEl) {
      return;
    }
    this.el.object3D.visible = true;
    videoEl.play();
  }
});

/* global AFRAME */
AFRAME.registerComponent("hide-on-play", {
  schema: { type: "selector" },
  init: function () {
    this.onPlaying = this.onPlaying.bind(this);
    this.onPause = this.onPause.bind(this);
    this.el.object3D.visible = !this.data.playing;
  },
  play: function () {
    if (this.data) {
      this.data.addEventListener("playing", this.onPlaying);
      this.data.addEventListener("pause", this.onPause);
    }
  },
  pause: function () {
    if (this.data) {
      this.data.removeEventListener("playing", this.onPlaying);
      this.data.removeEventListener("pause", this.onPause);
    }
  },
  onPlaying: function (evt) {
    this.el.object3D.visible = false;
  },
  onPause: function (evt) {
    this.el.object3D.visible = true;
  }
});
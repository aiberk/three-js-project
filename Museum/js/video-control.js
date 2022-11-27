AFRAME.registerComponent("video-control", {
  init: function () {
    this.onClick = this.onClick.bind(this);
    let el = this.el;
  },
  play: function () {
    window.addEventListener("click", this.onClick);
    setTimeout(() => {
      this.el.object3D.visible = false;
      this.el.object3D.scale.x = 0;
      this.el.object3D.scale.y = 0;
      this.el.object3D.scale.z = 0;

      console.log();
    }, "2000");
  },
  pause: function () {},
  onClick: function (evt) {
    var videoEl = this.el.getAttribute("material").src;
    if (!videoEl) {
      return;
    }
    this.el.object3D.visible = true;
    videoEl.play();
  },
});

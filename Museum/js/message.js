AFRAME.registerComponent("message", {
  schema: {},
  init: function () {
    this.play();
    var data = this.data;
    var el = this.el;
    var mesh = el.getObject3D("mesh");
    if (user_success) {
      el.setAttribute("value", "Woo!");
    } else {
      el.setAttribute("value", "Click to start game");
    }

    el.addEventListener("click", function () {
      // console.log("Message id:" + this.mesh);
      // console.log(this.text);
      el.setAttribute("value", "Pick the correct chest to win!");
    });
  },
  update: function (oldData) {
    this.el = this.data;
  },
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

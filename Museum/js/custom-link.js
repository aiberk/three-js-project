AFRAME.registerComponent("custom-link", {
  schema: {},
  init: function () {
    this.play();
    var data = this.data;
    var el = this.el;
    var link = this.whereto;
    console.log("Should go to:" + this.id);
    el.addEventListener("click", function () {
      console.log(window.location.href);
      window.location.replace("mouse.html");
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

AFRAME.registerComponent("image", {
  schema: {},
  init: function () {
    this.play();
    var data = this.data;
    var el = this.el;
    var mesh = el.getObject3D("mesh");

    el.addEventListener("click", function () {
      mesh.scale.x = 0;
      mesh.scale.y = 0;
      mesh.scale.z = 0;
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

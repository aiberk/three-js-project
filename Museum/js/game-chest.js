AFRAME.registerComponent("game-chest", {
  schema: {},
  init: function () {
    var data = this.data;
    var el = this.el;
    let success_sound = document.querySelector("#success");
    let rejected_sound = document.querySelector("#rejected");
    let hover_sound = document.querySelector("#hover");

    el.addEventListener("click", function () {
      if (this.id == chosen_box) {
        user_success = true;
        success_sound.play();
        el.setAttribute("animation-mixer", {
          clip: "success",
          loop: "repeat",
          repetitions: 1,
        });
      } else {
        rejected_sound.play();
        el.setAttribute("animation-mixer", {
          clip: "reject",
          loop: "repeat",
          repetitions: 1,
        });
      }
    });

    el.addEventListener("mouseenter", function () {
      hover_sound.play();
      el.setAttribute("animation-mixer", {
        clip: "hover",
        loop: "repeat",
        repetitions: 1,
      });
    });

    el.addEventListener("mouseleave", function () {
      var mesh = el.getObject3D("mesh");
      el.setAttribute("animation-mixer", {
        clip: "Non existing clip to reset",
        loop: "repeat",
        repetitions: 1,
      });
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

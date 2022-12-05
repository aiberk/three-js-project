AFRAME.registerComponent("custom-link", {
  schema: {},
  init: function () {
    var el = this.el;

    el.addEventListener("click", function () {
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      var chosen_number = getRandomInt(2);
      console.log(chosen_number);
      if (window.location.pathname == "/Museum/aframe-game.html") {
        if (chosen_number == 0) {
          window.location.replace("rue.html");
        } else {
          window.location.replace("eugene.html");
        }
      } else if (window.location.pathname == "/Museum/eugene.html") {
        if (chosen_number == 0) {
          window.location.replace("aby.html");
        } else {
          window.location.replace("eugene.html");
        }
      } else if (window.location.pathname == "/Museum/rue.html") {
        if (chosen_number == 0) {
          window.location.replace("eugene.html");
        } else {
          window.location.replace("aby.html");
        }
      }
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

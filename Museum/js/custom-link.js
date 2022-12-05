AFRAME.registerComponent("custom-link", {
  schema: {},
  init: function () {
    var el = this.el;

    el.addEventListener("click", function () {
      // window.location.replace("PAGE_YOU_WANT.html");
      // or use the randomized code
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      let chosen_number = getRandomInt(2);
      if (window.location.pathname == "/Museum/aby.html") {
        if (chosen_number == 0) {
          window.location.replace("rue.html");
        } else {
          window.location.replace("eugene.html");
        }
      } else if (window.location.pathname == "/Museum/eugene.html") {
        if (chosen_number == 0) {
          window.location.replace("aby.html");
        } else {
          window.location.replace("rue.html");
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

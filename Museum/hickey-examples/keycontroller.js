//require('../../lib/keyboard.polyfill');

/*
In this demo we create a component which responds to key presses
in the simplest way possible.
*/


let target = document.querySelector('#jabba1');


console.log("in keycontroller.js")
/**
 * Keyboard Controls component.
 *
 * Stripped-down version of: https://github.com/donmccurdy/aframe-keyboard-controls
 *
 * Bind keyboard events to components, or control your animnations with keys
 *
 * 
 */
AFRAME.registerComponent('keycontroller', {
  schema: {
    enabled:           { default: true },
    debug:             { default: false }
  },

  init: function () {
    target = document.querySelector('#jabba1');
    console.log("in init for keymin")
    console.log('target='+target)

    this.listeners = {
      keydown: this.onKeyDown.bind(this),
      keyup: this.onKeyUp.bind(this),
      blur: this.onBlur.bind(this)
    };
    this.attachEventListeners();
  },

  /*******************************************************************
  * Movement
  */

  /*******************************************************************
  * Events
  */

  play: function () {
    this.attachEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  remove: function () {
    this.pause();
  },

  attachEventListeners: function () {
    window.addEventListener('keydown', this.listeners.keydown, false);
    window.addEventListener('keyup', this.listeners.keyup, false);
    window.addEventListener('blur', this.listeners.blur, false);
  },

  removeEventListeners: function () {
    window.removeEventListener('keydown', this.listeners.keydown);
    window.removeEventListener('keyup', this.listeners.keyup);
    window.removeEventListener('blur', this.listeners.blur);
  },

  onKeyDown: function (event) {
    console.log(event.code)
    if (AFRAME.utils.shouldCaptureKeyEvent(event)) {
      if (event.code=='KeyJ'){
        console.log("KeyJ")
        target.pause()
        target.setAttribute("animation-mixer",{"clip":"nod"})
        target.play()
      }if (event.code=='KeyU'){
        console.log("KeyU")
        target.pause()
        target.removeAttribute("animation__rotate")
        target.play()
      }else if (event.code=='KeyK'){
        console.log("KeyK")
        target.pause()
        target.setAttribute("animation-mixer",{"clip":"grow"})
        target.play()
      }else if (event.code=='KeyP'){
        console.log("KeyP")
        target.pause()
        target.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 360 0",
            "loop": true
          }
        )
        target.play()
      }else if (event.code=='KeyL'){
        console.log("KeyL")
        target.pause()
        target.setAttribute("animation__rotate",
          { "property": "rotation",
            "easing": "easeInOutQuad",
            "dir": "alternate",
            "dur": 3000,
            "to": "90 0 0",
            "loop": true
          }
        )
        target.play()
      } else if (event.code=='KeyM'){
        console.log("KeyM")
        target.pause()
        target.removeAttribute("animation__rotate")
        target.play()
      }
      else if (event.code=='KeyN'){
        console.log("KeyN")
        target.pause()
        target.removeAttribute("animation-mixer")
        target.play()
      }
    }
  },

  onKeyUp: function (event) {

  },

  onBlur: function () {

  },


});

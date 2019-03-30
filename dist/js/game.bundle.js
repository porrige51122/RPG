/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// states

// listeners


var _handler = __webpack_require__(/*! ./handler */ "./src/handler.js");

var _handler2 = _interopRequireDefault(_handler);

var _loading = __webpack_require__(/*! ./states/loading */ "./src/states/loading.js");

var _loading2 = _interopRequireDefault(_loading);

var _menu = __webpack_require__(/*! ./states/menu */ "./src/states/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _mouse = __webpack_require__(/*! ./input/mouse */ "./src/input/mouse.js");

var _mouse2 = _interopRequireDefault(_mouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, ctx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    // init listeners here
    this.mouse = new _mouse2.default();
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.init();
      this.loop();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      // Add listeners here
      canvas.addEventListener("mousedown", function () {
        return _this.mouse.click();
      });
      canvas.addEventListener("mouseup", function () {
        return _this.mouse.release();
      });
      canvas.addEventListener("mousemove", function () {
        return _this.mouse.move(event);
      });
      // initialising handler
      this.handler = new _handler2.default(this);

      // Loading States
      this.menuState = new _menu2.default(this.handler);
      this.loadingState = new _loading2.default(this.handler);

      // Setting initial State
      this.handler.currentState = this.menuState;
    }
  }, {
    key: 'loop',
    value: function loop() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        _this2.resize();
        _this2.tick();
        _this2.render();
        _this2.loop();
      });
    }
  }, {
    key: 'resize',
    value: function resize() {
      // changes canvas size if window changes
      if (canvas.width != window.innerWidth || canvas.height != window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    }
  }, {
    key: 'tick',
    value: function tick() {
      // run tick method in current game state
      if (this.handler.currentState != null) this.handler.currentState.tick();
    }
  }, {
    key: 'render',
    value: function render() {
      // clear screen
      this.ctx.clearRect(10, 10, 50, 50);
      // run state's draw method
      if (this.handler.currentState != null) {
        this.handler.currentState.render(this.canvas, this.ctx);
      }
    }
  }]);

  return Game;
}();

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

var game = new Game(canvas, ctx);
game.start();

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Handler = function Handler(game) {
  _classCallCheck(this, Handler);

  this.game = game;
  this.currentState = null;
  this.world = null;
};

exports.default = Handler;

/***/ }),

/***/ "./src/input/mouse.js":
/*!****************************!*\
  !*** ./src/input/mouse.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mouse = function () {
  function Mouse() {
    _classCallCheck(this, Mouse);

    this.mousePos = [];
    this.mouseDown = false;
  }

  _createClass(Mouse, [{
    key: "click",
    value: function click() {
      this.mouseDown = true;
    }
  }, {
    key: "release",
    value: function release() {
      this.mouseDown = false;
    }
  }, {
    key: "move",
    value: function move(pos) {
      this.mousePos = [pos.clientX, pos.clientY];
    }
  }]);

  return Mouse;
}();

exports.default = Mouse;

/***/ }),

/***/ "./src/states/loading.js":
/*!*******************************!*\
  !*** ./src/states/loading.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _state = __webpack_require__(/*! ./state */ "./src/states/state.js");

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_State) {
  _inherits(Loading, _State);

  function Loading(handler) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, handler));
  }

  _createClass(Loading, [{
    key: "tick",
    value: function tick() {
      if (this.handler.game.mouse.mouseDown) this.mouseDown = true;else if (this.mouseDown) {
        this.mouseDown = false;
        this.handler.currentState = this.handler.game.menuState;
      }
    }
  }, {
    key: "render",
    value: function render(canvas, ctx) {
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }]);

  return Loading;
}(_state2.default);

exports.default = Loading;

/***/ }),

/***/ "./src/states/menu.js":
/*!****************************!*\
  !*** ./src/states/menu.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _state = __webpack_require__(/*! ./state */ "./src/states/state.js");

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_State) {
  _inherits(Menu, _State);

  function Menu(handler) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, handler));
  }

  _createClass(Menu, [{
    key: "tick",
    value: function tick() {
      if (this.handler.game.mouse.mouseDown) this.mouseDown = true;else if (this.mouseDown) {
        this.mouseDown = false;
        this.handler.currentState = this.handler.game.loadingState;
      }
    }
  }, {
    key: "render",
    value: function render(canvas, ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }]);

  return Menu;
}(_state2.default);

exports.default = Menu;

/***/ }),

/***/ "./src/states/state.js":
/*!*****************************!*\
  !*** ./src/states/state.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
  function State(handler) {
    _classCallCheck(this, State);

    this.handler = handler;
  }

  _createClass(State, [{
    key: "tick",
    value: function tick() {}
  }, {
    key: "render",
    value: function render(canvas, ctx) {}
  }]);

  return State;
}();

exports.default = State;

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map
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

/***/ "./src/assets/images/background.png":
/*!******************************************!*\
  !*** ./src/assets/images/background.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/assets/images/background.png";

/***/ }),

/***/ "./src/assets/maps sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./src/assets/maps sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./World1": "./src/assets/maps/World1.json",
	"./World1.json": "./src/assets/maps/World1.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/maps sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/maps/World1.json":
/*!*************************************!*\
  !*** ./src/assets/maps/World1.json ***!
  \*************************************/
/*! exports provided: width, height, map, default */
/***/ (function(module) {

module.exports = {"width":30,"height":40,"map":[[1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,7,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,10,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,15,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[17,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,83,341,342,343,83,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[82,83,83,83,68,50,349,350,351,50,76,0,0,0,68,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[50,59,51,50,50,51,357,358,359,50,567,96,97,68,543,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[50,50,50,61,50,50,365,366,367,50,575,104,105,551,559,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[49,49,49,49,49,49,373,374,375,49,583,112,113,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,7,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,10,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,15,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[17,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,2,2,3,0,0,0,0,0,0,0,0,0,0,0,8,8,8,8,8,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,7,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,10,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[9,10,10,15,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[17,18,18,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]};

/***/ }),

/***/ "./src/entities/entity.js":
/*!********************************!*\
  !*** ./src/entities/entity.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {
  function Entity(handler, pos, size, vel, spritesheet, spriteIndex) {
    _classCallCheck(this, Entity);

    this.handler = handler;
    this.pos = pos;
    this.size = size;
    this.vel = vel;
    this.spritesheet = spritesheet || null;
    this.spriteIndex = spriteIndex || null;
    this.active = true;
    this.health = 3;
  }

  _createClass(Entity, [{
    key: "tick",
    value: function tick() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
    }
  }, {
    key: "render",
    value: function render(canvas, ctx) {
      var img = this.spritesheet.getSpriteImage(this.spriteIndex);
      ctx.drawImage(this.spritesheet.img, img.x, img.y, img.width, img.height, this.pos[0], this.pos[1], this.size[0], this.size[1]);
    }
  }, {
    key: "die",
    value: function die() {}
  }, {
    key: "hurt",
    value: function hurt(damage) {
      health -= damage;
      if (health <= 0) {
        active = false;
        die();
      }
    }
  }]);

  return Entity;
}();

exports.default = Entity;

/***/ }),

/***/ "./src/entities/entityManager.js":
/*!***************************************!*\
  !*** ./src/entities/entityManager.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EntityManager = function () {
  function EntityManager(handler, player) {
    _classCallCheck(this, EntityManager);

    this.handler = handler;
    this.player = player;
    this.entities = [];
  }

  _createClass(EntityManager, [{
    key: "tick",
    value: function tick() {
      this.entities.forEach(function (entity) {
        entity.tick();
      });
    }
  }, {
    key: "render",
    value: function render(canvas, ctx) {
      this.entities.forEach(function (entity) {
        entity.render(canvas, ctx);
      });
    }
  }, {
    key: "addEntity",
    value: function addEntity(e) {
      this.entities.push(e);
    }
  }, {
    key: "clearEntities",
    value: function clearEntities() {
      this.entities = [this.player];
    }
  }]);

  return EntityManager;
}();

exports.default = EntityManager;

/***/ }),

/***/ "./src/entities/tiles/outside.js":
/*!***************************************!*\
  !*** ./src/entities/tiles/outside.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entity = __webpack_require__(/*! ../entity */ "./src/entities/entity.js");

var _entity2 = _interopRequireDefault(_entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Outside = function (_Entity) {
  _inherits(Outside, _Entity);

  function Outside(handler, pos, size, index) {
    _classCallCheck(this, Outside);

    return _possibleConstructorReturn(this, (Outside.__proto__ || Object.getPrototypeOf(Outside)).call(this, handler, pos, size, [0, 0], handler.game.assets.outside, index));
  }

  return Outside;
}(_entity2.default);

exports.default = Outside;

/***/ }),

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

var _assets = __webpack_require__(/*! ./graphics/assets */ "./src/graphics/assets.js");

var _assets2 = _interopRequireDefault(_assets);

var _gameCamera = __webpack_require__(/*! ./graphics/gameCamera */ "./src/graphics/gameCamera.js");

var _gameCamera2 = _interopRequireDefault(_gameCamera);

var _loading = __webpack_require__(/*! ./states/loading */ "./src/states/loading.js");

var _loading2 = _interopRequireDefault(_loading);

var _menu = __webpack_require__(/*! ./states/menu */ "./src/states/menu.js");

var _menu2 = _interopRequireDefault(_menu);

var _mouse = __webpack_require__(/*! ./input/mouse */ "./src/input/mouse.js");

var _mouse2 = _interopRequireDefault(_mouse);

var _keyboard = __webpack_require__(/*! ./input/keyboard */ "./src/input/keyboard.js");

var _keyboard2 = _interopRequireDefault(_keyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, ctx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;

    //number of tiles on the canvas
    this.width = 25;
    this.height = 15;

    // init listeners here
    this.mouse = new _mouse2.default();
    this.kbd = new _keyboard2.default();
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
      canvas.addEventListener('mousedown', function () {
        return _this.mouse.click();
      });
      canvas.addEventListener('mouseup', function () {
        return _this.mouse.release();
      });
      canvas.addEventListener('mousemove', function () {
        return _this.mouse.move(event);
      });

      window.addEventListener('keydown', function () {
        return _this.kbd.click(event);
      });
      window.addEventListener('keyup', function () {
        return _this.kbd.release();
      });

      // Get all assets
      this.assets = new _assets2.default();

      // initialising handler
      this.handler = new _handler2.default(this);

      // Loading States
      this.menuState = new _menu2.default(this.handler);
      this.loadingState = new _loading2.default(this.handler);

      // Setting initial State
      this.handler.currentState = this.menuState;

      // Setting Game Camera
      this.gameCamera = new _gameCamera2.default(this.handler, 0, 0);
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
        if (this.handler.world != null) {
          this.handler.world.tiles.getSize(this.width, this.height, canvas);
        }
      }
    }
  }, {
    key: 'tick',
    value: function tick() {
      // run tick method in current game state
      if (this.handler.currentState != null) this.handler.currentState.tick();

      if (this.kbd.keyDown) {
        if (this.kbd.keyId == 83) {
          this.gameCamera.move(0, 1);
        }
        if (this.kbd.keyId == 87) {
          this.gameCamera.move(0, -1);
        }
        if (this.kbd.keyId == 68) {
          this.gameCamera.move(1, 0);
        }
        if (this.kbd.keyId == 65) {
          this.gameCamera.move(-1, 0);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // clear screen
      this.ctx.clearRect(10, 10, 50, 50);
      // run state's draw method
      if (this.handler.currentState != null) {
        this.handler.currentState.render(canvas, ctx);
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

/***/ "./src/graphics/assets.js":
/*!********************************!*\
  !*** ./src/graphics/assets.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _images = __webpack_require__(/*! ./images */ "./src/graphics/images.js");

var _images2 = _interopRequireDefault(_images);

var _spritesheet = __webpack_require__(/*! ./spritesheet */ "./src/graphics/spritesheet.js");

var _spritesheet2 = _interopRequireDefault(_spritesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Assets = function Assets() {
  _classCallCheck(this, Assets);

  this.outside = new _spritesheet2.default(_images2.default.outside);
};

exports.default = Assets;

/***/ }),

/***/ "./src/graphics/gameCamera.js":
/*!************************************!*\
  !*** ./src/graphics/gameCamera.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameCamera = function () {
  function GameCamera(handler, xOffset, yOffset) {
    _classCallCheck(this, GameCamera);

    this.handler = handler;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }

  _createClass(GameCamera, [{
    key: "move",
    value: function move(x, y) {
      this.xOffset += x;
      this.yOffset += y;
    }
  }]);

  return GameCamera;
}();

exports.default = GameCamera;

/***/ }),

/***/ "./src/graphics/images.js":
/*!********************************!*\
  !*** ./src/graphics/images.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _background = __webpack_require__(/*! ../assets/images/background.png */ "./src/assets/images/background.png");

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bgImg = new Image();
bgImg.src = _background2.default;

var spritesheets = {
  outside: {
    img: bgImg,
    rows: 90,
    columns: 8
  }
};

exports.default = spritesheets;

/***/ }),

/***/ "./src/graphics/spritesheet.js":
/*!*************************************!*\
  !*** ./src/graphics/spritesheet.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spritesheet = function () {
  function Spritesheet(image) {
    _classCallCheck(this, Spritesheet);

    this.img = image.img;
    this.rows = image.rows;
    this.columns = image.columns;
    this.frameSize = [this.img.width / this.columns >> 0, this.img.height / this.rows >> 0]; // width and hight of sprite
  }

  _createClass(Spritesheet, [{
    key: "getSpriteImage",
    value: function getSpriteImage(index) {
      return {
        x: this.frameSize[0] * index[0],
        y: this.frameSize[1] * index[1],
        width: this.frameSize[0],
        height: this.frameSize[1]
      };
    }
  }]);

  return Spritesheet;
}();

exports.default = Spritesheet;

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

/***/ "./src/input/keyboard.js":
/*!*******************************!*\
  !*** ./src/input/keyboard.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Keyboard = function () {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    this.keyId = null;
    this.keyDown = false;
  }

  _createClass(Keyboard, [{
    key: "click",
    value: function click(event) {
      this.keyId = event.keyCode;
      this.keyDown = true;
    }
  }, {
    key: "release",
    value: function release() {
      this.keyDown = false;
    }
  }]);

  return Keyboard;
}();

exports.default = Keyboard;

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

var _world = __webpack_require__(/*! ../worlds/world */ "./src/worlds/world.js");

var _world2 = _interopRequireDefault(_world);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_State) {
  _inherits(Menu, _State);

  function Menu(handler) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, handler));

    _this.world = new _world2.default(handler, "World1.json");
    handler.world = _this.world;
    return _this;
  }

  _createClass(Menu, [{
    key: 'tick',
    value: function tick() {
      if (this.handler.game.mouse.mouseDown) this.mouseDown = true;else if (this.mouseDown) {
        this.mouseDown = false;
        this.handler.currentState = this.handler.game.loadingState;
      }
      this.world.tick();
    }
  }, {
    key: 'render',
    value: function render(canvas, ctx) {
      ctx.fillStyle = "Yellow";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.world.render(canvas, ctx);
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

/***/ }),

/***/ "./src/tiles/outsideTiles.js":
/*!***********************************!*\
  !*** ./src/tiles/outsideTiles.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OutsideTiles = function () {
  function OutsideTiles(handler) {
    _classCallCheck(this, OutsideTiles);

    this.getSize(handler.game.width, handler.game.height, handler.game.canvas);
    this.tiles = new Array(720);

    // Tile List Here
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 90; y++) {
        this.addTile(x + y * 8, [x, y]);
      }
    }
  }

  _createClass(OutsideTiles, [{
    key: "getSize",
    value: function getSize(width, height, canvas) {
      this.TILEWIDTH = canvas.width / width;
      this.TILEHEIGHT = canvas.height / height;
      if (canvas.width / width * height < canvas.height) {
        this.TILEWIDTH = this.TILEHEIGHT = Math.round(canvas.width / width);
      } else {
        this.TILEWIDTH = this.TILEHEIGHT = Math.round(canvas.height / height);
      }
    }
  }, {
    key: "addTile",
    value: function addTile(id, index) {
      this.tiles[id] = index;
    }
  }, {
    key: "getTile",
    value: function getTile(id) {
      return this.tiles[id];
    }
  }]);

  return OutsideTiles;
}();

exports.default = OutsideTiles;

/***/ }),

/***/ "./src/worlds/world.js":
/*!*****************************!*\
  !*** ./src/worlds/world.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _entityManager = __webpack_require__(/*! ../entities/entityManager */ "./src/entities/entityManager.js");

var _entityManager2 = _interopRequireDefault(_entityManager);

var _outside = __webpack_require__(/*! ../entities/tiles/outside */ "./src/entities/tiles/outside.js");

var _outside2 = _interopRequireDefault(_outside);

var _outsideTiles = __webpack_require__(/*! ../tiles/outsideTiles */ "./src/tiles/outsideTiles.js");

var _outsideTiles2 = _interopRequireDefault(_outsideTiles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = function () {
  function World(handler, map) {
    _classCallCheck(this, World);

    this.handler = handler;
    this.entityManager = new _entityManager2.default(this.handler);

    this.tiles = new _outsideTiles2.default(handler);
    this.loadWorld(map);
  }

  _createClass(World, [{
    key: 'render',
    value: function render(canvas, ctx) {
      // Sets start and end render area relative to game camera
      var startx = Math.max(0, this.handler.game.gameCamera.xOffset / this.tiles.TILEWIDTH);
      var endx = Math.min(this.width, this.handler.game.width + Math.ceil(startx));
      var starty = Math.max(0, this.handler.game.gameCamera.yOffset / this.tiles.TILEHEIGHT);
      var endy = Math.min(this.height, this.handler.game.height + Math.ceil(starty));

      // Draws Tiles
      for (var y = starty; y < endy; y++) {
        for (var x = startx; x < endx; x++) {
          new _outside2.default(this.handler, [Math.round((Math.floor(x) - startx) * this.tiles.TILEWIDTH), Math.round((Math.floor(y) - starty) * this.tiles.TILEHEIGHT)], [this.tiles.TILEWIDTH, this.tiles.TILEHEIGHT], this.tiles.getTile(this.map[Math.floor(y)][Math.floor(x)])).render(canvas, ctx);
        }
      }
      this.entityManager.render(canvas, ctx);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.entityManager.tick();
    }
  }, {
    key: 'loadWorld',
    value: function loadWorld(map) {
      var file = __webpack_require__("./src/assets/maps sync recursive ^\\.\\/.*$")("./" + map);
      this.width = file.width;
      this.height = file.height;
      this.map = file.map;
    }
  }]);

  return World;
}();

exports.default = World;

/***/ })

/******/ });
//# sourceMappingURL=game.bundle.js.map
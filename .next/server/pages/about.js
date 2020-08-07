module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TaPz");


/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "TaPz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutPage; });
/* harmony import */ var _products_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xC9H");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




// @ts-ignore
function AboutPage() {
  const classes = Object(_products_style__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const devs = [{
    name: 'Phan Hong Duc',
    Career: 'Full stack developer in JS/TS and Java',
    'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
    Address: 'Helsinki, Finland',
    img: '/img/Duc-Phan.jpg',
    github: 'https://github.com/hongduc-phan'
  }, {
    name: 'Phan Hong Phat',
    Career: 'Full stack developer in JS/TS',
    'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Git',
    Address: 'Helsinki, Finland',
    img: '/img/Phat-Phan.jpg',
    github: 'https://github.com/phanhongphat'
  }, {
    name: 'Phan Thanh Dat',
    Career: 'Full stack developer in JS/TS and Java',
    'Tech-skills': 'TS, ReactJS, NextJS, NodeJS, Express, GraphQL, MongoDB, Postgres, MySQL, Java, Vaadin, Git',
    Address: 'Helsinki, Finland',
    img: '/img/Dat-Phan.jpg',
    github: 'https://github.com/ptdatkhtn'
  }];
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.content__about
  }, devs === null || devs === void 0 ? void 0 : devs.map(dev => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.content__item_about
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__media,
    image: dev.img,
    title: dev.name
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, dev.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, dev['Tech-skills']), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: classes.item__price
  }, dev.Career))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], null, __jsx("a", {
    href: dev.github
  }, "Github")))));
}

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xC9H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
 // @ts-ignore

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  wrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1280px'
  },
  content__pagination: {
    marginLeft: '20px'
  },
  content__skeleton: {
    margin: '20px',
    zIndex: 1,
    position: 'relative'
  },
  wrapper__loading: {
    zIndex: 20,
    width: '100vw',
    textAlign: 'center',
    position: 'absolute',
    bottom: 500
  },
  content__tittle: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '52px',
    fontWeight: 'bold'
  },
  content__items: {
    display: 'flex',
    maxHeight: '768px',
    flexWrap: 'wrap'
  },
  content__about: {
    display: 'flex'
  },
  content__item_about: {
    margin: '12px'
  },
  content__item: {
    width: '100%'
  },
  lazyLoading: {
    width: '30% !important',
    padding: '24px'
  },
  item__media: {
    width: '80%',
    height: '160px',
    textAlign: 'center',
    margin: '20px',
    padding: '20px'
  },
  item__price: {
    textAlign: 'right',
    color: 'red'
  },
  item__buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button__addToCart: {
    margin: '5px'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ })

/******/ });
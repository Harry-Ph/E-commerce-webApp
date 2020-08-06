module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "5Ags":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
 // @ts-ignore

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    marginTop: '50px'
  },
  item__img: {
    padding: '5px'
  },
  grid__img: {
    margin: "0px 60px 10px 80px"
  },
  buttons: {
    padding: '20px'
  },
  content__subheading: {
    margin: '20px 0'
  },
  content__description: {
    margin: '10px 0'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "5DF9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapper": "Loading_wrapper__2H8fo",
	"loader": "Loading_loader__2awRZ",
	"spin": "Loading_spin__1I2eg"
};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sJxL");


/***/ }),

/***/ "9Jkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
 // import {GRAPHQL_ENDPOINT} from '../_app'

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  uri: 'http://localhost:3000/api/graphql',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
});
/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "UF/z":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorderOutlined");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "eECT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Loading_Loading; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./components/Loading/Loading.module.css
var Loading_module = __webpack_require__("5DF9");
var Loading_module_default = /*#__PURE__*/__webpack_require__.n(Loading_module);

// CONCATENATED MODULE: ./components/Loading/Loading.tsx
var __jsx = external_react_default.a.createElement;




const Loading = ({
  classes = {}
}) => {
  return __jsx("div", {
    className: external_clsx_default()(Loading_module_default.a.wrapper, classes.wrapper)
  }, __jsx("div", {
    className: external_clsx_default()(Loading_module_default.a.loader, classes.loader)
  }));
};

/* harmony default export */ var Loading_Loading = (Loading);
// CONCATENATED MODULE: ./components/Loading/index.tsx


/***/ }),

/***/ "sJxL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_FavoriteBorderOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UF/z");
/* harmony import */ var _material_ui_icons_FavoriteBorderOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorderOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Ags");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9Jkv");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eECT");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DETAIL_PRODUCT = _apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"]`
    query product($queryStr: String!) {
        product(queryStr: $queryStr) {
            id
            name
        }
    }
`;
const sizes = [{
  value: "37",
  label: 'EU 37'
}, {
  value: "38",
  label: 'EU 38'
}, {
  value: "39",
  label: 'EU 39'
}, {
  value: "40",
  label: 'EU 40'
}, {
  value: "41",
  label: 'EU 41'
}, {
  value: "42",
  label: 'EU 42'
}, {
  value: "43",
  label: 'EU 43'
}];
function ProductDetails({
  loading,
  product
}) {
  if (loading) {
    return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null);
  }

  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("37");

  const handleChange = event => {
    setSize(event.target.value);
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    component: "div"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.root
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    md: 5
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.grid__img
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__img,
    component: "img",
    image: "https://cdn.bike24.net/i/mb/d8/fa/b2/277893-00-d-557791.jpg",
    title: "Live from space album cover"
  })))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 8,
    md: 5
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    component: "div"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h1",
    variant: "h3"
  }, product === null || product === void 0 ? void 0 : product.product[0].name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1",
    color: "textSecondary"
  }, "\u20AC60.0"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    color: "textSecondary"
  }, "isAvailable"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    component: "p",
    className: classes.content__description
  }, "Maximum impact cushioning. The brutal, repetitive, downward force of sport can wreak havoc on the body and on performance. Max Air cushioning is specifically engineered to handle these impacts and provide protection. Max Air is big air designed to take a pounding."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    select: true,
    value: size,
    onChange: handleChange,
    helperText: "Please select your size",
    variant: "outlined"
  }, sizes.map(option => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    key: option.value,
    value: option.value
  }, option.label))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h4",
    className: classes.content__subheading
  }, "Other Styles"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 8,
    sm: 4,
    md: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__img,
    component: "img" // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
    ,
    image: "https://media.finishline.com/i/finishline/921826_101_P1?$Main_gray$&bg=rgb(237,237,237)",
    title: "Live from space album cover"
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 8,
    sm: 4,
    md: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__img,
    component: "img" // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
    ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGt9ihrNJA8G1q1dI_eRuo6E57GnCQlEz7Cw&usqp=CAU",
    title: "Live from space album cover"
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 8,
    sm: 4,
    md: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__img,
    component: "img" // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
    ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS00zLocLqLnS7BOqsfe8oBLOyJ25HcAN00lQ&usqp=CAU",
    title: "Live from space album cover"
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 8,
    sm: 4,
    md: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.item__img,
    component: "img" // image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5zl5UnBo5nybZFMM8nmCO64hsYCoSIumUxQ&usqp=CAU"
    ,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQopab8qDoJdYe7hOZWYLlN2yoxvfiz_8RP2g&usqp=CAU",
    title: "Live from space album cover"
  })))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: classes.buttons
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    fullWidth: true
  }, "Add to cart"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    fullWidth: true,
    endIcon: __jsx(_material_ui_icons_FavoriteBorderOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, null)
  }, "Favourite"))))));
}
const getServerSideProps = async ctx => {
  var _ctx$params;

  const {
    data,
    loading
  } = await _src_apollo__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].query({
    query: DETAIL_PRODUCT,
    variables: {
      queryStr: ctx === null || ctx === void 0 ? void 0 : (_ctx$params = ctx.params) === null || _ctx$params === void 0 ? void 0 : _ctx$params.id
    }
  });
  return {
    props: {
      product: data,
      loading: loading
    }
  };
};

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });
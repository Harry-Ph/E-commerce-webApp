module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4DPt":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c6qp");


/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "VxNu":
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "c6qp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikStep", function() { return FormikStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikStepper", function() { return FormikStepper; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VxNu");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4DPt");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dAJ7");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const API = 'http://localhost:3000/api/graphql';

const sleep = time => new Promise(acc => setTimeout(acc, time));
/* GraphQL */


const CREATE_PRODUCT2 =
/* GraphQL */
`
    mutation createNewOneProduct($name: String!) {
        createNewOneProduct(name: $name) {
            id
            name
        }
    }
`;
function CreateProduct() {
  // const [addProduct] = useMutation(CREATE_PRODUCT);
  // the mutate function will do the refetching for us
  // const { mutate } = useSWR(CREATE_PRODUCT2);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CardContent"], null, __jsx(FormikStepper, {
    initialValues: {
      name: '',
      brand: 'Other',
      isAvailable: false,
      money: 0,
      description: ''
    },
    onSubmit: async values => {
      await sleep(2000); // try {
      //   const {data} = await client.query({
      //     query: CREATE_PRODUCT,
      //     variables: {
      //       name: 'test hang'
      //     }
      //   })
      //   // const {  data } = await client.query({
      //   //   query: ALL_PRODUCTS,
      //   //   variables: {
      //   //     skip: 0,
      //   //     take: 10
      //   //   }
      //   // })
      //   console.log('dataaaa ne-> ', data)
      // } catch (e) {
      //   throw new Error(e)
      //   console.log(e)
      // }
      // const {data} = await client.query({
      //   query: CREATE_PRODUCT,
      //   variables: {
      //     name: 'test hang'
      //   }
      // })
      // call mutate here to refetch the new product after clicking

      await Object(swr__WEBPACK_IMPORTED_MODULE_7__["mutate"])(API);
      const {
        createNewOneProduct
      } = await Object(graphql_request__WEBPACK_IMPORTED_MODULE_6__["request"])(API, CREATE_PRODUCT2, {
        name: values.name
      });
      console.log('data check', createNewOneProduct);
      await Object(swr__WEBPACK_IMPORTED_MODULE_7__["trigger"])(API); // const productData = await addProduct({  variables: {
      //     name: values!.name
      //   } });

      await next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/products/details/${createNewOneProduct.id}`);
    }
  }, __jsx(FormikStep, {
    label: "Data Info",
    validationSchema: Object(yup__WEBPACK_IMPORTED_MODULE_4__["object"])({
      name: Object(yup__WEBPACK_IMPORTED_MODULE_4__["string"])().required().min(3).max(100)
    })
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "name",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "Name"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2
  }, __jsx(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "brand",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["Select"],
    label: "Brand"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Nike"
  }, "Nike"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Adidas"
  }, "Adidas"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Puma"
  }, "Puma"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Gucci"
  }, "Gucci"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Dior"
  }, "Dior"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    value: "Nana"
  }, "Nana"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["MenuItem"], {
    defaultChecked: true,
    value: "Other"
  }, "Other")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "isAvailable",
    type: "checkbox",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["CheckboxWithLabel"],
    Label: {
      label: 'Is product still available?'
    }
  }))), __jsx(FormikStep, {
    label: "Price",
    validationSchema: Object(yup__WEBPACK_IMPORTED_MODULE_4__["object"])({
      money: Object(yup__WEBPACK_IMPORTED_MODULE_4__["mixed"])().when('isAvailable', {
        is: true,
        then: Object(yup__WEBPACK_IMPORTED_MODULE_4__["number"])().required().min(0, 'The min-price of product is 0 eur'),
        otherwise: Object(yup__WEBPACK_IMPORTED_MODULE_4__["number"])().required()
      })
    })
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "money",
    type: "number",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "All the money I have"
  }))), __jsx(FormikStep, {
    label: "More Info"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    paddingBottom: 2
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    fullWidth: true,
    name: "description",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_2__["TextField"],
    label: "Description"
  }))))));
}
function FormikStep({
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, children);
}
function FormikStepper(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const childrenArray = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children);
  const {
    0: step,
    1: setStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const currentChild = childrenArray[step];
  const {
    0: completed,
    1: setCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], _extends({}, props, {
    validationSchema: currentChild.props.validationSchema,
    onSubmit: async (values, helpers) => {
      if (isLastStep()) {
        await props.onSubmit(values, helpers);
        setCompleted(true);
      } else {
        setStep(s => s + 1);
      }
    }
  }), ({
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    autoComplete: "off"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Stepper"], {
    alternativeLabel: true,
    activeStep: step
  }, childrenArray.map((child, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Step"], {
    key: child.props.label,
    completed: step > index || completed
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["StepLabel"], null, child.props.label)))), currentChild, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2
  }, step > 0 ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    disabled: isSubmitting,
    variant: "contained",
    color: "primary",
    onClick: () => setStep(s => s - 1)
  }, "Back")) : null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    startIcon: isSubmitting ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["CircularProgress"], {
      size: "1rem"
    }) : null,
    disabled: isSubmitting,
    variant: "contained",
    color: "primary",
    type: "submit"
  }, isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next')))));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ })

/******/ });
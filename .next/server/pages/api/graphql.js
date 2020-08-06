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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/SmY":
/***/ (function(module, exports) {

module.exports = require("nexus");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FmsI");


/***/ }),

/***/ "FmsI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "nexus"
var external_nexus_ = __webpack_require__("/SmY");
var external_nexus_default = /*#__PURE__*/__webpack_require__.n(external_nexus_);

// EXTERNAL MODULE: external "nexus-plugin-prisma"
var external_nexus_plugin_prisma_ = __webpack_require__("Zy4/");

// EXTERNAL MODULE: external "nexus/components/schema"
var schema_ = __webpack_require__("I0p8");

// CONCATENATED MODULE: ./graphql/schema.ts



Object(external_nexus_["use"])(Object(external_nexus_plugin_prisma_["prisma"])({
  features: {
    crud: true
  }
})); // use(
//   prisma({
//     client: { instance: new PrismaClient() },
//   })
// )

external_nexus_["schema"].objectType({
  name: "Ppl",

  definition(t) {
    t.model.id();
    t.model.username();
    t.model.email();
    t.model.password();
    t.model.role();
    t.model.status();
  }

});
external_nexus_["schema"].objectType({
  name: "Product",

  definition(t) {
    t.model.id();
    t.model.name();
  }

});
external_nexus_["schema"].addToContext(_req => {
  return {
    customReq: _req
  };
});
external_nexus_["schema"].queryType({
  async definition(t) {
    t.list.field("allUsers", {
      type: "Ppl",
      args: {
        skip: external_nexus_["schema"].stringArg({
          nullable: true
        }),
        take: external_nexus_["schema"].stringArg({
          nullable: true
        })
      },

      resolve(_parent, _args, ctx) {
        return ctx.db.ppl.findMany({
          skip: parseInt(_args === null || _args === void 0 ? void 0 : _args.skip),
          take: parseInt(_args === null || _args === void 0 ? void 0 : _args.take)
        });
      }

    });
    t.list.field("ppl", {
      type: "Ppl",
      args: {
        queryStr: external_nexus_["schema"].stringArg({
          nullable: true
        })
      },
      resolve: async (_parent, _args, ctx) => {
        try {
          const ppl = await ctx.db.ppl.findMany({
            where: {
              OR: [{
                id: _args === null || _args === void 0 ? void 0 : _args.queryStr
              }, {
                username: _args === null || _args === void 0 ? void 0 : _args.queryStr
              }]
            }
          }); // const product = t.crud.product(_args?.id!.toString() as ProductWhereUniqueInput);

          return ppl;
        } catch (error) {
          throw new Error(error);
        }
      }
    });
    t.list.field("allProducts", {
      type: "Product",
      args: {
        skip: external_nexus_["schema"].stringArg({
          nullable: true
        }),
        take: external_nexus_["schema"].stringArg({
          nullable: true
        })
      },

      resolve(_parent, _args, ctx) {
        return ctx.db.product.findMany({
          skip: parseInt(_args === null || _args === void 0 ? void 0 : _args.skip),
          take: parseInt(_args === null || _args === void 0 ? void 0 : _args.take)
        });
      }

    });
    t.list.field("product", {
      type: "Product",
      args: {
        queryStr: external_nexus_["schema"].stringArg({
          nullable: true
        })
      },
      resolve: async (_parent, _args, ctx) => {
        try {
          const product = await ctx.db.product.findMany({
            where: {
              OR: [{
                id: _args === null || _args === void 0 ? void 0 : _args.queryStr
              }, {
                name: _args === null || _args === void 0 ? void 0 : _args.queryStr
              }]
            }
          }); // const product = t.crud.product(_args?.id!.toString() as ProductWhereUniqueInput);

          return product;
        } catch (error) {
          throw new Error(error);
        }
      }
    }); // t.crud.product();
    // t.crud.products();
  }

});
external_nexus_["schema"].mutationType({
  definition(t) {
    t.field("bigRedButton", {
      type: "String",

      async resolve(_parent, _args, ctx) {
        const {
          count
        } = await ctx.db.ppl.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      }

    });
    t.crud.createOnePpl();
    t.crud.deleteOnePpl();
    t.crud.deleteManyPpl();
    t.crud.updateOnePpl();
    t.crud.updateManyPpl();
    t.field("removeAllProducts", {
      type: "String",

      async resolve(_parent, _args, ctx) {
        try {
          const {
            count
          } = await ctx.db.product.deleteMany({});
          return `${count} product(s) destroyed.`;
        } catch (e) {
          throw new Error(e);
        }
      }

    }); // t.field("removeManyProducts", {
    //   type: "String",
    //   args: {
    //     data: arg({Product[]})
    //   },
    //   async resolve(_parent, _args, ctx) {
    //     try {
    //       const { count } = await ctx.db.product.deleteMany({});
    //       return `${count} product(s) destroyed.`;
    //     } catch (e) {
    //       throw  new Error(e)
    //     }
    //   },
    // });

    t.field('removeProductById', {
      type: 'Product',
      nullable: true,
      args: {
        id: Object(schema_["stringArg"])()
      },

      // @ts-ignore
      resolve(parent, {
        id
      }, ctx) {
        try {
          return ctx.db.product.delete({
            where: {
              id: id
            }
          });
        } catch (e) {
          throw new Error(e);
        }
      }

    });
    t.field('updateProductById', {
      type: 'Product',
      nullable: true,
      args: {
        id: Object(schema_["idArg"])(),
        name: Object(schema_["stringArg"])()
      },

      // @ts-ignore
      resolve(parent, {
        id,
        name
      }, ctx) {
        try {
          return ctx.db.product.update({
            where: {
              id: id
            },
            data: {
              name: name
            }
          });
        } catch (e) {
          throw new Error(e);
        }
      }

    });
    t.field('createNewOneProduct', {
      type: 'Product',
      nullable: true,
      args: {
        name: Object(schema_["stringArg"])()
      },

      // @ts-ignore
      resolve(parent, {
        name
      }, ctx) {
        try {
          return ctx.db.product.create({
            data: {
              name: name
            }
          });
        } catch (e) {
          throw new Error(e);
        }
      }

    });
    t.crud.createOneProduct();
    t.crud.deleteOneProduct();
    t.crud.deleteManyProduct();
    t.crud.updateOneProduct();
    t.crud.updateManyProduct();
  }

}); // schema.mutationType({
//   definition(t) {
//     t.field("bigRedButton", {
//       type: "String",
//       async resolve(_parent, _args, ctx) {
//         const { count } = await ctx.db.ppl.deleteMany({});
//         return `${count} user(s) destroyed. Thanos will be proud.`;
//       },
//     });
//
//     t.crud.createOnePpl();
//     t.crud.deleteOnePpl();
//     t.crud.deleteManyPpl();
//     t.crud.updateOnePpl();
//     t.crud.updateManyPpl();
//   },
// });
// CONCATENATED MODULE: ./pages/api/graphql.ts

 // we'll create this file in a second!

external_nexus_default.a.assemble();
/* harmony default export */ var graphql = __webpack_exports__["default"] = (external_nexus_["server"].handlers.graphql);

/***/ }),

/***/ "I0p8":
/***/ (function(module, exports) {

module.exports = require("nexus/components/schema");

/***/ }),

/***/ "Zy4/":
/***/ (function(module, exports) {

module.exports = require("nexus-plugin-prisma");

/***/ })

/******/ });
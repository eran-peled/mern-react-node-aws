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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tOng");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_NAME; });
/* unused harmony export DOMAIN */
/* unused harmony export PRODUCTION */
/* unused harmony export FB_APP_ID */
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.API;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.DOMAIN;
const PRODUCTION = publicRuntimeConfig.PRODUCTION;
const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;

/***/ }),

/***/ "rZ7M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCookie */
/* unused harmony export removeCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCookie; });
/* unused harmony export getCookieFromBrowser */
/* unused harmony export getCookieFromServer */
/* unused harmony export setLocalStorage */
/* unused harmony export removeLocalStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logout; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

 // set in cookie

const setCookie = (key, value) => {
  if (false) {}
}; // remove from cookie

const removeCookie = key => {
  if (false) {}
}; // get from cookie such as stored token
// will be useful when we need to make request to server with auth token

const getCookie = (key, req) => {
  // if (process.browser) {
  //     return cookie.get(key);
  // }
  return false ? undefined : getCookieFromServer(key, req);
};
const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  } // console.log('req.headers.cookie', req.headers.cookie);


  let token = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!token) {
    return undefined;
  }

  let tokenValue = token.split('=')[1]; // console.log('getCookieFromServer', tokenValue);

  return tokenValue;
}; // set in localstoarge

const setLocalStorage = (key, value) => {
  if (false) {}
}; // remove from localstorage

const removeLocalStorage = key => {
  if (false) {}
}; // authenticate user by passing data to cookie and localstorage during signin

const authenticate = (response, next) => {
  setCookie('token', response.data.token);
  setLocalStorage('user', response.data.user);
  next();
}; // access user info from localstorage

const isAuth = () => {
  if (false) {}
};
const logout = () => {
  removeCookie('token');
  removeLocalStorage('user');
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
};

/***/ }),

/***/ "tOng":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("obyI");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rZ7M");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const withAdmin = Page => {
  const WithAdminUser = props => __jsx(Page, props);

  WithAdminUser.getInitialProps = async context => {
    const token = Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_3__[/* getCookie */ "b"])('token', context.req);
    let user = null;
    let userLinks = [];

    if (token) {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__[/* API */ "a"]}/admin`, {
          headers: {
            authorization: `Bearer ${token}`,
            contentType: 'application/json'
          }
        });
        user = response.data.user;
        userLinks = response.data.links;
      } catch (error) {
        if (error.response.status === 401) {
          user = null;
        }
      }
    }

    if (user === null) {
      // redirect
      context.res.writeHead(302, {
        Location: '/'
      });
      context.res.end();
    } else {
      return _objectSpread(_objectSpread({}, Page.getInitialProps ? await Page.getInitialProps(context) : {}), {}, {
        user,
        token,
        userLinks
      });
    }
  };

  return WithAdminUser;
};

/* harmony default export */ __webpack_exports__["default"] = (withAdmin);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
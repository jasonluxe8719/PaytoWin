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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: margin, height, width, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
var margin = {
  left: 20,
  right: 20,
  top: 20,
  bottom: 20
};
var height = 800 - margin.top - margin.bottom;
var width = 900 - margin.left - margin.right;
var svg = d3.select("#canvas-area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("canvas").attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paytowin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paytowin */ "./src/paytowin.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("hellow");
  Object(_paytowin__WEBPACK_IMPORTED_MODULE_0__["Paytowin"])();
});

/***/ }),

/***/ "./src/paytowin.js":
/*!*************************!*\
  !*** ./src/paytowin.js ***!
  \*************************/
/*! exports provided: Paytowin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paytowin", function() { return Paytowin; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _paytowin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paytowin */ "./src/paytowin.js");
/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale */ "./src/scale.js");
/* harmony import */ var _visualize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualize */ "./src/visualize.js");




var Paytowin = function Paytowin() {
  d3.csv("../data/all_data.csv").then(function (data) {
    var sortedData = [{
      year: 2001,
      teams: []
    }, {
      year: 2002,
      teams: []
    }, {
      year: 2003,
      teams: []
    }, {
      year: 2004,
      teams: []
    }, {
      year: 2005,
      teams: []
    }, {
      year: 2006,
      teams: []
    }, {
      year: 2007,
      teams: []
    }, {
      year: 2008,
      teams: []
    }, {
      year: 2009,
      teams: []
    }, {
      year: 2010,
      teams: []
    }, {
      year: 2011,
      teams: []
    }, {
      year: 2012,
      teams: []
    }, {
      year: 2013,
      teams: []
    }, {
      year: 2014,
      teams: []
    }, {
      year: 2015,
      teams: []
    }, {
      year: 2016,
      teams: []
    }, {
      year: 2017,
      teams: []
    }, {
      year: 2018,
      teams: []
    }];

    for (var i = 0; i < data.length; i++) {
      var dataObj = data[i];

      for (var j = 0; j < sortedData.length; j++) {
        if (parseInt(dataObj.Year) === sortedData[j].year) {
          sortedData[j].teams.push(dataObj);
        }
      }
    }

    Object(_visualize__WEBPACK_IMPORTED_MODULE_3__["visualize"])(sortedData[0]);
  });
};

/***/ }),

/***/ "./src/scale.js":
/*!**********************!*\
  !*** ./src/scale.js ***!
  \**********************/
/*! exports provided: xScale, yScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xScale", function() { return xScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yScale", function() { return yScale; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");

var xScale = function xScale(data) {
  return d3.scaleLinear().domain([0, max(data, function (d) {
    return d.SeasonWage;
  })]).range([0, _canvas__WEBPACK_IMPORTED_MODULE_0__["width"]]);
};
var yScale = function yScale(data) {
  return d3.scaleBand().domain(data.map(function (d) {
    return d.Team;
  })).range([0, _canvas__WEBPACK_IMPORTED_MODULE_0__["height"]]);
};

/***/ }),

/***/ "./src/visualize.js":
/*!**************************!*\
  !*** ./src/visualize.js ***!
  \**************************/
/*! exports provided: visualize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualize", function() { return visualize; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scale */ "./src/scale.js");



var visualize = function visualize(data) {
  // let rects = svg.selectAll("rect").data(arr, function(d) {
  //   return d.Team;
  // });
  // rects.exit().remove();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["svg"].selectAll("rect").data(data).enter().append("rect").attr("fill", "red").attr("y", function (d) {
    return Object(_scale__WEBPACK_IMPORTED_MODULE_1__["yScale"])(d);
  }).attr("x", function (d) {
    return Object(_scale__WEBPACK_IMPORTED_MODULE_1__["xScale"])(d);
  }).attr("height", _canvas__WEBPACK_IMPORTED_MODULE_0__["height"]).attr("width", _canvas__WEBPACK_IMPORTED_MODULE_0__["width"]).attr("opacity", "85%");
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
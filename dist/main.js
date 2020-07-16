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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualize */ "./src/visualize.js");

var cleanData;
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

  cleanData = sortedData.map(function (sortedD) {
    return sortedD["teams"].map(function (team) {
      team.SeasonWage = +team.SeasonWage;
      team.FinalLeagueStanding = +team.FinalLeagueStanding;
      team.PointsGained = +team.PointsGained;
      return team;
    });
  }); // for(let k = 0; k < cleanData.length; k++) {

  Object(_visualize__WEBPACK_IMPORTED_MODULE_0__["visualize"])(cleanData[0]); // }
}); //   cleanData = sortedData.map(function(d) {
//     d["teams"].map(function(team) {
//         team.SeasonWage = +team.SeasonWage;
//         team.FinalLeagueStanding = +team.FinalLeagueStanding;
//         team.PointsGained = +team.PointsGained;
//         return team;
//         })
//   });
// });
//     console.log(cleanData);

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
var visualize = function visualize(teamData, idx) {
  var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 100
  };
  var height = 600 - margin.top - margin.bottom;
  var width = 1000 - margin.left - margin.right;
  var xScale = d3.scaleLinear().domain([0, 300]).range([0, width - margin.left - margin.right]);
  var yScale = d3.scaleBand().domain(teamData.map(function (d) {
    return d.Team;
  })).range([0, height - margin.top - margin.bottom]);
  var svg = d3.select("#canvas-area").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
  var xAxis = d3.axisBottom(xScale).tickSize(10).tickFormat(function (d) {
    return +d;
  });
  svg.append("g").attr("font-family", "Helvetica").attr("class", "canvas-x-axis").attr("transform", "translate(0," + height + ")").call(xAxis);
  var yAxis = d3.axisLeft(yScale).tickSize(20).tickFormat(function (d) {
    return +d;
  });
  svg.append("g").attr("font-family", "Helvetica").attr("class", "canvas-y-axis").call(yAxis);
  svg.selectAll("rect").data(teamData).enter().append("rect").attr("fill", "red").attr("y", function (d) {
    return yScale(d.Team);
  }).attr("height", yScale.bandwidth()).attr("width", function (d) {
    return xScale(d.SeasonWage);
  }).attr("opacity", "85%");
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
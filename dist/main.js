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

  Object(_visualize__WEBPACK_IMPORTED_MODULE_0__["visualize"])(cleanData[0], 0);
});
var interval;
var year = 0;
var button = document.getElementById("loop-button");

function loop() {
  year = year < 18 ? year + 1 : 0;
  Object(_visualize__WEBPACK_IMPORTED_MODULE_0__["visualize"])(cleanData[year], year);
}

button.addEventListener("click", function (e) {
  if (button.innerHTML === "Loop") {
    interval = setInterval(loop, 1000);
    button.innerHTML = "Pause";
  } else if (button.innerHTML === "Pause") {
    clearInterval(interval);
    button.innerHTML = "Loop";
  }
});

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
var visualize = function visualize(teamData) {
  var margin = {
    top: 50,
    right: 20,
    bottom: 60,
    left: 200
  };
  var height = 600;
  var width = 900;
  var innerHeight = height - margin.top - margin.bottom;
  var innerWidth = width - margin.left - margin.right;
  var xScale = d3.scaleLinear().domain([0, 300]).range([0, innerWidth]);
  var yScale = d3.scaleBand().domain(teamData.map(function (d) {
    return d.Team;
  })).range([0, innerHeight]).padding(0.2);
  var g = d3.select("#graph-area").append("svg").attr("height", height).attr("width", width).append("g").attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")"));
  var xAxis = d3.axisBottom(xScale).tickSize(10).tickFormat(function (d) {
    return +d;
  });
  g.append("g").attr("class", "graph-x-axis").call(xAxis).attr("transform", "translate(0," + innerHeight + ")");
  var yAxis = d3.axisLeft(yScale).tickSize(20).tickFormat(function (d) {
    return d;
  });
  g.append("g").attr("font-family", "Helvetica").attr("class", "graph-y-axis").call(yAxis).selectAll('.domain, .tick line').remove(); //x-axis Label

  g.append("text").attr("y", innerHeight + 55).attr("x", innerWidth / 2).attr("text-anchor", "middle").attr("font-family", "Helvetica").attr("font-size", "20px").text("Season Wage by Team (in million pounds)").style("stroke", "blue"); //y-axis Label

  g.append("text").attr("y", -150).attr("x", 0 - innerHeight / 2).attr("transform", "rotate(-90)").attr("text-anchor", "middle").attr("font-family", "Helvetica").attr("font-size", "20px").attr("class", "y-axis-text").text("Premier League Team").style("stroke", "blue");
  g.selectAll("rect").data(teamData).enter().append("rect").attr("fill", "red").attr("y", function (d) {
    return yScale(d.Team);
  }).attr("height", yScale.bandwidth()).attr("width", function (d) {
    return xScale(d.SeasonWage);
  }).attr("opacity", "85%"); // let rectangles = g.selectAll("rect").data(function(d) {
  //   return d.Team;
  // });
  // rectangles.exit().remove();
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
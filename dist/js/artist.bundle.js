/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/artist.ts":
/*!***********************!*\
  !*** ./src/artist.ts ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetchData */ \"./src/utils/fetchData.ts\");\n/* harmony import */ var _utils_renderAlbums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/renderAlbums */ \"./src/utils/renderAlbums.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar init = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, albumList, _a, albums, artists, filteredAlbums;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                id = Number(window.location.href.match('[^artist/]*$')[0]);\r\n                albumList = document.querySelector(\".albums\");\r\n                return [4 /*yield*/, (0,_utils_fetchData__WEBPACK_IMPORTED_MODULE_0__.default)()];\r\n            case 1:\r\n                _a = _b.sent(), albums = _a[0], artists = _a[1];\r\n                filteredAlbums = albums.filter(function (album) { return album.artistId === id; });\r\n                (0,_utils_renderAlbums__WEBPACK_IMPORTED_MODULE_1__.default)(filteredAlbums, artists, albumList);\r\n                changeHeaderText(id, artists);\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nwindow.addEventListener(\"DOMContentLoaded\", function () { return init(); });\r\nvar changeHeaderText = function (id, artists) {\r\n    var artistNameH1 = document.querySelector(\"#artist-name\");\r\n    var currentArtist = artists.filter(function (artist) { return artist.id === id; });\r\n    artistNameH1.innerHTML = currentArtist[0].title;\r\n};\r\n\n\n//# sourceURL=webpack://bf-js-dev-test/./src/artist.ts?");

/***/ }),

/***/ "./src/utils/fetchData.ts":
/*!********************************!*\
  !*** ./src/utils/fetchData.ts ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar fetchAlbumAndArtistData = function (query) {\r\n    if (query === void 0) { query = \"\"; }\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var uri, albumsRoute, artistsRoute, albumsRes, albums, artistsRes, artists, error_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 5, , 6]);\r\n                    uri = \"http://localhost:3004/\";\r\n                    albumsRoute = \"albums\";\r\n                    artistsRoute = \"artists\";\r\n                    return [4 /*yield*/, fetch(uri + albumsRoute + query)];\r\n                case 1:\r\n                    albumsRes = _a.sent();\r\n                    return [4 /*yield*/, albumsRes.json()];\r\n                case 2:\r\n                    albums = _a.sent();\r\n                    return [4 /*yield*/, fetch(uri + artistsRoute)];\r\n                case 3:\r\n                    artistsRes = _a.sent();\r\n                    return [4 /*yield*/, artistsRes.json()];\r\n                case 4:\r\n                    artists = _a.sent();\r\n                    return [2 /*return*/, [albums, artists]];\r\n                case 5:\r\n                    error_1 = _a.sent();\r\n                    console.warn(error_1);\r\n                    return [2 /*return*/, [null, null]];\r\n                case 6: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAlbumAndArtistData);\r\n\n\n//# sourceURL=webpack://bf-js-dev-test/./src/utils/fetchData.ts?");

/***/ }),

/***/ "./src/utils/renderAlbums.ts":
/*!***********************************!*\
  !*** ./src/utils/renderAlbums.ts ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar renderAlbums = function (albums, artists, albumListContainer) {\r\n    var template;\r\n    //error check\r\n    if (albums && artists)\r\n        template = albums.map(function (album) {\r\n            var artistName = artists.filter(function (artist) { return artist.id === album.artistId; })[0].title;\r\n            var favorite = album.favorite ? '<img src=\"icons/favorite.svg\" class=\"album__favorite-icon\">' : '';\r\n            var favoriteBtn = album.favorite ? 'album__button--active' : '';\r\n            var favoriteBtnText = album.favorite ? 'Remove favorite' : 'Mark as favorite';\r\n            var releaseDate = new Date(album.releaseDate).getFullYear();\r\n            return \"\\n        <div class=\\\"album\\\">\\n          <div class=\\\"album__main\\\">\\n            <div class=\\\"album__main-img\\\">\\n              <img src=\\\"\" + album.imageUrl + \"\\\" alt=\\\"\" + album.title + \"\\\" class=\\\"album__img\\\"/>\\n              \" + favorite + \"\\n            </div>\\n            <div class=\\\"album__title\\\">\\n              <h2>\" + album.title + \"</h2>\\n              <h3><a href=\\\"/artist/\" + album.artistId + \"\\\" class=\\\"album__link\\\">\" + artistName + \"</a></h3>\\n            </div>\\n          </div>\\n          <div class=\\\"album__details\\\">\\n            <div class=\\\"album__release-date\\\">\\n              <span class=\\\"album__released\\\">Relesed:</span>\\n              <p>\" + releaseDate + \"<p>\\n            </div>\\n            <span>\" + album.price + \"</span>\\n            <button class=\\\"album__button \" + favoriteBtn + \"\\\" onclick=\\\"const fav = async (id, isFavorite) => {\\n              try {\\n                await fetch('http://localhost:3004/albums/' + id, {\\n                  method: 'PATCH',\\n                  body: JSON.stringify({'favorite': !isFavorite}),\\n                  headers: {'Content-type': 'application/json; charset=UTF-8'}\\n                });\\n                location.reload();\\n              }\\n              catch (error) {\\n                alert('Error: Could not connect to server!');\\n              }\\n            }; fav(\" + album.id + \", \" + album.favorite + \")\\\">\\n              \" + favoriteBtnText + \"\\n            </button>\\n          </div>\\n        </div>\\n      \";\r\n        }).join(\"\");\r\n    else\r\n        template = \"\\n      <div class=\\\"error\\\">\\n        <h1>Error: Couldn't connect to server!</h1>\\n      </div>\\n    \";\r\n    albumListContainer.innerHTML = template;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAlbums);\r\n\n\n//# sourceURL=webpack://bf-js-dev-test/./src/utils/renderAlbums.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/artist.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
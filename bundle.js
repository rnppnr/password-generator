/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #111016;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2rem;\\r\\n  margin: 1.5rem 0;\\r\\n}\\r\\n\\r\\ninput[type=\\\"range\\\"] {\\r\\n  -webkit-appearance: none;\\r\\n  background-color: #18171f;\\r\\n  border-radius: 5px;\\r\\n  height: 0.5rem;\\r\\n  width: 20rem;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]\\r\\n{\\r\\n  accent-color: #24232b;\\r\\n  background-color: #24232b;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.password-form {\\r\\n  background: #24232b;\\r\\n  border-radius: 0.75rem;\\r\\n  color: #dddce4;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 24rem;\\r\\n }\\r\\n\\r\\n .password-text {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  font-size: 1.5rem;\\r\\n  text-align: center;\\r\\n  width: 20rem;\\r\\n  padding: 0.75rem 2rem;\\r\\n  border: none;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: #18171f;\\r\\n  outline: none;\\r\\n  margin-bottom: 1rem;\\r\\n }\\r\\n\\r\\n .password-text input {\\r\\n  background-color: #18171f;\\r\\n  border: none;  \\r\\n  color: #dddce4;\\r\\n  padding: 0.5rem 0.5rem;\\r\\n  outline: none;\\r\\n  text-align: center;\\r\\n  width: 16rem;\\r\\n }\\r\\n\\r\\n.password-copy {\\r\\n  font-size: 0.8em;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.password-refresh {\\r\\n  font-size: 1.8rem;\\r\\n  cursor: pointer;\\r\\n  margin-left: 0.2rem;\\r\\n}\\r\\n\\r\\n.password-text-btn {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.form-items {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 20rem;\\r\\n}\\r\\n\\r\\n.password-length,\\r\\n.password-upper,\\r\\n.password-lower,\\r\\n.password-number,\\r\\n.password-symbol\\r\\n {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 20rem;\\r\\n  padding: 0.75rem 2rem;\\r\\n}\\r\\n\\r\\n.password-strength {\\r\\n  background-color: #18171f;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  color: #fff;\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 1rem;\\r\\n  margin: 0.5rem;\\r\\n  padding: 0.75rem 2rem;\\r\\n  width: 20rem;\\r\\n  text-transform: uppercase;\\r\\n  text-align: center;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 340px) {\\r\\n  h1 {\\r\\n    display: none;\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n  .password-text {\\r\\n    margin: 0.5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://password-generator/./public/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./public/favicon.ico":
/*!****************************!*\
  !*** ./public/favicon.ico ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3393c48eb5d166256388293d7915449f.ico\");\n\n//# sourceURL=webpack://password-generator/./public/favicon.ico?");

/***/ }),

/***/ "./public/style.css":
/*!**************************!*\
  !*** ./public/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://password-generator/./public/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://password-generator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/style.css */ \"./public/style.css\");\n/* harmony import */ var _public_favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/favicon.ico */ \"./public/favicon.ico\");\n/* harmony import */ var _password_generator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-generator.js */ \"./src/password-generator.js\");\n\r\n\r\n\r\n\r\nlet passwordLength = 0;\r\nlet includeUpperChecked  = false;\r\nlet includeLowerChecked  = false;\r\nlet includeNumberChecked = false;\r\nlet includeSymbolChecked = false;\r\n\r\nconst value = document.querySelector(\"#value\")\r\nconst strength = document.querySelector(\"#strength\")\r\nconst input = document.querySelector(\"#password-length\")\r\nconst includeUpper = document.querySelector(\"#password-upper\")\r\nconst includeLower = document.querySelector(\"#password-lower\")\r\nconst includeNumber = document.querySelector(\"#password-number\")\r\nconst includeSymbol = document.querySelector(\"#password-symbol\")\r\nconst passwordText = document.querySelector(\"#password-text\")\r\nconst refreshButton = document.querySelector(\"#password-refresh\")\r\n\r\nincludeUpperChecked  = includeUpper.checked;\r\nincludeLowerChecked  = includeLower.checked;\r\nincludeNumberChecked = includeNumber.checked;\r\nincludeSymbolChecked = includeSymbol.checked;\r\n\r\nvalue.textContent = input.value;\r\npasswordLength = input.value;\r\n\r\ninput.addEventListener(\"input\", (event) => {\r\n  passwordLength = event.target.value;\r\n  value.textContent = passwordLength;\r\n  const passwordStrength = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.getPasswordStrength)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  (passwordStrength !== \"\") ? strength.textContent = passwordStrength : strength.textContent = \"\";\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n})\r\n\r\nincludeUpper.addEventListener(\"change\", (event) => {\r\n  (event.target.checked) ? includeUpperChecked = true : includeUpperChecked = false;\r\n  const passwordStrength = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.getPasswordStrength)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  (passwordStrength !== \"\") ? strength.textContent = passwordStrength : strength.textContent = \"\";\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n});\r\n\r\nincludeLower.addEventListener(\"change\", (event) => {\r\n  (event.target.checked) ? includeLowerChecked = true : includeLowerChecked = false;\r\n  const passwordStrength = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.getPasswordStrength)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  (passwordStrength !== \"\") ? strength.textContent = passwordStrength : strength.textContent = \"\";\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n});\r\n\r\nincludeNumber.addEventListener(\"change\", (event) => {\r\n  (event.target.checked) ? includeNumberChecked = true : includeNumberChecked = false;\r\n  const passwordStrength = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.getPasswordStrength)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  (passwordStrength !== \"\") ? strength.textContent = passwordStrength : strength.textContent = \"\";\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n});\r\n\r\nincludeSymbol.addEventListener(\"change\", (event) => {\r\n  (event.target.checked) ? includeSymbolChecked = true : includeSymbolChecked = false;\r\n  const passwordStrength = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.getPasswordStrength)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  (passwordStrength !== \"\") ? strength.textContent = passwordStrength : strength.textContent = \"\";\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n});\r\n\r\nrefreshButton.addEventListener(\"click\", () => {\r\n  const password = (0,_password_generator_js__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);\r\n  passwordText.value = password;\r\n  console.log(password);\r\n});\r\n\n\n//# sourceURL=webpack://password-generator/./src/index.js?");

/***/ }),

/***/ "./src/password-generator.js":
/*!***********************************!*\
  !*** ./src/password-generator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePassword\": () => (/* binding */ generatePassword),\n/* harmony export */   \"getPasswordStrength\": () => (/* binding */ getPasswordStrength)\n/* harmony export */ });\n\r\nfunction getPasswordStrengthCategory(entropy) {\r\n  const strengthCategories = [\r\n    { maxEntropy: 40,       category: \"Very weak\" },\r\n    { maxEntropy: 60,       category: \"Weak\" },\r\n    { maxEntropy: 80,       category: \"Moderate\" },\r\n    { maxEntropy: 128,      category: \"Strong\" },\r\n    { maxEntropy: Infinity, category: \"Very strong\" }\r\n  ];  \r\n\r\n  const matchedCategory = strengthCategories.find(\r\n    strengthCategory => entropy < strengthCategory.maxEntropy\r\n  );\r\n\r\n  return matchedCategory.category;\r\n}\r\n\r\n\r\nfunction getPasswordStrength(includeUpperChecked, includeLowerChecked,\r\n  includeNumberChecked, includeSymbolChecked, passwordLength) {\r\n\r\n  const entropyValues = {\r\n    upper: 26,\r\n    lower: 26,\r\n    number: 10,\r\n    symbol: 32\r\n  };  \r\n      \r\n  const includeChecked = [includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked];\r\n  const hasIncludedCharacter = includeChecked.some(check => check);\r\n\r\n  if (!hasIncludedCharacter) {\r\n    return \"\";\r\n  }\r\n\r\n  const entropy = includeChecked.reduce((totalEntropy, check, index) => {\r\n    return totalEntropy + (check ? entropyValues[Object.keys(entropyValues)[index]] : 0);\r\n  }, 0);\r\n\r\n  const strength = Math.log2(entropy) * passwordLength;\r\n\r\n  return getPasswordStrengthCategory(strength);\r\n};\r\n\r\n\r\nfunction generatePassword(includeUpperChecked, includeLowerChecked,\r\n  includeNumberChecked, includeSymbolChecked, passwordLength) {\r\n\r\n  const characterSets = [\r\n    { characters: \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\", include: includeUpperChecked },\r\n    { characters: \"abcdefghijklmnopqrstuvwxyz\", include: includeLowerChecked },\r\n    { characters: \"0123456789\", include: includeNumberChecked },\r\n    { characters: \"!@#$%^&*()_+=-{}[]|:;<>?\", include: includeSymbolChecked }\r\n  ];\r\n\r\n  let allCharacters = \"\";\r\n  characterSets.forEach(({ characters, include }) => {\r\n    if (include) {\r\n      allCharacters += characters;\r\n    }\r\n  });\r\n\r\n  let password = \"\";\r\n\r\n  if (allCharacters.length !== 0) {\r\n    for (let i = 0; i < passwordLength; i++) {\r\n      const randomIndex = Math.floor(Math.random() * allCharacters.length);\r\n      password += allCharacters[randomIndex];\r\n    }\r\n  }\r\n\r\n  return password;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://password-generator/./src/password-generator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
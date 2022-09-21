/*! For license information please see posts.js.LICENSE.txt */
(function(){"use strict";var __webpack_modules__={"./src/js/posts.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_post_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/post.scss */ "./src/scss/post.scss");\n\n\n//# sourceURL=webpack://HackersAndSlackers/./src/js/posts.js?')},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/post.scss":function(module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* Colors */\\n/* Fonts */\\n/* Breakpoints */\\n/* Etc. */\\n/* Cards\\n/* ---------------------------------------------------------- */\\n/* Cards are dynamic blocks of content which appear within Ghost\\nposts, for example: embedded videos, tweets, galleries, or\\nspecially styled bookmark links. We add extra styling here to\\nmake sure they look good, and are given a bit of extra spacing. */\\n/* This keeps small embeds centered */\\n.kg-embed-card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n}\\n\\n.kg-card {\\n  margin: 30px 0;\\n}\\n\\n.kg-image-card {\\n  border-radius: 3px;\\n  margin: 30px auto;\\n  transition: all 0.2s ease-out;\\n}\\n.kg-image-card img {\\n  margin: auto;\\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\\n  border-radius: 3px;\\n}\\n\\n.kg-code-card {\\n  display: flex;\\n  position: relative;\\n  flex-direction: column;\\n  width: 100%;\\n  margin: 30px 0;\\n  border-radius: 5px 5px 0 0;\\n}\\n.kg-code-card figcaption {\\n  order: 1;\\n  width: stretch;\\n  width: -moz-available;\\n  margin: 0 auto;\\n  padding: 14px 15px 10px;\\n  border-radius: 4px 4px 0 0;\\n  background: #20242c;\\n  color: #d2d7e1;\\n  font-family: \\"CamphorPro-Medium\\", \\"HelveticaNeue\\", sans-serif;\\n  font-size: 0.95em;\\n  line-height: 1;\\n  text-align: left;\\n  white-space: normal;\\n  order: 0;\\n}\\n@media (max-width: 600px) {\\n  .kg-code-card figcaption {\\n    min-width: 100%;\\n    margin-left: calc(-50vw + 50%) !important;\\n    margin-right: calc(-50vw + 50%) !important;\\n    border-right: 0;\\n    border-left: 0;\\n    border-radius: unset;\\n  }\\n}\\n\\n.kg-code-card pre,\\npre[class*=language-] {\\n  margin: 0 !important;\\n  order: 1;\\n}\\n\\n.kg-product-card .kg-product-card-description > p,\\n.kg-product-card .kg-product-card-description > ol,\\n.kg-product-card .kg-product-card-description > ul {\\n  font-size: 1.7rem;\\n  line-height: 1.6em;\\n}\\n\\n@media (max-width: 600px) {\\n  .kg-image-card,\\n.kg-code-card {\\n    margin-left: calc(-50vw + 50%) !important;\\n    margin-right: calc(-50vw + 50%) !important;\\n    border-radius: unset;\\n    display: flex;\\n    flex-direction: column;\\n    margin: 30px 0;\\n    position: relative;\\n    width: unset;\\n  }\\n  .kg-code-card pre {\\n    border-radius: unset;\\n    font-size: 0.8em !important;\\n  }\\n}\\n.kg-card.kg-embed-card {\\n  display: block;\\n  width: 100%;\\n  border: 1px solid #d0d8df;\\n  margin-bottom: 20px;\\n}\\n\\n.kg-image-card figcaption {\\n  line-height: 1.4;\\n  margin: 0 auto;\\n  padding: 8px 0 0;\\n}\\n\\n/* 7. Single Post\\n/* ---------------------------------------------------------- */\\n.post-template .site-content {\\n  width: 850px;\\n  margin: 20px auto;\\n  max-width: 100%;\\n}\\n.post-template .post {\\n  background: white;\\n  word-break: break-word;\\n  box-shadow: 0 1px 4px rgba(39, 44, 49, 0.15);\\n  padding-top: max(12vmin, 64px);\\n}\\n.post-template .post-header {\\n  align-items: center;\\n  display: flex !important;\\n  flex-direction: column-reverse;\\n  padding: 0;\\n}\\n.post-template .post-header .post-header-details {\\n  margin: 0 auto;\\n  padding: 40px 65px;\\n  width: 100%;\\n}\\n.post-template .post-content {\\n  padding: 0 60px 60px;\\n}\\n.post-template .post-content h2 {\\n  font-family: \\"CamphorPro-Regular\\", \\"HelveticaNeue\\", sans-serif;\\n  font-weight: normal;\\n  font-size: 2em;\\n  margin: 40px 0 5px;\\n}\\n.post-template .post-content h3 {\\n  color: #4e576a;\\n}\\n.post-template .post-content a:hover {\\n  color: #0297f6;\\n  cursor: pointer;\\n}\\n.post-template .post-content pre {\\n  overflow: auto;\\n  padding: 16px 20px;\\n  color: #e5eff5;\\n  font-size: 1.4rem;\\n  line-height: 1.5em;\\n  background: #15171A;\\n  border-radius: 5px;\\n  box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.4);\\n}\\n.post-template .post-content .intro-notice {\\n  align-items: center;\\n  background: #eceef1;\\n  border-radius: 5px;\\n  color: #6e7482;\\n  display: flex;\\n  font-size: 0.95em;\\n  font-style: italic;\\n  justify-content: left;\\n  line-height: 1.6;\\n  margin: auto;\\n  padding: 20px;\\n}\\n.post-template .post-content .intro-notice img {\\n  height: 40px;\\n  margin-right: 15px;\\n  min-width: 40px;\\n  opacity: 0.7;\\n  color: #677584;\\n  margin: 0;\\n}\\n.post-template .post-content .intro-notice p {\\n  font-family: \\"CamphorPro-Medium\\", \\"HelveticaNeue\\", sans-serif;\\n  color: #677584;\\n  letter-spacing: -0.2px;\\n  line-height: 1.6em;\\n  margin: 0;\\n}\\n.post-template .post-header {\\n  align-items: center;\\n  display: flex !important;\\n  flex-direction: column-reverse;\\n  padding: 0;\\n}\\n.post-template .post-header .post-header-details {\\n  margin: 0 auto;\\n  padding: 40px 65px;\\n  width: 100%;\\n}\\n\\n@media (max-width: 600px) {\\n  .post-header-details {\\n    padding: 30px;\\n  }\\n  .post-content {\\n    padding: 0 30px 30px;\\n  }\\n  .post-template .site-content {\\n    margin: unset;\\n  }\\n}\\n.post-header-details .post-excerpt {\\n  color: #8c96a4;\\n  font-family: \\"CamphorPro-Medium\\", \\"HelveticaNeue\\", sans-serif;\\n  font-size: 1.1em;\\n  line-height: 1.3;\\n  margin: 15px 0 0;\\n  max-width: 720px;\\n  order: 1;\\n}\\n\\n.post-header-details .post-meta {\\n  display: flex;\\n  margin: 15px auto 0;\\n}\\n\\n.post-meta-item {\\n  display: flex;\\n  align-items: center;\\n  margin-right: 20px;\\n  color: #7e8da3;\\n  line-height: 1;\\n}\\n\\n.post-meta-item i {\\n  margin-right: 5px;\\n}\\n\\n.post-meta-item * {\\n  color: #7e8da3;\\n  font-family: \\"CamphorPro-Bold\\", \\"HelveticaNeue\\", sans-serif;\\n  line-height: 1;\\n}\\n\\n.page-template .post-header {\\n  padding-bottom: max(3.2vmin, 28px);\\n}\\n\\n.page-template .main-content {\\n  background: white;\\n  box-shadow: 0 1px 4px rgba(39, 44, 49, 0.15);\\n}\\n\\n.page-template .main-content > p {\\n  -webkit-font-smoothing: antialiased;\\n  color: #414d5a;\\n  font-family: \\"CamphorPro-Regular\\", \\"HelveticaNeue\\", sans-serif;\\n  font-size: 1em;\\n  line-height: 1.8em;\\n  margin: 0 0 25px;\\n}\\n\\n.post-tag {\\n  margin-bottom: 16px;\\n  font-size: 1.6rem;\\n}\\n\\n.post-title {\\n  color: #4e576a;\\n  display: block;\\n  font-family: \\"TTNormsPro-Bold\\", \\"HelveticaNeue\\", sans-serif;\\n  font-size: 2.3em;\\n  margin: unset;\\n  font-weight: unset;\\n  line-height: 1.1;\\n  max-width: 720px;\\n  order: 2;\\n  width: -webkit-fill-available;\\n}\\n\\n.has-serif-title .post-title {\\n  font-family: Georgia, Times, serif;\\n}\\n\\n.post-excerpt {\\n  color: #8c96a4;\\n  font-family: \\"CamphorPro-Medium\\", \\"HelveticaNeue\\", sans-serif;\\n  font-size: 1.2em;\\n  line-height: 1.1em;\\n  margin: 15px 0;\\n  max-width: 720px;\\n  order: 1;\\n}\\n\\n.post p {\\n  font-family: \\"CamphorPro-Regular\\", \\"HelveticaNeue\\", sans-serif;\\n  line-height: 1.7em;\\n  font-size: 1em;\\n}\\n\\n.post-content > ol,\\n.post-content > ul,\\n.post-content ol,\\n.post-content ul {\\n  padding-left: 1em;\\n  padding-right: 1em;\\n}\\n\\n.post-content > ol li,\\n.post-content > ul li,\\n.post-content ol li,\\n.post-content ul li {\\n  margin-bottom: 10px;\\n}\\n\\n.gh-canvas .post-image img {\\n  display: block;\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 100%;\\n}\\n\\n@media (max-width: 767px) {\\n  .post-excerpt {\\n    margin-top: 14px;\\n    font-size: 1.7rem;\\n  }\\n}\\n@media (max-width: 600px) {\\n  .post-header .post-title {\\n    font-size: 2em;\\n  }\\n  .post-header-details .post-excerpt {\\n    margin: 5px 0 0;\\n  }\\n  .post-header-details .post-meta {\\n    flex-direction: column;\\n  }\\n  .post-header-details .post-meta .post-meta-item {\\n    margin-bottom: 10px;\\n    font-size: 0.9em;\\n  }\\n}\\n/* A larger margin before/after HRs and blockquotes */\\n.post-content > hr,\\n.post-content > blockquote {\\n  position: relative;\\n  margin-top: max(4.8vmin, 32px);\\n}\\n\\n.post-content > hr + *,\\n.post-content > blockquote + * {\\n  margin-top: max(4.8vmin, 32px) !important;\\n}\\n\\n/* Now the content typography styles */\\n.post-content a,\\n.content-body a {\\n  border-bottom: 1px solid #0297f6;\\n  text-decoration: underline;\\n  word-break: break-word;\\n  transition: all 0.2s ease-out;\\n  text-decoration: none;\\n}\\n\\n.post-content a:hover,\\n.content-body a:hover {\\n  color: #0297f6;\\n  cursor: pointer;\\n}\\n\\n.post-content .kg-callout-card .kg-callout-emoji {\\n  font-size: 2.1rem;\\n  line-height: 1.4epost;\\n}\\n\\n.post-content .kg-toggle-card .kg-toggle-heading-text {\\n  font-size: 2rem;\\n}\\n\\n.post-content :not(pre) > code {\\n  vertical-align: middle;\\n  padding: 0.15em 0.4em 0.15em;\\n  border: #e1eaef 1px solid;\\n  font-weight: 400 !important;\\n  font-size: 0.9em;\\n  line-height: 1em;\\n  color: #15171A;\\n  background: #f0f6f9;\\n  border-radius: 0.25em;\\n}", ""]);\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://HackersAndSlackers/./src/scss/post.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js')},"./node_modules/css-loader/dist/runtime/api.js":function(module){eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":function(module){eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/css-loader/dist/runtime/noSourceMaps.js?")},"./src/scss/post.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_post_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./post.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/post.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_post_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_post_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_post_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_post_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://HackersAndSlackers/./src/scss/post.scss?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(module){eval('\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},"./node_modules/style-loader/dist/runtime/insertBySelector.js":function(module){eval('\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":function(module){eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":function(module,__unused_webpack_exports,__webpack_require__){eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":function(module){eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":function(module){eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://HackersAndSlackers/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=function(e,n){for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__("./src/js/posts.js")})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page--src--pages--blog-vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("true;\n\n//# sourceURL=webpack:///./src/pages/Blog.vue?./node_modules/babel-loader/lib??ref--13-0!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Blog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  metaInfo: function metaInfo() {\n    return {\n      title: \"Blog\"\n    };\n  },\n  filters: {\n    excerptF: function excerptF(sentence) {\n      var words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n      var result = sentence;\n      var resultArray = result.split(\" \");\n\n      if (resultArray.length > words) {\n        resultArray = resultArray.slice(0, words);\n        result = resultArray.join(\" \") + \" …\";\n      }\n\n      return result;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/Blog.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/babel-loader/lib??ref--1-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"708d0df3-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=template&id=633cefa4&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"708d0df3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Blog.vue?vue&type=template&id=633cefa4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Layout',[_c('div',{staticClass:\"py-6 flex flex-wrap mx-auto container\"},_vm._l((_vm.$page.allWordPressPost.edges),function(ref){\nvar node = ref.node;\nreturn _c('div',{key:node.id,staticClass:\"w-full md:w-1/2 xl:w-1/3 p-4\"},[_c('div',{staticClass:\"shadow-none hover:shadow-lg rounded-lg bg-white flex flex-wrap border border-green-200 hover:border-transparent\",staticStyle:{\"transition\":\"box-shadow 0.7s\"}},[_c('a',{staticClass:\"w-full flex flex-wrap\",attrs:{\"href\":node.path}},[_c('g-image',{staticClass:\"rounded-t-lg object-cover h-40 w-full\",attrs:{\"src\":node.featuredMedia.sourceUrl,\"alt\":node.featuredMedia.altText}})],1),_c('div',{staticClass:\"py-4 px-6\"},[_c('h1',{directives:[{name:\"g-image\",rawName:\"v-g-image\"}],staticClass:\"font-semibold text-xl text-gray-800\",domProps:{\"innerHTML\":_vm._s(node.title)}}),_c('div',{directives:[{name:\"g-image\",rawName:\"v-g-image\"}],staticClass:\"font-normal text-base text-gray-600 py-2\",domProps:{\"innerHTML\":_vm._s(_vm.$options.filters.excerptF(node.excerpt, 15))}}),_c('div',{staticClass:\"pt-3 w-full flex flex-wrap justify-between items-center\"},[_c('p',{staticClass:\"font-normal text-base leading-tight text-gray-600\"},[_vm._v(\"Author: \"),_c('span',{staticClass:\"capitalize text-gray-800\"},[_vm._v(_vm._s(node.author.name))])]),_c('g-link',{staticClass:\"text-xl focus:outline-none text-teal-600 focus:text-teal-500 hover:text-teal-500 border-b border-transparent hover:border-teal-400\",attrs:{\"to\":node.path}},[_vm._v(\"Read More\")])],1)])])])}),0)])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./src/pages/Blog.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22708d0df3-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/pages/Blog.vue":
/*!****************************!*\
  !*** ./src/pages/Blog.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=633cefa4& */ \"./src/pages/Blog.vue?vue&type=template&id=633cefa4&\");\n/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ \"./src/pages/Blog.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Blog.vue?vue&type=custom&index=0&blockType=page-query */ \"./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/Blog.vue?");

/***/ }),

/***/ "./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query":
/*!*************************************************************************!*\
  !*** ./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--13-0!../../node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=custom&index=0&blockType=page-query */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/gridsome/lib/plugins/vue-components/lib/loaders/page-query.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=custom&index=0&blockType=page-query\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_13_0_node_modules_gridsome_lib_plugins_vue_components_lib_loaders_page_query_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_custom_index_0_blockType_page_query__WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/pages/Blog.vue?");

/***/ }),

/***/ "./src/pages/Blog.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/pages/Blog.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/babel-loader/lib??ref--1-1!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_babel_loader_lib_index_js_ref_1_1_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/Blog.vue?");

/***/ }),

/***/ "./src/pages/Blog.vue?vue&type=template&id=633cefa4&":
/*!***********************************************************!*\
  !*** ./src/pages/Blog.vue?vue&type=template&id=633cefa4& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_708d0df3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"708d0df3-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Blog.vue?vue&type=template&id=633cefa4& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/gridsome\\\",\\\"cacheIdentifier\\\":\\\"708d0df3-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Blog.vue?vue&type=template&id=633cefa4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_708d0df3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_708d0df3_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_633cefa4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/Blog.vue?");

/***/ })

}]);
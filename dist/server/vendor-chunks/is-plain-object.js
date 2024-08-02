"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-plain-object";
exports.ids = ["vendor-chunks/is-plain-object"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-plain-object/dist/is-plain-object.js":
/*!**************************************************************!*\
  !*** ./node_modules/is-plain-object/dist/is-plain-object.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\nfunction isObject(o) {\n  return Object.prototype.toString.call(o) === '[object Object]';\n}\nfunction isPlainObject(o) {\n  var ctor, prot;\n  if (isObject(o) === false) return false;\n\n  // If has modified constructor\n  ctor = o.constructor;\n  if (ctor === undefined) return true;\n\n  // If has modified prototype\n  prot = ctor.prototype;\n  if (isObject(prot) === false) return false;\n\n  // If constructor does not have an Object-specific method\n  if (prot.hasOwnProperty('isPrototypeOf') === false) {\n    return false;\n  }\n\n  // Most likely a plain Object\n  return true;\n}\nexports.isPlainObject = isPlainObject;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViQSw4Q0FBNkM7RUFBRUcsS0FBSyxFQUFFO0FBQUssQ0FBQyxFQUFDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBUUEsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ25CLE9BQU9MLE1BQU0sQ0FBQ00sU0FBUyxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0gsQ0FBQyxDQUFDLEtBQUssaUJBQWlCO0FBQ2hFO0FBRUEsU0FBU0ksYUFBYUEsQ0FBQ0osQ0FBQyxFQUFFO0VBQ3hCLElBQUlLLElBQUksRUFBQ0MsSUFBSTtFQUViLElBQUlQLFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSzs7RUFFdkM7RUFDQUssSUFBSSxHQUFHTCxDQUFDLENBQUNPLFdBQVc7RUFDcEIsSUFBSUYsSUFBSSxLQUFLRyxTQUFTLEVBQUUsT0FBTyxJQUFJOztFQUVuQztFQUNBRixJQUFJLEdBQUdELElBQUksQ0FBQ0osU0FBUztFQUNyQixJQUFJRixRQUFRLENBQUNPLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLEtBQUs7O0VBRTFDO0VBQ0EsSUFBSUEsSUFBSSxDQUFDRyxjQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssS0FBSyxFQUFFO0lBQ2xELE9BQU8sS0FBSztFQUNkOztFQUVBO0VBQ0EsT0FBTyxJQUFJO0FBQ2I7QUFFQVoscUJBQXFCLEdBQUdPLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWR2aWQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QuanM/ZDE3NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8qIVxuICogaXMtcGxhaW4tb2JqZWN0IDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1wbGFpbi1vYmplY3Q+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIEpvbiBTY2hsaW5rZXJ0LlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qobykge1xuICB2YXIgY3Rvcixwcm90O1xuXG4gIGlmIChpc09iamVjdChvKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiBoYXMgbW9kaWZpZWQgY29uc3RydWN0b3JcbiAgY3RvciA9IG8uY29uc3RydWN0b3I7XG4gIGlmIChjdG9yID09PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuXG4gIC8vIElmIGhhcyBtb2RpZmllZCBwcm90b3R5cGVcbiAgcHJvdCA9IGN0b3IucHJvdG90eXBlO1xuICBpZiAoaXNPYmplY3QocHJvdCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSBhbiBPYmplY3Qtc3BlY2lmaWMgbWV0aG9kXG4gIGlmIChwcm90Lmhhc093blByb3BlcnR5KCdpc1Byb3RvdHlwZU9mJykgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gTW9zdCBsaWtlbHkgYSBwbGFpbiBPYmplY3RcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3Q7XG4iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJpc09iamVjdCIsIm8iLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc1BsYWluT2JqZWN0IiwiY3RvciIsInByb3QiLCJjb25zdHJ1Y3RvciIsInVuZGVmaW5lZCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-plain-object/dist/is-plain-object.js\n");

/***/ })

};
;
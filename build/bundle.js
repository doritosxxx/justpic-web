/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/complex.js/complex.min.js":
/*!************************************************!*\
  !*** ./node_modules/complex.js/complex.min.js ***!
  \************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*\nComplex.js v2.0.11 11/02/2016\n\nCopyright (c) 2016, Robert Eisele (robert@xarg.org)\nDual licensed under the MIT or GPL Version 2 licenses.\n*/\n(function(n){function h(){throw SyntaxError(\"Invalid Param\");}function g(a){return.5*(Math.exp(a)-Math.exp(-a))}function e(a){return.5*(Math.exp(a)+Math.exp(-a))}function m(a,b){var c=Math.abs(a),d=Math.abs(b);return 0===a?Math.log(d):0===b?Math.log(c):3E3>c&&3E3>d?.5*Math.log(a*a+b*b):Math.log(a/Math.cos(Math.atan2(b,a)))}function d(a,b){if(!(this instanceof d))return new d(a,b);var c={re:0,im:0};if(void 0===a||null===a)c.re=c.im=0;else if(void 0!==b)c.re=a,c.im=b;else switch(typeof a){case \"object\":\"im\"in\na&&\"re\"in a?(c.re=a.re,c.im=a.im):\"abs\"in a&&\"arg\"in a?!Number.isFinite(a.abs)&&Number.isFinite(a.arg)?c=d.INFINITY:(c.re=a.abs*Math.cos(a.arg),c.im=a.abs*Math.sin(a.arg)):\"r\"in a&&\"phi\"in a?!Number.isFinite(a.r)&&Number.isFinite(a.phi)?c=d.INFINITY:(c.re=a.r*Math.cos(a.phi),c.im=a.r*Math.sin(a.phi)):2===a.length?(c.re=a[0],c.im=a[1]):h();break;case \"string\":c.im=c.re=0;var f=a.match(/\\d+\\.?\\d*e[+-]?\\d+|\\d+\\.?\\d*|\\.\\d+|./g),l=1,e=0;null===f&&h();for(var g=0;g<f.length;g++){var k=f[g];\" \"!==k&&\"\\t\"!==\nk&&\"\\n\"!==k&&(\"+\"===k?l++:\"-\"===k?e++:(\"i\"===k||\"I\"===k?(0===l+e&&h(),\" \"===f[g+1]||isNaN(f[g+1])?c.im+=parseFloat((e%2?\"-\":\"\")+\"1\"):(c.im+=parseFloat((e%2?\"-\":\"\")+f[g+1]),g++)):((0===l+e||isNaN(k))&&h(),\"i\"===f[g+1]||\"I\"===f[g+1]?(c.im+=parseFloat((e%2?\"-\":\"\")+k),g++):c.re+=parseFloat((e%2?\"-\":\"\")+k)),l=e=0))}0<l+e&&h();break;case \"number\":c.im=0;c.re=a;break;default:h()}this.re=c.re;this.im=c.im}d.prototype={re:0,im:0,sign:function(){var a=this.abs();return new d(this.re/a,this.im/a)},add:function(a,\nb){var c=new d(a,b);return this.isInfinite()&&c.isInfinite()?d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:new d(this.re+c.re,this.im+c.im)},sub:function(a,b){var c=new d(a,b);return this.isInfinite()&&c.isInfinite()?d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:new d(this.re-c.re,this.im-c.im)},mul:function(a,b){var c=new d(a,b);return this.isInfinite()&&c.isZero()||this.isZero()&&c.isInfinite()?d.NAN:this.isInfinite()||c.isInfinite()?d.INFINITY:0===c.im&&0===this.im?new d(this.re*c.re,\n0):new d(this.re*c.re-this.im*c.im,this.re*c.im+this.im*c.re)},div:function(a,b){var c=new d(a,b);if(this.isZero()&&c.isZero()||this.isInfinite()&&c.isInfinite())return d.NAN;if(this.isInfinite()||c.isZero())return d.INFINITY;if(this.isZero()||c.isInfinite())return d.ZERO;a=this.re;b=this.im;var f=c.re,e=c.im;if(0===e)return new d(a/f,b/f);if(Math.abs(f)<Math.abs(e))return c=f/e,f=f*c+e,new d((a*c+b)/f,(b*c-a)/f);c=e/f;f=e*c+f;return new d((a+b*c)/f,(b-a*c)/f)},pow:function(a,b){var c=new d(a,b);\na=this.re;b=this.im;if(c.isZero())return d.ONE;if(0===c.im){if(0===b&&0<=a)return new d(Math.pow(a,c.re),0);if(0===a)switch((c.re%4+4)%4){case 0:return new d(Math.pow(b,c.re),0);case 1:return new d(0,Math.pow(b,c.re));case 2:return new d(-Math.pow(b,c.re),0);case 3:return new d(0,-Math.pow(b,c.re))}}if(0===a&&0===b&&0<c.re&&0<=c.im)return d.ZERO;var f=Math.atan2(b,a),e=m(a,b);a=Math.exp(c.re*e-c.im*f);b=c.im*e+c.re*f;return new d(a*Math.cos(b),a*Math.sin(b))},sqrt:function(){var a=this.re,b=this.im,\nc=this.abs();if(0<=a){if(0===b)return new d(Math.sqrt(a),0);var f=.5*Math.sqrt(2*(c+a))}else f=Math.abs(b)/Math.sqrt(2*(c-a));a=0>=a?.5*Math.sqrt(2*(c-a)):Math.abs(b)/Math.sqrt(2*(c+a));return new d(f,0>b?-a:a)},exp:function(){var a=Math.exp(this.re);return new d(a*Math.cos(this.im),a*Math.sin(this.im))},expm1:function(){var a=this.re,b=this.im;var c=Math.PI/4;b<-c||b>c?c=Math.cos(b)-1:(c=b*b,c*=-.5+c*(1/24+c*(-1/720+c*(1/40320+c*(-1/3628800+c*(1/4790014600+c*(-1/87178291200+1/20922789888E3*c)))))));\nreturn new d(Math.expm1(a)*Math.cos(b)+c,Math.exp(a)*Math.sin(b))},log:function(){var a=this.re,b=this.im;return new d(m(a,b),Math.atan2(b,a))},abs:function(){var a=this.re;var b=this.im,c=Math.abs(a),d=Math.abs(b);3E3>c&&3E3>d?a=Math.sqrt(c*c+d*d):(c<d?(c=d,d=a/b):d=b/a,a=c*Math.sqrt(1+d*d));return a},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var a=this.re,b=this.im;return new d(Math.sin(a)*e(b),Math.cos(a)*g(b))},cos:function(){var a=this.re,b=this.im;return new d(Math.cos(a)*\ne(b),-Math.sin(a)*g(b))},tan:function(){var a=2*this.re,b=2*this.im,c=Math.cos(a)+e(b);return new d(Math.sin(a)/c,g(b)/c)},cot:function(){var a=2*this.re,b=2*this.im,c=Math.cos(a)-e(b);return new d(-Math.sin(a)/c,g(b)/c)},sec:function(){var a=this.re,b=this.im,c=.5*e(2*b)+.5*Math.cos(2*a);return new d(Math.cos(a)*e(b)/c,Math.sin(a)*g(b)/c)},csc:function(){var a=this.re,b=this.im,c=.5*e(2*b)-.5*Math.cos(2*a);return new d(Math.sin(a)*e(b)/c,-Math.cos(a)*g(b)/c)},asin:function(){var a=this.re,b=this.im,\nc=(new d(b*b-a*a+1,-2*a*b)).sqrt();a=(new d(c.re-b,c.im+a)).log();return new d(a.im,-a.re)},acos:function(){var a=this.re,b=this.im,c=(new d(b*b-a*a+1,-2*a*b)).sqrt();a=(new d(c.re-b,c.im+a)).log();return new d(Math.PI/2-a.im,a.re)},atan:function(){var a=this.re,b=this.im;if(0===a){if(1===b)return new d(0,Infinity);if(-1===b)return new d(0,-Infinity)}var c=a*a+(1-b)*(1-b);a=(new d((1-b*b-a*a)/c,-2*a/c)).log();return new d(-.5*a.im,.5*a.re)},acot:function(){var a=this.re,b=this.im;if(0===b)return new d(Math.atan2(1,\na),0);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).atan():(new d(0!==a?a/0:0,0!==b?-b/0:0)).atan()},asec:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(0,Infinity);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).acos():(new d(0!==a?a/0:0,0!==b?-b/0:0)).acos()},acsc:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(Math.PI/2,Infinity);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).asin():(new d(0!==a?a/0:0,0!==b?-b/0:0)).asin()},sinh:function(){var a=this.re,b=this.im;return new d(g(a)*\nMath.cos(b),e(a)*Math.sin(b))},cosh:function(){var a=this.re,b=this.im;return new d(e(a)*Math.cos(b),g(a)*Math.sin(b))},tanh:function(){var a=2*this.re,b=2*this.im,c=e(a)+Math.cos(b);return new d(g(a)/c,Math.sin(b)/c)},coth:function(){var a=2*this.re,b=2*this.im,c=e(a)-Math.cos(b);return new d(g(a)/c,-Math.sin(b)/c)},csch:function(){var a=this.re,b=this.im,c=Math.cos(2*b)-e(2*a);return new d(-2*g(a)*Math.cos(b)/c,2*e(a)*Math.sin(b)/c)},sech:function(){var a=this.re,b=this.im,c=Math.cos(2*b)+e(2*a);\nreturn new d(2*e(a)*Math.cos(b)/c,-2*g(a)*Math.sin(b)/c)},asinh:function(){var a=this.im;this.im=-this.re;this.re=a;var b=this.asin();this.re=-this.im;this.im=a;a=b.re;b.re=-b.im;b.im=a;return b},acosh:function(){var a=this.acos();if(0>=a.im){var b=a.re;a.re=-a.im;a.im=b}else b=a.im,a.im=-a.re,a.re=b;return a},atanh:function(){var a=this.re,b=this.im,c=1<a&&0===b,e=1-a,g=1+a,h=e*e+b*b;a=0!==h?new d((g*e-b*b)/h,(b*e+g*b)/h):new d(-1!==a?a/0:0,0!==b?b/0:0);b=a.re;a.re=m(a.re,a.im)/2;a.im=Math.atan2(a.im,\nb)/2;c&&(a.im=-a.im);return a},acoth:function(){var a=this.re,b=this.im;if(0===a&&0===b)return new d(0,Math.PI/2);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).atanh():(new d(0!==a?a/0:0,0!==b?-b/0:0)).atanh()},acsch:function(){var a=this.re,b=this.im;if(0===b)return new d(0!==a?Math.log(a+Math.sqrt(a*a+1)):Infinity,0);var c=a*a+b*b;return 0!==c?(new d(a/c,-b/c)).asinh():(new d(0!==a?a/0:0,0!==b?-b/0:0)).asinh()},asech:function(){var a=this.re,b=this.im;if(this.isZero())return d.INFINITY;var c=a*a+\nb*b;return 0!==c?(new d(a/c,-b/c)).acosh():(new d(0!==a?a/0:0,0!==b?-b/0:0)).acosh()},inverse:function(){if(this.isZero())return d.INFINITY;if(this.isInfinite())return d.ZERO;var a=this.re,b=this.im,c=a*a+b*b;return new d(a/c,-b/c)},conjugate:function(){return new d(this.re,-this.im)},neg:function(){return new d(-this.re,-this.im)},ceil:function(a){a=Math.pow(10,a||0);return new d(Math.ceil(this.re*a)/a,Math.ceil(this.im*a)/a)},floor:function(a){a=Math.pow(10,a||0);return new d(Math.floor(this.re*\na)/a,Math.floor(this.im*a)/a)},round:function(a){a=Math.pow(10,a||0);return new d(Math.round(this.re*a)/a,Math.round(this.im*a)/a)},equals:function(a,b){var c=new d(a,b);return Math.abs(c.re-this.re)<=d.EPSILON&&Math.abs(c.im-this.im)<=d.EPSILON},clone:function(){return new d(this.re,this.im)},toString:function(){var a=this.re,b=this.im,c=\"\";if(this.isNaN())return\"NaN\";if(this.isZero())return\"0\";if(this.isInfinite())return\"Infinity\";0!==a&&(c+=a);0!==b&&(0!==a?c+=0>b?\" - \":\" + \":0>b&&(c+=\"-\"),b=Math.abs(b),\n1!==b&&(c+=b),c+=\"i\");return c?c:\"0\"},toVector:function(){return[this.re,this.im]},valueOf:function(){return 0===this.im?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return(0===this.re||-0===this.re)&&(0===this.im||-0===this.im)},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}};d.ZERO=new d(0,0);d.ONE=new d(1,0);d.I=new d(0,1);d.PI=new d(Math.PI,0);d.E=new d(Math.E,0);d.INFINITY=\nnew d(Infinity,Infinity);d.NAN=new d(NaN,NaN);d.EPSILON=1E-16; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return d}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(this);\n\n\n//# sourceURL=webpack://justpic-web/./node_modules/complex.js/complex.min.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _modules_Fractal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Fractal */ \"./src/modules/Fractal/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const canvas = document.querySelector(\"#canvas\");\r\n        const width = window.innerWidth;\r\n        const height = window.innerHeight;\r\n        canvas.style.width = width + \"px\";\r\n        canvas.style.height = height + \"px\";\r\n        const fractal = new _modules_Fractal__WEBPACK_IMPORTED_MODULE_1__.FractalComplexFunction(700, 700, ..._modules_Fractal__WEBPACK_IMPORTED_MODULE_1__.FractalComplexFunction.GetRandomParameters());\r\n        yield fractal.generate();\r\n        console.log(fractal.caption);\r\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\r\n            canvas: canvas\r\n        });\r\n        renderer.setPixelRatio(window.devicePixelRatio);\r\n        // Black background.\r\n        renderer.setClearColor(0x000000);\r\n        const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n        const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, fractal.width / fractal.height, 0.1, 1000);\r\n        camera.position.set(0, 0, 400);\r\n        // Light.\r\n        const light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff);\r\n        scene.add(light);\r\n        // Geometry.\r\n        const group = new three__WEBPACK_IMPORTED_MODULE_0__.Group();\r\n        // Group.\r\n        const vertices = [];\r\n        const colors = [];\r\n        fractal.points.forEach((point, i) => {\r\n            /*\r\n            const sphere = new THREE.SphereGeometry(2, 12, 12)\r\n            const material = new THREE.MeshBasicMaterial( {\r\n                color: point.color.toString(),\r\n            });\r\n            const mesh = new Mesh(sphere, material)\r\n            mesh.position.x = point.x - fractal.center.x\r\n            mesh.position.y = point.y - fractal.center.y\r\n            group.add(mesh)\r\n            */\r\n            vertices.push(point.x - fractal.center.x, point.y - fractal.center.y, i / 60);\r\n            colors.push(point.color.r, point.color.g, point.color.b);\r\n        });\r\n        console.log(colors);\r\n        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\r\n        geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(vertices, 3));\r\n        geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(colors, 3, true));\r\n        const material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({\r\n            size: 10,\r\n            vertexColors: true\r\n        });\r\n        const points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geometry, material);\r\n        group.add(points);\r\n        scene.add(group);\r\n        group.position.x;\r\n        const tick = () => {\r\n            requestAnimationFrame(tick);\r\n            group.rotation.x += 0.01;\r\n            group.rotation.y += 0.01;\r\n            renderer.render(scene, camera);\r\n        };\r\n        tick();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://justpic-web/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Drawing/Color.ts":
/*!**************************************!*\
  !*** ./src/modules/Drawing/Color.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Color {\r\n    constructor(r, g, b) {\r\n        r = Math.trunc(r);\r\n        g = Math.trunc(g);\r\n        b = Math.trunc(b);\r\n        if (r < 0 || r > 255)\r\n            throw new RangeError(\"'r' must be in [0,255]. Got \" + r);\r\n        if (g < 0 || g > 255)\r\n            throw new RangeError(\"'g' must be in [0,255]. Got \" + g);\r\n        if (b < 0 || b > 255)\r\n            throw new RangeError(\"'b' must be in [0,255]. Got \" + b);\r\n        this.r = r;\r\n        this.g = g;\r\n        this.b = b;\r\n    }\r\n    toString() {\r\n        const { r, g, b } = this;\r\n        return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');\r\n    }\r\n    static FromString(string) {\r\n        if (string[0] === '#')\r\n            string = string.substr(1);\r\n        if (string.length === 3)\r\n            string = string.split(\"\").map(char => char + char).join(\"\");\r\n        const dec = parseInt(string, 16);\r\n        if (Number.isNaN(dec))\r\n            throw new RangeError(\"Specified value doesn't represents existing color\");\r\n        return this.FromNumber(dec);\r\n    }\r\n    static GetGradient(fromColor, toColor, length) {\r\n        const gradient = Array(length);\r\n        gradient[0] = fromColor;\r\n        const stepR = (toColor.r - fromColor.r) / (length - 1);\r\n        const stepG = (toColor.g - fromColor.g) / (length - 1);\r\n        const stepB = (toColor.b - fromColor.b) / (length - 1);\r\n        for (let i = 1; i < length; i++) {\r\n            gradient[i] = {\r\n                r: gradient[i - 1].r + stepR,\r\n                g: gradient[i - 1].g + stepG,\r\n                b: gradient[i - 1].b + stepB,\r\n            };\r\n        }\r\n        return gradient.map(color => new Color(color.r, color.g, color.b));\r\n    }\r\n    static FromNumber(hex) {\r\n        const parts = [(hex >> 16) % 255, (hex >> 8) % 255, hex % 255];\r\n        return new Color(...parts);\r\n    }\r\n    static GetRandom() {\r\n        const random = Math.random();\r\n        const dec = random * ((1 << 24) - 1);\r\n        return Color.FromNumber(dec);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Drawing/Color.ts?");

/***/ }),

/***/ "./src/modules/Drawing/ColoredPoint.ts":
/*!*********************************************!*\
  !*** ./src/modules/Drawing/ColoredPoint.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/modules/Drawing/Point.ts\");\n\r\nclass ColoredPoint extends _Point__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(x, y, color) {\r\n        super(x, y);\r\n        this.color = color;\r\n    }\r\n    toString() {\r\n        return `ColoredPoint(${this.x}; ${this.y})${this.color}`;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColoredPoint);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Drawing/ColoredPoint.ts?");

/***/ }),

/***/ "./src/modules/Drawing/Point.ts":
/*!**************************************!*\
  !*** ./src/modules/Drawing/Point.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Point {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    toString() {\r\n        return `Point(${this.x}; ${this.y})`;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Drawing/Point.ts?");

/***/ }),

/***/ "./src/modules/Drawing/Size.ts":
/*!*************************************!*\
  !*** ./src/modules/Drawing/Size.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Size {\r\n    constructor(width, height) {\r\n        this.width = width;\r\n        this.height = height;\r\n    }\r\n    toString() {\r\n        return `Size[${this.width},${this.height}]`;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Size);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Drawing/Size.ts?");

/***/ }),

/***/ "./src/modules/Drawing/index.ts":
/*!**************************************!*\
  !*** ./src/modules/Drawing/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* reexport safe */ _Color__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"ColoredPoint\": () => (/* reexport safe */ _ColoredPoint__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"Point\": () => (/* reexport safe */ _Point__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"Size\": () => (/* reexport safe */ _Size__WEBPACK_IMPORTED_MODULE_3__.default)\n/* harmony export */ });\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ \"./src/modules/Drawing/Color.ts\");\n/* harmony import */ var _ColoredPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColoredPoint */ \"./src/modules/Drawing/ColoredPoint.ts\");\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ \"./src/modules/Drawing/Point.ts\");\n/* harmony import */ var _Size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Size */ \"./src/modules/Drawing/Size.ts\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Drawing/index.ts?");

/***/ }),

/***/ "./src/modules/Fractal/class/ComplexFunction.ts":
/*!******************************************************!*\
  !*** ./src/modules/Fractal/class/ComplexFunction.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ComplexFunction {\r\n    constructor(z, name, invoke, toString) {\r\n        this.z = z;\r\n        this.name = name;\r\n        this.invoke = invoke;\r\n        this.toString = toString;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComplexFunction);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/class/ComplexFunction.ts?");

/***/ }),

/***/ "./src/modules/Fractal/class/Fractal.ts":
/*!**********************************************!*\
  !*** ./src/modules/Fractal/class/Fractal.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Drawing */ \"./src/modules/Drawing/index.ts\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils */ \"./src/modules/Utils/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nclass Fractal {\r\n    constructor(width, height, iterations) {\r\n        this.points = [];\r\n        this._caption = new _Utils__WEBPACK_IMPORTED_MODULE_1__.Caption();\r\n        if (width <= 0)\r\n            throw new RangeError(\"width of an image must be greater than 0\");\r\n        if (height <= 0)\r\n            throw new RangeError(\"height of an image must be greater than 0\");\r\n        if (iterations < 0)\r\n            throw new RangeError(\"iteration count must be not less than 0\");\r\n        this.iterations = iterations;\r\n        this.palette = _Drawing__WEBPACK_IMPORTED_MODULE_0__.Color.GetGradient(_Drawing__WEBPACK_IMPORTED_MODULE_0__.Color.GetRandom(), _Drawing__WEBPACK_IMPORTED_MODULE_0__.Color.GetRandom(), iterations);\r\n        this.width = width;\r\n        this.height = height;\r\n        this.penSize = Math.round((width + height) / 2 / 1000 * 4);\r\n        this.center = new _Drawing__WEBPACK_IMPORTED_MODULE_0__.Point(Math.trunc(width / 2), Math.trunc(height / 2));\r\n    }\r\n    saveTo(path) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            //const buffer = this.canvas.toBuffer('image/png')\r\n            //await fs.writeFile(path, buffer)\r\n            console.log(\"not implemented\");\r\n        });\r\n    }\r\n    get caption() {\r\n        // TODO: Разобраться с тэгами.\r\n        //return `${this.name}. #${Config.GROUP_NAME}@${this.tag} ${this._caption.toString()}`\r\n        return `${this.name}. ${this._caption.toString()}. ${this.getColorsRange()} `;\r\n    }\r\n    getColorsRange() {\r\n        return `colors: ${this.palette[0]} - ${this.palette[this.palette.length - 1]}`;\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fractal);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/class/Fractal.ts?");

/***/ }),

/***/ "./src/modules/Fractal/index.ts":
/*!**************************************!*\
  !*** ./src/modules/Fractal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Fractal\": () => (/* reexport safe */ _class_Fractal__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"FractalTest\": () => (/* reexport safe */ _templates_FractalTest__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"FractalDefault\": () => (/* reexport safe */ _templates_FractalDefault__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"FractalComplexFunction\": () => (/* reexport safe */ _templates_FractalComplexFunction__WEBPACK_IMPORTED_MODULE_3__.default)\n/* harmony export */ });\n/* harmony import */ var _class_Fractal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Fractal */ \"./src/modules/Fractal/class/Fractal.ts\");\n/* harmony import */ var _templates_FractalTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/FractalTest */ \"./src/modules/Fractal/templates/FractalTest.ts\");\n/* harmony import */ var _templates_FractalDefault__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/FractalDefault */ \"./src/modules/Fractal/templates/FractalDefault.ts\");\n/* harmony import */ var _templates_FractalComplexFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/FractalComplexFunction */ \"./src/modules/Fractal/templates/FractalComplexFunction.ts\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/index.ts?");

/***/ }),

/***/ "./src/modules/Fractal/templates/FractalComplexFunction.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/Fractal/templates/FractalComplexFunction.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_Fractal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Fractal */ \"./src/modules/Fractal/class/Fractal.ts\");\n/* harmony import */ var complex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! complex.js */ \"./node_modules/complex.js/complex.min.js\");\n/* harmony import */ var complex_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(complex_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Drawing */ \"./src/modules/Drawing/index.ts\");\n/* harmony import */ var _class_ComplexFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/ComplexFunction */ \"./src/modules/Fractal/class/ComplexFunction.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst PI2 = Math.PI * 2;\r\n// Returns float number with precision.\r\nfunction prec(float) {\r\n    // Two digits after dot. Remove zeros at the end.\r\n    return float.toFixed(2).replace(/\\.?0+$/, \"\");\r\n}\r\n// Adds + before the number.\r\nfunction pm(str) {\r\n    return (str[0] === '-' ? '' : '+') + str;\r\n}\r\nfunction getRandomInt(min, max) {\r\n    if (!max) {\r\n        max = min;\r\n        min = 0;\r\n    }\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive\r\n}\r\nconst functions = [\r\n    [\r\n        \"Whirl\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(0, x * Math.cos(z)).exp().mul(Math.cos(x) * Math.sin(x) * x, 0),\r\n        (z) => `f(x)=xsin(x)cos(x)e^(${prec(Math.cos(z))}xi)`\r\n    ],\r\n    [\r\n        \"Unnamed\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(0, x * Math.cos(z)).exp().mul(Math.sin(x) * x, 0),\r\n        (z) => `f(x)=xsin(x)e^(${prec(Math.cos(z))}xi)`\r\n    ],\r\n    [\r\n        \"Sphere\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(0, x * Math.cos(z)).exp().mul(Math.cos(x * (z + 1)), 0),\r\n        (z) => `f(x)=cos(${prec(z + 1)}x)e^(${prec(Math.cos(z))}xi)`\r\n    ],\r\n    [\r\n        \"Unnamed2\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(0, x * Math.sin(z)).exp().mul(Math.sin(x + z) * x, 0),\r\n        (z) => `f(x)=xsin(x)e^(${prec(Math.sin(z))}xi)`\r\n    ],\r\n    [\r\n        \"Chaos\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(Math.cos(x), z * Math.sin(x)).exp().mul(x, 0),\r\n        (z) => `f(x)=xe^(cos(x)${pm(prec(z))}sin(x)i)`\r\n    ],\r\n    [\r\n        \"Hole\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(Math.cos(x), x * Math.sin(z)).exp().mul(z, x),\r\n        (z) => `f(x)=(${prec(z)}+xi)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`\r\n    ],\r\n    [\r\n        \"Knot\",\r\n        (z, x) => new (complex_js__WEBPACK_IMPORTED_MODULE_1___default())(Math.cos(x), x * Math.sin(z)).exp().mul(Math.sin(x) * Math.cos(x), 0),\r\n        (z) => `f(x)=sin(x)cos(x)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`\r\n    ]\r\n];\r\nfunction createFunction(z, functionId) {\r\n    if (functionId < 0 || functionId >= functions.length)\r\n        throw new RangeError(`functionId must be in range between 0 and ${functions.length - 1}`);\r\n    // Декораторы функций для включения z в область видимости.\r\n    // TODO: декоратор - несомненно слово крутое, но тут происходит лютая жесть.\r\n    // Нужно придумать, как сделать этот кусок кода более понятным.\r\n    return new _class_ComplexFunction__WEBPACK_IMPORTED_MODULE_3__.default(z, functions[functionId][0], (x) => functions[functionId][1](z, x), () => functions[functionId][2](z));\r\n}\r\nclass FractalComplexFunction extends _class_Fractal__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(width, height, z, functionId, step) {\r\n        super(width, height, Math.floor(z / step));\r\n        this.name = \"Complex Function Fractal\";\r\n        if (z <= 0)\r\n            throw new RangeError(\"z must be positive\");\r\n        if (step <= 0)\r\n            throw new RangeError(\"step must be positive\");\r\n        this.step = step;\r\n        this.func = createFunction(z, functionId);\r\n        this.tag = this.func.name;\r\n        this.setCaption();\r\n    }\r\n    setCaption() {\r\n        const add = this._caption.add.bind(this._caption);\r\n        add(this.func.name);\r\n        add(this.func.toString());\r\n        add(\"iterations\", prec(this.iterations));\r\n        add(\"step\", prec(this.step));\r\n    }\r\n    generate() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let maxLength = -1;\r\n            const points = [];\r\n            for (let x = 0, i = 0; i < this.iterations; x += this.step, i++) {\r\n                const point = this.func.invoke(x);\r\n                points.push(point);\r\n                maxLength = Math.max(maxLength, point.abs());\r\n            }\r\n            const scaledSize = new _Drawing__WEBPACK_IMPORTED_MODULE_2__.Size(this.width / maxLength / 2, this.height / maxLength / 2);\r\n            points.forEach((point, i) => {\r\n                const coloredScaledPoint = new _Drawing__WEBPACK_IMPORTED_MODULE_2__.ColoredPoint(point.re * scaledSize.width + this.center.x, point.im * scaledSize.height + this.center.y, this.palette[i]);\r\n                this.points.push(coloredScaledPoint);\r\n            });\r\n        });\r\n    }\r\n    static GetRandomParameters() {\r\n        return [\r\n            // z\r\n            getRandomInt(200, 1000),\r\n            // Function id.\r\n            getRandomInt(functions.length),\r\n            // Step : [0.1; 1.5)\r\n            Math.random() * 1.4 + 0.1\r\n        ];\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FractalComplexFunction);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/templates/FractalComplexFunction.ts?");

/***/ }),

/***/ "./src/modules/Fractal/templates/FractalDefault.ts":
/*!*********************************************************!*\
  !*** ./src/modules/Fractal/templates/FractalDefault.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Drawing */ \"./src/modules/Drawing/index.ts\");\n/* harmony import */ var _class_Fractal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/Fractal */ \"./src/modules/Fractal/class/Fractal.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nclass FractalDefault extends _class_Fractal__WEBPACK_IMPORTED_MODULE_1__.default {\r\n    constructor(width, height, iterations) {\r\n        super(width, height, iterations);\r\n        this.name = \"Default Fractal\";\r\n        this.tag = \"Default\";\r\n        this.setCaption();\r\n    }\r\n    setCaption() {\r\n    }\r\n    generate() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            for (let i = 0; i < this.iterations; i++) {\r\n                this.points.push(new _Drawing__WEBPACK_IMPORTED_MODULE_0__.ColoredPoint(i * 20, i * 10, new _Drawing__WEBPACK_IMPORTED_MODULE_0__.Color(255, 0, 0)));\r\n            }\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FractalDefault);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/templates/FractalDefault.ts?");

/***/ }),

/***/ "./src/modules/Fractal/templates/FractalTest.ts":
/*!******************************************************!*\
  !*** ./src/modules/Fractal/templates/FractalTest.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_Fractal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Fractal */ \"./src/modules/Fractal/class/Fractal.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nclass FractalTest extends _class_Fractal__WEBPACK_IMPORTED_MODULE_0__.default {\r\n    constructor(width, height, iterations) {\r\n        super(width, height, iterations);\r\n        this.name = \"Test fractal\";\r\n        this.tag = \"Test\";\r\n        // For test.\r\n        this.iterations = 50;\r\n        this.setCaption();\r\n    }\r\n    setCaption() {\r\n        this._caption.add('iterations', this.iterations);\r\n    }\r\n    generate() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n        });\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FractalTest);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Fractal/templates/FractalTest.ts?");

/***/ }),

/***/ "./src/modules/Utils/Caption.ts":
/*!**************************************!*\
  !*** ./src/modules/Utils/Caption.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Caption {\r\n    constructor() {\r\n        this.data = [];\r\n        this.keyValueDelimeter = \": \";\r\n        this.entryDelimeter = \" \";\r\n    }\r\n    add(key, value) {\r\n        if (!value)\r\n            this.data.push([key]);\r\n        else\r\n            this.data.push([key, value]);\r\n    }\r\n    toString() {\r\n        return this.data\r\n            .map(entry => entry.length == 1 ? entry[0] : entry.join(this.keyValueDelimeter))\r\n            .join(this.entryDelimeter);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Caption);\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Utils/Caption.ts?");

/***/ }),

/***/ "./src/modules/Utils/index.ts":
/*!************************************!*\
  !*** ./src/modules/Utils/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Caption\": () => (/* reexport safe */ _Caption__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _Caption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Caption */ \"./src/modules/Utils/Caption.ts\");\n\r\n\r\n\n\n//# sourceURL=webpack://justpic-web/./src/modules/Utils/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
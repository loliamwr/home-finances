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

/***/ "./node_modules/chart.js/dist/chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/***/ (() => {

eval("{throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\courses\\\\course_projects\\\\home-finance_js\\\\frontend\\\\node_modules\\\\chart.js\\\\dist\\\\chart.js'\");\n\n//# sourceURL=webpack://frontend/./node_modules/chart.js/dist/chart.js?\n}");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/styles.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\r\n\r\n\r\nclass App{\r\n    constructor() {\r\n        this.init();\r\n        new _router__WEBPACK_IMPORTED_MODULE_1__.Router();\r\n    }\r\n\r\n    init() {\r\n        this.setupDropdown();\r\n        this.setupMobileMenu();\r\n        this.setupActiveStates();\r\n    }\r\n\r\n    setupDropdown() {\r\n        const dropdownHeader = document.querySelector('.dropdown-header');\r\n        if (dropdownHeader) {\r\n            dropdownHeader.addEventListener('click', () => {\r\n                dropdownHeader.classList.toggle('open');\r\n                const dropdownList = document.querySelector('.dropdown-list');\r\n                dropdownList.classList.toggle('open');\r\n            });\r\n        }\r\n    }\r\n\r\n    setupActiveStates() {\r\n\r\n        const navItems = document.querySelectorAll('.nav-item:not(.sub-item)');\r\n        navItems.forEach(item => {\r\n            item.addEventListener('click', (e) => {\r\n                if (!item.classList.contains('dropdown-header')) {\r\n                    // Убираем активный класс у всех\r\n                    navItems.forEach(navItem => {\r\n                        navItem.classList.remove('active');\r\n                    });\r\n\r\n                    item.classList.add('active');\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    setupMobileMenu() {\r\n        window.toggleMobileMenu = () => {\r\n            const sidebar = document.querySelector('.sidebar');\r\n            sidebar.classList.toggle('mobile-open');\r\n        }\r\n\r\n        this.addMobileMenuButton();\r\n        window.addEventListener('resize', () => this.addMobileMenuButton());\r\n\r\n        document.addEventListener('click', (event) => {\r\n            if (window.innerWidth <= 768) {\r\n                const sidebar = document.querySelector('.sidebar');\r\n                const menuBtn = document.querySelector('.mobile-menu-btn');\r\n\r\n                if (sidebar.classList.contains('mobile-open') &&\r\n                    !sidebar.contains(event.target) &&\r\n                    (!menuBtn || !menuBtn.contains(event.target))) {\r\n                    sidebar.classList.remove('mobile-open');\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    addMobileMenuButton() {\r\n        if (window.innerWidth <= 768) {\r\n            const existingBtn = document.querySelector('.mobile-menu-btn');\r\n            if (!existingBtn) {\r\n                const menuBtn = document.createElement('button');\r\n                menuBtn.className = 'mobile-menu-btn';\r\n                menuBtn.innerHTML = '☰';\r\n                menuBtn.onclick = window.toggleMobileMenu;\r\n                document.body.appendChild(menuBtn);\r\n            }\r\n        } else {\r\n            const menuBtn = document.querySelector('.mobile-menu-btn');\r\n            if (menuBtn) {\r\n                menuBtn.remove();\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nwindow.updateBalance = function(amount) {\r\n    const balanceElement = document.getElementById('balance-amount');\r\n    if (balanceElement) {\r\n        balanceElement.textContent = amount + '$';\r\n    }\r\n}\r\n\r\nnew App();\n\n//# sourceURL=webpack://frontend/./src/app.js?\n}");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n\r\n\r\nclass Dashboard {\r\n    constructor() {\r\n        console.log(\"Dashboard init\");\r\n        this.COLORS = [\"#FF0000\", \"#FFA500\", \"#FFFF00\", \"#00C49F\", \"#0088FE\"];\r\n\r\n        // Шаблон уже загружен через роутер, можно сразу рисовать графики\r\n        this.renderCharts();\r\n    }\r\n\r\n    renderCharts() {\r\n        const incomeData = {\r\n            labels: [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\"],\r\n            datasets: [{\r\n                data: [400, 600, 300, 200, 150],\r\n                backgroundColor: this.COLORS,\r\n                hoverOffset: 4\r\n            }]\r\n        };\r\n\r\n        const expenseData = {\r\n            labels: [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\"],\r\n            datasets: [{\r\n                data: [100, 200, 400, 500, 300],\r\n                backgroundColor: this.COLORS,\r\n                hoverOffset: 4\r\n            }]\r\n        };\r\n\r\n        const incomeCanvas = document.getElementById(\"incomeChart\");\r\n        const expenseCanvas = document.getElementById(\"expenseChart\");\r\n\r\n        if (!incomeCanvas || !expenseCanvas) {\r\n            console.warn(\"Canvas для графиков ещё не найден!\");\r\n            return;\r\n        }\r\n\r\n        // Регистрируем все контроллеры и плагины\r\n        chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);\r\n\r\n        new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(incomeCanvas, {\r\n            type: \"pie\",\r\n            data: incomeData,\r\n            options: {}\r\n        });\r\n\r\n        new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(expenseCanvas, {\r\n            type: \"pie\",\r\n            data: expenseData,\r\n            options: {}\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/components/dashboard.js?\n}");

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\nclass Login{\r\n    constructor() {\r\n        console.log('login')\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/login.js?\n}");

/***/ }),

/***/ "./src/components/register.js":
/*!************************************!*\
  !*** ./src/components/register.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Register: () => (/* binding */ Register)\n/* harmony export */ });\nclass Register{\r\n    constructor() {\r\n        console.log('login')\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/register.js?\n}");

/***/ }),

/***/ "./src/components/transactions.js":
/*!****************************************!*\
  !*** ./src/components/transactions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Transactions: () => (/* binding */ Transactions)\n/* harmony export */ });\nclass Transactions{\r\n    constructor() {\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/components/transactions.js?\n}");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard.js\");\n/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login */ \"./src/components/login.js\");\n/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register */ \"./src/components/register.js\");\n/* harmony import */ var _components_transactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/transactions */ \"./src/components/transactions.js\");\n\r\n\r\n\r\n\r\n\r\nclass Router{\r\n    constructor() {\r\n        this.titlePageElement = document.getElementById('title');\r\n        this.contentPageElement = document.getElementById('content');\r\n        this.initEvents();\r\n        this.routes =[\r\n            {\r\n                route: '/',\r\n                title:'Главная',\r\n                filePathTemplate:'/templates/dashboard.html',\r\n                useLayout: '/templates/layout.html',\r\n                load: ()=>{\r\n                    new _components_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard();\r\n                }\r\n\r\n            },\r\n            {\r\n                route: '/login',\r\n                title:'Вход',\r\n                filePathTemplate:'/templates/login.html',\r\n                useLayout:false,\r\n                load: ()=>{\r\n                    new _components_login__WEBPACK_IMPORTED_MODULE_1__.Login();\r\n                }\r\n            },\r\n            {\r\n                route: '/register',\r\n                title:'Регистрация',\r\n                filePathTemplate:'/templates/register.html',\r\n                useLayout:false,\r\n                load: ()=>{\r\n                    new _components_register__WEBPACK_IMPORTED_MODULE_2__.Register();\r\n                }\r\n            },\r\n            {\r\n                route: '/transactions',\r\n                title:'Доходы и расходы',\r\n                filePathTemplate:'/templates/transactions.html',\r\n                useLayout:'/templates/layout.html',\r\n                load: ()=>{\r\n                    new _components_transactions__WEBPACK_IMPORTED_MODULE_3__.Transactions();\r\n                }\r\n            },\r\n        ]\r\n    };\r\n    initEvents(){\r\n        window.addEventListener('DOMContentLoaded',this.activateRoute.bind(this));\r\n        window.addEventListener('popstate',this.activateRoute.bind(this));\r\n    }\r\n\r\n    async activateRoute(){\r\n        const urlRoute = window.location.pathname;\r\n        const newRoute = this.routes.find(item => item.route === urlRoute);\r\n\r\n        if(newRoute){\r\n                if (newRoute.title){\r\n                    this.titlePageElement.innerText = newRoute.title + ' | Finance App'\r\n                }\r\n                if(newRoute.filePathTemplate){\r\n                    let contentBlock = this.contentPageElement;\r\n                    if(newRoute.useLayout){\r\n                        this.contentPageElement.innerHTML= await fetch(newRoute.useLayout).then(response => response.text());\r\n                        contentBlock = document.getElementById('content-layout');\r\n\r\n                    }\r\n                    contentBlock.innerHTML= await fetch(newRoute.filePathTemplate).then(response => response.text());\r\n\r\n\r\n                }\r\n\r\n                if(newRoute.load && typeof newRoute.load === 'function'){\r\n                   newRoute.load();\r\n                }\r\n        }else{\r\n            console.log('No route found');\r\n\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/router.js?\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
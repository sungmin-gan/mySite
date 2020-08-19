(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DataTransferService.ts":
/*!****************************************!*\
  !*** ./src/app/DataTransferService.ts ***!
  \****************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class DataTransferService {
    constructor() {
        this._mode = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.viewMode$ = this._mode.asObservable();
        this.viewPage$ = this._page.asObservable();
    }
    updateMode(mode) {
        this._mode.next(mode);
    }
    updatePage(page) {
        this._page.next(page);
    }
}
DataTransferService.ɵfac = function DataTransferService_Factory(t) { return new (t || DataTransferService)(); };
DataTransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataTransferService, factory: DataTransferService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-home/home.component */ "./src/app/page-home/home.component.ts");
/* harmony import */ var _page_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-services/services.component */ "./src/app/page-services/services.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-contact/contact.component */ "./src/app/page-contact/contact.component.ts");
/* harmony import */ var _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-projects/projects.component */ "./src/app/page-projects/projects.component.ts");








const routes = [
    { path: '',
        component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
    },
    { path: 'services',
        component: _page_services_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesPage"],
    },
    { path: 'projects',
        component: _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPage"],
    },
    { path: 'contact',
        component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactPage"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataTransferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTransferService */ "./src/app/DataTransferService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a0) { return { "header-light": a0 }; };
const _c1 = function (a0) { return { "title-light": a0 }; };
const _c2 = function () { return [""]; };
const _c3 = function (a0) { return { "navList-light": a0 }; };
const _c4 = function (a0, a1) { return { "disabled": a0, "disabled-light": a1 }; };
const _c5 = function () { return ["/services"]; };
const _c6 = function () { return ["/projects"]; };
const _c7 = function () { return ["/contact"]; };
const _c8 = function (a0) { return { "main-light": a0 }; };
const _c9 = function (a0) { return { "footer-light": a0 }; };
class AppComponent {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        this.lightMode = false;
        this.page = "home";
        this.dataTransfer.viewMode$.subscribe((mode) => (this.lightMode = mode));
        this.dataTransfer.viewPage$.subscribe((page) => (this.page = page));
    }
    ngDoCheck() {
        this.dataTransfer.updateMode(this.lightMode);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 41, consts: [[3, "ngClass"], [1, "container-nav"], [1, "title", 3, "ngClass"], [3, "routerLink"], [1, "navList", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SUNGMIN GAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Front-End Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Designed & created by Sungmin Gan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c4, !ctx.lightMode && ctx.page == "home", ctx.lightMode && ctx.page == "home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c4, !ctx.lightMode && ctx.page == "resume", ctx.lightMode && ctx.page == "resume"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c4, !ctx.lightMode && ctx.page == "projects", ctx.lightMode && ctx.page == "projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c4, !ctx.lightMode && ctx.page == "contact", ctx.lightMode && ctx.page == "contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c8, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c9, ctx.lightMode));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["header[_ngcontent-%COMP%] {\n    background: #333;\n    padding-top: 0.5em;\n}\n\n.container-nav[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%] {\n    text-align: left;\n}\n\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    font-size: 1.8rem;\n    font-weight: 400; \n    margin-top: 0.25em;\n    color: whitesmoke;\n}\n\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: whitesmoke;\n    text-decoration: none;\n}\n\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0.9em;\n    font-family: 'Titillium Web', sans-serif;\n    margin-top: 0;\n    color: whitesmoke;\n}\n\nnav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n    position: relative;\n    margin-bottom: 1em;\n}\n\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 2em;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: whitesmoke;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: grey;\n}\n\nmain[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 90vh;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    background: #222;\n    padding-bottom: 4rem;\n    color: lightgrey;\n    object-fit: cover;\n}\n\nfooter[_ngcontent-%COMP%] {\n    background: #333;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 2.5rem;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: right;\n    width: 90%;\n    color: #333;\n    font-size: .85em;\n}\n\n.disabled[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.disabled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: grey;\n}\n\n\n\n.header-light[_ngcontent-%COMP%] {\n    background: grey;\n}\n\n.title-light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: grey;\n}\n\n.title-light[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.title-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.navList-light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.navList-light[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\n    color: lightgrey;\n}\n\n.main-light[_ngcontent-%COMP%] {\n    background: whitesmoke;\n    color: #555;\n}\n\n.footer-light[_ngcontent-%COMP%] {\n    background: grey;\n}\n\n.footer-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: grey;\n}\n\n.disabled-light[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.disabled-light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: lightgrey;\n}\n\n\n\n@media only screen and (max-width: 685px) {\n    .container-nav[_ngcontent-%COMP%] {\n        flex-direction: column;\n        justify-content: flex-start;\n    }\n\n    .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        text-align: center;\n    }\n\n    nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0 1em; \n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7a0JBRWtCOztBQUVsQjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztrQkFFa0I7O0FBRWxCO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztrQkFFa0I7O0FBRWxCO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tXG5EYXJrIE1vZGVcbi0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuLmNvbnRhaW5lci1uYXYge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRpdGxlIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7IFxuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRpdGxlIGgxIGEge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRpdGxlIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOWVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxubmF2IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxubmF2IGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG5uYXYgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbmZvb3RlciBwIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmRpc2FibGVkIGEge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5MaWdodCBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5oZWFkZXItbGlnaHQge1xuICAgIGJhY2tncm91bmQ6IGdyZXk7XG59XG5cbi50aXRsZS1saWdodCBhe1xuICAgIGNvbG9yOiBncmV5O1xufVxuLnRpdGxlLWxpZ2h0IGgxIGEge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4udGl0bGUtbGlnaHQgcCB7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5uYXZMaXN0LWxpZ2h0IGEge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLm5hdkxpc3QtbGlnaHQgbGkgOmhvdmVye1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5tYWluLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4uZm9vdGVyLWxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xufVxuXG4uZm9vdGVyLWxpZ2h0IHAge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4uZGlzYWJsZWQtbGlnaHQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5kaXNhYmxlZC1saWdodCBhIHtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5NZWRpYSBRdWVyaWVzXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjg1cHgpIHtcbiAgICAuY29udGFpbmVyLW5hdiB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAudGl0bGUgaDEsIC50aXRsZSBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIG5hdiBsaSB7XG4gICAgICAgIG1hcmdpbjogMCAxZW07IFxuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-home/home.component */ "./src/app/page-home/home.component.ts");
/* harmony import */ var _page_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-services/services.component */ "./src/app/page-services/services.component.ts");
/* harmony import */ var _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-projects/projects.component */ "./src/app/page-projects/projects.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-contact/contact.component */ "./src/app/page-contact/contact.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        _page_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesPage"],
        _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsPage"],
        _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactPage"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _page_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    _page_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesPage"],
                    _page_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsPage"],
                    _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactPage"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page-contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page-contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataTransferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataTransferService */ "./src/app/DataTransferService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "container-contact-light": a0 }; };
const _c1 = function (a0) { return { "card-light": a0 }; };
const _c2 = function (a0) { return { "icon-contact-light": a0 }; };
const _c3 = function (a0) { return { "card-text-light": a0 }; };
const _c4 = function (a0) { return { "form-light": a0 }; };
const _c5 = function (a0) { return { "comments-light": a0 }; };
class ContactPage {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        this.lightMode = false;
        this.dataTransfer.viewMode$.subscribe((mode) => (this.lightMode = mode));
        this.dataTransfer.updatePage("contact");
    }
}
ContactPage.ɵfac = function ContactPage_Factory(t) { return new (t || ContactPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"])); };
ContactPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPage, selectors: [["page-contact"]], decls: 56, vars: 21, consts: [[1, "container-page"], [1, "container-contact", 3, "ngClass"], [1, "card", 3, "ngClass"], [1, "fas", "fa-user-astronaut", "icon-contact", 3, "ngClass"], [1, "card-text-container"], [1, "card-text", 3, "ngClass"], [1, "fab", "fa-linkedin", "icon-info", 3, "ngClass"], ["href", "https://www.linkedin.com/in/sungmin-gan", "target", "_blank"], ["action", "POST", "data-netlify", "true", 3, "ngClass"], [1, "basic"], [1, "col-1"], ["for", "fname"], ["type", "text", "id", "fname", "name", "fname", "required", ""], [1, "col-2"], ["for", "lname"], ["type", "text", "id", "lname", "name", "lname", "required", ""], [1, "contact-info"], ["for", "company"], ["type", "text", "id", "company", "name", "company"], [1, "purpose-text"], [1, "purpose-buttons"], [1, "col-4"], ["type", "radio", "id", "job-lt", "name", "purpose", "value", "job-lt"], ["for", "job-lt"], ["type", "radio", "id", "job-st", "name", "purpose", "value", "job-st"], ["for", "job-st"], [1, "col-5"], ["type", "radio", "id", "feedback", "name", "purpose", "value", "feedback"], ["for", "feedback"], ["type", "radio", "id", "other", "name", "purpose", "value", "other"], ["for", "other"], [1, "comments", 3, "ngClass"], ["required", ""], [1, "field"], ["data-netlify-recaptcha", "true"], ["type", "submit", "value", "SEND", 1, "submit"]], template: function ContactPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "linkedin.com/in/sungmin-gan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Last name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "eMail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I am contacting you about...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "A long-term job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "A short-term job");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Giving feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Something else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c4, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, ctx.lightMode));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container-page[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    padding-bottom: 3em;\n}\n\n.container-contact[_ngcontent-%COMP%] {\n    display: flex;\n    width: 70%;\n    margin: 0 auto;\n    margin-top: 5em;\n    justify-content: center;\n    border: 2px solid #555;\n}\n\n.card[_ngcontent-%COMP%] {\n    width: 39%;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 2em; \n    padding-right: 0.5em;\n    padding-top: 5em;\n    border-right: 1px solid #333;\n}\n\n.card-text-container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 0.9rem;\n}\n\n.card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: lightgrey;\n    text-decoration: none;\n    font-size: 0.9rem;\n}\n\n.icon-info[_ngcontent-%COMP%] {\n    color: lightgrey;\n    font-size: 0.8rem;\n    margin-right: 0.75em;\n}\n\n.icon-contact[_ngcontent-%COMP%] {\n    font-size: 6em;\n    color: lightgrey;\n}\n\nform[_ngcontent-%COMP%] {\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 2em;\n    padding-left: 0.5em;\n    margin-left: 1em;\n}\n\n.basic[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n}\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n.basic[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 95%;\n}\n\n.col-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    margin-left: 3%;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    \n    \n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    outline: none;\n    border: none;\n    background: lightgrey;\n    margin-bottom: 0.5em;\n    font-size: 0.75rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 99%;\n}\n\n.purpose-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n}\n\n.purpose-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n}\n\n.col-5[_ngcontent-%COMP%] {\n    margin-left: 1em;\n}\n\n.comments[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\n    width: 99%;\n    height: 15vh;\n    background: lightgrey;\n}\n\n.comments[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n}\n\n.submit[_ngcontent-%COMP%] {\n    width: 15%;\n    margin: 0 auto;\n    margin-top: 3em;\n    outline: none;\n    background: lightgrey;\n    border: none;\n    font-size: 0.8rem;\n    padding: 0.5em 0 0.5em 0;\n    font-weight: bold;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: grey;\n}\n\n\n\n.container-contact-light[_ngcontent-%COMP%] {\n    border: 2px solid grey;\n}\n\n.card-light[_ngcontent-%COMP%] {\n    border-right: 1px solid lightgrey;\n}\n\n.card-text-light[_ngcontent-%COMP%], .card-text-light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #555;\n}\n\n.icon-contact-light[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n.form-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    background: whitesmoke;\n    border: 2px solid #555;\n}\n\n.comments-light[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    background: whitesmoke;\n    border: 2px solid #555;\n}\n\n\n\n@media only screen and (max-width: 850px) {\n    \n    .container-contact[_ngcontent-%COMP%] {\n        flex-direction: column;\n        width: 100%;\n        border: none;\n        margin-top: 0;\n        margin-left: 0;\n        margin-right: 0;\n        padding-left: 0;\n        padding-right: 0;\n    }\n\n    .card[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n        width: 80%;\n        border: none;\n        padding-left: 0;\n        padding-right: 0;\n        margin-left: 0;\n        margin-right: 0;\n        margin: 0 auto;\n        padding-bottom: 1em;\n    }\n\n    form[_ngcontent-%COMP%] {\n        border-top: 1px solid #333;\n    }\n\n    .form-light[_ngcontent-%COMP%] {\n        border-top: 1px solid lightgrey;\n    }\n\n    .card[_ngcontent-%COMP%] {\n        text-align: center;\n    } \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlLWNvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztrQkFFa0I7O0FBRWxCO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBOzs7QUFHQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7O2tCQUVrQjs7QUFFbEI7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTs7a0JBRWtCOztBQUVsQjs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7UUFDZixjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksK0JBQStCO0lBQ25DOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6ImFwcC9wYWdlLWNvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLVxuRGFyayBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWluZXItcGFnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xufVxuXG4uY29udGFpbmVyLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcbn1cblxuLmNhcmQge1xuICAgIHdpZHRoOiAzOSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMmVtOyBcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XG59XG5cbi5jYXJkLXRleHQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY2FyZC10ZXh0IGEge1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uaWNvbi1pbmZvIHtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC43NWVtO1xufVxuXG4uaWNvbi1jb250YWN0IHtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG5mb3JtIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmJhc2ljIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5jb2wtMSwgLmNvbC0yIHtcbiAgICB3aWR0aDogNTAlO1xufVxuLmJhc2ljIGlucHV0IHtcbiAgICB3aWR0aDogOTUlO1xufVxuLmNvbC0yIGlucHV0LCAuY29sLTIgbGFiZWx7XG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgICBcbiAgICBcbn1cblxuZm9ybSBpbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbyBpbnB1dCB7XG4gICAgd2lkdGg6IDk5JTtcbn1cblxuLnB1cnBvc2UtdGV4dCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuLnB1cnBvc2UtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb2wtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmNvbW1lbnRzIHRleHRhcmVhe1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxuLmNvbW1lbnRzIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uc3VibWl0IHtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VibWl0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVxuTGlnaHQgTW9kZVxuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uY29udGFpbmVyLWNvbnRhY3QtbGlnaHQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XG59XG5cbi5jYXJkLWxpZ2h0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5jYXJkLXRleHQtbGlnaHQsIC5jYXJkLXRleHQtbGlnaHQgYSB7XG4gICAgY29sb3I6ICM1NTU7XG59XG5cbi5pY29uLWNvbnRhY3QtbGlnaHQge1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9ybS1saWdodCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTU1O1xufVxuXG4uY29tbWVudHMtbGlnaHQgdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVxuTWVkaWEgUXVlcmllc1xuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgXG4gICAgLmNvbnRhaW5lci1jb250YWN0IHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5jYXJkICwgZm9ybSB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICB9XG5cbiAgICBmb3JtIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzM7XG4gICAgfVxuXG4gICAgLmZvcm0tbGlnaHQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0gXG4gICAgXG59XG5cblxuXG4iXX0= */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "page-contact",
                templateUrl: "./contact.component.html",
                styleUrls: ["./contact.component.css"],
                animations: [],
            }]
    }], function () { return [{ type: _DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataTransferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataTransferService */ "./src/app/DataTransferService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "banner-light": a0 }; };
const _c1 = function (a0) { return { "container-mode-light": a0 }; };
const _c2 = function (a0) { return { "light-light": a0 }; };
const _c3 = function (a0) { return { "dark-light": a0 }; };
const _c4 = function (a0) { return { "container-about-light": a0 }; };
const _c5 = function (a0) { return { "container-plank-light": a0 }; };
class HomePage {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        this.dataTransfer.viewMode$.subscribe((mode) => (this.lightMode = mode));
        this.dataTransfer.updatePage("home");
    }
    makeLight() {
        this.dataTransfer.updateMode(true);
    }
    makeDark() {
        this.dataTransfer.updateMode(false);
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"])); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["page-home"]], decls: 33, vars: 24, consts: [[1, "banner", 3, "ngClass"], [1, "container-mode", 3, "ngClass"], [1, "light", 3, "ngClass", "click"], [1, "dark", 3, "ngClass", "click"], [1, "container-about", 3, "ngClass"], [1, "container-photo-left", 3, "ngClass"], [1, "container-img"], [1, "far", "fa-user-circle", "icon-home"], [1, "container-text", 2, "margin-right", "2em"], [1, "fas", "fa-heartbeat", "icon-home"], [1, "container-photo-left", "panel-3", 3, "ngClass"], [1, "fas", "fa-mug-hot", "icon-home"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WELCOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_p_click_4_listener() { return ctx.makeLight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LIGHT MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePage_Template_p_click_6_listener() { return ctx.makeDark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DARK MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A little bit about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hey there! I'm Sungmin, a budding web developer based in the San Francisco Bay Area. I'm a recent graduate of Cal State East Bay (located in Hayward, Califonia), and I received a B.S. in Computer Science. Although web development is my passion and primary focus, I also have experience writing programs in C++, Python, and Java. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Why did I choose to become a web developer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "My journey to becoming a programmer actually happened by accident. During my early college years, I wasn't really sure what career I wanted to pursue. Trying to play it \"safe,\" I pursued a Business degree, during which I chose a computer science class for an elective. Lo and behold! I had found my passion. The sheer amount of potential in programming still continues to amaze me. Being the creative person that I am, going into web development was a very natural fit for me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Coding Philosophy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I like to keep it simple. My two priorities when making websites are functionality and aesthetics. It's crucial to write good code at every stage of a project, so that its structure is stable and easily built-upon or modifiable. At the same time, the finished product should be pleasing to the eye and intuitive to the viewer. This balance - of function and form - is an aspect of my work I'm looking forward to developing in my career. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c4, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c5, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c5, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c5, ctx.lightMode));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".banner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 70vh;\n    margin-bottom: 2em;\n    background-image: url('desertCropped.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: 'Audiowide', cursive;\n    text-align: center;\n    font-size: 5rem;\n    color: whitesmoke;\n    text-shadow: 0 0 8px rgba(255,255,255,0.5);\n    margin: 0;\n    transition: all 0.2s;\n}\n\n.container-mode[_ngcontent-%COMP%] {\n    width: 25%;\n    display: flex;\n    justify-content: center;\n    margin: 0 auto;\n    margin-top: 1em;\n}\n\n.container-mode[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.light[_ngcontent-%COMP%] {\n    width: 50%;\n    border: 2px solid lightgrey;\n    font-size: 1rem;\n}\n\n.dark[_ngcontent-%COMP%] {\n    width: 50%;\n    border: 2px solid lightgrey;\n    border-left: none;\n    background: rgba(102,98,148,0.75);\n    font-size: 1rem;\n}\n\n.container-mode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin: 0;\n    color: whitesmoke;\n    display: flex;\n    justify-content: center;\n}\n\n.img-home[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.container-about[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n}\n\n.container-photo-left[_ngcontent-%COMP%] {\n    width: 90%;\n    display: flex;\n    justify-content: space-between;\n    margin: 0 auto;\n    margin-top: 2em;\n    border-bottom: 1px solid #333;\n}\n\n.panel-3[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.container-img[_ngcontent-%COMP%] {\n    width: 19%;\n    padding: 1em 0;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.container-text[_ngcontent-%COMP%] {\n    width: 81%;\n    font-size: 1rem;\n    padding-left: 2em;\n    padding-bottom: 1em;\n}\n\n.container-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    text-transform: uppercase;\n    font-weight: 400;\n}\n\n.container-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 1rem;\n}\n\n.icon-home[_ngcontent-%COMP%] {\n    font-size: 5em;\n    color: lightgrey;\n}\n\n\n\n.banner-light[_ngcontent-%COMP%] {\n    background-image: url('desertDayCroppedCompressed.jpg');\n}\n\n.banner-light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #222;\n    text-shadow: none;\n    transition: all 0.2s;\n}\n\n.container-mode-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #444;\n}\n\n.light-light[_ngcontent-%COMP%] {\n    border: 2px solid #555;\n    background: rgba(164,104,132,0.75);\n}\n\n.dark-light[_ngcontent-%COMP%] {\n    border: 2px solid #555;\n    border-left: none;\n    background: none;\n}\n\n.container-about-light[_ngcontent-%COMP%], .container-about-light[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #555;\n}\n\n.container-plank-light[_ngcontent-%COMP%] {\n    border-bottom: 1px solid lightgrey;\n}\n\n.panel-3[_ngcontent-%COMP%] {\n    border: none;\n}\n\n\n\n@media only screen and (max-width: 730px) {\n    \n    .banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    \n    .container-mode[_ngcontent-%COMP%] {\n        width: 50%;\n    }\n\n    .container-mode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 0.9em;\n    }\n\n    .container-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        font-size: 0.9em;\n    }\n\n    .icon-home[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlLWhvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztrQkFFa0I7O0FBRWxCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMENBQThEO0lBQzlELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztrQkFFa0I7O0FBRWxCO0lBQ0ksdURBQTJFO0FBQy9FOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztrQkFFa0I7O0FBRWxCOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0oiLCJmaWxlIjoiYXBwL3BhZ2UtaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tXG5EYXJrIE1vZGVcbi0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmJhbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Rlc2VydENyb3BwZWQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYW5uZXIgaDIge1xuICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHRleHQtc2hhZG93OiAwIDAgOHB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgICBtYXJnaW46IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5jb250YWluZXItbW9kZSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5jb250YWluZXItbW9kZSA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpZ2h0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5kYXJrIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiw5OCwxNDgsMC43NSk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFpbmVyLW1vZGUgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLWhvbWUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lci1hYm91dCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1waG90by1sZWZ0IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbn1cblxuLnBhbmVsLTMge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1pbWcge1xuICAgIHdpZHRoOiAxOSU7XG4gICAgcGFkZGluZzogMWVtIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci10ZXh0IHtcbiAgICB3aWR0aDogODElO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4uY29udGFpbmVyLXRleHQgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRhaW5lci10ZXh0IHB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uaWNvbi1ob21lIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5MaWdodCBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5iYW5uZXItbGlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVzZXJ0RGF5Q3JvcHBlZENvbXByZXNzZWQuanBnXCIpO1xufVxuXG4uYmFubmVyLWxpZ2h0IGgyIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmNvbnRhaW5lci1tb2RlLWxpZ2h0IHAge1xuICAgIGNvbG9yOiAjNDQ0O1xufVxuXG4ubGlnaHQtbGlnaHQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjQsMTA0LDEzMiwwLjc1KTtcbn1cblxuLmRhcmstbGlnaHQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1hYm91dC1saWdodCwgLmNvbnRhaW5lci1hYm91dC1saWdodCBpIHtcbiAgICBjb2xvcjogIzU1NTtcbn1cblxuLmNvbnRhaW5lci1wbGFuay1saWdodCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLnBhbmVsLTMge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVxuTWVkaWEgUXVlcmllc1xuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMHB4KSB7XG4gICAgXG4gICAgLmJhbm5lciBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIH1cbiAgICBcbiAgICAuY29udGFpbmVyLW1vZGUge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5jb250YWluZXItbW9kZSBwIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLXRleHQgaDIsIC5jb250YWluZXItdGV4dCBwe1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIH1cblxuICAgIC5pY29uLWhvbWUge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgfVxuXG5cbn1cblxuXG5cblxuIl19 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "page-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"],
                animations: [],
            }]
    }], function () { return [{ type: _DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-projects/projects.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page-projects/projects.component.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataTransferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataTransferService */ "./src/app/DataTransferService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "card-light": a0 }; };
const _c1 = function (a0) { return { "project-text-light": a0 }; };
function ProjectsPage_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SUNGMIN GAN v2.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular, Mobile-friendly");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.lightMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r0.lightMode));
} }
function ProjectsPage_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " VISIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ALCOSTA SMOKE SHOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "React");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.lightMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r1.lightMode));
} }
function ProjectsPage_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " VISIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ANT COLONY AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Python");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.lightMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r2.lightMode));
} }
function ProjectsPage_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " VISIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "JOON-RAIN BLOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "React");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.lightMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r3.lightMode));
} }
function ProjectsPage_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " VISIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SUNGMIN GAN v1.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.lightMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r4.lightMode));
} }
const _c2 = function (a0) { return { "container-page-light": a0 }; };
const _c3 = function (a0) { return { "tags-light": a0 }; };
class ProjectsPage {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        this.lightMode = false;
        this.filter = "all";
        this.dataTransfer.viewMode$.subscribe((mode) => (this.lightMode = mode));
        this.dataTransfer.updatePage("projects");
    }
    filterSwitch(keyword) {
        this.filter = keyword;
    }
    allStyles() {
        if (!this.lightMode && this.filter == "all") {
            return { background: '#333' };
        }
        else if (this.lightMode && this.filter == "all") {
            return { background: 'lightgrey' };
        }
        else {
            return null;
        }
    }
    angularStyles() {
        if (!this.lightMode && this.filter == "angular") {
            return { background: '#333' };
        }
        else if (this.lightMode && this.filter == "angular") {
            return { background: 'lightgrey' };
        }
        else {
            return null;
        }
    }
    reactStyles() {
        if (!this.lightMode && this.filter == "react") {
            return { background: '#333' };
        }
        else if (this.lightMode && this.filter == "react") {
            return { background: 'lightgrey' };
        }
        else {
            return null;
        }
    }
    pythonStyles() {
        if (!this.lightMode && this.filter == "python") {
            return { background: '#333' };
        }
        else if (this.lightMode && this.filter == "python") {
            return { background: 'lightgrey' };
        }
        else {
            return null;
        }
    }
}
ProjectsPage.ɵfac = function ProjectsPage_Factory(t) { return new (t || ProjectsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"])); };
ProjectsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPage, selectors: [["page-projects"]], decls: 17, vars: 15, consts: [[1, "container-projects-page", 3, "ngClass"], [1, "tags", 3, "ngClass"], [3, "ngStyle", "click"], [1, "container-projects"], [1, "row"], ["class", "project-card", 3, "ngClass", 4, "ngIf"], [1, "project-card", 3, "ngClass"], [1, "img", "i-1"], [1, "project-text", 3, "ngClass"], [1, "img", "i-2"], [1, "visit"], ["href", "https://alcostasmokeshop.netlify.app", "target", "_blank"], ["href", "https://alcostasmokeshop.netlify.app", "target", "blank"], [1, "img", "i-3"], ["href", "https://github.com/sungmin-gan/AntColonyOptimization/wiki/Solving-the-Traveling-Salesman-Problem-with--Ant-Colony-Optimization", "target", "_blank"], ["href", "https://github.com/sungmin-gan/AntColonyOptimization/wiki/Solving-the-Traveling-Salesman-Problem-with--Ant-Colony-Optimization", "target", "blank"], [1, "img", "i-4"], ["href", "https://joonrain.netlify.app", "target", "_blank"], ["href", "https://joonrain.netlify.app", "target", "blank"], [1, "img", "i-5"], ["href", "https:/sungmin-gan.com", "target", "_blank"], ["href", "https:/sungmin-gan.com", "target", "blank"]], template: function ProjectsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPage_Template_li_click_2_listener() { return ctx.filterSwitch("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPage_Template_li_click_4_listener() { return ctx.filterSwitch("angular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPage_Template_li_click_6_listener() { return ctx.filterSwitch("react"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "React");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPage_Template_li_click_8_listener() { return ctx.filterSwitch("python"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectsPage_div_12_Template, 7, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectsPage_div_13_Template, 11, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectsPage_div_14_Template, 11, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectsPage_div_15_Template, 11, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectsPage_div_16_Template, 11, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.allStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.angularStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.reactStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.pythonStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == "all" || ctx.filter == "angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == "all" || ctx.filter == "react");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == "all" || ctx.filter == "python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == "all" || ctx.filter == "react");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filter == "all" || ctx.filter == "angular");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container-projects-page[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    padding-top: 3em;\n}\n\n.tags[_ngcontent-%COMP%] {\n    display: flex;\n    list-style: none;\n    width: 20%;\n    padding-left: 0;\n    border-left: 2px solid #333;\n}\n\n.tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 33.33%;\n    margin: 0 auto;\n    text-align: center;\n    padding: 0.25em 1.5em;\n    border: 2px solid #333;\n    border-left: none;\n}\n\n.tags[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.container-projects[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.row[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 2em;\n}\n\n.project-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 19%;\n    border: 2px solid #333;\n    margin-left: 0.5em;\n}\n\n.project-card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20vh;\n    background-size: cover;\n    background-repeat: none;\n    background-position: center;\n}\n\n.img[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    text-decoration: none;\n}\n\n.visit[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    height: 20vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    color: white;\n    font-size: 1.2rem;\n    background: #333;\n    opacity: 0;\n    transition: all 0.25s;\n}\n\n.img[_ngcontent-%COMP%]:hover   .visit[_ngcontent-%COMP%] {\n    cursor: pointer;\n    opacity: 0.75;\n\n}\n\n.i-1[_ngcontent-%COMP%] {\n    background-image: url('sungmingan2.png');\n}\n\n.i-2[_ngcontent-%COMP%] {\n    background-image: url('alcosta.PNG');\n}\n\n.i-3[_ngcontent-%COMP%] {\n    background-image: url('aco.PNG');\n}\n\n.i-4[_ngcontent-%COMP%] {\n    background-image: url('joonRain.PNG');\n}\n\n.i-5[_ngcontent-%COMP%] {\n    background-image: url('personal.PNG');\n}\n\n.project-text[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 0.5em 0 0.5em 0.5em;\n    color: lightgrey;\n    border-top: 2px solid #333;\n}\n\n.project-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\n    margin: 0;\n    font-weight: normal;\n    font-size: 1rem;\n}\n\n.project-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    font-weight: normal;\n    font-size: 1rem;\n}\n\n.project-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: lightgrey;\n    text-decoration: none;\n}\n\n.project-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    color: grey;\n}\n\n\n\n.tags-light[_ngcontent-%COMP%] {\n    border-left: 1px solid lightgrey;\n    color: #333;\n}\n\n.tags-light[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border: 1px solid lightgrey;\n    border-left: none;\n}\n\n.card-light[_ngcontent-%COMP%] {\n    border: 1px solid lightgrey;\n}\n\n.project-text-light[_ngcontent-%COMP%] {\n    border-top: lightgrey;\n    color: #333;\n    background: lightgrey;\n}\n\n.project-text-light[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #333;\n}\n\n\n\n@media only screen and (max-width: 850px) {\n\n    .tags[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 100%;\n    }\n\n    .row[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .project-card[_ngcontent-%COMP%] {\n        width: 75%;\n        margin: 0 auto;\n        flex-direction: row;\n        margin-bottom: 1em;\n    }\n\n    .card-light[_ngcontent-%COMP%] {\n        background: lightgrey;\n    }\n\n    .project-text[_ngcontent-%COMP%] {\n        border-top: none;\n        padding-top: 5%;\n        padding-left: 5%;\n    }\n\n    .project-card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n        width: 50%;\n        border-right: 2px solid #333;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlLXByb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2tCQUVrQjs7QUFFbEI7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHdDQUE0RDtBQUNoRTs7QUFFQTtJQUNJLG9DQUF3RDtBQUM1RDs7QUFFQTtJQUNJLGdDQUFvRDtBQUN4RDs7QUFFQTtJQUNJLHFDQUF5RDtBQUM3RDs7QUFFQTtJQUNJLHFDQUF5RDtBQUM3RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTs7a0JBRWtCOztBQUVsQjtJQUNJLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O2tCQUVrQjs7QUFFbEI7O0lBRUk7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsNEJBQTRCO0lBQ2hDOzs7QUFHSiIsImZpbGUiOiJhcHAvcGFnZS1wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLVxuRGFyayBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWluZXItcHJvamVjdHMtcGFnZSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xufVxuXG4udGFncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzMzMztcbn1cblxuLnRhZ3MgbGkge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAxLjVlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4udGFnczpob3ZlciBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyLXByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDE5JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLnByb2plY3QtY2FyZCAuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pbWcgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnZpc2l0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG59XG5cbi5pbWc6aG92ZXIgLnZpc2l0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC43NTtcblxufVxuXG4uaS0xIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3N1bmdtaW5nYW4yLnBuZ1wiKTtcbn1cblxuLmktMiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hbGNvc3RhLlBOR1wiKTtcbn1cblxuLmktMyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hY28uUE5HXCIpO1xufVxuXG4uaS00IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2pvb25SYWluLlBOR1wiKTtcbn1cblxuLmktNSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9wZXJzb25hbC5QTkdcIik7XG59XG5cbi5wcm9qZWN0LXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwLjVlbTtcbiAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzMzO1xufVxuXG4ucHJvamVjdC10ZXh0IGg0e1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnByb2plY3QtdGV4dCBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9qZWN0LXRleHQgYSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9qZWN0LXRleHQgOmhvdmVyIGEge1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5MaWdodCBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50YWdzLWxpZ2h0IHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLnRhZ3MtbGlnaHQgbGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLmNhcmQtbGlnaHQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLnByb2plY3QtdGV4dC1saWdodCB7XG4gICAgYm9yZGVyLXRvcDogbGlnaHRncmV5O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxuLnByb2plY3QtdGV4dC1saWdodCBhIHtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVxuTWVkaWEgUXVlcmllc1xuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG5cbiAgICAudGFncyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnJvdyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnByb2plY3QtY2FyZCB7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuXG4gICAgLmNhcmQtbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gICAgfVxuXG4gICAgLnByb2plY3QtdGV4dCB7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICB9XG5cbiAgICAucHJvamVjdC1jYXJkIC5pbWcge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMzMzO1xuICAgIH1cblxuXG59Il19 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "page-projects",
                templateUrl: "./projects.component.html",
                styleUrls: ["./projects.component.css"],
                animations: [],
            }]
    }], function () { return [{ type: _DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-services/services.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page-services/services.component.ts ***!
  \*****************************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _DataTransferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataTransferService */ "./src/app/DataTransferService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "container-label-light": a0 }; };
class ServicesPage {
    constructor(dataTransfer) {
        this.dataTransfer = dataTransfer;
        this.lightMode = false;
        this.dataTransfer.viewMode$.subscribe((mode) => (this.lightMode = mode));
        this.dataTransfer.updatePage("resume");
    }
}
ServicesPage.ɵfac = function ServicesPage_Factory(t) { return new (t || ServicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"])); };
ServicesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesPage, selectors: [["page-services"]], decls: 77, vars: 9, consts: [[1, "container-slats"], [1, "slats", "slat-1"], [1, "container-label", "icon-resume", 3, "ngClass"], [1, "container-icon"], [1, "fas", "fa-tasks"], [1, "container-description", "description-skill"], [1, "skill"], [1, "container-skill-icon"], [1, "fas", "fa-thermometer-three-quarters", "icon-skill"], [1, "fas", "fa-thermometer-half", "icon-skill"], [1, "fas", "fa-thermometer-quarter", "icon-skill"], [1, "slats", "slat-2"], [1, "fas", "fa-landmark"], [1, "container-description"], [1, "school-1"], [1, "school-2"], [1, "slats", "slat-3"], [1, "fas", "fa-tools"], [1, "container-description", "description-work"]], template: function ServicesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HTML, CSS, JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ANGULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "REACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PYTHON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "COMPUTER SCIENCE, B.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cal State East Bay, Hayward, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "May 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "BUSINESS ADMINISTRATION, A.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " SOCIAL SCIENCE, A.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Laney College, Oakland, CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "December 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "iD TECH CAMP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Coding Instructor | Jun - Aug 2019 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Taught JavaScript and Python by building simple robots, laptops, and circuits with students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "HOPSCOTCH RESTAURANT & BAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Server | 2017 - 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Helped build my core work ethics, promoted from busser to server within one year of start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.lightMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.lightMode));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".container-slats[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    padding-top: 3em;\n    padding-bottom: 5em;\n}\n\n.slats[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 2.5em;\n    display: flex;\n    justify-content: space-between;\n}\n\n.container-label[_ngcontent-%COMP%] {\n    width: 25%;\n    border-right: 2px solid lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n.container-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: normal;\n    text-transform: uppercase;\n}\n\n.container-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 75%;\n    display: flex;\n    justify-content: flex-start;\n    padding-left: 2em;\n}\n\n.school-2[_ngcontent-%COMP%] {\n    margin-left: 1.5em;\n}\n\n.school-1[_ngcontent-%COMP%], .school-2[_ngcontent-%COMP%] {\n    width: 37.5%;\n}\n\n.icon-resume[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n}\n\n.skill[_ngcontent-%COMP%] {\n    width: 15%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    text-align: center;\n    padding-top: 1em;\n}\n\n.icon-skill[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n}\n\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: .8rem;\n    margin-top: 0.5em;\n}\n\n\n\n.container-label-light[_ngcontent-%COMP%] {\n    border-right: 1px solid lightgrey;\n}\n\n\n\n@media only screen and (max-width: 730px) {\n\n    h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n        font-size: 0.9em;\n    }\n\n    .slats[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n\n    .container-label[_ngcontent-%COMP%] {\n        border: none;\n        margin: 0 auto;\n    }\n\n    .container-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n\n    .container-description[_ngcontent-%COMP%] {\n        border-bottom: 1px solid lightgrey;\n        margin: 0 auto;\n        padding-left: 0;\n        justify-content: space-around;\n        padding-bottom: 2em;\n    }\n\n    .description-skill[_ngcontent-%COMP%] {\n        justify-content: space-between;\n    }\n\n    .skill[_ngcontent-%COMP%] {\n        width: 20%;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlLXNlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2tCQUVrQjs7QUFFbEI7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7a0JBRWtCOztBQUVsQjtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTs7a0JBRWtCOztBQUVsQjs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGtDQUFrQztRQUNsQyxjQUFjO1FBQ2QsZUFBZTtRQUNmLDZCQUE2QjtRQUM3QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoiYXBwL3BhZ2Utc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS1cbkRhcmsgTW9kZVxuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uY29udGFpbmVyLXNsYXRzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XG59XG5cbi5zbGF0cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMi41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItbGFiZWwge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItbGFiZWwgaDMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXItZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogMmVtO1xufVxuXG4uc2Nob29sLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTtcbn1cblxuLnNjaG9vbC0xLCAuc2Nob29sLTIge1xuICAgIHdpZHRoOiAzNy41JTtcbn1cblxuLmljb24tcmVzdW1lIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xufVxuXG4uc2tpbGwge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLmljb24tc2tpbGwge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5za2lsbCBwIHtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tXG5MaWdodCBNb2RlXG4tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jb250YWluZXItbGFiZWwtbGlnaHQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLVxuTWVkaWEgUXVlcmllc1xuLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMHB4KSB7XG5cbiAgICBoMywgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgfVxuXG4gICAgLnNsYXRzIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWxhYmVsIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWxhYmVsIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyZW07XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLXNraWxsIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5za2lsbCB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuXG59Il19 */"], data: { animation: [] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "page-services",
                templateUrl: "./services.component.html",
                styleUrls: ["./services.component.css"],
                animations: [],
            }]
    }], function () { return [{ type: _DataTransferService__WEBPACK_IMPORTED_MODULE_1__["DataTransferService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sungmingan/Desktop/mySite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
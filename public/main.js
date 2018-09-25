(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-news/add-news.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-news/add-news.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-news/add-news.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-news/add-news.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-3\" style=\"text-align: center\">\r\n                <label for=\"title\" class=\"col-form-label\">Add Url</label>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newUrl\" name=\"title\" required>\r\n              </div>\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Add</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/add-news/add-news.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-news/add-news.component.ts ***!
  \************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-news.service */ "./src/app/add-news/add-news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewsComponent = /** @class */ (function () {
    function AddNewsComponent(addNewsService) {
        this.addNewsService = addNewsService;
        this.newUrl = '';
    }
    AddNewsComponent.prototype.ngOnInit = function () {
    };
    AddNewsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newUrl) {
            var urlMessage = {
                url: this.newUrl
            };
            this.addNewsService.addNewsUrl(urlMessage).subscribe(function (res) {
                if (res['success']) {
                    console.log(res['data']);
                    _this.addNewsService.notifyNews(res['data']);
                }
                else {
                    console.log(res['message']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    AddNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-news',
            template: __webpack_require__(/*! ./add-news.component.html */ "./src/app/add-news/add-news.component.html"),
            styles: [__webpack_require__(/*! ./add-news.component.css */ "./src/app/add-news/add-news.component.css")]
        }),
        __metadata("design:paramtypes", [_add_news_service__WEBPACK_IMPORTED_MODULE_1__["AddNewsService"]])
    ], AddNewsComponent);
    return AddNewsComponent;
}());



/***/ }),

/***/ "./src/app/add-news/add-news.service.ts":
/*!**********************************************!*\
  !*** ./src/app/add-news/add-news.service.ts ***!
  \**********************************************/
/*! exports provided: AddNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsService", function() { return AddNewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/http/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddNewsService = /** @class */ (function () {
    function AddNewsService(http) {
        this.http = http;
        this.news = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newsObservable = this.news.asObservable();
    }
    AddNewsService.prototype.addNewsUrl = function (newsUrl) {
        return this.http.httpPost('scrape', newsUrl);
    };
    AddNewsService.prototype.notifyNews = function (newsObject) {
        this.news.next(newsObject);
    };
    AddNewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AddNewsService);
    return AddNewsService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/http.service */ "./src/app/http/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-news/add-news.component */ "./src/app/add-news/add-news.component.ts");
/* harmony import */ var _add_news_add_news_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-news/add-news.service */ "./src/app/add-news/add-news.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login-modal/login-modal.component */ "./src/app/login-modal/login-modal.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_register_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.service */ "./src/app/register/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var router = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _add_news_add_news_component__WEBPACK_IMPORTED_MODULE_12__["AddNewsComponent"],
                _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_15__["LoginModalComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot()
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], _add_news_add_news_service__WEBPACK_IMPORTED_MODULE_13__["AddNewsService"],
                _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_14__["DashboardService"], _register_register_service__WEBPACK_IMPORTED_MODULE_17__["RegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill { \r\n    min-height: 100%;\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 100%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <header></header>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" style=\"margin-top: 20px\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <h3 class=\"w-75\" style=\"text-align: center\">News Listing</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <ul class=\"list-group w-75\">\r\n              <a href=\"{{news.URL}}\" target=\"_blank\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"\r\n                *ngFor=\"let news of newsList\">\r\n                {{news.title}}\r\n                <span class=\"badge badge-primary badge-pill\">{{news.clicks}}</span>\r\n              </a>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _add_news_add_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-news/add-news.service */ "./src/app/add-news/add-news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, newsService) {
        this.dashboardService = dashboardService;
        this.newsService = newsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchNewsList();
        this.newsService.newsObservable.subscribe(function (res) {
            // console.log("News Received : "+ res);
            if (_this.newsList && _this.newsList.length >= 0) {
                _this.newsList.push(res);
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.fetchNewsList = function () {
        var _this = this;
        this.dashboardService.fetchNewsList().subscribe(function (res) {
            if (res['success']) {
                // console.log(res['data']);
                _this.newsList = res['data'];
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"], _add_news_add_news_service__WEBPACK_IMPORTED_MODULE_2__["AddNewsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardService = /** @class */ (function () {
    function DashboardService(httpService) {
        this.httpService = httpService;
    }
    DashboardService.prototype.fetchNewsList = function () {
        return this.httpService.httpGet('/fetchAllNewsArticles');
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOR DASHBOARD PAGE -->\r\n<nav class=\"navbar navbar-expand-sm bg-light\" >\r\n\r\n  <!-- Links -->\r\n  <ul class=\"nav nav-pills\">\r\n    <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"func()\">Link 1</a>\r\n      </li> -->\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\" (click)=\"func()\" data-toggle=\"modal\" data-target=\"#exampleModal\">Add News</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul class=\"nav nav-pills ml-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\">{{userId}}</a>\r\n    </li>\r\n\r\n    <li class=\"nav-item\">\r\n      <a class=\"navbar-brand\">\r\n        <i class=\"far fa-user\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n</nav>\r\n\r\n<add-news></add-news>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.userId = 'User Name';
        this.isLoginPage = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userId = this.loginService.userId;
        this.isLoginPage = this.loginService.isLoginPage;
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logout().subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['login']);
        }, function (err) {
            console.log(err);
        });
        return false;
    };
    HeaderComponent.prototype.func = function () {
        return false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/http/http.service.ts":
/*!**************************************!*\
  !*** ./src/app/http/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.httpGet = function (url) {
        return this.http.get(url, httpOptions);
    };
    HttpService.prototype.httpPost = function (url, postBody) {
        return this.http.post(url, postBody, httpOptions);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login-modal/login-modal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModalLabel\" aria-hidden=\"false\" *ngIf = \"showModalWindow\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"loginModalLabel\">Login</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #f=\"ngForm\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3\" style=\"text-align: center\">\r\n              <label for=\"title\" class=\"col-form-label\">UserId</label>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"loginId\" name=\"title\" required>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-3\" style=\"text-align: center\">\r\n              <label for=\"title\" class=\"col-form-label\">Password</label>\r\n            </div>\r\n            <div class=\"col-sm-9\">\r\n              <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"title\" required>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"submit(f)\">Login</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login-modal/login-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-modal/login-modal.component.ts ***!
  \******************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.showModalWindow = false;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.closeModal = function () {
    };
    LoginModalComponent.prototype.showModal = function () {
        this.showModalWindow = true;
    };
    LoginModalComponent.prototype.submit = function (f) {
        var _this = this;
        if (f.valid) {
            var loginInfo = {
                userId: this.loginId,
                password: this.password
            };
            this.loginService.login(loginInfo).subscribe(function (res) {
                if (res['success']) {
                    // console.log(res['data']);
                    _this.loginService.userId = res['data']['userId'];
                    _this.router.navigate(['dashboard']);
                }
                else {
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
        }
    };
    LoginModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-modal',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.css */ "./src/app/login-modal/login-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin{\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOR LOGIN PAGE -->\r\n<nav class=\"navbar navbar-expand-sm bg-light\">\r\n\r\n  <ul class=\"nav nav-pills mr-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n    </li>\r\n  </ul>\r\n\r\n  <form class=\"form-inline ml-auto\" #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\r\n    <input class=\"form-control mr-sm-2\" type=\"text\" name=\"user\" [(ngModel)]=\"loginId\" placeholder=\"UserId\" required>\r\n    <input class=\"form-control mr-sm-2\" type=\"password\" name=\"pass\" [(ngModel)]=\"password\" placeholder=\"Password\"\r\n      required>\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.form.valid\">Login</button>\r\n  </form>\r\n\r\n</nav>\r\n\r\n<div class=\"container-fluid\" style=\"height: 100%;\">\r\n\r\n  <div class=\"row\" style=\"margin-top: 20px\">\r\n    <div class=\"col-sm-12\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"d-flex justify-content-center\">\r\n              <alert [type]=\"alert.type\" class=\"w-25\" style=\"text-align: center\" *ngIf=\"alertOpen\" [dismissOnTimeout]=\"alert.timeout\"\r\n              (onClosed)=\"closeAlert()\">\r\n              {{alert.message}}\r\n            </alert>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <h3 class=\"w-75\" style=\"text-align: center\">News Listing</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"d-flex justify-content-center\">\r\n            <ul class=\"list-group w-75\">\r\n              <a href=\"{{news.URL}}\" target=\"_blank\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"\r\n                *ngFor=\"let news of newsList\">\r\n                {{news.title}}\r\n                <span class=\"badge badge-primary badge-pill\">{{news.clicks}}</span>\r\n              </a>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, dashboardService) {
        this.loginService = loginService;
        this.router = router;
        this.dashboardService = dashboardService;
        this.alertOpen = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.fetchNewsList();
    };
    LoginComponent.prototype.func = function () {
        return false;
    };
    LoginComponent.prototype.fetchNewsList = function () {
        var _this = this;
        this.dashboardService.fetchNewsList().subscribe(function (res) {
            if (res['success']) {
                // console.log(res['data']);
                _this.newsList = res['data'];
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.submit = function (f) {
        var _this = this;
        if (f.valid && this.loginId.trim() && this.password.trim()) {
            var loginInfo = {
                userId: this.loginId,
                password: this.password
            };
            this.loginService.login(loginInfo).subscribe(function (res) {
                if (res['success']) {
                    // console.log(res['data']);
                    _this.loginService.userId = res['data']['userId'];
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.openAlert('Invalid credentials.. Please try again!!', 'danger');
                    f.reset();
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.openAlert('Invalid credentials.. Please try again!!', 'danger');
            f.reset();
        }
    };
    LoginComponent.prototype.closeAlert = function () {
        this.alertOpen = false;
    };
    LoginComponent.prototype.openAlert = function (message, alertType) {
        this.alert = {
            timeout: 3000,
            message: message,
            type: alertType
        };
        this.alertOpen = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(httpService) {
        this.httpService = httpService;
        this.userId = '';
        this.isLoginPage = false;
    }
    LoginService.prototype.login = function (loginInfo) {
        return this.httpService.httpPost('/login', loginInfo);
    };
    LoginService.prototype.logout = function () {
        return this.httpService.httpGet('/logout');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOR REGISTER PAGE -->\n<nav class=\"navbar navbar-expand-sm bg-light\">\n\n  <ul class=\"nav nav-pills mr-auto\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/login']\">Back to Login Page</a>\n    </li>\n  </ul>\n\n</nav>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-sm-12\">\n\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"d-flex justify-content-center\">\n            <alert [type]=\"alert.type\" class=\"w-25\" style=\"text-align: center\" *ngIf=\"alertOpen\" [dismissOnTimeout]=\"alert.timeout\"\n              (onClosed)=\"closeAlert()\">\n              {{alert.message}}\n            </alert>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"!hideForm\">\n        <div class=\"col-sm-12\">\n          <div class=\"d-flex justify-content-center\">\n            <h3 class=\"w-75\" style=\"text-align: center\">REGISTER</h3>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" *ngIf=\"hideForm\">\n        <div class=\"col-sm-12\">\n          <div class=\"d-flex justify-content-center\">\n            <h5 class=\"w-75\" style=\"text-align: center\">You have registered successfully!! Please login with your credentials.</h5>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"d-flex justify-content-center \" style=\"margin-top: 20px\" *ngIf=\"!hideForm\">\n\n        <form style=\"width: 30%\" #registerForm=\"ngForm\" (ngSubmit)=\"register(registerForm)\">\n          <div class=\"form-group row\">\n            <label for=\"Name\" class=\"col-sm-3 col-form-label\">Name</label>\n            <div class=\"col-sm-9\">\n              <input #name_text=\"ngModel\" type=\"text\" name=\"input0\" [(ngModel)]=\"name\" class=\"form-control\" id=\"name\"\n                placeholder=\"Enter your name\" required>\n              <div [hidden]=\"name_text.valid || name_text.pristine\" class=\"alert alert-danger\">\n                Name is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"Email\" class=\"col-sm-3 col-form-label\">Email</label>\n            <div class=\"col-sm-9\">\n              <input #email_text=\"ngModel\" type=\"email\" name=\"input1\" [(ngModel)]=\"email\" class=\"form-control\" id=\"Email\"\n                placeholder=\"Enter your email eg: abcd@qwer.com\" required>\n              <div [hidden]=\"email_text.valid || email_text.pristine\" class=\"alert alert-danger\">\n                Email is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"UserId\" class=\"col-sm-3 col-form-label\">User ID</label>\n            <div class=\"col-sm-9\">\n              <input #userId_text=\"ngModel\" type=\"text\" name=\"input2\" [(ngModel)]=\"userId\" class=\"form-control\" id=\"UserId\"\n                placeholder=\"Enter a User ID\" required>\n              <div [hidden]=\"userId_text.valid || userId_text.pristine\" class=\"alert alert-danger\">\n                User ID is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"Password\" class=\"col-sm-3 col-form-label\">Password</label>\n            <div class=\"col-sm-9\">\n              <input #password_text=\"ngModel\" type=\"password\" name=\"input3\" [(ngModel)]=\"password\" class=\"form-control\"\n                id=\"Password\" placeholder=\"Enter a strong password\" required>\n              <div [hidden]=\"password_text.valid || password_text.pristine\" class=\"alert alert-danger\">\n                Password is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-sm-12\" style=\"text-align: center\">\n              <button type=\"submit\" class=\"btn btn-success form-control\" style=\"width: 33%\" id=\"Submit\" [disabled]=\"!registerForm.form.valid\">Register</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.service */ "./src/app/register/register.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.name = '';
        this.email = '';
        this.userId = '';
        this.password = '';
        this.alertOpen = false;
        this.hideForm = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        if (this.userId.trim() && this.password.trim() && this.name.trim() && this.email.trim()) {
            var userDetails = {
                name: this.name,
                email: this.email,
                password: this.password,
                userId: this.userId
            };
            this.registerService.register(userDetails).subscribe(function (res) {
                if (res['success']) {
                    // console.log(res['data']);
                    _this.openAlert('Done :)', 'success');
                    // form.reset();
                    _this.hideForm = true;
                }
                else {
                    _this.openAlert(res['message'], 'danger');
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.openAlert('Invalid Details', 'danger');
            form.reset();
        }
        // form.reset();
    };
    RegisterComponent.prototype.closeAlert = function () {
        this.alertOpen = false;
    };
    RegisterComponent.prototype.openAlert = function (message, alertType) {
        this.alert = {
            timeout: 3000,
            message: message,
            type: alertType
        };
        this.alertOpen = true;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(httpService) {
        this.httpService = httpService;
    }
    RegisterService.prototype.register = function (userDetails) {
        return this.httpService.httpPost('/register', userDetails);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], RegisterService);
    return RegisterService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OJN5KOR\Desktop\Gantt-Project\NewsPage_Application\angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
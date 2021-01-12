(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\legra\Documents\Git-Repositories\Smart_Mirror\front\src\main.ts */"zUnb");


/***/ }),

/***/ "4Kri":
/*!**********************************!*\
  !*** ./src/app/models/widget.ts ***!
  \**********************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
class Widget {
    constructor(id, name, config) {
        this.id = id;
        this.name = name;
        this.config = config;
    }
}


/***/ }),

/***/ "6/uA":
/*!************************************************!*\
  !*** ./src/app/widgets/news/news.component.ts ***!
  \************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ "Ado8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





function NewsComponent_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
} }
function NewsComponent_marquee_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "marquee", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.newsText, " ");
} }
class NewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.newsText = "";
    }
    ngOnInit() {
        this.loading = true;
        this.init();
        setInterval(() => this.init(), 600000);
        // setInterval(() => this.nextNews(), 10000);
    }
    nextNews() {
        const idxCurrentNews = this.news.indexOf(this.currentNews);
        if (idxCurrentNews + 1 < this.news.length) {
            this.currentNews = this.news[idxCurrentNews + 1];
        }
        else {
            this.currentNews = this.news[0];
        }
    }
    init() {
        this.news = [];
        this.newsService.getNews().then(news => {
            this.loading = true;
            news.forEach(element => {
                //this.news.push(element);
                this.newsText += element.title;
                this.newsText += " - ";
            });
            this.currentNews = this.news[0];
        }).then(() => this.loading = false);
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 3, vars: 2, consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "10", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "10"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsComponent_marquee_2_Template, 3, 1, "marquee", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]], styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.css']
            }]
    }], function () { return [{ type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }]; }, null); })();


/***/ }),

/***/ "8Zhg":
/*!***********************************!*\
  !*** ./src/app/models/weather.ts ***!
  \***********************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
class Weather {
}


/***/ }),

/***/ "Ado8":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class NewsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url;
    }
    getNews() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.url + '/news')
                .toPromise()
                .then(res => {
                resolve(res);
            }, msg => {
                reject(msg);
            });
        });
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    server_base_url: 'http://localhost:3000/api'
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

/***/ "FH2a":
/*!************************************************************************!*\
  !*** ./src/app/widgets/weather-forecast/weather-forecast.component.ts ***!
  \************************************************************************/
/*! exports provided: WeatherForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function() { return WeatherForecastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/hourly */ "Pj8M");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "s3jh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function WeatherForecastComponent_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
} }
const _c0 = function (a0) { return { "first": a0 }; };
function WeatherForecastComponent_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hourly_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, isFirst_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, hourly_r3.dt, "HH"), "h", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, hourly_r3.dt, "mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", hourly_r3.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, isFirst_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, hourly_r3.temp, "1.0-0"), "\u00B0C");
} }
function WeatherForecastComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherForecastComponent_div_2_li_1_Template, 10, 19, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredHourly);
} }
class WeatherForecastComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.loading = true;
        this.init();
        setInterval(() => this.init(), 600000);
    }
    init() {
        this.filteredHourly = [];
        this.weatherService
            .getWeatherForecast()
            .then((weatherForecast) => {
            this.loading = true;
            this.filteredHourly.push(new src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__["Hourly"](Date.now(), weatherForecast.current.temp, weatherForecast.current.description, weatherForecast.current.iconurl));
            weatherForecast.hourly.forEach((hourly, index) => {
                if (index % 3 === 0 && index !== 0 && index < 15) {
                    hourly.dt = new Date(hourly.dt.valueOf() * 1000);
                    this.filteredHourly.push(hourly);
                }
            });
        })
            .then(() => (this.loading = false));
    }
}
WeatherForecastComponent.ɵfac = function WeatherForecastComponent_Factory(t) { return new (t || WeatherForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"])); };
WeatherForecastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherForecastComponent, selectors: [["app-weather-forecast"]], decls: 3, vars: 2, consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [4, "ngFor", "ngForOf"], [1, "horizontal"], [3, "ngClass"], ["alt", "icone meteo ", 3, "src"]], template: function WeatherForecastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherForecastComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherForecastComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n\tfont-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLWZvcmVjYXN0L3dlYXRoZXItZm9yZWNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvd2VhdGhlci1mb3JlY2FzdC93ZWF0aGVyLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuXHRzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG5cdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherForecastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-forecast',
                templateUrl: './weather-forecast.component.html',
                styleUrls: ['./weather-forecast.component.css'],
            }]
    }], function () { return [{ type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }]; }, null); })();


/***/ }),

/***/ "GpSe":
/*!**********************************************************************!*\
  !*** ./src/app/widgets/weather-weekend/weather-weekend.component.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherWeekendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWeekendComponent", function() { return WeatherWeekendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/weather.service */ "s3jh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");





function WeatherWeekendComponent_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
} }
function WeatherWeekendComponent_div_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const daily_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, daily_r3.dt, "EEEE d MMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", daily_r3.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, daily_r3.temp, "1.0-0"), "\u00B0C");
} }
function WeatherWeekendComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWeekendComponent_div_2_li_1_Template, 9, 9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDaily);
} }
class WeatherWeekendComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.loading = true;
        this.init();
        setInterval(() => this.init(), 600000);
    }
    init() {
        this.filteredDaily = [];
        this.weatherService
            .getWeatherForecast()
            .then((weatherForecast) => {
            this.loading = true;
            weatherForecast.daily.forEach((daily) => {
                const dateTmp = new Date(daily.dt.valueOf() * 1000).getDay();
                const dayTmp = new Date(daily.dt.valueOf() * 1000).getDate();
                const actualDay = new Date().getDate();
                if ((dateTmp === 0 || dateTmp === 6) && dayTmp !== actualDay) {
                    daily.dt = new Date(daily.dt.valueOf() * 1000);
                    this.filteredDaily.push(daily);
                }
            });
        })
            .then(() => (this.loading = false));
    }
}
WeatherWeekendComponent.ɵfac = function WeatherWeekendComponent_Factory(t) { return new (t || WeatherWeekendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"])); };
WeatherWeekendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherWeekendComponent, selectors: [["app-weather-weekend"]], decls: 3, vars: 2, consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [4, "ngFor", "ngForOf"], [1, "horizontal"], ["alt", "icone meteo ", 3, "src"]], template: function WeatherWeekendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWeekendComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherWeekendComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tlist-style-type: none;\r\n\tfont-size: large;\r\n}\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLXdlZWtlbmQvd2VhdGhlci13ZWVrZW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLXdlZWtlbmQvd2VhdGhlci13ZWVrZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0Zm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uaG9yaXpvbnRhbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcblx0c3Ryb2tlOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWeekendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-weekend',
                templateUrl: './weather-weekend.component.html',
                styleUrls: ['./weather-weekend.component.css']
            }]
    }], function () { return [{ type: _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"] }]; }, null); })();


/***/ }),

/***/ "Hbdh":
/*!*****************************************!*\
  !*** ./src/app/models/configuration.ts ***!
  \*****************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(id, posXStart, posXEnd, posYStart, posYEnd) {
        this.id = id;
        this.posXStart = posXStart;
        this.posXEnd = posXEnd;
        this.posYStart = posYStart;
        this.posYEnd = posYEnd;
    }
}


/***/ }),

/***/ "ImvS":
/*!**********************************************************************!*\
  !*** ./src/app/widgets/weather-current/weather-current.component.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherCurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCurrentComponent", function() { return WeatherCurrentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/weather */ "8Zhg");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "s3jh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function WeatherCurrentComponent_mat_progress_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
} }
function WeatherCurrentComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx_r1.weather.currenttemp, "1.0-0"), "\u00B0C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.weather.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.weather.city);
} }
class WeatherCurrentComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.loading = true;
        this.init();
        setInterval(() => this.init(), 600000);
    }
    init() {
        this.weather = new src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__["Weather"]();
        this.weatherService
            .getWeather()
            .then((weather) => {
            this.loading = true;
            this.weather.currenttemp = weather.currenttemp;
            this.weather.city = weather.city;
            this.weather.iconurl = weather.iconurl;
        })
            .then(() => (this.loading = false));
    }
}
WeatherCurrentComponent.ɵfac = function WeatherCurrentComponent_Factory(t) { return new (t || WeatherCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"])); };
WeatherCurrentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherCurrentComponent, selectors: [["app-weather-current"]], decls: 3, vars: 2, consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["class", "horizontal", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [1, "horizontal"], ["alt", "icone meteo actuelle", 3, "src"]], template: function WeatherCurrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherCurrentComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherCurrentComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\theight: 100%;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLWN1cnJlbnQvd2VhdGhlci1jdXJyZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLWN1cnJlbnQvd2VhdGhlci1jdXJyZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmhvcml6b250YWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG5cdHN0cm9rZTogd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherCurrentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weather-current',
                templateUrl: './weather-current.component.html',
                styleUrls: ['./weather-current.component.css'],
            }]
    }], function () { return [{ type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }]; }, null); })();


/***/ }),

/***/ "Pj8M":
/*!**********************************!*\
  !*** ./src/app/models/hourly.ts ***!
  \**********************************/
/*! exports provided: Hourly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hourly", function() { return Hourly; });
class Hourly {
    constructor(dt, temp, description, iconurl) {
        this.dt = dt;
        this.temp = temp;
        this.description = description;
        this.iconurl = iconurl;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/configuration */ "Hbdh");
/* harmony import */ var _models_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/profile */ "X+pJ");
/* harmony import */ var _models_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/widget */ "4Kri");
/* harmony import */ var _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums/widget-name */ "VJva");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/date/date.component */ "tlTZ");
/* harmony import */ var _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/weather-current/weather-current.component */ "ImvS");
/* harmony import */ var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/digital-clock/digital-clock.component */ "wMQT");
/* harmony import */ var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/analog-clock/analog-clock.component */ "r+H+");
/* harmony import */ var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/news/news.component */ "6/uA");
/* harmony import */ var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/weather-forecast/weather-forecast.component */ "FH2a");
/* harmony import */ var _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/weather-weekend/weather-weekend.component */ "GpSe");















function AppComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Vous \u00EAtes rayonnant(e) aujourd'hui.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentProfile.name, ", ");
} }
function AppComponent_app_date_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-date", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.setPositionWidget(ctx_r1.widgetName.Date));
} }
function AppComponent_app_weather_current_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-current", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.setPositionWidget(ctx_r2.widgetName.WeatherCurrent));
} }
function AppComponent_app_digital_clock_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-digital-clock", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.setPositionWidget(ctx_r3.widgetName.DigitalClock));
} }
function AppComponent_app_analog_clock_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analog-clock", 5);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.setPositionWidget(ctx_r4.widgetName.AnalogClock));
} }
function AppComponent_app_news_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news", 5);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.setPositionWidget(ctx_r5.widgetName.News));
} }
function AppComponent_app_weather_forecast_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-forecast", 5);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.setPositionWidget(ctx_r6.widgetName.WeatherForecast));
} }
function AppComponent_app_weather_weekend_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-weekend", 5);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r7.setPositionWidget(ctx_r7.widgetName.WeatherWeekend));
} }
class AppComponent {
    constructor() {
        this.widgetName = _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"];
    }
    ngOnInit() {
        this.profiles = new Array();
        this.init();
        this.currentProfile = this.profiles[0];
        this.playAnimation();
    }
    init() {
        this.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](null, 'default', new Array(new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](1, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].WeatherForecast, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 3, 4, 6)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](2, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].Date, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 3, 8, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](3, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].AnalogClock, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 8, 9, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](4, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].News, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 2, 10, 6, 7)))));
        this.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](1, 'Claire', new Array(new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](1, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].WeatherForecast, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 3, 1, 4)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](2, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].Date, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 3, 8, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](3, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].AnalogClock, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 8, 9, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](4, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].Agenda, null), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](5, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].News, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 11, 6, 7)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](6, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].WeatherWeekend, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 9, 11, 1, 3)))));
        this.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](2, 'Stephan', new Array(new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](1, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].WeatherCurrent, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 3, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](2, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].Date, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 4, 7, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](4, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].DigitalClock, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 10, 11, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](5, _enums_widget_name__WEBPACK_IMPORTED_MODULE_4__["WidgetName"].News, new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 3, 9, 6, 7)))));
    }
    searchWidget(widget, name) {
        return widget.findIndex((n) => n.name === name) !== -1 ? true : false;
    }
    setPositionWidget(name) {
        const conf = this.currentProfile.widgets.find((n) => n.name === name)
            .config;
        return {
            'grid-column-start': conf.posXStart,
            'grid-column-end': conf.posXEnd,
            'grid-row-start': conf.posYStart,
            'grid-row-end': conf.posYEnd,
        };
    }
    onKeyUp(eventData) {
        if (eventData.key === 'ArrowUp') {
            const idxCurrentProfile = this.profiles.indexOf(this.currentProfile);
            // If we don't reach the end of the list
            if (idxCurrentProfile + 1 < this.profiles.length) {
                this.currentProfile = this.profiles[idxCurrentProfile + 1];
                // Go back to default profile
            }
            else {
                this.currentProfile = this.profiles[0];
            }
            this.playAnimation();
        }
    }
    playAnimation() {
        document.getElementById('animated').animate([
            {
                // from
                opacity: 0,
                fontSize: 'x-large',
            },
            {
                // to
                opacity: 1,
                fontSize: 'xx-large',
            },
        ], 1500);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 8, consts: [[1, "content"], [1, "welcome"], ["id", "animated"], [4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bonjour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_span_4_Template, 4, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_date_5_Template, 1, 1, "app-date", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_weather_current_6_Template, 1, 1, "app-weather-current", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_digital_clock_7_Template, 1, 1, "app-digital-clock", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_analog_clock_8_Template, 1, 1, "app-analog-clock", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_news_9_Template, 1, 1, "app-news", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_app_weather_forecast_10_Template, 1, 1, "app-weather-forecast", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_app_weather_weekend_11_Template, 1, 1, "app-weather-weekend", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentProfile.name !== "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.Date));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.WeatherCurrent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.DigitalClock));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.AnalogClock));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.News));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.WeatherForecast));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.WeatherWeekend));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_7__["WeatherCurrentComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_8__["DigitalClockComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_9__["AnalogClockComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_11__["WeatherForecastComponent"], _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_12__["WeatherWeekendComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  background-color: black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(6, 1fr);\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 100%;\r\n  grid-column-start: 3;\r\n  grid-column-end: 9;\r\n  grid-row-start: 2;\r\n  grid-row-end: 6;\r\n  \r\n}\r\n#animated[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    -webkit-animation: 2s slidein ease-in-out;\r\n            animation: 2s slidein ease-in-out;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsa0NBQWtDO0FBQ3BDO0FBQ0E7K0RBQytEO0FBRS9EO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCO0FBRUE7SUFDSSxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOENFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XHJcbn1cclxuLypXZSB1c2UgdGhlIENTUyBncmlkIHByb3BlcnR5IHRvIGRpc3BsYXkgdGhlIGNvbXBvbmVudCBvbiB0aGUgbWlycm9yXHJcblRoZSBncmlkIGlzIDEwIHVuaXRzICgxIHRvIDExKSBsb25nIGFuZCA2IHVuaXRzIGxhcmdlICgxIHRvIDcpKi9cclxuXHJcbi53ZWxjb21lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA5O1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gIGdyaWQtcm93LWVuZDogNjtcclxuICAvKmJvcmRlcjogZG90dGVkIDFweCB3aGl0ZTsqL1xyXG59XHJcblxyXG4jYW5pbWF0ZWQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogMnMgc2xpZGVpbiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLyphcHAtZGF0ZSB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiA4O1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMjtcclxuICBib3JkZXI6IGRvdHRlZCAxcHggcmVkO1xyXG59XHJcblxyXG5hcHAtd2VhdGhlci1mb3JlY2FzdCB7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIGdyaWQtcm93LWVuZDogMztcclxuICBib3JkZXI6IGRvdHRlZCAxcHggZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbmFwcC13ZWF0aGVyIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGJvcmRlcjogZG90dGVkIDFweCBncmVlbjtcclxufVxyXG5cclxuYXBwLWRpZ2l0YWwtY2xvY2sge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA5O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMTE7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIGJvcmRlcjogZG90dGVkIDFweCB5ZWxsb3c7XHJcbn1cclxuXHJcbmFwcC1hbmFsb2ctY2xvY2sge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA4O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogOTtcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgYm9yZGVyOiBkb3R0ZWQgMXB4IGJsdWU7XHJcbn1cclxuXHJcbmFwcC1uZXdzIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDY7XHJcbiAgZ3JpZC1yb3ctZW5kOiA3O1xyXG4gIGJvcmRlcjogZG90dGVkIDFweCBicm93bjtcclxufSovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, { onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "VJva":
/*!**************************************!*\
  !*** ./src/app/enums/widget-name.ts ***!
  \**************************************/
/*! exports provided: WidgetName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetName", function() { return WidgetName; });
var WidgetName;
(function (WidgetName) {
    WidgetName["Date"] = "date";
    WidgetName["WeatherCurrent"] = "weather-current";
    WidgetName["DigitalClock"] = "digital-clock";
    WidgetName["AnalogClock"] = "analog-clock";
    WidgetName["News"] = "news";
    WidgetName["WeatherForecast"] = "weather-forecast";
    WidgetName["WeatherWeekend"] = "weather-weekend";
    WidgetName["Agenda"] = "agenda";
    WidgetName["Mail"] = "mail";
})(WidgetName || (WidgetName = {}));


/***/ }),

/***/ "X+pJ":
/*!***********************************!*\
  !*** ./src/app/models/profile.ts ***!
  \***********************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
class Profile {
    constructor(id, name, widgets) {
        this.id = id;
        this.name = name;
        this.widgets = widgets;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/weather-current/weather-current.component */ "ImvS");
/* harmony import */ var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/date/date.component */ "tlTZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/analog-clock/analog-clock.component */ "r+H+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/digital-clock/digital-clock.component */ "wMQT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/news/news.component */ "6/uA");
/* harmony import */ var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/weather-forecast/weather-forecast.component */ "FH2a");
/* harmony import */ var _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/weather-weekend/weather-weekend.component */ "GpSe");
















Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'fr-FR' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCurrentComponent"],
        _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"],
        _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"],
        _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"],
        _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
        _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__["WeatherForecastComponent"],
        _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_14__["WeatherWeekendComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCurrentComponent"],
                    _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"],
                    _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"],
                    _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"],
                    _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
                    _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__["WeatherForecastComponent"],
                    _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_14__["WeatherWeekendComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'fr-FR' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "r+H+":
/*!****************************************************************!*\
  !*** ./src/app/widgets/analog-clock/analog-clock.component.ts ***!
  \****************************************************************/
/*! exports provided: AnalogClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function() { return AnalogClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AnalogClockComponent {
    constructor() { }
    ngOnInit() {
        this.drawClock();
    }
    drawClock() {
        const canvas = document.getElementById('clock');
        const parent = document.getElementById('analog-clock');
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight * 0.8;
        const ctx = canvas.getContext('2d');
        let radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.9;
        this.drawAnalogClock(ctx, radius);
        setInterval(() => this.drawAnalogClock(ctx, radius), 1000);
    }
    drawAnalogClock(ctx, radius) {
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        this.drawFace(ctx, radius);
        this.drawNumbers(ctx, radius);
        this.drawTime(ctx, radius);
    }
    drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.lineWidth = radius * 0.04;
        ctx.stroke();
    }
    drawNumbers(ctx, radius) {
        let ang;
        let num;
        ctx.font = radius * 0.15 + 'px arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        for (num = 1; num < 13; num++) {
            ang = (num * Math.PI) / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }
    drawTime(ctx, radius) {
        this.initClock();
        // hour
        this.hour = this.hour % 12;
        this.hour =
            (this.hour * Math.PI) / 6 +
                (this.minute * Math.PI) / (6 * 60) +
                (this.second * Math.PI) / (360 * 60);
        this.drawHand(ctx, this.hour, radius * 0.5, radius * 0.07);
        // minute
        this.minute =
            (this.minute * Math.PI) / 30 + (this.second * Math.PI) / (30 * 60);
        this.drawHand(ctx, this.minute, radius * 0.8, radius * 0.07);
        // second
        this.second = (this.second * Math.PI) / 30;
        this.drawHand(ctx, this.second, radius * 0.9, radius * 0.02);
    }
    initClock() {
        this.date = new Date();
        this.hour = this.date.getHours();
        this.minute = this.date.getMinutes();
        this.second = this.date.getSeconds();
    }
    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'white';
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
}
AnalogClockComponent.ɵfac = function AnalogClockComponent_Factory(t) { return new (t || AnalogClockComponent)(); };
AnalogClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalogClockComponent, selectors: [["app-analog-clock"]], decls: 2, vars: 0, consts: [["id", "analog-clock"], ["id", "clock"]], template: function AnalogClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analog-clock',
                templateUrl: './analog-clock.component.html',
                styleUrls: ['./analog-clock.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s3jh":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class WeatherService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url;
    }
    getWeather() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(this.url + '/weather')
                .toPromise()
                .then(res => {
                resolve(res);
            }, msg => {
                reject(msg);
            });
        });
    }
    getWeatherForecast() {
        return new Promise((resolve, reject) => {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url + '/weather_forecast')
                .toPromise()
                .then(res => {
                resolve(res);
            }, msg => {
                reject(msg);
            });
        });
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tlTZ":
/*!************************************************!*\
  !*** ./src/app/widgets/date/date.component.ts ***!
  \************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DateComponent {
    constructor() { }
    ngOnInit() {
        this.date = Date.now();
        setInterval(() => this.date = Date.now(), 5000);
    }
}
DateComponent.ɵfac = function DateComponent_Factory(t) { return new (t || DateComponent)(); };
DateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DateComponent, selectors: [["app-date"]], decls: 5, vars: 6, consts: [[1, "content"]], template: function DateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.date, "EEEE d LLLL yyyy")));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kYXRlL2RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL2RhdGUvZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-date',
                templateUrl: './date.component.html',
                styleUrls: ['./date.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wMQT":
/*!******************************************************************!*\
  !*** ./src/app/widgets/digital-clock/digital-clock.component.ts ***!
  \******************************************************************/
/*! exports provided: DigitalClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function() { return DigitalClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class DigitalClockComponent {
    constructor() {
    }
    ngOnInit() {
        this.date = Date.now();
        setInterval(() => this.date = Date.now(), 1000);
    }
}
DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) { return new (t || DigitalClockComponent)(); };
DigitalClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DigitalClockComponent, selectors: [["app-digital-clock"]], decls: 4, vars: 4, consts: [[1, "content"]], template: function DigitalClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.date, "HH:mm:ss"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kaWdpdGFsLWNsb2NrL2RpZ2l0YWwtY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZGlnaXRhbC1jbG9jay9kaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-digital-clock',
                templateUrl: './digital-clock.component.html',
                styleUrls: ['./digital-clock.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./widgets/date/date.component */
      "./src/app/widgets/date/date.component.ts");
      /* harmony import */


      var _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./widgets/weather/weather.component */
      "./src/app/widgets/weather/weather.component.ts");
      /* harmony import */


      var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./widgets/digital-clock/digital-clock.component */
      "./src/app/widgets/digital-clock/digital-clock.component.ts");
      /* harmony import */


      var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./widgets/analog-clock/analog-clock.component */
      "./src/app/widgets/analog-clock/analog-clock.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'projet-AP5';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-weather");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-digital-clock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-analog-clock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_widgets_date_date_component__WEBPACK_IMPORTED_MODULE_1__["DateComponent"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_2__["WeatherComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_3__["DigitalClockComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_4__["AnalogClockComponent"]],
        styles: [".content[_ngcontent-%COMP%] {\n    height: 100vh;\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    grid-template-rows: repeat(6, 1fr);\n}\n\napp-date[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 5;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    \n}\n\napp-weather[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 5;\n    grid-row-end: 7;\n    \n}\n\napp-digital-clock[_ngcontent-%COMP%] {\n    grid-column-start: 9;\n    grid-column-end: 11;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    \n}\n\napp-analog-clock[_ngcontent-%COMP%] {\n    grid-column-start: 9;\n    grid-column-end: 11;\n    grid-row-start: 5;\n    grid-row-end: 7;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG59XG5cbmFwcC1kYXRlIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IHJlZDsqL1xufVxuXG5hcHAtd2VhdGhlciB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiA1O1xuICAgIGdyaWQtcm93LWVuZDogNztcbiAgICAvKmJvcmRlcjogZG90dGVkIDFweCBncmVlbjsqL1xufVxuXG5hcHAtZGlnaXRhbC1jbG9jayB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDk7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAxMTtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgLypib3JkZXI6IGRvdHRlZCAxcHggeWVsbG93OyovXG59XG5cbmFwcC1hbmFsb2ctY2xvY2sge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA5O1xuICAgIGdyaWQtY29sdW1uLWVuZDogMTE7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDU7XG4gICAgZ3JpZC1yb3ctZW5kOiA3O1xuICAgIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IGJsdWU7Ki9cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      "./node_modules/@angular/common/locales/fr.js");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./widgets/weather/weather.component */
      "./src/app/widgets/weather/weather.component.ts");
      /* harmony import */


      var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./widgets/date/date.component */
      "./src/app/widgets/date/date.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./widgets/analog-clock/analog-clock.component */
      "./src/app/widgets/analog-clock/analog-clock.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./widgets/digital-clock/digital-clock.component */
      "./src/app/widgets/digital-clock/digital-clock.component.ts");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: "fr-FR"
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
              useValue: "fr-FR"
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/models/weather.ts":
    /*!***********************************!*\
      !*** ./src/app/models/weather.ts ***!
      \***********************************/

    /*! exports provided: Weather */

    /***/
    function srcAppModelsWeatherTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Weather", function () {
        return Weather;
      });

      var Weather = function Weather() {
        _classCallCheck(this, Weather);
      };
      /***/

    },

    /***/
    "./src/app/services/clock.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/clock.service.ts ***!
      \*******************************************/

    /*! exports provided: ClockService */

    /***/
    function srcAppServicesClockServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClockService", function () {
        return ClockService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ClockService = /*#__PURE__*/function () {
        function ClockService(httpClient) {
          _classCallCheck(this, ClockService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].server_base_url;
        }

        _createClass(ClockService, [{
          key: "getClock",
          value: function getClock() {
            var _this = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              _this.httpClient.get(_this.url + '/clock', {
                observe: 'response'
              }).subscribe(function (page) {
                observer.next(page.body);
              }, function (error) {
                observer.error(error);
                console.error('Get Clock Error', error.status, error.message);
              }, function () {
                observer.complete();
              });
            });
          }
        }]);

        return ClockService;
      }();

      ClockService.ɵfac = function ClockService_Factory(t) {
        return new (t || ClockService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ClockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ClockService,
        factory: ClockService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/weather.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/weather.service.ts ***!
      \*********************************************/

    /*! exports provided: WeatherService */

    /***/
    function srcAppServicesWeatherServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
        return WeatherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var WeatherService = /*#__PURE__*/function () {
        function WeatherService(httpClient) {
          _classCallCheck(this, WeatherService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url;
        }

        _createClass(WeatherService, [{
          key: "getWeather",
          value: function getWeather() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url + '/weather').toPromise().then(function (res) {
                resolve(res);
              }, function (msg) {
                reject(msg);
              });
            });
          }
        }]);

        return WeatherService;
      }();

      WeatherService.ɵfac = function WeatherService_Factory(t) {
        return new (t || WeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WeatherService,
        factory: WeatherService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/widgets/analog-clock/analog-clock.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/analog-clock/analog-clock.component.ts ***!
      \****************************************************************/

    /*! exports provided: AnalogClockComponent */

    /***/
    function srcAppWidgetsAnalogClockAnalogClockComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function () {
        return AnalogClockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/clock.service */
      "./src/app/services/clock.service.ts");

      var AnalogClockComponent = /*#__PURE__*/function () {
        function AnalogClockComponent(clockService) {
          _classCallCheck(this, AnalogClockComponent);

          this.clockService = clockService;
        }

        _createClass(AnalogClockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.drawClock();
          }
        }, {
          key: "drawClock",
          value: function drawClock() {
            var _this3 = this;

            var canvas = document.getElementById("clock");
            var parent = document.getElementById("analog-clock");
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            var ctx = canvas.getContext("2d");
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90;
            this.drawAnalogClock(ctx, radius);
            setInterval(function () {
              return _this3.drawAnalogClock(ctx, radius);
            }, 1000);
          }
        }, {
          key: "drawAnalogClock",
          value: function drawAnalogClock(ctx, radius) {
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill();
            this.drawFace(ctx, radius);
            this.drawNumbers(ctx, radius);
            this.drawTime(ctx, radius); //setInterval(() => this.drawTime,1000);
          }
        }, {
          key: "drawFace",
          value: function drawFace(ctx, radius) {
            var grad;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill(); //Lines to create a gradient effect on the edge of th clock
            //grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
            //grad.addColorStop(0, 'black');
            //grad.addColorStop(0.5, 'white');
            //grad.addColorStop(1, 'black');

            ctx.strokeStyle = grad;
            ctx.lineWidth = radius * 0.04;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill();
          }
        }, {
          key: "drawNumbers",
          value: function drawNumbers(ctx, radius) {
            var ang;
            var num;
            ctx.font = radius * 0.15 + "px arial";
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = 'white';

            for (num = 1; num < 13; num++) {
              ang = num * Math.PI / 6;
              ctx.rotate(ang);
              ctx.translate(0, -radius * 0.85);
              ctx.rotate(-ang);
              ctx.fillText(num.toString(), 0, 0);
              ctx.rotate(ang);
              ctx.translate(0, radius * 0.85);
              ctx.rotate(-ang);
            }
          }
        }, {
          key: "drawTime",
          value: function drawTime(ctx, radius) {
            this.initClock(); //hour

            this.hour = this.hour % 12;
            this.hour = this.hour * Math.PI / 6 + this.minute * Math.PI / (6 * 60) + this.second * Math.PI / (360 * 60);
            this.drawHand(ctx, this.hour, radius * 0.5, radius * 0.07); //minute

            this.minute = this.minute * Math.PI / 30 + this.second * Math.PI / (30 * 60);
            this.drawHand(ctx, this.minute, radius * 0.8, radius * 0.07); // second

            this.second = this.second * Math.PI / 30;
            this.drawHand(ctx, this.second, radius * 0.9, radius * 0.02);
          }
        }, {
          key: "initClock",
          value: function initClock() {
            this.date = new Date();
            this.hour = this.date.getHours();
            this.minute = this.date.getMinutes();
            this.second = this.date.getSeconds();
          }
        }, {
          key: "drawHand",
          value: function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.strokeStyle = "white";
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
          }
        }]);

        return AnalogClockComponent;
      }();

      AnalogClockComponent.ɵfac = function AnalogClockComponent_Factory(t) {
        return new (t || AnalogClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]));
      };

      AnalogClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnalogClockComponent,
        selectors: [["app-analog-clock"]],
        decls: 2,
        vars: 0,
        consts: [["id", "analog-clock"], ["id", "clock", 2, "background-color", "black"]],
        template: function AnalogClockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["#analog-clock[_ngcontent-%COMP%] {\n    height:100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9hbmFsb2ctY2xvY2svYW5hbG9nLWNsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9hbmFsb2ctY2xvY2svYW5hbG9nLWNsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYW5hbG9nLWNsb2NrIHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogClockComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-analog-clock',
            templateUrl: './analog-clock.component.html',
            styleUrls: ['./analog-clock.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/widgets/date/date.component.ts":
    /*!************************************************!*\
      !*** ./src/app/widgets/date/date.component.ts ***!
      \************************************************/

    /*! exports provided: DateComponent */

    /***/
    function srcAppWidgetsDateDateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateComponent", function () {
        return DateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var DateComponent = /*#__PURE__*/function () {
        function DateComponent() {
          _classCallCheck(this, DateComponent);
        }

        _createClass(DateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this4.date = Date.now();
            }, 5000);
          }
        }]);

        return DateComponent;
      }();

      DateComponent.ɵfac = function DateComponent_Factory(t) {
        return new (t || DateComponent)();
      };

      DateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DateComponent,
        selectors: [["app-date"]],
        decls: 5,
        vars: 6,
        consts: [[1, "content"]],
        template: function DateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, ctx.date, "EEEE d LLLL yyyy")));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kYXRlL2RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9kYXRlL2RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OjEwMCU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-date',
            templateUrl: './date.component.html',
            styleUrls: ['./date.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/widgets/digital-clock/digital-clock.component.ts":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/digital-clock/digital-clock.component.ts ***!
      \******************************************************************/

    /*! exports provided: DigitalClockComponent */

    /***/
    function srcAppWidgetsDigitalClockDigitalClockComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function () {
        return DigitalClockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/clock.service */
      "./src/app/services/clock.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var DigitalClockComponent = /*#__PURE__*/function () {
        function DigitalClockComponent(clockService) {
          _classCallCheck(this, DigitalClockComponent);

          this.clockService = clockService;
        }

        _createClass(DigitalClockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this5.date = Date.now();
            }, 1000);
          }
        }]);

        return DigitalClockComponent;
      }();

      DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) {
        return new (t || DigitalClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]));
      };

      DigitalClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DigitalClockComponent,
        selectors: [["app-digital-clock"]],
        decls: 4,
        vars: 4,
        consts: [[1, "content"]],
        template: function DigitalClockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.date, "hh:mm:ss"));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kaWdpdGFsLWNsb2NrL2RpZ2l0YWwtY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL2RpZ2l0YWwtY2xvY2svZGlnaXRhbC1jbG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OjEwMCU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalClockComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-digital-clock',
            templateUrl: './digital-clock.component.html',
            styleUrls: ['./digital-clock.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/widgets/weather/weather.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/widgets/weather/weather.component.ts ***!
      \******************************************************/

    /*! exports provided: WeatherComponent */

    /***/
    function srcAppWidgetsWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
        return WeatherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/weather */
      "./src/app/models/weather.ts");
      /* harmony import */


      var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/weather.service */
      "./src/app/services/weather.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

      function WeatherComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function WeatherComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx_r1.weather.currenttemp, "1.0-0"), "\xB0C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.weather.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.weather.city);
        }
      }

      var WeatherComponent = /*#__PURE__*/function () {
        function WeatherComponent(weatherService) {
          _classCallCheck(this, WeatherComponent);

          this.weatherService = weatherService;
        }

        _createClass(WeatherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.loading = true;
            this.weather = new src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__["Weather"]();
            this.init();
            setInterval(function () {
              return _this6.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this7 = this;

            this.weatherService.getWeather().then(function (weather) {
              _this7.loading = true;
              _this7.weather.currenttemp = weather.currenttemp;
              _this7.weather.city = weather.city;
              _this7.weather.iconurl = weather.iconurl;
            }).then(function () {
              return _this7.loading = false;
            });
          }
        }]);

        return WeatherComponent;
      }();

      WeatherComponent.ɵfac = function WeatherComponent_Factory(t) {
        return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]));
      };

      WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WeatherComponent,
        selectors: [["app-weather"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["class", "horizontal", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [1, "horizontal"], ["alt", "icone meteo actuelle", 3, "src"]],
        template: function WeatherComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherComponent_div_2_Template, 7, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
        styles: [".content[_ngcontent-%COMP%] {\n    color: white;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height:100%;\n}\n\n.horizontal[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: center;\n}\n\n.spinner[_ngcontent-%COMP%] {\n    stroke: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvd2VhdGhlci93ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6MTAwJTtcbn1cblxuLmhvcml6b250YWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3Bpbm5lciB7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-weather',
            templateUrl: './weather.component.html',
            styleUrls: ['./weather.component.css']
          }]
        }], function () {
          return [{
            type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        server_base_url: "http://localhost:3000/api"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/florianbeernaert/Documents/Travail/ISEN/AP5/ProjetMiroirConnecte/Smart_Mirror/front/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
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


      var _models_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./models/configuration */
      "./src/app/models/configuration.ts");
      /* harmony import */


      var _models_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models/profile */
      "./src/app/models/profile.ts");
      /* harmony import */


      var _models_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models/widget */
      "./src/app/models/widget.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./widgets/date/date.component */
      "./src/app/widgets/date/date.component.ts");
      /* harmony import */


      var _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./widgets/weather/weather.component */
      "./src/app/widgets/weather/weather.component.ts");
      /* harmony import */


      var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./widgets/digital-clock/digital-clock.component */
      "./src/app/widgets/digital-clock/digital-clock.component.ts");
      /* harmony import */


      var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./widgets/analog-clock/analog-clock.component */
      "./src/app/widgets/analog-clock/analog-clock.component.ts");
      /* harmony import */


      var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./widgets/news/news.component */
      "./src/app/widgets/news/news.component.ts");
      /* harmony import */


      var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./widgets/weather-forecast/weather-forecast.component */
      "./src/app/widgets/weather-forecast/weather-forecast.component.ts");

      function AppComponent_h1_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bonjour ", ctx_r0.currentProfile.name, ", vous \xEAtes rayonnant(e) aujourd'hui.");
        }
      }

      function AppComponent_h1_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bien le bonjour !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_app_date_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-date", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.setPositionWidget("date"));
        }
      }

      function AppComponent_app_weather_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather", 5);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.setPositionWidget("weather"));
        }
      }

      function AppComponent_app_digital_clock_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-digital-clock", 5);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.setPositionWidget("digital-clock"));
        }
      }

      function AppComponent_app_analog_clock_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analog-clock", 5);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.setPositionWidget("analog-clock"));
        }
      }

      function AppComponent_app_news_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news", 5);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.setPositionWidget("news"));
        }
      }

      function AppComponent_app_weather_forecast_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-forecast", 5);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r7.setPositionWidget("weather-forecast"));
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profiles = new Array();
            this.init();
            this.currentProfile = this.profiles[0];
          }
        }, {
          key: "init",
          value: function init() {
            this.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](null, 'default', new Array(new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](1, 'weather', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 3, 5, 7)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](2, 'date', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 4, 8, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](3, 'analog-clock', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 9, 11, 5, 7)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](4, 'digital-clock', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 9, 11, 1, 2)))));
            this.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"](1, 'Claire', new Array(new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](1, 'weather-forecast', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 1, 3, 1, 4)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](2, 'date', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 3, 7, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](3, 'analog-clock', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 7, 8, 1, 2)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](4, 'agenda', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 0, 0, 0, 0)), new _models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"](5, 'news', new _models_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"](null, 0, 0, 0, 0)))));
            /*this.profiles.push(new Profile(2, 'Stephan', new Array<Widget>(
              new Widget(1, 'weather-forecast', null),
              new Widget(2, 'date', null),
              new Widget(3, 'analog-clock', null),
              new Widget(4, 'digital-clock', null))
            ));*/
          }
        }, {
          key: "searchWidget",
          value: function searchWidget(widget, name) {
            return widget.findIndex(function (n) {
              return n.name === name;
            }) !== -1 ? true : false;
          }
        }, {
          key: "setPositionWidget",
          value: function setPositionWidget(name) {
            var conf = this.currentProfile.widgets.find(function (n) {
              return n.name === name;
            }).config;
            return 'grid-column-start: ' + conf.posXStart + ';\
    grid-column-end: ' + conf.posXEnd + ';\
    grid-row-start: ' + conf.posYStart + ';\
    grid-row-end: ' + conf.posYEnd + ';';
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(eventData) {
            if (eventData.key === 'ArrowUp') {
              var idxCurrentProfile = this.profiles.indexOf(this.currentProfile); // If we reach the end of the list

              if (idxCurrentProfile + 1 < this.profiles.length) {
                this.currentProfile = this.profiles[idxCurrentProfile + 1]; // Go back to default profile
              } else {
                this.currentProfile = this.profiles[0];
              }
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_keyup_HostBindingHandler($event) {
              return ctx.onKeyUp($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 10,
        vars: 8,
        consts: [[1, "content"], [1, "welcome"], ["class", "animation", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [1, "animation"], [3, "ngStyle"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_h1_2_Template, 2, 1, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_h1_3_Template, 2, 0, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_date_4_Template, 1, 1, "app-date", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_weather_5_Template, 1, 1, "app-weather", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_digital_clock_6_Template, 1, 1, "app-digital-clock", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_analog_clock_7_Template, 1, 1, "app-analog-clock", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_news_8_Template, 1, 1, "app-news", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_weather_forecast_9_Template, 1, 1, "app-weather-forecast", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentProfile.name !== "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentProfile.name === "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "date"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "weather"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "digital-clock"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "analog-clock"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "news"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, "weather-forecast"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_5__["DateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_6__["WeatherComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_7__["DigitalClockComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_9__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_10__["WeatherForecastComponent"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  background-color: black;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(6, 1fr);\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 100%;\r\n  grid-column-start: 3;\r\n  grid-column-end: 9;\r\n  grid-row-start: 2;\r\n  grid-row-end: 6;\r\n  \r\n}\r\n.animation[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    -webkit-animation: 2s slidein ease-in-out;\r\n            animation: 2s slidein ease-in-out;\r\n}\r\n@-webkit-keyframes slidein {\r\n  0% {\r\n    font-size: medium;\r\n  }\r\n\r\n  50% {\r\n    font-size: xx-large;\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    font-size: x-large;\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slidein {\r\n  0% {\r\n    font-size: medium;\r\n  }\r\n\r\n  50% {\r\n    font-size: xx-large;\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    font-size: x-large;\r\n    opacity: 1;\r\n  }\r\n}\r\napp-date[_ngcontent-%COMP%] {\r\n  grid-column-start: 3;\r\n  grid-column-end: 8;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  \r\n}\r\napp-weather-forecast[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 3;\r\n  \r\n}\r\napp-weather[_ngcontent-%COMP%] {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  \r\n}\r\napp-digital-clock[_ngcontent-%COMP%] {\r\n  grid-column-start: 9;\r\n  grid-column-end: 11;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  \r\n}\r\napp-analog-clock[_ngcontent-%COMP%] {\r\n  grid-column-start: 8;\r\n  grid-column-end: 9;\r\n  grid-row-start: 1;\r\n  grid-row-end: 2;\r\n  \r\n}\r\napp-news[_ngcontent-%COMP%] {\r\n  grid-column-start: 3;\r\n  grid-column-end: 9;\r\n  grid-row-start: 6;\r\n  grid-row-end: 7;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsa0NBQWtDO0FBQ3BDO0FBQ0E7K0RBQytEO0FBRS9EO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCO0FBRUE7SUFDSSxVQUFVO0lBQ1YseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGO0FBZEE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcclxufVxyXG4vKldlIHVzZSB0aGUgQ1NTIGdyaWQgcHJvcGVydHkgdG8gZGlzcGxheSB0aGUgY29tcG9uZW50IG9uIHRoZSBtaXJyb3JcclxuVGhlIGdyaWQgaXMgMTAgdW5pdHMgKDEgdG8gMTEpIGxvbmcgYW5kIDYgdW5pdHMgbGFyZ2UgKDEgdG8gNykqL1xyXG5cclxuLndlbGNvbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XHJcbiAgZ3JpZC1yb3ctZW5kOiA2O1xyXG4gIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IHdoaXRlOyovXHJcbn1cclxuXHJcbi5hbmltYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogMnMgc2xpZGVpbiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZWluIHtcclxuICAwJSB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbmFwcC1kYXRlIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICBncmlkLWNvbHVtbi1lbmQ6IDg7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IHJlZDsqL1xyXG59XHJcbmFwcC13ZWF0aGVyLWZvcmVjYXN0IHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IGdyZWVueWVsbG93OyovXHJcbn1cclxuYXBwLXdlYXRoZXIge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBncmlkLXJvdy1zdGFydDogMTtcclxuICBncmlkLXJvdy1lbmQ6IDI7XHJcbiAgLypib3JkZXI6IGRvdHRlZCAxcHggZ3JlZW47Ki9cclxufVxyXG5cclxuYXBwLWRpZ2l0YWwtY2xvY2sge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA5O1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMTE7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IHllbGxvdzsqL1xyXG59XHJcblxyXG5hcHAtYW5hbG9nLWNsb2NrIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogODtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDk7XHJcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgZ3JpZC1yb3ctZW5kOiAyO1xyXG4gIC8qYm9yZGVyOiBkb3R0ZWQgMXB4IGJsdWU7Ki9cclxufVxyXG5cclxuYXBwLW5ld3Mge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogOTtcclxuICBncmlkLXJvdy1zdGFydDogNjtcclxuICBncmlkLXJvdy1lbmQ6IDc7XHJcbiAgLypib3JkZXI6IGRvdHRlZCAxcHggYnJvd247Ki9cclxufVxyXG4iXX0= */"]
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
        }], function () {
          return [];
        }, {
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
          }]
        });
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
      /* harmony import */


      var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./widgets/news/news.component */
      "./src/app/widgets/news/news.component.ts");
      /* harmony import */


      var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./widgets/weather-forecast/weather-forecast.component */
      "./src/app/widgets/weather-forecast/weather-forecast.component.ts");

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
          useValue: 'fr-FR'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__["WeatherForecastComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_weather_component__WEBPACK_IMPORTED_MODULE_5__["WeatherComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_13__["WeatherForecastComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
              useValue: 'fr-FR'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/models/configuration.ts":
    /*!*****************************************!*\
      !*** ./src/app/models/configuration.ts ***!
      \*****************************************/

    /*! exports provided: Configuration */

    /***/
    function srcAppModelsConfigurationTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Configuration", function () {
        return Configuration;
      });

      var Configuration = function Configuration(id, posXStart, posXEnd, posYStart, posYEnd) {
        _classCallCheck(this, Configuration);

        this.id = id;
        this.posXStart = posXStart;
        this.posXEnd = posXEnd;
        this.posYStart = posYStart;
        this.posYEnd = posYEnd;
      };
      /***/

    },

    /***/
    "./src/app/models/hourly.ts":
    /*!**********************************!*\
      !*** ./src/app/models/hourly.ts ***!
      \**********************************/

    /*! exports provided: Hourly */

    /***/
    function srcAppModelsHourlyTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Hourly", function () {
        return Hourly;
      });

      var Hourly = function Hourly(dt, temp, description, iconurl) {
        _classCallCheck(this, Hourly);

        this.dt = dt;
        this.temp = temp;
        this.description = description;
        this.iconurl = iconurl;
      };
      /***/

    },

    /***/
    "./src/app/models/profile.ts":
    /*!***********************************!*\
      !*** ./src/app/models/profile.ts ***!
      \***********************************/

    /*! exports provided: Profile */

    /***/
    function srcAppModelsProfileTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return Profile;
      });

      var Profile = function Profile(id, name, widgets) {
        _classCallCheck(this, Profile);

        this.id = id;
        this.name = name;
        this.widgets = widgets;
      };
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
    "./src/app/models/widget.ts":
    /*!**********************************!*\
      !*** ./src/app/models/widget.ts ***!
      \**********************************/

    /*! exports provided: Widget */

    /***/
    function srcAppModelsWidgetTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Widget", function () {
        return Widget;
      });

      var Widget = function Widget(id, name, config) {
        _classCallCheck(this, Widget);

        this.id = id;
        this.name = name;
        this.config = config;
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
    "./src/app/services/news.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/news.service.ts ***!
      \******************************************/

    /*! exports provided: NewsService */

    /***/
    function srcAppServicesNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsService", function () {
        return NewsService;
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

      var NewsService = /*#__PURE__*/function () {
        function NewsService(httpClient) {
          _classCallCheck(this, NewsService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url;
        }

        _createClass(NewsService, [{
          key: "getNews",
          value: function getNews() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.httpClient.get(_this2.url + '/news').toPromise().then(function (res) {
                resolve(res);
              }, function (msg) {
                reject(msg);
              });
            });
          }
        }]);

        return NewsService;
      }();

      NewsService.ɵfac = function NewsService_Factory(t) {
        return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NewsService,
        factory: NewsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
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
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              _this3.httpClient.get(_this3.url + '/weather').toPromise().then(function (res) {
                resolve(res);
              }, function (msg) {
                reject(msg);
              });
            });
          }
        }, {
          key: "getWeatherForecast",
          value: function getWeatherForecast() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server_base_url + '/weather_forecast').toPromise().then(function (res) {
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

      var AnalogClockComponent = /*#__PURE__*/function () {
        function AnalogClockComponent() {
          _classCallCheck(this, AnalogClockComponent);
        }

        _createClass(AnalogClockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.drawClock();
          }
        }, {
          key: "drawClock",
          value: function drawClock() {
            var _this5 = this;

            var canvas = document.getElementById('clock');
            var parent = document.getElementById('analog-clock');
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight * 0.8;
            var ctx = canvas.getContext('2d');
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.9;
            this.drawAnalogClock(ctx, radius);
            setInterval(function () {
              return _this5.drawAnalogClock(ctx, radius);
            }, 1000);
          }
        }, {
          key: "drawAnalogClock",
          value: function drawAnalogClock(ctx, radius) {
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'white';
            ctx.fill();
            this.drawFace(ctx, radius);
            this.drawNumbers(ctx, radius);
            this.drawTime(ctx, radius);
          }
        }, {
          key: "drawFace",
          value: function drawFace(ctx, radius) {
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.lineWidth = radius * 0.04;
            ctx.stroke();
          }
        }, {
          key: "drawNumbers",
          value: function drawNumbers(ctx, radius) {
            var ang;
            var num;
            ctx.font = radius * 0.15 + 'px arial';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
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
            this.initClock(); // hour

            this.hour = this.hour % 12;
            this.hour = this.hour * Math.PI / 6 + this.minute * Math.PI / (6 * 60) + this.second * Math.PI / (360 * 60);
            this.drawHand(ctx, this.hour, radius * 0.5, radius * 0.07); // minute

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
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'white';
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
        return new (t || AnalogClockComponent)();
      };

      AnalogClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AnalogClockComponent,
        selectors: [["app-analog-clock"]],
        decls: 2,
        vars: 0,
        consts: [["id", "analog-clock"], ["id", "clock"]],
        template: function AnalogClockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvYW5hbG9nLWNsb2NrL2FuYWxvZy1jbG9jay5jb21wb25lbnQuY3NzIn0= */"]
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
          return [];
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
            var _this6 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this6.date = Date.now();
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
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kYXRlL2RhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL2RhdGUvZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufSJdfQ== */"]
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
            var _this7 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this7.date = Date.now();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.date, "HH:mm:ss"));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9kaWdpdGFsLWNsb2NrL2RpZ2l0YWwtY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvZGlnaXRhbC1jbG9jay9kaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */"]
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
    "./src/app/widgets/news/news.component.ts":
    /*!************************************************!*\
      !*** ./src/app/widgets/news/news.component.ts ***!
      \************************************************/

    /*! exports provided: NewsComponent */

    /***/
    function srcAppWidgetsNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
        return NewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/news.service */
      "./src/app/services/news.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

      function NewsComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function NewsComponent_marquee_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "marquee", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.currentNews.title, " ");
        }
      }

      var NewsComponent = /*#__PURE__*/function () {
        function NewsComponent(newsService) {
          _classCallCheck(this, NewsComponent);

          this.newsService = newsService;
        }

        _createClass(NewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.loading = true;
            this.news = [];
            this.init();
            setInterval(function () {
              return _this8.init();
            }, 600000);
            setInterval(function () {
              return _this8.nextNews();
            }, 10000);
          }
        }, {
          key: "nextNews",
          value: function nextNews() {
            var idxCurrentNews = this.news.indexOf(this.currentNews);

            if (idxCurrentNews + 1 < this.news.length) {
              this.currentNews = this.news[idxCurrentNews + 1];
            } else {
              this.currentNews = this.news[0];
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this9 = this;

            this.newsService.getNews().then(function (news) {
              _this9.loading = true;
              news.forEach(function (element) {
                _this9.news.push(element);
              });
              _this9.currentNews = _this9.news[0];
            }).then(function () {
              return _this9.loading = false;
            });
          }
        }]);

        return NewsComponent;
      }();

      NewsComponent.ɵfac = function NewsComponent_Factory(t) {
        return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
      };

      NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NewsComponent,
        selectors: [["app-news"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "5", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "5"]],
        template: function NewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsComponent_marquee_2_Template, 3, 1, "marquee", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.css']
          }]
        }], function () {
          return [{
            type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/widgets/weather-forecast/weather-forecast.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/weather-forecast/weather-forecast.component.ts ***!
      \************************************************************************/

    /*! exports provided: WeatherForecastComponent */

    /***/
    function srcAppWidgetsWeatherForecastWeatherForecastComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function () {
        return WeatherForecastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/hourly */
      "./src/app/models/hourly.ts");
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

      function WeatherForecastComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "first": a0
        };
      };

      function WeatherForecastComponent_div_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var hourly_r3 = ctx.$implicit;
          var isFirst_r4 = ctx.first;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, isFirst_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, hourly_r3.dt, "HH"), "h", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 9, hourly_r3.dt, "mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", hourly_r3.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, isFirst_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, hourly_r3.temp, "1.0-0"), "\xB0C ");
        }
      }

      function WeatherForecastComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherForecastComponent_div_2_li_1_Template, 10, 19, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredHourly);
        }
      }

      var WeatherForecastComponent = /*#__PURE__*/function () {
        function WeatherForecastComponent(weatherService) {
          _classCallCheck(this, WeatherForecastComponent);

          this.weatherService = weatherService;
        }

        _createClass(WeatherForecastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.loading = true;
            this.filteredHourly = [];
            this.init();
            setInterval(function () {
              return _this10.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this11 = this;

            this.weatherService.getWeatherForecast().then(function (weatherForecast) {
              _this11.loading = true;

              _this11.filteredHourly.push(new src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__["Hourly"](Date.now(), weatherForecast.current.temp, weatherForecast.current.description, weatherForecast.current.iconurl));

              weatherForecast.hourly.forEach(function (hourly, index) {
                if (index % 3 === 0 && index !== 0 && index < 15) {
                  hourly.dt = new Date(hourly.dt.valueOf() * 1000);

                  _this11.filteredHourly.push(hourly);
                }
              });
            }).then(function () {
              return _this11.loading = false;
            });
          }
        }]);

        return WeatherForecastComponent;
      }();

      WeatherForecastComponent.ɵfac = function WeatherForecastComponent_Factory(t) {
        return new (t || WeatherForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]));
      };

      WeatherForecastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WeatherForecastComponent,
        selectors: [["app-weather-forecast"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [4, "ngFor", "ngForOf"], [1, "horizontal"], [3, "ngClass"], ["alt", "icone meteo ", 3, "src"]],
        template: function WeatherForecastComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherForecastComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherForecastComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    height:100%;\r\n    list-style-type:none; \r\n}\r\n.horizontal[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n}\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\r\n.first[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyLWZvcmVjYXN0L3dlYXRoZXItZm9yZWNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvd2VhdGhlci1mb3JlY2FzdC93ZWF0aGVyLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTsgXHJcbn1cclxuLmhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpcnN0IHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherForecastComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-weather-forecast',
            templateUrl: './weather-forecast.component.html',
            styleUrls: ['./weather-forecast.component.css']
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
            var _this12 = this;

            this.loading = true;
            this.weather = new src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__["Weather"]();
            this.init();
            setInterval(function () {
              return _this12.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this13 = this;

            this.weatherService.getWeather().then(function (weather) {
              _this13.loading = true;
              _this13.weather.currenttemp = weather.currenttemp;
              _this13.weather.city = weather.city;
              _this13.weather.iconurl = weather.iconurl;
            }).then(function () {
              return _this13.loading = false;
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
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvd2lkZ2V0cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufSJdfQ== */"]
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
      /*! C:\Users\latou\Documents\Git\Smart_Mirror\front\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
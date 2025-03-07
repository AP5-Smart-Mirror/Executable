(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+AFx":
    /*!************************************************!*\
      !*** ./src/app/website/user/user.component.ts ***!
      \************************************************/

    /*! exports provided: UserComponent */

    /***/
    function AFx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
        return UserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/account */
      "PNcX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/account.service */
      "flj8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./profile/profile.component */
      "mqQF");
      /* eslint-disable max-len */


      function UserComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-profile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_ng_container_8_Template_app_profile_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var profile_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.choseProfile(profile_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var profile_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("profileName", profile_r3.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("profileImg", ctx_r0.getProfileImg(profile_r3));
        }
      }

      function UserComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez votre nom d'utilisateur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre nom d'utilisateur doit \xEAtre d'au moins 3 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserComponent = /*#__PURE__*/function () {
        function UserComponent(profileService, accountService, activatedRoute, router) {
          _classCallCheck(this, UserComponent);

          this.profileService = profileService;
          this.accountService = accountService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
        }

        _createClass(UserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            this.currentAccount = new src_app_models_account__WEBPACK_IMPORTED_MODULE_1__["Account"]();
            this.currentAccount.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
            this.loadAccount(this.activatedRoute.snapshot.paramMap.get('id'));
            this.loadProfiles(this.activatedRoute.snapshot.paramMap.get('id'));
          }
        }, {
          key: "loadAccount",
          value: function loadAccount(id) {
            var _this = this;

            this.accountService.getAccount(id).then(function (res) {
              _this.currentAccount.username = res.username;
            });
          }
        }, {
          key: "loadProfiles",
          value: function loadProfiles(id) {
            var _this2 = this;

            this.profiles = [];
            this.profileService.getProfilesById(id).then(function (profiles) {
              profiles.profiles.forEach(function (profile) {
                _this2.profiles.push(profile);
              });
            });
          }
        }, {
          key: "choseProfile",
          value: function choseProfile(id) {
            this.router.navigate(['/widget-page', id]);
          }
        }, {
          key: "getProfileImg",
          value: function getProfileImg(profile) {
            return profile.img ? profile.img : 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
          }
        }, {
          key: "addNewProfile",
          value: function addNewProfile() {
            if (this.profiles.length >= 5) {
              console.log('Maximum of profiles reached');
              this.name.setValue('');
            } else if (this.name.valid) {
              this.profileService.addProfile(String(this.currentAccount.id), this.name.value);
              this.name.setValue('');
              console.log('New profile added correctly');
              this.init();
            }
          }
        }]);

        return UserComponent;
      }();

      UserComponent.ɵfac = function UserComponent_Factory(t) {
        return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserComponent,
        selectors: [["app-user"]],
        decls: 16,
        vars: 5,
        consts: [[1, "content"], [1, "welcome"], [1, "container-profile"], [4, "ngFor", "ngForOf"], [1, "create-profile", 3, "click"], [2, "width", "100px"], ["matInput", "", "type", "text", "placeholder", "Nom", 3, "formControl"], [4, "ngIf"], [1, "plus"], [3, "profileName", "profileImg", "click"]],
        template: function UserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choisissez votre profil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserComponent_ng_container_8_Template, 2, 2, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_div_click_9_listener() {
              return ctx.addNewProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserComponent_mat_error_12_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserComponent_mat_error_13_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenue ", ctx.currentAccount.username, " !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.hasError("minlength"));
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__["HomeBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n\twidth: 200px;\r\n\tmargin: 5px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 90%;\r\n\t\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n\tcolor :white;\r\n\tfont-size: xx-large;\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\t\r\n}\r\n\r\n.container-profile[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 50%;\r\n\t\r\n}\r\n\r\napp-profile[_ngcontent-%COMP%] {\r\n\theight: 90%;\r\n\twidth: 18%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tbox-shadow: 0px 0px 9px 0px black;\r\n\ttransition: width 0.3s, height 0.5s, box-shadow 0.3s;\r\n\tbackground-color:  #988a6d;\r\n}\r\n\r\napp-profile[_ngcontent-%COMP%]:hover {\r\n\theight: 100%;\r\n\twidth: 20%;\r\n    box-shadow: 0px 0px 20px 5px black;\r\n\tcursor: pointer;\r\n}\r\n\r\n.create-profile[_ngcontent-%COMP%] {\r\n\theight: 150px;\r\n\twidth: 150px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbox-shadow: 0px 0px 20px 0px gray;\r\n\ttransition: background-color 0.2s, color 0.2s, box-shadow 0.2s;\r\n\tbackground-color:  #988a6d;\r\n}\r\n\r\n.create-profile[_ngcontent-%COMP%]:hover {\r\n\tbackground-color: #996d0d;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 20px 0px black;\r\n}\r\n\r\n.create-profile[_ngcontent-%COMP%]:active {\r\n\tbox-shadow: inset 0px 0px 20px 0px white;\r\n}\r\n\r\n.plus[_ngcontent-%COMP%] {\r\n\tfont-size: 5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFdBQVc7O0FBRVo7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjs7QUFFcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFdBQVc7O0FBRVo7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixpQ0FBaUM7Q0FDakMsb0RBQW9EO0NBQ3BELDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixVQUFVO0lBQ1Asa0NBQWtDO0NBQ3JDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsOERBQThEO0NBQzlELDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osZUFBZTtDQUNmLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGNBQWM7QUFDZiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA5MCU7XHJcblx0XHJcbn1cclxuXHJcbmgxLFxyXG5oMyB7XHJcblx0Y29sb3IgOndoaXRlO1xyXG5cdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcclxufVxyXG5cclxuLmNvbnRhaW5lci1wcm9maWxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDUwJTtcclxuXHRcclxufVxyXG5cclxuYXBwLXByb2ZpbGUge1xyXG5cdGhlaWdodDogOTAlO1xyXG5cdHdpZHRoOiAxOCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDlweCAwcHggYmxhY2s7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggMC4zcywgaGVpZ2h0IDAuNXMsIGJveC1zaGFkb3cgMC4zcztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAgIzk4OGE2ZDtcclxufVxyXG5cclxuYXBwLXByb2ZpbGU6aG92ZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDVweCBibGFjaztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jcmVhdGUtcHJvZmlsZSB7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHR3aWR0aDogMTUwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCBncmF5O1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycywgY29sb3IgMC4ycywgYm94LXNoYWRvdyAwLjJzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICAjOTg4YTZkO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2ZpbGU6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5OTZkMGQ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IGJsYWNrO1xyXG59XHJcblxyXG4uY3JlYXRlLXByb2ZpbGU6YWN0aXZlIHtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDIwcHggMHB4IHdoaXRlO1xyXG59XHJcblxyXG4ucGx1cyB7XHJcblx0Zm9udC1zaXplOiA1ZW07XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
          }, {
            type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
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
      "zUnb");
      /***/
    },

    /***/
    "1j5X":
    /*!************************************************!*\
      !*** ./src/app/website/home/home.component.ts ***!
      \************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function j5X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _c1 = function _c1() {
        return ["/register"];
      };

      var _c2 = function _c2() {
        return ["/settings"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 14,
        vars: 6,
        consts: [[1, "content"], [1, "title"], [1, "button-part"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bienvenue sur votre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "miroir connect\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Connexion ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Inscription ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Param\xE8tres ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_1__["HomeBarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n    align-items: center;\r\n\theight: 50%;\r\n\twidth: 100%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: white;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n\t\r\n}\r\n\r\n.button-part[_ngcontent-%COMP%] {\r\n    display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\t\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tfont-size: large;\r\n\tcolor :white;\r\n  width: 15%;\r\n\tmargin: 5px;\r\n\ttransition: width 0.3s, margin 0.3s, font-size 0.3s;\r\n\tbackground-color: #996d0d;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    font-size: x-large;\r\n\twidth: 18%;\r\n\tbackground-color: #988a6d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtJQUMxQixtQkFBbUI7Q0FDdEIsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxtQkFBbUI7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtDQUNoQixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixXQUFXOztBQUVaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7RUFDWCxVQUFVO0NBQ1gsV0FBVztDQUNYLG1EQUFtRDtDQUNuRCx5QkFBeUI7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7Q0FDckIsVUFBVTtDQUNWLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA1MCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiB4eC1sYXJnZTtcclxuXHRcclxufVxyXG5cclxuLmJ1dHRvbi1wYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdFxyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGZvbnQtc2l6ZTogbGFyZ2U7XHJcblx0Y29sb3IgOndoaXRlO1xyXG4gIHdpZHRoOiAxNSU7XHJcblx0bWFyZ2luOiA1cHg7XHJcblx0dHJhbnNpdGlvbjogd2lkdGggMC4zcywgbWFyZ2luIDAuM3MsIGZvbnQtc2l6ZSAwLjNzO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5OTZkMGQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcblx0d2lkdGg6IDE4JTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTg4YTZkO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "4J7j":
    /*!**************************************************************!*\
      !*** ./src/app/website/widget-page/widget-page.component.ts ***!
      \**************************************************************/

    /*! exports provided: WidgetPageComponent */

    /***/
    function J7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetPageComponent", function () {
        return WidgetPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_enums_widget_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/enums/widget-name */
      "VJva");
      /* harmony import */


      var src_app_models_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/widget */
      "4Kri");
      /* harmony import */


      var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/widget.service */
      "a5fw");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WidgetPageComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var widget_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", widget_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", widget_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](widget_r1.value);
        }
      }

      var WidgetPageComponent = /*#__PURE__*/function () {
        function WidgetPageComponent(widgetService, profileService, activatedRoute, router) {
          _classCallCheck(this, WidgetPageComponent);

          this.widgetService = widgetService;
          this.profileService = profileService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.widgetName = src_app_enums_widget_name__WEBPACK_IMPORTED_MODULE_1__["WidgetName"];
        }

        _createClass(WidgetPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadProfile(this.activatedRoute.snapshot.paramMap.get('id'));
            this.loadWidgets(this.activatedRoute.snapshot.paramMap.get('id'));
          }
        }, {
          key: "loadProfile",
          value: function loadProfile(id) {
            var _this3 = this;

            this.profileService.getProfile(id).then(function (profile) {
              _this3.currentprofile = profile;
            });
          }
        }, {
          key: "loadWidgets",
          value: function loadWidgets(idProfile) {
            var _this4 = this;

            this.currentprofile.widgets = [];
            this.widgetService.getWidgetsById(idProfile).then(function (widgets) {
              widgets.widgets.forEach(function (widget) {
                _this4.currentprofile.widgets.push(widget);
              });
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this5 = this;

            this.currentprofile.widgets = []; // eslint-disable-next-line guard-for-in

            for (var widget in src_app_enums_widget_name__WEBPACK_IMPORTED_MODULE_1__["WidgetName"]) {
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              var checkboxValue = document.getElementById(src_app_enums_widget_name__WEBPACK_IMPORTED_MODULE_1__["WidgetName"][widget]).checked;

              if (checkboxValue === true) {
                this.currentprofile.widgets.push(new src_app_models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, src_app_enums_widget_name__WEBPACK_IMPORTED_MODULE_1__["WidgetName"][widget], null));
              }
            }

            console.log(this.currentprofile);
            this.widgetService.setWidgetsById(this.currentprofile).then(function () {
              _this5.router.navigate(['/home']);
            });
          }
        }]);

        return WidgetPageComponent;
      }();

      WidgetPageComponent.ɵfac = function WidgetPageComponent_Factory(t) {
        return new (t || WidgetPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      WidgetPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WidgetPageComponent,
        selectors: [["app-widget-page"]],
        decls: 12,
        vars: 3,
        consts: [[1, "content"], [1, "form"], [1, "title"], [1, "form-part"], ["class", "form-part", 4, "ngFor", "ngForOf"], [1, "button-part"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["type", "checkbox", 3, "id"], [3, "for"]],
        template: function WidgetPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choisissez les widgets que vous voulez afficher");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WidgetPageComponent_ng_container_7_Template, 5, 3, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetPageComponent_Template_button_click_10_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Valider ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.widgetName));
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__["HomeBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"]],
        styles: [".welcome[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\theight: 60%;\r\n\tbox-shadow: 0px 0px 8px 0px black;\r\n\tpadding: 30px;\r\n\tbackground-color:  #988a6d;\r\n}\r\n\r\n.form-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.button-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLFdBQVc7Q0FDWCxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUIiLCJmaWxlIjoid2lkZ2V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEsXHJcbmgzIHtcclxuXHRmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGhlaWdodDogNjAlO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCBibGFjaztcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICAjOTg4YTZkO1xyXG59XHJcblxyXG4uZm9ybS1wYXJ0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYnV0dG9uLXBhcnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-widget-page',
            templateUrl: './widget-page.component.html',
            styleUrls: ['./widget-page.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]
          }, {
            type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "4Kri":
    /*!**********************************!*\
      !*** ./src/app/models/widget.ts ***!
      \**********************************/

    /*! exports provided: Widget */

    /***/
    function Kri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Widget", function () {
        return Widget;
      });

      var Widget = function Widget(id, widget, config) {
        _classCallCheck(this, Widget);

        this.id = id;
        this.widget = widget;
        this.config = config;
      };
      /***/

    },

    /***/
    "6/uA":
    /*!************************************************!*\
      !*** ./src/app/widgets/news/news.component.ts ***!
      \************************************************/

    /*! exports provided: NewsComponent */

    /***/
    function uA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
        return NewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/news.service */
      "Ado8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.newsText, " ");
        }
      }

      var NewsComponent = /*#__PURE__*/function () {
        function NewsComponent(newsService) {
          _classCallCheck(this, NewsComponent);

          this.newsService = newsService;
          this.newsText = '';
        }

        _createClass(NewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.loading = true;
            this.init();
            setInterval(function () {
              return _this6.init();
            }, 600000);
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
            var _this7 = this;

            this.news = [];
            this.newsService.getNews().then(function (news) {
              _this7.loading = true;
              news.forEach(function (element) {
                _this7.newsText += element.title;
                _this7.newsText += ' - ';
              });
              _this7.currentNews = _this7.news[0];
            }).then(function () {
              return _this7.loading = false;
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
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "10", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], ["truespeed", "", "scrollamount", "1", "scrolldelay", "10"]],
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
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6Im5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbn0iXX0= */"]
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
    "7t4K":
    /*!******************************************************!*\
      !*** ./src/app/widgets/almanac/almanac.component.ts ***!
      \******************************************************/

    /*! exports provided: AlmanacComponent */

    /***/
    function t4K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlmanacComponent", function () {
        return AlmanacComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/weather.service */
      "s3jh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AlmanacComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function AlmanacComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r1.sunrise, "HH:mm"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, ctx_r1.sunset, "HH:mm"), " ");
        }
      }

      var AlmanacComponent = /*#__PURE__*/function () {
        function AlmanacComponent(weatherService) {
          _classCallCheck(this, AlmanacComponent);

          this.weatherService = weatherService;
        }

        _createClass(AlmanacComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.loading = true;
            this.sunrise = new Date();
            this.sunset = new Date();
            this.init();
            setInterval(function () {
              return _this8.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this9 = this;

            this.weatherService.getWeatherForecast().then(function (weatherForecast) {
              console.log(weatherForecast);
              _this9.loading = true;
              _this9.sunrise = new Date(weatherForecast.current.sunrise.valueOf() * 1000);
              _this9.sunset = new Date(weatherForecast.current.sunset.valueOf() * 1000);
            }).then(function () {
              return _this9.loading = false;
            });
          }
        }]);

        return AlmanacComponent;
      }();

      AlmanacComponent.ɵfac = function AlmanacComponent_Factory(t) {
        return new (t || AlmanacComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]));
      };

      AlmanacComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlmanacComponent,
        selectors: [["app-almanac"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], ["src", "../../../assets/icons/arrow_upward-white-18dp.svg", "alt", "Lever soleil"], ["src", "../../../assets/icons/arrow_downward-white-18dp.svg", "alt", "Coucher soleil"]],
        template: function AlmanacComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlmanacComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlmanacComponent_div_2_Template, 8, 8, "div", 2);

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
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    height:100%;\r\n    list-style-type:none; \r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbWFuYWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImFsbWFuYWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lOyBcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlmanacComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-almanac',
            templateUrl: './almanac.component.html',
            styleUrls: ['./almanac.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8Zhg":
    /*!***********************************!*\
      !*** ./src/app/models/weather.ts ***!
      \***********************************/

    /*! exports provided: Weather */

    /***/
    function Zhg(module, __webpack_exports__, __webpack_require__) {
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
    "Ado8":
    /*!******************************************!*\
      !*** ./src/app/services/news.service.ts ***!
      \******************************************/

    /*! exports provided: NewsService */

    /***/
    function Ado8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsService", function () {
        return NewsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var NewsService = /*#__PURE__*/function () {
        function NewsService(httpClient) {
          _classCallCheck(this, NewsService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(NewsService, [{
          key: "getNews",
          value: function getNews() {
            var _this10 = this;

            return new Promise(function (resolve, reject) {
              _this10.httpClient.get(_this10.url + '/news').toPromise().then(function (res) {
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
    "As3P":
    /*!****************************************************!*\
      !*** ./src/app/widgets/emails/emails.component.ts ***!
      \****************************************************/

    /*! exports provided: EmailsComponent */

    /***/
    function As3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailsComponent", function () {
        return EmailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_emails_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/emails.service */
      "nN1H");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function EmailsComponent_mat_progress_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 4);
        }
      }

      function EmailsComponent_h4_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.mailGoogle[i_r3].sender);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r4.mailGoogle[i_r3].object, "]");
        }
      }

      function EmailsComponent_h4_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmailsComponent_h4_6_div_1_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 < 3);
        }
      }

      var EmailsComponent = /*#__PURE__*/function () {
        function EmailsComponent(mailGoogleService) {
          _classCallCheck(this, EmailsComponent);

          this.mailGoogleService = mailGoogleService;
        }

        _createClass(EmailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.loading = true;
            this.mailGoogle = [];
            this.fetchMails();
            setInterval(function () {
              return _this11.fetchMails();
            }, 3600000);
          }
        }, {
          key: "fetchMails",
          value: function fetchMails() {
            var _this12 = this;

            this.mailGoogleService.getMail().then(function (mailGoogle) {
              _this12.loading = true;
              _this12.nbUnread = 0;
              mailGoogle.forEach(function (element) {
                element.sender = element.sender.split('<')[0];

                _this12.mailGoogle.push(element);

                _this12.nbUnread++;
              });
              console.log(_this12.mailGoogle);
            }).then(function () {
              return _this12.loading = false;
            });
          }
        }]);

        return EmailsComponent;
      }();

      EmailsComponent.ɵfac = function EmailsComponent_Factory(t) {
        return new (t || EmailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"]));
      };

      EmailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmailsComponent,
        selectors: [["app-emails"]],
        decls: 7,
        vars: 3,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["src", "..\\assets\\gmail.png", 1, "logo"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate", 1, "spinner"], [4, "ngIf"], [1, "sender"], [1, "object"]],
        template: function EmailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmailsComponent_mat_progress_spinner_2_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmailsComponent_h4_6_Template, 2, 1, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Messages non lus : ", ctx.nbUnread, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mailGoogle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\r\n\r\n.mails[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0px;\r\n}\r\n\r\n.sender[_ngcontent-%COMP%] {\r\n    color: #EA4335;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 75px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiZW1haWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uc2VuZGVyIHtcclxuICAgIGNvbG9yOiAjRUE0MzM1O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-emails',
            templateUrl: './emails.component.html',
            styleUrls: ['./emails.component.css']
          }]
        }], function () {
          return [{
            type: _services_emails_service__WEBPACK_IMPORTED_MODULE_1__["EmailsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Aso2":
    /*!*********************************************!*\
      !*** ./src/app/services/profile.service.ts ***!
      \*********************************************/

    /*! exports provided: ProfileService */

    /***/
    function Aso2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* eslint-disable object-shorthand */

      /* eslint-disable quote-props */

      /* eslint-disable @typescript-eslint/naming-convention */


      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(httpClient) {
          _classCallCheck(this, ProfileService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(ProfileService, [{
          key: "getProfilesById",
          value: function getProfilesById(idAccount) {
            return this.httpClient.post(this.url + '/bdd/profile/get_profiles', {
              'id_account': idAccount
            }).toPromise();
          }
        }, {
          key: "getProfile",
          value: function getProfile(id) {
            return this.httpClient.post(this.url + '/bdd/profile/get_profile', {
              'id': id
            }).toPromise();
          }
        }, {
          key: "addProfile",
          value: function addProfile(idAccount, username) {
            return this.httpClient.post(this.url + '/bdd/profile/register', {
              'id_account': idAccount,
              'username': username
            }).toPromise();
          }
        }]);

        return ProfileService;
      }();

      ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileService,
        factory: ProfileService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
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
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
        serverBaseUrl: 'http://localhost:3000/api'
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
    "Epcn":
    /*!********************************************************************!*\
      !*** ./src/app/website/authentication/authentication.component.ts ***!
      \********************************************************************/

    /*! exports provided: AuthenticationComponent */

    /***/
    function Epcn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function () {
        return AuthenticationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/account */
      "PNcX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function AuthenticationComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez votre nom d'utilisateur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthenticationComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre nom d'utilisateur doit \xEAtre d'au moins 3 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthenticationComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.username.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthenticationComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Veuillez saisir un mot de passe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthenticationComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre mot de passe doit \xEAtre d'au moins 8 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AuthenticationComponent_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.password.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/register"];
      };

      var AuthenticationComponent = /*#__PURE__*/function () {
        function AuthenticationComponent(router, authenticationService) {
          _classCallCheck(this, AuthenticationComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
          this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        }

        _createClass(AuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hide = true;
            this.account = new src_app_models_account__WEBPACK_IMPORTED_MODULE_2__["Account"]();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            this.account.username = this.username.value;
            this.account.password = this.password.value;
            this.authenticationService.login(this.account).then(function (body) {
              if (body && body.id > 0) {
                console.log('Connection fulfilled');

                _this13.router.navigate(['/user', body.id]);
              } else {
                console.log('Connection failed');
                alert('Wrong password or username');
              }
            });
          }
        }]);

        return AuthenticationComponent;
      }();

      AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) {
        return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
      };

      AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthenticationComponent,
        selectors: [["app-authentication"]],
        decls: 31,
        vars: 15,
        consts: [[1, "content"], [1, "form"], [1, "title"], [1, "form-part"], ["matInput", "", "type", "text", 3, "formControl"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matInput", "", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "button-part"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 3, "routerLink"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
        template: function AuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Connexion \xE0 votre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "espace personnel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nom d'utilisateur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthenticationComponent_mat_error_13_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthenticationComponent_mat_error_14_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AuthenticationComponent_button_15_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mot de passe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AuthenticationComponent_mat_error_20_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AuthenticationComponent_mat_error_21_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_22_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AuthenticationComponent_button_25_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_27_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Connexion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Inscription");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.password.valid || !ctx.username.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_5__["HomeBarComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 90%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: xx-large;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n  height: 50%;\r\n  box-shadow: 0px 0px 8px 0px black;\r\n  padding: 30px;\r\n  background-color:  #988a6d;\r\n}\r\n\r\n.form-part[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.button-part[_ngcontent-%COMP%] {\r\n  display: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtDQUNkLHNCQUFzQjtDQUN0Qiw4QkFBOEI7RUFDN0IsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtDQUNkLHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0NBQ2QsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5QiIsImZpbGUiOiJhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICM5ODhhNmQ7XHJcbn1cclxuXHJcbi5mb3JtLXBhcnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5idXR0b24tcGFydCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-authentication',
            templateUrl: './authentication.component.html',
            styleUrls: ['./authentication.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FH2a":
    /*!************************************************************************!*\
      !*** ./src/app/widgets/weather-forecast/weather-forecast.component.ts ***!
      \************************************************************************/

    /*! exports provided: WeatherForecastComponent */

    /***/
    function FH2a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function () {
        return WeatherForecastComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/hourly */
      "Pj8M");
      /* harmony import */


      var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/weather.service */
      "s3jh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, hourly_r3.temp, "1.0-0"), "\xB0C");
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
            var _this14 = this;

            this.loading = true;
            this.init();
            setInterval(function () {
              return _this14.init();
            }, 60000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this15 = this;

            this.filteredHourly = [];
            this.weatherService.getWeatherForecast().then(function (weatherForecast) {
              _this15.loading = true;

              _this15.filteredHourly.push(new src_app_models_hourly__WEBPACK_IMPORTED_MODULE_1__["Hourly"](Date.now(), weatherForecast.current.temp, weatherForecast.current.description, weatherForecast.current.iconurl));

              weatherForecast.hourly.forEach(function (hourly, index) {
                if (index % 3 === 0 && index !== 0 && index < 15) {
                  hourly.dt = new Date(hourly.dt.valueOf() * 1000);

                  _this15.filteredHourly.push(hourly);
                }
              });
            }).then(function () {
              return _this15.loading = false;
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
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tlist-style-type: none;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n\tfont-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItZm9yZWNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJ3ZWF0aGVyLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuXHRzdHJva2U6IHdoaXRlO1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG5cdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"]
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
    "FqN/":
    /*!******************************************************************!*\
      !*** ./src/app/website/wifi-settings/wifi-settings.component.ts ***!
      \******************************************************************/

    /*! exports provided: WifiSettingsComponent */

    /***/
    function FqN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WifiSettingsComponent", function () {
        return WifiSettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_wifiNetwork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/wifiNetwork */
      "iWsg");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "ej43");
      /* harmony import */


      var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/profile.service */
      "Aso2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function WifiSettingsComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez le SSID de votre r\xE9seau Wifi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre SSID doit faire au moins 3 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre SSID doit faire moins de 32 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WifiSettingsComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.ssid.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez le mot de passe du r\xE9seau Wifi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre mot de passe doit faire au moins 8 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WifiSettingsComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WifiSettingsComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.password.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WifiSettingsComponent = /*#__PURE__*/function () {
        function WifiSettingsComponent(authenticationService, profileService, router) {
          _classCallCheck(this, WifiSettingsComponent);

          this.authenticationService = authenticationService;
          this.profileService = profileService;
          this.router = router;
          this.ssid = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]);
          this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
          this.currentAccount = this.authenticationService.currentAccountValue;
        }

        _createClass(WifiSettingsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hide = true;
            this.wifiNetork = new src_app_models_wifiNetwork__WEBPACK_IMPORTED_MODULE_2__["WifiNetwork"]();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.wifiNetork.ssid = this.ssid.value;
            this.wifiNetork.password = this.password.value;
            this.router.navigate(['/home']);
          }
        }]);

        return WifiSettingsComponent;
      }();

      WifiSettingsComponent.ɵfac = function WifiSettingsComponent_Factory(t) {
        return new (t || WifiSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      WifiSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WifiSettingsComponent,
        selectors: [["app-wifi-settings"]],
        decls: 30,
        vars: 14,
        consts: [[1, "content"], ["name", "registerForm", 1, "form"], [1, "title"], [1, "form-part"], ["matInput", "", "type", "text", 3, "formControl"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matInput", "", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "button-part"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
        template: function WifiSettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Configuration Wi-Fi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "du miroir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SSID du r\xE9seau");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WifiSettingsComponent_mat_error_13_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WifiSettingsComponent_mat_error_14_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WifiSettingsComponent_mat_error_15_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WifiSettingsComponent_button_16_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mot de passe :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, WifiSettingsComponent_mat_error_21_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WifiSettingsComponent_mat_error_22_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WifiSettingsComponent_Template_button_click_23_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, WifiSettingsComponent_button_26_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WifiSettingsComponent_Template_button_click_28_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Enregistrer le r\xE9seau Wifi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.ssid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssid.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssid.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssid.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ssid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.password.valid || !ctx.ssid.valid);
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_6__["HomeBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 90%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tmargin: 5px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\theight: 60%;\r\n\tbox-shadow: 0px 0px 8px 0px black;\r\n\tpadding: 30px;\r\n\tbackground-color:  #988a6d;\r\n}\r\n\r\n.form-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.button-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZmktc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QixXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCIiwiZmlsZSI6IndpZmktc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcblx0bWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGhlaWdodDogNjAlO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDBweCBibGFjaztcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICAjOTg4YTZkO1xyXG59XHJcblxyXG4uZm9ybS1wYXJ0IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYnV0dG9uLXBhcnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WifiSettingsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wifi-settings',
            templateUrl: './wifi-settings.component.html',
            styleUrls: ['./wifi-settings.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GpSe":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/weather-weekend/weather-weekend.component.ts ***!
      \**********************************************************************/

    /*! exports provided: WeatherWeekendComponent */

    /***/
    function GpSe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherWeekendComponent", function () {
        return WeatherWeekendComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/weather.service */
      "s3jh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function WeatherWeekendComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function WeatherWeekendComponent_div_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var daily_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, daily_r3.dt, "EEEE d MMM"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", daily_r3.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, daily_r3.temp, "1.0-0"), "\xB0C");
        }
      }

      function WeatherWeekendComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWeekendComponent_div_2_li_1_Template, 9, 9, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDaily);
        }
      }

      var WeatherWeekendComponent = /*#__PURE__*/function () {
        function WeatherWeekendComponent(weatherService) {
          _classCallCheck(this, WeatherWeekendComponent);

          this.weatherService = weatherService;
        }

        _createClass(WeatherWeekendComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.loading = true;
            this.init();
            setInterval(function () {
              return _this16.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this17 = this;

            this.filteredDaily = [];
            this.weatherService.getWeatherForecast().then(function (weatherForecast) {
              _this17.loading = true;
              weatherForecast.daily.forEach(function (daily) {
                var dateTmp = new Date(daily.dt.valueOf() * 1000).getDay();
                var dayTmp = new Date(daily.dt.valueOf() * 1000).getDate();
                var actualDay = new Date().getDate();

                if ((dateTmp === 0 || dateTmp === 6) && dayTmp !== actualDay) {
                  daily.dt = new Date(daily.dt.valueOf() * 1000);

                  _this17.filteredDaily.push(daily);
                }
              });
            }).then(function () {
              return _this17.loading = false;
            });
          }
        }]);

        return WeatherWeekendComponent;
      }();

      WeatherWeekendComponent.ɵfac = function WeatherWeekendComponent_Factory(t) {
        return new (t || WeatherWeekendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]));
      };

      WeatherWeekendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WeatherWeekendComponent,
        selectors: [["app-weather-weekend"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [4, "ngFor", "ngForOf"], [1, "horizontal"], ["alt", "icone meteo ", 3, "src"]],
        template: function WeatherWeekendComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherWeekendComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherWeekendComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tlist-style-type: none;\r\n\tfont-size: large;\r\n}\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItd2Vla2VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJ3ZWF0aGVyLXdlZWtlbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5ob3Jpem9udGFsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuXHRzdHJva2U6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherWeekendComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-weather-weekend',
            templateUrl: './weather-weekend.component.html',
            styleUrls: ['./weather-weekend.component.css']
          }]
        }], function () {
          return [{
            type: _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Hbdh":
    /*!*****************************************!*\
      !*** ./src/app/models/configuration.ts ***!
      \*****************************************/

    /*! exports provided: Configuration */

    /***/
    function Hbdh(module, __webpack_exports__, __webpack_require__) {
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
    "ImvS":
    /*!**********************************************************************!*\
      !*** ./src/app/widgets/weather-current/weather-current.component.ts ***!
      \**********************************************************************/

    /*! exports provided: WeatherCurrentComponent */

    /***/
    function ImvS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherCurrentComponent", function () {
        return WeatherCurrentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/weather */
      "8Zhg");
      /* harmony import */


      var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/weather.service */
      "s3jh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function WeatherCurrentComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function WeatherCurrentComponent_div_2_Template(rf, ctx) {
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

      var WeatherCurrentComponent = /*#__PURE__*/function () {
        function WeatherCurrentComponent(weatherService) {
          _classCallCheck(this, WeatherCurrentComponent);

          this.weatherService = weatherService;
        }

        _createClass(WeatherCurrentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.loading = true;
            this.init();
            setInterval(function () {
              return _this18.init();
            }, 600000);
          }
        }, {
          key: "init",
          value: function init() {
            var _this19 = this;

            this.weather = new src_app_models_weather__WEBPACK_IMPORTED_MODULE_1__["Weather"]();
            this.weatherService.getWeather().then(function (weather) {
              _this19.loading = true;
              _this19.weather.currenttemp = weather.currenttemp;
              _this19.weather.city = weather.city;
              _this19.weather.iconurl = weather.iconurl;
            }).then(function () {
              return _this19.loading = false;
            });
          }
        }]);

        return WeatherCurrentComponent;
      }();

      WeatherCurrentComponent.ɵfac = function WeatherCurrentComponent_Factory(t) {
        return new (t || WeatherCurrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]));
      };

      WeatherCurrentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WeatherCurrentComponent,
        selectors: [["app-weather-current"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], ["class", "horizontal", 4, "ngIf"], ["mode", "indeterminate", 1, "spinner"], [1, "horizontal"], ["alt", "icone meteo actuelle", 3, "src"]],
        template: function WeatherCurrentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherCurrentComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherCurrentComponent_div_2_Template, 7, 6, "div", 2);

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
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\theight: 100%;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n\tstroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXItY3VycmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7QUFDZCIsImZpbGUiOiJ3ZWF0aGVyLWN1cnJlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcblx0c3Ryb2tlOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherCurrentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-weather-current',
            templateUrl: './weather-current.component.html',
            styleUrls: ['./weather-current.component.css']
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
    "OmYN":
    /*!********************************************!*\
      !*** ./src/app/mirror/mirror.component.ts ***!
      \********************************************/

    /*! exports provided: MirrorComponent */

    /***/
    function OmYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MirrorComponent", function () {
        return MirrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/profile */
      "X+pJ");
      /* harmony import */


      var _models_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/widget */
      "4Kri");
      /* harmony import */


      var _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../enums/widget-name */
      "VJva");
      /* harmony import */


      var _models_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/configuration */
      "Hbdh");
      /* harmony import */


      var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/account.service */
      "flj8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../widgets/date/date.component */
      "tlTZ");
      /* harmony import */


      var _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../widgets/weather-current/weather-current.component */
      "ImvS");
      /* harmony import */


      var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../widgets/digital-clock/digital-clock.component */
      "wMQT");
      /* harmony import */


      var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../widgets/analog-clock/analog-clock.component */
      "r+H+");
      /* harmony import */


      var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../widgets/news/news.component */
      "6/uA");
      /* harmony import */


      var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../widgets/weather-forecast/weather-forecast.component */
      "FH2a");
      /* harmony import */


      var _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../widgets/weather-weekend/weather-weekend.component */
      "GpSe");
      /* harmony import */


      var _widgets_almanac_almanac_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../widgets/almanac/almanac.component */
      "7t4K");
      /* harmony import */


      var _widgets_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../widgets/agenda/agenda.component */
      "bTKM");
      /* harmony import */


      var _widgets_emails_emails_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../widgets/emails/emails.component */
      "As3P");

      function MirrorComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Vous \xEAtes rayonnant(e) aujourd'hui.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentProfile.username, ", ");
        }
      }

      function MirrorComponent_app_date_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-date", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.setPositionWidget(ctx_r1.widgetName.date));
        }
      }

      function MirrorComponent_app_weather_current_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-current", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.setPositionWidget(ctx_r2.widgetName.weatherCurrent));
        }
      }

      function MirrorComponent_app_digital_clock_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-digital-clock", 5);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.setPositionWidget(ctx_r3.widgetName.digitalClock));
        }
      }

      function MirrorComponent_app_analog_clock_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analog-clock", 5);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r4.setPositionWidget(ctx_r4.widgetName.analogClock));
        }
      }

      function MirrorComponent_app_news_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news", 5);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.setPositionWidget(ctx_r5.widgetName.news));
        }
      }

      function MirrorComponent_app_weather_forecast_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-forecast", 5);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.setPositionWidget(ctx_r6.widgetName.weatherForecast));
        }
      }

      function MirrorComponent_app_weather_weekend_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather-weekend", 5);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r7.setPositionWidget(ctx_r7.widgetName.weatherWeekend));
        }
      }

      function MirrorComponent_app_almanac_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-almanac", 5);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8.setPositionWidget(ctx_r8.widgetName.almanac));
        }
      }

      function MirrorComponent_app_agenda_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-agenda", 5);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.setPositionWidget(ctx_r9.widgetName.agenda));
        }
      }

      function MirrorComponent_app_emails_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-emails", 5);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r10.setPositionWidget(ctx_r10.widgetName.mail));
        }
      }

      var MirrorComponent = /*#__PURE__*/function () {
        function MirrorComponent(accountService) {
          _classCallCheck(this, MirrorComponent);

          this.accountService = accountService;
          this.profiles = [];
          this.widgetName = _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"];
        }
        /*When ArrowUp key is pressed, we browse the next profile.
        If we reach the end of the list, we display default profile again
        Loop*/


        _createClass(MirrorComponent, [{
          key: "onKeyUp",
          value: function onKeyUp(eventData) {
            if (eventData.key === 'ArrowUp') {
              var idxCurrentProfile = this.profiles.indexOf(this.currentProfile); // If we don't reach the end of the list

              if (idxCurrentProfile + 1 < this.profiles.length) {
                this.currentProfile = this.profiles[idxCurrentProfile + 1]; // Go back to default profile
              } else {
                this.currentProfile = this.profiles[0];
              }

              this.playAnimation();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
            this.currentProfile = this.profiles[0];
            this.playAnimation();
          }
        }, {
          key: "init",
          value: function init() {
            var _this20 = this;

            this.accountService.getAll().then(function (profiles) {
              profiles.profiles.forEach(function (profile) {
                var widgetsTo = _this20.addConfigurationWidget(profile.widgets);

                _this20.profiles.push(new _models_profile__WEBPACK_IMPORTED_MODULE_1__["Profile"](profile.id, profile.username, widgetsTo, null));
              });
            });
          }
        }, {
          key: "addConfigurationWidget",
          value: function addConfigurationWidget(widget) {
            var result = [];
            widget.forEach(function (w) {
              switch (w.widget) {
                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].agenda:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].agenda, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 9, 11, 4, 7)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].almanac:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].almanac, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 1, 3, 2, 3)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].analogClock:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].analogClock, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 8, 9, 1, 2)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].digitalClock:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].digitalClock, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 10, 11, 1, 2)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].date:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].date, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 3, 8, 1, 2)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherCurrent:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherCurrent, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 1, 3, 1, 2)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].news:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].news, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 1, 11, 6, 7)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherForecast:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherForecast, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 1, 3, 4, 6)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherWeekend:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].weatherWeekend, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 9, 11, 1, 3)));
                  break;

                case _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].mail:
                  result.push(new _models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"](null, _enums_widget_name__WEBPACK_IMPORTED_MODULE_3__["WidgetName"].mail, new _models_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"](null, 9, 11, 4, 7)));
                  break;

                default:
                  break;
              }
            });
            return result;
          }
        }, {
          key: "searchWidget",
          value: function searchWidget(widget, name) {
            return widget.findIndex(function (n) {
              return n.widget === name;
            }) !== -1 ? true : false;
          }
        }, {
          key: "setPositionWidget",
          value: function setPositionWidget(name) {
            var conf = this.currentProfile.widgets.find(function (n) {
              return n.widget === name;
            }).config;
            return {
              'grid-column-start': conf.posXStart,
              'grid-column-end': conf.posXEnd,
              'grid-row-start': conf.posYStart,
              'grid-row-end': conf.posYEnd
            };
          }
        }, {
          key: "playAnimation",
          value: function playAnimation() {
            document.getElementById('animated').animate([{
              // from
              opacity: 0,
              fontSize: 'x-large'
            }, {
              // to
              opacity: 1,
              fontSize: 'xx-large'
            }], 1500);
          }
        }]);

        return MirrorComponent;
      }();

      MirrorComponent.ɵfac = function MirrorComponent_Factory(t) {
        return new (t || MirrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]));
      };

      MirrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MirrorComponent,
        selectors: [["app-mirror"]],
        hostBindings: function MirrorComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MirrorComponent_keyup_HostBindingHandler($event) {
              return ctx.onKeyUp($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        decls: 15,
        vars: 11,
        consts: [[1, "content"], [1, "welcome"], ["id", "animated"], [4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]],
        template: function MirrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bonjour ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MirrorComponent_span_4_Template, 4, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MirrorComponent_app_date_5_Template, 1, 1, "app-date", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MirrorComponent_app_weather_current_6_Template, 1, 1, "app-weather-current", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MirrorComponent_app_digital_clock_7_Template, 1, 1, "app-digital-clock", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MirrorComponent_app_analog_clock_8_Template, 1, 1, "app-analog-clock", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MirrorComponent_app_news_9_Template, 1, 1, "app-news", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MirrorComponent_app_weather_forecast_10_Template, 1, 1, "app-weather-forecast", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MirrorComponent_app_weather_weekend_11_Template, 1, 1, "app-weather-weekend", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MirrorComponent_app_almanac_12_Template, 1, 1, "app-almanac", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MirrorComponent_app_agenda_13_Template, 1, 1, "app-agenda", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MirrorComponent_app_emails_14_Template, 1, 1, "app-emails", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentProfile.username !== "default");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.date));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.weatherCurrent));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.digitalClock));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.analogClock));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.news));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.weatherForecast));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.weatherWeekend));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.almanac));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.agenda));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchWidget(ctx.currentProfile.widgets, ctx.widgetName.mail));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_7__["DateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCurrentComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_9__["DigitalClockComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_10__["AnalogClockComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_12__["WeatherForecastComponent"], _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_13__["WeatherWeekendComponent"], _widgets_almanac_almanac_component__WEBPACK_IMPORTED_MODULE_14__["AlmanacComponent"], _widgets_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_15__["AgendaComponent"], _widgets_emails_emails_component__WEBPACK_IMPORTED_MODULE_16__["EmailsComponent"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n\theight: 100vh;\r\n\tbackground-color: black;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgrid-template-rows: repeat(6, 1fr);\r\n}\r\n\r\n.welcome[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\tgrid-column-start: 3;\r\n\tgrid-column-end: 9;\r\n\tgrid-row-start: 2;\r\n\tgrid-row-end: 6;\r\n\t\r\n}\r\n#animated[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\t-webkit-animation: 2s slidein ease-in-out;\r\n\t        animation: 2s slidein ease-in-out;\r\n}\r\n*[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isc0NBQXNDO0NBQ3RDLGtDQUFrQztBQUNuQztBQUNBOytEQUMrRDtBQUUvRDtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsVUFBVTtDQUNWLHlDQUFpQztTQUFqQyxpQ0FBaUM7QUFDbEM7QUFFQTtDQUNDLFlBQVk7RUFDWCIsImZpbGUiOiJtaXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcclxufVxyXG4vKldlIHVzZSB0aGUgQ1NTIGdyaWQgcHJvcGVydHkgdG8gZGlzcGxheSB0aGUgY29tcG9uZW50IG9uIHRoZSBtaXJyb3JcclxuVGhlIGdyaWQgaXMgMTAgdW5pdHMgKDEgdG8gMTEpIGxvbmcgYW5kIDYgdW5pdHMgbGFyZ2UgKDEgdG8gNykqL1xyXG5cclxuLndlbGNvbWUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRncmlkLWNvbHVtbi1zdGFydDogMztcclxuXHRncmlkLWNvbHVtbi1lbmQ6IDk7XHJcblx0Z3JpZC1yb3ctc3RhcnQ6IDI7XHJcblx0Z3JpZC1yb3ctZW5kOiA2O1xyXG5cdC8qYm9yZGVyOiBkb3R0ZWQgMXB4IHdoaXRlOyovXHJcbn1cclxuXHJcbiNhbmltYXRlZCB7XHJcblx0b3BhY2l0eTogMDtcclxuXHRhbmltYXRpb246IDJzIHNsaWRlaW4gZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbioge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MirrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mirror',
            templateUrl: './mirror.component.html',
            styleUrls: ['./mirror.component.css']
          }]
        }], function () {
          return [{
            type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
          }];
        }, {
          /*When ArrowUp key is pressed, we browse the next profile.
          If we reach the end of the list, we display default profile again
          Loop*/
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "PNcX":
    /*!***********************************!*\
      !*** ./src/app/models/account.ts ***!
      \***********************************/

    /*! exports provided: Account */

    /***/
    function PNcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Account", function () {
        return Account;
      });

      var Account = function Account() {
        _classCallCheck(this, Account);
      };
      /***/

    },

    /***/
    "Pj8M":
    /*!**********************************!*\
      !*** ./src/app/models/hourly.ts ***!
      \**********************************/

    /*! exports provided: Hourly */

    /***/
    function Pj8M(module, __webpack_exports__, __webpack_require__) {
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
    "S2KB":
    /*!********************************************************!*\
      !*** ./src/app/website/home-bar/home-bar.component.ts ***!
      \********************************************************/

    /*! exports provided: HomeBarComponent */

    /***/
    function S2KB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeBarComponent", function () {
        return HomeBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var HomeBarComponent = /*#__PURE__*/function () {
        function HomeBarComponent() {
          _classCallCheck(this, HomeBarComponent);
        }

        _createClass(HomeBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeBarComponent;
      }();

      HomeBarComponent.ɵfac = function HomeBarComponent_Factory(t) {
        return new (t || HomeBarComponent)();
      };

      HomeBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeBarComponent,
        selectors: [["app-home-bar"]],
        decls: 7,
        vars: 2,
        consts: [["color", "accent"], [1, "brand", 3, "routerLink"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"]],
        template: function HomeBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Medusa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\r\n\tflex: 1 1 auto;\r\n}\r\n\r\n.brand[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: #996d0d;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJob21lLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcblx0ZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5icmFuZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTZkMGQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-bar',
            templateUrl: './home-bar.component.html',
            styleUrls: ['./home-bar.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
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
        }, null);
      })();
      /***/

    },

    /***/
    "VJva":
    /*!**************************************!*\
      !*** ./src/app/enums/widget-name.ts ***!
      \**************************************/

    /*! exports provided: WidgetName */

    /***/
    function VJva(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetName", function () {
        return WidgetName;
      });
      /* eslint-disable */


      var WidgetName;

      (function (WidgetName) {
        WidgetName["date"] = "date";
        WidgetName["weatherCurrent"] = "weather_current";
        WidgetName["digitalClock"] = "digital_clock";
        WidgetName["analogClock"] = "analog_clock";
        WidgetName["news"] = "news";
        WidgetName["weatherForecast"] = "weather_forecast";
        WidgetName["weatherWeekend"] = "weather_weekend";
        WidgetName["agenda"] = "agenda";
        WidgetName["mail"] = "mail";
        WidgetName["almanac"] = "almanac";
      })(WidgetName || (WidgetName = {}));
      /***/

    },

    /***/
    "X+pJ":
    /*!***********************************!*\
      !*** ./src/app/models/profile.ts ***!
      \***********************************/

    /*! exports provided: Profile */

    /***/
    function XPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profile", function () {
        return Profile;
      });

      var Profile = function Profile(id, username, widgets, img) {
        _classCallCheck(this, Profile);

        this.id = id;
        this.username = username;
        this.widgets = widgets;
        this.img = img;
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      "Hfs6");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./widgets/weather-current/weather-current.component */
      "ImvS");
      /* harmony import */


      var _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./widgets/date/date.component */
      "tlTZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./widgets/analog-clock/analog-clock.component */
      "r+H+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./widgets/digital-clock/digital-clock.component */
      "wMQT");
      /* harmony import */


      var _widgets_emails_emails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./widgets/emails/emails.component */
      "As3P");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _widgets_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./widgets/agenda/agenda.component */
      "bTKM");
      /* harmony import */


      var _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./widgets/news/news.component */
      "6/uA");
      /* harmony import */


      var _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./widgets/weather-forecast/weather-forecast.component */
      "FH2a");
      /* harmony import */


      var _widgets_almanac_almanac_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./widgets/almanac/almanac.component */
      "7t4K");
      /* harmony import */


      var _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./widgets/weather-weekend/weather-weekend.component */
      "GpSe");
      /* harmony import */


      var _mirror_mirror_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./mirror/mirror.component */
      "OmYN");
      /* harmony import */


      var _website_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./website/home/home.component */
      "1j5X");
      /* harmony import */


      var _website_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./website/authentication/authentication.component */
      "Epcn");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _website_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./website/home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _website_register_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./website/register/register.component */
      "jm+c");
      /* harmony import */


      var _website_user_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./website/user/user.component */
      "+AFx");
      /* harmony import */


      var _website_wifi_settings_wifi_settings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./website/wifi-settings/wifi-settings.component */
      "FqN/");
      /* harmony import */


      var _website_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./website/user/profile/profile.component */
      "mqQF");
      /* harmony import */


      var _website_widget_page_widget_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./website/widget-page/widget-page.component */
      "4J7j");

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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCurrentComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__["AgendaComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"], _widgets_emails_emails_component__WEBPACK_IMPORTED_MODULE_11__["EmailsComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_15__["WeatherForecastComponent"], _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_17__["WeatherWeekendComponent"], _widgets_almanac_almanac_component__WEBPACK_IMPORTED_MODULE_16__["AlmanacComponent"], _mirror_mirror_component__WEBPACK_IMPORTED_MODULE_18__["MirrorComponent"], _website_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _website_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_20__["AuthenticationComponent"], _website_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_28__["HomeBarComponent"], _website_register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"], _website_user_user_component__WEBPACK_IMPORTED_MODULE_30__["UserComponent"], _website_wifi_settings_wifi_settings_component__WEBPACK_IMPORTED_MODULE_31__["WifiSettingsComponent"], _website_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"], _website_widget_page_widget_page_component__WEBPACK_IMPORTED_MODULE_33__["WidgetPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _widgets_weather_current_weather_current_component__WEBPACK_IMPORTED_MODULE_5__["WeatherCurrentComponent"], _widgets_date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"], _widgets_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_13__["AgendaComponent"], _widgets_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_8__["AnalogClockComponent"], _widgets_digital_clock_digital_clock_component__WEBPACK_IMPORTED_MODULE_10__["DigitalClockComponent"], _widgets_emails_emails_component__WEBPACK_IMPORTED_MODULE_11__["EmailsComponent"], _widgets_news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"], _widgets_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_15__["WeatherForecastComponent"], _widgets_weather_weekend_weather_weekend_component__WEBPACK_IMPORTED_MODULE_17__["WeatherWeekendComponent"], _widgets_almanac_almanac_component__WEBPACK_IMPORTED_MODULE_16__["AlmanacComponent"], _mirror_mirror_component__WEBPACK_IMPORTED_MODULE_18__["MirrorComponent"], _website_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"], _website_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_20__["AuthenticationComponent"], _website_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_28__["HomeBarComponent"], _website_register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"], _website_user_user_component__WEBPACK_IMPORTED_MODULE_30__["UserComponent"], _website_wifi_settings_wifi_settings_component__WEBPACK_IMPORTED_MODULE_31__["WifiSettingsComponent"], _website_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"], _website_widget_page_widget_page_component__WEBPACK_IMPORTED_MODULE_33__["WidgetPageComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"]],
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
    "a5fw":
    /*!********************************************!*\
      !*** ./src/app/services/widget.service.ts ***!
      \********************************************/

    /*! exports provided: WidgetService */

    /***/
    function a5fw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetService", function () {
        return WidgetService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* eslint-disable @typescript-eslint/naming-convention */

      /* eslint-disable quote-props */


      var WidgetService = /*#__PURE__*/function () {
        function WidgetService(httpClient) {
          _classCallCheck(this, WidgetService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(WidgetService, [{
          key: "getWidgetsById",
          value: function getWidgetsById(idProfile) {
            return this.httpClient.post(this.url + '/bdd/widget/get_user_widgets', {
              'id_profile': idProfile
            }).toPromise();
          }
        }, {
          key: "setWidgetsById",
          value: function setWidgetsById(profile) {
            return this.httpClient.post(this.url + '/bdd/widget/setProfileWidgets', {
              'id_profile': profile.id,
              'widgets': profile.widgets
            }).toPromise();
          }
        }]);

        return WidgetService;
      }();

      WidgetService.ɵfac = function WidgetService_Factory(t) {
        return new (t || WidgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      WidgetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WidgetService,
        factory: WidgetService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetService, [{
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
    "bTKM":
    /*!****************************************************!*\
      !*** ./src/app/widgets/agenda/agenda.component.ts ***!
      \****************************************************/

    /*! exports provided: AgendaComponent */

    /***/
    function bTKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgendaComponent", function () {
        return AgendaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_agenda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/agenda */
      "iYGy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function AgendaComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 3);
        }
      }

      function AgendaComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Votre prochain RDV :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, ctx_r1.agenda.subject));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("De ", ctx_r1.agenda.organizer.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, ctx_r1.agenda.start.dateTime, "EEEE d LLLL yyyy"), " \xE0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 11, ctx_r1.agenda.start.dateTime, "HH:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Au ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 14, ctx_r1.agenda.end.dateTime, "EEEE d LLLL yyyy"), " \xE0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 17, ctx_r1.agenda.end.dateTime, "HH:mm"), "");
        }
      }

      var AgendaComponent = /*#__PURE__*/function () {
        function AgendaComponent() {
          _classCallCheck(this, AgendaComponent);
        }

        _createClass(AgendaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.agenda = new src_app_models_agenda__WEBPACK_IMPORTED_MODULE_1__["Agenda"]();
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            // Données en dur à supprimer
            this.agenda.id = '1';
            this.agenda.subject = 'Sujet de test';
            this.agenda.start = {
              dateTime: Date.now(),
              timeZone: 'FR-fr'
            };
            this.agenda.end = {
              dateTime: Date.now(),
              timeZone: 'FR-fr'
            };
            this.agenda.organizer = {
              name: 'Philippe',
              address: 'philippe.poutou@gmail.com'
            };
            this.loading = false;
          }
        }]);

        return AgendaComponent;
      }();

      AgendaComponent.ɵfac = function AgendaComponent_Factory(t) {
        return new (t || AgendaComponent)();
      };

      AgendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AgendaComponent,
        selectors: [["app-agenda"]],
        decls: 3,
        vars: 2,
        consts: [[1, "content"], ["class", "spinner", "mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate", 1, "spinner"]],
        template: function AgendaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AgendaComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AgendaComponent_div_2_Template, 16, 20, "div", 2);

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
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    justify-content: center;\r\n}\r\n\r\n.spinner[_ngcontent-%COMP%] {\r\n    stroke: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImFnZW5kYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICBzdHJva2U6IHdoaXRlO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-agenda',
            templateUrl: './agenda.component.html',
            styleUrls: ['./agenda.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(httpClient) {
          _classCallCheck(this, AuthenticationService);

          this.httpClient = httpClient;
          this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverBaseUrl;
          this.currentAccountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentAccount')));
          this.currentAccount = this.currentAccountSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(account) {
            return this.httpClient.post(this.url + '/bdd/account/login', account).toPromise();
          }
        }, {
          key: "currentAccountValue",
          get: function get() {
            return this.currentAccountSubject.value;
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
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
    "flj8":
    /*!*********************************************!*\
      !*** ./src/app/services/account.service.ts ***!
      \*********************************************/

    /*! exports provided: AccountService */

    /***/
    function flj8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* eslint-disable @typescript-eslint/naming-convention */

      /* eslint-disable quote-props */


      var AccountService = /*#__PURE__*/function () {
        function AccountService(httpClient) {
          _classCallCheck(this, AccountService);

          this.httpClient = httpClient; //private axios = require('axios').default;

          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(AccountService, [{
          key: "getAccount",
          value: function getAccount(id) {
            return this.httpClient.post(this.url + '/bdd/account/get_account', {
              id_account: id
            }).toPromise();
          }
        }, {
          key: "getAll",
          value: function getAll() {
            return this.httpClient.get(this.url + '/bdd/account/get_all').toPromise();
          }
        }, {
          key: "register",
          value: function register(account) {
            return this.httpClient.post(this.url + '/bdd/account/register', account).toPromise();
          }
        }]);

        return AccountService;
      }();

      AccountService.ɵfac = function AccountService_Factory(t) {
        return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AccountService,
        factory: AccountService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
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
    "iWsg":
    /*!***************************************!*\
      !*** ./src/app/models/wifiNetwork.ts ***!
      \***************************************/

    /*! exports provided: WifiNetwork */

    /***/
    function iWsg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WifiNetwork", function () {
        return WifiNetwork;
      });

      var WifiNetwork = function WifiNetwork() {
        _classCallCheck(this, WifiNetwork);
      };
      /***/

    },

    /***/
    "iYGy":
    /*!**********************************!*\
      !*** ./src/app/models/agenda.ts ***!
      \**********************************/

    /*! exports provided: Agenda */

    /***/
    function iYGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Agenda", function () {
        return Agenda;
      });

      var Agenda = function Agenda() {
        _classCallCheck(this, Agenda);
      };

      var DateMail = function DateMail() {
        _classCallCheck(this, DateMail);
      };

      var Organizer = function Organizer() {
        _classCallCheck(this, Organizer);
      };
      /***/

    },

    /***/
    "jm+c":
    /*!********************************************************!*\
      !*** ./src/app/website/register/register.component.ts ***!
      \********************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function jmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_models_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/account */
      "PNcX");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/account.service */
      "flj8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../home-bar/home-bar.component */
      "S2KB");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function RegisterComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez votre nom d'utilisateur. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre nom d'utilisateur doit faire au moins 3 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.username.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez votre email. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rentrez un email valide. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.email.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrez un mot de passe. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Votre mot de passe doit faire au moins 8 caract\xE8res. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_button_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_button_32_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.password.setValue("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(accountService, router) {
          _classCallCheck(this, RegisterComponent);

          this.accountService = accountService;
          this.router = router;
          this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
          this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]);
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hide = true;
            this.account = new src_app_models_account__WEBPACK_IMPORTED_MODULE_2__["Account"]();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            this.account.username = this.username.value;
            this.account.password = this.password.value;
            this.accountService.register(this.account).then(function () {
              console.log('REGISTER SUCCESSFUL');

              _this21.router.navigate(['/login']);
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 36,
        vars: 17,
        consts: [[1, "content"], ["name", "registerForm", 1, "form"], [1, "title"], [1, "form-part"], ["matInput", "", "type", "text", 3, "formControl"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matInput", "", 3, "type", "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "button-part"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-bar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Espace de cr\xE9ation de ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "votre compte personnel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nom d'utilisateur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_mat_error_13_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_button_15_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_mat_error_21_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_button_22_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mot de passe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_mat_error_27_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_mat_error_28_Template, 2, 0, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_29_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_button_32_Template, 3, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_34_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "S'inscrire ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email.hasError("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("formControl", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.password.valid || !ctx.username.valid || !ctx.email.valid);
          }
        },
        directives: [_home_bar_home_bar_component__WEBPACK_IMPORTED_MODULE_5__["HomeBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 90%;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: xx-large;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tmargin: 5px;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\theight: 60%;\r\n\tbox-shadow: 0px 0px 8px 0px black;\r\n\tpadding: 30px;\r\n\tbackground-color:  #988a6d;\r\n}\r\n\r\n.form-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.button-part[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2IsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMSB7XHJcblx0Zm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0aGVpZ2h0OiA2MCU7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCA4cHggMHB4IGJsYWNrO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogICM5ODhhNmQ7XHJcbn1cclxuXHJcbi5mb3JtLXBhcnQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5idXR0b24tcGFydCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mqQF":
    /*!***********************************************************!*\
      !*** ./src/app/website/user/profile/profile.component.ts ***!
      \***********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function mqQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        inputs: {
          profileName: "profileName",
          profileImg: "profileImg"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "content"], [1, "container-image"], ["alt", "Photo de profil", 3, "src"], [1, "container-title"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.profileImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.profileName);
          }
        },
        styles: [".content[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.container-image[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 80%;\r\n}\r\n\r\n.container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.container-title[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items:center;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\theight: 20%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-size: x-large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50OmhvdmVyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXItaW1hZ2Uge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWltYWdlIGltZyB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXRpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
          }]
        }], function () {
          return [];
        }, {
          profileName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          profileImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "nN1H":
    /*!********************************************!*\
      !*** ./src/app/services/emails.service.ts ***!
      \********************************************/

    /*! exports provided: EmailsService */

    /***/
    function nN1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailsService", function () {
        return EmailsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EmailsService = /*#__PURE__*/function () {
        function EmailsService(httpClient) {
          _classCallCheck(this, EmailsService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(EmailsService, [{
          key: "getMail",
          value: function getMail() {
            return this.httpClient.get(this.url + '/google/mails').toPromise();
          }
        }]);

        return EmailsService;
      }();

      EmailsService.ɵfac = function EmailsService_Factory(t) {
        return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EmailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmailsService,
        factory: EmailsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailsService, [{
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
    "r+H+":
    /*!****************************************************************!*\
      !*** ./src/app/widgets/analog-clock/analog-clock.component.ts ***!
      \****************************************************************/

    /*! exports provided: AnalogClockComponent */

    /***/
    function rH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function () {
        return AnalogClockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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
            var _this22 = this;

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
              return _this22.drawAnalogClock(ctx, radius);
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFsb2ctY2xvY2suY29tcG9uZW50LmNzcyJ9 */"]
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
    "s3jh":
    /*!*********************************************!*\
      !*** ./src/app/services/weather.service.ts ***!
      \*********************************************/

    /*! exports provided: WeatherService */

    /***/
    function s3jh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WeatherService", function () {
        return WeatherService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var WeatherService = /*#__PURE__*/function () {
        function WeatherService(httpClient) {
          _classCallCheck(this, WeatherService);

          this.httpClient = httpClient;
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverBaseUrl;
        }

        _createClass(WeatherService, [{
          key: "getWeather",
          value: function getWeather() {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              _this23.httpClient.get(_this23.url + '/weather/current').toPromise().then(function (res) {
                resolve(res);
              }, function (msg) {
                reject(msg);
              });
            });
          }
        }, {
          key: "getWeatherForecast",
          value: function getWeatherForecast() {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              _this24.httpClient.get(_this24.url + '/weather/forecast').toPromise().then(function (res) {
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
    "tlTZ":
    /*!************************************************!*\
      !*** ./src/app/widgets/date/date.component.ts ***!
      \************************************************/

    /*! exports provided: DateComponent */

    /***/
    function tlTZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateComponent", function () {
        return DateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DateComponent = /*#__PURE__*/function () {
        function DateComponent() {
          _classCallCheck(this, DateComponent);
        }

        _createClass(DateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this25.date = Date.now();
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
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxufSJdfQ== */"]
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
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _mirror_mirror_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mirror/mirror.component */
      "OmYN");
      /* harmony import */


      var _website_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./website/authentication/authentication.component */
      "Epcn");
      /* harmony import */


      var _website_wifi_settings_wifi_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./website/wifi-settings/wifi-settings.component */
      "FqN/");
      /* harmony import */


      var _website_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./website/home/home.component */
      "1j5X");
      /* harmony import */


      var _website_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./website/register/register.component */
      "jm+c");
      /* harmony import */


      var _website_user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./website/user/user.component */
      "+AFx");
      /* harmony import */


      var _website_widget_page_widget_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./website/widget-page/widget-page.component */
      "4J7j");

      var routes = [{
        path: '',
        redirectTo: 'mirror',
        pathMatch: 'full'
      }, {
        path: 'mirror',
        component: _mirror_mirror_component__WEBPACK_IMPORTED_MODULE_2__["MirrorComponent"]
      }, {
        path: 'home',
        component: _website_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: 'register',
        component: _website_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
      }, {
        path: 'login',
        component: _website_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"]
      }, {
        path: 'settings',
        component: _website_wifi_settings_wifi_settings_component__WEBPACK_IMPORTED_MODULE_4__["WifiSettingsComponent"]
      }, {
        path: 'user/:id',
        component: _website_user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
        /*, canActivate: [AuthGuard]*/

      }, {
        path: 'widget-page/:id',
        component: _website_widget_page_widget_page_component__WEBPACK_IMPORTED_MODULE_8__["WidgetPageComponent"]
      }, {
        path: '**',
        redirectTo: ''
      }];

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
    "wMQT":
    /*!******************************************************************!*\
      !*** ./src/app/widgets/digital-clock/digital-clock.component.ts ***!
      \******************************************************************/

    /*! exports provided: DigitalClockComponent */

    /***/
    function wMQT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DigitalClockComponent", function () {
        return DigitalClockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var DigitalClockComponent = /*#__PURE__*/function () {
        function DigitalClockComponent() {
          _classCallCheck(this, DigitalClockComponent);
        }

        _createClass(DigitalClockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.date = Date.now();
            setInterval(function () {
              return _this26.date = Date.now();
            }, 1000);
          }
        }]);

        return DigitalClockComponent;
      }();

      DigitalClockComponent.ɵfac = function DigitalClockComponent_Factory(t) {
        return new (t || DigitalClockComponent)();
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
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [".content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    height:100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YWwtY2xvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZiIsImZpbGUiOiJkaWdpdGFsLWNsb2NrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn0iXX0= */"]
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
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
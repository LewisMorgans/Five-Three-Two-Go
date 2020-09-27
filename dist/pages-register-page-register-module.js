(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-page-register-module"],{

/***/ "./src/app/pages/register-page/register-component.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/register-page/register-component.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/error-handler/error-handler.service */ "./src/app/services/error-handler/error-handler.service.ts");
/* harmony import */ var src_app_services_notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifcations/notifcations.service */ "./src/app/services/notifcations/notifcations.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function (a0) { return { "errorClass": a0 }; };
class RegisterComponent {
    constructor(_fb, _router, _authenticationService, _errorHandlerService, _snackbarService) {
        this._fb = _fb;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._errorHandlerService = _errorHandlerService;
        this._snackbarService = _snackbarService;
        this.submitted = false;
    }
    ngOnInit() {
        this.intialiseFormState();
    }
    intialiseFormState() {
        this.registerForm = this._fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
        });
    }
    get f() {
        return this.registerForm.controls;
    }
    onSubmit() {
        let payload = {
            email: this.f.email.value,
            username: this.f.username.value,
            password: this.f.password.value
        };
        this.submitted = true;
        if (this.validationCheck()) {
            this._authenticationService.registerAccount$(payload)
                .subscribe(resp => {
                this._errorHandlerService.errorHandler(resp.code, resp.message);
                if (resp.code == 200) {
                    this._authenticationService.storeUserData(resp.token, resp.user);
                    this._authenticationService.loggedIn$().subscribe();
                    this._router.navigate(['']);
                    this._snackbarService.openSnackBar(resp.message, 'X');
                }
            });
        }
        ;
    }
    validationCheck() {
        if (this.registerForm.valid) {
            return true;
        }
        else
            return false;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register-component"]], decls: 15, vars: 13, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-2", "mx-auto"], [1, "card"], [1, "card-img-top", "mb-5"], [1, "logo"], [1, "form-register", 3, "formGroup"], ["placeholder", "Email", "formControlName", "email", "type", "email", "id", "inputEmail", "required", "", "autofocus", "", 1, "form-control", 3, "ngClass"], ["placeholder", "Username", "formControlName", "username", "type", "text", "id", "inputUsername", "required", "", 1, "form-control", 3, "ngClass"], ["placeholder", "Password", "formControlName", "password", "type", "password", "id", "inputEmail", "required", "", "autofocus", "", 1, "form-control", 3, "ngClass"], ["placeholder", "Confirm Password", "formControlName", "password2", "type", "password", "id", "inputPassword2", "required", "", 1, "form-control", 3, "ngClass"], [1, "btnContainer"], ["type", "submit", 1, "btn", "btn-large", "go", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FTTG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_13_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "GO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.f.email.errors && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.f.username.errors && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.f.password.errors && ctx.submitted));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.f.password2.errors && ctx.submitted));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: #1E1E2F;\n  min-height: 50vh;\n}\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-top: 300px !important;\n}\n.container-fluid[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #27293D;\n  border-radius: 5px;\n  padding: 15%;\n  box-shadow: 1px 1px 15px 1px #E14ECA;\n}\n.container-fluid[_ngcontent-%COMP%]   .headingText[_ngcontent-%COMP%] {\n  font-family: titleFont;\n  color: #17B978;\n  font-size: 5vw;\n  margin: 12% auto;\n  display: block;\n  text-align: right;\n}\n.container-fluid[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-family: logoFont;\n  font-size: 80px;\n  color: #E14ECA;\n  text-align: center;\n}\n.container-fluid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  color: #98A9AE;\n  width: 80% !important;\n  background-color: #27293D;\n  border-color: #2B3553;\n  margin: 10% auto;\n}\n.container-fluid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #E14ECA;\n}\n.container-fluid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: titleFont;\n  font-size: 150%;\n  color: #98A9AE;\n  margin: 2%;\n}\n.callToAction[_ngcontent-%COMP%] {\n  color: #C553EA;\n  text-align: center;\n  padding: 5%;\n  margin-top: 5% !important;\n  font-size: 15px;\n}\n.btnContainer[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n  font-family: titleFont;\n}\n.btnContainer[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%] {\n  min-width: 40%;\n  max-width: 100%;\n  font-size: 200%;\n  background-color: #C553EA;\n  border-radius: 10px;\n  border: 2px solid #C553EA;\n  color: #2B3553;\n  padding: 0 5%;\n}\n@media screen and (max-width: 400px) {\n  .row[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9FOlxcQW5ndWxhclxcZnR0Zy9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyLXBhZ2VcXHJlZ2lzdGVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNSSx5QkFBQTtFQUNBLGdCQUFBO0FDSko7QURESTtFQUNJLDRCQUFBO0FDR1I7QURHSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNEUjtBRElJO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0hSO0FET0k7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUUk7RUFDSSxxQkFBQTtBQ05SO0FEU0k7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ1BSO0FEV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDUko7QURVSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDUlI7QURZQTtFQUVJO0lBQ0ksMEJBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTJGO1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzRDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTUlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAxcHggI0UxNEVDQTtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGluZ1RleHQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XHJcbiAgICAgICAgY29sb3I6ICMxN0I5Nzg7XHJcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgbWFyZ2luOiAxMiUgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxvZ29Gb250O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICBjb2xvcjogI0UxNEVDQTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBjb2xvcjogIzk4QTlBRTtcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkzRDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMyQjM1NTM7XHJcbiAgICAgICAgbWFyZ2luOiAxMCUgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRTE0RUNBO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBjb2xvcjogIzk4QTlBRTtcclxuICAgICAgICBtYXJnaW46IDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FsbFRvQWN0aW9uIHtcclxuICAgIGNvbG9yOiAjQzU1M0VBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYnRuQ29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcclxuXHJcbiAgICAuZ28ge1xyXG4gICAgICAgIG1pbi13aWR0aDogNDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M1NTNFQTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNTUzRUE7XHJcbiAgICAgICAgY29sb3I6ICMyQjM1NTM7XHJcbiAgICAgICAgcGFkZGluZzogMCA1JTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAucm93IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIH0gXHJcblxyXG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMkY7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBtYXJnaW4tdG9wOiAzMDBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lci1mbHVpZCAuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M0Q7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTUlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDE1cHggMXB4ICNFMTRFQ0E7XG59XG4uY29udGFpbmVyLWZsdWlkIC5oZWFkaW5nVGV4dCB7XG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XG4gIGNvbG9yOiAjMTdCOTc4O1xuICBmb250LXNpemU6IDV2dztcbiAgbWFyZ2luOiAxMiUgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbnRhaW5lci1mbHVpZCAubG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBsb2dvRm9udDtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBjb2xvcjogI0UxNEVDQTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lci1mbHVpZCBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjOThBOUFFO1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI5M0Q7XG4gIGJvcmRlci1jb2xvcjogIzJCMzU1MztcbiAgbWFyZ2luOiAxMCUgYXV0bztcbn1cbi5jb250YWluZXItZmx1aWQgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNFMTRFQ0E7XG59XG4uY29udGFpbmVyLWZsdWlkIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBjb2xvcjogIzk4QTlBRTtcbiAgbWFyZ2luOiAyJTtcbn1cblxuLmNhbGxUb0FjdGlvbiB7XG4gIGNvbG9yOiAjQzU1M0VBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUlO1xuICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG5Db250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdGl0bGVGb250O1xufVxuLmJ0bkNvbnRhaW5lciAuZ28ge1xuICBtaW4td2lkdGg6IDQwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDIwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDNTUzRUE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNDNTUzRUE7XG4gIGNvbG9yOiAjMkIzNTUzO1xuICBwYWRkaW5nOiAwIDUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAucm93IHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-component',
                templateUrl: './register-component.component.html',
                styleUrls: ['./register-component.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: src_app_services_error_handler_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"] }, { type: src_app_services_notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/register-page/register-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-component.component */ "./src/app/pages/register-page/register-component.component.ts");





const routes = [
    {
        path: '',
        component: _register_component_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }
];
class RegisterRoutingModule {
}
RegisterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterRoutingModule });
RegisterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterRoutingModule_Factory(t) { return new (t || RegisterRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/register-page/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/register-page/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _register_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-component.component */ "./src/app/pages/register-page/register-component.component.ts");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register-page/register-routing.module.ts");






class RegisterModule {
}
RegisterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RegisterModule_Factory(t) { return new (t || RegisterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_component_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_register_component_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-register-page-register-module.js.map
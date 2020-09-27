(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/error-handler/error-handler.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/error-handler/error-handler.service.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notifcations/notifcations.service */ "./src/app/services/notifcations/notifcations.service.ts");



class ErrorHandlerService {
    constructor(_snackbarService) {
        this._snackbarService = _snackbarService;
    }
    errorHandler(code, message) {
        switch (code) {
            case 202:
                this._snackbarService.openSnackBar(message, 'X');
                break;
            case 203:
                this._snackbarService.openSnackBar(message, 'X');
                break;
            case 204:
                this._snackbarService.openSnackBar(message, 'X');
                break;
            default:
                break;
        }
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_1__["SnackBarService"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _notifcations_notifcations_service__WEBPACK_IMPORTED_MODULE_1__["SnackBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/notifcations/notifcations.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/notifcations/notifcations.service.ts ***!
  \***************************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



class SnackBarService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 3500,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map
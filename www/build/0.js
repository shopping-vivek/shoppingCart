webpackJsonp([0],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss('dismiss');
    };
    ModalPage.prototype.login = function () {
        // if(this.username == 'vivek.yadav' && this.password == '1234')
        this.viewCtrl.dismiss('login');
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/viveky/Desktop/shopping/src/pages/modal/modal.html"*/'<img class="bgImage">\n\n<ion-title class="pageTitle">{{navParams.get(\'pageTitle\') }}</ion-title>\n<button ion-button (click)="closeModal()" class="backButton"><i class="fa fa-angle-left"></i><span class="paddingLeft15">Back</span></button>\n\n<span *ngIf="navParams.get(\'pageTitle\') == \'Log In\'" class="formStyles">\n  <ion-list class="opacity">\n\n  <ion-item>\n    <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n  <ion-row>\n  <ion-col text-center>\n    <button class="login" ion-button (click)="login()">\n      Log in\n    </button>\n  </ion-col>\n</ion-row>\n  <ion-row class="space50"></ion-row>\n\n</span>\n<span *ngIf="navParams.get(\'pageTitle\') == \'Sign Up\'" class="formStyles">\n  <ion-list class="opacity">\n\n  <ion-item>\n    <ion-input type="text" placeholder="Username"></ion-input>\n  </ion-item>\n    <ion-item>\n    <ion-input type="email" placeholder="Email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="Password"></ion-input>\n  </ion-item>\n    <ion-item>\n    <ion-input type="password" placeholder="Confirm Password"></ion-input>\n  </ion-item>\n\n</ion-list>\n  <ion-row>\n  <ion-col text-center>\n    <button class="signUp" ion-button >\n      Sign Up\n    </button>\n  </ion-col>\n</ion-row>\n  <ion-row class="space50"></ion-row>\n\n</span>\n\n<span class="loginDetails">\n\n  <ion-row class="space50"></ion-row>\n<ion-row>\n  <p class="policy">\nBy signing up you agree to the <span class="TOC"> Terms of Service </span> and <span class="TOC"> Privacy Policy </span>\n  </p>\n</ion-row>\n</span>\n'/*ion-inline-end:"/Users/viveky/Desktop/shopping/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
webpackJsonp([1],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroConvenioPageModule", function() { return CadastroConvenioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_convenio__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroConvenioPageModule = (function () {
    function CadastroConvenioPageModule() {
    }
    CadastroConvenioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_convenio__["a" /* CadastroConvenioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_convenio__["a" /* CadastroConvenioPage */]),
            ],
        })
    ], CadastroConvenioPageModule);
    return CadastroConvenioPageModule;
}());

//# sourceMappingURL=cadastro-convenio.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroConvenioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastroConvenioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroConvenioPage = (function () {
    function CadastroConvenioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroConvenioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroConvenioPage');
    };
    CadastroConvenioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-convenio',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-convenio\cadastro-convenio.html"*/'<!--\n\n  Generated template for the CadastroConvenioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>cadastro-convenio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n<menu-lateral></menu-lateral>\n\n<convenios></convenios>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-convenio\cadastro-convenio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastroConvenioPage);
    return CadastroConvenioPage;
}());

//# sourceMappingURL=cadastro-convenio.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
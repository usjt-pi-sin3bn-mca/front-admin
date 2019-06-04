webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <menu-lateral></menu-lateral>\n\n  <login-screen></login-screen>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar-partida/cadastrar-partida.module": [
		291,
		6
	],
	"../pages/cadastro-convenio/cadastro-convenio.module": [
		292,
		1
	],
	"../pages/cadastro/cadastro.module": [
		293,
		5
	],
	"../pages/login/login.module": [
		294,
		4
	],
	"../pages/marketplace/marketplace.module": [
		295,
		0
	],
	"../pages/placar/placar.module": [
		296,
		3
	],
	"../pages/test/test.module": [
		297,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPartidasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProviderPartidasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProviderPartidasProvider = (function () {
    function ProviderPartidasProvider(http) {
        this.http = http;
        this.baseApiPath = 'http://jazz.lucasduarte.club/api/';
        console.log('Hello ProviderPartidasProvider');
    }
    ProviderPartidasProvider.prototype.getAllPartidas = function () {
        var _this = this;
        var url = this.baseApiPath + 'partidas/';
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                console.log("passouUUU", _this.data);
                _this.partidaAtual = data[0];
                // this.idPartidaAtual = this.partidaAtual.id;
            }, function (error) {
                console.log("Erro no provider de partidas");
            });
        });
    };
    ProviderPartidasProvider.prototype.criarPartida = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseApiPath + 'partidas/', body)
                .toPromise()
                .then(function (response) {
                console.log('API Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API Error : ', error.status);
                console.error('API Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ProviderPartidasProvider.prototype.criarSet = function (body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseApiPath + 'set/', body)
                .toPromise()
                .then(function (response) {
                console.log('API SET Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API SET Error : ', error.status);
                console.error('API SET Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ProviderPartidasProvider.prototype.getSets = function (id) {
        var _this = this;
        var url = this.baseApiPath + 'setPartida/?partidaId=' + id;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.totalSets = data;
                console.log("Sets ae", _this.totalSets);
            }, function (error) {
                console.log("Erro no provider de sets");
            });
        });
    };
    ProviderPartidasProvider.prototype.atualizarSet = function (id, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.baseApiPath + 'set/' + id, body)
                .toPromise()
                .then(function (response) {
                console.log('API SET KKKK Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API SET KKKKK Error : ', error.status);
                console.error('API SET Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ProviderPartidasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ProviderPartidasProvider);
    return ProviderPartidasProvider;
    var _a;
}());

//# sourceMappingURL=provider-partidas.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro\cadastro.html"*/'<!--\n\n  Generated template for the CadastroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cadastro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h1>Cadastro</h1>\n\n    <form class="pure-form pure-form-aligned">\n\n        <fieldset>\n\n            <input type="text" placeholder="Nome">\n\n            <input type="text" placeholder="Editora">\n\n            <input type="text" placeholder="Ano">\n\n            <button type="submit">Cadastrar</button>\n\n        </fieldset>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the PlacarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacarPage = (function () {
    function PlacarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlacarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacarPage');
    };
    PlacarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-placar',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\placar\placar.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Placar</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n    <menu-lateral></menu-lateral>\n\n    <placar-online></placar-online>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\placar\placar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PlacarPage);
    return PlacarPage;
}());

//# sourceMappingURL=placar.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\test\test.html"*/'<!--\n\n  Generated template for the TestPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n     <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>test</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <menu-lateral></menu-lateral>\n\n  <cadastro-partidas></cadastro-partidas>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\test\test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_placar_placar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_test_test__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_provider_partidas_provider_partidas__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_placar_placar__["a" /* PlacarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__["a" /* TelaHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__["a" /* LoginScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__["a" /* CadastroPartidasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__["a" /* PlacarOnlineComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastrar-partida/cadastrar-partida.module#CadastrarPartidaPageModule', name: 'CadastrarPartidaPage', segment: 'cadastrar-partida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-convenio/cadastro-convenio.module#CadastroConvenioPageModule', name: 'CadastroConvenioPage', segment: 'cadastro-convenio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketplace/marketplace.module#MarketplacePageModule', name: 'MarketplacePage', segment: 'marketplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placar/placar.module#PlacarPageModule', name: 'PlacarPage', segment: 'placar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_placar_placar__["a" /* PlacarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__["a" /* TelaHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__["a" /* LoginScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__["a" /* CadastroPartidasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__["a" /* PlacarOnlineComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Cadastrar Partida', component: __WEBPACK_IMPORTED_MODULE_5__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = (function () {
    function ListPage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.livros = this.httpClient.get('https://swapi.co/api/films');
        this.livros
            .subscribe(function (data) {
            data = data.results;
            console.log('my data: ', data);
            _this.lista = data;
        });
        console.log(this.lista);
        // this.listaDeLivros = [];
        // for (let i = 1; i < this.lista.length; i++) {
        //   console.log()
        // }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lista</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let livro of lista">\n\n      <b>Nome do livro/filme:</b> {{livro.title}}\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem">\n\n    You navigated here from <b>{{livro.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(52);
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
 * Generated class for the TelaHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TelaHomeComponent = (function () {
    function TelaHomeComponent(navCtrl) {
        this.navCtrl = navCtrl;
        // this.user.email = "";
        // this.user.senha = "";
        this.pages = [
            { title: 'Cadastrar Partida', component: __WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */] }
        ];
    }
    TelaHomeComponent.prototype.openCadastroPartidas = function ($param) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */]);
    };
    TelaHomeComponent.prototype.indisponivel = function () {
        alert("Funcionalidade indisponível.");
    };
    TelaHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tela-home',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\tela-home\tela-home.html"*/'  <div class="sessoes">\n\n    <div class="cima">\n\n      <div id="boxPlacarOnline" class="box" (click)="openCadastroPartidas()">\n\n        <img id="imgPlacarOnline" src="../assets/imgs/placar-online.svg">\n\n        <label id="lblPlacarOnline" type="text">Placar Online</label>\n\n      </div>\n\n            \n\n      <div id="boxMarketplace" class="box" (click)="indisponivel()">\n\n        <img id="imgMarketplace" src="../assets/imgs/marketplace.svg">\n\n        <label id="lblMarketplace" type="text">Marketplace</label>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="baixo">\n\n      <div id="boxLojaDaTorcida" class="box" (click)="indisponivel()">\n\n        <img id="imgLojaDaTorcida" src="../assets/imgs/loja-da-torcida.svg">\n\n        <label id="lblLojaDaTorcida" type="text">Loja da Torcida</label>\n\n      </div>\n\n            \n\n      <div id="boxMinhaConta" class="box" (click)="indisponivel()">\n\n        <img id="imgMinhaConta" src="../assets/imgs/minha-conta.svg">\n\n        <label id="lblMinhaConta" type="text">Minha Conta</label>\n\n      </div>\n\n    </div>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\tela-home\tela-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TelaHomeComponent);
    return TelaHomeComponent;
}());

//# sourceMappingURL=tela-home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(50);
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
 * Generated class for the LoginScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginScreenComponent = (function () {
    function LoginScreenComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello LoginScreenComponent Component');
        this.text = 'Hello World';
    }
    LoginScreenComponent.prototype.goHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-screen',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\login-screen\login-screen.html"*/'<div>\n\n  <div class="coluna-esquerda">\n\n    <img id="imgTime" src="../assets/imgs/time-usjt.jpeg">\n\n  </div>\n\n\n\n  <div class="coluna-direita">\n\n    <div class="form-login">\n\n      <img id="imgLogo" src="../assets/imgs/logo-usjt.png">\n\n        <label id="lblAdministracao">Administração do aplicativo</label>\n\n        \n\n        <div class="preencher">\n\n          <input id="inpUsuario" type="text" class="form-control" placeholder="Usuário" maxlength="20" required>\n\n          <input id="inpSenha" type="password" class="form-control" placeholder="Senha" maxlength="20" required>\n\n          <button id="btnEntrar" ion-button color="success" ion-button full style="text-align:center;" (click)="goHome()">Entrar</button>\n\n        </div>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\login-screen\login-screen.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LoginScreenComponent);
    return LoginScreenComponent;
}());

//# sourceMappingURL=login-screen.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPartidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_partidas_provider_partidas__ = __webpack_require__(202);
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
 * Generated class for the CadastroPartidasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CadastroPartidasComponent = (function () {
    function CadastroPartidasComponent(http, navCtrl, _providerPartidas) {
        this.http = http;
        this.navCtrl = navCtrl;
        this._providerPartidas = _providerPartidas;
        this.baseApiPath = 'http://jazz.lucasduarte.club/api/';
        this.partidaEmAndamento = false;
        //variables of body request
        this.campeonato = { id: 1 };
        this.bodyRequest = {
            "campeonato": { "id": 1 },
            "timeB": this.timeB,
            "visitante": "false",
            "descricao": "Partida teste",
            "local": this.local,
            "data": this.data,
            "desafioA": 0,
            "desafioB": 0,
            "urlLogoAdv": this.urlLogoAdv,
            "ganhadorPartida": "São Judas",
            "partidaIniciada": "true",
            "partidaFinalizada": "false",
        };
        this._providerPartidas.getAllPartidas();
    }
    CadastroPartidasComponent.prototype.connectApi = function () {
        var _this = this;
        var url = this.baseApiPath + 'partidas/';
        if (this.dataObj) {
            return Promise.resolve(this.dataObj);
        }
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (dataObj) {
                _this.dataObj = dataObj;
                resolve(_this.dataObj);
                console.log("passou", _this.dataObj);
            }, function (error) {
                console.log("Erro no provider de partidas");
            });
        });
    };
    CadastroPartidasComponent.prototype.sendRequest = function () {
        //this._providerPartidas.criarPartida(this.bodyRequest);
        console.log("Request feito", this.bodyRequest);
        this.partidaEmAndamento = true;
    };
    CadastroPartidasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cadastro-partidas',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\cadastro-partidas\cadastro-partidas.html"*/'<div class="central" *ngIf="!partidaEmAndamento">\n\n  <div class="titulo-cadastro">\n\n    <img src="../../assets/imgs/icon-hearder-placar.png">\n\n    <div>\n\n      <p class="titulo-partida">Placar Online</p>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="adicionar-partida">\n\n      <p class="flex">Adicionar partida</p>\n\n  </div>\n\n\n\n  <div class="times">\n\n    <p class="flex">TIMES</p>\n\n  </div>\n\n\n\n  <div class="novo-adversario">\n\n    <img src="../../assets/imgs/logo-usjt.png" class="usjt-icon">\n\n\n\n    <div class="adversario-info">\n\n      <p class="adversario-titulo">Adversário</p>\n\n\n\n    <form class="flex flex-column">\n\n        <input type="text" [(ngModel)]="bodyRequest.timeB" name="timeB" placeholder="Nome do time" class="adversario-info-input">\n\n        {{timeB}}\n\n        <input type="text" [(ngModel)]="bodyRequest.urlLogoAdv" name="urlLogoAdv" placeholder="URL do logo" class="adversario-info-input">\n\n    </form>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="partida-info">\n\n    <p class="detalhes-partida">DETALHES DA PARTIDA</p>\n\n\n\n    <form class="partida-info-form">\n\n      <div>\n\n        <input type="text" [(ngModel)]="bodyRequest.data" name="data" placeholder="Data" class="partida-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.hora" name="hora" placeholder="Horário" class="partida-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.local" name="local" placeholder="Local" class="partida-info-input">\n\n      </div>\n\n      <div>\n\n        <!-- <input type="text" [(ngModel)]="bodyRequest.campeonatoNome" name="campeonatoNome" placeholder="Campeonato" class="partida-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.visitante" name="visitante" placeholder="São Judas como visitante?" class="partida-info-input"> -->\n\n      </div>\n\n    </form>\n\n\n\n    <div class="position-botao">\n\n      <button class="botao-avancar" (click)="sendRequest()">\n\n        <p class="avancar">Avançar</p>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<placar-online *ngIf="partidaEmAndamento"></placar-online>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\cadastro-partidas\cadastro-partidas.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]) === "function" && _c || Object])
    ], CadastroPartidasComponent);
    return CadastroPartidasComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=cadastro-partidas.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuLateralComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the MenuLateralComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuLateralComponent = (function () {
    function MenuLateralComponent() {
        console.log('Hello MenuLateralComponent Component');
        this.text = 'Hello World';
    }
    MenuLateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-lateral',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\menu-lateral\menu-lateral.html"*/'\n\n  <div class="coluna-esquerda-cima">\n\n    <div class="info-usuario">\n\n      <img id="imgLogo" src="../assets/imgs/logo-usjt.png">\n\n      <label id="lblAdministracao" type="text">Administração</label>\n\n      <label id="lblNome" type="text">Fulano Admin</label>\n\n      <label id="lblEmail" type="text">s.ferguson@gmail.com</label>\n\n    </div>\n\n  </div>\n\n\n\n  <div id="coluna-esquerda-baixo">\n\n    <!-- <img id="imgLogo" src="../assets/imgs/tres-pontos.svg"> -->\n\n    <!-- <label id="lblMinhaConta" type="text">Minha Conta</label> -->\n\n  </div>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\menu-lateral\menu-lateral.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());

//# sourceMappingURL=menu-lateral.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacarOnlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_partidas_provider_partidas__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(51);
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
 * Generated class for the PlacarOnlineComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PlacarOnlineComponent = (function () {
    function PlacarOnlineComponent(navCtrl, http, _partidasProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this._partidasProvider = _partidasProvider;
        this.pontoSetAtualSJ = 0;
        this.pontoSetAtualAdversario = 0;
        this.baseApiPath = 'http://jazz.lucasduarte.club/api/';
        this.connectApi();
        //console.log("aesdsfsfsf:", this.idPartidaAtual);
    }
    PlacarOnlineComponent.prototype.connectApi = function () {
        var _this = this;
        var url = this.baseApiPath + 'partidas/';
        if (this.dataObj) {
            return Promise.resolve(this.dataObj);
        }
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (dataObj) {
                _this.data = dataObj;
                resolve(_this.data);
                // console.log("passou no placar", this.data);
                var idPartidaAtual;
                idPartidaAtual = _this.data[0].id;
                _this.idPartidaAtual = _this.data[0].id;
                console.log("set sok:", _this.sets);
                console.log("lala", idPartidaAtual);
                _this.getSets(idPartidaAtual);
            }, function (error) {
                console.log("Erro no provider de getSets");
            });
        });
    };
    PlacarOnlineComponent.prototype.getSets = function (id) {
        var _this = this;
        var url = this.baseApiPath + 'setPartida/?partidaId=' + id;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.sets = data;
                console.log("Sets ae", _this.sets);
            }, function (error) {
                console.log("Erro no provider de sets");
            });
        });
    };
    PlacarOnlineComponent.prototype.atualizarPlacar = function () {
    };
    PlacarOnlineComponent.prototype.adicionarSet = function (id, pontoSJ, pontoAdv) {
        var setZerado = {
            "pontoA": 0,
            "pontoB": 0,
            "tempoA": 0,
            "tempoB": 0,
            "ganhador": "",
            "setFinalizado": "false",
            "partida": {
                "id": this.idPartidaAtual
            }
        };
        // console.log("zerado", setZerado);
        this._partidasProvider.criarSet(setZerado);
    };
    PlacarOnlineComponent.prototype.finalizarSet = function (id, pontoSJ, pontoAdv) {
        var element = document.getElementById("set-numero-" + id);
        element.classList.add("inactive");
        this.sets[id].setFinalizado = "true";
    };
    PlacarOnlineComponent.prototype.finalizarPartida = function () {
        alert("A Partida foi finalizada com sucesso.");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    PlacarOnlineComponent.prototype.aumentarPontoSJ = function ($param) {
        this.sets[$param].pontoSetAtualSJ = this.sets[$param].pontoSetAtualSJ + 1;
        console.log(this.pontoSetAtualSJ);
    };
    PlacarOnlineComponent.prototype.aumentarPontoAdversario = function ($param) {
        this.sets[$param].pontoSetAtualAdversario = this.sets[$param].pontoSetAtualAdversario + 1;
    };
    PlacarOnlineComponent.prototype.diminuirPontoSJ = function ($param) {
        this.sets[$param].pontoSetAtualSJ = this.sets[$param].pontoSetAtualSJ - 1;
    };
    PlacarOnlineComponent.prototype.diminuirPontoAdversario = function ($param) {
        this.sets[$param].pontoSetAtualAdversario = this.sets[$param].pontoSetAtualAdversario - 1;
    };
    PlacarOnlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'placar-online',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\placar-online\placar-online.html"*/'<div class="central">\n\n  <div class="titulo-cadastro">\n\n    <img src="../../assets/imgs/icon-hearder-placar.png">\n\n    <div>\n\n      <p class="titulo-partida">Placar Online</p>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="placar-tempo-real">\n\n    <p class="flex">PLACAR EM TEMPO REAL</p>\n\n  </div>\n\n\n\n  <div class="acoes-partida">\n\n    <div class="position-titulo-acoes">\n\n      <p class="titulo-acoes">AÇÕES DA PARTIDA</p>\n\n    </div>\n\n    <div class="position-botoes">\n\n      <div class="botao-esquerda">\n\n        <button class="botao-adicionar" (click)="adicionarSet()">\n\n          <p class="botao-acao-fonte">Adicionar set</p>\n\n        </button>\n\n        <button class="botao-atualizar" (click)="atualizarPlacar()">\n\n          <p class="botao-acao-fonte">Atualizar placar</p>\n\n        </button>\n\n      </div>\n\n      <div class="botao-direita">\n\n        <button class="botao-finalizar" (click)="finalizarPartida()">\n\n          <p class="botao-acao-fonte">Finalizar partida</p>\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div class="sets-position">\n\n    <p class="flex sets">SET 1</p>\n\n  </div>\n\n\n\n  <div class="sets-finalizado-pai">\n\n    <div class="position-time1-info">\n\n      <p class="flex time-info">Time 01</p>\n\n      <p class="flex time-pontos">27</p>\n\n    </div>\n\n\n\n    <div class="position-time1-info">\n\n      <p class="flex time-info">Time 02</p>\n\n      <p class="flex time-pontos">27</p>\n\n    </div>\n\n\n\n    <div class="position-set-finalizado">\n\n      <p class="flex set-finalizado">SET FINALIZADO</p>\n\n    </div>\n\n  </div> -->\n\n\n\n  <div id="set-numero-{{i}}" class="set-item" *ngFor="let item of sets; let i = index">\n\n    <div class="sets-position">\n\n      <p class="flex sets">SET {{i+1}}</p>\n\n    </div>\n\n  \n\n    <div class="sets-ativo-pai">\n\n      <div class="position-time2-info">\n\n        <p class="flex time-info">São Judas</p>\n\n        <div class="flex flex-row position-placar-botao">\n\n          <button class="botao-menos" (click)="diminuirPontoSJ(i)">-</button>\n\n          <p class="flex pontos">{{item.pontoSetAtualSJ}}</p>\n\n          <button class="botao-mais" (click)="aumentarPontoSJ(i)">+</button>\n\n        </div>\n\n      </div>\n\n  \n\n      <div class="position-time2-info">\n\n        <p class="flex time-info">Time 04</p>\n\n        <div class="flex flex-row position-placar-botao">\n\n          <button class="botao-menos" (click)="diminuirPontoAdversario(i)">-</button>\n\n          <p class="flex pontos">{{item.pontoSetAtualAdversario}}</p>\n\n          <button class="botao-mais" (click)="aumentarPontoAdversario(i)">+</button>\n\n        </div>\n\n      </div>\n\n  \n\n  \n\n      <div class="position-botao-sets">\n\n        <p class="finalizado-msg">Set Finalizado</p>\n\n        <button class="botao-atualizar-set" (click)="adicionarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario); finalizarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario)">\n\n          <p class="botao-fonte">Avançar set</p>\n\n        </button>\n\n        <button class="botao-finalizar-set" (click)="finalizarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario)">\n\n          <p class="botao-fonte">Finalizar set</p>\n\n        </button>\n\n      </div>\n\n  \n\n    </div>\n\n  </div>\n\n\n\n  <!-- <div class="posse-bola-titulo">\n\n    <p class="posse-fonte">Posse de bola:</p>\n\n    <button class="botao-posse-ativa">\n\n      <p class="botao-fonte">São Judas</p>\n\n    </button>\n\n    <button class="botao-posse-desativada">\n\n      <p class="botao-fonte">Visitante</p>\n\n    </button>\n\n  </div> -->\n\n</div>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\placar-online\placar-online.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]) === "function" && _c || Object])
    ], PlacarOnlineComponent);
    return PlacarOnlineComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=placar-online.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<menu-lateral></menu-lateral>\n\n<tela-home></tela-home>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CadastrarPartidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarPartidaPage = (function () {
    function CadastrarPartidaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarPartidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarPartidaPage');
    };
    CadastrarPartidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastrar-partida',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastrar-partida\cadastrar-partida.html"*/'<!--\n\n  Generated template for the CadastrarPartidaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Cadastrar partida</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <menu-lateral></menu-lateral>\n\n    <cadastro-partidas></cadastro-partidas>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastrar-partida\cadastrar-partida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CadastrarPartidaPage);
    return CadastrarPartidaPage;
}());

//# sourceMappingURL=cadastrar-partida.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map
webpackJsonp([12],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioLogado; });
var UsuarioLogado = (function () {
    function UsuarioLogado() {
    }
    UsuarioLogado.prototype.setUsuario = function (user) {
        UsuarioLogado.usuario = user;
    };
    UsuarioLogado.prototype.getUsuario = function () {
        return UsuarioLogado.usuario;
    };
    UsuarioLogado.getInstance = function () {
        if (UsuarioLogado.instance == null) {
            UsuarioLogado.instance = new UsuarioLogado();
        }
        return UsuarioLogado.instance;
    };
    return UsuarioLogado;
}());

//# sourceMappingURL=UsuarioLogado.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroExperienciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_experiencia_experiencia__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_experiencia_lista_experiencia__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the CadastroExperienciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroExperienciaPage = (function () {
    function CadastroExperienciaPage(toastController, navCtrl, navParams, _providerExperiencia) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._providerExperiencia = _providerExperiencia;
        this.experiencia = {
            data: "",
            custo: "",
            descricao: "",
            local: "",
            nome: "",
            qtdDisponivel: "",
            id: ""
        };
    }
    CadastroExperienciaPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Cadastro inválido",
                            duration: 2000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroExperienciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroExperienciaPage');
    };
    CadastroExperienciaPage.prototype.cadastrarExperiencia = function () {
        if (this.experiencia.data == "" || this.experiencia.nome == "" || this.experiencia.custo == "" ||
            this.experiencia.descricao == "" || this.experiencia.local == "" || this.experiencia.qtdDisponivel == "") {
            this.presentToast();
        }
        else {
            this._providerExperiencia.cadastrarExperiencia(this.experiencia);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__lista_experiencia_lista_experiencia__["a" /* ListaExperienciaPage */]);
        }
    };
    CadastroExperienciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-experiencia',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-experiencia\cadastro-experiencia.html"*/'<!--\n\n  Generated template for the CadastroConvenioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Experiência</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  <ion-content>\n\n        <menu-lateral></menu-lateral>\n\n  <div class="central">\n\n    <!-- <div class="titulo-cadastro">\n\n        <img src="../../assets/imgs/marketplace.svg" class="icone-convenio">\n\n        <div>\n\n          <p class="titulo-partida">MARKETPLACE</p>\n\n        </div>\n\n    </div> -->\n\n\n\n    <div class="cadastro-de-convenios">\n\n        <p class="flex">Cadastro de Experiencia</p>\n\n    </div>\n\n\n\n    <div class="convenios">\n\n        <p class="flex">Experiencia</p>\n\n      </div>\n\n\n\n      <form class="flex flex-column" id="usrform">\n\n          <input type="text" [(ngModel)]="experiencia.nome" name="nome" placeholder="Nome Experiencia" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="experiencia.data" name="data" placeholder="Data" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="experiencia.custo" name="custo" placeholder="custo" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="experiencia.local" name="local" placeholder="Local" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="experiencia.qtdDisponivel" name="qtdDisponivel" placeholder="Quantidade disponivel" class="convenio-info-input">\n\n          <textarea [(ngModel)]="experiencia.descricao" name="descricao" form="usrform" placeholder="Descrição da experiencia" class="convenio-descricao"></textarea>\n\n\n\n      </form>\n\n      <div class="position-botao">\n\n        <button class="botao-cadastrar" (click)="cadastrarExperiencia()"><p class="cadastrar">Avançar</p></button>\n\n      \n\n      </div>\n\n\n\n</div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-experiencia\cadastro-experiencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_experiencia_experiencia__["a" /* ExperienciaProvider */]])
    ], CadastroExperienciaPage);
    return CadastroExperienciaPage;
}());

//# sourceMappingURL=cadastro-experiencia.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar-partida/cadastrar-partida.module": [
		303,
		11
	],
	"../pages/cadastro-convenio/cadastro-convenio.module": [
		304,
		10
	],
	"../pages/cadastro-experiencia/cadastro-experiencia.module": [
		311,
		9
	],
	"../pages/cadastro/cadastro.module": [
		305,
		8
	],
	"../pages/lista-convenio/lista-convenio.module": [
		306,
		7
	],
	"../pages/lista-experiencia/lista-experiencia.module": [
		307,
		6
	],
	"../pages/lista-partidas/lista-partidas.module": [
		314,
		5
	],
	"../pages/login/login.module": [
		308,
		4
	],
	"../pages/marketplace/marketplace.module": [
		309,
		0
	],
	"../pages/placar-online/placar-online.module": [
		310,
		3
	],
	"../pages/placar/placar.module": [
		312,
		2
	],
	"../pages/test/test.module": [
		313,
		1
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_UsuarioLogado__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginProvider = (function () {
    function LoginProvider(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        // private baseApiPath = 'http://rock.lucasduarte.club/api/login';
        this.baseApiPath = 'http://maestro.lucasduarte.club/api/torcedor/logar/';
        this.id = {
            id: ""
        };
    }
    LoginProvider.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Email ou senha inválido",
                            duration: 2000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginProvider.prototype.loginUsuario = function (user) {
        var _this = this;
        return new Promise(function (result) {
            // this.http.post(this.baseApiPath + '?userType=torcedor', user,{
            _this.http.post(_this.baseApiPath, user, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                    .set('Content-Type', 'application/json')
                    .set('Access-Control-Allow-Credentials', 'true')
                    .set('Acess-Control-Allow-Origin', '*')
                    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            })
                .subscribe(function (data) {
                console.log(data);
                _this.usuario = data;
                __WEBPACK_IMPORTED_MODULE_3__model_UsuarioLogado__["a" /* UsuarioLogado */].getInstance().setUsuario(_this.usuario);
                console.log("passou na request");
            }, function (error) {
                console.log("deu ruim", error);
                _this.presentToast();
            });
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_placar_placar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_test_test__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_provider_partidas_provider_partidas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_lista_partidas_lista_partidas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_placar_online_placar_online__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_convenio_convenio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_experiencia_experiencia__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_user_user__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_convenio_cadastro_convenio__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_convenios_convenios__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_lista_convenio_lista_convenio__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_lista_experiencia_lista_experiencia__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cadastro_experiencia_cadastro_experiencia__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_login_login__ = __webpack_require__(213);
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
                __WEBPACK_IMPORTED_MODULE_21__pages_lista_partidas_lista_partidas__["a" /* ListaPartidasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_convenio_cadastro_convenio__["a" /* CadastroConvenioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__["a" /* TelaHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__["a" /* LoginScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__["a" /* CadastroPartidasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__["a" /* PlacarOnlineComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_placar_online_placar_online__["a" /* PlacarOnlinePage */],
                __WEBPACK_IMPORTED_MODULE_27__components_convenios_convenios__["a" /* ConveniosComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_lista_convenio_lista_convenio__["a" /* ListaConvenioPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lista_experiencia_lista_experiencia__["a" /* ListaExperienciaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cadastro_experiencia_cadastro_experiencia__["a" /* CadastroExperienciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastrar-partida/cadastrar-partida.module#CadastrarPartidaPageModule', name: 'CadastrarPartidaPage', segment: 'cadastrar-partida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-convenio/cadastro-convenio.module#CadastroConvenioPageModule', name: 'CadastroConvenioPage', segment: 'cadastro-convenio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-convenio/lista-convenio.module#ListaConvenioPageModule', name: 'ListaConvenioPage', segment: 'lista-convenio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-experiencia/lista-experiencia.module#ListaExperienciaPageModule', name: 'ListaExperienciaPage', segment: 'lista-experiencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/marketplace/marketplace.module#MarketplacePageModule', name: 'MarketplacePage', segment: 'marketplace', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placar-online/placar-online.module#PlacarOnlinePageModule', name: 'PlacarOnlinePage', segment: 'placar-online', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-experiencia/cadastro-experiencia.module#CadastroExperienciaPageModule', name: 'CadastroExperienciaPage', segment: 'cadastro-experiencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placar/placar.module#PlacarPageModule', name: 'PlacarPage', segment: 'placar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-partidas/lista-partidas.module#ListaPartidasPageModule', name: 'ListaPartidasPage', segment: 'lista-partidas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_placar_placar__["a" /* PlacarPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_lista_partidas_lista_partidas__["a" /* ListaPartidasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_placar_online_placar_online__["a" /* PlacarOnlinePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_14__components_tela_home_tela_home__["a" /* TelaHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_login_screen_login_screen__["a" /* LoginScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_cadastro_partidas_cadastro_partidas__["a" /* CadastroPartidasComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_menu_lateral_menu_lateral__["a" /* MenuLateralComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_placar_online_placar_online__["a" /* PlacarOnlineComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_cadastro_convenio_cadastro_convenio__["a" /* CadastroConvenioPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_convenios_convenios__["a" /* ConveniosComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_lista_convenio_lista_convenio__["a" /* ListaConvenioPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_lista_experiencia_lista_experiencia__["a" /* ListaExperienciaPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_cadastro_experiencia_cadastro_experiencia__["a" /* CadastroExperienciaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_convenio_convenio__["a" /* ConvenioProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_experiencia_experiencia__["a" /* ExperienciaProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_login_login__["a" /* LoginProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lista_partidas_lista_partidas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_placar_online_placar_online__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lista_convenio_lista_convenio__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_lista_experiencia_lista_experiencia__ = __webpack_require__(57);
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
            { title: 'Cadastrar Partida', component: __WEBPACK_IMPORTED_MODULE_5__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */] },
            { title: 'Lista de partidas', component: __WEBPACK_IMPORTED_MODULE_7__pages_lista_partidas_lista_partidas__["a" /* ListaPartidasPage */] },
            { title: 'Convênio', component: __WEBPACK_IMPORTED_MODULE_9__pages_lista_convenio_lista_convenio__["a" /* ListaConvenioPage */] },
            { title: 'Experiencia', component: __WEBPACK_IMPORTED_MODULE_10__pages_lista_experiencia_lista_experiencia__["a" /* ListaExperienciaPage */] },
            { title: 'Administrar placar', component: __WEBPACK_IMPORTED_MODULE_8__pages_placar_online_placar_online__["a" /* PlacarOnlinePage */] }
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(27);
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TelaHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_lista_partidas_lista_partidas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_placar_online_placar_online__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_convenio_cadastro_convenio__ = __webpack_require__(55);
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
        this.cadastrar = __WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */];
        this.listaPartidas = __WEBPACK_IMPORTED_MODULE_3__pages_lista_partidas_lista_partidas__["a" /* ListaPartidasPage */];
        this.placarOnline = __WEBPACK_IMPORTED_MODULE_4__pages_placar_online_placar_online__["a" /* PlacarOnlinePage */];
        this.convenios = __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_convenio_cadastro_convenio__["a" /* CadastroConvenioPage */];
        // this.user.email = "";
        // this.user.senha = "";
        this.pages = [
            { title: 'Cadastrar Partida', component: __WEBPACK_IMPORTED_MODULE_2__pages_cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */] }
        ];
    }
    TelaHomeComponent.prototype.openPage = function ($param) {
        this.navCtrl.setRoot($param);
    };
    TelaHomeComponent.prototype.indisponivel = function () {
        alert("Funcionalidade indisponível.");
    };
    TelaHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tela-home',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\tela-home\tela-home.html"*/'  <div class="sessoes">\n\n    <div class="cima">\n\n      <div id="boxPlacarOnline" class="box" (click)="openPage(placarOnline)">\n\n        <img id="imgPlacarOnline" src="../assets/imgs/placar-online.svg">\n\n        <label id="lblPlacarOnline" type="text">Placar</label>\n\n      </div>\n\n            \n\n      <div id="boxMarketplace" class="box" (click)="openPage(listaPartidas)">\n\n        <img id="imgMarketplace" src="../../assets/imgs/checklist.png">\n\n        <label id="lblMarketplace" type="text">Lista de partidas</label>\n\n      </div>\n\n    </div>\n\n\n\n    <div class="baixo">\n\n      <div id="boxLojaDaTorcida" class="box" (click)="openPage(cadastrar)">\n\n        <img id="imgLojaDaTorcida" src="../../assets/imgs/match.png">\n\n        <label id="lblLojaDaTorcida" type="text">Criar Partida</label>\n\n      </div>\n\n            \n\n      <div id="boxMinhaConta" class="box" (click)="openPage(convenios)">\n\n        <img id="imgMinhaConta" src="../../assets/imgs/marketplace.svg">\n\n        <label id="lblMinhaConta" type="text">Convênios</label>\n\n      </div>\n\n    </div>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\tela-home\tela-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TelaHomeComponent);
    return TelaHomeComponent;
}());

//# sourceMappingURL=tela-home.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cadastro_cadastro__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_login__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginScreenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginScreenComponent = (function () {
    function LoginScreenComponent(navCtrl, navParams, toastController, _loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this._loginProvider = _loginProvider;
        this.login = {
            email: "",
            senha: ""
        };
    }
    LoginScreenComponent.prototype.erro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Login ou senha Invalidos!",
                            duration: 2000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginScreenComponent.prototype.fazerLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
        // this._loginProvider.loginUsuario(this.login); 
        // setTimeout(() =>{
        //   console.log("Teste", UsuarioLogado.getInstance().getUsuario());
        //   if(UsuarioLogado.getInstance().getUsuario()!= null){
        //     this.navCtrl.setRoot(HomePage);
        //   }
        //   else{
        //       this.erro();
        //   }
        // }, 2000);
    };
    LoginScreenComponent.prototype.goForm = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_cadastro_cadastro__["a" /* CadastroPage */]);
    };
    LoginScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-screen',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\login-screen\login-screen.html"*/'<div>\n\n  <div class="coluna-esquerda">\n\n    <img id="imgTime" src="../assets/imgs/time-usjt.jpeg">\n\n  </div>\n\n\n\n  <div class="coluna-direita">\n\n    <div class="form-login">\n\n      <img id="imgLogo" src="../assets/imgs/logo-usjt.png">\n\n      <label id="lblAdministracao">Administração do aplicativo</label>\n\n\n\n      <div class="preencher">\n\n        <ion-list>\n\n\n\n          <ion-item no-lines class="item-list">\n\n            <div text-center>\n\n              <input id="inpUsuario" type="text" [(ngModel)]="login.email" name="email" style="min-width:80%;"\n\n                placeholder="Digite seu email.">\n\n            </div>\n\n          </ion-item>\n\n\n\n          <ion-item no-lines class="item-list">\n\n            <div text-center>\n\n              <input id="inpSenha" type="password" [(ngModel)]="login.senha" name="password" style="min-width: 80%;"\n\n                placeholder="Digite sua senha.">\n\n            </div>\n\n          </ion-item>\n\n          <button id="btnEntrar" (click)="fazerLogin()" ion-button color="dark" ion-button full\n\n            style="text-align:center;">ACESSAR</button>\n\n      \n\n\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\login-screen\login-screen.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_login_login__["a" /* LoginProvider */]) === "function" && _d || Object])
    ], LoginScreenComponent);
    return LoginScreenComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login-screen.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPartidasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_provider_partidas_provider_partidas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(42);
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
        this._providerPartidas.criarPartida(this.bodyRequest);
        console.log("Request feito", this.bodyRequest);
        alert("Partida criada com sucesso!");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
    };
    CadastroPartidasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cadastro-partidas',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\cadastro-partidas\cadastro-partidas.html"*/'<div class="central" *ngIf="!partidaEmAndamento">\n\n  <div class="titulo-cadastro">\n\n    <img src="../../assets/imgs/icon-hearder-placar.png">\n\n    <div>\n\n      <p class="titulo-partida">Placar Online</p>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="adicionar-partida">\n\n    <p class="flex">Adicionar partida</p>\n\n  </div>\n\n\n\n  <div class="times">\n\n    <p class="flex">TIMES</p>\n\n  </div>\n\n\n\n  <div class="novo-adversario">\n\n    <img src="../../assets/imgs/logo-usjt.png" class="usjt-icon">\n\n\n\n    <div class="adversario-info">\n\n      <p class="adversario-titulo">Adversário</p>\n\n\n\n      <form class="flex flex-column">\n\n        <input type="text" [(ngModel)]="bodyRequest.timeB" name="timeB" placeholder="Nome do time"\n\n          class="adversario-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.urlLogoAdv" name="urlLogoAdv" placeholder="URL do logo"\n\n          class="adversario-info-input">\n\n      </form>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="partida-info">\n\n    <p class="detalhes-partida">DETALHES DA PARTIDA</p>\n\n\n\n    <form class="partida-info-form">\n\n      <div>\n\n        <input type="text" [(ngModel)]="bodyRequest.data" name="data" placeholder="Data" class="partida-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.hora" name="hora" placeholder="Horário" class="partida-info-input">\n\n        <input type="text" [(ngModel)]="bodyRequest.local" name="local" placeholder="Local" class="partida-info-input">\n\n\n\n\n\n\n\n        <ion-list-header>\n\n          <ion-label>Jogando em casa?</ion-label>\n\n        </ion-list-header>\n\n\n\n        <div style="width: 100px">\n\n          <ion-item>\n\n            <ion-label>Sim</ion-label>\n\n            <ion-radio slot="start" value="biff" checked></ion-radio>\n\n          </ion-item>\n\n  \n\n          <ion-item>\n\n            <ion-label>Não</ion-label>\n\n            <ion-radio slot="start" value="griff"></ion-radio>\n\n          </ion-item>\n\n        </div>\n\n\n\n\n\n      </div>\n\n    </form>\n\n\n\n    <div class="position-botao">\n\n      <button class="botao-avancar" (click)="sendRequest()">\n\n        <p class="avancar">Avançar</p>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\cadastro-partidas\cadastro-partidas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]])
    ], CadastroPartidasComponent);
    return CadastroPartidasComponent;
}());

//# sourceMappingURL=cadastro-partidas.js.map

/***/ }),

/***/ 299:
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
        this.email = "adm@usjt.com";
        this.nome = "Administrador";
        this.text = 'Hello World';
    }
    MenuLateralComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-lateral',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\menu-lateral\menu-lateral.html"*/'\n\n  <div class="coluna-esquerda-cima">\n\n    <div class="info-usuario">\n\n      <img id="imgLogo" src="../assets/imgs/logo-usjt.png">\n\n      <label id="lblAdministracao" type="text">Administração</label>\n\n      <label id="lblNome" type="text">{{nome}}</label>\n\n      <label id="lblEmail" type="text">{{email}}</label>\n\n    </div>\n\n  </div>\n\n\n\n  <div id="coluna-esquerda-baixo">\n\n    <!-- <img id="imgLogo" src="../assets/imgs/tres-pontos.svg"> -->\n\n    <!-- <label id="lblMinhaConta" type="text">Minha Conta</label> -->\n\n  </div>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\menu-lateral\menu-lateral.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuLateralComponent);
    return MenuLateralComponent;
}());

//# sourceMappingURL=menu-lateral.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacarOnlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provider_partidas_provider_partidas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(27);
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
        this.conteudoAtivo = false;
        this.getSets();
    }
    PlacarOnlineComponent.prototype.getSets = function () {
        var _this = this;
        var url = this.baseApiPath + 'setPartida/?partidaId=' + this.idPartidaAtual;
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
        this.getSets();
    };
    PlacarOnlineComponent.prototype.adicionarSet = function () {
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
        this._partidasProvider.criarSet(setZerado);
        this.getSets();
    };
    PlacarOnlineComponent.prototype.verificarId = function (id) {
        if (id > 0) {
            this.conteudoAtivo = true;
            this.getSets();
        }
        else {
            alert("Número inválido");
        }
    };
    PlacarOnlineComponent.prototype.finalizarSet = function (id, pontoSJ, pontoAdv) {
        if (this.sets[id].pontoA > this.sets[id].pontoB) {
            this.sets[id].ganhador = "Sao Judas";
        }
        else {
            this.sets[id].ganhador = "Adversário";
        }
        var element = document.getElementById("set-numero-" + id);
        element.classList.add("inactive");
        this.sets[id].setFinalizado = "true";
        this.sendRequest(id);
    };
    PlacarOnlineComponent.prototype.finalizarPartida = function () {
        //this._partidasProvider.finalizarPartida(this.idPartidaAtual);
        alert("A Partida foi finalizada com sucesso.");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    PlacarOnlineComponent.prototype.sendRequest = function (id) {
        var body = this.sets;
        body = body[id];
        console.log("body", body);
        this._partidasProvider.atualizarSet(body.id, body);
    };
    PlacarOnlineComponent.prototype.aumentarPontoSJ = function ($param) {
        this.sets[$param].pontoA = this.sets[$param].pontoA + 1;
        console.log(this.sets[$param].pontoA);
        this.sendRequest($param);
    };
    PlacarOnlineComponent.prototype.aumentarPontoAdversario = function ($param) {
        this.sets[$param].pontoB = this.sets[$param].pontoB + 1;
        this.sendRequest($param);
    };
    PlacarOnlineComponent.prototype.diminuirPontoSJ = function ($param) {
        this.sets[$param].pontoA = this.sets[$param].pontoA - 1;
        this.sendRequest($param);
    };
    PlacarOnlineComponent.prototype.diminuirPontoAdversario = function ($param) {
        this.sets[$param].pontoB = this.sets[$param].pontoB - 1;
        this.sendRequest($param);
    };
    PlacarOnlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'placar-online',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\placar-online\placar-online.html"*/'<div class="central">\n\n  <div class="titulo-cadastro">\n\n    <img src="../../assets/imgs/icon-hearder-placar.png">\n\n    <div>\n\n      <p class="titulo-partida">Placar Online</p>\n\n    </div>\n\n  </div>\n\n\n\n  <div class="placar-tempo-real">\n\n    <p class="flex">PLACAR EM TEMPO REAL</p>\n\n  </div>\n\n\n\n  <div class="area" *ngIf="!conteudoAtivo">\n\n    <ion-item>\n\n        <ion-label stacked>ID da partida</ion-label>\n\n        <ion-input type="number" required [(ngModel)]="idPartidaAtual" name="idPartidaAtual"></ion-input>\n\n    </ion-item>\n\n    <button (click)="verificarId(idPartidaAtual)">OK!</button>\n\n  </div>\n\n\n\n  <div class="content" *ngIf="conteudoAtivo">\n\n      <div class="acoes-partida">\n\n          <div class="position-titulo-acoes">\n\n            <p class="titulo-acoes">AÇÕES DA PARTIDA</p>\n\n          </div>\n\n          <div class="position-botoes">\n\n            <div class="botao-esquerda">\n\n              <button class="botao-adicionar" (click)="adicionarSet()">\n\n                <p class="botao-acao-fonte">Adicionar set</p>\n\n              </button>\n\n              <button class="botao-atualizar" (click)="atualizarPlacar()">\n\n                <p class="botao-acao-fonte">Atualizar placar</p>\n\n              </button>\n\n            </div>\n\n            <div class="botao-direita">\n\n              <button class="botao-finalizar" (click)="finalizarPartida()">\n\n                <p class="botao-acao-fonte">Finalizar partida</p>\n\n              </button>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      \n\n        <!-- <div class="sets-position">\n\n          <p class="flex sets">SET 1</p>\n\n        </div>\n\n      \n\n        <div class="sets-finalizado-pai">\n\n          <div class="position-time1-info">\n\n            <p class="flex time-info">Time 01</p>\n\n            <p class="flex time-pontos">27</p>\n\n          </div>\n\n      \n\n          <div class="position-time1-info">\n\n            <p class="flex time-info">Time 02</p>\n\n            <p class="flex time-pontos">27</p>\n\n          </div>\n\n      \n\n          <div class="position-set-finalizado">\n\n            <p class="flex set-finalizado">SET FINALIZADO</p>\n\n          </div>\n\n        </div> -->\n\n      \n\n        <div id="set-numero-{{i}}" class="set-item" [class.inactive]="sets[i].setFinalizado" *ngFor="let item of sets; let i = index">\n\n          <div class="sets-position">\n\n            <p class="flex sets">SET {{i+1}}</p>\n\n          </div>\n\n        \n\n          <div class="sets-ativo-pai">\n\n            <div class="position-time2-info">\n\n              <p class="flex time-info">São Judas</p>\n\n              <div class="flex flex-row position-placar-botao">\n\n                <button class="botao-menos" (click)="diminuirPontoSJ(i)">-</button>\n\n                <p class="flex pontos">{{item.pontoA}}</p>\n\n                <button class="botao-mais" (click)="aumentarPontoSJ(i)">+</button>\n\n              </div>\n\n            </div>\n\n        \n\n            <div class="position-time2-info">\n\n              <p class="flex time-info">Adversário</p>\n\n              <div class="flex flex-row position-placar-botao">\n\n                <button class="botao-menos" (click)="diminuirPontoAdversario(i)">-</button>\n\n                <p class="flex pontos">{{item.pontoB}}</p>\n\n                <button class="botao-mais" (click)="aumentarPontoAdversario(i)">+</button>\n\n              </div>\n\n            </div>\n\n        \n\n        \n\n            <div class="position-botao-sets">\n\n              <p class="finalizado-msg">Set Finalizado</p>\n\n              <button class="botao-atualizar-set" (click)="finalizarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario); adicionarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario);">\n\n                <p class="botao-fonte">Avançar set</p>\n\n              </button>\n\n              <button class="botao-finalizar-set" (click)="finalizarSet(i, item.pontoSetAtualSJ, item.pontoSetAtualAdversario)">\n\n                <p class="botao-fonte">Finalizar set</p>\n\n              </button>\n\n            </div>\n\n        \n\n          </div>\n\n        </div>\n\n      \n\n        <!-- <div class="posse-bola-titulo">\n\n          <p class="posse-fonte">Posse de bola:</p>\n\n          <button class="botao-posse-ativa">\n\n            <p class="botao-fonte">São Judas</p>\n\n          </button>\n\n          <button class="botao-posse-desativada">\n\n            <p class="botao-fonte">Visitante</p>\n\n          </button>\n\n        </div> -->\n\n  </div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\placar-online\placar-online.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]])
    ], PlacarOnlineComponent);
    return PlacarOnlineComponent;
}());

//# sourceMappingURL=placar-online.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_UsuarioLogado__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserProvider = (function () {
    function UserProvider(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        // private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
        this.baseApiPath = 'http://maestro.lucasduarte.club/api/';
        this.id = {
            id: ""
        };
        this.options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({
            withCredentials: true
        });
    }
    UserProvider.prototype.sucesso = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "Cadastro realizado com sucesso !",
                            duration: 2000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.cadastroInicialUsuario = function (cadSimples) {
        var _this = this;
        return new Promise(function (result) {
            _this.http.post(_this.baseApiPath + 'torcedor', cadSimples, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            })
                .subscribe(function (data) {
                console.log(data);
                _this.sucesso();
            }, function (error) {
                console.log(error);
            });
        });
    };
    UserProvider.prototype.serSocio = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (result) {
            _this.http.put(_this.baseApiPath + 'torcedor/sersocio/' + __WEBPACK_IMPORTED_MODULE_2__model_UsuarioLogado__["a" /* UsuarioLogado */].getInstance().getUsuario().id, user, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
                    .set('Content-Type', 'application/json')
                    .set('Access-Control-Allow-Credentials', 'true')
                    .set('Acess-Control-Allow-Origin', '*')
                    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
            })
                .subscribe(function (data) {
                console.log(data);
                _this.usuario = data;
                console.log(_this.usuario);
            }, function (error) {
                console.log(error);
                console.log("Deu Ruim");
            });
        });
    };
    UserProvider.prototype.naoSerSocio = function () {
        var _this = this;
        console.log();
        return new Promise(function (result) {
            _this.http.put(_this.baseApiPath + 'torcedor/naosersocio/' + __WEBPACK_IMPORTED_MODULE_2__model_UsuarioLogado__["a" /* UsuarioLogado */].getInstance().getUsuario().id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            })
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
                console.log("Deu Ruim");
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConveniosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__ = __webpack_require__(49);
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
 * Generated class for the ConveniosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConveniosComponent = (function () {
    function ConveniosComponent(navCtrl, _providerCovenio) {
        this.navCtrl = navCtrl;
        this._providerCovenio = _providerCovenio;
        this.convenio = {
            nome: "",
            nomeReponsavel: "",
            cpf: "",
            fone: "",
            email: "",
            endereco: "",
            pontuacaoQRCode: ""
        };
    }
    ConveniosComponent.prototype.cadastrarConvenio = function () {
        this._providerCovenio.cadastrarConvenio(this.convenio);
    };
    ConveniosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'convenios',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\convenios\convenios.html"*/'<div class="central">\n\n    <div class="titulo-cadastro">\n\n        <img src="../../assets/imgs/marketplace.svg" class="icone-convenio">\n\n        <div>\n\n          <p class="titulo-partida">MARKETPLACE</p>\n\n        </div>\n\n    </div>\n\n\n\n    <div class="cadastro-de-convenios">\n\n        <p class="flex">Cadastro de convênios</p>\n\n    </div>\n\n\n\n    <div class="convenios">\n\n        <p class="flex">Convênios</p>\n\n      </div>\n\n\n\n      <form class="flex flex-column" id="usrform">\n\n          <input type="text" [(ngModel)]="convenio.nome" name="nome" placeholder="Nome do convênio" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.nomeReponsavel" name="nomeReponsavel" placeholder="Nome do Responsavel" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.cpf" name="cpf"  placeholder="CPF" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.fone" name="fone" placeholder="Telefone" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.email" name="E-mail" placeholder="E-mail" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.endereco" name="Endereco" placeholder="Endereço" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.pontuacaoQRCode" name="Pontuacao" placeholder="Pontuação QRCode" class="convenio-info-input">\n\n\n\n      </form>\n\n      <div class="position-botao">\n\n          <button class="botao-cadastrar" (click)="cadastrarConvenio()"><p class="cadastrar">Avançar</p></button>\n\n      </div>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\components\convenios\convenios.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__["a" /* ConvenioProvider */]])
    ], ConveniosComponent);
    return ConveniosComponent;
}());

//# sourceMappingURL=convenios.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarPartidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvenioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
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
  Generated class for the ConvenioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConvenioProvider = (function () {
    function ConvenioProvider(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        // private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
        this.baseApiPath = 'https://maestro.lucasduarte.club/api/';
    }
    ConvenioProvider.prototype.getAllConvenios = function () {
        var _this = this;
        var url = this.baseApiPath + 'convenio';
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log("Erro no provider de partidas");
            });
        });
    };
    ConvenioProvider.prototype.cadastrarConvenio = function (convenio) {
        var _this = this;
        return new Promise(function (result) {
            _this.http.post(_this.baseApiPath + 'convenio', convenio, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            })
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ConvenioProvider.prototype.getConvenio = function (id) {
        var _this = this;
        var url = this.baseApiPath + 'convenio/' + id;
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
            }, function (error) {
                console.log("Erro no provider Convenio");
            });
        });
    };
    ConvenioProvider.prototype.alterarConvenio = function (id, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.baseApiPath + 'convenio/' + id, body)
                .toPromise()
                .then(function (response) {
                // console.log(response.json());
                // resolve(response.json());
            })
                .catch(function (error) {
                console.error('Deu ruim : ', error.status);
                console.error('API Convenio Error : ', JSON.stringify(error));
                // reject(error.json());
            });
        });
    };
    ConvenioProvider.prototype.deletarConvenio = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.baseApiPath + 'convenio/' + id)
                .toPromise()
                .then(function (response) {
                // console.log(response.json());
                // // resolve(response.json());
            })
                .catch(function (error) {
                console.error('Deu ruim : ', error.status);
                console.error('API Convenio Error : ', JSON.stringify(error));
                // reject(error.json());
            });
        });
    };
    ConvenioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object])
    ], ConvenioProvider);
    return ConvenioProvider;
    var _a, _b;
}());

//# sourceMappingURL=convenio.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderPartidasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(89);
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
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
                //console.log("passouUUU", this.data);
                // this.partidaAtual = data[0];
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
            _this.http.put(_this.baseApiPath + 'set/' + id, body)
                .toPromise()
                .then(function (response) {
                console.log('API SET ATUALIZOU Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API SET ATUALIZOU Error : ', error.status);
                console.error('API SET Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ProviderPartidasProvider.prototype.finalizarPartida = function (id) {
        var _this = this;
        var url = this.baseApiPath + 'set/partidas/finalizar/' + id;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', '*');
        return new Promise(function (resolve, reject) {
            _this.http.put(url, headers)
                .toPromise()
                .then(function (response) {
                console.log('API SET ATUALIZOU Response : ', response.json());
                resolve(response.json());
            })
                .catch(function (error) {
                console.error('API SET ATUALIZOU Error : ', error.status);
                console.error('API SET Error : ', JSON.stringify(error));
                reject(error.json());
            });
        });
    };
    ProviderPartidasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ProviderPartidasProvider);
    return ProviderPartidasProvider;
}());

//# sourceMappingURL=provider-partidas.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroConvenioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lista_convenio_lista_convenio__ = __webpack_require__(56);
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
    function CadastroConvenioPage(navCtrl, navParams, _providerCovenio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._providerCovenio = _providerCovenio;
        this.convenio = {
            nome: "",
            nomeReponsavel: "",
            cpf: "",
            fone: "",
            email: "",
            endereco: "",
            pontuacaoQRCode: "",
            id: ""
        };
        this.existente = false;
        if (this.navParams.get("convnioSelecionado") != null) {
            this.convenio = this.navParams.get("convnioSelecionado");
            this.existente = true;
        }
    }
    CadastroConvenioPage.prototype.cadastrarConvenio = function () {
        var _this = this;
        setTimeout(function () {
            _this._providerCovenio.cadastrarConvenio(_this.convenio);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__lista_convenio_lista_convenio__["a" /* ListaConvenioPage */]);
        }, 2000);
    };
    CadastroConvenioPage.prototype.alterarConvenio = function () {
        var _this = this;
        setTimeout(function () {
            _this._providerCovenio.alterarConvenio(_this.convenio.id, _this.convenio);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__lista_convenio_lista_convenio__["a" /* ListaConvenioPage */]);
        }, 2000);
    };
    CadastroConvenioPage.prototype.excluirConvenio = function () {
        var _this = this;
        setTimeout(function () {
            _this._providerCovenio.deletarConvenio(_this.convenio.id);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__lista_convenio_lista_convenio__["a" /* ListaConvenioPage */]);
        }, 5000);
    };
    CadastroConvenioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-convenio',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-convenio\cadastro-convenio.html"*/'<!--\n\n  Generated template for the CadastroConvenioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Cadastro de Convênios</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  <ion-content>\n\n        <menu-lateral></menu-lateral>\n\n  <div class="central">\n\n    <!-- <div class="titulo-cadastro">\n\n        <img src="../../assets/imgs/marketplace.svg" class="icone-convenio">\n\n        <div>\n\n          <p class="titulo-partida">MARKETPLACE</p>\n\n        </div>\n\n    </div> -->\n\n\n\n    <div class="cadastro-de-convenios">\n\n        <p class="flex">Cadastro de Convênios</p>\n\n    </div>\n\n\n\n    <div class="convenios">\n\n        <p class="flex">Convênios</p>\n\n      </div>\n\n\n\n      <form class="flex flex-column" id="usrform">\n\n          <input type="text" [(ngModel)]="convenio.nome" name="nome" placeholder="Nome do convênio" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.nomeReponsavel" name="nomeReponsavel" placeholder="Nome do Responsavel" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.cpf" name="cpf"  placeholder="CPF" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.fone" name="fone" placeholder="Telefone" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.email" name="E-mail" placeholder="E-mail" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.endereco" name="Endereco" placeholder="Endereço" class="convenio-info-input">\n\n          <input type="text" [(ngModel)]="convenio.pontuacaoQRCode" name="Pontuacao" placeholder="Pontuação QRCode" class="convenio-info-input">\n\n\n\n      </form>\n\n      <div class="position-botao">\n\n          <div  *ngIf="!existente" >\n\n            <button class="botao-cadastrar" (click)="cadastrarConvenio()"><p class="cadastrar">Avançar</p></button>\n\n          </div>\n\n            <div  *ngIf="existente" >\n\n            <button (click)="alterarConvenio()" ion-button>Alterar</button>\n\n            <button (click)="excluirConvenio()" ion-button color="danger">Excluir</button>\n\n         </div>\n\n      </div>\n\n\n\n</div>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\cadastro-convenio\cadastro-convenio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__["a" /* ConvenioProvider */]])
    ], CadastroConvenioPage);
    return CadastroConvenioPage;
}());

//# sourceMappingURL=cadastro-convenio.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaConvenioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_convenio_cadastro_convenio__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ListaConvenioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaConvenioPage = (function () {
    function ListaConvenioPage(navCtrl, navParams, _convenios) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._convenios = _convenios;
        this.showAll();
    }
    ListaConvenioPage.prototype.ionViewDidLoad = function () {
        this.showAll();
    };
    ListaConvenioPage.prototype.ionViewWillEnter = function () {
        console.log("Passou aqui");
    };
    ListaConvenioPage.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._convenios.getAllConvenios()];
                    case 1:
                        _a.lista = _b.sent();
                        this.lista = this.lista.reverse();
                        console.log("lista", this.lista);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListaConvenioPage.prototype.openCadastroConvenio = function ($param) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cadastro_convenio_cadastro_convenio__["a" /* CadastroConvenioPage */]);
    };
    ListaConvenioPage.prototype.detalhesConvenio = function (convenio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_convenio_cadastro_convenio__["a" /* CadastroConvenioPage */], { convnioSelecionado: convenio });
    };
    ListaConvenioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-convenio',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-convenio\lista-convenio.html"*/'<!--\n\n  Generated template for the ListaPartidasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Convênio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <menu-lateral></menu-lateral>\n\n  <ion-list>\n\n    <div class="actions">\n\n      <button (click)="openCadastroConvenio()">Adicionar novo Convenio</button>\n\n    </div>\n\n    <ion-card (click)="detalhesConvenio(item)" *ngFor="let item of lista" class="card-item">\n\n      <h2> {{item.nome}}</h2>\n\n      <p>cnpj: {{item.cpf}}</p>\n\n      <p>Telefone: {{item.fone}}</p>\n\n      <h3>Pontuaçao: {{item.pontuacao}}</h3>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-convenio\lista-convenio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_convenio_convenio__["a" /* ConvenioProvider */]])
    ], ListaConvenioPage);
    return ListaConvenioPage;
}());

//# sourceMappingURL=lista-convenio.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaExperienciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_experiencia_cadastro_experiencia__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_experiencia_experiencia__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ListaExperienciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaExperienciaPage = (function () {
    function ListaExperienciaPage(navCtrl, navParams, _experiencias) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._experiencias = _experiencias;
        this.showAll();
    }
    ListaExperienciaPage.prototype.ionViewDidLoad = function () {
        this.showAll();
    };
    ListaExperienciaPage.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._experiencias.getExperiencia()];
                    case 1:
                        _a.lista = _b.sent();
                        this.lista = this.lista.reverse();
                        console.log("lista", this.lista);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListaExperienciaPage.prototype.openCadastroExperiencia = function ($param) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cadastro_experiencia_cadastro_experiencia__["a" /* CadastroExperienciaPage */]);
    };
    ListaExperienciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-experiencia',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-experiencia\lista-experiencia.html"*/'<!--\n\n  Generated template for the ListaPartidasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Experiências</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n    <menu-lateral></menu-lateral>\n\n    <ion-list>\n\n      <div class="actions">\n\n        <button (click)="openCadastroExperiencia()">Adicionar nova Experiência</button>\n\n      </div>\n\n      <ion-card *ngFor="let item of lista" class="card-item">\n\n        <h2> {{item.nome}}</h2>\n\n        <p>{{item.data}}</p>\n\n        <p> {{item.custo}}</p>\n\n        <p> {{item.local}}</p>\n\n        <h3>Disponivel: {{item.qtdDisponivel}}</h3>\n\n        <p>Descrição: {{item.descricao}}</p>\n\n      </ion-card>\n\n    </ion-list>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-experiencia\lista-experiencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_experiencia_experiencia__["a" /* ExperienciaProvider */]])
    ], ListaExperienciaPage);
    return ListaExperienciaPage;
}());

//# sourceMappingURL=lista-experiencia.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacarOnlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the PlacarOnlinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlacarOnlinePage = (function () {
    function PlacarOnlinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PlacarOnlinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacarOnlinePage');
    };
    PlacarOnlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-placar-online',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\placar-online\placar-online.html"*/'<!--\n\n  Generated template for the PlacarOnlinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Placar online</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <menu-lateral></menu-lateral>\n\n  <placar-online></placar-online>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\placar-online\placar-online.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PlacarOnlinePage);
    return PlacarOnlinePage;
}());

//# sourceMappingURL=placar-online.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPartidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_partidas_provider_partidas__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_partida_cadastrar_partida__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the ListaPartidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaPartidasPage = (function () {
    function ListaPartidasPage(navCtrl, navParams, _partidas) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._partidas = _partidas;
        this.showAll();
    }
    ListaPartidasPage.prototype.ionViewDidLoad = function () {
    };
    ListaPartidasPage.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._partidas.getAllPartidas()];
                    case 1:
                        _a.lista = _b.sent();
                        this.lista = this.lista.reverse();
                        console.log("lista", this.lista);
                        return [2 /*return*/];
                }
            });
        });
    };
    ListaPartidasPage.prototype.openCadastroPartidas = function ($param) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cadastrar_partida_cadastrar_partida__["a" /* CadastrarPartidaPage */]);
    };
    ListaPartidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-partidas',template:/*ion-inline-start:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-partidas\lista-partidas.html"*/'<!--\n\n  Generated template for the ListaPartidasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lista de Partidas</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <menu-lateral></menu-lateral>\n\n  <ion-list>\n\n    <div class="actions">\n\n      <button (click)="openCadastroPartidas()">Adicionar nova partida</button>\n\n    </div>\n\n    <ion-card  *ngFor="let item of lista" class="card-item">\n\n      <p>ID da partida: {{item.id}}</p>\n\n      <h2>São Judas</h2> vs <h2>{{item.timeB}}</h2>\n\n      <p>{{item.data}}</p>\n\n      <div class="status finalizada" *ngIf="item.partidaFinalizada">Partida finalizada</div>\n\n      <div class="status iniciada" *ngIf="item.partidaIniciada && !item.partidaFinalizada">Partida iniciada</div>\n\n      <div class="status aberto" *ngIf="!item.partidaIniciada">Partida em aberto</div>\n\n      \n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\brunoasilva\Documents\study\front-admin\adminApp\src\pages\lista-partidas\lista-partidas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_provider_partidas_provider_partidas__["a" /* ProviderPartidasProvider */]])
    ], ListaPartidasPage);
    return ListaPartidasPage;
}());

//# sourceMappingURL=lista-partidas.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienciaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
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
  Generated class for the ExperienciaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ExperienciaProvider = (function () {
    function ExperienciaProvider(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        // private baseApiPath = 'http://rock.lucasduarte.club/maestro/api/';
        this.baseApiPath = 'http://maestro.lucasduarte.club/api/';
    }
    ExperienciaProvider.prototype.cadastrarExperiencia = function (body) {
        var _this = this;
        return new Promise(function (result) {
            _this.http.post(_this.baseApiPath + 'experiencia', body, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            })
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ExperienciaProvider.prototype.getExperiencia = function () {
        var _this = this;
        var url = this.baseApiPath + 'experiencia';
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .map(function (res) { return res; })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            }, function (error) {
                console.log("Erro no provider Experiencia");
            });
        });
    };
    ExperienciaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object])
    ], ExperienciaProvider);
    return ExperienciaProvider;
    var _a, _b;
}());

//# sourceMappingURL=experiencia.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map
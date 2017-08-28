webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Home/Ai Banner/aiBanner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AiBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AiBannerComponent = (function () {
    function AiBannerComponent() {
    }
    return AiBannerComponent;
}());
AiBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'aibanner',
        template: "\n    <div>\n    <img class=\"image\" src=\"assets/AiBanner-01.jpg\">\n    </div>\n    <div id=\"why-syze\"></div>\n    ",
        styles: ["\n    .image {\n        width: 100vw;\n        height: 450px;\n    }\n    "]
    })
], AiBannerComponent);

//# sourceMappingURL=aiBanner.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Contact Form/contactForm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactFormComponent = (function () {
    function ContactFormComponent() {
    }
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'contactForm',
        template: __webpack_require__("../../../../../src/app/Home/Contact Form/contactForm.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Contact Form/contactForm.styles.css")]
    })
], ContactFormComponent);

//# sourceMappingURL=contactForm.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Contact Form/contactForm.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-header {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:5px;\n}\n\n.custom-input {\n    width: 350px;\n    height: 35px;\n    text-align: left;\n    font-size: 11px;\n    font-family: 'Open Sans', arial, serif;\n    font-weight: 500;\n    letter-spacing: 1px;\n    margin-top: 1vh;\n    margin-bottom: 2vh;\n    color: #000;\n}\n\n.email-description {\n    text-align: left;\n    font-size: 12px;\n    font-family: 'Open Sans', arial, serif;\n    font-weight: 500;\n    letter-spacing: 1px;\n    color: #989898;\n    margin-left: 1vh;\n    position: relative;\n    bottom: 5px;\n}\n\n.btn {\n    padding: 8px 60px;\n    font-size: 15px;\n    font-family: 'Open Sans', arial, serif;\n    border: 0 none;\n    font-weight: 500;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n}\n\n.custom-input-text {\n    width: 350px;\n    height: 80px;\n    text-align: left;\n    font-size: 11px;\n    font-family: 'Open Sans', arial, serif;\n    font-weight: 500;\n    letter-spacing: 1px;\n    margin-top: 1vh;\n    margin-bottom: 2vh;\n    color: #000;\n}\n\n.custom-input-text::-webkit-input-placeholder {\n    padding-left: 10px;\n}\n\n.custom-input::-webkit-input-placeholder {\n    padding-left: 10px;\n}\n\n.btn.sharp {\n    border-radius:0;\n}\n\n.btn-send {\n    background: #232323;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Contact Form/contactForm.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom:5vh;\">\n    <div class=\"row justify-content-center\">\n        <p class=\"section-header\" style=\"margin-top:11vh;\">CONTACT</p>\n    </div>\n    <div class=\"row justify-content-center\">\n        \n        <div class=\"col-lg-2\">\n            \n            <p class=\"\">\n                <i class=\"fa fa-envelope fa-2x\" aria-hidden=\"true\"></i>\n                <span class=\"email-description\">HELLO@SYZE.AI</span>\n            </p>\n        </div>\n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6\">\n                            <input type=\"text\" class=\"custom-input\" id=\"exampleInputPassword1\" placeholder=\"NAME\" style=\"margin-bottom:0vh;\">\n                            <input type=\"text\" class=\"custom-input\" id=\"exampleInputPassword1\" placeholder=\"EMAIL\">\n                    </div>\n                    <div class=\"col-lg-6\">\n                            <textarea type=\"text\" class=\"custom-input-text\" id=\"exampleInputPassword1\" placeholder=\"MESSAGE\"></textarea>\n                    </div>\n                </div>\n                <div class=\"row justify-content-center\" style=\" margin-top: 1vh;\">                        \n                        <button type=\"submit\" class=\"btn btn-send sharp\">SEND</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/Features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeaturesComponent = (function () {
    function FeaturesComponent() {
    }
    return FeaturesComponent;
}());
FeaturesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'features',
        template: __webpack_require__("../../../../../src/app/Home/Features/features.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Features/features.styles.css")]
    })
], FeaturesComponent);

//# sourceMappingURL=features.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Features/features.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-header {\n    font-size: 18px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:5px;\n}\n\n.custom-caption {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:300; \n    letter-spacing:1px;\n    color: #616161;\n    text-align: center;\n    /* color:pink; */\n}\n\n.paragraph-header {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:500; \n    letter-spacing:1px;\n    color: #111111;\n    margin-top: 6vh;\n    margin-bottom: 2vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Features/features.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 11vh; margin-bottom: 11vh;\">\n    <div class=\"row justify-content-center\">\n        <p class=\"section-header\">FEATURES</p>\n    </div>\n    <div class=\"row\" style=\"margin-top: 8vh;\">\n        <div class=\"col-lg-10 offset-lg-1\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                            <div class=\"col-lg-3\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row justify-content-center\">\n                                            <img src=\"assets/icons8-Camera-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"paragraph-header\">ONE SCAN</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"custom-caption\">Syze pulls over 30 measurements from 300\n                                            data points in real time.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-3\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row justify-content-center\">\n                                            <img src=\"assets/icons8-Sewing Tape Measure-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"paragraph-header\">HIGH ACCURACY</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"custom-caption\">Measurements are taken to within 1.5mm \n                                                    ensuring precision at every step.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-3\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row justify-content-center\">\n                                            <img src=\"assets/icons8-ID Card-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"paragraph-header\">SYZE ID</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"custom-caption\">Users can login on any partner site.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-3\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row justify-content-center\">\n                                            <img src=\"assets/icons8-User-100.png\" style=\"width: 100px; height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"paragraph-header\">DEEP ANALYTICS</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                            <p class=\"custom-caption\">Syze drives greater shopper data whilst \n                                                    strictly protecting individual users.</p>\n                                    </div>\n                                </div>\n                            </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/Footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'custom-footer',
        template: __webpack_require__("../../../../../src/app/Home/Footer/footer.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Footer/footer.styles.css")]
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Footer/footer.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-brand {\n    font-family: 'Open Sans', arial, serif; \n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 1px;\n}\n\n.social-link{\n    color: #3c3c3c;\n    margin-left: 1vw;\n    margin-right: 1vw;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Footer/footer.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom: 5vh;\">\n    <hr />\n    <div class=\"row\">\n        <div class=\"col-lg-2 offset-lg-1\">\n            <p class=\"footer-brand\">SYZE, LTD</p>\n        </div>\n        <div class=\"col-lg-3 offset-lg-6\">\n            <a href=\"#\">\n                <i class=\"fa fa-facebook social-link\" aria-hidden=\"true\"></i>\n            </a>\n            <a href=\"#\">\n                <i class=\"fa fa-twitter social-link\" aria-hidden=\"true\"></i>\n            </a>\n            <a href=\"#\">\n                <i class=\"fa fa-linkedin social-link\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Brands/forBrands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForBrandsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForBrandsComponent = (function () {
    function ForBrandsComponent() {
    }
    return ForBrandsComponent;
}());
ForBrandsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'for-brands',
        template: __webpack_require__("../../../../../src/app/Home/How It Works/For Brands/forBrands.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/How It Works/For Brands/forBrands.styles.css")]
    })
], ForBrandsComponent);

//# sourceMappingURL=forBrands.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Brands/forBrands.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-caption {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:300; \n    letter-spacing:1px;\n    color: #616161;\n    text-align: center;\n    /* color:pink; */\n}\n\n.paragraph-header {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:500; \n    letter-spacing:1px;\n    color: #111111;\n    margin-top: 6vh;\n    margin-bottom: 2vh;\n}\n\n.section-header {\n    font-size: 18px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Brands/forBrands.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 8vh; margin-bottom: 11vh;\">\n        <div class=\"row\">\n            <div class=\"col-lg-10 offset-lg-1\">\n                <div class=\"container-fluid\">\n                        <div class=\"row justify-content-center\">\n                                <div class=\"col-lg-3 \">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/icons8-Small Business Filled-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">SETUP A BUSINESS ACCOUNT</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                Enter your businesses details when registering \n                                                in order to become a Syze partner.\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-3 offset-lg-1\">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/icons8-Key 2 Filled-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">INTEGRATE</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                Using your brand's unique API key, you can then \n                                                integrate the syze platform into your very own website.\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-3 offset-lg-1\">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/icons8-Hanger Filled-100.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">ENTER YOUR GARMENT DETAILS</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                Using the shopify app within your store, enter in the \n                                                details of your garments and get people syzing.\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Users/forUsers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForUsersComponent = (function () {
    function ForUsersComponent() {
    }
    return ForUsersComponent;
}());
ForUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'for-users',
        template: __webpack_require__("../../../../../src/app/Home/How It Works/For Users/forUsers.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/How It Works/For Users/forUsers.styles.css")]
    })
], ForUsersComponent);

//# sourceMappingURL=forUsers.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Users/forUsers.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-caption {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:300; \n    letter-spacing:1px;\n    color: #616161;\n    text-align: center;\n    /* color:pink; */\n}\n\n.paragraph-header {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:500; \n    letter-spacing:1px;\n    color: #111111;\n    margin-top: 6vh;\n    margin-bottom: 2vh;\n}\n\n.section-header {\n    font-size: 18px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/For Users/forUsers.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 8vh; margin-bottom: 11vh;\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-10\">\n                <div class=\"container-fluid\">\n                        <div class=\"row justify-content-center\">\n                                <div class=\"col-lg-3 \">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/icons8-Document-500.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">SIGN UP</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                You can sign up with just your email and \n                                                password or by using Facebook, Google or Twitter  \n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-3 offset-lg-1\">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/standing-human-body-silhouette (2).svg\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">SCAN YOUR BODY</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                Using your brand's unique API key, you can then \n                                                integrate the syze platform into your very own website.    \n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-3 offset-lg-1\">\n                                    <div class=\"row justify-content-center\">\n                                        <img src=\"assets/SYZE logo BW.png\" style=\" height: 90px;\">\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"paragraph-header\">USE YOUR SYZE</p>\n                                    </div>\n                                    <div class=\"row justify-content-center\">\n                                        <p class=\"custom-caption\">\n                                                You can then shop with your syze in any of our partnered \n                                                retailers making sure you get the best syze for you!  \n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/howItWorks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
        this.forUsers = true;
        this.forBrands = false;
    }
    HowItWorksComponent.prototype.onBrandClick = function () {
        this.forUsers = false;
        this.forBrands = true;
    };
    HowItWorksComponent.prototype.onUserClick = function () {
        this.forBrands = false;
        this.forUsers = true;
    };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'howItWorks',
        template: __webpack_require__("../../../../../src/app/Home/How It Works/howItWorks.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/How It Works/howItWorks.styles.css"), __webpack_require__("../../../../../src/app/Home/home.styles.css")]
    })
], HowItWorksComponent);

//# sourceMappingURL=howItWorks.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/howItWorks.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n    border-bottom: 2px solid #000;\n}\n\n.header-link {\n    cursor: pointer;\n    text-decoration: none;\n    color: #000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/How It Works/howItWorks.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n    <div class=\"row\" style=\"margin-top: 11vh;\">\n        <div class=\"col-lg-3 offset-lg-1\" style=\"padding-left: 60px;\">\n            <p  class=\"section-header\" \n                style=\"font-size: 18px; font-family: 'Open Sans', arial, serif; font-weight:400; letter-spacing:5px;\"> \n                HOW IT WORKS\n            </p>\n        </div>\n        <div class=\"col-lg-4\" style=\"margin-left: 6.5vw;\">\n            <a class=\"header-link\" style=\"margin-left:2vw; margin-right:2vw;\" (click)=\"onUserClick()\"\n                [ngClass]=\"{'selected': forUsers}\" routerLink='/users'>\n                <span style=\"font-size: 15px; font-family: 'Open Sans', arial, serif; font-weight:600; letter-spacing:1px;\">\n                    FOR USERS\n                </span>\n            </a>\n            <a class=\"header-link\" style=\"margin-left:2vw; margin-right:2vw;\" (click)=\"onBrandClick()\"\n                [ngClass]=\"{'selected': forBrands}\" routerLink='/brands'>\n                <span style=\"font-size: 15px; font-family: 'Open Sans', arial, serif; font-weight:600; letter-spacing:1px;\">\n                    FOR BRANDS\n                </span>\n            </a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<div id=\"features\"></div>\n<hr />"

/***/ }),

/***/ "../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBannerSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainBannerSliderComponent = (function () {
    function MainBannerSliderComponent(modalService) {
        this.modalService = modalService;
    }
    MainBannerSliderComponent.prototype.open = function (content) {
        this.modalService.open(content, { windowClass: 'large-modal' });
    };
    return MainBannerSliderComponent;
}());
MainBannerSliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'hero-slider',
        template: __webpack_require__("../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.template.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewEncapsulation */].None,
        styles: [__webpack_require__("../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.styles.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], MainBannerSliderComponent);

var _a;
//# sourceMappingURL=mainBannerSlider.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".play {\n    position: relative;\n    bottom: 40vh;\n    cursor: pointer;\n}\n\n.large-modal {\n    width: 90vw;\n\n}\n\n.modal-backdrop {\n    background-color: rgba(0,0,0,1) !important;\n}\n\n.large-modal .modal-content {\n    background-color: rgba(0,0,0,.0001);\n    border: none;\n    position: relative;\n    top: 100px;\n    right: 150px;\n    color: white;\n}\n\n.large-modal .close {\n    color: white;   \n}\n\n\n.close {\n    position: relative;\n    bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.template.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div style=\"width: 1000px; height: 560px;\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n            <span >\n                    <i class=\"fa fa-times-circle fa-lg\" style=\"color:#fff\" aria-hidden=\"true\"></i>\n            </span>\n        </button>\n        <iframe class=\"embed-responsive-item\" src=\"https://player.vimeo.com/video/231315057\" \n        width=\"1000\" height=\"560px;\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \n    </div>\n</ng-template>\n\n<div>\n    <img src=\"assets/Syze Banner-01.jpg\" style=\"width: 100vw;\">\n    <div class=\"row justify-content-center\">\n            <a class=\"play\" (click)=\"open(content)\">\n                <img src=\"assets/play-button.svg\" style=\"width: 80px; height:80px;\">\n            </a>\n    </div>\n    \n</div>\n<div id=\"how-it-works\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/Navigation/navigationBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = (function () {
    function NavigationBarComponent() {
        this.yCoord = {
            'home': 0,
            'howWork': 503,
            'features': 1144,
            'whySyze': 2244,
            'contact': 2778
        };
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        // console.log(window.scrollY);
    };
    NavigationBarComponent.prototype.goToHome = function () {
        window.scrollTo(0, this.yCoord.home);
    };
    NavigationBarComponent.prototype.goToWork = function () {
        window.scrollTo(0, this.yCoord.howWork);
    };
    NavigationBarComponent.prototype.goToFeatures = function () {
        window.scrollTo(0, this.yCoord.features);
        // console.log("Features!")
    };
    NavigationBarComponent.prototype.goToWhy = function () {
        window.scrollTo(0, this.yCoord.whySyze);
    };
    NavigationBarComponent.prototype.goToContact = function () {
        window.scrollTo(0, this.yCoord.contact);
    };
    return NavigationBarComponent;
}());
NavigationBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'custom-navbar',
        template: __webpack_require__("../../../../../src/app/Home/Navigation/navigationBar.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Navigation/navigationBar.styles.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationBarComponent);

//# sourceMappingURL=navigationBar.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Navigation/navigationBar.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-word {\n    font-size: 11px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:600; \n    letter-spacing:1px;\n    color: #dfdfdf;\n    text-align: center;\n    cursor: pointer;\n}\n\n.navbar-brand-custom{\n    margin-top: 5px;\n    margin-left: 40px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Navigation/navigationBar.template.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md sticky-top bg-inverse navbar-inverse navbar-custom\">\n        <a class=\"navbar-brand navbar-brand-custom\" href=\"#home\">\n          <img src=\"assets/Just Logo.svg\" height=\"40\" alt=\"\">\n          <span style=\"position:relative; top:5px; font-family:'Roboto'; font-weight:100\">SYZE</span>\n          <span style=\"position:relative; bottom:10px; font-family:'Roboto'; font-size:16px;\"> Beta</span>\n        </a>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"nav navber-nav mr-auto\">\n              <li class =\"nav-item\">\n                <!--<a routerLink=\"management\">Management</a>-->\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item active-custom nav-link-custom\">\n              <a class=\"nav-link nav-link-custom\" style=\"margin-right: 2em;\" (click)=\"goToHome()\"><span class=\"nav-word\">HOME</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" style=\"margin-right: 2em;\" (click)=\"goToWork()\"><span class=\"nav-word\">HOW IT WORKS</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" style=\"margin-right: 2em;\" (click)=\"goToFeatures()\"><span class=\"nav-word\">FEATURES</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link nav-link-custom\" style=\"margin-right: 2em;\" (click)=\"goToWhy()\"><span class=\"nav-word\">WHY SYZE?</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link nav-link-custom\" style=\"margin-right: 4em;\" (click)=\"goToContact()\"><span class=\"nav-word\">CONTACT</span></a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link nav-link-custom\" style=\"margin-right: 4em;\" (click)=\"printY()\"><span class=\"nav-word\">Y COORD</span></a>\n            </li> -->\n          </ul>\n        </div>\n      </nav>"

/***/ }),

/***/ "../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NewsletterSignUpComponent = (function () {
    function NewsletterSignUpComponent() {
    }
    return NewsletterSignUpComponent;
}());
NewsletterSignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'newsletterSignUp',
        template: __webpack_require__("../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.styles.css")]
    })
], NewsletterSignUpComponent);

//# sourceMappingURL=newsletterSignUp.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newsletter-background {\n    width:100vw;\n    height: 300px;\n    background-color: #f8f8f8;\n}\n\n.section-header {\n    font-size: 16px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:4.0px;\n}\n\n.btn {\n    padding: 8px 60px;\n    font-size: 15px;\n    font-family: 'Open Sans', arial, serif;\n    border: 0 none;\n    font-weight: 500;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n}\n\n.custom-input {\n    width: 310px;\n    height: 35px;\n    text-align: center;\n    font-size: 11px;\n    font-family: 'Open Sans', arial, serif;\n    font-weight: 500;\n    letter-spacing: 1px;\n    margin-top: 1vh;\n    margin-bottom: 2vh;\n    color: #000;\n}\n\n.btn.sharp {\n    border-radius:0;\n  }\n\n.btn-send {\n    background: #232323;\n    color: #ffffff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid newsletter-background\">\n    <div class=\"row justify-content-center\">\n        <p class=\"section-header\" style=\"margin-top: 9.5vh;\">KEEP UP TO DATE WITH OUR NEWSLETTER</p>\n    </div>\n    <div class=\"row justify-content-center\">                \n                <input type=\"text\" class=\"custom-input\" id=\"exampleInputPassword1\" placeholder=\"ENTER YOUR EMAIL\">\n    </div>\n    <div class=\"row justify-content-center\">                        \n            <button type=\"submit\" class=\"btn btn-send sharp\">SIGN UP</button>\n    </div>\n    <div id=\"contact\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/Why Syze/whySyze.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhySyzeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WhySyzeComponent = (function () {
    function WhySyzeComponent() {
    }
    return WhySyzeComponent;
}());
WhySyzeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'whySyze',
        template: __webpack_require__("../../../../../src/app/Home/Why Syze/whySyze.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/Why Syze/whySyze.styles.css")]
    })
], WhySyzeComponent);

//# sourceMappingURL=whySyze.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/Why Syze/whySyze.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section-header {\n    font-size: 15px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:400; \n    letter-spacing:5px;\n}\n\n.custom-caption {\n    font-size: 13px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:lighter; \n    letter-spacing:1px;\n    color: #616161;\n    text-align: center;\n    /* color:pink; */\n}\n\n.paragraph-header {\n    font-size: 14px; \n    font-family: 'Open Sans', arial, serif; \n    font-weight:500; \n    letter-spacing:1px;\n    color: #111111;\n    margin-top: 6vh;\n    margin-bottom: 2vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/Why Syze/whySyze.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 15vh; margin-bottom: 15vh;\">\n        <div class=\"row justify-content-center\">\n            <p class=\"section-header\">WHY SYZE?</p>\n        </div>\n        <div class=\"row justify-content-center\" style=\"margin-top: 8vh;\">\n            <div class=\"col-lg-9\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                                <div class=\"col-lg-4\">\n                                    <div class=\"container-fluid\">\n                                        <div class=\"row justify-content-center\">\n                                                <img src=\"assets/shopify_glyph.svg\" style=\" height: 90px;\">\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"paragraph-header\">SIMPLE INTEGRATION</p>\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"custom-caption\">  Get up and running in minutes with our shopify \n                                                        app.  </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-4\">\n                                    <div class=\"container-fluid\">\n                                        <div class=\"row justify-content-center\">\n                                                <img src=\"assets/icons8-Shopping Cart-100.png\" style=\" height: 90px; position: relative; right: 6px;\">\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"paragraph-header\">BOTTOM LINE BOOST</p>\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"custom-caption\">  Reduce returns and increase conversion rates \n                                                        through the precision of Syze.  </p>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-lg-4\">\n                                    <div class=\"container-fluid\">\n                                        <div class=\"row justify-content-center\">\n                                                <img src=\"assets/icons8-User-100.png\" style=\" height: 90px; position: relative; right: 6px;\">\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"paragraph-header\">USER CENTERED</p>\n                                        </div>\n                                        <div class=\"row justify-content-center\">\n                                                <p class=\"custom-caption\">  We believe people come first, Syze is the simplest \n                                                        and most personal sizing tool allowing you to build \n                                                        close consumer relationships that last.  </p>\n                                        </div>\n                                    </div>\n                                </div>\n                        </div>\n                    </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/Home/home.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/home.styles.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/home.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Home/home.template.html":
/***/ (function(module, exports) {

module.exports = "<custom-navbar></custom-navbar>\n<hero-slider id=\"home\"></hero-slider>\n<howItWorks ></howItWorks>\n<features ></features>\n<aibanner ></aibanner>\n<whySyze ></whySyze>\n<newsletterSignUp></newsletterSignUp>\n<contactForm ></contactForm>\n<custom-footer></custom-footer>"

/***/ }),

/***/ "../../../../../src/app/Not Found/notFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'not-found',
        template: __webpack_require__("../../../../../src/app/Not Found/notFound.template.html"),
        styles: [__webpack_require__("../../../../../src/app/Not Found/notFound.styles.css")]
    })
], NotFoundComponent);

//# sourceMappingURL=notFound.component.js.map

/***/ }),

/***/ "../../../../../src/app/Not Found/notFound.styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Not Found/notFound.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <h4>PAge Not Found!</h4>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<home></home>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Home_Ai_Banner_aiBanner_component__ = __webpack_require__("../../../../../src/app/Home/Ai Banner/aiBanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_Contact_Form_contactForm_component__ = __webpack_require__("../../../../../src/app/Home/Contact Form/contactForm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Home_Features_features_component__ = __webpack_require__("../../../../../src/app/Home/Features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Home_Footer_footer_component__ = __webpack_require__("../../../../../src/app/Home/Footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Home_How_It_Works_howItWorks_component__ = __webpack_require__("../../../../../src/app/Home/How It Works/howItWorks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Home_How_It_Works_For_Users_forUsers_component__ = __webpack_require__("../../../../../src/app/Home/How It Works/For Users/forUsers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Home_How_It_Works_For_Brands_forBrands_component__ = __webpack_require__("../../../../../src/app/Home/How It Works/For Brands/forBrands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Home_Main_Banner_Slider_mainBannerSlider_component__ = __webpack_require__("../../../../../src/app/Home/Main Banner Slider/mainBannerSlider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Home_Navigation_navigationBar_component__ = __webpack_require__("../../../../../src/app/Home/Navigation/navigationBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Home_Newsletter_Sign_Up_newsletterSignUp_component__ = __webpack_require__("../../../../../src/app/Home/Newsletter Sign Up/newsletterSignUp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Home_Why_Syze_whySyze_component__ = __webpack_require__("../../../../../src/app/Home/Why Syze/whySyze.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Not_Found_notFound_component__ = __webpack_require__("../../../../../src/app/Not Found/notFound.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Import Modules




// Import Components














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__Home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__Home_Ai_Banner_aiBanner_component__["a" /* AiBannerComponent */], __WEBPACK_IMPORTED_MODULE_7__Home_Contact_Form_contactForm_component__["a" /* ContactFormComponent */], __WEBPACK_IMPORTED_MODULE_8__Home_Features_features_component__["a" /* FeaturesComponent */], __WEBPACK_IMPORTED_MODULE_9__Home_Footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_10__Home_How_It_Works_howItWorks_component__["a" /* HowItWorksComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Home_Main_Banner_Slider_mainBannerSlider_component__["a" /* MainBannerSliderComponent */], __WEBPACK_IMPORTED_MODULE_14__Home_Navigation_navigationBar_component__["a" /* NavigationBarComponent */], __WEBPACK_IMPORTED_MODULE_15__Home_Newsletter_Sign_Up_newsletterSignUp_component__["a" /* NewsletterSignUpComponent */], __WEBPACK_IMPORTED_MODULE_16__Home_Why_Syze_whySyze_component__["a" /* WhySyzeComponent */], __WEBPACK_IMPORTED_MODULE_11__Home_How_It_Works_For_Users_forUsers_component__["a" /* ForUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Home_How_It_Works_For_Brands_forBrands_component__["a" /* ForBrandsComponent */], __WEBPACK_IMPORTED_MODULE_17__Not_Found_notFound_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* RoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_How_It_Works_For_Users_forUsers_component__ = __webpack_require__("../../../../../src/app/Home/How It Works/For Users/forUsers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home_How_It_Works_For_Brands_forBrands_component__ = __webpack_require__("../../../../../src/app/Home/How It Works/For Brands/forBrands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Not_Found_notFound_component__ = __webpack_require__("../../../../../src/app/Not Found/notFound.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Import Modules





var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__Home_How_It_Works_For_Users_forUsers_component__["a" /* ForUsersComponent */] },
    { path: 'brands', component: __WEBPACK_IMPORTED_MODULE_3__Home_How_It_Works_For_Brands_forBrands_component__["a" /* ForBrandsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__Not_Found_notFound_component__["a" /* NotFoundComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], RoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
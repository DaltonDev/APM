"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import keyword {Member name} from Angular library module name
var core_1 = require("@angular/core");
//Import the service
var product_service_1 = require("./products/product.service");
//Component metadata
//Decorators (@) adds metadata to a class or its method arguments
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "Acme Product Management";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "         <!--template is the layout for the view-->\n    <div>\n      <nav class='navbar navbar-default'>\n        <div class='container-fluid'>\n          <a class=\"navbar-brand\">{{pageTitle}}</a>\n          <ul class=\"nav navbar-nav\">\n            <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n            <li><a [routerLink]=\"['/products']\">Product List</a></li>\n          </ul>\n        </div>\n      </nav>\n      <div class=\"container\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    ",
        providers: [product_service_1.ProductService]
    })
    //First simple class that has a name (pageTitle) and a strong type (string)
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
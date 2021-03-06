"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var article_service_1 = require('../../services/article.service');
var ParentComponent = (function () {
    function ParentComponent(articleService, location, router) {
        this.articleService = articleService;
        this.location = location;
        this.router = router;
        this.title = "Codin' for the hack of it";
        router.events.subscribe(function (val) { return console.log('parent routing event occurred'); });
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent.prototype.onSelect = function (article) {
        this.articleService.setSelectedArticle(article);
        this.articleService.getContent(article.name);
    };
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: 'parent.component.html',
            styleUrls: ['parent.component.css']
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, common_1.Location, router_1.Router])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map
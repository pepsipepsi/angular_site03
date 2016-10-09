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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//import { ARTICLES } from '../model/mock-articles';
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.articles = [];
        this.content = "";
        this.getArticles();
        this.selectedArticle = {
            "name": "article014",
            "title": "Presenting Kotlin",
            "img": "images/kotlin.jpg",
            "img_alt": "The twelfth post image"
        };
        console.log(this.getContent(this.selectedArticle.name));
    }
    ArticleService.prototype.getArticles = function () {
        var _this = this;
        this.http.get('model/data_map.json').subscribe(function (res) {
            (_a = _this.articles).push.apply(_a, res.json());
            var _a;
        });
        return this.articles;
    };
    ArticleService.prototype.getContent = function (myFilename) {
        var _this = this;
        console.log('the address is : ' + 'model/articles/markdown/' + myFilename + '.md');
        this.http.get('model/articles/markdown/' + myFilename + '.md').subscribe(function (res) { return _this.content = res.text(); });
        return this.content;
    };
    ArticleService.prototype.setSelectedArticle = function (newArticle) {
        this.selectedArticle = newArticle;
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map
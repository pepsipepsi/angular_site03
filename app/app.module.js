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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var parent_component_1 = require('./components/parent.component/parent.component');
var content_component_1 = require('./components/content.component/content.component');
var article_service_1 = require('./services/article.service');
var markdownpipe_pipe_1 = require('./services/markdownpipe.pipe');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: content_component_1.ContentComponent },
    { path: 'articles/:id', component: content_component_1.ContentComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes)
            ],
            declarations: [
                parent_component_1.ParentComponent,
                content_component_1.ContentComponent,
                markdownpipe_pipe_1.MarkdownPipe
            ],
            providers: [
                article_service_1.ArticleService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [parent_component_1.ParentComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
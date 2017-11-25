var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App;
(function (App) {
    var ContentService = (function (_super) {
        __extends(ContentService, _super);
        function ContentService(url, baseRepository, q) {
            return _super.call(this, baseRepository, q, url.content) || this;
        }
        return ContentService;
    }(App.BaseService));
    ContentService.$inject = ["UrlService", "BaseRepository", "$q"];
    App.ContentService = ContentService;
    angular.module('app').service('ContentService', ContentService);
})(App || (App = {}));
//# sourceMappingURL=ContentService.js.map
module Cms.Controllers {
    export interface IMainControllerScope extends ng.IScope {
        message: string;
    }

    export class MainController {
        $scope: Cms.Controllers.IMainControllerScope;

        constructor($scope: Cms.Controllers.IMainControllerScope) {
            this.$scope = $scope;
            this.$scope.message = "Hello from main controller";
        }
    }
}


angular.module("cms.mainCtrl", []).controller("mainCtrl", ["$scope", function ($scope: Cms.Controllers.IMainControllerScope) {
    return new Cms.Controllers.MainController($scope);
}]);
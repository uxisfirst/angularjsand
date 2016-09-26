import * as angular from 'angular';

export interface Born {
  year: number;
  month: number;
  day: number;
}

export interface BaseScope extends angular.IScope {
  from: string;
  nickname: string;
  born: Born;
}

export class BaseController {
  constructor(public $scope: BaseScope, public $rootScope: angular.IRootScopeService) {
    this.$scope.from = "Tokyo";
    this.$scope.nickname = "ko";
    this.$scope.born = {
      year: 1984,
      month: 8,
      day: 5,
    };
  }
}
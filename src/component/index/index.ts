/// <reference path="../../require.d.ts" />

import * as angular from 'angular';

import { BaseScope, BaseController } from '../../common/base';

export class TestController extends BaseController {
  name: string;
  age: number;

  constructor(public $scope: BaseScope, $rootScope: angular.IRootScopeService) {
    super($scope, $rootScope);
  }

  $onInit(): void {
  }
}

export let testComponent = {
  template: require('./index.html'),
  controller: ["$scope", "$rootScope", TestController],
  bindings: {
    name: "@",
    age: "@",
  }
}
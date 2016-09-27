import * as angular from 'angular';
import 'angular-mocks';

import { TestController } from '../../../src/component/index';
import { BaseScope } from '../../../src/common/base'

describe('index test', () => {
  let $injector: angular.auto.IInjectorService;
  let $componentController: angular.IComponentControllerService;
  let controller: TestController;
  let scope: BaseScope;
  let rootScope: angular.IRootScopeService;

  interface testBindings {
    name: string;
    age: number;
  }

  let bindings: testBindings;

  beforeEach(() => {
    angular.mock.module('myApp');
  });

  beforeEach(() => {
    $injector = angular.injector(['ngMock']);
    $componentController = $injector.get<angular.IComponentControllerService>("$componentController");
    rootScope = $injector.get<angular.IRootScopeService>("$rootScope");
    scope = <any>rootScope.$new();
  })

  it('true is true', () => {
    expect(true).toBe(true);
  });

  it('component: test', () => {
    bindings = { name: 'ko', age: 32 };
    controller = $componentController<TestController, testBindings>('test', { $scope: scope, "$rootScope": rootScope }, bindings);

    expect(controller.name).toBe('ko');
    expect(controller.age).toBe(32);
  });
});
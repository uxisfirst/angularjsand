import * as angular from 'angular';
import 'angular-mocks';

import { TestController } from '../../../src/component/index';

describe('index test', () => {
  let $injector: angular.auto.IInjectorService;
  let $componentController: angular.IComponentControllerService;
  let controller: TestController;

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
  })

  it('true is true', () => {
    expect(true).toBe(true);
  });

  it('component: test', () => {
    bindings = { name: 'ko', age: 32 };
    controller = $componentController<TestController, testBindings>('test', { $scope: angular.IScope, "$rootScope": angular.IRootScopeService }, bindings);

    expect(controller.name).toBe('ko');
    expect(controller.age).toBe(32);
  });
});
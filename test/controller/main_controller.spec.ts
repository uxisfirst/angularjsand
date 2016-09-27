import * as angular from 'angular';
import 'angular-mocks';

import { MainController } from '../../src/controller/main_controller';

describe('main contoller test', () => {
  let $injector: angular.auto.IInjectorService;
  let $controller: angular.IControllerService;

  let controller: MainController;
  let scope: angular.IScope;

  beforeEach(() => {
    angular.mock.module('myController');
  })

  beforeEach(() => {
    $injector = angular.injector(['ngMock']);
    $controller = $injector.get<angular.IControllerService>('$controller');
    let rootScope = $injector.get<angular.IRootScopeService>('$rootScope');
    scope = <any>rootScope.$new();
  });

  it('initialize controller', () => {
    controller = $controller(MainController, { $scope: scope });

    expect(controller.text).toBeDefined();
    expect(controller.text).toBe('This is main controller');
  });
});
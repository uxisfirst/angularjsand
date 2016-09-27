import * as angular from 'angular';
import 'angular-mocks';

import { TestController } from '../../../src/component/index';
import { BaseScope } from '../../../src/common/base'

describe('index test', () => {
    let $injector: angular.auto.IInjectorService;
    let $controller: angular.IControllerService;
    let controller: TestController;
    let scope: BaseScope;
    let rootScope: angular.IRootScopeService;

    interface testBindings {
        name: string;
        age: number;
    }

    let bindings: testBindings;

    beforeEach(() => {
        angular.mock.module('myComponent');
    });

    beforeEach(() => {
        $injector = angular.injector(['ngMock']);
        $controller = $injector.get<angular.IControllerService>("$controller");
        rootScope = $injector.get<angular.IRootScopeService>("$rootScope");
        scope = <any>rootScope.$new();
    })

    it('true is true', () => {
        expect(true).toBe(true);
    });

    it('component: test', () => {
        bindings = { name: 'ko', age: 32 };
        controller = $controller(TestController, { $scope: scope, "$rootScope": rootScope }, bindings);

        expect(controller.name).toBe('ko');
        expect(controller.age).toBe(32);
    });
});
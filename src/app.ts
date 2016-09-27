import * as angular from 'angular';

import { testComponent } from './component/index';
import { MainController } from './controller/main_controller';

angular.module('myApp', ['myController']);

angular.module('myApp')
  .component('test', testComponent);

angular.module('myController', [])
  .controller('MainController', MainController);
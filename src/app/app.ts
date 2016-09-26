import * as angular from 'angular';

import { testComponent } from './component/index';

angular.module('myApp', [])
  .component('test', testComponent);
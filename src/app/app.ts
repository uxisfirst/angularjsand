import * as angular from 'angular';

import { testComponent } from './component/test';

angular.module('myApp', [])
  .component('test', testComponent);
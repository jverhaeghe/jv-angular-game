'use strict';

angular.module('jvAngularGame.version', [
  'jvAngularGame.version.interpolate-filter',
  'jvAngularGame.version.version-directive'
])

.value('version', '0.1');

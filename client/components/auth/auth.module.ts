'use strict';

angular.module('fleeytApp.auth', [
  'fleeytApp.constants',
  'fleeytApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

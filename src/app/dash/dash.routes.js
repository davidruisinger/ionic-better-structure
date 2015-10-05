(function() {
	'use strict';

	angular
		.module('app.dash')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('tab.dash', {
			url: '/dash',
			views: {
				'tab-dash': {
					templateUrl: 'app/dash/dash.html',
					controller: 'DashController as vm'
				}
			}
		});
	}
})();

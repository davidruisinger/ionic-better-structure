(function() {
	'use strict';

	angular
		.module('app.account')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('tab.account', {
			url: '/account',
			views: {
				'tab-account': {
					templateUrl: 'app/account/account.html',
					controller: 'AccountController as vm'
				}
			}
		});
	}
})();

(function() {
	'use strict';
	
	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {
		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider

		// setup an abstract state for the tabs directive
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'app/layout/tabs.html'
		})

		// Each tab has its own nav history stack:

		.state('tab.dash', {
			url: '/dash',
			views: {
				'tab-dash': {
					templateUrl: 'app/dash/dash.html',
					controller: 'DashController as vm'
				}
			}
		})

		.state('tab.chats', {
			url: '/chats',
			views: {
				'tab-chats': {
					templateUrl: 'app/chats/chats.html',
					controller: 'ChatsController as vm'
				}
			}
		})
		.state('tab.chat-detail', {
			url: '/chats/:chatId',
			views: {
				'tab-chats': {
					templateUrl: 'app/chats/chat-detail.html',
					controller: 'ChatDetailController as vm'
				}
			}
		})

		.state('tab.account', {
			url: '/account',
			views: {
				'tab-account': {
					templateUrl: 'app/account/account.html',
					controller: 'AccountController as vm'				}
			}
		});

  		// if none of the above states are matched, use this as the fallback
  		$urlRouterProvider.otherwise('/tab/dash');
	}

})();
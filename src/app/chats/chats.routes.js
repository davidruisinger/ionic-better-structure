(function() {
	'use strict';

	angular
		.module('app.chats')
		.config(routes);

	routes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function routes($stateProvider, $urlRouterProvider) {
		$stateProvider

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
		});
	}
})();

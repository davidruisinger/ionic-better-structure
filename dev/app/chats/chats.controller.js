(function() {
	'use strict';

	angular
		.module('app')
		.controller('ChatsController', ChatsController);

	ChatsController.$inject = ['ChatsService'];

	/* @ngInject */
	function ChatsController(ChatsService) {
		var vm = this;
		vm.chats = ChatsService.all();
		vm.remove = remove;

		activate();

		////////////////

		function activate() {
		}

		function remove(chat) {
			ChatsService.remove(chat);
		}
	}
})();
(function() {
    'use strict';

    angular
    .module('app.chats')
    .controller('ChatsController', ChatsController);

    ChatsController.$inject = ['ChatsService'];

    /* @ngInject */
    function ChatsController(ChatsService) {
        var vm = this;
        vm.chats = [];
        vm.remove = remove;

        activate();

        ////////////////

        function activate() {
            vm.chats = ChatsService.all();
        }

        function remove(chat) {
            ChatsService.remove(chat);
        }
    }
})();

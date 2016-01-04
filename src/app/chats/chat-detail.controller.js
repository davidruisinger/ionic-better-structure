(function() {
    'use strict';

    angular
    .module('app.chats')
    .controller('ChatDetailController', ChatDetailController);

    ChatDetailController.$inject = ['$stateParams', 'ChatsService'];

    /* @ngInject */
    function ChatDetailController($stateParams, ChatsService) {
        var vm = this;
        vm.chat = ChatsService.get($stateParams.chatId);

        activate();

        ////////////////

        function activate() {
        }
    }
})();

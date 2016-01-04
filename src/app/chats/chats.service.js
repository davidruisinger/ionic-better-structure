(function() {
    'use strict';

    angular
    .module('app.chats')
    .factory('ChatsService', chatsService);

    chatsService.$inject = [];

    // Some fake testing data
    var chats = [
        {
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'images/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'images/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'images/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'images/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'images/mike.png'
        }
    ];

    /* @ngInject */
    function chatsService() {
        var service = {
            all: all,
            remove: remove,
            get: get
        };
        return service;

        ////////////////

        function all() {
            // Might use a resource here that returns a JSON array
            return chats;
        }

        function remove(chat) {
            chats.splice(chats.indexOf(chat), 1);
        }

        function get(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    }
})();

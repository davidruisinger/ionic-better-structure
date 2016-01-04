(function() {
    'use strict';

    angular
    .module('app.account')
    .controller('AccountController', AccountController);

    AccountController.$inject = [];

    /* @ngInject */
    function AccountController() {
        var vm = this;
        vm.settings = {
            enableFriends: true
        };

        activate();

        ////////////////

        function activate() {
        }
    }
})();

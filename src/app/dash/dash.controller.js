(function() {
    'use strict';

    angular
    .module('app.dash')
    .controller('DashController', DashController);

    DashController.$inject = [];

    /* @ngInject */
    function DashController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
        }
    }
})();

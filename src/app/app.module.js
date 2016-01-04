(function() {
    'use strict';

    angular
    .module('app', [
        /* Shared modules */
        'ionic',
        'app.core',

        /* Feature areas */
        'app.account',
        'app.chats',
        'app.dash'
    ]);
})();

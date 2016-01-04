/* jshint -W117, -W030 */
describe('ChatsController', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.chats'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('ChatsController', {$scope: $scope});
    }));

    describe('Chats controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });

        describe('after activate', function() {

            it ('should have at least one chat', function() {
                expect($controller.chats.length).toBeGreaterThan(0);
            });
        });
    });

});

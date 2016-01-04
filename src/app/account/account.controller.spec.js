/* jshint -W117, -W030 */
describe('AccountController', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.account'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('AccountController', {$scope: $scope});
    }));

    describe('Account controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });

        describe('after activate', function() {

            it('should have enabled friends to be true', function() {
                expect($controller.settings.enableFriends).toEqual(true);
            });
        });
    });

});

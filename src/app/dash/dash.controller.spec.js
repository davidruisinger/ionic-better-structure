/* jshint -W117, -W030 */
describe('DashController', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.dash'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_) {
        var $scope = {};
        $controller = _$controller_('DashController', {$scope: $scope});
    }));

    describe('Dash controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });
    });

});

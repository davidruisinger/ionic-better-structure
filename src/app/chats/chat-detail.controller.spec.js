/* jshint -W117, -W030 */
describe('ChatDetailController', function() {
    var $controller;

    // Load the module for the account
    beforeEach(module('app.chats'));

    // Instantiate the controller and mocks for every test
    beforeEach(inject(function(_$controller_, _$stateParams_) {
        var $scope = {};
        $controller = _$controller_('ChatDetailController', {$scope: $scope});
        $stateParams = _$stateParams_;
        $stateParams.chatId = 1;
    }));

    describe('Chat-Detail controller', function() {

        it ('should be created successully', function() {
            expect($controller).toBeDefined();
        });

        describe('after activate', function() {

            it('should have the Chat with Max loaded', function() {
                var oneChat = {
                    name: 'Max Lynx'
                };

                expect($controller.chat.name).toEqual(oneChat.name);
            });
        });
    });

});

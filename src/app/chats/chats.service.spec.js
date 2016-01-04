/* jshint -W117, -W030 */
describe('ChatsService', function() {
    var ChatsService;
    beforeEach(module('app.chats'));

    beforeEach(inject(function (_ChatsService_) {
        ChatsService = _ChatsService_;
    }));

    it('should be available', inject(function(ChatsService) {
        expect(ChatsService).toBeDefined();
    }));

    it('returns 5 chats', inject(function(ChatsService) {
        expect(ChatsService.all().length).toEqual(5);
    }));

    it('has 4 chats when removing the first', inject(function(ChatsService) {
        var firstChat = ChatsService.get(0);
        ChatsService.remove(firstChat);

        expect(ChatsService.all().length).toEqual(4);
    }));

    it('has Max as chat name with id 1', inject(function(ChatsService) {
        var oneChat = {
            name: 'Max Lynx'
        };

        expect(ChatsService.get(1).name).toEqual(oneChat.name);
    }));
});

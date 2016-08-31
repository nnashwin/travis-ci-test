var request = require('supertest');

describe('RedeemController', function () {
    describe('#setup()', function () {
        it('should redirect to login', function (done) {
            request(sails.hooks.http.app)
                .get('/tw/redeemTW/starter')
                .expect(302)
                .expect('location','/tw/login?from=redeemTW/starter', done);
        });
    });
});

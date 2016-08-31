var request = require('supertest');
var Cookies;

describe('PurchaseController', function () {
    describe('#setup()', function () {
        it('should redirect to login', function (done) {
            request(sails.hooks.http.app)
                .get('/en-hk/purchase/198')
                .expect(302)
                .expect('location','/en-hk/login?from=purchase/198', done);
        });

        it('should redirect to login', function (done) {
            request(sails.hooks.http.app)
                .get('/tw/purchase/184')
                .expect(302)
                .expect('location','/tw/login?from=purchase/184', done);
        });
    });

    // describe('#setup()', function () {
    //     before(function() {
    //       request(sails.hooks.http.app)
    //         .post('http://dev.appedu.co/api/v2/login')
    //         .send({account: 'sohail@snapask.co', password: 'snapask'})
    //         .expect(200)
    //         .end(function(err, res) {
    //           Cookies = res.headers['set-cookie'].pop().split(';')[0];
    //         })
    //     });
    //
    //     it('should redirect to login', function (done) {
    //         request(sails.hooks.http.app)
    //             .get('/en-hk/purchase/198')
    //             .expect(302)
    //             .expect('location','/en-hk/login?from=purchase/198', done);
    //     });
    //
    //     it('should redirect to login', function (done) {
    //         request(sails.hooks.http.app)
    //             .get('/tw/purchase/184')
    //             .expect(302)
    //             .expect('location','/tw/login?from=purchase/184', done);
    //     });
    // });
});

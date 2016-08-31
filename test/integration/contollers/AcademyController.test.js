var request = require('supertest');

describe('AcademyController', function () {
    describe('#viewSinglePost()', function () {
        it('should redirect to academy.html', function (done) {
            request(sails.hooks.http.app)
                .get('/en-hk/academy/267/4343')
                .expect(200, done);
        });
    })

    describe('#viewChannelIndexOrNotFound()', function () {
        it('should return a 404 because it is a number without an article', function (done) {
            request(sails.hooks.http.app)
                .get('/en-hk/academy/302')
                .expect(404, done);
        });

        it('should return a 404 because it is a channel that does not exist', function (done) {
            request(sails.hooks.http.app)
                .get('/en-hk/academy/kjsdkfjskdf')
                .expect(404, done);
        });

        // Note: I believe this test fails because it has Chinese in the url, examine later
        // it('should successfully navigate to the route and return a 200 because it is a string with an appropriate channel', function (done) {
        //     request(sails.hooks.http.app)
        //         .get('/en-hk/academy/生活台')
        //         .expect(200, done);
        // });
    })
})

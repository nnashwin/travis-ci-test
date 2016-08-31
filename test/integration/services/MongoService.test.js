var request = require('supertest');
var assert = require('assert');
var MongoService = require('../../../api/services/MongoService.js');

describe('MongoService', function () {
    describe('#getArticleJson', function () {
        it ('should return a promise', function () {
            var promise = MongoService.getArticleJson('/api/v1/get_post', '/236/title-of-article');
            assert.equal(typeof promise.then, 'function');
        });

        it ('should return a post with the same id as the request', function () {
            var postId = 236;
            return MongoService.getArticleJson('/api/v1/get_post', {post_id: postId}).then(function(val) {
                var response = JSON.parse(val.body).response;
                assert.equal(response.post_id, postId);
            });
        });
    });

    describe('#getChannels', function () {
        it('should return a json object', () => {
            var locale = 'hk'
            return MongoService.getChannels(locale).then((val) => {
                assert.equal(typeof val, 'object');
            });
        });

        it('should return a json object that is not empty', () => {
            var locale = 'hk'
            return MongoService.getChannels(locale).then((chanObj) => {
                assert.equal(Object.getOwnPropertyNames(chanObj).length > 0, true);
            });
        });
    });
});

var request = require('supertest');
var assert = require('assert');
var LocaleService = require('../../../api/services/LocaleService.js');

describe('LocaleService', function () {
    describe('#getLocale', function () {
        it ('should return a string with the value tw', function () {
            var locale = 'tw';
            var val = LocaleService.getLocale(locale);
            assert(val === 'tw', 'Locale is TW');
        });

        it ('should return a string with the value hk', function () {
            var locale = 'en-hk';
            var val = LocaleService.getLocale(locale);
            assert(val === 'hk', 'Locale is HK');
        });
    });
});

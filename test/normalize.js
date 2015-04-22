var assert = require('assert');
var path = require('../lib/main');

suite('Normalize', function() {
    test('should conform to the original specification', function () {
        [
            { input: '/foo/bar//baz/asdf/quux/..', output: '/foo/bar/baz/asdf' },
            { input: '/foo/bar//baz/asdf/', output: '/foo/bar/baz/asdf/' },
            { input: '/foo/bar///baz/asdf/', output: '/foo/bar/baz/asdf/' },
            { input: '/foo/bar/baz/asdf', output: '/foo/bar/baz/asdf' }
        ].forEach(function (data) {
            assert.equal(path.normalize(data.input), data.output);
        });
    });

    test('should handle URLs', function () {
       [
            { input: 'http://foo/bar//baz/asdf/quux/..', output: 'http://foo/bar/baz/asdf' },
            { input: 'http:///foo/bar//baz/asdf/', output: 'http://foo/bar/baz/asdf/' },
            { input: 'http:///foo/bar///baz/asdf/', output: 'http://foo/bar/baz/asdf/' },
            { input: 'http:///foo/bar/baz/asdf', output: 'http://foo/bar/baz/asdf' }
        ].forEach(function (data) {
            assert.equal(path.normalize(data.input), data.output);
        }); 
    });
});

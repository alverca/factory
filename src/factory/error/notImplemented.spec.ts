/**
 * NotImplementedErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import NotImplementedError from './notImplemented';

describe('new NotImplementedError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new NotImplementedError(message);
        assert(error instanceof Error);
        assert.equal(error.message, message);
        assert.equal(error.name, 'SmartTheaterError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new NotImplementedError();
        assert(error instanceof Error);
        assert.equal(error.name, 'SmartTheaterError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

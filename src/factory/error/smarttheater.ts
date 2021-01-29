// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';

/**
 * SmartTheaterエラー
 */
export class SmartTheaterError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);

        this.name = 'SmartTheaterError';
        this.reason = code;

        setPrototypeOf(this, SmartTheaterError.prototype);
    }
}

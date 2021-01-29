// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * RateLimitExceededError
 * @class RateLimitExceededError
 * @extends {SmartTheaterError}
 */
export default class RateLimitExceededError extends SmartTheaterError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Rate limit exceeded.';
        }

        super(ErrorCode.RateLimitExceeded, message);

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}

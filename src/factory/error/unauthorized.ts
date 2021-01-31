// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * UnauthorizedError
 */
export default class UnauthorizedError extends SmartTheaterError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Unauthorized.';
        }

        super(ErrorCode.Unauthorized, message);

        setPrototypeOf(this, UnauthorizedError.prototype);
    }
}

// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * NotImplementedError
 */
export default class NotImplementedError extends SmartTheaterError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Method is not yet implemented.';
        }

        super(ErrorCode.NotImplemented, message);

        setPrototypeOf(this, NotImplementedError.prototype);
    }
}

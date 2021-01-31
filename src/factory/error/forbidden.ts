// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * ForbiddenError
 */
export default class ForbiddenError extends SmartTheaterError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Forbidden.';
        }

        super(ErrorCode.Forbidden, message);

        setPrototypeOf(this, ForbiddenError.prototype);
    }
}

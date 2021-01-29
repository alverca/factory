// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * ServiceUnavailableError
 *
 * @class ServiceUnavailableError
 * @extends {SmartTheaterError}
 */
export default class ServiceUnavailableError extends SmartTheaterError {
    constructor(message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = 'Service unavailable temporarily.';
        }

        super(ErrorCode.ServiceUnavailable, message);

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}

// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * ArgumentError
 *
 * @class ArgumentError
 * @extends {SmartTheaterError}
 */
export default class ArgumentError extends SmartTheaterError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `Invalid or missing argument supplied: ${argumentName}.`;
        }

        super(ErrorCode.Argument, message);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentError.prototype);
    }
}

// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { SmartTheaterError } from './smarttheater';

/**
 * NotFoundError
 */
export default class NotFoundError extends SmartTheaterError {
    public readonly entityName: string;

    constructor(entityName: string, message?: string) {
        if (message === undefined || message.length === 0) {
            // tslint:disable-next-line:no-parameter-reassignment
            message = `Not Found: ${entityName}.`;
        }

        super(ErrorCode.NotFound, message);

        this.entityName = entityName;

        setPrototypeOf(this, NotFoundError.prototype);
    }
}

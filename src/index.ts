/**
 * index module
 */
import * as cinerino from '@cinerino/factory';

import * as OrderReportFactory from './factory/report/order';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import chevre = cinerino.chevre;
export import errors = errors;
export import errorCode = ErrorCode;
export namespace report {
    export import order = OrderReportFactory;
}
export import sortType = cinerino.sortType;

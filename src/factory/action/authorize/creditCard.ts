import { actionType } from '@cinerino/factory';

import * as GMO from '@motionpicture/gmo-service';

import { ActionStatusType, IParticipant } from '../../action';
import { IExtendId } from '../../autoGenerated';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = IParticipant;
export type IRecipient = IParticipant;

/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    transactionId: string;
    orderId: string;
    amount: number;
    method: GMO.utils.util.Method;
    payType: GMO.utils.util.PayType;
}

export interface IResult {
    price: number;
    entryTranArgs: GMO.services.credit.IEntryTranArgs;
    execTranArgs: GMO.services.credit.IExecTranArgs;
    execTranResult: GMO.services.credit.IExecTranResult;
}

/**
 * GMOオーソリインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes {
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    startDate: Date;
    endDate?: Date;
}): IAttributes {
    return {
        actionStatus: params.actionStatus,
        typeOf: actionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.CreditCard
        },
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}

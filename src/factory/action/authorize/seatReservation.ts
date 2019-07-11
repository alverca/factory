import { actionType, propertyValue } from '@cinerino/factory';

import { ActionStatusType, IParticipant } from '../../action';
import { IExtendId } from '../../autoGenerated';
import { IMultilingualString } from '../../multilingualString';
import { IAcceptedOffer as ISeatReservationAcceptedOffer } from '../../offer/seatReservation';
import { IPerformanceWithDetails } from '../../performance';
import * as AuthorizeActionFactory from '../authorize';

import * as chevre from '../../../chevre';

export type IAgent = IParticipant;
export type IRecipient = IParticipant;

/**
 * 仮予約インターフェース
 */
export interface ITmpReservation {
    reservedTicket: chevre.reservation.ITicket<chevre.reservationType.EventReservation>;
    additionalTicketText: string;
    reservationNumber: string;
    additionalProperty?: propertyValue.IPropertyValue<string>[];

    transaction: string;
    seat_code: string;
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    charge: number;
    watcher_name: string;
}

/**
 * 認可アクション結果
 */
export interface IResult {
    /**
     * 承認価格
     */
    price: number;
    /**
     * 仮予約リスト
     */
    tmpReservations: ITmpReservation[];
}

/**
 * 認可アクション対象
 */
export interface IObject {
    transactionId: string;
    performance: IPerformanceWithDetails;
    offers: ISeatReservationAcceptedOffer[];
}

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約認可アクションインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes {
    result?: IResult;
    object: IObject;
}

export type IAction = IExtendId<IAttributes>;

/**
 * create seatReservation authorize action object
 */
export function createAttributes(params: {
    agent: IAgent;
    recipient: IRecipient;
    actionStatus: ActionStatusType;
    startDate: Date;
    endDate?: Date;
    object: IObject;
    result?: IResult;
    error?: IError;
}): IAttributes {
    return {
        actionStatus: params.actionStatus,
        typeOf: actionType.AuthorizeAction,
        purpose: {
            typeOf: AuthorizeActionFactory.AuthorizeActionPurpose.SeatReservation
        },
        object: params.object,
        result: params.result,
        error: params.error,
        agent: params.agent,
        recipient: params.recipient,
        startDate: params.startDate,
        endDate: params.endDate
    };
}

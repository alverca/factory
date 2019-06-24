/**
 * 座席予約承認アクションファクトリー
 */
import { ActionStatusType, ActionType, IParticipant } from '../../action';
import { IExtendId } from '../../autoGenerated';
import { IBilingualString, IMultilingualString } from '../../multilingualString';
import { IAcceptedOffer as ISeatReservationAcceptedOffer, ITicketTypeExtension } from '../../offer/seatReservation';
import { IPerformanceWithDetails } from '../../performance';
import { IPropertyValue } from '../../propertyValue';
import { ReservationStatusType } from '../../reservationStatusType';
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
    additionalProperty?: IPropertyValue<string>[];

    transaction: string;
    /**
     * 完了後の予約ステータス
     */
    status_after: ReservationStatusType;
    seat_code: string;
    seat_grade_name: IBilingualString;
    seat_grade_additional_charge: number;
    ticket_type: string;
    ticket_type_name: IMultilingualString;
    ticket_type_charge: number;
    charge: number;
    watcher_name: string;
    // ticket_cancel_charge: ITicketCancelCharge[];
    ticket_ttts_extension: ITicketTypeExtension;
    rate_limit_unit_in_seconds: number;
    payment_no: string;
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
        typeOf: ActionType.AuthorizeAction,
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

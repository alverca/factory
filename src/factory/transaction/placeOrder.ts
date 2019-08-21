import * as cinerino from '@cinerino/factory';
import * as GMO from '@motionpicture/gmo-service';

import { IExtendId } from '../autoGenerated';
import { IOrder } from '../order';

export type IAuthorizeAction = cinerino.action.authorize.IAction<cinerino.action.authorize.IAttributes<any, any>>;

/**
 * クレジットカード売上結果
 */
export type ICreditCardSales = GMO.services.credit.IAlterTranResult;

export import ICustomerProfile = cinerino.transaction.placeOrder.ICustomerProfile;
export import ISeller = cinerino.transaction.placeOrder.ISeller;
export import IAgent = cinerino.transaction.placeOrder.IAgent;
export import IError = cinerino.transaction.placeOrder.IError;
export import IObject = cinerino.transaction.placeOrder.IObject;

/**
 * 取引結果インターフェース
 */
export interface IResult extends cinerino.transaction.IResult<cinerino.transactionType.PlaceOrder> {
    /**
     * 注文データ
     */
    order: IOrder;
    /**
     * GMO売上結果
     */
    creditCardSales?: ICreditCardSales;
}

/**
 * 注文取引インターフェース
 */
export interface IAttributes extends cinerino.transaction.IAttributes<cinerino.transactionType.PlaceOrder> {
    /**
     * 取引の結果発生するもの
     */
    result?: IResult;
}

export type ITransaction = IExtendId<IAttributes>;

export type ISearchConditions = cinerino.transaction.ISearchConditions<cinerino.transactionType.PlaceOrder>;

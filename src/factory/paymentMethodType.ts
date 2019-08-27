/**
 * 決済方法タイプ
 */
enum PaymentMethodType {
    /**
     * 現金
     */
    Cash = 'Cash',
    /**
     * クレジットカード
     */
    CreditCard = 'CreditCard',
    /**
     * CP支払い
     */
    CP = 'CP',
    /**
     * 売掛（納品書・請求書支払い）
     */
    Invoice = 'Invoice',
    /**
     * 団体予約
     */
    GroupReservation = 'GroupReservation',
    /**
     * 貸切予約
     */
    Charter = 'Charter',
    /**
     * 無料招待券
     */
    Invitation = 'Invitation',
    /**
     * 手売り(Over the Counter)
     */
    OTC = 'OTC'
}

export default PaymentMethodType;

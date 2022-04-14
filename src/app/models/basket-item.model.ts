export class BasketItem {
  id: number | undefined;
  userId: number | undefined;
  productId: number | undefined;
  amount: number | undefined;

  constructor(userId?: number, productId?: number, amount?: number) {
    this.userId = userId;
    this.productId = productId;
    this.amount = amount;
  }
}

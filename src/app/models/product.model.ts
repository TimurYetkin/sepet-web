export class Product {
  id: number | undefined;
  brand: string = '';
  category: string = '';
  name: string = '';
  description: string = '';
  price: number;
  stock: number;
  amount: number;
  createTime: Date = new Date();
  secondFree: boolean = false;
  constructor(
    id?: number,
    name: string = '',
    price: number = 1,
    stock: number = 1,
    amount: number = 1
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.amount = amount;
  }
}

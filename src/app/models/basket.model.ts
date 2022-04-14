import { Product } from './product.model';
import { User } from './user.model';

export class Basket {
  id: number | undefined;
  user: User | undefined;
  product: Product | undefined;
  amount: number | undefined;
  totalPrice: number | undefined;
  createTime: Date = new Date();
}

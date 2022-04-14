import { DiscountType } from './discount-type.enum';
import { Product } from './product.model';
import { User } from './user.model';

export class DiscountBasket {
  id: number | undefined;
  user: User | undefined;
  product: Product | undefined;
  amount: number | undefined;
  totalPrice: number | undefined;
  discountedPrice: number | undefined;
  discountType: any | undefined;
  createTime: Date = new Date();
}

import { Component, OnInit } from '@angular/core';
import { Basket } from 'src/app/models/basket.model';
import { DiscountBasket } from 'src/app/models/discount-basket.model';
import { DiscountType } from 'src/app/models/discount-type.enum';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  basketItemList: Array<Basket> = [];
  discountedBasketList: Array<DiscountBasket> = [];
  infoMessage: string = '';

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseService.getAllBasketItems().subscribe((data) => {
      this.basketItemList = data;
    });
  }

  calculateDiscounts() {
    this.discountedBasketList = [];
    this.purchaseService.getAllDiscountBasketItems().subscribe((data) => {
      for (let discount of data) {
        if (discount.discountType)
          discount.discountType = DiscountType[discount.discountType];
        this.discountedBasketList.push(discount);
      }
    });
  }

  purshase() {
    this.infoMessage =
      'Mission is completed! We assume that purchases have been initiated';
    return;
  }
}

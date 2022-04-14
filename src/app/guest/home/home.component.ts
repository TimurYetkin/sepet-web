import { Component, OnInit } from '@angular/core';
import {
  faBlenderPhone,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../services/authentication.service';
import { PurchaseService } from '../../services/purchase.service';
import { BasketItem } from '../../models/basket-item.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: Array<Product> = [];
  faBlenderPhone = faBlenderPhone;
  errorMessage: string = '';
  infoMessage: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private productService: ProductService,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }

  addToBasket(item: Product) {
    this.errorMessage = '';
    this.infoMessage = '';
    if (!this.authenticationService.currentUserValue?.id) {
      this.errorMessage = 'You should log in to shopping';
      return;
    }
    if (!item.amount || item.amount <= 0) {
      this.errorMessage = 'Amount should be bigger than zero';
      return;
    }

    if (item.secondFree && item.amount == 1) {
      this.infoMessage = 'İf you buy one you can get one free';
      item.amount += 1;
    }

    const basketItem = new BasketItem(
      this.authenticationService.currentUserValue.id,
      item.id,
      item.amount
    );

    this.purchaseService.addToBasket(basketItem).subscribe(
      (data) => {
        this.infoMessage = 'Mission is completed';
      },
      (err) => {
        this.errorMessage = err.error;
        console.log(err);
      }
    );
  }
}

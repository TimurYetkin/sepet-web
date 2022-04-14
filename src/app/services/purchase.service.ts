import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestBaseService } from './request-base.service';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasketItem } from '../models/basket-item.model';

const API_URL = `${environment.BASE_URL}/api/basket`;

@Injectable({
  providedIn: 'root',
})
export class PurchaseService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  addToBasket(basketItem: BasketItem): Observable<any> {
    return this.http.post(API_URL, basketItem, { headers: this.getHeaders });
  }

  getAllBasketItems(): Observable<any> {
    return this.http.get(API_URL, { headers: this.getHeaders });
  }

  getAllDiscountBasketItems(): Observable<any> {
    return this.http.get(API_URL + '/calculate-discount', {
      headers: this.getHeaders,
    });
  }
}

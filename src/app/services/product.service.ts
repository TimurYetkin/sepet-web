import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestBaseService } from './request-base.service';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageOptions } from '../models/page-options.model';

const API_URL = `${environment.BASE_URL}/api/product`;

@Injectable({
  providedIn: 'root',
})
export class ProductService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(API_URL);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  saveProduct(product: any): Observable<any> {
    return this.http.post(API_URL, product, { headers: this.getHeaders });
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(API_URL + '/' + product.id, product, {
      headers: this.getHeaders,
    });
  }

  deleteProducts(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, { headers: this.getHeaders });
  }
}

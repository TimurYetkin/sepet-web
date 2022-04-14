import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  errorMessage: string = '';

  @Input() product: Product = new Product();
  @Output() save = new EventEmitter<any>();
  constructor(private productService: ProductService) {}

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(
      (data) => {
        this.save.emit(data);
        $('#productModal').modal('hide');
      },
      (err) => {
        this.errorMessage = err.error;
        console.log(err);
      }
    );
  }

  showProductModal() {
    $('#productModal').modal('show');
  }
}

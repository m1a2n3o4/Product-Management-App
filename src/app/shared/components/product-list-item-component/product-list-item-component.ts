import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list-item-component',
  imports: [],
  templateUrl: './product-list-item-component.html',
  styleUrl: './product-list-item-component.css'
})
export class ProductListItemComponent {
  @Input() product!: Product;

}

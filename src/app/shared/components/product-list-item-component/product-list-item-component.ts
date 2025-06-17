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
  @Output() edit = new EventEmitter<Product>(); 
  @Output() delete = new EventEmitter<number>(); 

  onEdit() {
    this.edit.emit(this.product);
  }

  onDelete() {
    const confirmed = confirm(`Are you sure you want to delete "${this.product.name}"?`);
    if(confirmed) {
      this.delete.emit(this.product.id);
    }
  }

}
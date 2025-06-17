import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form-component.html',
  styleUrl: './product-form-component.css'
})
export class ProductFormComponent {
  @Input() product!: Product; // Receive product data
  @Output() save = new EventEmitter<Product>(); // Emit save event

  onSave() {
    this.save.emit(this.product); // Emit the updated product
  }

}

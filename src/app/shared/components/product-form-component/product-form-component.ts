import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { NotoficationsComponent } from '../notofications-component/notofications-component';
import { formValidators } from '../../../constants/formvalidations';

@Component({
  selector: 'app-product-form-component',
  standalone: true,
  imports: [FormsModule,NotoficationsComponent, CommonModule ],
  templateUrl: './product-form-component.html',
  styleUrl: './product-form-component.css'
})
export class ProductFormComponent {
  // product: Product = {
  //   id :  0,
  //   name: '',
  //   description: '',
  //   price: 0,
  // };

  @Input() product!: Product; 
  @Output() save = new EventEmitter<Product>(); 
  errors: string[] = [];
  
  onSave() {
    this.errors = formValidators(this.product, ['name', 'description', 'price']);
    if (this.errors.length > 0) {
      console.error('Validation Errors:', this.errors);
      return;
    }
    this.save.emit(this.product); 
  }

}

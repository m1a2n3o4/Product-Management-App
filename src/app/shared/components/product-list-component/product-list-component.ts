import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item-component/product-list-item-component';
import { MockProductService } from '../../../core/services/mock-product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductListItemComponent, CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private mockProductService: MockProductService) {}

  ngOnInit() {
    this.products = this.mockProductService.getProducts();
    console.log(this.products);
  }

}

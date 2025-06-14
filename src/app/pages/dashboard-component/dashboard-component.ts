import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../shared/components/product-list-component/product-list-component';
import { MockProductService } from '../../core/services/mock-product.service';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private mockProductService: MockProductService) {}

  ngOnInit(): void {
    this.products = this.mockProductService.getProducts();
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListItemComponent } from '../product-list-item-component/product-list-item-component';
import { MockProductService } from '../../../core/services/mock-product.service';
import { Product } from '../../../core/models/product.model';
import { ProductFormComponent } from '../product-form-component/product-form-component';
import { Router } from '@angular/router';
import { StoreService } from '../../../core/data/userStore.service';


@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductListItemComponent, CommonModule, ProductFormComponent, FormsModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = '';
  sortOrder: string = 'default';
  user: any;

  constructor(private mockProductService: MockProductService, private router: Router, private userstoreService: StoreService ) {}
  

  showModal: boolean = false; 
  isEditMode: boolean = false; 
  selectedProduct: Product | null = null;


  openProductForm() {
    this.isEditMode = false; 
    this.selectedProduct = { id: 0, name: '', description: '', price: 0 }; 
    this.showModal = true; 
  }

  editProduct(product: Product) {
    this.isEditMode = true; 
    this.selectedProduct = { ...product }; 
    this.showModal = true; 
  }

  closeProductForm() {
    this.showModal = false; // Hide modal
    this.selectedProduct = null; // Reset selected product
  }

  ngOnInit() {
    this.user = this.userstoreService.getUser();

    const allProducts = this.mockProductService.getProducts();
    this.products = allProducts.sort( (a,b) => b.id - a.id);
    console.log(this.products);
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  saveProduct(product: Product) {

    console.log(product);
    if (this.isEditMode) {
      // Update existing product
      const index = this.products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.products[index] = product;
      }
    } else {
      // Add new product
      product.id = this.products.length + 1;
      this.products.push(product);
    }
    this.closeProductForm();
  }

  deleteProduct(productId: number) {
    console.log(productId);
    this.products = this.products.filter(product => product.id !== productId);
  }

}

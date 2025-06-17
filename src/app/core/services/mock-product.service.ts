import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockProductService {
  getProducts(): Product[] {
    return [
      { id: 1, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 2, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 3, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 4, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 5, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 6, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 7, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 8, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 9, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 10, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 11, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 12, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 13, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 14, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 15, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 16, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 17, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 18, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 19, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 20, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 21, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 22, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 23, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 24, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 25, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 26, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 27, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 28, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 29, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 30, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 31, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 32, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 33, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 34, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 35, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 36, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 37, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 38, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 39, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 40, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 41, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 42, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 43, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 44, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 45, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 46, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 47, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 48, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 49, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 50, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 51, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 52, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 53, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 54, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 55, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 56, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 57, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 },
      { id: 58, name: 'BMW Gear Rod', description: 'With automatic induction', price: 7500 },
      { id: 59, name: 'INSTAMART', description: 'Instant Grocery', price: 60 },
      { id: 60, name: 'Apple iPhone 14', description: 'Latest model with A16 chip', price: 79999 }
    ];
    
  }
}
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header-component/header-component';
import { ProductListComponent } from '../../shared/components/product-list-component/product-list-component';

@Component({
  selector: 'app-dashboard-component',
  standalone: true,
  imports: [HeaderComponent, ProductListComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css'
})
export class DashboardComponent {

}

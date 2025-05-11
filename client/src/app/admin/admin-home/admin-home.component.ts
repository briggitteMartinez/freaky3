import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../types/Product';

@Component({
  selector: 'app-admin-home',
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {
  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }   
}

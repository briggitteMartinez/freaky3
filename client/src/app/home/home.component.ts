import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../types/Product';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private http = inject(HttpClient);

  products: Product[] = [];

  ngOnInit(): void {
    this.http.get<Product[]>('/api/products').subscribe(data => this.products = data);
  }          

}

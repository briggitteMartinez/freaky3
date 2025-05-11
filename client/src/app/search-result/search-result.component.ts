import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../../types/Product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-search-result',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  products: Product[] = [];
  query: string = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.productService.searchProducts(this.query).subscribe(products => {
          this.products = products;
        });
      }
    });
  }
}

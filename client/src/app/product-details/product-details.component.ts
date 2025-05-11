import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../../types/Product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product!: Product;
  relatedProducts: Product[] = [];

  ngOnInit() {
    // Lyssna på varje route-ändring
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productService.getProductById(id).subscribe(product => {
          this.product = product;
        });

        this.productService.getAllProducts().subscribe(products => {
          this.relatedProducts = products
            .filter(p => p.id !== +id)
            .slice(0, 3);
        });
      }
    });
  }

  orderProduct() {
    alert(`You ordered: ${this.product.name} (${this.product.price} kr)`);
  }
}

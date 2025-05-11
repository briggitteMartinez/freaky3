import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../types/Product';
import { ProductService } from '../services/product.service';
import { LucideAngularModule,HeartIcon} from 'lucide-angular';
import { HeroComponent } from '../hero/hero.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, LucideAngularModule,HeroComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private productService = inject(ProductService);
  readonly HeartIcon = HeartIcon;

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }          

}

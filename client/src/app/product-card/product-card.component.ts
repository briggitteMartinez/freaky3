import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../types/Product';
import { LucideAngularModule, HeartIcon } from 'lucide-angular';




@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly HeartIcon = HeartIcon;
  
  @Input() products: Product[] = [];
}

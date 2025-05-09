import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../types/Product';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-new',
  imports: [],
  templateUrl: './admin-new.component.html',
  styleUrl: './admin-new.component.scss',
})
export class AdminNewComponent {
  private router = inject(Router);
  private productService = inject(ProductService);
  productForm!: FormGroup;

  ngOninit() {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      // description: new FormControl(''),
      // price: new FormControl(''),
      // image: new FormControl(''),
      // category: new FormControl(''),
    });
  }
  onSubmit() {
    const product = this.productForm.value;

    this.productService.addProduct(product).subscribe((product) => {
      console.log('Product added:', product);
      this.router.navigate(['/admin']);
    });
  }
}

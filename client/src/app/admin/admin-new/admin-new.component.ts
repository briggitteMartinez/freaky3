import { Component, inject, } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin-new',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-new.component.html',
  styleUrl: './admin-new.component.scss',
})
export class AdminNewComponent { 
  productForm!: FormGroup;

  private router = inject(Router);
  private productService = inject(ProductService);
 
  ngOnInit() {
    this.productForm = new FormGroup({
      name: new FormControl(''),
      slug: new FormControl(''),
      description: new FormControl(''),
      sku: new FormControl(''),
      img_url: new FormControl(''),
      price: new FormControl(''),
      brand: new FormControl(''),
      
    });
  }
  onSubmit() {
    const product = this.productForm.value;

    this.productService.addProduct(product).subscribe((product) => {
      console.log('Product added:', product);
      this.router.navigate(['/']);
    });
  }
}

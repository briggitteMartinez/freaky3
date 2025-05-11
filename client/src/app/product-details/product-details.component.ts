import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { Product } from '../../types/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  // private http = inject(HttpClient); // HttpClient is used to make HTTP requests
  private route = inject(ActivatedRoute);// ActivatedRoute is used to access route parameters
  productId: string | null = null; // productId will hold the ID of the product from the route parameter
  product!: Product;

   private productService = inject(ProductService);
  

 
   ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id');
     if (id) {
       this.productService.getProductById(id).subscribe((product) => {
         this.product = product;
       });
     }
   }  
  
  // ngOnInit(): void {

  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log("Product-id: ", id);
  //   this.http.get<Product>(`/api/products/${id}`)
  //   .subscribe(data => this.product = data); // Fetch product details from the API using the product ID
   
  // }

};

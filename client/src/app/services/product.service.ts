import { inject, Injectable } from '@angular/core';
import { Product } from '../../types/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    // This method should return an observable of products
    
    const products: Product[] = [];
    return this.http.get<Product[]>('/api/products');
  } 

  addProduct(product: Product): Observable<Product> {
    // This method should return an observable of the added product
    return this.http.post<Product>('/api/products', product);
    
  }

  //getProductById(id: string): Observable<Product> {
  //   // This method should return an observable of a product by id 
  //   return this.http.get<Product>(`/api/products/${id}`);
}

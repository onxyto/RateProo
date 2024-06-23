import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  private readonly productsUrl = '/products';

  public getProducts(mock = false): Observable<Product[]> {
    if (mock) {
      return this.httpClient.get<Product[]>('../../assets/mocks/products.json');
    }
    return this.httpClient.get<Product[]>(
      `${environment.api}${this.productsUrl}`
    );
  }

  public getProductBy(id: number) {
    return this.httpClient.get('../../assets/mocks/products.json').pipe();
  }
  public createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(
      `${environment.api}${this.productsUrl}`,
      product
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('../../assets/mocks/products.json');
  }

  public getProductBy(id: number) {
    return this.http.get('../../assets/mocks/products.json').pipe();
  }
}

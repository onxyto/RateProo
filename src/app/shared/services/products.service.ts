import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, ProductListDto } from '../models/product';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient = inject(HttpClient);

  private readonly productsUrl = '/products';

  public getProducts(mock = false): Observable<ProductListDto[]> {
    if (mock) {
      return this.httpClient.get<any[]>('../../assets/mocks/products.json');
    }
    return this.httpClient.get<ProductListDto[]>(
      `${environment.api}${this.productsUrl}`
    );
  }

  public searchProductsByName(keyword: string): Observable<ProductListDto> {
    return this.httpClient.get<ProductListDto>(
      `${environment.api}${this.productsUrl}/search/${keyword}`
    );
  }

  public getProductBy(id: number) {
    return this.httpClient.get('../../assets/mocks/products.json').pipe();
  }
  public createProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(`${environment.api}/products/create`, product)
      .pipe(
        catchError((error) => {
          console.error('Error creating product:', error);
          return throwError(error); // Rethrow the error to propagate it
        })
      );
  }

  public getRecommendedProducts(): Observable<ProductListDto[]> {
    return this.httpClient.get<ProductListDto[]>(
      `${environment.api}${this.productsUrl}/recommended`
    );
  }

  public addProductToFavorite(id: string) {
    return this.httpClient.post<Product>(
      `${environment.api}${this.productsUrl}/${id}/favorites`,
      {}
    );
  }
  public removeProductFromFavorite(id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment.api}${this.productsUrl}/${id}/favorites`
    );
  }
}

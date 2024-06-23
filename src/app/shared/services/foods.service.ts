import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food';
import { Observable } from 'rxjs';
import { ProductDetailsDto, ProductListDto } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private httpClient = inject(HttpClient);

  private readonly foodsUrl = '/products';

  public getFoods(mock = false): Observable<ProductListDto[]> {
    if (mock) {
      return this.httpClient.get<ProductListDto[]>(
        '../../assets/mocks/foods.json'
      );
    }
    return this.httpClient.get<ProductListDto[]>(
      `${environment.api}${this.foodsUrl}`
    );
  }

  public getFoodBy(id: string): Observable<ProductDetailsDto> {
    return this.httpClient.get<ProductDetailsDto>(
      `${environment.api}${this.foodsUrl}/${id}`
    );
  }
}

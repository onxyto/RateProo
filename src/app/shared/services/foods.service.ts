import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private httpClient = inject(HttpClient);

  private readonly foodsUrl = '/products';

  public getFoods(mock = false): Observable<Food[]> {
    if (mock) {
      return this.httpClient.get<Food[]>('../../assets/mocks/foods.json');
    }
    return this.httpClient.get<Food[]>(`${environment.api}${this.foodsUrl}`);
  }

  public getFoodBy(id: number): Observable<Food> {
    return this.httpClient.get<Food>(
      `${environment.api}${this.foodsUrl}/${id}`
    );
  }
}

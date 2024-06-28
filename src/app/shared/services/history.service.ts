import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {ProductListDto} from "../models/product";
import * as string_decoder from "string_decoder";

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private httpClient = inject(HttpClient);

  private readonly historysUrl = '/history';


  public addProductToUsersHistory(productEan: string) {
    return this.httpClient.post<void>(
      `${environment.api}${this.historysUrl}/${productEan}/scan`, {}
    );
  }
  public getUsersHistory(): Observable<ProductListDto[]> {
    return this.httpClient.get<ProductListDto[]>(
      `${environment.api}${this.historysUrl}/scan`
    );
  }

  public removeUsersProductFromHistory(productId: string) {
    return this.httpClient.delete<void>(`${environment.api}${this.historysUrl}/${productId}`)
  }

  public clearUsersHistory() {
    return this.httpClient.delete<void>(`${environment.api}${this.historysUrl}/clear`)
  }
}

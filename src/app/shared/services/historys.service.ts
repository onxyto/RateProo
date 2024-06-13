import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { History } from '../models/history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistorysService {
  private httpClient = inject(HttpClient);

  private readonly historysUrl = '/historys';

  public getHistorys(mock = false): Observable<History[]> {
    if (mock) {
      return this.httpClient.get<History[]>('../../assets/mocks/historys.json');
    }
    return this.httpClient.get<History[]>(
      `${environment.api}${this.historysUrl}`
    );
  }

  // public getHistoryBy(id: number) {
  //   return this.httpClient.get('../../assets/mocks/historys.json').pipe();
  // }
}

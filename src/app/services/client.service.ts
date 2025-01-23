import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  http = inject(HttpClient);

  private readonly url = `${environment.url}/clients`;

  getAll(params: { page: number; pageSize: number }): Observable<any> {
    return this.http.get(this.url, { params });
  }
}

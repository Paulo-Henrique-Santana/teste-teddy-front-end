import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client, ClientResponse } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);

  private readonly url = `${environment.url}/clients`;

  getAll(params: {
    page: number;
    pageSize: number;
    selected?: boolean;
  }): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(this.url, { params });
  }

  create(body: Client): Observable<Client> {
    return this.http.post<Client>(this.url, body);
  }

  update(body: Partial<Client>, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, body);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  unselectAll() {
    return this.http.patch(`${this.url}/unselect`, null);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private API_URL = 'http://localhost:3333/api';

  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<Settings[]> {
    {
      return this.http.get<Settings[]>(`${this.API_URL}/settings`);
    }
  }
}

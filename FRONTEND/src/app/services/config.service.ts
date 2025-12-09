import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

export interface YapeConfig {
  numero: string;
  codigo: string;
  whatsapp: string;
  qrUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = API_CONFIG.apiUrl;

  constructor(private http: HttpClient) {}

  getYapeConfig(): Observable<YapeConfig> {
    return this.http.get<YapeConfig>(`${this.apiUrl}/config/yape`);
  }
}


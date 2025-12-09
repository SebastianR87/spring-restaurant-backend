import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato, Categoria } from '../models/plato.model';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private apiUrl = API_CONFIG.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(`${this.apiUrl}/platos`);
  }

  getPlatoById(id: number): Observable<Plato> {
    return this.http.get<Plato>(`${this.apiUrl}/platos/${id}`);
  }

  getPlatosByCategoria(categoriaId: number): Observable<Plato[]> {
    return this.http.get<Plato[]>(`${this.apiUrl}/platos/categoria/${categoriaId}`);
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }

  getCategoriasConPlatos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias/con-platos`);
  }
}


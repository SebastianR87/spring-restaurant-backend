import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato, Categoria } from '../models/plato.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  // ========== PLATOS ==========
  getAllPlatos(): Observable<Plato[]> {
    return this.http.get<Plato[]>(`${this.apiUrl}/platos`);
  }

  getPlatoById(id: number): Observable<Plato> {
    return this.http.get<Plato>(`${this.apiUrl}/platos/${id}`);
  }

  createPlato(plato: any): Observable<Plato> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Plato>(`${this.apiUrl}/platos`, plato, { headers });
  }

  updatePlato(id: number, plato: any): Observable<Plato> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Plato>(`${this.apiUrl}/platos/${id}`, plato, { headers });
  }

  desactivarPlato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/platos/${id}`);
  }

  deletePlato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/platos/${id}/permanente`);
  }

  reactivarPlato(id: number): Observable<Plato> {
    return this.http.patch<Plato>(`${this.apiUrl}/platos/${id}/reactivar`, {});
  }

  // ========== CATEGORÍAS ==========
  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }

  getCategoriaById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}/categorias/${id}`);
  }

  createCategoria(categoria: any): Observable<Categoria> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Categoria>(`${this.apiUrl}/categorias`, categoria, { headers });
  }

  updateCategoria(id: number, categoria: any): Observable<Categoria> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Categoria>(`${this.apiUrl}/categorias/${id}`, categoria, { headers });
  }

  desactivarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categorias/${id}`);
  }

  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/categorias/${id}/permanente`);
  }

  reactivarCategoria(id: number): Observable<Categoria> {
    return this.http.patch<Categoria>(`${this.apiUrl}/categorias/${id}/reactivar`, {});
  }

  // ========== PEDIDOS ==========
  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/pedidos`);
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/pedidos/${id}`);
  }

  actualizarEstadoPedido(id: number, nuevoEstado: string): Observable<Pedido> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // El backend espera un String, así que enviamos el string directamente
    return this.http.patch<Pedido>(`${this.apiUrl}/pedidos/${id}/estado`, `"${nuevoEstado}"`, { headers });
  }

  deletePedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pedidos/${id}`);
  }
}


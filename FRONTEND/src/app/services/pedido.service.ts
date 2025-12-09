import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido, CreatePedidoRequest } from '../models/pedido.model';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiUrl = API_CONFIG.apiUrl;

  constructor(private http: HttpClient) {}

  createPedido(pedidoRequest: CreatePedidoRequest): Observable<Pedido> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Usar el endpoint que acepta el usuarioId en el request
    return this.http.post<Pedido>(`${this.apiUrl}/cliente/pedidos`, pedidoRequest, { headers });
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}/cliente/pedidos/${id}`);
  }

  getPedidosByUsuario(usuarioId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}/cliente/pedidos/usuario/${usuarioId}`);
  }
}


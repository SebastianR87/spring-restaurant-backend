export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  rol: 'CLIENTE' | 'ADMIN';
  activo: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
  telefono?: string;
  direccion?: string;
}

export interface LoginResponse {
  id?: number;
  nombre?: string;
  email?: string;
  telefono?: string;
  direccion?: string;
  rol?: string;
  token?: string;
  message?: string;
}


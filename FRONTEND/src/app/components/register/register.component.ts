import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../models/usuario.model';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    direccion: ''
  };

  confirmPassword: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Validaciones
    if (!this.registerRequest.nombre || !this.registerRequest.email || 
        !this.registerRequest.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, complete todos los campos obligatorios';
      return;
    }

    if (this.registerRequest.password.length < 6) {
      this.errorMessage = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    if (this.registerRequest.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (!this.isValidEmail(this.registerRequest.email)) {
      this.errorMessage = 'Por favor, ingrese un email válido';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.register(this.registerRequest).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.message === 'Usuario registrado exitosamente' || response.id) {
          // Redirigir al menú después del registro exitoso
          this.router.navigate(['/menu']);
        } else {
          this.errorMessage = response.message || 'Error al registrar usuario';
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error en registro:', error);
        
        if (error.error) {
          // Si hay un objeto error con mensaje
          if (error.error.message) {
            this.errorMessage = error.error.message;
          } 
          // Si hay errores de validación
          else if (error.error.errors && Array.isArray(error.error.errors)) {
            const errorMessages = error.error.errors.map((e: any) => e.message || e.defaultMessage).join(', ');
            this.errorMessage = errorMessages || 'Error de validación en los datos';
          }
          // Si hay un mensaje directo
          else if (typeof error.error === 'string') {
            this.errorMessage = error.error;
          }
          else {
            this.errorMessage = error.error.error || 'Error al registrar usuario';
          }
        } else {
          this.errorMessage = 'Error al conectar con el servidor. Verifique que el backend esté corriendo.';
        }
      }
    });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}


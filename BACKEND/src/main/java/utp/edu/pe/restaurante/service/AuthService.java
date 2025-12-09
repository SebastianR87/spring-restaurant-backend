package utp.edu.pe.restaurante.service;

import utp.edu.pe.restaurante.dto.request.LoginRequest;
import utp.edu.pe.restaurante.dto.request.RegisterRequest;
import utp.edu.pe.restaurante.dto.response.LoginResponse;

/**
 * Interfaz del servicio de autenticación
 */
public interface AuthService {
    
    /**
     * Autentica un usuario con email y contraseña
     * 
     * @param request Datos de login (email y password)
     * @return LoginResponse con los datos del usuario si la autenticación es exitosa
     * @throws RuntimeException si las credenciales son inválidas o el usuario no existe
     */
    LoginResponse login(LoginRequest request);
    
    /**
     * Registra un nuevo usuario en el sistema
     * 
     * @param request Datos de registro (nombre, email, password, etc.)
     * @return LoginResponse con los datos del usuario creado
     * @throws RuntimeException si el email ya existe o hay algún error de validación
     */
    LoginResponse register(RegisterRequest request);
}


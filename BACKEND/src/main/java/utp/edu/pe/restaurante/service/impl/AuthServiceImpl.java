package utp.edu.pe.restaurante.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utp.edu.pe.restaurante.dto.request.LoginRequest;
import utp.edu.pe.restaurante.dto.request.RegisterRequest;
import utp.edu.pe.restaurante.dto.response.LoginResponse;
import utp.edu.pe.restaurante.entity.Usuario;
import utp.edu.pe.restaurante.exception.UnauthorizedException;
import utp.edu.pe.restaurante.exception.ValidationException;
import utp.edu.pe.restaurante.repository.UsuarioRepository;
import utp.edu.pe.restaurante.service.AuthService;

import java.util.Optional;

/**
 * Implementación del servicio de autenticación
 */
@Service
public class AuthServiceImpl implements AuthService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @Override
    public LoginResponse login(LoginRequest request) {
        // Buscar usuario por email
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(request.getEmail());
        
        if (usuarioOpt.isEmpty()) {
            throw new UnauthorizedException("Credenciales inválidas");
        }
        
        Usuario usuario = usuarioOpt.get();
        
        // Verificar si el usuario está activo
        if (!usuario.getActivo()) {
            throw new UnauthorizedException("Usuario inactivo");
        }
        
        // Verificar contraseña (comparación simple - en producción debería usar BCrypt)
        if (!usuario.getPassword().equals(request.getPassword())) {
            throw new UnauthorizedException("Credenciales inválidas");
        }
        
        // Crear respuesta de login exitoso
        LoginResponse response = new LoginResponse();
        response.setId(usuario.getId());
        response.setNombre(usuario.getNombre());
        response.setEmail(usuario.getEmail());
        response.setTelefono(usuario.getTelefono());
        response.setDireccion(usuario.getDireccion());
        response.setRol(usuario.getRol().name());
        response.setMessage("Login exitoso");
        
        return response;
    }
    
    @Override
    public LoginResponse register(RegisterRequest request) {
        try {
            // Validar que los campos requeridos no sean null
            if (request.getNombre() == null || request.getNombre().trim().isEmpty()) {
                throw new ValidationException("El nombre es obligatorio");
            }
            if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
                throw new ValidationException("El email es obligatorio");
            }
            if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
                throw new ValidationException("La contraseña es obligatoria");
            }
            
            // Verificar si el email ya existe
            String emailNormalizado = request.getEmail().trim().toLowerCase();
            if (usuarioRepository.existsByEmail(emailNormalizado)) {
                throw new ValidationException("El email ya está registrado");
            }
            
            // Crear nuevo usuario
            Usuario nuevoUsuario = new Usuario();
            nuevoUsuario.setNombre(request.getNombre().trim());
            nuevoUsuario.setEmail(emailNormalizado);
            nuevoUsuario.setPassword(request.getPassword()); // En producción debería hashearse con BCrypt
            
            // Manejar campos opcionales (solo asignar si no están vacíos)
            if (request.hasTelefono()) {
                String telefono = request.getTelefono().trim();
                if (telefono.length() > 20) {
                    throw new ValidationException("El teléfono no puede exceder 20 caracteres");
                }
                nuevoUsuario.setTelefono(telefono);
            }
            
            if (request.hasDireccion()) {
                String direccion = request.getDireccion().trim();
                if (direccion.length() > 500) {
                    throw new ValidationException("La dirección no puede exceder 500 caracteres");
                }
                nuevoUsuario.setDireccion(direccion);
            }
            
            nuevoUsuario.setRol(Usuario.Rol.CLIENTE); // Por defecto es CLIENTE
            nuevoUsuario.setActivo(true);
            
            // Guardar usuario
            Usuario usuarioGuardado = usuarioRepository.save(nuevoUsuario);
            
            // Crear respuesta de registro exitoso
            LoginResponse response = new LoginResponse();
            response.setId(usuarioGuardado.getId());
            response.setNombre(usuarioGuardado.getNombre());
            response.setEmail(usuarioGuardado.getEmail());
            response.setTelefono(usuarioGuardado.getTelefono());
            response.setDireccion(usuarioGuardado.getDireccion());
            response.setRol(usuarioGuardado.getRol().name());
            response.setMessage("Usuario registrado exitosamente");
            
            return response;
        } catch (ValidationException e) {
            // Re-lanzar ValidationException
            throw e;
        } catch (Exception e) {
            // Capturar cualquier otra excepción y lanzar una ValidationException más descriptiva
            e.printStackTrace();
            throw new ValidationException("Error al registrar usuario: " + e.getMessage());
        }
    }
}


-- Datos de prueba para la base de datos del restaurante
-- Este archivo se ejecuta automáticamente después del schema.sql

-- Insertar categorías de ejemplo
INSERT IGNORE INTO categorias (nombre, descripcion, tipo, activa) VALUES
('Entradas', 'Aperitivos y entradas deliciosas', 'COMIDA', TRUE),
('Platos Principales', 'Platos principales y especialidades', 'COMIDA', TRUE),
('Postres', 'Dulces y postres caseros', 'COMIDA', TRUE),
('Bebidas Frías', 'Refrescos y bebidas frías', 'BEBIDA', TRUE),
('Bebidas Calientes', 'Café, té y bebidas calientes', 'BEBIDA', TRUE);

-- Insertar usuarios de prueba
-- NOTA: En producción, las contraseñas deben estar hasheadas con BCrypt
INSERT IGNORE INTO usuarios (nombre, email, password, telefono, direccion, fecha_registro, activo, rol) VALUES
('Administrador', 'admin@restaurante.com', 'admin123', '999888777', 'Dirección del administrador', NOW(), TRUE, 'ADMIN'),
('Cliente Prueba', 'cliente@restaurante.com', 'cliente123', '999888666', 'Dirección del cliente', NOW(), TRUE, 'CLIENTE'),
('Juan Pérez', 'juan@example.com', 'juan123', '987654321', 'Av. Principal 123', NOW(), TRUE, 'CLIENTE');



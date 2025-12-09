# 📡 Endpoints de la API - URLs Completas

**Base URL:** `https://spring-restaurant-backend-production-1aa3.up.railway.app`

---

## 🌍 Endpoints Públicos (Cliente)

### 🔐 Autenticación

```
POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/auth/login
```

### 📂 Categorías

```
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/categorias
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/categorias/{id}
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/categorias/tipo/{tipo}
     Ejemplo: /api/categorias/tipo/COMIDA
     Ejemplo: /api/categorias/tipo/BEBIDA
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/categorias/con-platos
```

### 🍽️ Platos

```
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/{id}
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/categoria/{categoriaId}
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/domicilio
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/buscar?nombre={nombre}
     Ejemplo: /api/platos/buscar?nombre=ceviche
```

### 🛒 Pedidos (Cliente)

```
POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/cliente/pedidos
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/cliente/pedidos
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/cliente/pedidos/{id}
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/cliente/pedidos/usuario/{usuarioId}
```

### 📋 Detalles de Pedido

```
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/detalles/pedido/{pedidoId}
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/detalles/{id}
```

### 📅 Reservas

```
POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/reservas
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/reservas
PUT  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/reservas/{id}/estado
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/reservas/{id}
```

### ⚙️ Configuración

```
GET  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/config/yape
```

---

## 🔐 Endpoints de Administración

### 📂 Categorías (Admin)

```
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias/{id}
POST   https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias
PUT    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias/{id}
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias/{id}
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/categorias/{id}/permanente
```

### 🍽️ Platos (Admin)

```
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/{id}
POST   https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos
POST   https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/con-imagen
PUT    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/{id}
PUT    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/{id}/con-imagen
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/{id}
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/platos/{id}/permanente
```

### 🛒 Pedidos (Admin)

```
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos/{id}
POST   https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos
PUT    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos/{id}
PATCH  https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos/{id}/estado
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/pedidos/{id}
```

### 📋 Detalles de Pedido (Admin)

```
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/detalles
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/detalles/pedido/{pedidoId}
GET    https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/detalles/{id}
POST   https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/detalles/pedido/{pedidoId}
DELETE https://spring-restaurant-backend-production-1aa3.up.railway.app/api/admin/detalles/{id}
```

### 📁 Subida de Archivos

```
POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/files/upload/plato
POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/files/upload/categoria
```

---

## 📝 Ejemplos de Uso

### Ejemplo 1: Obtener todas las categorías
```bash
curl https://spring-restaurant-backend-production-1aa3.up.railway.app/api/categorias
```

### Ejemplo 2: Obtener platos de una categoría
```bash
curl https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/categoria/1
```

### Ejemplo 3: Buscar platos por nombre
```bash
curl "https://spring-restaurant-backend-production-1aa3.up.railway.app/api/platos/buscar?nombre=ceviche"
```

### Ejemplo 4: Crear un pedido
```bash
curl -X POST https://spring-restaurant-backend-production-1aa3.up.railway.app/api/cliente/pedidos \
  -H "Content-Type: application/json" \
  -d '{
    "usuarioId": 1,
    "tipoPedido": "DOMICILIO",
    "metodoPago": "EFECTIVO",
    "total": 45.50,
    "detalles": [...]
  }'
```

### Ejemplo 5: Obtener configuración de Yape
```bash
curl https://spring-restaurant-backend-production-1aa3.up.railway.app/api/config/yape
```

---

## 🔗 Para usar en tu Frontend

En tu aplicación Angular, actualiza el archivo de configuración del servicio para usar:

```typescript
private apiUrl = 'https://spring-restaurant-backend-production-1aa3.up.railway.app/api';
```

O crea una variable de entorno:

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://spring-restaurant-backend-production-1aa3.up.railway.app/api'
};
```


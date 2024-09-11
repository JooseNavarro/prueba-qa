# API Endpoints Automated Test

## Descripción

Este proyecto es una API RESTful básica desarrollada con Node.js y Express que expone 4 endpoints principales. El objetivo del proyecto es validar el funcionamiento correcto de operaciones CRUD y autenticación a través de pruebas automatizadas. El servidor permite gestionar recursos simples y probar la lógica de interacción con los endpoints de la API.

## Endpoints Disponibles

- **GET** `/api/v1/resource1`  
  Obtiene la lista de recursos.

- **POST** `/api/v1/resource2`  
  Crea un nuevo recurso.  
  **Cuerpo de la solicitud:**
  ```json
  {
    "name": "Nuevo Recurso"
  }
  ```
- **PUT** `/api/v1/resource3/:id`  
  Actualiza un recurso existente basado en el id proporcionado.

- **DELETE** `/api/v1/resource4/:id`  
  Elimina un recurso basado en el id proporcionado.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### 1 Clona el repositorio

Clona el proyecto usando el siguiente comando:

```bash
git clone git@github.com:JooseNavarro/prueba-qa.git
```

### 2 Navega al directorio del proyecto

Cambia al directorio donde se encuentra el proyecto:

```bash
cd prueba-qa
```

### 3. Instala las dependencias

Instala todas las dependencias necesarias usando `npm`:

```bash
npm install
```

### 4. Ejecuta el servidor localmente con:

```bash
node index.js
```

Probar los endpoints

Los endpoints estarán disponibles en http://localhost:3000. Puedes probarlos con herramientas como Postman o cURL.

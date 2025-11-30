# 🔧 Guía de Configuración Rápida

Esta guía te ayudará a configurar Weather Dashboard en menos de 5 minutos.

## Paso 1: Obtener una API Key de OpenWeatherMap

### 1.1 Crear cuenta

1. Ve a [https://openweathermap.org/](https://openweathermap.org/)
2. Haz clic en "Sign In" → "Create an Account"
3. Completa el formulario de registro
4. Verifica tu correo electrónico

### 1.2 Generar API Key

1. Inicia sesión en OpenWeatherMap
2. Ve a tu perfil (esquina superior derecha)
3. Haz clic en "My API keys"
4. Verás una API key por defecto o haz clic en "Generate" para crear una nueva
5. Copia la API key (ejemplo: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

**⚠️ Importante:** La API key puede tardar hasta 10 minutos en activarse.

## Paso 2: Configurar el Proyecto

### Opción A: Configuración Directa (Recomendada)

1. Abre el archivo `app.js` en tu editor de código
2. Busca esta línea (está al inicio del archivo):

```javascript
const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI',
    // ...
};
```

3. Reemplaza `'TU_API_KEY_AQUI'` con tu API key:

```javascript
const CONFIG = {
    API_KEY: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6',
    // ...
};
```

4. Guarda el archivo

### Opción B: Archivo de Configuración Separado (Más seguro)

Si planeas subir tu código a GitHub y quieres mantener tu API key privada:

1. Crea un archivo llamado `config.local.js` en la raíz del proyecto

2. Agrega este contenido:

```javascript
// config.local.js
const CONFIG = {
    API_KEY: 'tu_api_key_aqui',
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    ICON_URL: 'https://openweathermap.org/img/wn',
    DEFAULT_CITY: 'Madrid',
    UNITS: 'metric',
    LANG: 'es'
};
```

3. En `index.html`, agrega esta línea ANTES de `<script src="app.js">`:

```html
<script src="config.local.js"></script>
<script src="app.js"></script>
```

4. En `app.js`, comenta o elimina la declaración de CONFIG

**Nota:** El archivo `config.local.js` está en `.gitignore` y no se subirá a GitHub.

## Paso 3: Probar la Aplicación

1. Abre `index.html` en tu navegador
2. Deberías ver la aplicación cargando el clima de Madrid (ciudad por defecto)
3. Prueba buscar otra ciudad para verificar que todo funciona

## Paso 4: Personalización (Opcional)

### Cambiar Ciudad por Defecto

En `app.js`:

```javascript
const CONFIG = {
    // ...
    DEFAULT_CITY: 'Barcelona',  // Cambia aquí
    // ...
};
```

### Cambiar a Fahrenheit

En `app.js`:

```javascript
const CONFIG = {
    // ...
    UNITS: 'imperial',  // 'metric' para Celsius, 'imperial' para Fahrenheit
    // ...
};
```

### Cambiar Idioma

En `app.js`:

```javascript
const CONFIG = {
    // ...
    LANG: 'en',  // 'es' = Español, 'en' = Inglés, 'fr' = Francés, etc.
    // ...
};
```

## 🐛 Solución de Problemas Comunes

### Error: "API Key inválida"

**Solución:**
- Verifica que hayas copiado la API key correctamente
- Espera 10 minutos después de crear la API key
- Asegúrate de no haber copiado espacios al inicio o final

### Error: "Ciudad no encontrada"

**Solución:**
- Verifica la ortografía
- Intenta con el formato: "Ciudad, Código País" (ej: "Paris, FR")
- Usa nombres en inglés (ej: "Moscow" en lugar de "Moscú")

### No se muestra nada

**Solución:**
- Abre la consola del navegador (F12)
- Busca mensajes de error en rojo
- Verifica que hayas guardado los cambios en `app.js`
- Asegúrate de tener conexión a internet

### La geolocalización no funciona

**Solución:**
- Asegúrate de dar permisos de ubicación al navegador
- En Chrome: Configuración → Privacidad y seguridad → Configuración de sitios → Ubicación
- Prueba con la búsqueda manual mientras tanto

## 📊 Plan Gratuito de OpenWeatherMap

El plan gratuito incluye:

- ✅ 1,000 llamadas a la API por día
- ✅ Clima actual
- ✅ Pronóstico de 5 días
- ✅ Actualización cada 10 minutos

Esto es más que suficiente para desarrollo y uso personal.

## 🚀 Siguientes Pasos

Ahora que tu aplicación está funcionando:

1. ✅ Personaliza los colores en `styles.css`
2. ✅ Agrega tu nombre en el footer de `index.html`
3. ✅ Prueba todas las funcionalidades
4. ✅ Sube tu proyecto a GitHub (sin incluir tu API key)
5. ✅ Comparte tu proyecto en tu portfolio

## 📚 Recursos Adicionales

- [Documentación de OpenWeatherMap API](https://openweathermap.org/api)
- [Lista de códigos de ciudades](https://openweathermap.org/current#cityid)
- [Códigos de idiomas ISO](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

---

**¿Necesitas ayuda?** Abre un issue en GitHub o consulta la documentación completa en README.md

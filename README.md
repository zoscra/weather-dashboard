# 🌤️ Weather Dashboard

<div align="center">

![Weather Dashboard](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

**Dashboard profesional del clima con pronóstico en tiempo real**

[Demo en Vivo](#) | [Características](#características) | [Instalación](#instalación) | [Uso](#uso)

</div>

---

## 📋 Descripción

Weather Dashboard es una aplicación web moderna y responsive que proporciona información meteorológica en tiempo real y pronósticos de 5 días para cualquier ciudad del mundo. Diseñada con una interfaz atractiva y fácil de usar, perfecta para demostrar habilidades de desarrollo frontend.

## ✨ Características

### 🎯 Funcionalidades Principales

- **🔍 Búsqueda de Ciudades**: Busca el clima de cualquier ciudad del mundo
- **📍 Geolocalización**: Detecta automáticamente tu ubicación actual
- **🌡️ Clima Actual**: Información detallada del clima en tiempo real
- **📅 Pronóstico de 5 Días**: Previsión meteorológica extendida
- **💨 Datos Completos**: Temperatura, humedad, viento, presión, visibilidad y más
- **🌅 Horarios Solares**: Información de amanecer y atardecer
- **📱 Diseño Responsive**: Funciona perfectamente en móviles, tablets y escritorio
- **🎨 Interfaz Moderna**: Diseño atractivo con gradientes y animaciones suaves
- **💾 Persistencia**: Recuerda tu última búsqueda

### 🎨 Diseño y UX

- Gradientes modernos y paleta de colores atractiva
- Iconos SVG integrados
- Animaciones suaves y transiciones
- Diseño responsive con breakpoints optimizados
- Estados de carga y error informativos
- Fuente Google Fonts (Poppins)

## 🚀 Instalación

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet
- API Key de OpenWeatherMap (gratuita)

### Pasos de Instalación

1. **Clona o descarga este repositorio**

```bash
git clone https://github.com/tu-usuario/weather-dashboard.git
cd weather-dashboard
```

2. **Obtén tu API Key de OpenWeatherMap**

   - Visita [OpenWeatherMap](https://openweathermap.org/api)
   - Crea una cuenta gratuita
   - Ve a tu perfil → "API keys"
   - Copia tu API key

3. **Configura tu API Key**

   Abre el archivo `app.js` y reemplaza `TU_API_KEY_AQUI` con tu API key:

   ```javascript
   const CONFIG = {
       API_KEY: 'tu_api_key_aqui', // ← Pega tu API key aquí
       // ...resto de la configuración
   };
   ```

4. **Abre la aplicación**

   Simplemente abre el archivo `index.html` en tu navegador web.

   ```bash
   # En sistemas Unix/Linux/Mac:
   open index.html

   # En Windows:
   start index.html
   ```

   O arrastra el archivo `index.html` a tu navegador.

## 📖 Uso

### Búsqueda de Ciudades

1. Escribe el nombre de una ciudad en el campo de búsqueda
2. Presiona Enter o haz clic en el botón "Buscar"
3. La información del clima se mostrará automáticamente

**Ejemplos de búsqueda:**
- `Madrid`
- `Barcelona, ES`
- `New York, US`
- `Tokyo, JP`

### Usar Geolocalización

1. Haz clic en el botón "Mi Ubicación" en la esquina superior derecha
2. Acepta los permisos de ubicación en tu navegador
3. El clima de tu ubicación actual se mostrará automáticamente

### Información Mostrada

La aplicación muestra:

- **Temperatura actual** con sensación térmica
- **Descripción del clima** con icono animado
- **Humedad relativa** del aire
- **Velocidad del viento** en km/h
- **Presión atmosférica** en hPa
- **Visibilidad** en kilómetros
- **Índice UV** (simulado)
- **Horarios de amanecer y atardecer**
- **Pronóstico de 5 días** con temperaturas máximas y mínimas

## 🏗️ Estructura del Proyecto

```
weather-dashboard/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS (diseño responsive)
├── app.js              # Lógica JavaScript y API
├── README.md           # Documentación del proyecto
└── .gitignore          # Archivos ignorados por git
```

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica |
| **CSS3** | Estilos, gradientes, animaciones |
| **JavaScript (ES6+)** | Lógica y consumo de API |
| **OpenWeatherMap API** | Datos meteorológicos |
| **Google Fonts** | Tipografía Poppins |
| **Geolocation API** | Detección de ubicación |

## 🌐 API Utilizada

Este proyecto utiliza la [OpenWeatherMap API](https://openweathermap.org/api):

- **Current Weather Data**: Clima actual
- **5 Day / 3 Hour Forecast**: Pronóstico de 5 días

### Límites de la API Gratuita

- 1,000 llamadas por día
- Actualización cada 10 minutos
- Acceso a datos actuales y pronóstico de 5 días

## 📱 Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **📱 Móvil**: < 768px
- **📱 Tablet**: 768px - 1024px
- **💻 Escritorio**: > 1024px

## 🎯 Características Técnicas

### JavaScript Moderno

- Async/Await para llamadas a API
- Fetch API para peticiones HTTP
- Template literals para renderizado
- LocalStorage para persistencia
- Módulos ES6
- Manejo de errores robusto

### CSS Avanzado

- Variables CSS (Custom Properties)
- Flexbox y Grid Layout
- Animaciones y transiciones
- Media queries
- Backdrop filter
- Gradientes lineales

### Mejores Prácticas

- ✅ Código limpio y comentado
- ✅ Separación de responsabilidades
- ✅ Manejo de errores
- ✅ Estados de carga
- ✅ Accesibilidad (ARIA)
- ✅ SEO optimizado
- ✅ Performance optimizada

## 🔧 Configuración Avanzada

### Cambiar Unidades de Medida

En `app.js`, puedes cambiar entre Celsius y Fahrenheit:

```javascript
const CONFIG = {
    // ...
    UNITS: 'metric',  // 'metric' = Celsius, 'imperial' = Fahrenheit
    // ...
};
```

### Cambiar Idioma

```javascript
const CONFIG = {
    // ...
    LANG: 'es'  // 'es' = Español, 'en' = Inglés, etc.
    // ...
};
```

### Cambiar Ciudad por Defecto

```javascript
const CONFIG = {
    // ...
    DEFAULT_CITY: 'Madrid',  // Cambia a tu ciudad preferida
    // ...
};
```

## 🐛 Solución de Problemas

### Error: "API Key inválida"

- Verifica que hayas copiado correctamente tu API key
- Asegúrate de que la API key esté activa (puede tardar unos minutos)
- Revisa que no haya espacios al inicio o final

### Error: "Ciudad no encontrada"

- Verifica la ortografía del nombre de la ciudad
- Intenta agregar el código del país: "Paris, FR"
- Usa nombres en inglés para mejores resultados

### La geolocalización no funciona

- Asegúrate de permitir el acceso a la ubicación en tu navegador
- Usa HTTPS si estás en producción
- Verifica que tu navegador soporte Geolocation API

## 📈 Mejoras Futuras

- [ ] Agregar gráficos de temperatura
- [ ] Implementar modo oscuro
- [ ] Agregar más detalles meteorológicos
- [ ] Guardar ciudades favoritas
- [ ] Notificaciones de alertas meteorológicas
- [ ] Convertir a PWA (Progressive Web App)
- [ ] Agregar tests unitarios
- [ ] Soporte multiidioma completo

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👤 Autor

**Tu Nombre**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- Portfolio: [tu-portfolio.com](https://tu-portfolio.com)

## 🙏 Agradecimientos

- [OpenWeatherMap](https://openweathermap.org/) por la API gratuita
- [Google Fonts](https://fonts.google.com/) por la tipografía Poppins
- Comunidad de desarrolladores por la inspiración

---

<div align="center">

**¿Te gustó el proyecto? Dale una ⭐ en GitHub!**

Hecho con ❤️ y ☕

</div>

// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    API_KEY: 'TU_API_KEY_AQUI', // Obtén tu API key gratis en https://openweathermap.org/api
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    ICON_URL: 'https://openweathermap.org/img/wn',
    DEFAULT_CITY: 'Madrid',
    UNITS: 'metric', // metric = Celsius, imperial = Fahrenheit
    LANG: 'es'
};

// ==========================================
// STATE MANAGEMENT
// ==========================================

const state = {
    currentCity: null,
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    // Search
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    searchSuggestions: document.getElementById('searchSuggestions'),

    // Buttons
    locationBtn: document.getElementById('locationBtn'),
    retryBtn: document.getElementById('retryBtn'),

    // States
    loading: document.getElementById('loading'),
    error: document.getElementById('error'),
    errorText: document.getElementById('errorText'),
    weatherContent: document.getElementById('weatherContent'),

    // Current Weather
    cityName: document.getElementById('cityName'),
    currentDate: document.getElementById('currentDate'),
    currentTemp: document.getElementById('currentTemp'),
    weatherIcon: document.getElementById('weatherIcon'),
    weatherDescription: document.getElementById('weatherDescription'),
    feelsLike: document.getElementById('feelsLike'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    pressure: document.getElementById('pressure'),
    visibility: document.getElementById('visibility'),
    uvIndex: document.getElementById('uvIndex'),
    sunrise: document.getElementById('sunrise'),
    sunset: document.getElementById('sunset'),

    // Forecast
    forecastCards: document.getElementById('forecastCards')
};

// ==========================================
// API FUNCTIONS
// ==========================================

async function fetchWeatherByCity(city) {
    try {
        const url = `${CONFIG.BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}&appid=${CONFIG.API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ciudad no encontrada. Por favor, verifica el nombre.');
            } else if (response.status === 401) {
                throw new Error('API Key inválida. Por favor, configura tu API key en app.js');
            } else {
                throw new Error('Error al obtener datos del clima');
            }
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function fetchWeatherByCoords(lat, lon) {
    try {
        const url = `${CONFIG.BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}&appid=${CONFIG.API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error al obtener datos del clima');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function fetchForecast(lat, lon) {
    try {
        const url = `${CONFIG.BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${CONFIG.UNITS}&lang=${CONFIG.LANG}&appid=${CONFIG.API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error al obtener pronóstico');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function fetchUVIndex(lat, lon) {
    // Nota: La API UV Index es parte de One Call API 3.0
    // Para simplificar, retornamos un valor simulado
    // En producción, deberías usar: https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}
    return Math.floor(Math.random() * 11); // Valor entre 0-11
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function formatDate(timestamp, options = {}) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
    });
}

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function getWeatherIconUrl(iconCode) {
    return `${CONFIG.ICON_URL}/${iconCode}@2x.png`;
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function metersToKilometers(meters) {
    return (meters / 1000).toFixed(1);
}

function getDayName(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('es-ES', { weekday: 'long' });
}

function getShortDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}

// ==========================================
// UI STATE MANAGEMENT
// ==========================================

function showLoading() {
    elements.loading.classList.remove('hidden');
    elements.error.classList.add('hidden');
    elements.weatherContent.classList.add('hidden');
    state.loading = true;
}

function showError(message) {
    elements.loading.classList.add('hidden');
    elements.error.classList.remove('hidden');
    elements.weatherContent.classList.add('hidden');
    elements.errorText.textContent = message;
    state.loading = false;
    state.error = message;
}

function showWeather() {
    elements.loading.classList.add('hidden');
    elements.error.classList.add('hidden');
    elements.weatherContent.classList.remove('hidden');
    state.loading = false;
    state.error = null;
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderCurrentWeather(data) {
    // Location and Date
    elements.cityName.textContent = `${data.name}, ${data.sys.country}`;
    elements.currentDate.textContent = formatDate(data.dt);

    // Temperature
    elements.currentTemp.textContent = Math.round(data.main.temp);
    elements.feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

    // Weather Description
    elements.weatherIcon.src = getWeatherIconUrl(data.weather[0].icon);
    elements.weatherIcon.alt = data.weather[0].description;
    elements.weatherDescription.textContent = capitalizeFirst(data.weather[0].description);

    // Details
    elements.humidity.textContent = `${data.main.humidity}%`;
    elements.windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
    elements.pressure.textContent = `${data.main.pressure} hPa`;
    elements.visibility.textContent = `${metersToKilometers(data.visibility)} km`;

    // Sun times
    elements.sunrise.textContent = formatTime(data.sys.sunrise);
    elements.sunset.textContent = formatTime(data.sys.sunset);

    // UV Index (simulated)
    fetchUVIndex(data.coord.lat, data.coord.lon).then(uvIndex => {
        elements.uvIndex.textContent = uvIndex;
    });
}

function renderForecast(data) {
    // Agrupar pronósticos por día (tomar el del mediodía)
    const dailyForecasts = [];
    const processedDays = new Set();

    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateStr = date.toDateString();

        // Tomar el pronóstico del mediodía (12:00) o el más cercano
        const hour = date.getHours();
        if (!processedDays.has(dateStr) && (hour === 12 || hour === 15)) {
            processedDays.add(dateStr);
            dailyForecasts.push(item);
        }
    });

    // Tomar solo los primeros 5 días
    const fiveDayForecast = dailyForecasts.slice(0, 5);

    // Renderizar tarjetas
    elements.forecastCards.innerHTML = fiveDayForecast.map(day => `
        <div class="forecast-card">
            <p class="forecast-day">${capitalizeFirst(getDayName(day.dt))}</p>
            <p class="forecast-date">${getShortDate(day.dt)}</p>
            <img
                src="${getWeatherIconUrl(day.weather[0].icon)}"
                alt="${day.weather[0].description}"
                class="forecast-icon"
            >
            <div class="forecast-temp">
                <span class="temp-max">${Math.round(day.main.temp_max)}°</span>
                <span class="temp-min">${Math.round(day.main.temp_min)}°</span>
            </div>
            <p class="forecast-description">${capitalizeFirst(day.weather[0].description)}</p>
        </div>
    `).join('');
}

// ==========================================
// MAIN FUNCTIONS
// ==========================================

async function loadWeatherByCity(city) {
    try {
        showLoading();

        // Fetch current weather
        const weatherData = await fetchWeatherByCity(city);
        state.currentWeather = weatherData;
        state.currentCity = city;

        // Fetch forecast
        const forecastData = await fetchForecast(weatherData.coord.lat, weatherData.coord.lon);
        state.forecast = forecastData;

        // Render
        renderCurrentWeather(weatherData);
        renderForecast(forecastData);

        // Save to localStorage
        localStorage.setItem('lastCity', city);

        showWeather();
    } catch (error) {
        console.error('Error loading weather:', error);
        showError(error.message);
    }
}

async function loadWeatherByCoords(lat, lon) {
    try {
        showLoading();

        // Fetch current weather
        const weatherData = await fetchWeatherByCoords(lat, lon);
        state.currentWeather = weatherData;
        state.currentCity = weatherData.name;

        // Fetch forecast
        const forecastData = await fetchForecast(lat, lon);
        state.forecast = forecastData;

        // Render
        renderCurrentWeather(weatherData);
        renderForecast(forecastData);

        showWeather();
    } catch (error) {
        console.error('Error loading weather:', error);
        showError(error.message);
    }
}

function getUserLocation() {
    if (!navigator.geolocation) {
        showError('La geolocalización no está disponible en tu navegador');
        return;
    }

    showLoading();

    navigator.geolocation.getCurrentPosition(
        (position) => {
            loadWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
            console.error('Geolocation error:', error);
            showError('No se pudo obtener tu ubicación. Por favor, busca una ciudad.');
            // Cargar ciudad por defecto
            loadWeatherByCity(CONFIG.DEFAULT_CITY);
        }
    );
}

// ==========================================
// EVENT HANDLERS
// ==========================================

function handleSearch() {
    const city = elements.searchInput.value.trim();

    if (!city) {
        showError('Por favor, ingresa el nombre de una ciudad');
        return;
    }

    loadWeatherByCity(city);
    elements.searchInput.value = '';
}

function handleLocationClick() {
    getUserLocation();
}

function handleRetry() {
    if (state.currentCity) {
        loadWeatherByCity(state.currentCity);
    } else {
        const lastCity = localStorage.getItem('lastCity') || CONFIG.DEFAULT_CITY;
        loadWeatherByCity(lastCity);
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

elements.searchBtn.addEventListener('click', handleSearch);

elements.searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

elements.locationBtn.addEventListener('click', handleLocationClick);

elements.retryBtn.addEventListener('click', handleRetry);

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Check if API key is configured
    if (CONFIG.API_KEY === 'TU_API_KEY_AQUI') {
        showError('Por favor, configura tu API key de OpenWeatherMap en app.js. Puedes obtener una gratis en https://openweathermap.org/api');
        return;
    }

    // Load last searched city or default city
    const lastCity = localStorage.getItem('lastCity');

    if (lastCity) {
        loadWeatherByCity(lastCity);
    } else {
        // Try to get user location first, fallback to default city
        getUserLocation();
    }
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// SERVICE WORKER (Optional - for PWA)
// ==========================================

// Uncomment to enable PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    });
}
*/

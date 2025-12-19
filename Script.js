const apiKey = "9a61751859e3b2cf7c748155c3e78f48"; // Replace with your actual key
const toggleBtn = document.getElementById("themeToggle");

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name");

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeather(weatherURL);
    fetchForecast(forecastURL);
}

function getCurrentLocationWeather() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetchWeather(weatherURL);
        fetchForecast(forecastURL);
    });
}

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "🌙";
} else {
    toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    toggleBtn.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});


async function fetchWeather(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("City not found");

        const data = await res.json();
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        const weatherInfo = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <img src="${iconUrl}" alt="Weather Icon">
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
        document.getElementById("weatherResult").innerHTML = weatherInfo;

    } catch (err) {
        document.getElementById("weatherResult").innerHTML =
            `<p style="color:red;">${err.message}</p>`;
    }
}

async function fetchForecast(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        const forecastDiv = document.getElementById("forecastResult");
        forecastDiv.innerHTML = "";

        const dailyData = data.list.filter(f => f.dt_txt.includes("12:00:00"));

        dailyData.slice(0, 5).forEach(day => {
            const date = new Date(day.dt_txt).toDateString();
            const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
            const temp = day.main.temp;

            forecastDiv.innerHTML += `
        <div class="day">
          <h4>${date}</h4>
          <img src="${icon}" alt="icon">
          <p>${temp}°C</p>
          <p>${day.weather[0].description}</p>
        </div>
      `;
        });

    } catch (err) {
        document.getElementById("forecastResult").innerHTML = `<p style="color:red;">Unable to fetch forecast</p>`;
    }
}

# Weather App

A simple and elegant weather application built with HTML, CSS, and JavaScript. It provides real-time weather updates and a 5-day forecast for any city, along with geolocation support.

## Features

-   **Real-Time Weather:** Get current weather conditions including temperature, description, humidity, and wind speed.
-   **5-Day Forecast:** View the forecast for the upcoming days.
-   **Search by City:** Easily search for weather information for any city worldwide.
-   **Current Location:** Use the "Current Location" button to get weather data for your exact position.
-   **Dark/Light Mode:** Toggle between dark and light themes. Your preference is saved automatically!

## Technologies Used

-   **HTML5**
-   **CSS3** (Custom styling with responsive design)
-   **JavaScript** (ES6+)
-   **OpenWeatherMap API** (For weather data)

## Getting Started

### Prerequisites

You need a web browser to run this application.

### Installation

1.  Clone the repository or download the source code.
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory.
3.  Open `index.html` in your web browser.

### API Key Configuration

The project currently uses a hardcoded API key for demonstration purposes. For production or personal use, valid API keys should be obtained from [OpenWeatherMap](https://openweathermap.org/api).

To use your own key:
1.  Open `script.js`.
2.  Locate the line: `const apiKey = "YOUR_API_KEY";`
3.  Replace the existing key with your own.

## Usage

1.  **Search:** Enter a city name in the search bar and click "Search".
2.  **Locate:** Click the "Current Location 📍" button to allow the browser to detect your location.
3.  **Theme:** Click the sun/moon icon in the top right corner to switch themes.

## License

This project is open source and available for personal and educational use.

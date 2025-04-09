
---

```markdown
# 🌤️ Weather App

A responsive and theme-toggleable Weather App built using **React** and **TailwindCSS**, integrated with the **OpenWeather API** to fetch real-time weather data.

---

## 🛠 Tech Stack

- **React.js** – for building the frontend UI
- **TailwindCSS** – for fast and responsive styling
- **OpenWeather API** – to fetch live weather data
- **Vite** – for blazing-fast development and bundling

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ojhapriyanshu/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Add Your API Key**
   - Create a `.env` file at the root of your project:
     ```env
     VITE_API_KEY=your_openweather_api_key_here
     ```
   - You can get your API key by creating an account on [OpenWeather](https://openweathermap.org/api).

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

---

## 🌐 API Integration Details

- **API Provider:** [OpenWeather](https://openweathermap.org/api)
- **Base URL:**
  ```
  https://api.openweathermap.org/data/2.5/weather
  ```
- **Query Format:**
  ```
  ?q={city_name}&units=metric&appid={API_KEY}
  ```
- **Required Parameters:**
  - `q` – City name (e.g., `London`)
  - `units` – Use `metric` for Celsius
  - `appid` – Your API key

### ⛔ API Rate Limits (Free Tier)

- **60 calls/minute**
- **1,000,000 calls/month**
- For updated limits, visit the [Pricing Page](https://openweathermap.org/price)

---

## ✨ Features

- Light/Dark mode toggle
- Real-time weather display (temperature, wind speed, humidity)
- Dynamic weather icons
- Recent searches dropdown (up to 6 entries)
- Auto search for default city on load
- Responsive UI with TailwindCSS

---

## 📁 Folder Structure

```
src/
│
├── assets/             # Weather icons and UI images
├── components/
│   └── Weather.jsx     # Main weather component
├── App.jsx
├── main.jsx
└── Weather.css         # Custom styling
```

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/d33d67f3-7b70-434c-907f-e60d8b1d1d13)



---




```

---

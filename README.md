# 🚀 Crypto Tracking Web App

A modern **Crypto Tracking Web Application** built with **React** that allows users to track real‑time cryptocurrency prices, switch between multiple currencies, manage favorites, search coins with debounce, and toggle between light and dark themes — all with a clean and responsive UI.

---

## ✨ Features

* 🔄 **Real‑time Cryptocurrency Prices** (CoinGecko API)
* 💱 **Multiple Currency Support** (USD, EUR, INR)
* 📈 **Price Direction Indicator** (▲ / ▼ with color)
* 🔍 **Search with Debounce** for better performance
* ⭐ **Favorites** (saved using `localStorage`)
* 🌓 **Light / Dark Theme Toggle** (local to app, not global)
* 📄 **Pagination** for large data sets
* 📱 **Responsive Design** (Desktop & Mobile friendly)

---

## 🛠️ Technologies Used

### Frontend

* **React.js** (Functional Components & Hooks)
* **JavaScript (ES6+)**
* **Tailwind CSS** (Utility‑first styling)

### APIs

* **CoinGecko API** – Live cryptocurrency market data

### State & Utilities

* React Hooks (`useState`, `useEffect`)
* Custom Hooks (`useTheme`, `useDebounce`, `useFavorites`)
* Browser `localStorage`

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   └─ AreaChartComponents/
 │       ├─ SearchBar.jsx
 │       ├─ ThemeToggle.jsx
 │       └─ Pagination.jsx
 ├─ hooks/
 │   ├─ useDebounce.js
 │   ├─ useFavorites.js
 │   └─ useTheme.js
 ├─ dummy.js
 ├─ App.jsx
 └─ main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/avigupta002/crypto-tracking
```

### 2️⃣ Navigate to Project Folder

```bash
cd crypto-tracking-web-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🖥️ Clone & Run on Another System

To run this project on **any other system**:

1. Install **Node.js (v18 or later)**
2. Install **Git**
3. Clone the repository using the command above
4. Run `npm install`
5. Run `npm run dev`

✔ Works on **Windows / macOS / Linux**

---

## 🌍 Supported Currencies

* USD ($)
* EUR (€)
* INR (₹)

You can easily add more currencies in `dummy.js`.

---

## 🔒 Data & Privacy

* No login required
* No personal data stored
* Favorites stored locally in the browser only

---

## 📌 Future Improvements

* 📊 Coin detail page with charts
* 🔔 Price alerts
* 🔄 Infinite scroll
* 🌐 Multi‑language support
* 💾 Backend integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---


## 👨‍💻 Author
by RaviKumar
**Crypto Tracking Web App**

Built with ❤️ using React

---

⭐ If you like this project, don’t forget to give it a star!

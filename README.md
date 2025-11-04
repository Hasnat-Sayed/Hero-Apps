# 📱 Hero Apps - Mobile Application Showcase Platform

A modern, responsive web application built with React that showcases mobile applications with features like search, filtering, installation tracking, and detailed app information with interactive charts.

## 🌟 Live Demo

[View Live Project](https://hero-apps-2099.netlify.app/)

## 🚀 Features

### Core Features

- 🏠 **Home Page** with banner, statistics, and top apps showcase
- 📱 **All Apps Page** with live search functionality
- 📊 **App Details Page** with interactive review charts (Recharts)
- 💾 **Installation System** with localStorage persistence
- 🔍 **Live Search** - Real-time, case-insensitive app filtering
- 📥 **Sort by Downloads** - High-to-Low and Low-to-High sorting
- 🎯 **Active Route Indication** in navigation
- ⚡ **Loading Animations** for navigation and search operations
- 🎨 **Responsive Design** - Only Mobile and desktop friendly
- ❌ **Custom Error Page** for invalid routes
- 🍞 **Toast Notifications** for user actions

### Challenge Features (localStorage)

- ✅ **Install/Uninstall Apps** - Persistent across sessions
- 📦 **Installation Page** - View all installed apps
- 🔄 **Dynamic Install Button** - Shows "Install" or "Installed" state
- 🗑️ **Uninstall Functionality** - Remove apps with confirmation

## 🛠️ Technologies Used

- **React** (v18+) - Frontend library
- **React Router DOM** - Navigation and routing
- **Recharts** - Data visualization for review charts
- **Tailwind CSS** - Utility-first styling
- **DaisyUI** - Component library
- **React Toastify** - Toast notifications
- **LocalStorage API** - Data persistence
- **Vite** - Build tool and dev server

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/Hasnat-Sayed/Hero-Apps.git

cd Hero-Apps
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## 📁 Project Structure

```
Hero-Apps/
├── public/
│   └── data.json          # App data
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SingleCardApp.jsx
│   │   ├── Loading.jsx
│   │   └── ...
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── Apps.jsx
│   │   ├── AppDetails.jsx
│   │   ├── Installation.jsx
│   │   ├── AppNotFound.jsx
│   │   ├── ErrorPage.jsx
│   │   └── Root.jsx
│   ├── Hooks/
│   │   └── useApps.js
│   ├── Utils/
│   │   └── localStorage.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── README.md
```

## 👨‍💻 Author

**Hasnat Bin Sayed**

- GitHub: [@Hasnat-Sayed](https://github.com/Hasnat-Sayed)
- Facebook: [Hasnat Bin](https://www.facebook.com/hasnatbin.sayed1/)

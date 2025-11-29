# 🍅 Pomodoro Focus Timer

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A cross-platform mobile application designed to boost productivity using the **Pomodoro Technique**. This project was developed as a coursework assignment, demonstrating the integration of modern web technologies (**Angular 18**) with native mobile capabilities via **Capacitor**.

---

## ✨ Key Features

This application implements all core requirements for a time management tool:

* **⏱ Smart Timer Logic:**
    * Supports 3 modes: **Work** (Focus), **Short Break**, and **Long Break**.
    * Visual feedback: The interface changes color based on the current mode (Red for Work, Green for Break).
    * Circular progress display.

* **⚙️ Customization:**
    * Users can dynamically adjust the duration of Work and Break sessions directly from the app interface.
    * Settings are validated to ensure realistic timeframes.

* **📳 Native Device Features:**
    * **Haptic Feedback:** The device vibrates when a timer session ends (using `@capacitor/haptics`).
    * **Audio Notifications:** Custom sound (`beep.mp3`) plays upon session completion.
    * **Mobile Optimized:** Full Android support.

* **🎨 Modern UI/UX:**
    * Dark Mode interface tailored for concentration.
    * Responsive layout.
    * Smooth transitions and animations.

---

## 🛠 Tech Stack

The project relies on a robust and modern stack:

* **Frontend:** Angular 18 (Standalone Components, Signals)
* **Mobile Runtime:** Capacitor 6
* **Language:** TypeScript
* **Styling:** SCSS (Sass)
* **Plugins:** `@capacitor/haptics`, `@capacitor/android`

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
* Node.js (LTS version)
* Android Studio (for mobile emulation)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ShevSerhii/Pomodoro.git](https://github.com/ShevSerhii/Pomodoro.git)
   cd Pomodoro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in Browser (Web Mode):**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200/`.

4. **Run on Android:**
   ```bash
   ng build
   npx cap sync
   npx cap open android
   ```
   Wait for Gradle to sync, select your device, and press **Run (▶)**.

---

## 📂 Project Structure

A brief overview of the key files:

```text
src/
├── app/
│   ├── services/
│   │   └── timer.ts       # Core logic (Signals, Audio, Haptics)
│   ├── app.component.ts   # Main component (UI logic)
│   ├── app.component.html # Template (View)
│   └── app.component.scss # Styles (Dark theme)
├── assets/
│   └── beep.mp3           # Custom notification sound
└── main.ts                # Application entry point
```

---

## ✅ Coursework Requirements Checklist

This project fulfills the following technical requirements:

- [x] **Subject Area Analysis:** Implemented Pomodoro technique logic.
- [x] **Mobile Platform:** Built for Android.
- [x] **Package Management:** All dependencies installed via NPM.
- [x] **Native Plugins:** Used `Capacitor Haptics` for vibration.
- [x] **UI Implementation:** Custom components (no Ionic components used).
- [x] **Scope:** Codebase covers all functional requirements.
- [x] **Bonus:** Used Git for version control.
- [x] **Bonus:** Project documentation (README).

---

## 📄 License

This project is open-source and available under the MIT License.

---

**Author:** Serhii Shevchenko  
**Project:** Coursework 2025

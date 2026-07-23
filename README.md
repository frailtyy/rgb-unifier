# RGB Unifier

A sleek, ultra‑lightweight desktop app that lets you control RGB lighting across:

- **HP Gaming Mouse G360** – DPI (200‑6200), polling rate (125‑1000 Hz), LED modes.
- **Corsair K55 Core RGB TKL Keyboard** – per‑zone lighting, brightness, effects (wave, pulse, static, color‑cycle).
- **Gigabyte B650M DS3H Motherboard** – OpenRGB integration for headers, RAM and ambient lighting.

## Tech Stack
- **Electron** (v28) for the desktop shell.
- **React 18 + Vite 5** for fast UI development.
- **Tailwind CSS** + **Lucide‑React** for a dark, glass‑morphism look.
- **node‑hid** (fallback to Web‑HID) for mouse HID communication.
- **openrgb‑sdk** (raw TCP client) for keyboard & motherboard.

## Prerequisites
- **Node.js 20+** and **npm** (or yarn).
- **Git** for cloning.
- **OpenRGB daemon** running on your PC (download from https://openrgb.org).

## Setup Guide (Windows)
1. **Clone the repo**
   ```
   git clone https://github.com/frailtyy/rgb-unifier.git
   cd rgb-unifier
   ```
2. **Install dependencies**
   ```
   npm install
   ```
3. **Run in development mode** (hot‑reloading UI)
   ```
   npm run dev
   ```
   The Electron window will open and point to the Vite dev server.
4. **Build for production**
   ```
   npm run build
   ```
   This creates `dist/renderer` with the bundled React app.
5. **Create a portable Windows executable**
   ```
   npm run package
   ```
   The output will be `dist/RGB-Unifier-Portable.exe`.
6. **Run the app**
   Double‑click the generated `.exe`. It will appear in your system tray and can be closed to the tray.

## How the UI works
- **Mouse Controls** – Adjust DPI and polling rate; click *Apply* to send HID feature reports via `src/lib/hid.ts`.
- **Keyboard Controls** – Choose zone, mode, colour and brightness; click *Apply* to send commands to OpenRGB (via `src/lib/openrgb.ts`).
- **Motherboard Controls** – Select header and mode; colour changes are routed through the same OpenRGB client.

## Development / Customisation
- UI components live under `src/components/` – feel free to extend with more effects.
- HID logic is in `src/lib/hid.ts`; you may need to adjust report IDs for newer mouse firmware.
- OpenRGB client is a thin wrapper; you can use the full `openrgb-sdk` API for advanced features.

## Troubleshooting
- **OpenRGB not detected** – Ensure the OpenRGB daemon is running and listening on port 6742.
- **Mouse not listed** – Run the app with Administrator rights; some HID devices require elevated permissions.
- **Build fails** – Make sure you have Visual C++ Build Tools installed (required by some native node modules).

---
Enjoy a unified, beautiful RGB experience across all your hardware! 🚀

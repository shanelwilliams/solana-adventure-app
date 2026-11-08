# 🚀 Hackathon Simulator: The Solana Developer Grind

A gamified text-adventure simulator tracking a developer's high-stakes 48-hour sprint during a Solana Hackathon. Balance your energy pools, squash critical codebase bugs, fix front-end friction, and simulate a high-speed Web3 wallet identity login layer under intense time pressure!

👉 **[PLAY THE LIVE GAME PoC](https://shanelwilliams.github.io/solana-adventure-app/)**

---

## 💡 The Concept
Built for the Solana beginner bracket, this application explores the unique user experience and psychological grind of a weekend hackathon. By transforming core software engineering tasks (debugging local directories, managing network optimization, testing responsive layouts) into dynamic narrative choice nodes, users directly experience what it takes to build a prototype under a ticking clock.

---

## 🎮 Core Game Features & Mechanics
* **Dynamic Atmospheric Backgrounds:** The main layout container evaluates player choices instantly to swap the fullscreen backdrop wallpaper—visually tracking your descent from an optimistic noon kickoff to late-night messy workstation zones and abstract matrix chaos.
* **Smart Frosted-Glass Text Deck:** Styled using a 40% transparent dark charcoal background tint (`rgba(15, 15, 20, 0.40)`) and an intentional 12px blur filter. This ensures all typography and story text blocks maintain crisp readability, completely independent of the wallpaper graphics beneath them.
* **Hardware-Accelerated Choice Nodes:** Your custom choice button cards feature a smooth 3D lift animation (`translate(6px, -2px)`) and text color transitions on hover, preventing annoying word-wrapping layouts while keeping the action panel highly interactive.
* **Full-Screen Emergency Overlay System:** Built an early-return check trap that intercepts the React layout layer the second a player's energy drops to 0%. The screen triggers a complete industrial lockdown with pulsing warning animations and a high-contrast uppercase reset override button.
* **Cross-Device Mobile Optimization:** Configured with specific CSS media queries (`max-width: 600px`) and `overflow-x: hidden` boundary locks, scaling down font sizes and expanding button footprints seamlessly for thumb-tapping on smartphone viewports.

---

## 🛡️ Engineering Decisions & Refactoring Solutions
During the development sprint, we encountered structural version mismatches between modern React production environments and legacy Web3 wallet adapter UI components. 

To ensure absolute application stability for the Sunday morning submission window, the architecture was intentionally refactored to prioritize:
* **Client-Side Simulation:** Built a lightweight, custom-coded client-state machine to accurately simulate a secure Phantom Wallet connection workflow (`Connect` ➔ `Authorizing` ➔ `Connected: Public Key`) without bloating the project tree with unstable external dependencies.
* **Asset Path Normalization:** Configured production build parameters to prefix compiled script networks with specific base paths (`--base=/solana-adventure-app/`), completely resolving hidden 404 asset loader blocks on remote servers.

---

## 🛠️ Tech Stack Built From Scratch
* **Framework Engine:** React 18
* **Build Architecture Toolchain:** Vite
* **Layout Design:** Modern Flexbox Grid, Custom CSS Grid Media Queries, and Google Fonts
* **Graphics Sourcing Platform:** Direct CDN Stock Imagery via Unsplash

---

## 🏃‍♀️ How to Launch Locally
1. Clone the public workspace repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate directly into the root folder:
   ```bash
   cd solana-adventure-app
   ```
3. Install the standard dependency tree packages:
   ```bash
   npm install
   ```
4. Fire up the local Vite development web server stream:
   ```bash
   npm run dev
   ```
5. Pull up the dashboard HUD inside your browser window tab:

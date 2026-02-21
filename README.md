# Home Energy Simulator ⚡

A modern, interactive React application for simulating and visualizing home energy systems. This educational tool allows users to model energy flows between the power grid, solar panels, batteries, EV chargers, and household appliances in real-time.

## 🎯 Features

- **Interactive System Diagram:** Visually build and observe power flows between various energy components.
- **Real-time Simulation:** Watch how energy generation, storage, and consumption interact under different conditions.
- **Component Ecosystem:**
  - Power Grid & Grid Meters (NMI)
  - Main Switchboards
  - Solar Arrays & Inverters
  - Home Battery Storage
  - EV Chargers
  - Heat Pumps & General Loads
- **Scenario Testing:** Load preset scenarios to understand different energy setups (e.g., high solar export, battery backup).
- **Educational Content:** Built-in "Learn", "Protocols", and "Strategies" sections to explain energy concepts.
- **Setup Sharing:** Share your custom energy setup configurations easily via URL or rely on automatic local storage auto-saves.
- **User Levels:** Toggle between "Beginner" and "Advanced" views to adjust the complexity of information shown.
- **Theming & Localization:** Full support for Light/Dark themes and multi-language (i18n) interfaces.

## 💻 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **State Management:** Zustand
- **Icons:** Lucide React
- **Styling:** CSS-in-JS (Inline) / CSS Variables
- **Utility:** `lz-string` (for URL setup compression)

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd home-energy-simulator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Build for Production

To create a production build, run:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```text
src/
├── components/       # Reusable React components
│   ├── diagram/      # Simulation canvas and flow visualization
│   ├── education/    # Learn, protocols, and strategies views
│   ├── panels/       # Editors, summaries, and stats panels
│   ├── scenarios/    # Preset scenario selectors
│   └── toolbar/      # Top-level setup controls
├── store/            # Zustand state management (energyStore.ts)
├── types/            # TypeScript interfaces (energy, components)
├── utils/            # Simulation math and persistence logic
├── hooks/            # Custom React hooks
├── i18n/             # Internationalization config and dictionaries
├── theme/            # Theme context and switching logic
├── App.tsx           # Main application entry and layout
└── index.css         # Global styles and theme variables
```

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📝 License

This project is intended for educational purposes. See the `LICENSE` file for details (if applicable).

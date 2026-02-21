# AI Agent Instructions for Home Energy Simulator

This document provides system instructions, conventions, and context for AI coding assistants (like Copilot, Cursor, Cline, or Opencode) working on the **Home Energy Simulator** project.

## 🎯 Project Overview

**Home Energy Simulator** is an interactive, educational React application that models home energy systems. It visualizes the power flows between various components (Grid, Solar Panels, Inverters, Batteries, EV Chargers, Loads, etc.) under different user-defined scenarios.

### Core Architecture
- **Frontend Framework:** React 19, built with Vite.
- **Language:** TypeScript (`strict` mode).
- **State Management:** Zustand is used extensively. The core logic of the simulation, component states, active tabs, and power flows are all handled centrally in `src/store/energyStore.ts`.
- **Styling:** We use inline styles with CSS variables defined in `src/index.css`. This allows for seamless theme switching (Light/Dark mode).
- **Icons:** We use `lucide-react`.

## 🧠 Core Engineering Principles

When writing or modifying code in this repository, agents must adhere strictly to these principles:

### 1. State Management (Zustand)
- All shared application state and domain logic MUST live in `src/store/energyStore.ts` or related slice files.
- Avoid passing deep props for simulation state. Use `useEnergyStore` hooks within components to select exactly what you need.
- Keep the simulation math logic pure. Pure calculation utilities should live in `src/utils/simulation.ts` rather than crowding the Zustand store, but the store calls these utils to update the `SimulationState`.

### 2. Typing & TypeScript
- Always define interfaces or types for new domain concepts in `src/types/`. Do not define types inline inside components unless they are strictly localized component props.
- Use explicit return types for functions where it aids readability or prevents implicit `any` fallbacks.
- Strictly adhere to `EnergyComponent`, `SimulationState`, and `PowerFlow` types defined in `src/types/energy.ts`.

### 3. UI and Styling
- **No external CSS frameworks** (like Tailwind, Bootstrap, or Material UI) should be introduced.
- Use inline styles referencing the existing CSS custom properties (variables) defined in `index.css`. 
- **Theming:** Always use `var(--color-name)` instead of hardcoded hex values (e.g., use `var(--bg-primary)`, `var(--text-muted)`) to ensure Light and Dark modes continue to function seamlessly.

### 4. Internationalization (i18n)
- **Never hardcode strings in components.** All user-facing text must use the `useTranslation` hook and translation files located in `src/i18n/`.
- When adding new features, you must add the corresponding translation keys to *all* language files (English, Traditional Chinese, Spanish, Japanese, Korean, Vietnamese). If you cannot translate it, copy the English string to other files so the build does not break (the build is strict about missing translation keys).

### 5. Modularity & Components
- Keep React components small and focused. 
- If a panel or a view gets too large, split it into smaller sub-components within the same directory.
- Simulation visualization belongs in `src/components/diagram/`.
- Read-only information panels and configuration inputs belong in `src/components/panels/`.
- Educational text and strategies belong in `src/components/education/`.

### 6. Persistence
- The project supports URL sharing via `lz-string` and local storage autosave.
- If you modify the `SetupSnapshot` interface, ensure you maintain backwards compatibility for users loading older snapshots from `localStorage` or shared URLs. Always handle missing properties gracefully.

## 🛠️ Typical Workflows

### Adding a New Energy Component
1. Add the component type to `ComponentType` in `src/types/energy.ts`.
2. Update `createDefaultComponent` in `src/store/energyStore.ts` to include default stats and position for the new component.
3. Update the simulation math in `src/utils/simulation.ts` to accurately calculate the new component's interactions (e.g., does it draw from AC? Does it generate DC?).
4. Create a visual representation in `src/components/diagram/` and update `SystemDiagram.tsx` to render it.
5. Add configuration UI fields in `src/components/panels/ComponentEditor.tsx`.
6. Add translation keys for the component name and description in `src/i18n/`.

### Modifying the Simulation Engine
- The simulation runs on a "tick" basis or on user input triggers. When modifying the engine (`utils/simulation.ts`), ensure energy balances (Production = Consumption + Storage/Grid export).
- Always ensure `maxPowerW` constraints are respected during power flow calculations.

## 🚨 Anti-patterns to Avoid
- Do not add React Context unless absolutely necessary (prefer Zustand).
- Do not bypass `energyStore.ts` to manually manipulate `localStorage`. Use the established persistence utils.
- Do not introduce large third-party libraries without explicit user request. The app is meant to be lightweight and fast.

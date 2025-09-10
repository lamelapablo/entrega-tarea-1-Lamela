# Tarea 2 (Navigation)

A React Native app built with Expo that demonstrates navigation patterns using expo-router. This project focuses on configuring bottom tabs and screen headers.

## Features

- Bottom Tab Navigation (expo-router / react-navigation)
- Header titles and custom tab labels (title / headerTitle vs tabBarLabel)
- Tab icons with color and size provided by the navigator
- Modal on Profile screen for editing user name
- Reusable UI components (Card, Button) and centralized color constants

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/lamelapablo/entrega-tarea-1-Lamela.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

## Project Structure

```
entrega-tarea-1-Lamela/
├── app/
│   ├── _layout.tsx        # Tabs setup and shared screenOptions (tab icons, colors, header style)
│   ├── index.tsx          # Main screen (cards)
│   ├── counter.tsx        # Counter screen
│   └── profile.tsx        # Profile screen (modal)
├── components/
│   ├── Card.tsx
│   └── Button.tsx
├── constants/
│   └── Colors.ts
├── package.json
└── README.md
```

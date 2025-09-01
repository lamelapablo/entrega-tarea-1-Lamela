# Tarea 1 (Cards)

A React Native app built with Expo that demonstrates interactive card components with color transitions.

## Features

- Interactive cards with press feedback
- Color transitions on press
- Responsive layout
- Custom styling with dynamic color palette

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
tarea1/
├── app/                    # Application routes
│   ├── _layout.tsx        # Root layout component
│   └── index.tsx          # Main screen
├── components/            
│   └── Card.tsx           # Reusable card component
├── constants/
│   └── colors.ts          # Color palette definitions
└── package.json
```

## Color Palette

The application uses a custom color scheme defined in `constants/colors.ts`:

- Green (`#4A9782`): Primary card color
- Dark Green (`#004030`): Press state color
- Beige (`#DCD0A8`): Default text color
- White (`#FFF`): Press state text color

## Development

To modify the cards:

1. Navigate to `components/Card.tsx`
2. Adjust the styles in the `StyleSheet` object
3. Modify the press behavior in the `Pressable` component

## Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://expo.github.io/router/docs/)

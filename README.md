# Tarea 3 (Components)

A React Native app built with Expo that demonstrates navigation patterns using expo-router. This project focuses on configuring bottom tabs and screen headers.

## Features

- Bottom Tab Navigation (`expo-router` / `react-navigation`)
- Header titles and custom tab labels (`title` / `headerTitle` vs `tabBarLabel`)
- Tab icons with color and size provided by the navigator
- Modal on Profile screen for editing user name
- **Gallery screen** displaying a list of product cards with images, prices, and descriptions
- Long press to toggle favorite state on products
- Modal on product tap showing enlarged image and description with dynamic resize modes
- Search input to filter products by name
- Reusable UI components (`ProductCard`, `ProductModal`, `Button`)
- Centralized color constants via `COLORS`
- Support for both remote image URLs and local assets using `require()`

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
├── app/ (tabs)
│   ├── _layout.tsx         # Tabs setup and shared screenOptions (tab icons, colors, header style)
│   ├── index.tsx           # Main screen (cards)
│   ├── counter.tsx         # Counter screen
│   ├── profile.tsx         # Profile screen (modal)
│   └── gallery.tsx         # Gallery screen with product list, filter input, and modal
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── ProductCard.tsx     # Displays product info and handles modal/favorite logic
│   └── ProductModal.tsx    # Modal component for product details and image resizing
├── constants/
│   └── Colors.ts           # Centralized color palette
├── data/
│   └── dummyProducts.ts    # Product mock data with local and remote images
├── assets/
│   └── images/             # Local image assets (e.g. headphones.jpg)
├── types/
│   └── product.type.ts     # Product type definition
├── package.json
└── README.md
```

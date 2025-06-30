# LearnRedux - React Native Shopping Cart App

A beginner-friendly React Native project built with Expo to learn Redux state management. This simple shopping cart app demonstrates how to manage global state, implement theming, and handle common Redux patterns in a mobile application.

## 🎯 Project Overview

This is a learning-focused React Native application that showcases Redux fundamentals through a practical shopping cart implementation. The app allows users to add and remove products from their cart while demonstrating how Redux manages global state across different components.

**Key Learning Concepts:**
- Redux state management in React Native
- Global theming with Redux
- Component communication through shared state
- Basic navigation patterns

## ✨ Features

- **Shopping Cart Functionality**
  - Add products to cart with a single tap
  - Remove products from cart
  - Real-time cart count and total price updates

- **Dynamic Theming**
  - Toggle between light and dark modes
  - Theme changes apply instantly across all components
  - Theme state managed through Redux

- **State Persistence**
  - Cart items and theme preferences persist across app restarts
  - Uses AsyncStorage for local data storage
  - Seamless user experience with saved preferences

- **Responsive UI Components**
  - Header displays cart summary (total items + total price)
  - Product cards with add/remove functionality
  - Settings screen for theme customization
  - All components automatically adapt to theme changes

## 🛠️ Tech Stack

- **React Native** with Expo for cross-platform development
- **Redux Toolkit** for efficient store setup and management
- **Redux Persist** for state persistence across app sessions
- **AsyncStorage** for local data storage
- **React Navigation** for screen navigation
- **combineReducers** for managing multiple state slices
- **Custom theming system** with light/dark mode support

## 📁 Project Structure

```
learnRedux/
├── components/
│   ├── Header.js          # Cart summary display
│   ├── Product.js         # Individual product card
│   ├── ProductWrapper.js  # Product list container
│   └── Settings.js        # Theme toggle settings
├── redux/
│   ├── Action.js          # Action creators
│   ├── Constant.js        # Action type constants
│   ├── Reducer.js         # Cart state reducer
│   ├── ThemeReducer.js    # Theme state reducer
│   ├── RootReducer.js     # Combined reducers with persistence
│   └── Store.js           # Redux store with persist configuration
├── common/
│   └── colors.js          # Theme definitions (lightTheme, darkTheme)
└── App.js                 # Main application component
```

## 🔄 How Redux Works in This Project

This project follows the standard Redux pattern with a clear separation of concerns:

### 1. **Define Constants** (`Constant.js`)
```javascript
// Define action types as constants to prevent typos
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const THEME = 'THEME';
```

### 2. **Create Actions** (`Action.js`)
```javascript
// Action creators return plain objects with type and data
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  data: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  data: productId
});

export const setTheme = (isDarkMode) => ({
  type: THEME,
  payload: isDarkMode
});
```

### 3. **Write Reducers**
- **`Reducer.js`**: Manages cart state (adding/removing items, calculating totals)
- **`ThemeReducer.js`**: Handles theme switching between light and dark modes

### 4. **Combine Reducers with Persistence** (`RootReducer.js`)
```javascript
// RootReducer.js
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reducer } from './Reducer'
import { themeReducer } from './ThemeReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeReducer','reducer'] // persist both theme and cart state
}

const rootReducer = combineReducers({
  reducer,
  themeReducer,
})

export default persistReducer(persistConfig, rootReducer);
```

### 5. **Configure Store with Persistence** (`Store.js`)
```javascript
// Store.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './RootReducer'
import { persistStore } from 'redux-persist'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
export default store;
```

### 6. **Setup App with Persistence** (`index.js` or main app file)
```javascript
// index.js
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/Store';
import App from './App';

const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

registerRootComponent(AppRedux);
```

### 7. **Connect Components**
Components use React-Redux hooks to interact with the store:
- **`useSelector`**: Read state values (`cartItems`, `isDarkMode`)
- **`useDispatch`**: Dispatch actions (`addToCart`, `removeFromCart`, `setTheme`)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (install globally: `npm install -g expo-cli`)
- Expo Go app on your mobile device (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dasgajraj/learnRedux.git
   cd learnRedux
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

   **Required packages for persistence:**
   ```bash
   npm install redux-persist @react-native-async-storage/async-storage
   # or
   yarn add redux-persist @react-native-async-storage/async-storage
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run the app**
   - Scan the QR code with Expo Go (mobile)
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 🧪 Testing the App

Once the app is running, try these interactions to see Redux in action:

1. **Cart Management**
   - Tap "Add to Cart" on any product
   - Watch the header update with new item count and total price
   - Remove items and see real-time updates

2. **Theme Switching**
   - Navigate to the Settings screen
   - Toggle the dark mode switch
   - Notice how all components instantly update their styling

3. **State Persistence**
   - Add items to cart, switch themes, navigate between screens
   - Observe how state remains consistent across the app

## 📱 UI Components

### 🛍️ Header Component
- Displays app title and shopping cart icon
- Shows badge with current cart item count
- Displays total cart value
- Automatically updates when cart state changes

### 📦 Product Component
- Individual product cards with name, price, and color
- Add/Remove buttons that dispatch Redux actions
- Visual feedback for cart status
- Responsive design that adapts to current theme

### ⚙️ Settings Component
- Simple toggle switch for dark/light mode
- Immediately applies theme changes app-wide
- Demonstrates how Redux can manage UI preferences

## 📚 Learning Objectives

This project is designed as a **learning tool** for developers new to Redux. It covers:

**Redux Fundamentals:**
- Understanding actions, reducers, and store
- Learning the unidirectional data flow
- Practicing with `useSelector` and `useDispatch` hooks

**React Native Integration:**
- Connecting Redux to React Native components
- Managing global UI state (theming)
- Handling user interactions through Redux actions

**Best Practices:**
- Organizing Redux code structure
- Separating concerns (actions, reducers, constants)
- Using Redux Toolkit for modern Redux development

## 🚧 Future Improvements

This project can be extended with additional features:

- **State Persistence**: Add `redux-persist` to save cart and theme preferences
- **Testing**: Implement unit tests for reducers and action creators
- **Enhanced UI**: Add product images, loading states, and animations
- **Data Fetching**: Integrate with a real API for product data
- **Form Handling**: Add product search and filtering capabilities
- **Performance**: Implement memoization and optimization techniques

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:
- Report bugs or suggest improvements
- Add new features that demonstrate Redux concepts
- Improve documentation or add code comments
- Share your learning experience and feedback

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Created as a learning resource for developers exploring Redux with React Native. Perfect for beginners who want to understand state management through hands-on practice.

---

**Happy Learning!** 🎉 If you found this project helpful, please give it a ⭐ on GitHub!
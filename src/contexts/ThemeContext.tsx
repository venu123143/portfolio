
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Types
type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_THEME'; payload: Theme };

interface ThemeContextType {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

// Initial state and theme detection
const getInitialTheme = (): Theme => {
  const stored = localStorage.getItem('theme') as Theme;
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

// Reducer
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    case 'SET_THEME':
      localStorage.setItem('theme', action.payload);
      return { theme: action.payload };
    default:
      return state;
  }
};

// Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
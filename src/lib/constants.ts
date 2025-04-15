// API Base URL
export const API_BASE_URL = 'https://api.wex.com/v1';

// Authentication
export const AUTH_TOKEN_KEY = 'wex-auth-token';
export const REFRESH_TOKEN_KEY = 'wex-refresh-token';

// Theme
export const THEME_KEY = 'wex-theme';

// Navigation
export const NAV_ITEMS = [
  { name: 'APIs', href: '/apis' },
  { name: 'Documentation', href: '/documentation' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' },
] as const;

// Colors
export const WEX_COLORS = {
  red: '#cf1f39',
  blue: '#253746',
  lightBlue: '#55a9da',
  orange: '#F7901E',
  grey: '#58595B',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error occurred. Please check your connection.',
  UNAUTHORIZED: 'Unauthorized. Please sign in.',
  NOT_FOUND: 'Resource not found.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
} as const;
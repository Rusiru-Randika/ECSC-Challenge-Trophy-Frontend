/**
 * API Configuration
 * 
 * This file provides the base URL for API calls.
 * 
 * In development: Uses Vite's proxy (/api routes automatically forward to backend)
 * In production: You can configure VITE_API_URL to point to your backend server
 */

// Base URL for API requests
// In development, we use relative URLs because Vite proxy handles forwarding
// In production, use the full backend URL from environment variable
// Hard-coded backend URL (inlined instead of using VITE_API_URL env variable)
// NOTE: This is intentionally inlined per request. To revert to build-time
// env var usage, replace with `import.meta.env.VITE_API_URL`.
export const API_BASE_URL = 'https://ecsc-challenge-trophy-backend.onrender.com';

// Check if we're in development mode with Vite proxy
export const USE_PROXY = import.meta.env.DEV;

/**
 * Get the full API endpoint URL
 * @param {string} path - API path (e.g., '/api/teams')
 * @returns {string} Full URL or relative path depending on environment
 */
export const getApiUrl = (path) => {
  // In development with Vite proxy, use relative paths
  if (USE_PROXY) {
    return path;
  }
  // In production, prepend the base URL
  return `${API_BASE_URL}${path}`;
};

export default {
  API_BASE_URL,
  USE_PROXY,
  getApiUrl
};

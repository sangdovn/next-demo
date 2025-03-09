export const APP_NAME = "My Next.js App";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";
export const AUTH_SECRET = process.env.AUTH_SECRET || "default_secret";
export const PAGINATION_LIMIT = 10;
export const FEATURE_FLAGS = {
  enableNewUI: true,
  enableBetaFeatures: false,
};

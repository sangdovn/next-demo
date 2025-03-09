export const AUTH_CONFIG = {
  JWT_SECRET: process.env.AUTH_SECRET || "default_secret",
  SESSION_DURATION: 3600, // In seconds
};

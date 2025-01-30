import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4173, // Default to 3000 if PORT is not defined
    host: "0.0.0.0", // Allows access from other devices in the network
  },
});

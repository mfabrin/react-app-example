import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = process.cwd();

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			{ find: "@components", replacement: path.resolve(root, "src/components") },
			{ find: "@services", replacement: path.resolve(root, "src/services") },
			{ find: "@views", replacement: path.resolve(root, "src/views") },
		],
	},
	plugins: [react()],
});

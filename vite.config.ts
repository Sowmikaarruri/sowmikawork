import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite"; // <-- ADD THIS
import { Preset } from "@remix-run/dev/dist/vite/plugin";
import path from "path";
// You may also need to import the 'remix' plugin if it's not there
// import { vitePlugin as remix } from "@remix-run/dev"; 
// import { installGlobals } from "@remix-run/node"; // <-- If your template is old, you might need this too

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
  },
  plugins: [
    // Ensure you are using the Remix plugin:
    // If your remix plugin looks like this:
    // remix({}), 

    // CHANGE it to include the Vercel preset:
    remix({ 
        presets: [vercelPreset()], // <-- ADD THIS
    }), 
    
    // ... other plugins 
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function remix(arg0: { presets: Preset[]; }): import("vite").PluginOption {
  throw new Error("Function not implemented.");
}

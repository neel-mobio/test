var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../sites/common_site_config.json
var require_common_site_config = __commonJS({
  "../../../sites/common_site_config.json"(exports, module) {
    module.exports = {
      background_workers: 1,
      file_watcher_port: 6787,
      frappe_user: "admin1",
      gunicorn_workers: 9,
      live_reload: true,
      rebase_on_pull: false,
      redis_cache: "redis://localhost:13000",
      redis_queue: "redis://localhost:11000",
      redis_socketio: "redis://localhost:12000",
      restart_supervisor_on_update: false,
      restart_systemd_on_update: false,
      serve_default_site: true,
      shallow_clone: true,
      socketio_port: 9e3,
      use_redis_auth: false,
      webserver_port: 8e3,
      allow_cors: "*",
      ignore_csrf: 1
    };
  }
});

// vite.config.js
import path from "path";
import { defineConfig } from "file:///home/admin1/frappe-bench/apps/todo_app/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///home/admin1/frappe-bench/apps/todo_app/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";

// proxyOptions.js
var common_site_config = require_common_site_config();
var { webserver_port } = common_site_config;
var proxyOptions_default = {
  "^/(app|api|assets|files|private)": {
    target: `http://localhost:${webserver_port}`,
    ws: true,
    router: function(req) {
      const site_name = req.headers.host.split(":")[0];
      return `http://${site_name}:${webserver_port}`;
    }
  }
};

// vite.config.js
var __vite_injected_original_dirname = "/home/admin1/frappe-bench/apps/todo_app/frontend";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: proxyOptions_default
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "../todo_app/public/frontend",
    emptyOutDir: true,
    target: "es2015"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc2l0ZXMvY29tbW9uX3NpdGVfY29uZmlnLmpzb24iLCAidml0ZS5jb25maWcuanMiLCAicHJveHlPcHRpb25zLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG4gXCJiYWNrZ3JvdW5kX3dvcmtlcnNcIjogMSxcbiBcImZpbGVfd2F0Y2hlcl9wb3J0XCI6IDY3ODcsXG4gXCJmcmFwcGVfdXNlclwiOiBcImFkbWluMVwiLFxuIFwiZ3VuaWNvcm5fd29ya2Vyc1wiOiA5LFxuIFwibGl2ZV9yZWxvYWRcIjogdHJ1ZSxcbiBcInJlYmFzZV9vbl9wdWxsXCI6IGZhbHNlLFxuIFwicmVkaXNfY2FjaGVcIjogXCJyZWRpczovL2xvY2FsaG9zdDoxMzAwMFwiLFxuIFwicmVkaXNfcXVldWVcIjogXCJyZWRpczovL2xvY2FsaG9zdDoxMTAwMFwiLFxuIFwicmVkaXNfc29ja2V0aW9cIjogXCJyZWRpczovL2xvY2FsaG9zdDoxMjAwMFwiLFxuIFwicmVzdGFydF9zdXBlcnZpc29yX29uX3VwZGF0ZVwiOiBmYWxzZSxcbiBcInJlc3RhcnRfc3lzdGVtZF9vbl91cGRhdGVcIjogZmFsc2UsXG4gXCJzZXJ2ZV9kZWZhdWx0X3NpdGVcIjogdHJ1ZSxcbiBcInNoYWxsb3dfY2xvbmVcIjogdHJ1ZSxcbiBcInNvY2tldGlvX3BvcnRcIjogOTAwMCxcbiBcInVzZV9yZWRpc19hdXRoXCI6IGZhbHNlLFxuIFwid2Vic2VydmVyX3BvcnRcIjogODAwMCxcbiBcImFsbG93X2NvcnNcIjogXCIqXCIsXG4gXCJpZ25vcmVfY3NyZlwiOiAxXG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hZG1pbjEvZnJhcHBlLWJlbmNoL2FwcHMvdG9kb19hcHAvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2FkbWluMS9mcmFwcGUtYmVuY2gvYXBwcy90b2RvX2FwcC9mcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hZG1pbjEvZnJhcHBlLWJlbmNoL2FwcHMvdG9kb19hcHAvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHByb3h5T3B0aW9ucyBmcm9tICcuL3Byb3h5T3B0aW9ucyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdHNlcnZlcjoge1xuXHRcdHBvcnQ6IDgwODAsXG5cdFx0cHJveHk6IHByb3h5T3B0aW9uc1xuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpXG5cdFx0fVxuXHR9LFxuXHRidWlsZDoge1xuXHRcdG91dERpcjogJy4uL3RvZG9fYXBwL3B1YmxpYy9mcm9udGVuZCcsXG5cdFx0ZW1wdHlPdXREaXI6IHRydWUsXG5cdFx0dGFyZ2V0OiAnZXMyMDE1Jyxcblx0fSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hZG1pbjEvZnJhcHBlLWJlbmNoL2FwcHMvdG9kb19hcHAvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2FkbWluMS9mcmFwcGUtYmVuY2gvYXBwcy90b2RvX2FwcC9mcm9udGVuZC9wcm94eU9wdGlvbnMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYWRtaW4xL2ZyYXBwZS1iZW5jaC9hcHBzL3RvZG9fYXBwL2Zyb250ZW5kL3Byb3h5T3B0aW9ucy5qc1wiO2NvbnN0IGNvbW1vbl9zaXRlX2NvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zaXRlcy9jb21tb25fc2l0ZV9jb25maWcuanNvblwiKTtcbmNvbnN0IHsgd2Vic2VydmVyX3BvcnQgfSA9IGNvbW1vbl9zaXRlX2NvbmZpZztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIl4vKGFwcHxhcGl8YXNzZXRzfGZpbGVzfHByaXZhdGUpXCI6IHtcbiAgICB0YXJnZXQ6IGBodHRwOi8vbG9jYWxob3N0OiR7d2Vic2VydmVyX3BvcnR9YCxcbiAgICB3czogdHJ1ZSxcbiAgICByb3V0ZXI6IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgIGNvbnN0IHNpdGVfbmFtZSA9IHJlcS5oZWFkZXJzLmhvc3Quc3BsaXQoXCI6XCIpWzBdO1xuICAgICAgcmV0dXJuIGBodHRwOi8vJHtzaXRlX25hbWV9OiR7d2Vic2VydmVyX3BvcnR9YDtcbiAgICB9LFxuICB9LFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0Msb0JBQXNCO0FBQUEsTUFDdEIsbUJBQXFCO0FBQUEsTUFDckIsYUFBZTtBQUFBLE1BQ2Ysa0JBQW9CO0FBQUEsTUFDcEIsYUFBZTtBQUFBLE1BQ2YsZ0JBQWtCO0FBQUEsTUFDbEIsYUFBZTtBQUFBLE1BQ2YsYUFBZTtBQUFBLE1BQ2YsZ0JBQWtCO0FBQUEsTUFDbEIsOEJBQWdDO0FBQUEsTUFDaEMsMkJBQTZCO0FBQUEsTUFDN0Isb0JBQXNCO0FBQUEsTUFDdEIsZUFBaUI7QUFBQSxNQUNqQixlQUFpQjtBQUFBLE1BQ2pCLGdCQUFrQjtBQUFBLE1BQ2xCLGdCQUFrQjtBQUFBLE1BQ2xCLFlBQWM7QUFBQSxNQUNkLGFBQWU7QUFBQSxJQUNoQjtBQUFBO0FBQUE7OztBQ25Ca1UsT0FBTyxVQUFVO0FBQ25WLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVzs7O0FDRmtULElBQU0scUJBQXFCO0FBQy9WLElBQU0sRUFBRSxlQUFlLElBQUk7QUFFM0IsSUFBTyx1QkFBUTtBQUFBLEVBQ2Isb0NBQW9DO0FBQUEsSUFDbEMsUUFBUSxvQkFBb0IsY0FBYztBQUFBLElBQzFDLElBQUk7QUFBQSxJQUNKLFFBQVEsU0FBVSxLQUFLO0FBQ3JCLFlBQU0sWUFBWSxJQUFJLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQy9DLGFBQU8sVUFBVSxTQUFTLElBQUksY0FBYztBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUNGOzs7QURaQSxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNuQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxFQUNUO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

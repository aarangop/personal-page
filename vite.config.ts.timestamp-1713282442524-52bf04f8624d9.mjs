// vite.config.ts
import { sveltekit } from "file:///Users/andresap/repos/personal-page/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { defineConfig } from "file:///Users/andresap/repos/personal-page/node_modules/vitest/dist/config.js";
import Icons from "file:///Users/andresap/repos/personal-page/node_modules/unplugin-icons/dist/vite.js";
import { nodeLoaderPlugin } from "file:///Users/andresap/repos/personal-page/node_modules/@vavite/node-loader/dist/plugin.js";
var vite_config_default = defineConfig(({ mode }) => {
  let plugins = [
    sveltekit(),
    Icons({
      autoInstall: true
    })
  ];
  if (mode === "development") {
    plugins = [nodeLoaderPlugin(), ...plugins];
  }
  return {
    plugins,
    test: {
      include: ["src/**/*.{test,spec}.{js,ts}"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW5kcmVzYXAvcmVwb3MvcGVyc29uYWwtcGFnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FuZHJlc2FwL3JlcG9zL3BlcnNvbmFsLXBhZ2Uvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FuZHJlc2FwL3JlcG9zL3BlcnNvbmFsLXBhZ2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XG5pbXBvcnQgeyBub2RlTG9hZGVyUGx1Z2luIH0gZnJvbSAnQHZhdml0ZS9ub2RlLWxvYWRlci9wbHVnaW4nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG5cdGxldCBwbHVnaW5zID0gW1xuXHRcdHN2ZWx0ZWtpdCgpLFxuXHRcdEljb25zKHtcblx0XHRcdGF1dG9JbnN0YWxsOiB0cnVlXG5cdFx0fSlcblx0XTtcblxuXHRpZiAobW9kZSA9PT0gJ2RldmVsb3BtZW50Jykge1xuXHRcdHBsdWdpbnMgPSBbbm9kZUxvYWRlclBsdWdpbigpLCAuLi5wbHVnaW5zXTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cGx1Z2lucyxcblx0XHR0ZXN0OiB7XG5cdFx0XHRpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9Lntqcyx0c30nXVxuXHRcdH1cblx0fTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUixTQUFTLGlCQUFpQjtBQUNyVCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyx3QkFBd0I7QUFFakMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDekMsTUFBSSxVQUFVO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsTUFDTCxhQUFhO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDRjtBQUVBLE1BQUksU0FBUyxlQUFlO0FBQzNCLGNBQVUsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLE9BQU87QUFBQSxFQUMxQztBQUVBLFNBQU87QUFBQSxJQUNOO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDTCxTQUFTLENBQUMsOEJBQThCO0FBQUEsSUFDekM7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

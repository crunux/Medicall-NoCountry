// vitest.config.ts
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { mergeConfig, defineConfig as defineConfig2, configDefaults } from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/vitest@1.6.0_@types+node@20.14.2_jsdom@24.1.0/node_modules/vitest/dist/config.js";

// vite.config.ts
import { fileURLToPath, URL as URL2 } from "node:url";
import { defineConfig } from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/vite@5.2.13_@types+node@20.14.2/node_modules/vite/dist/node/index.js";
import { nodePolyfills } from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/vite-plugin-node-polyfills@0.22.0_vite@5.2.13/node_modules/vite-plugin-node-polyfills/dist/index.js";
import vue from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.13_vue@3.4.27/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.27/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.10.0/node_modules/unplugin-auto-import/dist/vite.js";
import VueDevTools from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.1_vite@5.2.13_vue@3.4.27/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import { PrimeVueResolver } from "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_vue@3.4.27/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ],
      deep: true,
      dirs: ["src/components", "node_modules/primevue/src/components", "src/modules", "node_modules/primeicons", "src/layouts", "node_modules/vee-validate", "node_modules/@vueuse/core"],
      dts: true,
      types: [{
        from: "vue-router",
        names: ["RouterLink", "RouterView"]
      }],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
        "@vueuse/core",
        "vee-validate",
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true
        }
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    VueDevTools(),
    nodePolyfills()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL2("./src", __vite_injected_original_import_meta_url))
    }
  }
});

// vitest.config.ts
var __vite_injected_original_import_meta_url2 = "file:///run/media/cross/Developer/Vue/Medicall-NoCountry/frontend/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath2(new URL("./", __vite_injected_original_import_meta_url2))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ydW4vbWVkaWEvY3Jvc3MvRGV2ZWxvcGVyL1Z1ZS9NZWRpY2FsbC1Ob0NvdW50cnkvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvY3Jvc3MvRGV2ZWxvcGVyL1Z1ZS9NZWRpY2FsbC1Ob0NvdW50cnkvZnJvbnRlbmQvdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL2Nyb3NzL0RldmVsb3Blci9WdWUvTWVkaWNhbGwtTm9Db3VudHJ5L2Zyb250ZW5kL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBtZXJnZUNvbmZpZywgZGVmaW5lQ29uZmlnLCBjb25maWdEZWZhdWx0cyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXG5pbXBvcnQgdml0ZUNvbmZpZyBmcm9tICcuL3ZpdGUuY29uZmlnJ1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcbiAgdml0ZUNvbmZpZyxcbiAgZGVmaW5lQ29uZmlnKHtcbiAgICB0ZXN0OiB7XG4gICAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCAnZTJlLyoqJ10sXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH0pXG4pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ydW4vbWVkaWEvY3Jvc3MvRGV2ZWxvcGVyL1Z1ZS9NZWRpY2FsbC1Ob0NvdW50cnkvZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvY3Jvc3MvRGV2ZWxvcGVyL1Z1ZS9NZWRpY2FsbC1Ob0NvdW50cnkvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3J1bi9tZWRpYS9jcm9zcy9EZXZlbG9wZXIvVnVlL01lZGljYWxsLU5vQ291bnRyeS9mcm9udGVuZC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHsgUHJpbWVWdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgUHJpbWVWdWVSZXNvbHZlcigpXG4gICAgICBdLFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGRpcnM6IFsnc3JjL2NvbXBvbmVudHMnLCAnbm9kZV9tb2R1bGVzL3ByaW1ldnVlL3NyYy9jb21wb25lbnRzJywgJ3NyYy9tb2R1bGVzJywgJ25vZGVfbW9kdWxlcy9wcmltZWljb25zJywgJ3NyYy9sYXlvdXRzJywgJ25vZGVfbW9kdWxlcy92ZWUtdmFsaWRhdGUnLCAnbm9kZV9tb2R1bGVzL0B2dWV1c2UvY29yZSddLFxuICAgICAgZHRzOiB0cnVlLFxuICAgICAgdHlwZXM6IFt7XG4gICAgICAgIGZyb206ICd2dWUtcm91dGVyJyxcbiAgICAgICAgbmFtZXM6IFsnUm91dGVyTGluaycsICdSb3V0ZXJWaWV3J10sXG4gICAgICB9XSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBleGNsdWRlOiBbL1tcXFxcL11ub2RlX21vZHVsZXNbXFxcXC9dLywgL1tcXFxcL11cXC5naXRbXFxcXC9dLywgL1tcXFxcL11cXC5udXh0W1xcXFwvXS9dLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAvXFwuW3RqXXN4PyQvLCAvLyAudHMsIC50c3gsIC5qcywgLmpzeFxuICAgICAgICAvXFwudnVlJC8sXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcbiAgICAgIF0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIC8vIHByZXNldHNcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXG4gICAgICAgICd2ZWUtdmFsaWRhdGUnLFxuICAgICAgICB7XG4gICAgICAgICAgZnJvbTogJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgIGltcG9ydHM6IFsnUm91dGVMb2NhdGlvblJhdyddLFxuICAgICAgICAgIHR5cGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBWdWVEZXZUb29scygpLFxuICAgIG5vZGVQb2x5ZmlsbHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1csU0FBUyxpQkFBQUEsc0JBQXFCO0FBQ2xZLFNBQVMsYUFBYSxnQkFBQUMsZUFBYyxzQkFBc0I7OztBQ0RzUyxTQUFTLGVBQWUsT0FBQUMsWUFBVztBQUVuWSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyx3QkFBd0I7QUFSMkwsSUFBTSwyQ0FBMkM7QUFXN1EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLE1BQU0sQ0FBQyxrQkFBa0Isd0NBQXdDLGVBQWUsMkJBQTJCLGVBQWUsNkJBQTZCLDJCQUEyQjtBQUFBLE1BQ2xMLEtBQUs7QUFBQSxNQUNMLE9BQU8sQ0FBQztBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTyxDQUFDLGNBQWMsWUFBWTtBQUFBLE1BQ3BDLENBQUM7QUFBQSxNQUNELFNBQVMsQ0FBQyxVQUFVLGNBQWMsT0FBTztBQUFBLE1BQ3pDLFNBQVMsQ0FBQywwQkFBMEIsbUJBQW1CLGtCQUFrQjtBQUFBLElBQzNFLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBO0FBQUEsUUFFUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFNBQVMsQ0FBQyxrQkFBa0I7QUFBQSxVQUM1QixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJQyxLQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRDVENk4sSUFBTUMsNENBQTJDO0FBSS9RLElBQU8sd0JBQVE7QUFBQSxFQUNiO0FBQUEsRUFDQUMsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNQyxlQUFjLElBQUksSUFBSSxNQUFNRix5Q0FBZSxDQUFDO0FBQUEsSUFDcEQ7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZmlsZVVSTFRvUGF0aCIsICJkZWZpbmVDb25maWciLCAiVVJMIiwgIlVSTCIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsIiwgImRlZmluZUNvbmZpZyIsICJmaWxlVVJMVG9QYXRoIl0KfQo=

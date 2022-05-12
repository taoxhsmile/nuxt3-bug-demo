import { defineNuxtConfig } from "nuxt";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            "primary-color": "#1969F1",
          },
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "i",
          }),
          AntDesignVueResolver({
            resolveIcons: true,
          }),
        ],
      }),
      visualizer(),
    ],
  },
  build: {
    transpile: ["moment", "compute-scroll-into-view", "ant-design-vue"],
  },
});

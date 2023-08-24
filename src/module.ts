import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import { name, version } from "../package.json";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "nuxtFacebookChat",
    compatibility: {
      nuxt: "^3.6.0",
    },
  },
  setup() {
    const resolver = createResolver(import.meta.url);
    // Add component
    addComponent({
      name: "NuxtFacebookChat",
      global: true,
      filePath: resolver.resolve("./runtime/components/nuxt-facebook-chat"),
    });
  },
});

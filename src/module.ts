import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import { name, version } from "../package.json";

export type { NuxtFacebookChatOptions } from "./runtime/components/nuxt-facebook-chat";

export default defineNuxtModule({
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

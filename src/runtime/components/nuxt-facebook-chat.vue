<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <div>
    <div :id="props.elementId" :theme_color="props.color" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

declare global {
  interface Window {
    fbAsyncInit(): void;
  }
}
declare let FB: any;

export interface Props {
  pageId: string;
  color?: string;
  locale?: string;
  elementId?: string;
  version?: string;
}
const props = withDefaults(defineProps<Props>(), {
  pageId: "",
  color: "#E04040",
  locale: "en_US",
  elementId: "nuxt-facebook-chat",
  version: "v17.0",
});

onMounted(() => {
  initFacebookChat();
});

function initFacebookChat() {
  window.fbAsyncInit = function () {
    const chatbox = document.getElementById(props.elementId);
    if (chatbox) {
      chatbox.setAttribute("page_id", props.pageId);
      chatbox.setAttribute("attribution", "biz_inbox");
      FB.init({
        xfbml: true,
        version: props.version,
      });
    }
  };
  addFacebookSDK();
}

function addFacebookSDK() {
  const d = document;
  const s = "script";
  const id = "facebook-jssdk";
  const js = d.createElement(s);
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js.id = id;
  js.src = `https://connect.facebook.net/${props.locale}/sdk.js`;
  fjs.parentNode?.insertBefore(js, fjs);
}
</script>

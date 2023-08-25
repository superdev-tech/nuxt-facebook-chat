<template>
  <div>
    <client-only>
      <nuxt-facebook-chat :options="options" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
// import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';
import { NuxtFacebookChatOptions } from "../src/module";

const options: NuxtFacebookChatOptions = {
  pageId: "100180625030536",
  locale: "th_TH",
  themeColor: "#E04040",
};
</script>

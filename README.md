<p align="center">
  <a href="https://github.com/superdev-tech/nuxt-facebook-chat" target="_blank" rel="noopener noreferrer">
    <img style="width:150px" src="https://raw.githubusercontent.com/superdev-tech/nuxt-facebook-chat/main/nuxt-facebook-chat-logo.png" alt="nuxt-facebook-chat logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/nuxt-facebook-chat"><img src="https://img.shields.io/npm/v/nuxt-facebook-chat/latest.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="npm version"></a>
  <a href="https://npmjs.com/package/nuxt-facebook-chat"><img src="https://img.shields.io/npm/dm/nuxt-facebook-chat.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="npm download"></a>
  <a href="https://github.com/superdev-tech/nuxt-facebook-chat/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/nuxt-facebook-chat.svg?style=flat&colorA=18181B&colorB=28CF8D" alt="MIT license"></a>
  <a href="https://nuxt.com/modules/nuxt-facebook-chat"><img src="https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js" alt="nuxt-facebook-chat module on nuxt official"></a>
</p>
<br/>

# Nuxt Facebook Chat

`nuxt-facebook-chat` is a specialized Nuxt 3 module designed for effortless integration with Facebook's Customer Chat SDK. Crafted explicitly for Nuxt 3 projects, it simplifies the embedding process, reducing tedious installation steps. By incorporating the Facebook chat UI, user interactions are enriched. Save time and boost user engagement in your Nuxt 3 application with this streamlined module.

- [🏀 Online playground](https://stackblitz.com/edit/nuxt-starter-trutjc?file=app.vue)

## Features

⛰ Effortless Integration: Designed specifically for Nuxt 3, allowing seamless and straightforward integration with minimal setup.
🚠 Flexible Configuration: Easily customize your chat experience through simple prop-based settings.
🌲 Client-Side Optimized: Ensures that the chat is rendered client-side to prevent any server-side issues and ensure compatibility.
🌟 Comprehensive Options: Rich set of options derived from the official Facebook Chat Plugin documentation, giving you full control over the chat experience.
🛠 TypeScript Support: Leveraging TypeScript for safer code and better developer experience.
📖 Extensive Documentation: Comprehensive guidelines and examples to get you started in no time.

## Quick Setup

1. Add `nuxt-facebook-chat` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-facebook-chat

# Using yarn
yarn add --dev nuxt-facebook-chat

# Using npm
npm install --save-dev nuxt-facebook-chat
```

2. Add `nuxt-facebook-chat` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-facebook-chat"],
});
```

## Usage

To use this module in your Nuxt 3 project, ensure that you only render it on the client side:

```ts
<template>
  <div>
    <!-- Ensure the chat is rendered client-side -->
    <client-only>
      <nuxt-facebook-chat :options="options" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';

// Define your chat options
const options: NuxtFacebookChatOptions = {
  pageId: "100180625030536",  // Your Facebook Page ID
  locale: "th_TH",            // Set the locale for the chat
  themeColor: "#E04040",      // Customize the chat theme color
};
</script>
```

### Options

For the options prop, you should use the NuxtFacebookChatOptions interface. Here are the details:

- pageId (required): The ID of your Facebook Page.
- elementId (optional): The ID for the chat element.
- locale (optional): The locale for the chat. Defaults to "en_US".
- version (optional): The version of the Facebook SDK. Defaults to the latest available.
- themeColor (optional): Color of the chat theme. Defaults to "#333333".
- loggedInGreeting (optional): The greeting text for logged-in users.
- loggedOutGreeting (optional): The greeting text for logged-out users.
- greetingDialogDisplay (optional): The way the greeting dialog is displayed. Options: "show", "fade", "hide", or "icon".
- greetingDialogDelay (optional): The delay for the greeting dialog.
- ref (optional): A reference string.

For a more detailed understanding of each prop and its possible values, you can refer to the official [Facebook Chat Plugin documentation](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin#steps).

### Whitelisting Domains for Facebook's Customer Chat SDK

To ensure the smooth functionality of the Facebook Customer Chat SDK on your website, it's crucial to whitelist your domain. Whitelisting guarantees that the chat plugin will display and operate without any disruptions on your site.

**Steps to Whitelist your Domain:**

1. Navigate to your Facebook Page settings.
2. In the left column, click on "Advanced Messaging."
3. Under the "Whitelisted Domains" section, enter your website's domain.
4. Click "Save."

By following these steps, you've ensured that the Facebook chat plugin will work seamlessly on your site without any potential display or functionality issues.

## Contributing

If you want to improve or fix something in the module, feel free to open issues or pull requests.

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<template>
  <div>
    Nuxt module playground!

    <client-only>
      <nuxt-facebook-chat
        page-id="100180625030536"
        color="#333333"
        locale="th_TH"
        element-id="fb-chat"
        version="v17.0"
      />
    </client-only>
  </div>
</template>

<script setup></script>

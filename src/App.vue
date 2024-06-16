<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <router-view />
    </div>
  </body>
</template>

<script>
import { defineComponent, isProxy, toRef } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
});
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(
    -45deg, var(--tertiary-background-color), var(--background-color), var(--secondary-background-color)
  );
  animation: animate 15s ease infinite;
  background-size: 400%;
}
</style>

<template>
  <main id="app">
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/src/assets/style/reset.css"
      />
    </head>
    <todo></todo>
  </main>
</template>

<script>
import todo from "./components/todo.vue";

export default {
  name: "App",
  components: {
    todo
  },
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

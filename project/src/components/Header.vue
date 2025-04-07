<script setup>
import logo from "../assets/vue.svg";
defineProps({
  title: String,
});
</script>

<template>
  <header class="gap-8 flex justify-between items-center">
    <h1 class="text-4xl flex-grow text-center">{{ title }}</h1>
    <img :src="logo" alt="Vue Logo" class="w-10 h-10" />
  </header>
</template>

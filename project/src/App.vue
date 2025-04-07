<script setup>
import { RouterView } from "vue-router";

const iFrameLink = "https://phlegmmignon.github.io/eGain-UX-Project/";
</script>

<template>
  <div class="flex justify-center">
    <div class="p-4 pt-10 max-w-5xl flex flex-col">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>

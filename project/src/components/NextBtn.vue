<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  nextPage: String,
});

function goNextPage() {
  router.push(props.nextPage);
}
</script>

<template>
  <button @click="goNextPage">Next</button>
</template>

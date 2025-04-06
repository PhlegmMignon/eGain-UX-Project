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
  <button
    @click="goNextPage"
    class="bg-[#3d74cc] text-black font-bold py-2 px-6 rounded-lg hover:bg-[#355fa5] shadow-lg transition-all duration-200"
  >
    Next
  </button>
</template>

<script setup>
import Header from "../components/Header.vue";
import NextBtn from "../components/NextBtn.vue";
import { ref } from "vue";

const problemText = ref("");

async function submitForm() {
  console.log("Sent to server: ", problemText.value);
}
</script>

<template>
  <div class="flex flex-col gap-6 max-w-full">
    <Header title="Description" />
    <div class="block">
      <label for="feedback" class="font-bold">
        Please describe the problem you're facing.
      </label>
      <textarea
        id="description"
        name="description"
        v-model="problemText"
        rows="5"
        class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 resize-none"
        placeholder="Describe your problem here"
      />
    </div>
    <div class="flex justify-end">
      <NextBtn @click="submitForm" nextPage="/questions" />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import { ref } from "vue";

const userFeedback = ref("");

async function submitForm() {
  console.log("Sent feedback to server: ", userFeedback.value);
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <Header title="Feedback" />

    <!-- Hardcoded server output solution -->
    <div>
      <p class="font-bold">Solution</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <div class="flex flex-col gap-2">
      <label for="feedback" class="font-bold">How did we do?</label>
      <input
        type="text"
        id="feedback"
        name="feedback"
        v-model="userFeedback"
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Write your feedback here"
      />
      <button
        @click="submitForm"
        class="bg-[#3d74cc] self-end max-w-xs text-black font-bold py-2 px-6 rounded-lg hover:bg-[#355fa5] shadow-lg transition-all duration-200"
      >
        Submit
      </button>
    </div>
  </div>
</template>

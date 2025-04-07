<script setup>
import Header from "../components/Header.vue";
import NextBtn from "../components/NextBtn.vue";
import { useAnswersStore } from "../stores/answer";
import { ref } from "vue";

const store = useAnswersStore();

const answer1 = ref("");
const answer2 = ref("");
const answer3 = ref("");
const answer4 = ref("");

function submitForm() {
  store.setAnswer1(answer1.value);
  store.setAnswer2(answer2.value);
  store.setAnswer3(answer3.value);
  store.setAnswer4(answer4.value);

  mockApiCall();
}

// Mock API call simulation. You can verify state in console.
async function mockApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", {
        answer1: answer1.value,
        answer2: answer2.value,
        answer3: answer3.value,
        answer4: answer4.value,
      });
      resolve();
    }, 100);
  });
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <Header title="Questions" />
    <section class="flex flex-col gap-8">
      <!-- Q1: Dropdown -->
      <div class="flex flex-col gap-2">
        <label for="dropdown" class="font-bold">Question 1: Dropdown</label>
        <select
          id="dropdown"
          v-model="answer1"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 text-black"
        >
          <option value="Choice 1">Choice 1</option>
          <option value="Choice 2">Choice 2</option>
          <option value="Choice 3">Choice 3</option>
          <option value="Choice 4">Choice 4</option>
        </select>
      </div>

      <!-- Q2 Numbers only -->
      <div class="flex flex-col gap-2">
        <label for="numberInput" class="font-bold"
          >Question 2: Number field</label
        >
        <input
          type="number"
          id="numberInput"
          v-model="answer2"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Only numbers allowed"
        />
      </div>

      <!-- Q3: Regular text input -->
      <div class="flex flex-col gap-2">
        <label for="textInput" class="font-bold">Question 3: Text input</label>
        <input
          type="text"
          id="textInput"
          v-model="answer3"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Text here"
        />
      </div>

      <!-- Question 4: Radio buttons with images -->
      <div class="flex flex-col gap-2">
        <label class="font-bold">Question 4: Image selection</label>
        <div class="flex gap-4">
          <label>
            <input type="radio" v-model="answer4" value="bear" />
            <img
              src="https://placebear.com/200/200"
              alt="bear"
              class="cursor-pointer max-h-26"
              :class="{ 'border-4': answer4 === 'bear' }"
            />
          </label>
          <label>
            <input type="radio" v-model="answer4" value="dog" />
            <img
              src="https://placedog.net/100/100"
              alt="Dog"
              class="cursor-pointer"
              :class="{ 'border-4': answer4 === 'dog' }"
            />
          </label>
        </div>
      </div>
    </section>
    <NextBtn @click="submitForm" nextPage="/verify" />
  </div>
</template>

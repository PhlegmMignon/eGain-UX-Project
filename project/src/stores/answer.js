import { defineStore } from "pinia";

export const useAnswersStore = defineStore("answers", {
  state: () => ({
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
  }),
  actions: {
    setAnswer1(value) {
      this.answer1 = value;
    },
    setAnswer2(value) {
      this.answer2 = value;
    },
    setAnswer3(value) {
      this.answer3 = value;
    },
    setAnswer4(value) {
      this.answer4 = value;
    },
  },
});

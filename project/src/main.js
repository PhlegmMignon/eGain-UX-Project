import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

// import { RadioButton } from "primevue";

const app = createApp(App);

// app.use(PrimeVue, {
//   theme: {
//     preset: "none",
//   },
// });

app.use(PrimeVue);

app.use(router);

app.mount("#app");

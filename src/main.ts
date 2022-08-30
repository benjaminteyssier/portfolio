import { createApp } from "vue";
import router from "./router";
import VNetworkGraph from "v-network-graph"
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(VNetworkGraph)
app.use(router);

app.mount("#app");


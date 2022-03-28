import { createApp } from "vue";
import App from "./app.vue";
import '@/assets/css/index.less';
import router from "./router";
import { setupStore } from "./store";
import {installIcon} from '@/plugins/elementIcon';

const app = createApp(App);
installIcon(app);
setupStore(app);
app.use(router);
app.mount("#app");

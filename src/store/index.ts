import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

const store = createPinia().use(piniaPluginPersist);

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };

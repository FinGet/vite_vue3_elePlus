import type { App } from 'vue';
import {
  House, FirstAidKit, Coin
} from '@element-plus/icons-vue';

const Icons = [House, FirstAidKit, Coin];

export const installIcon = (app: App) => {
  Icons.forEach(Icon => {
    app.component(Icon.name, Icon);
  });
};
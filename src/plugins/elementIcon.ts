import type {App} from 'vue';
import { HomeFilled,House, BellFilled, Expand, ArrowDown, ArrowDownBold,Tickets,
  FirstAidKit, Coin } from '@element-plus/icons';

const Icons = [HomeFilled,House, BellFilled, Expand, ArrowDown, ArrowDownBold,Tickets,
  FirstAidKit, Coin];

export const installIcon = (app: App) => {
  Icons.forEach(Icon => {
    app.component(Icon.name, Icon);
  });
};
import type {App} from 'vue';
import { HomeFilled, BellFilled, Expand, ArrowDown, ArrowDownBold } from '@element-plus/icons';

const Icons = [HomeFilled, BellFilled, Expand, ArrowDown, ArrowDownBold];

export const installIcon = (app: App) => {
  Icons.forEach(Icon => {
    app.component(Icon.name, Icon);
  });
};
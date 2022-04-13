# Vue 3 + Typescript + Vite

## auto-import

• unplugin-auto-import来实现vue函数的自动导入
• unplugin-vue-components来实现vue组件库的自动按需导入

自动引入了`vue`,`vue-router`所以页面中使用`ref`,`reactive`,`useRouter`等函数，就不需要手动导入了。

```javascript
AutoImport({
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // global imports to register
  imports: [
    // presets
    'vue',
    'vue-router',
    // custom
    {
      // 自定义导入的函数，按需加载
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        'useFullscreen'
        // alias 设置别名
        // ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
    },
  ],
})
```
> eslint-undef: 需要在tsconfig.json 中 :
`includes:["./auto-imports.d.ts","./components.d.ts"]`

## 自定义ICON

使用svg，直接放在`src/assets/svg`目录下即可.


### 自动引入

```javascript
plugins: [
  Components({
    dts: true,
    resolvers: [
      IconsResolver({
        customCollections: ['custom']
      })
    ],
  }),
]
```

> cannot find module? 
```javascript
// tsconfig.json
compilerOptions : {
types: [
+  "unplugin-icons/types/vue",
 ]
}
```


如何使用：
```bash
{prefix}-{collection}-{icon} 
{前缀（默认i）}-{图标集名称（custom）}-{图标名称（refresh-line）}

i-custom-fullscreen
```

### 新增自定义Icon组

```javascript
// vite.config.js

Icons({ 
  // 自定义图标加载
  customCollections: {
+    'new-custom': FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
  }, 
}),
```

> 自定义ICON支持自动引入，不需要在也页面中再次引入

## ElementPlus

### 组件自动引入
```javascript
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

plugins: [
  Components({
    dts: true,
    resolvers: [
      ElementPlusResolver(),
      // {prefix}-{collection}-{icon} {前缀（默认i）}-{图标集名称（custom）}-{图标名称（refresh-line）}
      IconsResolver({
        customCollections: ['custom']
      })
    ],
  }),
]
```

### ElementIcon引入

```bash
yarn add @element-plus/icons-vue
```

现在官方还不支持自动引入

- 手动引入
```javascript
// plugins/elementIcon.ts
import type {App} from 'vue';
import { HomeFilled, House } from '@element-plus/icons-vue';

const Icons = [HomeFilled,House];

export const installIcon = (app: App) => {
  Icons.forEach(Icon => {
    app.component(Icon.name, Icon);
  });
};

// main.ts
import {installIcon} from '@/plugins/elementIcon';
installIcon(app)
```

- 自动引入
```javascript
// vite.config.ts
const _strings = require('@iconify/utils/lib/misc/strings');

const ElIconResolver = (options = {}) => {
	return (name) => {
		const kebab = _strings.camelToKebab.call(void 0, name);
		const prefix = 'eli';
		if (!kebab.startsWith(prefix))
			return;

		const slice = kebab.slice(prefix.length);

		return `@element-plus/icons-vue/dist/lib/${slice.substring(1).toLowerCase()}.vue`;
	};
};

{
  plugins: [
    Components({
      resolvers: [
        ElIconResolver()
      ],
    })
  ]
}
```

> unplugin 的自动引入，都不支持预加载，导致不能使用components做动态组件加载，所以在
侧边导航上使用的icon,还是需要提前手动导入


## vueUse

引入`vueUse`,用很多好用的方法，减少造轮子。

https://vueuse.org/

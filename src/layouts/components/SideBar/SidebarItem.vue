<template>
  <template v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
        <el-icon v-if="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"><component :is="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" /> </el-icon>
        <template #title>
          <span>{{ onlyOneChild.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon"><component :is="item.meta && item.meta.icon" /> </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </template>
</template>

<script lang="ts">
  import { toRefs, reactive, defineComponent } from 'vue';
  // import {resolve} from "path";
  export default defineComponent({
    name: 'SidebarItem',
    props: {
      item: {
        type: Object,
        required: true
      },
      isNest: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    setup (props) {
      const state = reactive({
        onlyOneChild: { children: null, path: '', meta: { icon: '', title: '' }, noShowingChildren: false }
      });
      const hasOneShowingChild = (children = [], parent: any) => {
        const showingChildren = children.filter((item: any) => {
          if (item.hidden) {
            return false;
          } else {
            state.onlyOneChild = item;
            return true;
          }
        });

        if (showingChildren.length === 1) {
          return true;
        }
        if (showingChildren.length === 0) {
          state.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
          return true;
        }
        return false;
      };
      const resolve = (...paths:string[]) =>{
        let resolvePath = '';
        let isAbsolutePath = false;
        for(let i = paths.length-1; i > -1; i--){
          let path = paths[i];
          if(isAbsolutePath){
            break;
          }
          if(!path){
            continue;
          }
          resolvePath = path + '/' + resolvePath;
          isAbsolutePath = path.charCodeAt(0) === 47;
        }
        if(/^\/+$/.test(resolvePath)){
          resolvePath = resolvePath.replace(/(\/+)/,'/');
        }else{
          resolvePath = resolvePath.replace(/(?!^)\w+\/+\.{2}\//g, '')
            .replace(/(?!^)\.\//g,'')
            .replace(/\/+$/, '');
        }
        return resolvePath;
      };
      const resolvePath = (routePath: any) => {
        return resolve(props.basePath, routePath);
      };
      return {
        hasOneShowingChild,
        resolvePath,
        ...toRefs(state)
      };
    }
  });
</script>

<style lang="less" scoped>
.icon {
	// margin-bottom: 3px;
	display: inline-block;
	vertical-align: top;
}
</style>

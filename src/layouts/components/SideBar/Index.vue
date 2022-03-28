<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="r in filterRoutes" :key="r.path" :item="r" :base-path="r.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
  import SidebarItem from './SidebarItem.vue';
  import { computed } from 'vue';
  import { useAppStore } from '@/store/modules/app';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const activeMenu = computed(():string => {
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu as string;
    }
    return path;
  });
  const appStore = useAppStore();
  const isCollapse = computed(() => appStore.sidebar.isCollapse);
  const routes = appStore.routes;
  const filterRoutes = computed(() => routes.find(item => item.path === '/')?.children);
</script>

<style lang="less" scoped>
:deep(.el-main) {
	padding: 0;
}
:deep(.el-header) {
	-webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
	box-shadow: 0 1px 4px rgba(0,21,41,.08);
	padding-right: 20px;
	padding-left: 0;
}
:deep(.el-aside)  {
  box-shadow: rgb(241, 241, 241) 2px 0px 6px;
}
</style>
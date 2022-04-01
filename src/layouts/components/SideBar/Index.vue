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
  console.log(filterRoutes.value);
</script>

<style lang="less" scoped>
</style>
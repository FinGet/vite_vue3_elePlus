<template>
  <div :class="['height100',isCollapse?'hideSidebar':'']">
    <el-container class="height100">
      <el-aside :width="isCollapse?'64px':'210px'">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <TopBar />
        </el-header>
        <el-main>
          <div class="app-main">
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </div>
        </el-main>
        <!-- <el-footer>footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/modules/app';
  import { computed } from 'vue';
  import Sidebar from './components/SideBar/Index.vue';
  import TopBar from './components/TopBar.vue';

  const appStore = useAppStore();
  const isCollapse = computed(() => appStore.sidebar.isCollapse);
</script>

<style lang="less" scoped>
:deep(.el-header)  {
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  // padding-right: 20px;
  // padding-left: 0;
}
:deep(.el-main)  {
  --el-main-padding: 0;
}
.app-main {
  height: calc(100% - 20px);
  background: #f1f5f7;
  padding: 10px;
}
</style>
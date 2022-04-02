<template>
  <div :class="['height100',isCollapse?'hideSidebar':'']">
    <el-container class="height100">
      <el-header height="64px">
        <TopBar @fresh="handleFresh" />
      </el-header>
      <el-main>
        <el-container>
          <el-aside :width="isCollapse?'64px':'256px'">
            <Sidebar />
          </el-aside>
          <el-main>
            <div class="app-main">
              <el-scrollbar>
                <router-view v-if="isFresh" />
              </el-scrollbar>
            </div>
          </el-main>
        <!-- <el-footer>footer</el-footer> -->
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/modules/app';
  import { computed,nextTick,ref } from 'vue';
  import Sidebar from './components/SideBar/Index.vue';
  import TopBar from './components/TopBar.vue';
  const appStore = useAppStore();
  const isCollapse = computed(() => appStore.sidebar.isCollapse);

  const isFresh = ref(true);
  const handleFresh =() => {
    isFresh.value = false;
    nextTick(() => {
      isFresh.value = true;
    });
  };
</script>

<style lang="less" scoped>
.app-main {
  height: calc(100% - (@appMainPadding * 2));
  background: @mainBg;
  padding: @appMainPadding;
}
:deep(.el-header)  {
  box-shadow: 0 3px 6px 0 rgba(59,63,73,0.15);
  z-index: 999;
}
:deep(.el-aside)  {
  padding: 32px 0;
  box-shadow: rgb(241, 241, 241) 2px 0px 6px;
}
:deep(.el-main) {
  padding: 0;
}
</style>
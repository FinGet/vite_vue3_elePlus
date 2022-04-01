<template>
  <div class="top-bar flex-between">
    <div class="display-flex a-i-c">
      <div 
        :class="['collapse','marginR20', !sidebar.isCollapse?'left':'']"
        @click="toggleSidebar"
      >
        <el-icon :size="24" color="#204ec1">
          <expand />
        </el-icon>
      </div>
      <Logo />
    </div>
    <div class="user-info">
      <el-dropdown>
        <span class="display-flex a-i-c">
          <span style="font-size:16px;font-weight:500;">admin</span>
          <el-icon class="marginL5"><arrow-down-bold /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="info">
              个人信息
            </el-dropdown-item>
            <el-dropdown-item command="out">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/modules/app';
  import Logo from './Logo.vue';

  const {sidebar, toggleSidebar} = useAppStore();
</script>

<style lang="less" scoped>
.top-bar {
  height: @topBarHeight;
  line-height: @topBarHeight;
  .collapse {
    display: inline-block;
    height: 100%;
    line-height: 6px;
    cursor: pointer;
    &.left {
      transform: rotate(180deg);
    }
  }
  .user-info {
    cursor: pointer;
    font-size: 18px;
    :deep(.el-dropdown) {
      line-height: @topBarHeight;
    }
  }
}
</style>
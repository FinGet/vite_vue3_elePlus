<template>
  <div class="top-bar flex-between">
    <div 
      :class="['collapse', !sidebar.isCollapse?'left':'']"
      @click="toggleSidebar"
    >
      <el-icon :size="24" color="#606266">
        <expand />
      </el-icon>
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

  const {sidebar, toggleSidebar} = useAppStore();
</script>

<style lang="less" scoped>
.top-bar {
  height: @topBarHeight;
  line-height: @topBarHeight;
  .collapse {
    display: inline-block;
    height: 100%;
    line-height: 62px;
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
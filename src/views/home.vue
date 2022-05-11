<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" type="text">Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
    <el-button type="primary">默认按钮</el-button>
    <el-button type="warning">默认按钮</el-button>
    <el-button type="info">默认按钮</el-button>
    <el-button type="danger">默认按钮</el-button>
    <el-button>默认按钮</el-button>
    {{ state }}
  </div>
</template>

<script setup lang="ts">
  const state = useStorage('vue-use-local-storage');
  console.log(state);
</script>

<style scoped>

</style>
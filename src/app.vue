<template>
  <!-- <h1>pnpm + vue3 + ts + vite + pinia + element-plus</h1>
  <el-button type="primary" size="default" @click="countAdd">
    asdfas
  </el-button>
  {{ counter.count }}
  {{ counter.doubleCount }}
  {{ userStore.userInfo.name }}
  {{ userStore.userInfo.age }}
  <br>
  <p> 组件自定义 v-model -> test: {{ test }}</p>
  <Test v-model="test" /> -->
  <el-config-provider :locale="locale">
    <!-- <el-date-picker v-model="date" type="date" placeholder="Pick a day" /> -->
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
  // import { ref } from 'vue';
  import zhCn from 'element-plus/lib/locale/lang/zh-cn';
  // import { useUserStore } from '@/store/modules/user';
  // import Test from '@/views/Test.vue';
  // import { useAppStore } from '@/store/modules/app';

  // const counter = useAppStore();
  // const userStore = useUserStore();
  const locale = zhCn;
  // const date = ref('');

  // const test = ref('');

  // const countAdd = () => {
  //   counter.count++;
  //   // with autocompletion ✨
  //   counter.$patch({ count: counter.count + 1 });
  //   // or using an action instead
  //   counter.increment();
  // };
</script>
<style>

</style>

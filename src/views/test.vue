<template>
  <el-input v-model="model" style="width: 200px" type="text" />
</template>

<script setup lang="ts">
  import {useModel} from '@/hooks';
  // import { defineProps, defineEmits } from "vue"; // defineProps,defineEmits is a compiler macro and no longer needs to be imported
  import { useMouse,useTitle } from '@vueuse/core';

  const props = defineProps({
    modelValue: {
      type: [String, Number,],
      required: true,
      default: ''
    }
  });

  // "x" and "y" are refs
  const { x, y } = useMouse();

  console.log(x.value);

  const title = useTitle();
  console.log(title.value); // print current title
  title.value = 'Hello';
  // expects emits options
  const emit = defineEmits(['update:modelValue']);
  const model = useModel(() => props.modelValue, (val) => emit('update:modelValue', val));
</script>

<style scoped>

</style>
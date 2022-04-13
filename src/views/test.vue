<template>
  <el-card>
    <el-icon :size="20">
      <eli-aim />
    </el-icon>
    <el-input v-model="model" style="width: 200px" type="text" />
    <test-com />
  </el-card>
</template>

<script setup lang="ts">
  import {useModel} from '@/hooks';

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

  // expects emits options
  const emit = defineEmits(['update:modelValue']);
  const model = useModel(() => props.modelValue, (val) => emit('update:modelValue', val));
</script>

<style scoped>

</style>
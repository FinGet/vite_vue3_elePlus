<template>
  <el-card>
    <el-icon :size="20">
      <eli-aim />
    </el-icon>
    <el-input v-model="model" style="width: 200px" type="text" />
    <test-com />
    <div
      ref="el" :style="style"
      style="position: fixed;cursor: move;
    padding: 20px;
    width: 100px;
    background: #fff;
    border: 1px solid #d7d7d7;"
    >
      👋 Drag me!  I am at {{ x }}, {{ y }}
    </div>
    <el-input v-model="state.name" type="text" />
    <el-input v-model="state.color" type="text" />
    <el-input v-model="state.size" type="text" />
    <el-slider v-model.number="state.count" min="0" max="1000" />
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
  // const { mousex: x, mousey: y } = useMouse();

  // console.log(mousey.value);

  // expects emits options
  const emit = defineEmits(['update:modelValue']);
  const model = useModel(() => props.modelValue, (val) => emit('update:modelValue', val));
  const el = ref<HTMLElement | null>(null);

  // `style` will be a helper computed for `left: ?px; top: ?px;`
  const { x, y, style } = useDraggable(el, {
    initialValue: { x: 300, y: 300 },
  });


  const state = useStorage('vue-use-local-storage', {
    name: 'Banana',
    color: 'Yellow',
    size: 'Medium',
    count: 0,
  });
</script>

<style scoped>

</style>
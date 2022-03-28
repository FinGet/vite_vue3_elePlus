import { computed, defineComponent, onMounted, onUnmounted, ref,Ref, watch } from "vue";

/**
 * 自定义组件 实现 v-model
 * @param getter 
 * @param emitter 
 * @returns 
 */
export const useModel = <T>(getter: () => T, emitter: (val: T) => void) =>{
  const state = ref(getter()) as {value: T};

  watch(getter, val => {
    if(val !== state.value) {
      state.value = val;
    }
  });

  return computed({
    get: () => state.value,
    set: (val: T) => {
      if (state.value !== val) {
        state.value = val;
        emitter(val);
      }
    }
  });
};




/**
 * 点击元素外面
 * @param elementRef 
 * @returns 
 */
export const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
	const isClickOutside = ref(false);
	const handler = (e: MouseEvent) => {
		if (elementRef.value) {
			if (elementRef.value.contains(e.target as HTMLElement)) {
				isClickOutside.value = false;
			} else {
				isClickOutside.value = true;
			}
		}
	};
	onMounted(() => {
		document.addEventListener('click', handler);
	});
	onUnmounted(() => {
		document.removeEventListener('click', handler);
	});
	return isClickOutside;
};
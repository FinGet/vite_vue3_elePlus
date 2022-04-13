<template>
  <div>
    <el-form  
      v-if="model"
      ref="form"
      :validate-on-rule-change="false"
      :model="model"
      :rules="rules"
      v-bind="$attrs"
    >
      {{ model }}
      <el-form-item v-for="item in options" :key="item.prop" :label="item.label" :prop="item.prop">
        <!-- unplugin-vue-components 不支持 component is -->
        <template v-if="item.type === 'input'">
          <el-input v-bind="item.attrs" v-model="model[item.prop!]" :placeholder="item.placeholder" />
        </template>
        <template v-if="item.type === 'input-number'">
          <el-input-number v-bind="item.attrs" v-model="model[item.prop!]" :placeholder="item.placeholder" />
        </template>
        <template v-if="item.type === 'switch'">
          <el-switch v-model="model[item.prop!]" :placeholder="item.placeholder" v-bind="item.attrs" />
        </template>
        <template v-if="item.type === 'select'">
          <el-select v-bind="item.attrs" v-model="model[item.prop!]" :placeholder="item.placeholder">
            <el-option v-for="op in item.options" :key="op.value" :value="op.value" :label="op.key" />
          </el-select>
        </template>
        <template v-if="item.type === 'radio-group'">
          <el-radio-group v-model="model[item.prop!]" v-bind="item.attrs">
            <el-radio v-for="op in item.options" :key="op.value" :label="op.value">{{ op.key }}</el-radio>
          </el-radio-group>
        </template>
        <template v-if="item.type === 'checkbox-group' || item.type === 'checkbox-button'">
          <el-checkbox-group v-model="model[item.prop!]" v-bind="item.attrs">
            <template v-if="item.type === 'checkbox-group'">
              <el-checkbox v-for="op in item.options" :key="op.value" :label="op.value">
                {{ op.key }}
              </el-checkbox>
            </template>
            <template v-if="item.type === 'checkbox-button'">
              <el-checkbox-button v-for="op in item.options" :key="op.value" :label="op.value">
                {{ op.key }}
              </el-checkbox-button>
            </template>
          </el-checkbox-group>
        </template>
        <template v-if="item.type === 'date-picker'">
          <el-date-picker v-model="model[item.prop!]" v-bind="item.attrs" placeholder="选择日期时间" />
        </template>
        <template v-if="item.type === 'time-picker'">
          <el-time-picker v-model="model[item.prop!]" v-bind="item.attrs" />
        </template>
      </el-form-item>
      <el-form-item>
        <slot name="action" :form="form" :model="model" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import { FormOptions, FormInstance } from './types/types';
  let props =defineProps({
    options: {
      type: Array as PropType<FormOptions []>,
      default: [] as PropType<FormOptions []>
    }
  });
  let model = ref<any>(null);
  let rules = ref<any>(null);
  let form = ref<FormInstance>();
  // 初始化表单
  let initForm = () => {
    if (props.options && props.options.length) {
      let m: any = {};
      let r: any = {};
      props.options.map((item: FormOptions) => {
        m[item.prop!] = item.value;
        r[item.prop!] = item.rules;
      });
      model.value = JSON.parse(JSON.stringify(m));
      rules.value = JSON.parse(JSON.stringify(r));
    }
  };
  // 重置表单
  let resetFields = () => {
    // 重置element-plus的表单
    form.value!.resetFields();
  };
  // 表单验证方法
  let validate = () => {
    return form.value!.validate;
  };
  // 获取表单数据
  let getFormData = () => {
    return model.value;
  };

  // 分发方法
  defineExpose({
    resetFields,
    validate,
    getFormData
  });

  onMounted(() => {
    initForm();
  });
  watch(() => props.options, () => {
    initForm();
  });
</script>

<style scoped>

</style>
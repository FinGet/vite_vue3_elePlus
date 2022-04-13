<template>
  <el-card>
    <u-form ref="uForm" :options="formOptions" :label-width="100">
      <template #action="scope">
        <el-button type="primary" @click="submitForm(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </u-form>
  </el-card>
</template>

<script lang="ts" setup>
  import UForm from '@/components/UForm/index.vue';
  import { FormOptions, FormInstance } from '@/components/UForm/types/types';
  // import { reactive } from 'vue';
  interface Scope {
    form: FormInstance | undefined,
    model: any
  }
  // do not use same name with ref
  const formOptions: FormOptions[] = [
    {
      type: 'input',
      value: '222',
      label: '用户名',
      prop: 'name',
      rules: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ]
    },
    {
      type: 'input',
      value: '',
      label: '密码',
      prop: 'password',
      attrs: {
        showPassword: true
      },
      rules: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 12, message: '密码在6-12位之间', trigger: 'blur' },
      ]
    },
    {
      type: 'checkbox-group',
      value: ['moto'],
      label: '爱好',
      prop: 'hobby',
      options: [
        {key:'篮球', value: 'basketball'},
        {key:'机车', value: 'moto'},
      ]
    },
    {
      type: 'date-picker',
      value: '1995-08-01',
      label: '出生日期',
      prop: 'birthday',
    },
    {
      type: 'date-picker',
      value: [],
      label: '上学时间',
      prop: 'learnDate',
      attrs: {
        type: "datetimerange",
        'value-format': 'YYYY-MM-DD HH:mm:ss'
      }
    },
    {
      type: 'radio-group',
      value: 'man',
      label: '性别',
      prop: 'sex',
      rules: [{required: true, message: '请选择性别', trigger: 'change'}],
      options: [
        {key: '男', value: 'man'},
        {key: '女', value: 'woman'},
      ]
    },
    {
      type: 'select',
      value: '',
      label: '好吃的',
      prop: 'eat',
      options: [
        {key: '麻婆豆腐', value: 'tofu'},
        {key: '酸菜鱼', value: 'fish'},
      ]
    }
  ];
  let uForm = ref();

  let submitForm = (scope: Scope) => {
    scope.form?.validate((valid) => {
      if (valid) {
        console.log(scope.model);
        ElMessage.success('提交成功');
      } else {
        ElMessage.error('表单填写有误,请检查');
      }
    });
  };
  // 重置表单
  let resetForm = () => {
    console.log(uForm.value);
    uForm.value.resetFields();
  };
</script>

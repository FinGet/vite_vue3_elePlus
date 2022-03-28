<template>
  <div class="display-flex j-c-c a-i-c height100">
    <div class="login-form">
      <el-form ref="ruleForm" :model="form">
        <el-form-item prop="email" :rules="{ required: true, message: '请输入账号', trigger: 'change' }">
          <el-input v-model="form.email" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="pass" :rules="{ required: true, message: '请输入密码', trigger: 'change' }">
          <el-input v-model="form.pass" type="password" placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button class="width100" type="primary" @click="onSubmit">
            登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, toRefs } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useAppStore } from '@/store/modules/app';
  import type { ElForm } from 'element-plus';

  type FormInstance = InstanceType<typeof ElForm>

  const router = useRouter();

  const state = reactive({
    form: {
      email: 'admin',
      pass: 'admin123',
    },
    ruleForm: ref<FormInstance>(),
  });
  const { form, ruleForm } = toRefs(state);
  
  const userStore = useUserStore();

  const onSubmit = () => {
    state.ruleForm?.validate((valid) => {
      if (valid) {
        if (state.form.email === 'admin') {
          router.push({ path: "/" });
          // userStore.setUserInfo({ name: 'finget1', age: 29});
        }
      }
    });
  };
</script>

<style lang="less" scoped>
.login-form {
  width: 300px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 2px;
  box-shadow: 3px 3px 10px 8px #f1f1f1;
}
</style>

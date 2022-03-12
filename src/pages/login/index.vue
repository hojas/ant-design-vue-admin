<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { LoginDto } from '~/services/auth'
import { useLogin } from '~/hooks/useLogin'

const { push } = useRouter()
const { login } = useLogin()

const formState = reactive<LoginDto>({
  username: '',
  password: '',
})

const onFinish = async (values: LoginDto) => {
  const { ok } = await login(values)

  if (ok) {
    return push('/')
  }
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ offset: 6, span: 2 }"
    :wrapper-col="{ span: 6 }"
    autocomplete="off"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <a-form-item
      label="邮箱"
      name="username"
      :rules="[{ required: true, message: '请输入邮箱' }]"
    >
      <a-input v-model:value="formState.username" type="email" />
    </a-form-item>
    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
</template>

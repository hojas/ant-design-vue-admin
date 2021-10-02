import { reactive } from 'vue'
import { Form } from 'ant-design-vue'
import { Category } from '../services'

const { useForm } = Form

export const categoryForm = reactive<Category>({
  name: '',
  code: '',
})

const formRules = reactive({
  name: [
    {
      required: true,
      message: '请输入名称',
    },
  ],
  code: [
    {
      required: true,
      message: '请输入 code',
    },
  ],
})

export const { resetFields, validate, validateInfos } = useForm(
  categoryForm,
  formRules,
)

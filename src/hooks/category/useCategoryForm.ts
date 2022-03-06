import { reactive } from 'vue'
import { Form } from 'ant-design-vue'
import { Category } from '~/services/category'

export const useCategoryForm = () => {
  const { useForm } = Form

  const categoryForm = reactive<Category>({
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

  const { resetFields, validate, validateInfos } = useForm(
    categoryForm,
    formRules
  )

  return {
    categoryForm,
    resetFields,
    validate,
    validateInfos,
  }
}

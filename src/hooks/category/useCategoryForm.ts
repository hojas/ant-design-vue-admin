import { reactive } from 'vue'
import { Form } from 'ant-design-vue'
import { CreateCategoryDto } from '~/services/category'

export const useCategoryForm = () => {
  const { useForm } = Form

  const categoryForm = reactive<CreateCategoryDto>({
    name: '',
    code: '',
    orderIndex: 0,
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
    orderIndex: [
      {
        required: true,
        message: '请输入排序码',
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

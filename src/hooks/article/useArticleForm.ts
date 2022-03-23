import { reactive } from 'vue'
import { Form } from 'ant-design-vue'
import { CreateArticleDto } from '~/services/article'

export const useArticleForm = () => {
  const { useForm } = Form

  const articleForm = reactive<CreateArticleDto>({
    title: '',
    categoryId: 0,
  })

  const formRules = reactive({
    title: [
      {
        required: true,
        message: '请输入标题',
      },
    ],
    categoryId: [
      {
        required: true,
        message: '请选择分类',
      },
    ],
  })

  const { resetFields, validate, validateInfos } = useForm(
    articleForm,
    formRules
  )

  return {
    articleForm,
    resetFields,
    validate,
    validateInfos,
  }
}

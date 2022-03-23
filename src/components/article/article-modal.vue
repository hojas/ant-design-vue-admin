<script lang="ts" setup>
import { watch, toRef } from 'vue'

import CategorySelect from './category-select.vue'

import { Article } from '~/services/article'
import { useArticleForm } from '~/hooks/article/useArticleForm'
import { useArticle } from '~/hooks/article/useArticle'
import { useModel } from '~/hooks/useModel'

const props = defineProps<{ visible: boolean; article?: Article }>()
const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'ok'): void
}>()

const { articleForm, validateInfos, validate, resetFields } = useArticleForm()
const { createArticle, updateArticle } = useArticle()
const { value: _visible } = useModel<boolean>(
  toRef(props, 'visible'),
  false,
  (visible: boolean) => emits('update:visible', visible)
)

watch(
  () => props.article,
  article => {
    if (article) {
      articleForm.title = article.title
      articleForm.categoryId = article.categoryId
    } else {
      resetFields()
    }
  },
  {
    immediate: true,
  }
)

const handleOk = async () => {
  try {
    await validate()

    if (props.article && props.article.id) {
      await updateArticle(props.article.id, {
        ...props.article,
        ...articleForm,
      })
    } else {
      await createArticle(articleForm)
    }

    emits('ok')

    _visible.value = false
    resetFields()
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <a-modal v-model:visible="_visible" title="创建分类" @ok="handleOk">
    <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-item label="名称" v-bind="validateInfos.title">
        <a-input v-model:value="articleForm.title" />
      </a-form-item>
      <a-form-item label="分类" v-bind="validateInfos.categoryId">
        <category-select v-model:value="articleForm.categoryId" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

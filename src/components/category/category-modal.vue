<script lang="ts" setup>
import { watch, ref } from 'vue'
import { Category } from '~/services/category'
import { useCategoryForm } from '~/hooks/category/useCategoryForm'
import { useCategory } from '~/hooks/category/useCategory'

const props = defineProps<{ visible: boolean; category?: Category }>()
const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'ok'): void
}>()

const { categoryForm, validateInfos, validate, resetFields } = useCategoryForm()
const { createCategory, updateCategory } = useCategory()

const _visible = ref(false)

watch(
  () => props.visible,
  visible => {
    _visible.value = visible
  }
)

watch(_visible, visible => emits('update:visible', visible))

watch(
  () => props.category,
  category => {
    if (category) {
      categoryForm.name = category.name
      categoryForm.code = category.code
      categoryForm.orderIndex = category.orderIndex
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

    if (props.category && props.category.id) {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        createdAt: _createdAt,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        updatedAt: _updatedAt,
        ...restCategory
      } = props.category

      await updateCategory(props.category.id, {
        ...restCategory,
        ...categoryForm,
      })
    } else {
      await createCategory(categoryForm)
    }
    emits('ok')

    _visible.value = false
    resetFields()
  } catch {}
}
</script>

<template>
  <a-modal v-model:visible="_visible" title="创建分类" @ok="handleOk">
    <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-item label="名称" v-bind="validateInfos.name">
        <a-input v-model:value="categoryForm.name" />
      </a-form-item>
      <a-form-item label="code" v-bind="validateInfos.code">
        <a-input v-model:value="categoryForm.code" />
      </a-form-item>
      <a-form-item label="排序码" v-bind="validateInfos.orderIndex">
        <a-input-number
          v-model:value="categoryForm.orderIndex"
          class="!w-1/1"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

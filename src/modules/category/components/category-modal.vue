<template>
  <a-modal
    v-model:visible="visible"
    :title="title"
    @cancel="resetFields"
    @ok="handleOk"
  >
    <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
      <a-form-item label="名称" v-bind="validateInfos.name">
        <a-input v-model:value="categoryForm.name" />
      </a-form-item>
      <a-form-item label="code" v-bind="validateInfos.code">
        <a-input v-model:value="categoryForm.code" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { watch, toRefs, ref, PropType } from 'vue'

import { Category } from '../services'
import {
  categoryForm,
  resetFields,
  validate,
  validateInfos,
} from '../controllers/form'
import { useCreate } from '../controllers/use-create'
import { useUpdate } from '../controllers/use-update'

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
})
const emit = defineEmits(['input', 'ok'])

const { value, title } = toRefs(props)
const visible = ref(false)

watch(value, value => {
  visible.value = value
})

watch(visible, visible => {
  emit('input', visible)
})

watch(
  () => props.category,
  category => {
    categoryForm.name = category.name
    categoryForm.code = category.code
  },
)

const createCategory = useCreate()
const updateCategory = useUpdate()

const handleOk = async () => {
  try {
    await validate()

    if (props.category.id) {
      await updateCategory(props.category.id, categoryForm)
    } else {
      await createCategory(categoryForm)
    }

    visible.value = false

    emit('ok')
  } catch {}
}
</script>

<script lang="ts" setup>
import { watch, ref } from 'vue'

import { Category } from '~/services/category'
import { useCategory } from '~/hooks/category/useCategory'

const props = defineProps<{
  visible: boolean
  category?: Category
}>()
const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'ok'): void
}>()

const { removeCategory } = useCategory()

const _visible = ref(false)

watch(
  () => props.visible,
  value => {
    _visible.value = value
  }
)

watch(_visible, visible => emits('update:visible', visible))

const handleOk = async () => {
  if (props.category && props.category.id) {
    await removeCategory(props.category.id)

    emits('update:visible', false)
    emits('ok')
  }
}
</script>

<template>
  <a-modal v-model:visible="_visible" title="删除分类" @ok="handleOk">
    <div>确定删除分类：{{ category && category.name }}？</div>
  </a-modal>
</template>

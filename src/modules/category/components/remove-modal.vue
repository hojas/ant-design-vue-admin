<template>
  <a-modal v-model:visible="visible" title="删除分类" @ok="handleOk">
    <div>
      确定删除分类：{{ category.name }}？
    </div>
  </a-modal>
</template>

<script lang="ts" setup>
import { watch, toRefs, ref, PropType } from 'vue'

import { Category } from '../services'
import { useRemove } from '../controllers/use-remove'

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Object as PropType<Category>,
    required: true,
  },
})
const emit = defineEmits(['input', 'ok'])

const { value } = toRefs(props)
const visible = ref(false)

watch(value, value => {
  visible.value = value
})

watch(visible, visible => {
  emit('input', visible)
})

const removeCategory = useRemove()

const handleOk = async () => {
  try {
    if (props.category.id) {
      await removeCategory(props.category.id)
    }
    visible.value = false

    emit('ok')
  } catch {}
}
</script>

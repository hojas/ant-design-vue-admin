<script lang="ts" setup>
import { watch, ref } from 'vue'

import { Article } from '~/services/article'
import { useArticle } from '~/hooks/article/useArticle'

const props = defineProps<{
  visible: boolean
  article?: Article
}>()
const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void
  (e: 'ok'): void
}>()

const { removeArticle } = useArticle()
const _visible = ref(false)

watch(
  () => props.visible,
  value => {
    _visible.value = value
  }
)

watch(_visible, visible => emits('update:visible', visible))

const handleOk = async () => {
  if (props.article && props.article.id) {
    await removeArticle(props.article.id)

    emits('update:visible', false)
    emits('ok')
  }
}
</script>

<template>
  <a-modal v-model:visible="_visible" title="删除文章" @ok="handleOk">
    <div>确定删除文章：{{ article && article.title }}？</div>
  </a-modal>
</template>

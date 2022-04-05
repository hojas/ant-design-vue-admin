<script lang="ts" setup>
import { watch, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Article } from '~/services/article'
import { useArticle } from '~/hooks/article/useArticle'
import MarkdownEditor from '~/components/ui/markdown-editor.vue'

const route = useRoute()
const router = useRouter()
const { getArticle, updateArticle } = useArticle()

const article = ref<Article>()
const content = ref('')

watch(content, content => {
  if (article.value?.id && content !== article.value.content) {
    updateArticle(article.value.id, {
      title: article.value.title,
      categoryId: article.value.categoryId,
      content,
    })
  }
})

onMounted(async () => {
  const { ok, data } = await getArticle(+route.params.id)

  if (ok) {
    article.value = data
    content.value = data.content
  } else {
    router.push('*')
  }
})
</script>

<template>
  <div class="flex flex-col h-1/1">
    <a-button class="w-100px" type="primary" href="/article">返回</a-button>
    <a-divider />
    <markdown-editor v-model:value="content" />
  </div>
</template>

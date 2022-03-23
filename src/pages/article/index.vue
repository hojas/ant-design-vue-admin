<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { Article } from '~/services/article'
import { useArticle } from '~/hooks/article/useArticle'
import ArticleModal from '~/components/article/article-modal.vue'
import RemoveModal from '~/components/article/remove-article-modal.vue'

const { columns, articleList, updateArticleList } = useArticle()

const visible = ref(false)
const removeModalVisible = ref(false)
const article = ref<Article>()

onMounted(() => updateArticleList())

const handleCreate = () => {
  article.value = undefined
  visible.value = true
}

const handleUpdate = (record: Article) => {
  article.value = record
  visible.value = true
}

const handleRemove = (record: Article) => {
  article.value = record
  removeModalVisible.value = true
}
</script>

<template>
  <a-button type="primary" @click="handleCreate">添加</a-button>
  <a-divider />
  <a-table
    :columns="columns"
    :data-source="articleList.results"
    :pagination="false"
    row-key="id"
    bordered
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <a-button type="primary" @click="handleUpdate(record)">编辑</a-button>
        <a-divider type="vertical" />
        <a-button type="primary" danger @click="handleRemove(record)">
          删除
        </a-button>
      </template>
    </template>
  </a-table>
  <article-modal
    v-model:visible="visible"
    :article="article"
    @ok="updateArticleList"
  />
  <remove-modal
    v-model:visible="removeModalVisible"
    :article="article"
    @ok="updateArticleList"
  />
</template>

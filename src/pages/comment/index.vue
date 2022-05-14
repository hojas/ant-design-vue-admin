<script setup lang="ts">
import { useComment } from '~/hooks/useComment'

const { columns, commentList, resolveComment, rejectComment } = useComment()
</script>

<template>
  <a-table :columns="columns" :data-source="commentList.results" row-key="id">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <a-button type="primary" @click="resolveComment(record.id)">
          通过审核
        </a-button>
        <a-divider type="vertical" />
        <a-button type="danger" @click="rejectComment(record.id)">
          拒绝审核
        </a-button>
      </template>
    </template>
  </a-table>
</template>

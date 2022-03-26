<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'

import { Category } from '~/services/category'
import { useCategory } from '~/hooks/category/useCategory'
import CategoryModal from '~/components/category/category-modal.vue'
import RemoveModal from '~/components/category/remove-category-modal.vue'

const { columns, categoryList, updateCategoryList } = useCategory()

const visible = ref(false)
const removeModalVisible = ref(false)
const category = ref<Category>()

onMounted(() => updateCategoryList())

const handleCreate = () => {
  category.value = undefined
  visible.value = true
}

const handleUpdate = (record: Category) => {
  category.value = record
  visible.value = true
}

const handleRemove = (record: Category) => {
  category.value = record
  removeModalVisible.value = true
}
</script>

<template>
  <a-button type="primary" @click="handleCreate">
    <template #icon><plus-outlined /></template>
    添加
  </a-button>
  <a-divider />
  <a-table
    :columns="columns"
    :data-source="categoryList"
    :pagination="false"
    row-key="id"
    bordered
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'action'">
        <a-button type="primary" @click="handleUpdate(record)">
          <template #icon><edit-outlined /></template>
          编辑
        </a-button>
        <a-divider type="vertical" />
        <a-button type="primary" danger @click="handleRemove(record)">
          <template #icon><delete-outlined /></template>
          删除
        </a-button>
      </template>
    </template>
  </a-table>
  <category-modal
    v-model:visible="visible"
    :category="category"
    @ok="updateCategoryList"
  />
  <remove-modal
    v-model:visible="removeModalVisible"
    :category="category"
    @ok="updateCategoryList"
  />
</template>

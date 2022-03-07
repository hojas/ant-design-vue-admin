<script lang="ts" setup>
import { ref } from 'vue'

import { Category } from '~/services/category'
import { useCategory } from '~/hooks/category/useCategory'
import CategoryModal from '~/components/category/category-modal.vue'
import RemoveModal from '~/components/category/remove-modal.vue'

const { columns, categories, updateCategories } = useCategory()

const visible = ref(false)
const removeModalVisible = ref(false)
const category = ref<Category>()

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
  <a-button type="primary" @click="handleCreate">添加</a-button>
  <a-divider />
  <a-table
    :columns="columns"
    :data-source="categories"
    :pagination="false"
    row-key="id"
    bordered
  >
    <template #action="{ record }">
      <a-button-group>
        <a-button type="primary" @click="handleUpdate(record)">编辑</a-button>
        <a-button type="primary" danger @click="handleRemove(record)">
          删除
        </a-button>
      </a-button-group>
    </template>
  </a-table>
  <category-modal
    v-model:visible="visible"
    :category="category"
    @ok="updateCategories"
  />
  <remove-modal
    v-model:visible="removeModalVisible"
    :category="category"
    @ok="updateCategories"
  />
</template>

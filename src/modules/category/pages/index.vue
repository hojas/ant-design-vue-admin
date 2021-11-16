<template>
  <a-button type="primary" @click="beforeShowModal">添加分类</a-button>
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
        <a-button type="primary" @click="beforeShowModal(record)">
          编辑
        </a-button>
        <a-button type="primary" danger>删除</a-button>
      </a-button-group>
    </template>
  </a-table>
  <category-modal
    :value="modalVisible"
    :title="modalTitle"
    :category="category"
    @input="updateVisible"
    @ok="getCategoryList"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { Category, getCategories } from '../services'
import { columns } from '../controllers'
import CategoryModal from '../components/category-modal.vue'
import RemoveModal from '../components/remove-modal.vue'

const category = ref<Category>({ name: '', code: '' })

const modalVisible = ref(false)
const modalTitle = computed(() => (category.value.id ? '编辑分类' : '添加分类'))

// 获取分类列表
const categories = ref<Category[]>([])
const getCategoryList = async () => {
  const { ok, data } = await getCategories()

  if (ok) {
    categories.value = data
  }
}
onMounted(() => {
  getCategoryList()
})

// 同步 modal 状态
const updateVisible = async (visible: boolean) => {
  modalVisible.value = visible
}

// 展示 modal
const beforeShowModal = (c: Category) => {
  if (c && c.id) {
    category.value = { id: c.id, name: c.name, code: c.code }
  } else {
    category.value = { name: '', code: '' }
  }

  modalVisible.value = true
}
</script>

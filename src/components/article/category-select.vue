<script lang="ts" setup>
import { watch, onMounted, ref } from 'vue'
import { useCategory } from '~/hooks/category/useCategory'

const props = defineProps<{ value?: number }>()
const emits = defineEmits<{ (e: 'update:value', categoryId?: number): void }>()

const { categoryList, updateCategoryList } = useCategory()

const _value = ref<number>()

watch(
  () => props.value,
  value => {
    _value.value = value
  },
  {
    immediate: true,
  }
)

watch(_value, value => {
  emits('update:value', value)
})

const handleChange = (value: number) => {
  _value.value = value
}

onMounted(() => {
  updateCategoryList()
})
</script>

<template>
  <a-select ref="select" v-model:value="_value" @change="handleChange">
    <a-select-option v-for="c in categoryList" :key="c.id" :value="c.id">
      {{ c.name }}
    </a-select-option>
  </a-select>
</template>

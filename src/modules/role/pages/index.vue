<template>
  <a-table :columns="columns" :data-source="roles" row-key="id"></a-table>
</template>

<script setup lang="ts">
import { columns, roles } from '../controllers'
</script>

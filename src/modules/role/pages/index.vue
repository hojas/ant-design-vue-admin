<template>
  <a-table :columns="columns" :data-source="roles" row-key="id" :pagination="false" />
</template>

<script setup lang="ts">
import { columns, roles } from '../controllers'
</script>

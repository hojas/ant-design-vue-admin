<template>
  <a-table
    :columns="columns"
    :data-source="users.results"
    row-key="id"
  ></a-table>
</template>

<script setup lang="ts">
import { columns, users } from '../controllers'
</script>

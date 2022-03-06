<script setup lang="ts">
import { useUser } from '~/hooks/useUser'

const { columns, users } = useUser()
</script>

<template>
  <a-table :columns="columns" :data-source="users.results" row-key="id" />
</template>

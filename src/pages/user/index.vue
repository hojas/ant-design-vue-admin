<script setup lang="ts">
import { useUser } from '~/hooks/useUser'

const { columns, userList } = useUser()
</script>

<template>
  <a-table :columns="columns" :data-source="userList.results" row-key="id" />
</template>

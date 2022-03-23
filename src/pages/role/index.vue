<script setup lang="ts">
import { useRole } from '~/hooks/useRole'

const { columns, roleList } = useRole()
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="roleList"
    row-key="id"
    :pagination="false"
  />
</template>

<script setup lang="ts">
import { useRole } from '~/hooks/useRole'

const { columns, roles } = useRole()
</script>

<template>
  <a-table
    :columns="columns"
    :data-source="roles"
    row-key="id"
    :pagination="false"
  />
</template>


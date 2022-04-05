<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/theme-nord_dark'

import { useRemark } from '~/hooks/useRemark'

const props = defineProps<{ value: string }>()
const emits = defineEmits<{ (e: 'update:value', value: string): void }>()

const { remark } = useRemark()
const editorRef = ref()
const editor = ref()
const session = ref()
const content = ref('')
const markedContent = ref('')

watch(
  () => props.value,
  (val, oldVal) => {
    if (oldVal) {
      content.value = val
    } else {
      session.value.setValue(val)
    }
  }
)
watch(content, async val => {
  if (editor.value) {
    emits('update:value', val)
    markedContent.value = await remark(val)
  }
})

onMounted(() => {
  editor.value = ace.edit(editorRef.value)
  editor.value.setTheme('ace/theme/nord_dark')
  editor.value.session.setMode('ace/mode/markdown')

  session.value = editor.value.getSession()

  let timer: NodeJS.Timeout
  session.value.on('change', () => {
    timer = setTimeout(() => {
      timer && clearTimeout(timer)
      content.value = editor.value.getValue()
    }, 500)
  })
})
</script>

<template>
  <div class="flex h-1/1">
    <div ref="editorRef" class="w-1/2" />
    <div class="w-1/2" v-html="markedContent" />
  </div>
</template>

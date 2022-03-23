import { watch, ref, Ref } from 'vue'

export const useModel = <T>(
  propValue: Ref<T>,
  defaultValue: T,
  emit: (val: T) => void
) => {
  const val = ref(defaultValue) as Ref<T>

  watch(propValue, value => {
    val.value = value
  })

  watch(val, val => emit(val))

  return {
    value: val,
  }
}

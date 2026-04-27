<template>
  <div :class="cardClass">
    <div v-if="slots.header" class="mb-5">
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'subtle' | 'outline'
    hover?: boolean
    class?: string
  }>(),
  { variant: 'default', hover: true }
)

const cardClass = computed(() => {
  const base =
    'rounded-2xl border transition-all duration-300 overflow-hidden'
  const bg =
    props.variant === 'subtle'
      ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800'
      : props.variant === 'outline'
        ? 'bg-transparent border-slate-200 dark:border-slate-800'
        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'

  const hover = props.hover
    ? 'hover:shadow-lg hover:-translate-y-1 hover:border-orange-500/50 dark:hover:border-orange-500/30'
    : ''

  const padding = 'p-6 sm:p-7'
  return [base, bg, padding, hover, props.class].filter(Boolean).join(' ')
})
</script>


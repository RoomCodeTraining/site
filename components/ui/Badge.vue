<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'brand'
    size?: 'sm' | 'md'
  }>(),
  { tone: 'neutral', size: 'sm' }
)

const badgeClass = computed(() => {
  const base =
    'inline-flex items-center font-medium rounded-full border whitespace-nowrap'
  const size = props.size === 'md' ? 'text-xs px-3 py-1' : 'text-[11px] px-2.5 py-0.5'

  const tone =
    props.tone === 'success'
      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20'
      : props.tone === 'warning'
        ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20'
        : props.tone === 'danger'
          ? 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20'
          : props.tone === 'brand'
            ? 'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20'
            : 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20'

  return [base, size, tone].join(' ')
})
</script>


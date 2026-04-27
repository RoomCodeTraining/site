<template>
  <component
    :is="asComponent"
    :to="props.to"
    :href="props.href"
    :target="props.target"
    :rel="props.rel"
    :class="btnClass"
  >
    <span class="inline-flex items-center gap-2">
      <slot name="left" />
      <span><slot /></span>
      <slot name="right" />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from 'vue'

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    target?: string
    rel?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    block: false,
  }
)

const asComponent = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  return 'a'
})

const btnClass = computed(() => {
  const base =
    'select-none inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950'

  const size =
    props.size === 'lg'
      ? 'h-12 px-5 text-sm'
      : props.size === 'sm'
        ? 'h-9 px-4 text-sm'
        : 'h-10 px-4 text-sm'

  const variant =
    props.variant === 'secondary'
      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
      : props.variant === 'ghost'
        ? 'bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
        : 'bg-orange-500 text-white hover:bg-orange-600 shadow-sm hover:shadow-md'

  const block = props.block ? 'w-full' : ''
  return [base, size, variant, block].filter(Boolean).join(' ')
})
</script>


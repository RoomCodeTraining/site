<template>
  <section :class="outerClass">
    <div :class="containerClass">
      <div
        v-if="props.title || props.subtitle || slots.header"
        class="mb-10 sm:mb-12"
      >
        <slot name="header">
          <p
            v-if="props.eyebrow"
            class="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-3"
          >
            {{ props.eyebrow }}
          </p>
          <h2
            v-if="props.title"
            class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-display"
          >
            {{ props.title }}
          </h2>
          <p
            v-if="props.subtitle"
            class="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            {{ props.subtitle }}
          </p>
        </slot>
      </div>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    eyebrow?: string
    padded?: boolean
    container?: 'default' | 'wide'
    tone?: 'default' | 'muted'
  }>(),
  {
    padded: true,
    container: 'default',
    tone: 'default',
  }
)

const outerClass = computed(() => {
  const tone =
    props.tone === 'muted' ? 'bg-slate-50 dark:bg-slate-950/40' : ''
  const padding = props.padded ? 'py-14 sm:py-18 lg:py-24' : ''
  return [tone, padding].filter(Boolean).join(' ')
})

const containerClass = computed(() =>
  props.container === 'wide'
    ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
    : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
)
</script>


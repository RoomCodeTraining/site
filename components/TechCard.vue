<template>
    <div class="group">
        <div class="relative bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 shadow-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:hover:bg-gray-700">
            <div class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" :class="categoryColors[category]"></div>
            <div class="relative flex items-center space-x-2">
                <div class="w-6 h-6 flex items-center justify-center bg-white dark:bg-gray-800 rounded p-0.5 group-hover:bg-gray-50 dark:group-hover:bg-gray-600 transition-colors duration-300 shadow-sm">
                    <!-- Image avec fallback -->
                    <img
                        :src="`/assets/images/${image}`"
                        :alt="name"
                        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        @error="handleImageError"
                        @load="imageLoaded = true"
                        v-show="imageLoaded"
                    />

                    <!-- Fallback SVG personnalisé si image ne charge pas -->
                    <div v-show="!imageLoaded" class="w-full h-full flex items-center justify-center">
                        <component :is="getTechIcon()" class="w-3.5 h-3.5" :class="getIconColor()" />
                    </div>
                </div>
                <p class="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors leading-tight">
                    {{ name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, h } from 'vue'

const props = defineProps({
    name: String,
    image: String,
    category: String
})

const imageLoaded = ref(false)

const categoryColors = {
    backend: 'from-blue-500 to-indigo-600',
    frontend: 'from-green-500 to-emerald-600',
    database: 'from-purple-500 to-violet-600',
    devops: 'from-orange-500 to-red-600',
    tools: 'from-gray-500 to-slate-600'
}

const iconColors = {
    backend: 'text-blue-500',
    frontend: 'text-green-500',
    database: 'text-purple-500',
    devops: 'text-orange-500',
    tools: 'text-gray-500'
}

const handleImageError = (event) => {
    console.warn(`Image not found: ${props.image}`)
    console.log('Trying to load:', `/assets/images/${props.image}`)
    imageLoaded.value = false
}

const getIconColor = () => {
    return iconColors[props.category] || 'text-gray-400'
}

const getTechIcon = () => {
    // Icônes SVG personnalisées pour chaque technologie
    const icons = {
        'symfony.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 3.5L4 16V8l8-3.5z' })
        ]),
        'adonis.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
        ]),
        'nest.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 3.5L4 16V8l8-3.5z' })
        ]),
        'vue.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M24 1.61h-9.94L12 5.16 9.94 1.61H0l12 20.78L24 1.61zM12 14.08L5.16 2.23h4.43L12 10.11l2.41-7.88h4.43L12 14.08z' })
        ]),
        'react.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.276 0-.56.015-.854.05C3.086 1.793 0 4.728 0 8.034c0 2.382 1.19 4.627 3.24 6.406C5.29 16.208 6.53 17.5 8.29 18.28c1.76.78 3.92 1.17 6.42 1.17 2.5 0 4.66-.39 6.42-1.17 1.76-.78 3-2.072 4.05-3.84C23.81 12.661 25 10.416 25 8.034c0-3.306-3.086-6.241-7.122-6.72-.294-.035-.578-.05-.854-.05z' })
        ]),
        'nuxt.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.74 17.11c-.557.945.138 2.13 1.251 2.13h12.98c1.113 0 1.809-1.185 1.251-2.13l-5.493-9.514c-.279-.473-.765-.709-1.252-.709z' })
        ]),
        'alpinejs.jpg': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 3.5L4 16V8l8-3.5z' })
        ]),
        'livewire.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
        ]),
        'mysql.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
        ]),
        'cleavr.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L20 8v8l-8 3.5L4 16V8l8-3.5z' })
        ]),
        'git.webp': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187' })
        ]),
        'github.png': () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })
        ])
    }

    return icons[props.image] || (() => h('svg', { fill: 'currentColor', viewBox: '0 0 20 20' }, [
        h('path', { 'fill-rule': 'evenodd', d: 'M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z', 'clip-rule': 'evenodd' })
    ]))
}
</script>

<template>
    <div class="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <!-- Content -->
        <div class="p-8">
            <!-- Header -->
            <div class="flex items-start justify-between mb-8">
                <!-- Period and Status -->
                <div class="space-y-4">
                    <div class="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg">
                        {{ period }}
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full" :class="statusColor"></div>
                        <span class="text-sm text-gray-600 dark:text-gray-400">{{ statusText }}</span>
                    </div>
                </div>

                <!-- Icon -->
                <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-2xl">
                    {{ icon }}
                </div>
            </div>

            <!-- Title and School -->
            <div class="mb-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ title }}
                </h3>
                <p class="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {{ school }}
                </p>
            </div>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {{ description }}
            </p>

            <!-- Skills -->
            <div v-if="skillsArray.length > 0" class="flex flex-wrap gap-2">
                <span
                    v-for="skill in skillsArray"
                    :key="skill"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                >
                    {{ skill }}
                </span>
            </div>
        </div>

        <!-- Level indicator -->
        <div class="absolute top-4 right-4">
            <span class="text-xs font-medium px-2 py-1 rounded-md" :class="levelBadgeClass">{{ levelText }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    period: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: '🎓'
    },
    skills: {
        type: String,
        default: '[]'
    },
    status: {
        type: String,
        default: 'Obtenu'
    },
    level: {
        type: String,
        default: 'intermediate'
    }
})

// Parse skills string to array
const skillsArray = computed(() => {
    try {
        return JSON.parse(props.skills)
    } catch {
        return []
    }
})

// Status color mapping
const statusColor = computed(() => {
    switch (props.status) {
        case 'En cours':
            return 'bg-yellow-400'
        case 'Obtenu':
            return 'bg-green-400'
        default:
            return 'bg-gray-400'
    }
})

// Status text in French
const statusText = computed(() => {
    switch (props.status) {
        case 'En cours':
            return 'En cours'
        case 'Obtenu':
            return 'Obtenu'
        default:
            return props.status
    }
})

// Level badge styling
const levelBadgeClass = computed(() => {
    switch (props.level) {
        case 'advanced':
            return 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'
        case 'intermediate':
            return 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
        case 'foundation':
            return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
        default:
            return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
    }
})

// Level text in French
const levelText = computed(() => {
    switch (props.level) {
        case 'advanced':
            return 'Avancé'
        case 'intermediate':
            return 'Intermédiaire'
        case 'foundation':
            return 'Fondamental'
        default:
            return props.level
    }
})
</script>

<style scoped>
/* Clean and minimal styles */
* {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .p-8 {
        padding: 1.5rem;
    }

    .text-xl {
        font-size: 1.125rem;
    }

    .w-12.h-12 {
        width: 3rem;
        height: 3rem;
    }

    .text-2xl {
        font-size: 1.25rem;
    }

    .mb-8 {
        margin-bottom: 1.5rem;
    }

    .mb-6 {
        margin-bottom: 1rem;
    }
}
</style>

<template>
    <section class="py-8" id="experiences">
        <SectionHeader
            title="Experiences"
            subtitle="Mes expériences professionnelles"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div class="relative w-full min-h-[420px] bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-900/10 dark:via-gray-900 dark:to-green-900/10 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] overflow-hidden group">
                <!-- Animated background patterns -->
                <div class="absolute inset-0">
                    <div class="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-green-50/30 dark:from-green-400/10 dark:via-transparent dark:to-green-400/5 animate-gradient"></div>
                    <div class="absolute -inset-[100%] bg-gradient-to-r from-transparent via-green-100/10 dark:via-green-400/10 to-transparent translate-x-[200%] group-hover:translate-x-[50%] transition-transform duration-1000 ease-in-out"></div>
                </div>

                <!-- Main content -->
                <div class="relative h-full flex flex-col items-center">
                    <!-- Top decorative line -->
                    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>

                    <!-- Experience number with label -->
                    <div class="relative mt-16 text-center">
                        <div class="absolute -inset-10 rounded-full bg-green-50/50 dark:bg-green-900/30 blur-2xl group-hover:bg-green-100/50 dark:group-hover:bg-green-800/40 transition-all duration-500"></div>
                        <div class="relative">
                            <!-- Label on top -->
                            <div class="mb-3">
                                <span class="text-sm uppercase tracking-wider text-green-700/70 dark:text-green-400/90 font-medium">Expérience professionnelle</span>
                            </div>
                            <!-- Number and text -->
                            <div class="flex items-center justify-center">
                                <div class="relative">
                                    <span class="block text-[100px] leading-none font-black bg-gradient-to-br from-green-600 via-green-700 to-green-950 dark:from-green-400 dark:via-green-300 dark:to-green-200 bg-clip-text text-transparent animate-pulse">
                                        {{ yearsOfExperience }}
                                    </span>
                                    <!-- Decorative dots -->
                                    <div class="absolute top-0 -right-4 w-3 h-3 rounded-full bg-green-500/30 dark:bg-green-400/30 animate-float"></div>
                                    <div class="absolute bottom-0 -left-4 w-2 h-2 rounded-full bg-green-600/20 dark:bg-green-400/20 animate-float-delayed"></div>
                                </div>
                                <div class="ml-3">
                                    <span class="block text-3xl font-bold bg-gradient-to-r from-green-700 to-green-900 dark:from-green-400 dark:to-green-200 bg-clip-text text-transparent">
                                        ans
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Growth Illustration with years -->
                    <div class="relative flex flex-col items-center mt-12 mb-12 w-72">
                        <!-- Years labels -->
                        <div class="absolute -top-8 w-full flex justify-between text-sm font-medium">
                            <div v-for="(year, index) in experienceYears" :key="year"
                                class="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
                                <span class="text-green-700/70 mb-1">{{ year }}</span>
                                <span class="text-xs text-green-600/50">{{ index === 0 ? 'Début' : index === experienceYears.length - 1 ? 'Aujourd\'hui' : `Année ${index}` }}</span>
                            </div>
                        </div>

                        <!-- Bars container -->
                        <div class="flex items-end justify-between w-full h-32 relative mt-4">
                            <!-- Background grid -->
                            <div class="absolute inset-0 grid grid-rows-4 gap-0">
                                <div v-for="i in 4" :key="i" class="border-t border-green-100/30"></div>
                            </div>

                            <!-- Progress bars -->
                            <div v-for="(year, index) in experienceYears" :key="year"
                                class="relative w-4 group"
                                :style="`height: ${((index + 1) / experienceYears.length) * 100}%;`">
                                <!-- Tooltip -->
                                <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div class="bg-green-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                                        {{ Math.round(((index + 1) / experienceYears.length) * 100) }}% de progression
                                    </div>
                                </div>
                                <!-- Bar -->
                                <div class="h-full w-full bg-gradient-to-t from-green-600 to-green-300 rounded-t-lg animate-grow relative group-hover:from-green-700 group-hover:to-green-400 transition-all duration-300"
                                    :class="[`animate-grow-${index + 1}`]">
                                    <!-- Shine effect -->
                                    <div class="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            <!-- Growth line with glow -->
                            <div class="absolute top-0 w-full">
                                <!-- Glow effect -->
                                <div class="absolute h-1 w-full bg-green-400/20 blur-sm transform translate-y-[100%]"></div>
                                <!-- Main line -->
                                <div class="absolute h-0.5 w-full bg-gradient-to-r from-green-300 via-green-400 to-green-600 transform translate-y-[100%] animate-line-grow"></div>
                            </div>

                            <!-- Growth dots with pulse -->
                            <div class="absolute top-0 w-full flex justify-between transform translate-y-[100%]">
                                <div v-for="(year, index) in experienceYears" :key="`dot-${year}`"
                                    class="relative group"
                                    :class="[`animate-dot-${index + 1}`]">
                                    <!-- Outer glow -->
                                    <div class="absolute inset-0 bg-green-400/30 rounded-full blur-md transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <!-- Main dot -->
                                    <div class="relative w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg transform group-hover:scale-125 transition-transform duration-300">
                                        <!-- Inner shine -->
                                        <div class="absolute inset-0.5 bg-gradient-to-br from-white/50 to-transparent rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Skills labels -->
                        <div class="mt-8 text-center space-y-2">
                            <span class="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50 to-green-100/70 text-green-800 rounded-full text-sm font-medium shadow-sm">
                                Progression constante
                            </span>
                            <div class="flex items-center justify-center gap-2 text-xs text-green-700/60">
                                <span>{{ startYear }}</span>
                                <div class="h-0.5 w-12 bg-gradient-to-r from-green-200 to-green-300"></div>
                                <span>{{ currentYear }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="relative mt-auto mb-8 max-w-md">
                        <p class="text-base text-gray-700 text-center leading-relaxed backdrop-blur-sm">
                            Depuis 2020, j'ai eu l'opportunité de travailler sur plusieurs projets innovants et de participer à
                            la réalisation de projets de grande envergure.
                        </p>
                    </div>

                    <!-- Bottom decorative elements -->
                    <div class="absolute bottom-0 inset-x-0">
                        <div class="h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent"></div>
                        <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-green-500/40 to-transparent"></div>
                    </div>
                </div>
            </div>

            <TransitionGroup
                name="list"
                tag="div"
                class="space-y-4"
            >
                <div v-for="experience in experiences" :key="experience.id">
                    <ExperienceCard :experience='experience' />
                </div>
            </TransitionGroup>
        </div>
    </section>
</template>

<script setup lang="ts">
const experiences = useExperience()

// Calculate years of experience dynamically
const startYear = 2020
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - startYear

// Generate array of years for the timeline
const experienceYears = Array.from(
    { length: yearsOfExperience + 1 },
    (_, i) => startYear + i
)
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.bg-grid-black {
    background-image: linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px);
}

@keyframes pulse {
    50% { opacity: .9; }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes grow {
    0% { height: 0; opacity: 0; }
    100% { opacity: 1; }
}

@keyframes line-grow {
    0% { width: 0; opacity: 0; }
    100% { width: 100%; opacity: 1; }
}

@keyframes dot-appear {
    0% { transform: scale(0) translateY(100%); opacity: 0; }
    50% { transform: scale(1.2) translateY(100%); }
    100% { transform: scale(1) translateY(100%); opacity: 1; }
}

.animate-pulse {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 3s ease-in-out infinite;
    animation-delay: 1s;
}

.animate-gradient {
    animation: gradient 15s ease infinite;
    background-size: 200% 200%;
}

.animate-grow-1 {
    animation: grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.1s;
}

.animate-grow-2 {
    animation: grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.3s;
}

.animate-grow-3 {
    animation: grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.5s;
}

.animate-grow-4 {
    animation: grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.7s;
}

.animate-line-grow {
    animation: line-grow 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.8s;
}

.animate-dot-1 {
    animation: dot-appear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.9s;
}

.animate-dot-2 {
    animation: dot-appear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 1s;
}

.animate-dot-3 {
    animation: dot-appear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 1.1s;
}

.animate-dot-4 {
    animation: dot-appear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 1.2s;
}
</style>

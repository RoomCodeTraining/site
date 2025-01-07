<template>
    <section class="py-8" id="stack">
        <SectionHeader
            title="Stack"
            subtitle="Technologies"
        />
        <div class="flex flex-col lg:flex-row gap-10 items-stretch mt-16">
            <!-- Section principale avec Laravel -->
            <div class="lg:w-2/5 w-full lg:sticky lg:top-24 mt-24">
                <div class="relative group transform transition-all duration-500 hover:scale-[1.02]">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl blur opacity-40 group-hover:opacity-70 transition duration-700 group-hover:blur-xl"></div>
                    <div class="relative bg-white/90 p-8 rounded-2xl shadow-sm backdrop-blur-sm">
                        <div class="absolute -top-12 left-1/2 transform -translate-x-1/2">
                            <div class="relative">
                                <div class="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur opacity-30 animate-pulse"></div>
                                <div class="absolute inset-0 bg-gradient-to-r from-green-100/40 to-blue-100/40 rounded-full animate-spin-slow"></div>
                                <img src="~/assets/images/laravel.png" alt="Laravel"
                                    class="relative w-52 h-52 object-contain animate-float filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] drop-shadow-[0_25px_45px_rgba(239,68,68,0.2)] hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_60px_rgba(239,68,68,0.25)] transition-all duration-300" />
                            </div>
                        </div>
                        <div class="text-center mt-36">
                            <h3 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">Framework Principal</h3>
                            <p class="text-gray-600 font-medium">Laravel - Mon expertise principale</p>
                            <div class="mt-6 space-y-3">
                                <p class="text-gray-600 leading-relaxed">
                                    En tant que développeur full-stack passionné, je me spécialise dans le stack TaLL
                                    pour créer des applications web modernes et performantes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Grille des autres technologies -->
            <div class="lg:w-3/5 w-full">
                <div class="relative">
                    <div class="absolute -inset-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl blur-lg opacity-20"></div>
                    <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/symfony.png" alt="Symfony"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Symfony</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/adonis.png" alt="AdonisJS"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">AdonisJS</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/nest.png" alt="NestJS"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">NestJS</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/cleavr.png" alt="Cleavr"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Cleavr</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/mysql.png" alt="MySQL"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">MySQL</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/vue.png" alt="Vue.js"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Vue.js</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/react.png" alt="React"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">React</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/nuxt.png" alt="Nuxt"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Nuxt</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/alpinejs.jpg" alt="Alpine.js"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Alpine.js</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/livewire.png" alt="Livewire"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Livewire</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/git.webp" alt="Git"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">Git</p>
                                    </div>
                                </div>
                            </div>
                            <div class="group perspective">
                                <div class="relative transform transition-all duration-500 hover:rotate-y-12">
                                    <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-xl transition-all duration-500"></div>
                                    <div class="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <img src="~/assets/images/github.png" alt="GitHub"
                                            class="w-16 h-16 mx-auto object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl" />
                                        <p class="text-center mt-4 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600">GitHub</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
</script>

<style>
@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0);
    }
    50% {
        transform: translateY(-15px) rotate(3deg);
    }
}

@keyframes spin-slow {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-pulse {
    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin-slow {
    animation: spin-slow 20s linear infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.2;
    }
    50% {
        opacity: 0.4;
    }
}

.perspective {
    perspective: 1000px;
}

.rotate-y-12 {
    transform: rotateY(12deg);
}

.backdrop-blur-sm {
    backdrop-filter: blur(4px);
}
</style>

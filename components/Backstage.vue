<template>
    <section class="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" id="backstage">
        <div class="max-w-6xl mx-auto px-4">
            <SectionHeader
                title="Backstage"
                subtitle="Mon processus et mon setup"
                class="text-white"
            />

            <div class="mt-16">
                <!-- Workflow de développement -->
                <div class="mb-20">
                    <h3 class="text-2xl font-bold mb-8 text-center">Mon workflow de développement</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                <span class="text-2xl">💡</span>
                            </div>
                            <h4 class="text-lg font-semibold mb-3">1. Conception</h4>
                            <p class="text-gray-300 text-sm">
                                Analyse des besoins, wireframes et architecture technique
                            </p>
                        </div>

                        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                                <span class="text-2xl">⚡</span>
                            </div>
                            <h4 class="text-lg font-semibold mb-3">2. Développement</h4>
                            <p class="text-gray-300 text-sm">
                                Code propre, tests et bonnes pratiques
                            </p>
                        </div>

                        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                <span class="text-2xl">🔍</span>
                            </div>
                            <h4 class="text-lg font-semibold mb-3">3. Test & Debug</h4>
                            <p class="text-gray-300 text-sm">
                                Tests unitaires, intégration et optimisation
                            </p>
                        </div>

                        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                            <div class="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                                <span class="text-2xl">🚀</span>
                            </div>
                            <h4 class="text-lg font-semibold mb-3">4. Déploiement</h4>
                            <p class="text-gray-300 text-sm">
                                CI/CD, monitoring et maintenance
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Setup technique -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <!-- Hardware -->
                    <div class="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span class="text-3xl">💻</span>
                            Hardware
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Ordinateur</h4>
                                    <p class="text-gray-300 text-sm">MacBook Pro M2</p>
                                </div>
                                <span class="text-green-400 text-sm">16GB RAM</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Écrans</h4>
                                    <p class="text-gray-300 text-sm">Dual 27" 4K</p>
                                </div>
                                <span class="text-blue-400 text-sm">Productivité</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Clavier</h4>
                                    <p class="text-gray-300 text-sm">Logitech MX Keys</p>
                                </div>
                                <span class="text-purple-400 text-sm">Ergonomique</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Souris</h4>
                                    <p class="text-gray-300 text-sm">Logitech MX Master 3</p>
                                </div>
                                <span class="text-orange-400 text-sm">Précision</span>
                            </div>
                        </div>
                    </div>

                    <!-- Software -->
                    <div class="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
                            <span class="text-3xl">🛠️</span>
                            Software
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Éditeur</h4>
                                    <p class="text-gray-300 text-sm">VS Code + Extensions</p>
                                </div>
                                <span class="text-green-400 text-sm">Productif</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Terminal</h4>
                                    <p class="text-gray-300 text-sm">iTerm2 + Oh My Zsh</p>
                                </div>
                                <span class="text-blue-400 text-sm">Puissant</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Design</h4>
                                    <p class="text-gray-300 text-sm">Figma + Adobe Suite</p>
                                </div>
                                <span class="text-purple-400 text-sm">Créatif</span>
                            </div>

                            <div class="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                                <div>
                                    <h4 class="font-semibold">Productivité</h4>
                                    <p class="text-gray-300 text-sm">Notion + Trello</p>
                                </div>
                                <span class="text-orange-400 text-sm">Organisé</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Outils de développement -->
                <div class="mb-20">
                    <h3 class="text-2xl font-bold mb-8 text-center">Mes outils de développement</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">🐳</div>
                            <p class="text-sm font-medium">Docker</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">📦</div>
                            <p class="text-sm font-medium">Git</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">⚡</div>
                            <p class="text-sm font-medium">Vite</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">🔧</div>
                            <p class="text-sm font-medium">Webpack</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">🧪</div>
                            <p class="text-sm font-medium">Jest</p>
                        </div>
                        <div class="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                            <div class="text-3xl mb-2">📊</div>
                            <p class="text-sm font-medium">Postman</p>
                        </div>
                    </div>
                </div>

                <!-- Environnements de travail -->
                <div class="mb-20">
                    <h3 class="text-2xl font-bold mb-8 text-center">Mes environnements de travail</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <span class="text-xl">💻</span>
                                </div>
                                <h4 class="text-lg font-semibold">Développement</h4>
                            </div>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li>• VS Code avec extensions personnalisées</li>
                                <li>• Terminal optimisé avec Oh My Zsh</li>
                                <li>• Git avec workflow GitFlow</li>
                                <li>• Docker pour la containerisation</li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <span class="text-xl">🎨</span>
                                </div>
                                <h4 class="text-lg font-semibold">Design</h4>
                            </div>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li>• Figma pour les maquettes</li>
                                <li>• Adobe Photoshop pour l'édition</li>
                                <li>• Adobe Illustrator pour les icônes</li>
                                <li>• ColorZilla pour la palette</li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <span class="text-xl">📚</span>
                                </div>
                                <h4 class="text-lg font-semibold">Formation</h4>
                            </div>
                            <ul class="space-y-2 text-sm text-gray-300">
                                <li>• Notion pour la documentation</li>
                                <li>• Trello pour la gestion de projet</li>
                                <li>• Zoom pour les sessions</li>
                                <li>• GitHub pour le partage de code</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Call to action -->
                <div class="text-center">
                    <div class="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                        <h3 class="text-2xl font-bold mb-4">Envie de découvrir plus ?</h3>
                        <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Je partage régulièrement mes découvertes, astuces et bonnes pratiques
                            sur mon blog et mes réseaux sociaux.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#blog"
                               class="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                                <span>Lire le blog</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                </svg>
                            </a>
                            <a href="https://github.com/roomdada" target="_blank"
                               class="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition-colors">
                                <span>Voir GitHub</span>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
/* Animation d'entrée pour les sections */
section > div {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
}

section > div:nth-child(1) { animation-delay: 0.1s; }
section > div:nth-child(2) { animation-delay: 0.2s; }
section > div:nth-child(3) { animation-delay: 0.3s; }
section > div:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

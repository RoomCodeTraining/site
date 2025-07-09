<template>
    <section class="py-24 relative" id="cursus">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Parcours Académique"
                subtitle="Mon évolution professionnelle et mes objectifs"
            />

            <div class="mt-24">
                <!-- Enhanced Horizontal Timeline -->
                <div class="relative">
                    <!-- Timeline line -->
                    <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent transform -translate-y-1/2"></div>

                    <!-- Timeline items -->
                    <div class="relative flex justify-between items-start gap-16">
                        <!-- Master -->
                        <div class="group relative flex flex-col items-center">
                            <!-- Timeline dot -->
                            <div class="relative z-10 mb-12">
                                <div class="w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                            </div>

                            <!-- Card -->
                            <div class="w-80 transform group-hover:-translate-y-2 transition-all duration-300">
                                <CursusCard
                                    period="2023 - 2024"
                                    title="Master en Management Digital"
                                    school="ESATIC - École Supérieure Africaine des TIC"
                                    description="Formation avancée en transformation digitale et management des systèmes d'information pour devenir un leader technologique."
                                    icon="🎯"
                                    skills="['Management', 'Transformation Digitale', 'Systèmes d\'Information', 'Leadership']"
                                    status="En cours"
                                    level="advanced"
                                />
                            </div>
                        </div>

                        <!-- License -->
                        <div class="group relative flex flex-col items-center">
                            <!-- Timeline dot -->
                            <div class="relative z-10 mb-12">
                                <div class="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                            </div>

                            <!-- Card -->
                            <div class="w-80 transform group-hover:-translate-y-2 transition-all duration-300">
                                <CursusCard
                                    period="2020 - 2023"
                                    title="Licence MIAGE"
                                    school="Université Polytechnique de Bingerville"
                                    description="Formation en Méthodes Informatiques Appliquées à la Gestion des Entreprises avec réalisation du projet Papillon Routier."
                                    icon="💻"
                                    skills="['Informatique', 'Gestion', 'Projet Papillon Routier', 'Développement']"
                                    status="Obtenu"
                                    level="intermediate"
                                />
                            </div>
                        </div>

                        <!-- Bac -->
                        <div class="group relative flex flex-col items-center">
                            <!-- Timeline dot -->
                            <div class="relative z-10 mb-12">
                                <div class="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                            </div>

                            <!-- Card -->
                            <div class="w-80 transform group-hover:-translate-y-2 transition-all duration-300">
                                <CursusCard
                                    period="2020"
                                    title="Baccalauréat Série D"
                                    school="Lycée Classique d'Abidjan"
                                    description="Baccalauréat Scientifique obtenu avec mention Assez Bien, fondation solide pour mes études supérieures."
                                    icon="🏆"
                                    skills="['Sciences', 'Mention Assez Bien', 'Fondations']"
                                    status="Obtenu"
                                    level="foundation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import CursusCard from './CursusCard.vue'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
/* Clean and minimal styles */
* {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .flex.justify-between {
        flex-direction: column;
        gap: 6rem;
    }

    .flex.justify-between > div {
        width: 100%;
    }

    .w-80 {
        width: 100%;
        max-width: 28rem;
    }

    .mb-12 {
        margin-bottom: 3rem;
    }

    .gap-16 {
        gap: 0;
    }

    .mt-24 {
        margin-top: 3rem;
    }
}

@media (max-width: 768px) {
    .py-24 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .mt-24 {
        margin-top: 2rem;
    }

    .mb-12 {
        margin-bottom: 2rem;
    }
}
</style>

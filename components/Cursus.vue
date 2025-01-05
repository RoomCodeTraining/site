<template>
    <section class="py-24" id="cursus">
        <SectionHeader
            title="Cursus"
            subtitle="Mon Parcours"
        />
        <div class="flex flex-col lg:flex-row gap-10 items-stretch mt-16">
            <div class="lg:w-1/2 w-full">
                <div class="relative group h-full transform transition-all duration-500 hover:scale-[1.02]">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500 group-hover:blur-lg"></div>

                    <!-- Image Container -->
                    <div class="relative h-full rounded-xl">
                        <img src="~/assets/images/me.jpg"
                            alt="realisation" class="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg flex items-end">
                            <div class="p-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                <p class="font-semibold text-lg">Roger DA</p>
                                <p class="text-gray-200 text-sm">Développeur Full Stack</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:w-1/2 w-full space-y-6">
                <CursusCard
                    period="2023 - 2024"
                    title="Master en Management Digital"
                    description="Actuellement en Master en Management Digital des Systèmes d'Information (MDSI), je me forme pour devenir un professionnel capable de relever les défis de la transformation numérique des entreprises."
                />
                <CursusCard
                    period="2020 - 2023"
                    title="License MIAGE"
                    description="J'ai obtenu ma Licence en Méthode Informatique Appliquée à la Gestion des Entreprises (MIAGE) en réalisant un projet appelé Papillon Routier."
                />

                <CursusCard
                    period="2020"
                    title="Baccalauréat Serie D"
                    description="J'ai obtenu mon Baccalauréat Scientifique (BAC D) avec la mention Assez Bien au Lycée Classique d'Abidjan."
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import CursusCard from './CursusCard.vue'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped>
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}
</style>

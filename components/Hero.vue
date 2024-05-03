<template>
<div class="bg-gradient-to-b from-white via-green-100 to-green-200  text-white px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24">
    <div class="flex flex-col md:flex-row justify-between items-center py-4">
        <div class="w-full md:w-1/2 pr-8">
            <h1 class="text-xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-2">
                <span class="-mt-4">👋</span>Hello, je suis Roger DA
            </h1>
            <h2 class="text-lg md:text-xl lg:mt-0 ml-5 font-bold text-green-800">
                Developpeur & Formateur
            </h2>
            <p class="text-gray-600 mt-4 text-sm lg:text-xl md:text-md text-justify">
                Je suis passionné par la création d'expériences web exceptionnelles. Avec une solide expérience en développement web, je mets mes compétences au service de la réalisation de projets innovants. En tant que formateur, j'aspire à partager mes connaissances et à inspirer la prochaine génération de développeurs web.</p>
        </div>
        <div class="hidden md:block md:w-1/2">
            <img src="https://media.licdn.com/dms/image/D4E03AQEYTLFCHx2Irw/profile-displayphoto-shrink_800_800/0/1690817812685?e=1719446400&v=beta&t=VDBg_Bh_Ex1FydRklgB30QOT5PbE0HSZsxFhGtKh28E" alt="hero" class="w-full h-auto image-with-transition" style="object-fit: contain;">
        </div>
    </div>
    <div class="text-center lg:text-left lg:-mt-16">
        <a type="button" href="https://github.com/roomdada" target="_blank" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
            </svg>
            Mon Github
        </a>
        <a type="button" href="https://www.linkedin.com/in/da-sie-roger-889289192/" target="_blank" class="text-white bg-[#366ec7] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 me-2" viewBox="0 0 20 20" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
            </svg>
            Mon Linkedin
        </a>
    </div>
</div>
</template>
<style scope>
    .image-with-transition {
        transition: transform 0.4s ease-in-out;
        height: 400px;
    }

    .image-with-transition:hover {
        transform: scale(1.5);
    }
</style>

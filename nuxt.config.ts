// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss'
    ],
   app: {
    head: {
      title : "Da Sié Roger - Mon site web personnel",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Je suis un développeur web et mobile, passionné par la programmation, la technologie et le design. Je suis également un grand amateur de musique, de cinéma et de jeux vidéo. J'aime apprendre de nouvelles choses et partager mes connaissances avec les autres." },
        { hid: 'og:title', property: 'og:title', content: 'Da Sié Roger - Mon site web personnel' },
        { hid: 'og:description', property: 'og:description', content: "Je suis un développeur web et mobile, passionné par la programmation, la technologie et le design. Je suis également un grand amateur de musique, de cinéma et de jeux vidéo. J'aime apprendre de nouvelles choses et partager mes connaissances avec les autres." },
        { hid: 'og:image', property: 'og:image', content: 'https://dasiemedia.com/images/og-image.jpg' },
        { hid: 'og:url', property: 'og:url', content: 'https://me.roomcodetraining.com' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel : 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"},
        { rel: "script", href:"https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"}
      ]
    }
  }
})

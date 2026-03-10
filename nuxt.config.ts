// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins : [
  ],
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
       '@pinia/nuxt',
    ],
   pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      title: 'EKLOU Julie Sỳntich Haile – Portfolio',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            "Portfolio de EKLOU Julie SYNTICH HAILE – assistante administrative et RH basée à Abidjan, spécialisée en gestion administrative, communication et accueil.",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'EKLOU Julie SYNTICH HAILE – Portfolio',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Présentation de l’expérience, des compétences et des formations de Julie en ressources humaines, communication et gestion administrative.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/julie-og.jpg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://me.roomcodetraining.com',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/julie.jpeg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
        },
        {
          rel: 'script',
          href: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js',
        },
      ],
    },
  },
})

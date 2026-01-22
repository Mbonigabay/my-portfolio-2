import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: "Yusuf's Portfolio",
            bodyAttrs: {
                id: 'bg-img'
            },
            meta: [
                { name: 'description', content: 'Portfolio of Yusuf Mbonigaba, a Software Engineer focusing on modern web development.' },
                { name: 'author', content: 'Yusuf Mbonigaba' },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: "Yusuf's Portfolio" },
                { name: 'twitter:card', content: 'summary_large_image' }
            ],
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Spectral:wght@200;300;400;500;600;700;800&display=swap' },
                { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.css' },
                { rel: 'stylesheet', href: '/css/main.css' }
            ]
        }
    }
})

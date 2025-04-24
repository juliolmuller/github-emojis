import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'GitHub Emojis Search App',
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'A straight forward search application for emojis supported by GitHub',
        },
        {
          name: 'keywords',
          content: 'github, emojis, markdown, github emojis, search',
        },
        {
          name: 'author',
          content: 'Julio L. Muller',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Chewy&family=Kufam:wght@700&family=Nanum+Gothic+Coding&display=swap',
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
  srcDir: 'src/',
  css: ['~/styles.scss'],

  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/fontaine'],
});

<script setup>
import useStrapiMedia from '~~/composables/useStrapiMedia'
import { getMetaTags } from "~~/composables/useMetaTags"

const { find } = useStrapi4()
const global = await find('global?populate=favicon&populate=defaultSeo.shareImage')

const {defaultSeo, favicon, siteName} = { ...global.data.attributes }

useHead({
  titleTemplate: `%s | ${siteName}`,
  title: defaultSeo.metaTitle,
  meta: getMetaTags(defaultSeo),
  link: [
    {
      rel: "favicon",
      href: useStrapiMedia(favicon.data.attributes.url),
    },
  ],
})

definePageMeta({
  layout: 'default',
})

</script>

<template>
  <div>
    <Hero />

    <!-- <Latest /> -->
    
    <Skills />
  </div>
</template>

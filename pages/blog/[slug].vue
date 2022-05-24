<script setup>
import { ref, reactive } from 'vue'
import useStrapiMedia from '~~/composables/useStrapiMedia';
import { getMetaTags } from "../../composables/useMetaTags";

const route = useRoute()
const { findOne } = useStrapi4()
const response = await findOne('articles', `?filters[slug][$eq]=${route.params.slug}&populate=image&populate=author`)

const article = response.data[0]

const content = ref('')
content.value = useNuxtApp().$mdit.render(article.attributes.content) || article.attributes.content
const seo = reactive({
  metaTitle: article.attributes.title,
  metaDescription: article.attributes.description,
  shareImage: article.attributes.image,
})

useHead({
  titleTemplate: '%s | Eneotu',
  title: seo.metaTitle,
  meta: getMetaTags(seo),
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-6 px-3">

    <div
      class="col-start-2 col-span-4"
    >
      <img
        v-if="article.attributes.image"
        :src="useStrapiMedia(article.attributes.image.data.attributes.url)"
        class="min-w-full h-96"
      />
    </div>
    <div class="col-start-2 col-span-4 py-5 text-2xl font-bold">
      <h1 v-if="article.attributes.title">
        {{ article.attributes.title }}
      </h1>
    </div>

    <div
      v-if="article.attributes.content"
      v-html="content"
      class="col-start-2 col-span-4 text-justify"
    />

    <div class="col-start-2 py-5">
      <p v-if="article.attributes.author">
        Author: {{ article.attributes.author.data.attributes.name }}
      </p>
    </div>

    <!-- <div class="col-start-2">
      <p v-if="article.attributes.publishedAt">
        {{ $moment(article.attributes.publishedAt).format("Do MMM YYYY") }}
      </p>
    </div> -->

  </div>
</template>

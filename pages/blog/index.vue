<script setup>
import { ref, toRefs } from 'vue'
import qs from 'qs'
import useStrapiMedia from '~~/composables/useStrapiMedia'
import { getMetaTags } from "../../composables/useMetaTags"

const { find } = useStrapi4()
const query = qs.stringify({
  populate: '*', 
}, {
  encodeValuesOnly: true,
});

const articles = await find(`articles?${query}`)
const featured = await find(`featured?${query}&populate=article.image`)
const blogpage = await find('homepage?populate=seo.shareImage')

const {seo} = blogpage.data.attributes

useHead({ titleTemplate: '%s | Eneotu', title: seo.metaTitle, meta: getMetaTags(seo) })

</script>

<template>
  <div>
    <div class="hero min-h-[30%]">
      <img
          :src="useStrapiMedia(featured.data.attributes.article.data.attributes.image.data.attributes.url)"
          class="h-56 min-h-full min-w-full"
        />
      <div class="hero-overlay bg-opacity-70"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <a :href="`blog/${featured.data.attributes.article.data.attributes.slug }`">
            <h1 class="mb-3 text-5xl font-bold">Blog</h1>
            <p>{{ featured.data.attributes.article.data.attributes.title }}</p>
            <button class="btn btn-link capitalize">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 pt-10 px-3">
      <div class="col-start-1 col-end-7">
        <Articles :articles="articles.data" />
      </div>
    </div>
  </div>
</template>

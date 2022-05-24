<script setup>
import qs from 'qs'
import useStrapiMedia from '~~/composables/useStrapiMedia';

const { find } = useStrapi4()
const query = qs.stringify({
  populate: '*', 
}, {
  encodeValuesOnly: true,
});

const response = await find(`articles?${query}`)
const articles = response.data


</script>

<template>
  <div class="flex justify-center">
      <h1 class="text-2xl font-bold text-primary pt-16 pb-5">Latest Blog</h1>
  </div>

  <div class="bg-white">
    <div class="flex overflow-x-auto p-2">
      <div
        v-for="article in articles"
        :key="article.id"
        class="flex-shrink-0"
      >
        <a :href="`blog/${article.attributes.slug}`">
          <div class="card w-96 h-96 p-2">
            <figure><img :src="useStrapiMedia(article.attributes.image.data.attributes.url)" class="h-48 min-w-full	"/></figure>
            <div class="card-body bg-accent hover:bg-primary hover:text-black">
              <p>{{article.attributes.title}}</p>
            </div>
          </div>
        </a>
      </div>
      
    </div>
  </div>
</template>

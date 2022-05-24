<script setup>
import useStrapiMedia from '~~/composables/useStrapiMedia'

defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
    <div
      v-for="article in articles"
      :key="article.id"
    >
      <div class="card bg-base-100 p-1">
        <figure><img :src="useStrapiMedia(article.attributes.image.data.attributes.url)" class="h-48 min-w-full	" /></figure>
        <a :href="`blog/${article.attributes.slug}`">
          <div class="card-body bg-accent hover:bg-primary hover:text-black">
            <h2 class="card-title">{{ article.attributes.title }}</h2>
            <!-- <p>{{ article.attributes.description }}</p> -->
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Read More</button>
            </div>
          </div>
        </a>
      </div>

    </div>
  </div>
</template>

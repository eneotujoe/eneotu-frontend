<script setup>
import { ref } from 'vue'

const title = ref('My Projects')

useHead({ titleTemplate: '%s | Eneotu', title: title })

let links = [
    {url:'https://netflix-pro.netlify.app', title: 'Netflix Frontend Clone', text: 'Built With ReactJS and deployed on netlify'},
    {url:'https://instagram-pro.netlify.app', title: 'Instagram Frontend Clone', text: 'Built With ReactJS and netlify'},
    {url:'https://eneotu.netlify.app', title: 'My Portfolio', text: 'Built with nuxt and netlify'},
    {url:'https://preptask.netlify.app/quiz', title: 'Preptask', text: 'An educational tool built with nuxt, Django, GraphQL, heroku and netlify'},
]
   
</script>

<template>
    <div>
        <div class="flex justify-center">
            <h1
                class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600 py-10"
            >
            My Projects
            </h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-1 md:container">
            <div
                v-for="(link, i) in links"
                :key="i"
            >  
                <nuxt-link
                    class=""
                    :to="link.url"
                >
                    <div class="card h-65 min-h-full bg-primary text-primary-content m-1">
                        <div class="card-body">
                            <h2 class="card-title">{{ link.title }}</h2>
                            <p>{{ link.text }}</p>
                            <div class="card-actions justify-end">
                            <button class="btn text-primary">View</button>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

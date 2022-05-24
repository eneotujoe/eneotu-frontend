<script setup>
import { ref } from 'vue'
const title = ref('About Me')
const description = ref('Eneeotu Joe is an artificial intelligence researcher')

useHead({
    titleTemplate: '%s | Eneotu',
    title: title,
    meta: [{ name: 'description', content: description }],
})

</script>
<template>
    <div class="container justify-center pt-10">
        <div class="grid grid-cols-1">

            <div class="h-60 card card-bordered border-primary text-primary m-3">
                <div class="card-body">
                    <div class="flex justify-center">
                        <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">{{ title }}</h1>
                    </div>
                    <p>
                        I’m an artificial intelligence researcher, I have over 4 years of experience in software engineering and a first-class degree in naval electromechanical engineering.
                    </p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3">

            <div class="card h-60 card-bordered border-primary text-primary m-3">
                <div class="card-body">
                    <h2 class="card-title">Education</h2>
                    <ul>
                        <li>BSc in Marine Engineering (Naval Electromechanics)</li>
                        <li>Constanta Maritime Unversity, Romania</li>
                        <i>Final GPA: 10/10</i>
                    </ul>
                </div>
            </div>

            <div class="card h-60 card-bordered border-primary text-primary m-3">
                <div class="card-body">
                    <h2 class="card-title">Award</h2>
                    <p>Best Student Award - Constanta Maritime Unversity, Romania</p>
                </div>
            </div>

            <div class="card h-60 card-bordered border-primary text-primary m-3">
                <div class="card-body">
                    <h2 class="card-title">Publication</h2>
                    <div class="card-actions justify-end">
                        <p>Machine Learning Algorithmic Study of the Naira Exchange Rate</p>
                        <a href="https://www.ej-eng.org/index.php/ejeng/article/view/1739" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
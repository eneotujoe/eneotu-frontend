<script setup>

const skills = [
  { name: 'Javascript' },
  { name: 'Python' },
  { name: 'C++' },
  { name: 'Django' },
  { name: 'Django Rest Framework' },
  { name: 'GraphQL' },
  { name: 'VueJS' },
  { name: 'NuxtJS' },
  { name: 'ReactJS' },
  { name: 'NumPy' },
  { name: 'Pandas' },
  { name: 'Matplotlib' },
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'Postgres' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Adobe XD' },
  { name: 'Figma' },
  { name: 'Solidworks' },
]

</script>

<template>
    <div class="md:container md:mx-auto py-16">
        <h1 class="text-3xl text-center font-bold text-primary">Skills</h1>
        <div class="px-10">
            <button
                v-for="skill in skills"
                :key="skill.name"
                class="btn btn-outline btn-primary m-1"
            >
                {{ skill.name }}
            </button>
        </div>
    </div>
</template>

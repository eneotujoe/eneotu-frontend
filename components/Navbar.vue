<script setup>
import { ref } from 'vue'

const navLinks = [
  { name: 'Blog', to: '/' },
  { name: 'Projects', to: '/project' },
  { name: 'Resume', to: '/eneotu-joe.png' },
  { name: 'About', to: '/about' },
]

const navThreshold = ref(false)
const drawer = ref(false)

function onScroll() {
    if (window.pageYOffset > 120) {
        console.log(window.pageYOffset)
        navThreshold.value = true
    } else {
        navThreshold.value = false
    }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
})

function toggleDrawar(){
    drawer.value = !drawer.value
  }



</script>

<template>
  <div
    :class="navThreshold ? 'bg-primary text-neutral' : 'bg-transparent'"
    class="navbar z-10 font-bold text-primary"
  >
    <div class="navbar-start">
      
      <div class="">
        <label for="my-drawer" class="btn btn-square btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <a href="/" class="btn btn-ghost normal-case text-xl">Eneotu Joe</a>
    </div>

    <div class="navbar-center hidden lg:flex">
      <ul v-for="link in navLinks"
          :key="link.to"
          class="menu menu-horizontal p-0"
      >
        <li><a :href="link.to">{{link.name}}</a></li>
      </ul>
    </div>

    <div class="navbar-end hidden lg:flex pr-5">
      <!-- <button
        :class="navThreshold ? 'btn btn-outline btn-secondary' : 'btn btn-outline btn-primary'"
        class="mr-1"
      >
        <svg  class="h-8 w-8 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button> -->
      <a
        href="https://github.com/eneotujoe"
        target="_blank"
        :class="navThreshold ? 'btn btn-outline btn-secondary' : 'btn btn-outline btn-primary'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 pr-1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></svg>
        GitHub
      </a>
    </div>
  </div>
</template>

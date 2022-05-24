<template>
  <div class="drawer h-screen">
    <input id="my-drawer" type="checkbox" class="drawer-toggle"/> 
    <div class="drawer-content">
      <Navbar />
      <slot />
      <Footer />
    </div>
    <Drawer />
  </div>
  
</template>
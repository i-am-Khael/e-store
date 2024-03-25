
<template>
  <main class="w-full h-screen overflow-hidden grid grid-cols-[250px_1fr]" >

    <SideBar class="w-full h-screen overflow-scroll bg-gray-800" />

    <section class="w-full h-screen overflow-scroll bg-gray-950" >
      <RouterView/>
    </section>

  </main>
</template>

<script setup>
  import SideBar from '../components/SideBar.vue';
</script>

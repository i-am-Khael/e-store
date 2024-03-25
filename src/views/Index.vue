
<template>
  <main class="w-full min-h-screen">
    <section class="max-w-[2040px] w-[90%] mx-auto p-4
      grid grid-cols-3 max-sm:grid-cols-1 gap-4" >

      <Products :products="store.products" />

    </section>
  </main>
</template>

<script setup>
  import { datas } from '@/stores/datas';
  import Products from '../components/Products.vue';
  
  const store = datas();
  store.allProducts();

</script>

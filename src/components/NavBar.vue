
<template>
  <nav class="w-full sticky top-0 bg-gray-900" >
    <div class="max-w-[2040px] w-[90%] mx-auto py-4 flex items-center justify-between" >

      <RouterLink :to="{ name: 'index' }" class="text-xl font-semibold" >E-Store</RouterLink>

      <div class="flex items-center justify-center gap-6" >
        <menu class="flex items-center justify-center gap-4 font-semibold" >
          <RouterLink :to="{name: 'dash-index'}" >Dashboard</RouterLink>
        </menu>
        <RouterLink :to="{ name: 'cart' }">
          <div class="w-[75px] p-2 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center gap-1" >
            <font-awesome-icon icon="fa-soli fa-cart-shopping"/>
            <span>{{ store.cart }}</span>
          </div>
        </RouterLink>
      </div>

    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { datas } from '../stores/datas';
  const store = datas();
</script>


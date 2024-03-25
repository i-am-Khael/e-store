
<template>
  <main class="w-full min-h-screen" >
    <div class="w-[90%] max-w-[2040px] h-full mx-auto p-4" >

      <section class="w-full flex justify-center" >

        <div class="p-6 flex flex-col border-[1px] border-gray-50/10 bg-gray-900" >
          <div class="mb-5 flex items-center justify-between" >
            <h2 class="text-lg font-bold" >Cart Items</h2>
            <p >Total Items: {{ store.cartItems.length }}</p>
          </div>
          <div class="flex flex-col gap-4">
            <ul class="flex flex-col gap-2" >
              <li v-for="item, index in store.cartItems" :key="index"
                class="flex items-center justify-between gap-4">
                <span>{{ item.title }}</span>
                <span>{{ item.price }}</span>
              </li>
            </ul>
            <hr class="mt-4" />
            <div class="flex items-center justify-between gap-4">
              <p>Total</p>
              <p>${{ totalPrice.toFixed(2) }}</p>
            </div>
          </div>

        </div>

      </section>

    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import { datas } from '@/stores/datas';
  const store = datas();
  let totalPrice = ref(0);
  store.cartItems.forEach(item => {
    totalPrice.value += item.price;
  });
</script>

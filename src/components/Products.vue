
<template>
  <div v-for="product in props.products" :key="product.id"
    class="p-4 rounded-md shadow-xl border-[1px] border-gray-50/10 hover:border-gray-50 bg-gray-900" >
    
      <RouterLink :to="{ name: 'product', params: { id: product.id } }" class="flex flex-col gap-4" >
        <p>{{ product.title }}</p>
        <div class="w-full h-[200px]" >
          <img :src="product.image" :alt="product.title" class="w-full h-full object-cover">
        </div>
      </RouterLink>
  
      <div class="mt-4" >
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <small>Price</small>
            <p class="font-bold">${{ product.price }}</p>
          </div>
          <div class="flex flex-col gap-1">
            <button @click="addToCart(product.id, product.title, product.price)" class="p-2 rounded-md bg-green-600 hover:bg-green-500" >Add to cart</button>
          </div>
        </div>
      </div>


  </div>
</template>

<script setup>
  import { datas } from '@/stores/datas';
  const props = defineProps({
    'products': Array
  })
  const store = datas();
  const addToCart = (id, title, price) => {
    store.cart += 1;
    store.cartItems.push({
      'id': id,
      'title': title,
      'price': price
    });
  }
</script>

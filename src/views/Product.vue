
<template>
  <main class="w-full min-h-screen" >
    <div class="max-w-[2040px] w-[90%] h-full mx-auto py-6 flex flex-col justify-center">

      <div class="w-full items-center justify-center">
        <p @click="router.back" class="text-right cursor-pointer" > <font-awesome-icon icon="fa-solid fa-circle-chevron-left" /> Back</p>
      </div>

      <section class="w-full mt-4 flex justify-center" >
        <div class="w-[600px] h-full p-6 border-[1px] border-gray-50/10 rounded-md flex flex-col gap-4
          hover:border-gray-50 bg-gray-900" >

          <h2 class="font-bold" >{{ store.product.title }}</h2>
  
          <div class="flex flex-col gap-5">
            
            <div class="w-full h-full" >
              <img :src="store.product.image" :alt="store.product.title" class="w-full h-full object-cover" >
            </div>

            <div class="flex items-center justify-between" >
              <div class="flex flex-col gap-1">
                <small>Price</small>
                <p class="font-bold text-lg" >${{ store.product.price }}</p>
              </div>
              <button @click="addToCart(store.product.id, store.product.title, store.product.price)"
                class="p-2 font-semibold rounded-md bg-green-600 hover:bg-green-500" >Add to cart</button>
            </div>
            
            <div class="flex flex-col gap-2">
              <label for="desc" class="font-semibold">Description</label>
              <p id="desc" class="indent-7 text-justify" >{{ store.product.description }}</p>
            </div>

          </div>

          <div>
            <span>Ratings</span>
            <p> <Icon icon="fa-solid fa-star" class="text-yellow-600" /> {{ store.product.rating.rate }}</p>
            <p> <Icon icon="fa-solid fa-user" /> {{ store.product.rating.count }}</p>
          </div>
  
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { datas } from '@/stores/datas';
  import Icon from '../components/Icon.vue';
  
  const store = datas();
  const route = useRoute();
  const router = useRouter();
  store.getProduct(route.params.id);
  const addToCart = (id, title, price) => {
    store.cart += 1;
    store.cartItems.push({
      'id': id,
      'title': title,
      'price': price
    });
  }

</script>

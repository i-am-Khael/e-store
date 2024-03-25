
<template>
  <div class="py-6 pb-[15rem] grid place-items-center" >

    <p v-show="state" class="my-4 p-2 bg-gray-50 text-green-600 absolute bottom-0 right-10 font-bold" >{{ msg }}</p>
    
    <form @submit.prevent="updateProduct" class="p-4 border-[1px] border-gray-50/10 rounded-md shadow-xl
    flex flex-col gap-4" >

      <div class="flex flex-col gap-2" >
        <label for="category">Category</label>
        <input id="category" type="text" :placeholder="store.product.category" v-model="category"
          class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50" >
      </div>

      <div class="flex flex-col gap-2" >
        <label for="price">Price</label>
        <input id="price" type="text" :placeholder="store.product.price"  v-model="price"
          class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50" >
      </div>

      <div class="flex flex-col gap-2" >
        <label for="title">Title</label>
        <input id="title" type="text" :placeholder="store.product.title" v-model="title"
        class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50">
      </div>

      <div class="flex flex-col gap-2" >
        <label for="desc">Description</label>
        <textarea id="desc" cols="30" rows="6" v-model="desc" :placeholder="store.product.description"
          class="p-4 outline-none border-[1px] border-gray-50/10 focus:border-gray-50 bg-transparent"></textarea>
      </div>

      <button class="w-full p-2 bg-gray-800 hover:bg-gray-900" >Update</button>

    </form>

</div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { datas } from '@/stores/datas';
  
  const store = datas();
  const route = useRoute();
  
  const category = ref('');
  const price = ref('');
  const title = ref('');
  const desc = ref('');

  const state = ref(false);
  let msg = '';

  onMounted(() => {
    store.getProduct(route.params.id);
  });

  const updateProduct = async () => {
    const result = await fetch(`${store.uri}products/${route.params.id}`, {
      mode: 'cors',
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        "title": title.value,
        "price": price.value,
        "description": desc.value,
        "category": category.value,
        "image": "https://i.pravatar.cc"
      })
    });
    const data = await result.json();
    if( data.id.toString() === route.params.id ) {
      state.value = true;
      msg = 'Updated Successfully!'
    }
    setTimeout(() => {
      state.value = false;
    },2000);
  }

</script>

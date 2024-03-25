
<template>
  <div class="py-6 pb-[15rem] grid place-items-center" >

    <p v-show="state" class="my-4 p-2 bg-gray-50 text-green-600 absolute bottom-0 right-10 font-bold" >{{ msg }}</p>
    
    <form @submit.prevent="addProduct" class="p-4 border-[1px] border-gray-50/10 rounded-md shadow-xl
    flex flex-col gap-4" >

      <div class="flex flex-col gap-2" >
        <label for="category">Category</label>
        <input id="category" type="text" placeholder="Category" v-model="category"
          class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50" >
      </div>

      <div class="flex flex-col gap-2" >
        <label for="price">Price</label>
        <input id="price" type="text" placeholder="Price"  v-model="price"
          class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50" >
      </div>

      <div class="flex flex-col gap-2" >
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="title" v-model="title"
        class="p-2 border-[1px] bg-transparent outline-none border-gray-50/10 focus:border-gray-50">
      </div>

      <div class="flex flex-col gap-2" >
        <label for="desc">Description</label>
        <textarea id="desc" cols="30" rows="6" v-model="desc" placeholder="Description"
          class="p-4 outline-none border-[1px] border-gray-50/10 focus:border-gray-50 bg-transparent"></textarea>
      </div>

      <button class="w-full p-2 bg-gray-800 hover:bg-gray-900" >Save</button>

    </form>

</div>
</template>

<script setup>
  import { ref } from 'vue';
  import { datas } from '@/stores/datas';
  
  const store = datas();

  const category = ref('');
  const price = ref('');
  const title = ref('');
  const desc = ref('');

  const state = ref(false);
  let msg = '';

  const addProduct = async () => {
    const result = await fetch(`${store.uri}products`, {
      mode: 'cors',
      method: 'POST',
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
    if( data ) {
      state.value = true;
      msg = 'Saved Product Successfully!'
    }
    setTimeout(() => {
      state.value = false;
    },2000);
  }

</script>

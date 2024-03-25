
<template>
  <div class="p-6 pb-[15rem]" >

    <p v-show="state" class="my-4 p-2 bg-gray-50 text-green-600 absolute bottom-0 right-10 font-bold" >{{ msg }}</p>

    <table class="table table-auto" >
      <thead>
        <tr>
          <th>ID</th>
          <th class="text-left" >Category</th>
          <th class="text-left" >Title</th>
          <th class="text-left" >Description</th>
          <th class="text-left" >Price</th>
          <th class="" >Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product, index in store.products" :key="index" class="my-4" >
          <td class="p-2 text-right" >{{ product.id }}</td>
          <td class="p-2 text-left" >{{ product.category }}</td>
          <td class="p-2 text-left" >{{ product.title }}</td>
          <td class="line-clamp-1 text-left" >{{ product.description }}</td>
          <td class="p-2 text-right" >${{ product.price }}</td>
          <td class="flex items-center justify-center" >
            <RouterLink :to="{ name: 'editProduct', params: { id: product.id } }"
              class="p-2 rounded-md bg-blue-500 hover:bg-blue-600" >Edit</RouterLink>
            <button @click="deleteProduct(product.id)" class="p-2 rounded-md bg-red-500 hover:bg-red-600" >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { datas } from '@/stores/datas';
  const store = datas();

  const state = ref(false);
  let msg = '';

  const deleteProduct = async (id) => {
    const result = await fetch(`${store.uri}products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    const data = await result.json();
    console.log(data.id, id);
    if( data.id == id ) {
      state.value = true;
      msg = 'Deleted Successfully!'
    }
    setTimeout(() => {
      state.value = false;
    },2000);
  }

</script>


import { defineStore } from "pinia";

export const datas = defineStore({

  id: 'datas',

  state: () => ({

    uri: 'https://fakestoreapi.com/',

    cart: 0,
    cartItems: [],
    products: '',
    product: '',

  }),

  actions: {

    async allProducts() {

      const result = await fetch(`${this.uri}products`);
      const data = await result.json();
      this.products = data;

    },

    async getProduct(id) {

      this.product = '';
      const result = await fetch(`${this.uri}products/${id}`);
      const data = await result.json();
      this.product = data;

    }

  },

  persist: true

});

<template>
  <nav v-if="$store.state.user" class="flex justify-center gap-x-3 mt-5 text-white">
    <router-link to="/" class="">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </nav>
  <router-view/>
  
</template>

<script>

import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

  export default {
    setup(){
      const store = useStore()

      onBeforeMount(() => {
        store.dispatch("fetchUser")
      })
    }
  }

</script>


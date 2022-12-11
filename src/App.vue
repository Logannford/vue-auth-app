<template>
  <div class="" :class="{'flex': $store.state.user != null}">
    <navigation-desktop-vue />
    <router-view/>

  </div>
</template>

<script>

import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import NavigationDesktopVue from './components/NavigationDesktop.vue';

  export default {
    setup(){      
      const store = useStore()

      onBeforeMount(() => {
        store.dispatch("fetchUser")
      })
    },

    //registering components
    components: {
      NavigationDesktopVue
    }
  }
</script>



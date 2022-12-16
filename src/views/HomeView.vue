<template>
  <div class="flex justify-center mt-10 ml-10 text-white text-3xl font-thin">
    <div class="flex flex-col gap-y-5">
      <h1 class="">
        <!-- This is getting the displayName from the currently signed in user -->
        Welcome {{ this.$store.state.user.displayName }},
      </h1>
    <!-- Just for now so I can see all of the content being displayed -->
      <div class="flex flex-col">
        <div v-for="msg in content" :key="msg.content" class="text-white">
          {{ msg.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { ref, onMounted } from 'vue';
import store from '@/store';
import { useStore, mapState } from 'vuex';

export default{
  computed:{
    ...mapState(['content'])
  },
  created(){
    this.$store.dispatch("fetchContent")
  },  
  setup(){

    return{
    }
  },
}
</script>

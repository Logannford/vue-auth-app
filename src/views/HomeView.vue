<template>
  <div class="flex justify-center">
    <h1 class="text-white">
      <button @click="userInfo" class="bg-white text-black rounded-full">
        test
      </button>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default{
  setup(){
    const userInfo = () => {
      store.dispatch(userInfo)
    }

    return{
      userInfo
    }
  },
}
</script>

<template>
  <div class="flex justify-center">
    <h1 class="text-white text-3xl font-thin ml-10">
      Welcome {{ this.$store.state.user.displayName }}
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default{
  setup(){
    

    return{
      
    }
  },
}
</script>

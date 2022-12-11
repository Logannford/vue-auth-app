<template>
  <div class="flex justify-center">
    <h1 class="text-white text-3xl font-thin ml-10">
      <!-- This is getting the displayName from the currently signed in user -->
      Welcome {{ this.$store.state.user.displayName }},
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

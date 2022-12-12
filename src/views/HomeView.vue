<template>
  <div class="flex justify-center mt-10">
    <h1 class="text-white text-3xl font-thin ml-10">
      <!-- This is getting the displayName from the currently signed in user -->
      Welcome {{ this.$store.state.user.displayName }},
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { ref, onMounted } from 'vue';
import { collection, onSnapshot, doc } from 'firebase/firestore';
import { db, fireStore } from '@/firebase/index';

export default{
  setup(){

    onMounted(() => {
      onSnapshot(collection(db, '/userInfo'), (querySnapshot) => {
        const test = [];
        querySnapshot.forEach((doc) => {
            const test1 = {
              id: doc.id,
              content: doc.data().name,
              done: doc.data().done
            }
            test.push(test1)
        })
        console.log(test);
      });
      console.log(onMounted)
    })
    
    return{
    }
  },
}
</script>

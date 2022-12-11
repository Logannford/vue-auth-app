<template>
	<form @submit.prevent="editName">
		<div class="bg-black relative flex gap-x-4">
		<input 
			type="text"
			placeholder="Name"
			v-model="editDisplayName.name"
			class="autofill:bg-transparent peer h-10 w-1/4 text-lg bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
		>
			<label for="editPassword" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
			<!-- <input value="" type="submit" class="rounded-full border border-white w-7 h-7 self-center hover:cursor-pointer hover:bg-white duration-500" > -->
		</div>
	</form>
</template>

<script>
import store from '@/store';
import { ref } from 'vue';

//try to create a new function using this 
//make the default name come from an random name api 
//then use 'update profile' to update it to a chosen name
//instead of making them choose before entering.
//have this saved as the displayName 

export default {
	setup () {
		const editDisplayName = ref({});

		const editName = () => {
			store.dispatch("editName", editDisplayName.value);
		}
		

		return {
			editName,
			editDisplayName
		}
	}
}
</script>

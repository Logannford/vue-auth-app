<template>
	<div class="mx-10 rounded">
		<!-- 
			The plan is to have the 'settings' layed out on the left side
			with separators separating each option.
			Then once clicked - its component can slide out from behind it 

			https://random-data-api.com/
		-->

		<!-- Left side of screen -->
		<div class="flex">
			<div class="flex flex-col gap-y-10 text-white w-full p-5">
				<!-- TODO: change the border to being its own <div> to stop the duration effect when changing views -->
				<button @click="counter=1" :class="{'border-l border-white': counter==1}" class="text-xl font-thin text-start pl-4 py-2 hover:text-[22px]">
					Edit Profile
				</button>
				<button @click="counter=2" :class="{'border-l border-white': counter==2}" class="text-xl font-thin text-start pl-4 py-2 hover:text-[22px]">
					Account settings
				</button>
				<button @click="counter=3" :class="{'border-l border-white': counter==3}" class="text-xl font-thin text-start pl-4 py-2 hover:text-[22px]">
					Change Password
				</button>
				<button @click="counter=4" :class="{'border-l border-white': counter==4}" class="text-xl font-thin text-start px-4 py-2">
					Privacy and security
				</button>
				<button @click="counter=5" :class="{'border-l border-white': counter==5}" class="text-xl font-thin text-start px-4 py-2">
					Help / FAQs
				</button>
				<!-- logout button so not using counter -->
				<button @click="$store.dispatch('logout')" class="text-xl font-thin text-start px-4 py-2">
					Log out 
				</button>
				<button @click="counter=6" :class="{'border-l border-white': counter==6}"  class="text-xl font-thin text-start px-4 py-2">
					Delete Account
				</button>
			</div>
			<!-- Right side which will display the component which is clicked on -->
			<div class="w-full p-4">
				<EditProfile v-show="counter == 1" />
				<AccountSettings v-if="counter == 2" />	
				<ChangePassword v-if="counter == 3" />				
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import EditProfile from '../components/settings/EditProfile.vue';
import AccountSettings from '../components/settings/AccountSettings.vue'
import ChangePassword from '../components/settings/ChangePassword.vue'

	export default {
		setup(){
			let counter = ref(1);

			return{
				counter
			}
		},

		components:{
			EditProfile,
			AccountSettings,
			ChangePassword
		}
	}

</script>
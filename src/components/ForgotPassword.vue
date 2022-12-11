<template>
	<div class="z-0 w-full">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,90.7C560,107,640,117,720,101.3C800,85,880,43,960,53.3C1040,64,1120,128,1200,160C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
	</div>
	<div class="md:flex text-white -mt-64">
		<div class="p-5 md:my-20 md:py-10 md:p-32 mx-auto md:mx-0 lg:w-3/4 container mt-80">
			<div @click="this.$router.push('login')" 
					class="w-5 h-5 mb-4 animate-bounce duration-500 group
					hover:cursor-pointer text-white hover:text-gray-700"
			>
				<svg class="svg-icon" viewBox="0 0 20 20">
					<path fill="currentColor" d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
					L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
					c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
					c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
					S18.707,9.212,18.271,9.212z"></path>
				</svg>
			</div>
			<form class="" @submit.prevent="resetPass">
				<h2 class="mb-2 text-2xl md:text-5xl font-thin w-full md:w-3/4">
					Can't THINK what your password is?
				</h2>
				<h5 class="mt-5 mb-16 font-thin text-sm md:text-base">
					Reset it below:
				</h5>
				
				<div class="bg-black relative">
					<input 
						type="email"
						id="email"
						v-model="resetPassword.email"
						placeholder="Send Email"
						class="peer h-10 w-3/4 text-xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
					/>
					<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:bg-black">Send Email</label>
				</div>
				<!-- Password reset request messages -->

				<div class="">
					
				</div>
				<div class="bg-black w-full mt-5 md:mt-6">
					<input
							type="submit"
							value="Request"
							class="bg-gray-800 rounded-lg px-10 py-2 hover:cursor-pointer w-3/4 hover:text-gray-500 duration-500"
					>
					</div>
			</form>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import { ref } from 'vue';

export default {
	setup () {

		const resetPassword = ref({});

		const resetPass = () => {
			store.dispatch("resetPass", resetPassword.value);
		}

		return {
			resetPassword,
			resetPass
		}
	}
}
</script>




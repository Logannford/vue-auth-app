<template>
	<div class="z-0 w-full">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,90.7C560,107,640,117,720,101.3C800,85,880,43,960,53.3C1040,64,1120,128,1200,160C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
	</div>
	<!-- This shows when the api is fetching data from firebase - this is done in the .then below -->
	<div v-if="loginLoading" class="flex text-black bg-red-500 p-5 text-xl">
		<SplashScreen />
	</div>
	<section class="w-full" v-if="!loginLoading">
		<div class="md:flex h-1/2 text-white">
			<div class="pb-12 md:py-10 md:p-32 w-3/4 mx-auto md:mx-0 lg:w-[65%] container mt-20 md:-mt-28 lg:-mt-40">
			<form class="" @submit.prevent="login">
				<h2 class="mb-2 text-2xl md:text-5xl font-thin">
					Welcome back to THINK
				</h2>
				<h5 class="mb-16 font-thin text-sm md:text-base">
					Login to your account:
				</h5>
				<div class="bg-black relative">
					<input 
						type="email"
						id="email"
						placeholder="Email"
						v-model="loginForm.email"
						class="autofill:bg-transparent peer h-10 w-full text-2xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
					/>
					<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>

				</div>
				<div class="relative mt-12 mb-8">
					<input 
						id="password"
						type="password"
						placeholder="Password"
						v-model="loginForm.password"
						class="peer h-10 w-full text-2xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
					>
					<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>

				</div>

				<div class="bg-black w-full mt-5 md:mt-6">
				<input
						type="submit"
						value="Login"
						class="bg-gray-800 rounded-lg px-10 py-2 hover:cursor-pointer w-full hover:text-gray-500 duration-500"
				>
				</div>
			</form>
				<!-- remember / forgot password -->
				<div class="md:flex justify-between mt-6">
					<div class="font-thin text-xs md:text-base mb-3 md:my-0">
						Remember for 30 days
					</div>
					
					<button @click="this.$router.push('reset-password')" 
							class="font-thin hover:cursor-pointer hover:text-gray-500 
									duration-500 text-xs md:text-base"
					>
						Forgot Password
					</button>
				</div>
				<div class="mt-5 flex justify-center">
					<input
						type="button"
						value="Don't have an account?"
						class="bg-white text-black border border-black rounded-xl py-2 px-10 hover:cursor-pointer hover:bg-gray-800 hover:text-white duration-500"
						@click="this.$router.push('register')"
					>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import store from '@/store';
import { ref } from 'vue';
import SplashScreen from '../components/splash-screen/SplashScreen.vue'

export default {
	setup() {
		const loginLoading = ref(false);
		const loginForm = ref({});
		let registerForm = ref(false);

		const login = () => {
			loginLoading.value = true;
			store.dispatch("login", loginForm.value)
			.then(
				window.setTimeout(() => (loginLoading.value = false), 2000)
			);
		}

		return{
			loginLoading,
			loginForm,
			login,
			registerForm
		}
	},

	//registering the components
	components: {
		SplashScreen
	}
}
</script>

<style scoped>

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
	-webkit-box-shadow: 0 0 0px 1000px black inset !important;
	-webkit-text-fill-color: white;
	border: 0px
}

</style>

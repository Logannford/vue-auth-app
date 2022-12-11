<template>
	<div class="z-0">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,90.7C560,107,640,117,720,101.3C800,85,880,43,960,53.3C1040,64,1120,128,1200,160C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
	</div>
	<!-- This shows when the api is fetching data from firebase - this is done in the .then below -->
	<div v-if="registerLoading" class="bg-blue-500 p-5 text-xl">
		Loading
	</div>
	<section class="w-full" v-show="!registerLoading">
		<div class="md:flex h-1/2 text-white">
			<div class="pb-12 md:py-10 md:p-32 w-3/4 mx-auto md:mx-0 lg:w-[65%] container -mt-20 md:-mt-28 lg:-mt-44">
				<form class="bg-black py-10" @submit.prevent="register">
					<h2 class="mb-2 text-2xl md:text-5xl font-thin inline-block">
						Welcome to THINK
					</h2>
					<h5 class="mb-8 font-thin text-sm md:text-base mt-2">
						Register below:
					</h5>
					<div class="bg-black relative">
						<input 
							type="email"
							placeholder="Enter Email"
							v-model="registerForm.email"
							class="autofill:bg-transparent peer h-10 w-full text-2xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
						>
						<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
					</div>
					<div class="relative mt-12 mb-8">
						<input 
							type="password"
							placeholder="Enter password"
							v-model="registerForm.password"
							class="peer h-10 w-full text-2xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
						>
						<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>

					</div>

					<div class="relative mt-12 mb-8">
						<input 
							type="text"
							placeholder="name"
							v-model="registerForm.text"
							class="peer h-10 w-full text-2xl bg-black border-b border-gray-600 text-white placeholder-transparent focus:outline-none"
						>
						<label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-2xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-0 peer-focus:-top-7 peer-focus:text-gray-600 peer-focus:text-sm">name</label>
						<!-- just testing the v-model -->
						<div class="text-white">
							{{ registerForm.text }}
						</div>
					</div>
					<div class="">
						<input
								type="submit"
								value="Register"
								class="bg-white text-black border border-black rounded-xl p-2 w-full hover:cursor-pointer hover:text-white hover:bg-gray-800 duration-500"
						>
					</div>
					<!-- Redirect back to login page -->
					<div id="wrapper">
						<div class="line mt-[27px]"></div>
						<div class="textbox mt-[30px]">
							<div class="text">OR</div>
						</div>
					</div>
					
					<div class="w-full mt-20">
						<input
							type="button"
							value="Already have an account?"
							class="bg-black border border-gray-800 rounded-xl p-2 hover:cursor-pointer w-full hover:text-gray-500 duration-500"
							@click="this.$router.push('login')"
						>
					</div>
				</form>
			</div>
		</div>
	</section>

</template>

<script>
import store from '@/store';
import { ref } from 'vue';

export default {

	data(){
		return{
			name: null
		}
	},

	setup() {
		const registerForm = ref({});
		const registerLoading = ref(false);
		let loginForm = ref(false);

		const register = () => {
			registerLoading.value = true;
			store.dispatch("register", registerForm.value)
			.then(
				window.setTimeout(() => (registerLoading.value = false), 2000)
			);
		}

		return{
			registerLoading,
			registerForm,
			register,
			loginForm,
		}
	},

	components:{

	}
}
</script>

<style scoped>
/* headlines with lines */
.floatClear {
		clear: both;
	}
#wrapper {
	text-align: center;
	position: relative;
}
#wrapper .line {
	border-bottom: 1px solid white;
	position: absolute;
	width: 100%;
	top: 15px;
}
#wrapper .textbox {
	position: absolute;
	width: 100%;
}
#wrapper .textbox .text {
	background-color: black;
	margin: 0px auto;
	padding: 0px 10px;
	text-align: center;
	display: inline;
	font-weight: 100;
	}

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
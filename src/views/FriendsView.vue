<template>
	<div class="text-white">
		Friends
	</div>
</template>

<script>
/* eslint-disable */
import { ref, onMounted } from 'vue';
import store from '@/store';
import { useStore } from 'vuex';
export default {
	setup () {
		onMounted(() => {
			store.dispatch("test");
		})

		return {}
	}
}
</script>

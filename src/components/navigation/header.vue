<template>
	<header>
		<div class="container header_container">
			<div class="logo">
				<RouterLink :to="{ name: 'home' }"> GameSource </RouterLink>
			</div>
			<div>
				<ul>
					<li v-if="!userStore.auth">
						<RouterLink :to="{ name: 'signin' }"> Sign In </RouterLink>
					</li>
					<span v-if="userStore.auth">
						<li @click="userStore.signout">
							<span> Logout </span>
						</li>
						<li>
							<RouterLink :to="{ name: 'dashboard' }"> Dashboard </RouterLink>
						</li>
					</span>
				</ul>
			</div>
		</div>
	</header>
</template>
<script setup>
///USER STORE
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

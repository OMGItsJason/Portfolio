<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/svg/tube-spinner.svg';

	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 4000);
	});
</script>

{#if isLoading}
	<div class="w-svw h-svh flex align-middle items-center justify-center overflow-hidden relative">
		<div class="absolute">
			<img src={Loader} alt="" class="w-80 h-auto" />
		</div>
		<div class="text-center animate-pulse font-extrabold">
			<p class="text-sm bg-gradient-to-l from-yellow-300 to-sky-500 bg-clip-text text-transparent">
				W E L C O M E
			</p>
			<p class="text-sm bg-gradient-to-l from-sky-500 to-yellow-300 bg-clip-text text-transparent">
				T O
			</p>
			<p
				class="text-base bg-gradient-to-l from-sky-500 to-yellow-300 bg-clip-text text-transparent"
			>
				J A S O N
			</p>
			<p
				class="text-base bg-gradient-to-l from-sky-500 to-yellow-300 bg-clip-text text-transparent"
			>
				M A L I Q U I D
			</p>
			<p class="text-sm text-white">P O R T F O L I O</p>
		</div>
	</div>
{:else}
	<slot />
{/if}

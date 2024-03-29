<script>
	// @ts-nocheck
	import Html from '$lib/svg/html.svg';
	import Css from '$lib/svg/css.svg';
	import JavaScript from '$lib/svg/js.svg';
	import Java from '$lib/svg/java.svg';
	import Python from '$lib/svg/python.svg';
	import Csharp from '$lib/svg/csharp.svg';
	import Tailwindcss from '$lib/svg/tailwind.svg';
	import Svelte from '$lib/svg/svelte.svg';

	function downloadCV() {
		const pdf = 'My Resume.pdf';
		const anchor = document.createElement('a');
		anchor.href = pdf;
		anchor.download = 'Jason Maliquid Resume.pdf';
		anchor.click();
	}

	let techExperience = [
		{ lang: [Java], exp: '2 Year' },
		{ lang: [Python], exp: '1 Years' },
		{ lang: [Csharp], exp: '2 Years' },
		{ lang: [Html], exp: '1 Years' },
		{ lang: [Css], exp: '1 Years' },
		{ lang: [JavaScript], exp: '1 Years' },
		{ lang: [Svelte], exp: '1 Year' },
		{ lang: [Tailwindcss], exp: '1 Year' }
	];

	function handleHover(tech, isHovered) {
		techExperience[tech].hovered = isHovered;
	}
</script>

<div class="space-y-10 text-white">
	<h1 class="text-5xl font-bold text-center">
		<span class="font-bold text-sky-800">My</span>
		<span class="font-bold text-yellow-500">Skills</span>
	</h1>
	<div>
		<ul class="flex items-center justify-center">
			{#each Object.keys(techExperience) as tech}
				<li class="relative">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<div
						class="w-9 h-auto sm:w-auto"
						on:mouseover={() => handleHover(tech, true)}
						on:mouseout={() => handleHover(tech, false)}
					>
						<img
							src={techExperience[tech].lang}
							alt={tech}
							class={` transform transition-transform ${
								techExperience[tech].hovered ? 'animate-bounce' : ''
							}`}
						/>
						<div
							class={`inset-0 text-white opacity-0 transition-opacity duration-300 ${
								techExperience[tech].hovered ? 'opacity-100' : ''
							}`}
						>
							<div>
								<h3 class="text-sm text-center">
									{techExperience[tech].exp}
								</h3>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<p
		class="text-center text-sm bg-gradient-to-l from-sky-500 to-yellow-300 bg-clip-text text-transparent"
	>
		Hover On Each Image To Show Experience
	</p>
</div>

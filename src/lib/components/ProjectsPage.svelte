<script>
	import Animez from '$lib/img/Animez.png';
	import NetflixClone from '$lib/img/NetflixClone.png';
	import VotingSys from '$lib/img/VotingSystemProject.png';
</script>

<div class="text-center text-white space-y-10">
	<h1 class="text-5xl font-bold">
		<span class="font-bold text-yellow-500">My</span>
		<span class="font-bold text-sky-800">Projects</span>
	</h1>
	<div class="px-10 sm:px-0">
		<ul class="block space-y-5 sm:flex sm:space-y-0 sm:gap-5">
			<li>
				<img
					src={VotingSys}
					alt="Voting System"
					class="w-[1600px] h-full object-fill rounded-2xl border-2 border-yellow-500"
				/>
				<span>Voting System (C#)</span>
			</li>
			<li>
				<img
					src={NetflixClone}
					alt="Netflix Clone"
					class="w-full h-full object-fill rounded-2xl border-2 border-sky-800"
				/>
				<span>Netflix Clone (HTML & CSS)</span>
			</li>
			<li>
				<img
					src={Animez}
					alt="Animez"
					class="w-full h-full object-fill rounded-2xl border-2 border-yellow-500"
				/>
				<span>Animez (HTML, CSS , & JS)</span>
			</li>
		</ul>
	</div>
	<p class="pt-0 sm:pt-10">
		More Projects: <a
			href="https://github.com/OMGItsJason?tab=repositories"
			class="text-lg bg-gradient-to-l from-yellow-300 to-sky-500 bg-clip-text text-transparent"
			target="_blank">Github Repositories</a
		>
	</p>
</div>

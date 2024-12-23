<script>
	import ProfilePicture from '$lib/img/Profile-Picture.png';
	import FacebookIcn from '$lib/svg/facebook.svg';
	import InstagramIcn from '$lib/svg/instagram.svg';
	import GithubIcn from '$lib/svg/github.svg';
	import GmailIcn from '$lib/svg/gmail.svg';
	import MapMarker from '$lib/svg/map-marker.svg';

	function downloadCV() {
		const pdf = 'My Resume.pdf';
		const anchor = document.createElement('a');
		anchor.href = pdf;
		anchor.download = 'Jason Maliquid Resume.pdf';
		anchor.click();
	}
</script>

<aside
	class="flex flex-col items-center sm:items-start text-center pt-14 sm:text-start sm:pt-0 sm:block sm:mt-14 sm:h-auto sm:w-64 sm:fixed sm:z-10"
>
	<img src={ProfilePicture} alt="ProfilePicture" class="rounded-2xl w-60 sm:w-64" />
	<div class="text-white space-y-2 sm:space-y-0 sm:mt-5">
		<p class="mt-2 sm:mt-0 sm:text-lg">👋 Hello I'm</p>
		<h1 class="text-5xl sm:text-4xl">
			<span class="font-bold text-sky-800">Jason</span>
			<span class="font-bold text-yellow-500">Maliquid</span>
		</h1>
		<p class="sm:text-lg">💻 Front-End Web Developer</p>
		<p class="flex items-center justify-center sm:justify-start sm:text-lg">
			<img src={MapMarker} alt="Pin" class="w-5 mr-1" />Tabaco City, Philippines
		</p>
	</div>
	<div class="flex justify-center sm:block sm:justify-start mt-5">
		<ul class="flex w-48 space-x-5">
			<li>
				<a href="https://www.facebook.com/maliquid.jason" target="_blank">
					<img src={FacebookIcn} alt="Facebook" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/itz.me_jason" target="_blank">
					<img src={InstagramIcn} alt="Instagram" />
				</a>
			</li>
			<li>
				<a href="https://github.com/OMGItsJason" target="_blank">
					<img src={GithubIcn} alt="Github" />
				</a>
			</li>
			<li>
				<a href="https://mailto:jasonm2822@gmail.com" target="_blank">
					<img src={GmailIcn} alt="Gmail" />
				</a>
			</li>
		</ul>
	</div>
	<button
		class="relative px-3 py-2 mt-5 text-white text-xs font-semibold rounded-xl overflow-hidden bg-yellow-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-800 before:to-sky-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0"
		onclick={downloadCV}
	>
		Download CV
	</button>
</aside>

<script>
	// @ts-nocheck
	let menuOpen = false;

	function menubar() {
		menuOpen = !menuOpen;
		toggleScrollLock();
	}

	function toggleScrollLock() {
		const body = document.body;
		if (menuOpen) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = '';
		}
	}

	function closeMenu() {
		menuOpen = false;
		toggleScrollLock();
	}

	function downloadCV() {
		const pdf = 'My Resume.pdf';
		const anchor = document.createElement('a');
		anchor.href = pdf;
		anchor.download = 'Jason Maliquid Resume.pdf';
		anchor.click();
	}

	// @ts-nocheck
	let techExperience = {
		java: { hovered: false, years: 2 },
		python: { hovered: false, years: 2 },
		cSharp: { hovered: false, years: 2 },
		html: { hovered: false, years: 1 },
		css: { hovered: false, years: 1 },
		javascript: { hovered: false, years: 1 },
		svelte: { hovered: false, years: 1 },
		tailwindcss: { hovered: false, years: 1 }
	};

	// @ts-ignore
	function handleHover(tech, isHovered) {
		// @ts-ignore
		techExperience[tech].hovered = isHovered;
	}
</script>

<!-- Navigation -->
<header
	class="w-svw px-2 py-2 sm:px-5 sticky z-10 top-0 bg-blue-950 animate-fade-down animate-delay-275 animate-duration-700"
>
	<!-- Mobile Nav -->
	<nav class=" sm:hidden block items-center">
		<div class="w-[50px] h-[50px] block absolute right-2">
			<img src="/img/JM Icon.png" alt="Logo" />
		</div>
		<div>
			<button type="button" on:click={menubar}>
				<img src="/svg/humbergButton.svg" alt="Menu" class="w-[45px] h-[45px]" />
			</button>
			{#if menuOpen}
				<div class="{menuOpen ? 'menu-open' : ''} h-svh">
					<div class="text-white text-2xl font-bold mt-10">
						<ul class="flex flex-col text-center space-y-3">
							<a href="/" on:click={closeMenu}>
								<li class="hover:text-yellow-500">Home</li>
							</a>
							<a href="#About" on:click={closeMenu}>
								<li class="hover:text-yellow-500">About</li>
							</a>
							<a href="#Skills" on:click={closeMenu}>
								<li class="hover:text-yellow-500">Skills</li>
							</a>
							<a href="#Projects" on:click={closeMenu}>
								<li class="hover:text-yellow-500">Projects</li>
							</a>

							<a href="#Certificates" on:click={closeMenu}>
								<li class="hover:text-yellow-500">Certificates</li>
							</a>
						</ul>
					</div>
					<div class="flex flex-row align-middle justify-center items-center space-x-5 mt-10">
						<a href="https://mailto:jasonm2822@gmail.com" target="_blank">
							<img src="/svg/gmail.svg" alt="Gmail" class="w-10 h-10" />
						</a>
						<a href="https://github.com/OMGItsJason" target="_blank">
							<img src="/svg/github.svg" alt="GitHub" class="w-10 h-10" />
						</a>
						<a href="https://www.facebook.com/maliquid.jason" target="_blank">
							<img src="/svg/facebook.svg" alt="Facebook" class="w-10 h-10" />
						</a>
						<a href="https://www.m.me/maliquid.jason" target="_blank">
							<img src="/svg/messenger.svg" alt="Messenger" class="w-10 h-10" />
						</a>
						<a href="https://www.instagram.com/itz.me_jason" target="_blank">
							<img src="/svg/instagram.svg" alt="Instagram" class="w-10 h-10" />
						</a>
					</div>
				</div>
			{/if}
		</div>
	</nav>
	<!-- Desktop Nav -->
	<nav class="hidden sm:flex items-center">
		<div class="w-[50px] h-[50px]">
			<img src="img/JM Icon.png" alt="Logo" />
		</div>
		<div class="flex list-none space-x-5 text-white text-2xl font-semibold">
			<a href="/">
				<li class="hover:text-yellow-500">Home</li>
			</a>
			<a href="#About">
				<li class="hover:text-yellow-500">About</li>
			</a>
			<a href="#Skills">
				<li class="hover:text-yellow-500">Skills</li>
			</a>
			<a href="#Projects">
				<li class="hover:text-yellow-500">Projects</li>
			</a>

			<a href="#Certificates">
				<li class="hover:text-yellow-500">Certificates</li>
			</a>
		</div>
		<div class="flex absolute right-8 space-x-3">
			<a href="https://mailto:jasonm2822@gmail.com" target="_blank">
				<img src="img/gmail.png" alt="Gmail" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://github.com/OMGItsJason" target="_blank">
				<img src="img/github.png" alt="GitHub" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.facebook.com/maliquid.jason" target="_blank">
				<img src="img/facebook.png" alt="Facebook" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.m.me/maliquid.jason" target="_blank">
				<img src="img/messenger.png" alt="Messenger" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.instagram.com/itz.me_jason" target="_blank">
				<img src="img/instagram.png" alt="Instagram" class="w-[30px] h-[30px]" />
			</a>
		</div>
	</nav>
</header>

<!-- Home -->
<div id="Home" class="w-svw h-1/2 p-5 sm:hidden scroll-mt-96">
	<!-- Mobile Home -->
	<div id="content" class="flex flex-col items-center">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src="/img/Profile-Picture.png"
			alt="Profile Picture"
			class="rounded-3xl max-w-full animate-jump-in animate-delay-375 animate-duration-2000"
		/>
		<div class="mt-5 text-white text-center space-y-2 sm:text-left">
			<p class="text-2xl animate-fade-right animate-delay-375 animate-duration-2000">Hello I'm</p>
			<h1 class="text-4xl animate-fade-left animate-delay-375 animate-duration-2000">
				<span class="font-bold text-sky-800">Jason</span>
				<span class="font-bold text-yellow-500">Maliquid</span>
			</h1>
			<p class="text-2xl animate-fade-up animate-delay-375 animate-duration-2000">
				Freelance Tambay
			</p>
			<p
				class="flex items-center align-middle justify-center text-2xl animate-fade-down animate-delay-375 animate-duration-2000"
			>
				<img
					src="/img/map-pin.png"
					alt="Pin"
					class="w-8 animate-fade-down animate-delay-375 animate-duration-2000"
				/>Area-51
			</p>
			<button
				class="animate-jump animate-once animate-delay-375 animate-duration-2000 relative p-2 text-white text-base font-bold rounded-xl overflow-hidden bg-yellow-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-800 before:to-sky-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0"
				on:click={downloadCV}
			>
				Download CV
			</button>
		</div>
	</div>
</div>
<!-- Desktop Home -->
<div
	id="Home"
	class="w-svh h-svh hidden sm:flex items-center align-middle justify-center space-x-10"
>
	<div class="text-white space-y-2 flex flex-col flex-wrap">
		<p class="text-4xl animate-fade-right animate-delay-375 animate-duration-2000">Hello I'm</p>
		<h1 class="text-8xl animate-fade-left animate-delay-375 animate-duration-2000">
			<span class="font-bold text-sky-800">Jason</span>
			<span class="font-bold text-yellow-500">Maliquid</span>
		</h1>
		<p class="text-3xl animate-fade-up animate-delay-375 animate-duration-2000">Freelance Tambay</p>
		<p class="flex text-2xl animate-fade-down animate-delay-375 animate-duration-2000">
			<img
				src="/img/map-pin.png"
				alt="Pin"
				class="w-8 animate-fade-down animate-delay-375 animate-duration-2000"
			/>Area-51
		</p>
		<div class="flex items-center align-middle justify-center">
			<button
				class="animate-jump animate-once animate-delay-375 animate-duration-2000 relative p-2 text-white text-base font-bold rounded-xl overflow-hidden bg-yellow-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-800 before:to-sky-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0"
				on:click={downloadCV}
			>
				Download CV
			</button>
		</div>
	</div>
	<div class="w-110">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src="/img/Profile-Picture.png"
			alt="Profile Picture"
			class="rounded-full animate-jump-in animate-delay-375 animate-duration-2000"
		/>
	</div>
</div>

<div class="h-1 w-screen bg-yellow-500"></div>

<!-- About -->
<div id="About" class="w-svw h-1/2 p-5 scroll-mt-[75px] sm:scroll-mt-[390px]">
	<div class="text-white text-center">
		<h1 class="text-5xl font-bold sm:text-7xl">
			<span class="font-bold text-yellow-500">About</span>
			<span class="font-bold text-sky-800">Me</span>
		</h1>
		<p class="text-xl font-normal text-left my-10 sm:text-3xl">
			I am a committed BSIT student with a solid background in Java, Python, and C#. as well as
			practical experience developing websites with HTML, CSS, and JavaScript. I am eager to
			contribute technical expertise and creativity to an innovative IT team, with my track records
			includes a successfully designing projects like a Netflix Clone Web and a Voting System
			Application. Seeking a challenging role to leverage academic knowledge and real-world
			experience for impactful contributions in the evolving technology landscape.
		</p>
	</div>
</div>

<div class="h-1 w-svw bg-sky-700"></div>

<!-- Skills -->
<div id="Skills" class="w-svw h-1/2 p-5 text-white scroll-mt-[200px] sm:scroll-mt-[350px]">
	<div>
		<h1 class="text-5xl font-bold text-center sm:text-7xl">
			<span class="font-bold text-yellow-500">My</span>
			<span class="font-bold text-sky-800">Skills</span>
		</h1>
		<div class="text-white my-10">
			<ul class="flex align-middle items-center justify-center space-x-1">
				{#each Object.keys(techExperience) as tech}
					<li class="relative">
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<div
							class="max-w-full max-h-full"
							on:mouseover={() => handleHover(tech, true)}
							on:mouseout={() => handleHover(tech, false)}
						>
							<img
								src={`img/${tech}.png`}
								alt={tech}
								class={`max-w-full max-h-full object-cover transform transition-transform ${
									techExperience[tech].hovered ? 'animate-bounce' : ''
								}`}
							/>
							<div
								class={`inset-0 text-white opacity-0 transition-opacity duration-300 ${
									techExperience[tech].hovered ? 'opacity-100' : ''
								}`}
							>
								<div>
									<h3 class="text-base text-center font-bold">
										{techExperience[tech].years} Yr Exp.
									</h3>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>

<div class="h-1 w-svw bg-yellow-500"></div>

<!-- Projects -->
<div id="Projects" class="w-svw h-1/2 p-5 text-white scroll-mt-[75px] sm:scroll-mt-[150px]">
	<div class="text-center">
		<h1 class="text-5xl font-bold sm:text-7xl">
			<span class="font-bold text-sky-800">My</span>
			<span class="font-bold text-yellow-500">Projects</span>
		</h1>
		<div class="flex items-center justify-center">
			<ul
				class="max-w-full my-10 space-y-5 font-semibold sm:flex sm:space-x-5 sm:p-10 sm:items-center sm:space-y-0"
			>
				<li>
					<img
						src="img/Voting System Project.png"
						alt="Voting System"
						class="sm:w-130 sm:h-auto"
					/>Voting System (C#)
				</li>
				<li>
					<img src="/img/Netflix Clone.png" alt="Netflix Clone" /> Netflix Clone (HTML & CSS)
				</li>
				<li>
					<img src="/img/Animez.png" alt="Animez" /> Animez (HTML, CSS , & JS)
				</li>
			</ul>
		</div>
		<div>
			<p>
				For More Projects You Can Also Vist My: <a
					href="https://github.com/OMGItsJason?tab=repositories"
					class="text-lg underline text-blue-500"
					target="_blank">Github Repositories</a
				>
			</p>
		</div>
	</div>
</div>

<div class="h-1 w-svw bg-sky-700"></div>

<!-- Certificates -->
<div id="Certificates" class="h-1/2 w-svw scroll-mt-[75px] sm:scroll-mt-[100px]">
	<div class="text-white text-center mt-10 p-5">
		<h1 class="text-5xl font-bold sm:text-7xl">
			<span class="font-bold text-sky-800">My</span>
			<span class="font-bold text-yellow-500">Certificates</span>
		</h1>
		<div class="flex items-center align-middle justify-center">
			<ul
				class="max-w-full my-10 space-y-5 font-semibold text-xl sm:flex sm:space-x-5 sm:p-10 sm:items-center sm:w-130 sm:space-y-0"
			>
				<li>
					<img src="img/Java Foundation Certificate.png" alt="Java Foundation Certificate" />Java
					Foundation Certificate
				</li>
				<li>
					<img
						src="img/System Administration Certificate.png"
						alt="System Administration Certificate"
					/>System Administration Certificate
				</li>
			</ul>
		</div>
	</div>
</div>

<div class="h-1 w-screen bg-yellow-500"></div>

<!-- Footer -->
<footer class="h-auto bg-zinc-800 flex sm:h-10">
	<div class="text-zinc-500 flex">
		<p class=" pl-2 pt-2 mr-3 sm:pl-5">Any Question? Contact Me:</p>
		<div class="flex space-x-3 pt-1 items-center">
			<a href="https://mailto:jasonm2822@gmail.com" target="_blank">
				<img src="img/gmail.png" alt="Gmail" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://github.com/OMGItsJason" target="_blank">
				<img src="img/github.png" alt="GitHub" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.facebook.com/maliquid.jason" target="_blank">
				<img src="img/facebook.png" alt="Facebook" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.m.me/maliquid.jason" target="_blank">
				<img src="img/messenger.png" alt="Messenger" class="w-[30px] h-[30px]" />
			</a>
			<a href="https://www.instagram.com/itz.me_jason" target="_blank">
				<img src="img/instagram.png" alt="Instagram" class="w-[30px] h-[30px]" />
			</a>
		</div>
	</div>
</footer>

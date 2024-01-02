<script>
	// @ts-nocheck
	let techExperience = {
		java: { hovered: false, years: 2, description: 'Acad' },
		python: { hovered: false, years: 2, description: 'Acad' },
		cSharp: { hovered: false, years: 2, description: 'Acad' },
		html: { hovered: false, years: 1, description: 'Self Dev' },
		css: { hovered: false, years: 1, description: 'Self Dev' },
		js: { hovered: false, years: 1, description: 'Self Dev' },
		svelte: { hovered: false, years: 1, description: 'Self Dev' },
		tailwindcss: { hovered: false, years: 1, description: 'Self Dev' }
	};

	// @ts-ignore
	function handleHover(tech, isHovered) {
		// @ts-ignore
		techExperience[tech].hovered = isHovered;
	}

	//Download CV
	function downloadCV() {
		const pdf = 'My Resume.pdf';
		const anchor = document.createElement('a');
		anchor.href = pdf;
		anchor.download = 'Jason-Maliquid-Resume.pdf';
		anchor.click();
	}
</script>

<main class="sm:overflow-hidden">
	<!-- Navigation -->
	<nav
		class="bg-sky-950 h-screen block px-4 py-2 sm:h-auto sm:bg-zinc-900 sm:fixed sm:w-screen sm:shadow-2xl sm:animate-fade-down sm:animate-delay-275 sm:animate-duration-700 sm:z-50"
	>
		<div class="block sm:flex sm:items-center">
			<!-- Nav Logo -->
			<div>
				<img src="img/JM Icon.png" alt="Logo" class=" w-14 h-14 sm:flex" />
			</div>
			<!-- Nav Content -->
			<div
				class="block mt-24 list-none text-center text-2xl text-white font-semibold space-x-4 sm:flex sm:ml-5 sm:mt-0 sm:font-normal"
			>
				<a href="#Home">
					<li class="hover:text-yellow-500 cursor-pointer">Home</li>
				</a>
				<a href="#About">
					<li class="hover:text-yellow-500">About</li>
				</a>
				<a href="#Projects">
					<li class="hover:text-yellow-500">Projects</li>
				</a>
				<a href="#Skills">
					<li class="hover:text-yellow-500">Skills</li>
				</a>
				<a href="#Certificates">
					<li class="hover:text-yellow-500">Certificates</li>
				</a>
			</div>
			<!-- Contacts -->
			<div
				class="flex space-x-10 pt-12 justify-center sm:flex sm:pt-0 sm:items-center sm:space-x-4 sm:ml-auto sm:pr-10"
			>
				<a href="https://github.com/OMGItsJason">
					<img src="img/github.png" alt="GitHub" class="w-10 h-10 sm:w-8 sm:h-8" />
				</a>
				<a href="https://www.facebook.com/maliquid.jason">
					<img src="img/facebook.png" alt="Facebook" class="w-10 h-10 sm:w-8 sm:h-8" />
				</a>
				<a href="https://www.m.me/maliquid.jason">
					<img src="img/messenger.png" alt="Messenger" class="w-10 h-10 sm:w-8 sm:h-8" />
				</a>
				<a href="https://www.instagram.com/itz.me_jason">
					<img src="img/instagram.png" alt="Instagram" class="w-10 h-10 sm:w-8 sm:h-8" />
				</a>
			</div>
		</div>
	</nav>
	<!-- Spacer -->
	<div class="h-1 bg-sky-700 w-screen sm:hidden"></div>
	<!-- Main Content -->
	<!-- Home Page -->
	<div
		id="Home"
		class="h-120 sm:h-screen sm:flex sm:items-center sm:align-middle sm:justify-center"
	>
		<div class="block sm:flex sm:items-center">
			<div class="flex justify-center mt-20 mb-10 sm:hidden">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="img/Profile-Picture.png"
					alt="Profile Picture"
					class="w-72 h-auto border-solid border-yellow-500 border-4"
				/>
			</div>
			<div class="block text-center text-white sm:flex sm:flex-col sm:text-left sm:space-y-1">
				<p
					class="text-4xl font-semibold text-white sm:text-6xl sm:animate-fade-down sm:animate-delay-375 sm:animate-duration-2000"
				>
					Hello!
				</p>
				<p
					class="text-4xl font-semibold text-white sm:text-6xl sm:animate-fade-right sm:animate-delay-375 sm:animate-duration-2000"
				>
					I'm <span
						class="text-5xl font-bold text-sky-800 sm:text-7xl sm:animate-fade-right sm:animate-delay-375 sm:animate-duration-2000"
						>Jason</span
					>
					<span
						class="text-5xl font-bold text-yellow-500 sm:text-7xl sm:animate-fade-right sm:animate-delay-375 sm:animate-duration-2000"
						>Maliquid</span
					>
				</p>
				<p
					class="text-2xl semi-bold sm:text-3xl sm:animate-fade-right sm:animate-delay-375 sm:animate-duration-2000"
				>
					Freelance Tambay
				</p>
				<p
					class="flex items-center justify-center text-lg font-semibold sm:text-xl sm:flex sm:justify-start sm:animate-fade-right sm:animate-delay-375 sm:animate-duration-2000"
				>
					<img src="img/map-pin.png" alt="Map Pin" class="block w-6 h-6 mr-1 sm:w-7 sm:h-7" />
					Area - 51
				</p>
				<div class="flex justify-center">
					<button
						class="sm:animate-fade-up sm:animate-delay-375 sm:animate-duration-2000 relative py-3 px-4 mt-8 sm:mt-10 text-sky-900 text-base font-bold rounded-xl overflow-hidden bg-yellow-500 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-yellow-500 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-800 before:to-sky-800 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0"
						on:click={downloadCV}
					>
						Download CV
					</button>
				</div>
			</div>
			<div class="hidden sm:block sm:ml-10">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="img/Profile-Picture.png"
					alt="Profile Picture"
					class="rounded-full border-solid border-yellow-500 border-4 sm:animate-fade-left sm:animate-delay-375 sm:animate-duration-2000"
				/>
			</div>
		</div>
	</div>
	<!-- Spacer -->
	<div class="h-1 bg-yellow-500 w-screen"></div>
	<!-- About Page -->
	<div
		id="About"
		class="px-4 text-white h-110 sm:h-screen sm:flex sm:align-middle sm:justify-center sm:px-52"
	>
		<div class="sm:flex sm:items-center">
			<img
				src="img/Profile-Picture-Two.jpg"
				alt="About Profile Pic"
				class="hidden sm:rounded-xl sm:border-solid sm:border-sky-800 sm:border-4 sm:w-96 h-auto sm:mr-24 sm:block animate-jump animate-delay-275 animate-duration-2000"
			/>
			<div class="mt-24 sm:mt-0">
				<h1 class=" text-center text-5xl font-bold sm:text-7xl">
					<span class="font-bold text-yellow-500">About</span>
					<span class="font-bold text-sky-800">Me</span>
				</h1>
				<p class="text-xl mt-10 sm:text-1xl sm:w-110">
					My name is Jason Maliquid, taking bachelor of science in information technology (BSIT)
					student at the moment. I'm committed to learning everything I can about the quickly
					changing IT sector. by fusing classroom learning with real-world application. I'm
					dedicated to lifelong learning and hope to have a significant influence on the IT sector
					while pursuing a fulfilling career.
				</p>
			</div>
		</div>
	</div>
	<!-- Spacer -->
	<div class="h-1 bg-sky-700 w-screen"></div>
	<!-- Projects Page -->
	<div id="Projects" class="h-screen sm:flex sm:items-center sm:justify-center">
		<div class="mt-10 block sm:mt-0 sm:flex sm:flex-col">
			<div class="text-center block">
				<h1 class="text-5xl font-bold sm:text-7xl">
					<span class="font-bold text-sky-800">My</span>
					<span class="font-bold text-yellow-500">Projects</span>
				</h1>
			</div>
			<div
				class="block space-y-5 mt-10 ml-12 text-center text-white font-semibold sm:flex sm:space-y-0 sm:mt-10"
			>
				<div class="flex flex-col w-80 h-auto sm:mr-5">
					<img src="img/Voting System Project.png" alt="Voting System" class="h-52 sm:h-64" />
					<p>Voting System Application Using C#</p>
				</div>
				<div class="block w-80 h-auto">
					<img src="img/Netflix Clone.png" alt="Netflix Clone" class="h-52 sm:h-64" />
					<p>Netflix Clone using HTML And CSS</p>
				</div>
				<div class="block w-80 h-auto sm:ml-5">
					<img src="img/Animez.png" alt="Animez" class="h-52 sm:h-64" />
					<p>Animez using HTML And CSS</p>
				</div>
			</div>
		</div>
	</div>
	<!-- Spacer -->
	<div class="h-1 bg-yellow-500 w-screen"></div>
	<!-- Skills -->
	<div id="Skills" class="h-96 sm:h-screen sm:flex sm:flex-col sm:items-center sm:justify-center">
		<div class="text-center pt-14 sm:pt-0">
			<h1 class="text-5xl font-bold sm:text-7xl">
				<span class="font-bold text-yellow-500">My</span>
				<span class="font-bold text-sky-800">Skills</span>
			</h1>
		</div>
		<div class="text-white">
			<ul class="flex space-x-2 mt-16 px-5 sm:px-0 sm:space-x-14">
				{#each Object.keys(techExperience) as tech}
					<li class="relative">
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<div
							class="w-10 h-10 sm:w-20 sm:h-20 relative"
							on:mouseover={() => handleHover(tech, true)}
							on:mouseout={() => handleHover(tech, false)}
						>
							<img
								src={`img/${tech}.png`}
								alt={tech}
								class={`w-10 h-10 sm:w-20 sm:h-20 object-cover transform transition-transform ${
									techExperience[tech].hovered ? 'animate-bounce' : ''
								}`}
							/>
							<div
								class={`absolute inset-0 text-white opacity-0 transition-opacity duration-300 ${
									techExperience[tech].hovered ? 'opacity-100' : ''
								}`}
							>
								<div class="mt-11 sm:mt-24">
									<h3 class="text-sm sm:text-xl font-bold">
										{techExperience[tech].years} Years Experience
									</h3>
									<p>{techExperience[tech].description}</p>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<!-- Spacer -->
	<div class="h-1 bg-sky-700 w-screen"></div>
	<!-- Certificates -->
	<div
		id="Certificates"
		class="h-screen text-white text-center sm:flex sm:flex-col sm:items-center sm:justify-center"
	>
		<div class="pt-14 sm:pt-0">
			<h1 class="text-5xl font-bold sm:text-7xl">
				<span class="font-bold text-sky-800">My</span>
				<span class="font-bold text-yellow-500">Certificate</span>
			</h1>
		</div>
		<div class="flex items-center justify-center">
			<ul
				class="w-80 mt-10 space-y-5 font-semibold sm:flex sm:w-120 sm:mt-24 sm:space-y-0 sm:space-x-5"
			>
				<li>
					<img
						src="img/Java Foundation Certificate.png"
						alt="Java Foundation Certificate"
					/>Java Foundation Certificate
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
	<!-- Spacer -->
	<div class="h-1 bg-yellow-500 w-screen"></div>
	<!-- Footer -->
	<footer class="h-32 bg-zinc-800 flex sm:h-10">
		<div class="text-zinc-500 flex">
			<p class="pl-2 pt-2 mr-1 sm:pl-5">Any Question? Contact Me:</p>
			<div class="flex space-x-3 pt-1">
				<a href="https://github.com/OMGItsJason">
					<img src="img/github.png" alt="GitHub" class="w-8 h-8" />
				</a>
				<a href="https://www.facebook.com/maliquid.jason">
					<img src="img/facebook.png" alt="Facebook" class="w-8 h-8" />
				</a>
				<a href="https://www.m.me/maliquid.jason">
					<img src="img/messenger.png" alt="Messenger" class="w-8 h-8" />
				</a>
				<a href="https://www.instagram.com/itz.me_jason">
					<img src="img/instagram.png" alt="Instagram" class="w-8 h-8" />
				</a>
			</div>
		</div>
	</footer>
</main>

<!-- <script>
	import HamburgerBtn from '$lib/svg/humbergButton.svg';
	import CloseBtn from '$lib/svg/close-button.svg';
	import Logo from '$lib/img/JM-Icon.png';
	import FacebookIcn from '$lib/svg/facebook.svg';
	import InstagramIcn from '$lib/svg/instagram.svg';
	import GithubIcn from '$lib/svg/github.svg';
	import GmailIcn from '$lib/svg/gmail.svg';
	import HomePage from '$lib/components/HomePage.svelte';
	import AboutPage from '$lib/components/AboutPage.svelte';

	let menuOpen = false;

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
</script>

<header class="w-svw h-auto bg-transparent backdrop-filter backdrop-blur-sm px-3 fixed z-20">
	<nav class="flex items-center justify-between">
		<div>
			<button class="w-[50px]">
				<img src={Logo} alt="Logo" />
			</button>
		</div>
		<div class="block sm:hidden">
			<button
				class="w-[50px]"
				on:click={() => {
					menuOpen = !menuOpen;
					toggleScrollLock();
				}}
			>
				<img src={menuOpen ? CloseBtn : HamburgerBtn} alt="MenuBtn" class="w-[40px]" />
			</button>
		</div>
		<div class="hidden sm:block">
			<ul
				class="flex text-center text-xl font-medium text-white space-x-10 sm:font-light sm:text-base"
			>
				<li>
					<a href="/" on:click={closeMenu}>Home</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>About</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Skills</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Projects</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Certificates</a>
				</li>
			</ul>
		</div>
		<div class="hidden sm:block">
			<ul class="flex w-48 space-x-5">
				<li>
					<a href="/" on:click={closeMenu}>
						<img src={FacebookIcn} alt="" />
					</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>
						<img src={InstagramIcn} alt="" />
					</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>
						<img src={GithubIcn} alt="" />
					</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>
						<img src={GmailIcn} alt="" />
					</a>
				</li>
			</ul>
		</div>
	</nav>
	{#if menuOpen}
		<div class="{menuOpen ? 'menu-open' : ''} h-svh w-svw mt-5">
			<ul class="text-center text-xl font-medium text-white space-y-8">
				<li>
					<a href="/" on:click={closeMenu}>Home</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>About</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Skills</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Projects</a>
				</li>
				<li>
					<a href="/" on:click={closeMenu}>Certificates</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
<div>
	<section id="Home">
		<HomePage />
		<section id="About">
			<AboutPage />
		</section>
	</section>
</div> -->

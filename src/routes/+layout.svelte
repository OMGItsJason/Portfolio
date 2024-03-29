<script>
	import '../global.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import HamburgerBtn from '$lib/svg/humbergButton.svg';
	import CloseBtn from '$lib/svg/close-button.svg';
	import Logo from '$lib/img/JM-Icon.png';
	import FacebookIcn from '$lib/svg/facebook.svg';
	import InstagramIcn from '$lib/svg/instagram.svg';
	import GithubIcn from '$lib/svg/github.svg';
	import GmailIcn from '$lib/svg/gmail.svg';
	import HomePage from '$lib/components/HomePage.svelte';
	import AboutPage from '$lib/components/AboutPage.svelte';
	import SkillsPage from '$lib/components/SkillsPage.svelte';
	import ProjectsPage from '$lib/components/ProjectsPage.svelte';
	import CertificatesPage from '$lib/components/CertificatesPage.svelte';
	import { goto } from '$app/navigation';

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
	inject({ mode: dev ? 'development' : 'production' });
</script>

<header
	class="w-svw h-auto bg-zinc-900 bg-opacity-80 sm:bg-transparent backdrop-filter backdrop-blur-sm px-3 fixed z-20 sm:px-20"
>
	<nav class="flex items-center justify-between">
		<div>
			<button
				class="w-[50px]"
				on:click={() => {
					goto('/');
				}}
			>
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
			<ul class="flex text-center text-sm font-medium text-white space-x-10">
				<li>
					<a href="/">ABOUT</a>
				</li>
				<li>
					<a href="#Skills">SKILLS</a>
				</li>
				<li>
					<a href="#Projects">PROJECTS</a>
				</li>
				<li>
					<a href="#Certificates">CERTIFICATES</a>
				</li>
			</ul>
		</div>
		<div class="hidden sm:block">
			<ul class="flex w-48 space-x-5">
				<li>
					<a href="https://www.facebook.com/maliquid.jason">
						<img src={FacebookIcn} alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/itz.me_jason">
						<img src={InstagramIcn} alt="Instagram" />
					</a>
				</li>
				<li>
					<a href="https://github.com/OMGItsJason">
						<img src={GithubIcn} alt="Github" />
					</a>
				</li>
				<li>
					<a href="https://mailto:jasonm2822@gmail.com">
						<img src={GmailIcn} alt="Gmail" />
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
					<a href="#About" on:click={closeMenu}>About</a>
				</li>
				<li>
					<a href="#Skills" on:click={closeMenu}>Skills</a>
				</li>
				<li>
					<a href="#Projects" on:click={closeMenu}>Projects</a>
				</li>
				<li>
					<a href="#Certificates" on:click={closeMenu}>Certificates</a>
				</li>
			</ul>
		</div>
	{/if}
</header>
<section id="Home" class=" sm:flex sm:px-52 sm:py-16">
	<HomePage />
	<section id="About" class="sm:ml-96 mt-14 scroll-mt-[100px]">
		<AboutPage />
		<section id="Skills" class="mt-20 scroll-mt-[100px]">
			<SkillsPage />
			<section id="Projects" class="mt-20 scroll-mt-[100px]">
				<ProjectsPage />
			</section>
			<section id="Certificates" class="mt-20 scroll-mt-[100px]">
				<CertificatesPage />
				<slot />
			</section>
		</section>
	</section>
</section>

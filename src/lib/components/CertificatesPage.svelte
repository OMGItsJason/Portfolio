<script>
	import JFC from '$lib/img/JavaFoundationCertificate.png';
	import SAC from '$lib/img/SystemAdministrationCertificate.png';
</script>

<div class="text-white text-center space-y-10">
	<h1 class="text-5xl font-bold text-center">
		<span class="font-bold text-sky-800">My</span>
		<span class="font-bold text-yellow-500">Certificates</span>
	</h1>
	<div class="px-10 sm:px-0">
		<ul class="sm:grid sm:grid-flow-col sm:w-[830px] sm:gap-3 space-y-5 sm:space-y-0">
			<li>
				<img src={JFC} alt="Java Foundation Certificate" class="w-full h-full object-fill" />Java
				Foundation Certificate
			</li>
			<li>
				<img
					src={SAC}
					alt="System Administration Certificate"
					class="w-full h-full object-fill"
				/>System Administration Certificate
			</li>
		</ul>
	</div>
</div>

<script lang="ts">
	import myPhoto from '$lib/images/my_photo.jpg';
</script>

<svelte:head>
	<title>@andresap</title>
</svelte:head>
<section class="flex flex-col space-y-4 justify-start">
	<h1 class="h2">About Me</h1>
	<div
		class="flex flex-row space-x-4 drop-shadow-lg bg-gradient-to-tl from-secondary-100/30 to-tertiary-100 dark:from-secondary-900/70 dark:to-tertiary-700/70 backdrop-blur-sm border border-gray-200/10 dark:border-gray-600/30 p-8 rounded-lg"
	>
		<img
			alt="This website's author"
			src={myPhoto}
			class="rounded-full lg:h-64 lg:w-64 object-cover drop-shadow-lg"
		/>
		<div class="flex justify-between flex-col space-y-2 p-2 rounded-lg drop-shadow-md">
			<div class="flex items-end">
				<div>
					<p>This is me,&nbsp;</p>
				</div>
				<div class="flex-1 text-left">
					<p class="text-2xl">Andrés!</p>
				</div>
			</div>
			<p class="leading-relaxed h-full drop-shadow-sm">
				...developer, aspiring pocaster from Colombia. Checkout my <a
					class="font-bold"
					href="/podcast">podcasts</a
				>
				and
				<a class="font-semibold" href="/blog">blog</a>!
			</p>
		</div>
	</div>
</section>

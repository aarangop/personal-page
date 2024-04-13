<script lang="ts">
	import myPhoto from '$lib/images/my_photo.jpg';
</script>

<section class="m-2 grow lg:px-32 py-12 flex flex-col space-y-4 w-full justify-start">
	<h1 class="text-4xl font-serif">About Me</h1>
	<div
		class="flex grow flex-row w-full space-x-4 drop-shadow-lg bg-armadillo-100 dark:bg-primary-900 p-4 rounded-lg items-center"
	>
		<img alt="This website's author" src={myPhoto} class="rounded-full lg:h-64 drop-shadow-lg" />
		<div class="w-full flex flex-col space-y-2 p-4 grow rounded-lg justify-between drop-shadow-md">
			<div class="flex items-end font-serif">
				<div>
					<p>This is me,&nbsp;</p>
				</div>
				<div class="flex-1 text-left">
					<p class="text-2xl">Andrés!</p>
				</div>
			</div>
			<p class="font-serif leading-relaxed h-full">
				...podcaster, developer and writer from Colombia. It feels kinda weird to talk about myself
				but yeah, whatever, this is my personal website. Here you'll find some of my essence, which
				I have distilled into my <a class="font-bold" href="/podcast">podcasts</a> and
				<a class="font-semibold" href="/blog">writings</a>.
			</p>
		</div>
	</div>
</section>

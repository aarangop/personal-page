<script lang="ts">
	const wipSinceDate = new Date('2024-08-14');

	const wipSince = (): number => {
		return new Date().getTime() - wipSinceDate.getTime();
	};

	const getWipSinceObj = () => {
		const wipTime = wipSince();
		const days = Math.floor(wipTime / (1000 * 60 * 60 * 24));
		const hours = (wipTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
		const minutes = (wipTime % (1000 * 60 * 60)) / (1000 * 60);
		const seconds = (wipTime % (1000 * 60)) / 1000;
		return {
			days,
			hours,
			minutes,
			seconds
		};
	};
	let wipSinceText: string;
	let wipSinceObj = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	$: {
		setInterval(() => {
			wipSinceObj = getWipSinceObj();
		}, 1000);
	}
</script>

<main>
	<p class="h3 mb-4">This page is work in progress...</p>
	<div>
		<p class="h5 mb-4">It has been so for</p>
	</div>
	<div class="flex flex-row justify-between">
		<div class="fleb flex-row flex-1">
			<p class="font-mono">{wipSinceObj.days.toFixed(0).padStart(2, '0')}</p>
			<p class="h5 font-mono">Days</p>
		</div>
		<div class="fleb flex-row flex-1">
			<p class="font-mono">{wipSinceObj.hours.toFixed(0).padStart(2, '0')}</p>
			<p class="h5 font-mono">Hours</p>
		</div>
		<div class="fleb flex-row flex-1">
			<p class="font-mono">{wipSinceObj.minutes.toFixed(0).padStart(2, '0')}</p>
			<p class="h5 font-mono">Minutes</p>
		</div>
		<div class="fleb flex-row flex-1">
			<p class="font-mono">{wipSinceObj.seconds.toFixed(0).padStart(2, '0')}</p>
			<p class="h5 font-mono">Seconds</p>
		</div>
	</div>
</main>

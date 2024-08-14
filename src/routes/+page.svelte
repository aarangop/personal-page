<script lang="ts">
	import ReaderLayout from '$lib/components/ReaderLayout.svelte';
	import myPhoto from '$lib/images/my_photo.jpg';
	import Icon from '@iconify/svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>@andresap</title>
</svelte:head>

<ReaderLayout>
	<h1 class="h2 mb-4">Hola!</h1>
	<div
		class="flex mb-2 flex-col space-x-4 drop-shadow-lg bg-gradient-to-tl from-secondary-100/30 to-tertiary-100/30 dark:from-secondary-900/30 dark:to-tertiary-700/30 backdrop-blur-sm border border-gray-200/10 dark:border-gray-600/30 p-8 rounded-lg"
	>
		<div class="flex flex-col md:flex-row space-y-4 space-x-4 mb-4 align-center items-center">
			<img
				alt="Street art portrait of Andrés"
				src={myPhoto}
				class="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover drop-shadow-lg"
			/>
			<p class="h-full flex-1 drop-shadow-sm h6 text-center">
				I'm Andrés and welcome to my personal site!
			</p>
		</div>
		<div class="flex flex-col space-y-4">
			<Accordion>
				<AccordionItem>
					<svelte:fragment slot="lead"
						><Icon icon="material-symbols:hourglass-outline" /></svelte:fragment
					>
					<svelte:fragment slot="summary">Professional Experience</svelte:fragment>
					<svelte:fragment slot="content">
						<p class="leading-relaxed h-full drop-shadow-sm">
							I have a Master's Degree in Aeronautical Engineering, and around 10 years of
							professional experience working in various fields, including
						</p>
						<Accordion>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="ant-design:code-outlined" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary"
									><p class="h5">Software Engineering</p></svelte:fragment
								>
								<svelte:fragment slot="content">
									<p class="list-item">
										<span class="font-bold">2 years</span>
										professional experience as <span>front-end developer</span> at
										<a class="font-mono underline" target="_blank" href="https://cavorit.de/"
											>Cavorit GmbH</a
										>
									</p>
									<p class="list-item">
										Development of <span class="font-bold">Virtual Reality</span> applications for Flight
										Simulation applications at the TH Wildau
									</p>
									<p class="list-item">
										<span class="font-bold">4 years</span>
										professional experience as
										<span class="font-bold">software and front-end developer</span>
										at aero-engine manufacturer
										<a
											class="font-mono underline"
											target="_blank"
											href="https://careers.rolls-royce.com/usa/our-locations/germany"
											>Rolls-Royce</a
										>
										Deutschland plc. at their site in Dahlewitz, Germany.
									</p>
									<p class="list-item">
										<span class="font-bold">2 years</span> of experience as
										<span class="font-bold">System Administrator </span> at the Technical University
										of Brunswick's (TUBS)
										<a
											class="font-mono underline"
											target="_blank"
											href="https://www.tu-braunschweig.de/en/iff"
											>Institute of Flight Guidance (IFF)</a
										>
									</p></svelte:fragment
								>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="mdi:airplane-takeoff" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary"><p class="h5">Aviation Research</p></svelte:fragment
								>
								<svelte:fragment slot="content">
									<p class="list-item">
										Researcher at the <a
											target="_blank"
											class="font-mono underline"
											href="https://magazin.tu-braunschweig.de/en/pi-post/5g-disaster-relief-agriculture-high-altitude-pseudo-satellites-in-action/"
										>
											OBeLiSk Project</a
										> to integrate High Altitude Platforms into the ATM system during my time at the
										IFF
									</p>
									<p class="list-item">
										Data analysis and fast-time simulation in Python during my research roles at the
										IFF
									</p>
									<p class="list-item">
										Published cientific author with publications on the use of <a
											target="_blank"
											class="font-mono underline"
											href="https://doi.org/10.1109/ICNSURV.2019.8735185">VR in the cockpit</a
										>
										and the
										<a
											target="_blank"
											class="font-mono underline"
											href="https://ieeexplore.ieee.org/document/8735185"
											>integration of HAPS into the ATM system</a
										>
									</p>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="mdi:image-vr-outline" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary"><p class="h5">Flight Simulation</p></svelte:fragment
								>
								<svelte:fragment slot="content">
									<p class="list-item">
										Operation, construction, and overhauling of flight simulation hardware at the
										IFF's and TH Wildau's flight simulators.
									</p>
									<p class="list-item">
										Development of complementary software for flight-deck cabin connection at the
										IFF's flight simulator.
									</p>
									<p class="list-item">
										Development of Augmented Reality applications for the visualization of flight
										data, and pilot assistance at the TH Wildau (see <a
											target="_blank"
											class="font-mono underline"
											href="https://doi.org/10.1109/ICNSURV.2019.8735185">publication</a
										>).
									</p></svelte:fragment
								>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="hugeicons:teaching" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary"><p class="h5">Teaching</p></svelte:fragment>
								<svelte:fragment slot="content">
									<p class="list-item">
										Three years teaching (live and online) the flight mechanic's course for master's
										students at the TU Braunschweig.
									</p>
									<p class="list-item">
										Two years experience teaching a practical flight simulation course for master's
										students at the TH Wildau.
									</p>
								</svelte:fragment>
							</AccordionItem>
						</Accordion>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><Icon icon="ant-design:team-outlined" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="h5">Skills</p></svelte:fragment>
					<svelte:fragment slot="content">
						<Accordion>
							<AccordionItem open>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="ant-design:code-outlined" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary">Programming Languages</svelte:fragment>
								<svelte:fragment slot="content">
									<span class="badge bg-primary-200 dark:bg-primary-800">Python</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">JavaScript</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">C++</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">Kotlin</span
									></svelte:fragment
								>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="mdi:gear-outline" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary">Frameworks</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="list-item">Python</p>
									<div>
										<span class="badge bg-primary-200 dark:bg-primary-800">FastAPI</span>
										<span class="badge bg-primary-200 dark:bg-primary-800">Pandas</span>
									</div>
									<p class="list-item">Web</p>
									<span class="badge bg-primary-200 dark:bg-primary-800">Node.js</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">Svelte/SvelteKit</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">React</span>
									<span class="badge bg-primary-200 dark:bg-primary-800">Next.js</span>
								</svelte:fragment>
							</AccordionItem>
							<AccordionItem>
								<svelte:fragment slot="lead"
									><span class="badge bg-primary-200 dark:bg-primary-800"
										><Icon icon="mdi:language" /></span
									></svelte:fragment
								>
								<svelte:fragment slot="summary">Languages</svelte:fragment>
								<svelte:fragment slot="content">
									<p class="list-item">Spanish: Native</p>
									<p class="list-item">German: Fluent</p>
									<p class="list-item">English: Fluent</p>
								</svelte:fragment>
							</AccordionItem>
						</Accordion>
					</svelte:fragment>
				</AccordionItem>
				<AccordionItem>
					<svelte:fragment slot="lead"><Icon icon="ant-design:code-outlined" /></svelte:fragment>
					<svelte:fragment slot="summary"><p class="h5">About this site</p></svelte:fragment>
					<svelte:fragment slot="content">
						<div class="flex flex-col space-y-2">
							<p class="h-full drop-shadow-sm">
								This is a <a
									href="https://kit.svelte.dev/"
									target="_blank"
									class="font-mono underline">SvelteKit</a
								> project that I'll use as entry point for my portfolio, and that I'll keep on updating
								with new content and features.
							</p>
							<p class="h-full drop-shadow-sm">
								Check out the source code on <a
									class="font-mono underline"
									target="_blank"
									href="https://github.com/aarangop/personal-page">GitHub</a
								>
							</p>
						</div>
					</svelte:fragment>
				</AccordionItem>
			</Accordion>
		</div>
	</div>
</ReaderLayout>

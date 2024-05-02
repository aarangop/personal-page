<script>
	import { SignIn } from '@auth/sveltekit/components';
</script>

<section class="flex flex-row">
	<SignIn provider="github" signInPage="signin" />
	<a class="card p-4" href="/admin/podcast"> Podcast </a>
	<a class="card p-4" href="/admin/blog">Blog</a>
</section>

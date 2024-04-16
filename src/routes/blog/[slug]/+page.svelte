<script lang="ts">
	import { marked } from "marked";
	import type { PageData } from "./$types";
  export let data: PageData

  const readDuration = (text:string) => (text.length / 350).toFixed(0)
</script>

<section class="lg:max-w-[800px] lg:px-6 sm:px-2 sm:max-w-[600px] self-center py-4 flex flex-col ">
  <div class="flex flex-row mb-6">
    <div class="flex flex-col flex-1 ">
      <h2 class="h2 mb-2">{data.blogPost.title}</h2>
      <h3 class="h3 text-gray-400 mb-2 flex-1">{data.blogPost.subtitle}</h3>
      <span class="text-gray-400">{`${readDuration(data.blogPost.markdown)} min read`}</span>
    </div>
  <img src={data.blogPost.imageUrl} alt={data.blogPost.title} class="w-36 rounded-lg drop-shadow-lg"/>
  </div>
  <div class="font-serif">
    {@html marked.parse(data.blogPost.markdown)}
  </div>
</section>
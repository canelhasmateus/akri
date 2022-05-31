<script lang="ts">
	import PreviewList from "./PreviewList.svelte";
	import { list as queueList } from "./lists/queue";
	import { list as toolList } from "./lists/tool";
	import { choose, dateRng } from "./random.js";
</script>

<main>
	<div id="vert">
		<PreviewList previewList={ choose( queueList , 4) }/>
		<PreviewList previewList={ choose( toolList , 6 , dateRng(new Date()) )}/>
	</div>
</main>


<style>

	#vert {
		display: grid;
		grid-template-columns: 3fr 1fr;
		column-gap: 2%;
		padding: 2%;
		height: 100%;
		box-sizing: border-box;
	}

	main {
		height: 100vh;
	}


</style>

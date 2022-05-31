<script lang="ts">
	import URLPreview from "./PreviewCard.svelte";
	import { onMount } from "svelte";
	import type { Preview } from "./lists/interface";

	export let previewList : Preview[]
	export let height
	export let previewProp

	let ul: HTMLUListElement

	onMount( () => {
		ul.style.height = height || "100%"
		ul.style.gridTemplateRows = previewList.map( el => "1fr" ).join( " " )
		ul.style.gap              = `${ 2 / ( previewList.length - 1 ) }vw`
	} )


</script>
<ul bind:this={ul}>

	{#each previewList as preview}
		<URLPreview preview={preview} prop={ previewProp }/>
	{/each}

</ul>


<style>
	ul {
		list-style: none;
		display: grid;
		margin: 0;
		padding: 1%;
		overflow-y: auto;
		overflow-x: visible;
		box-sizing: border-box;
	}

</style>
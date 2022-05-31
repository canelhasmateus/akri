<article on:click={ clickHandler}>
	<div class="img appear" style={`background-image: url( ${placeholder})`}>
		{#if image }
			<div style={`background-image: url( ${image}) , url(${placeholder})`} on:error={ ( er ) => setFallback( er ) } class="img appear fetched-image"></div>
		{/if}
	</div>
	<div class="content">
		<h3 class="text appear">{title}</h3>
		<span class="text appear">{url}</span>
	</div>
</article>

<script lang="ts">
	import placeholder from "./assets/photo-placeholder.png"
	import type { Preview } from "./lists/interface.ts";

	export let preview: Preview;
	export let prop;

	let title       = preview.title || "No Title"
	let description = preview.description || "..."
	let hostName    = preview.domain
	let image       = preview.image || "";
	let url         = preview.url

	if ( image.startsWith( "/" ) ) {
		image = preview.domain + preview.image;
	}

	function clickHandler( ev: MouseEvent ) {
		window.open( preview.url, '_blank' );
	}

	function setFallback( ev: ErrorEvent ) {
		console.log( "error!" )
		const div                 = ev.target as HTMLDivElement;
		div.style.backgroundImage = `url(${ placeholder })`;
	}

</script>


<style>
	* {
		min-width: 0;
		min-height: 0;
	}

	article {
		
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 2fr 3fr;

		border-radius: 3px;
		box-shadow: 1px 2px 5px 1px rgba(245, 233, 233, 0.1);
	}

	.appear {
		opacity: 0;
		will-change: opacity;
		animation: appear 0.5s forwards linear;
	}

	.img {
		background-size: cover;
		background-position: center center;
		border-radius: 7px;
	}

	.fetched-image {
		height: 100%;
		width: 100%;
		animation-duration: 2s;
		animation-delay: 2s;
	}

	.content {
		margin-left: 5%;
		margin-right: 5%;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

	}

	.text {
		text-align: left;
		color: #f5e9e9;
		word-wrap: break-word;
		text-overflow: ellipsis;
	}

	h3 {
		font-size: 100%;
		font-weight: bold;
	}

	p, span {
		font-size: 100%;
		font-weight: normal;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	@keyframes appear {

		0% {
			opacity: 0;
		}
		100% {
			opacity: 100%;
		}

	}

</style>



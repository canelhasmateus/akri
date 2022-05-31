import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig( {
								 plugins: [ svelte(),
											viteSingleFile() ],
								 build:   {
									 cssCodeSplit:      false,
									 assetsInlineLimit: 100000000,
									 rollupOptions:     {
										 output: {
											 manualChunks: () => "everything.js",
										 },
									 },
								 }
							 } )

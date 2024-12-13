<script lang="ts">
	import { API_URL } from '$lib/config';
	import { usePods } from '$lib/hooks/pods/pods';
	import type { Pod } from '$lib/hooks/pods/types';
	import { onMount } from 'svelte';

	const { fetchPods, subscribe, error } = usePods();

	let pods: Pod[] = [];
	let fetchError: string | null = null;

	subscribe((value) => (pods = value));
	error((value) => (fetchError = value));

	onMount(() => {
        console.log('API client ', API_URL);
		fetchPods();
        console.log('API client ', API_URL);
	});
	console.log('API BE ', API_URL);
</script>

<h1>Welcome to Pods</h1>

{#if fetchError}
	<p>Error: {fetchError}</p>
{:else}
	<ul>
		{#each pods as pod}
			<li>{pod.name} - {pod.status}</li>
		{/each}
	</ul>
{/if}

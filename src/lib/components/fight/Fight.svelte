<script lang="ts">
	import { browser } from '$app/environment';
	import { Game } from '$lib/game/Game';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!browser) return;

		const fightEl = document.getElementById('fight');
		if (!fightEl) return;

		const game = new Game(fightEl);
	});
</script>

<div id="fight" class="w-full h-full"></div>

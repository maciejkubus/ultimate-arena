<script lang="ts">
	import { Game } from '$lib/game/Game';
	import { onMount } from 'svelte';

	onMount(() => {
		const fightEl = document.getElementById('fight');
		if (!fightEl) return;

		const game = new Game(fightEl);
	});
</script>

<div id="fight" class="w-full h-full"></div>

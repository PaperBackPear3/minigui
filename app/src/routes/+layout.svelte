<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<aside>
	<nav>
		<a href="/">Home</a>
		<a href="/pods">Pods</a>
		<a href="/settings">Settings</a>
	</nav>
</aside>

{@render children()}

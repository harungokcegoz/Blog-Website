<script>
	import router from 'page'

  import Homepage from './routes/Homepage.svelte';
  import Header from './components/Header/Header.svelte';
  import Footer from './components/Footer/Footer.svelte';


	let page;

	router("/", () => {page = Homepage});

	router.start();

	

</script>
<div class="container">

	<div class="container__item">
		<header class="container__item__header">
			<Header/>	
		</header>
	</div>

	<div class="container__item">
		<main class="container__item__main">
		<svelte:component this={page}/>
		</main>
	</div>

	<div class="container__item">
		<footer class="container__item__footer">
			<Footer/>
		</footer>
	</div>
	
</div>


<style>
	.container{
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: stretch;
		align-content: stretch;
	}
	.container__item{
		display: block;
		flex-shrink: 1;
		flex-basis: auto;
		align-self: auto;
	}
	.container__item__header{
		padding: 0.5em 8em;
		position: sticky;
		align-items: center;
	}
</style>

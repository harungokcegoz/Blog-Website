<script>
	import router from 'page'

  import Homepage from './routes/Homepage.svelte';
  import Header from './components/Header/Header.svelte';
  import Footer from './components/Footer/Footer.svelte';
  import LoginPage from './routes/LoginPage.svelte';
  import Blogs from './routes/BlogsPage.svelte';
  import Popup from './components/Header/SearcherPopUp.svelte';
  import {showPopup} from './stores/popUpStore.js'
  import DetailPage from './routes/DetailPage.svelte';
  import EventsPage from './routes/EventsPage.svelte';

	let page;

	router("/", () => {page = Homepage});
	router("/login", () => {page = LoginPage});
	router("/blogs", () => {page = Blogs});
	router("/blogs/:id", () => {page = DetailPage});
	router("/events/", () => {page = EventsPage});
	router("/events/:id", () => {page = DetailPage});
	
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
		<Popup bind:showPopup = {$showPopup} />
		</main>
	</div>

	<div class="container__item">
		<footer class="container__item__footer" style="margin-top: 4em;">
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
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
		border-bottom: 1px rgba(0, 0, 0, 0.22) solid;
	}
	
</style>

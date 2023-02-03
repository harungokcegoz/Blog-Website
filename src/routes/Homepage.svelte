<script>
  import Blogs from "../components/BlogsContainer.svelte";
import Hero from "../components/Hero.svelte"

  


</script>
<div class="container">
    <div class="container__item">
        <Hero/>
    </div>
    <div class="item">
        <Blogs/>
    </div>
    <div class="item">

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
</style>
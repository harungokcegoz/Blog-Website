<script>
  import Logo from "./Logo.svelte";
  import Navigation from "./Navigation.svelte";

</script>
<div class="container">
    <div class="container__item">
        <Logo/>
    </div>

    <nav class="container__item">
        <Navigation/>
    </nav> 
</div>


<style>
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
    }
    .container__item{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
    }
    @media (max-width: 767px) {
        .container {
            flex-direction: column;
        }
    } 
</style>
<script>
  import BlogCards from "../components/Homepage/BlogContainer/BlogCards.svelte";
  import { blogsData } from "../data/blogsPageContainerData.js";

</script>
<div class="container">
        {#each blogsData as obj}
            <div class="container__item">
                <BlogCards card = {obj}/>
            </div>
        {/each} 
</div>

<style>
.container {  
    display: grid;
    padding: 5em 10em;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;
    gap: 1em 1em;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
        
}
.container__item{
    margin: 0px auto;
}
@media (max-width: 1050px) {
    .container{
        grid-template-columns: 0.5fr 0.5fr ;
        grid-template-rows: 0.5fr 0.5fr ;
        grid-auto-flow: row;
        grid-template-areas:
            ". ."
            ". ."
            ". .";
            gap: 1em 1em;
            padding: 5em;
    }
}
@media (max-width: 767px) {
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-end;  
    }
    .container__item{
        margin: 0em 1em;
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: center;
    }
}  
</style>
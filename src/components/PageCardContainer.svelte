<script>
  import Card from "./Cards.svelte";
  import { blogsData } from "../data/blogsContainerData.js";
  import { eventsData } from "../data/eventsContainerData.js";
  import CardContainer from "./CardContainer.svelte";
 
  export let dataType;
  let data = ""
  if (dataType == "blogs") {
    data = blogsData;
  } else {
    data = eventsData;
  }
  $: dataType;

</script>

<div class="container">

  {#each data as obj}
    <div class="container__item">
      <Card card={obj} dataType = {dataType}/>
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
@media (max-width: 1080px) {
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
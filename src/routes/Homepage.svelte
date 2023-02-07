<script>
  import ContainerTab from "../components/ContainerTab.svelte";
  import CardContainer from "../components/CardContainer.svelte";
import Banner from "../components/Homepage/HomepageBanner.svelte"



   
</script>
<div class="container">
    <div class="container__item">
        <Banner/>
    </div>
    <div class="container__item">
        <div class="title">
            <h1>
                De nieuwste blogs
            </h1>
        </div>
        <!-- <BlogContainer /> -->
        <CardContainer element = ""/>
    </div>
    <div class="container__item" style="margin: auto;">
        <!-- I tried to use one/same card container for both sections but since I didn't fetch anything I couldn't pass the data through the component. So I copied blog container and pasted on the event one -->
        <div class="title">
            <h1>
                Opkomende Events
            </h1>
        </div>
        <ContainerTab/>
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
    .title{
          padding: 0em 2em;
          text-align: center;
          margin-top: 2em;
    }
</style>
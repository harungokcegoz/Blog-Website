<script>
    import Cards from "./BlogCards.svelte";
    import { blogsData } from "../../../data/blogsContainerData.js"
    

</script>

<div class="blogs">

    <div class="cards__container">
    <!-- this usage is very inefficient tbh. when i am able to fetch the data from api, i can pass cards through this component and match this info inside of the card component but in this case i just hard coded. sorry for this mess. -->
            <div class="cards__container__item">
                <Cards card = {blogsData[0]}/>
            </div>
            <div class="cards__container__item">
                <Cards card = {blogsData[1]}/>
            </div>
            <div class="cards__container__item">
                <Cards card = {blogsData[2]}/>
            </div>
    </div>
   
</div>


<style>
    .blogs{
        padding: 1em;

    }
    .cards__container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-end;   
    }
    .cards__container__item{
        margin: 0em 1em;
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: center;
    }
    @media (max-width: 1050px) {
        .cards__container{
            flex-direction: column;
        }
    } 

</style>

<script>
  import Cards from "./Cards.svelte";

export let title;
let blogsData = [
    {  
        "imgSrc" : "https://github.com/harungokcegoz/Blog-Website/blob/main/images/8d6cb4608c3a0c50624325b0a2b4d0142822345b.jpg?raw=true",
        "title" : "Werken bij Social Brothers volgens developer Ryence",
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia" 
    },
    {  
        "imgSrc" : "https://github.com/harungokcegoz/Blog-Website/blob/main/images/c9affda65b1530ebfde2cb412de6009da9e6a477.jpg?raw=true",
        "title" : "Hoe stimuleer je winkelbezoek met technologie?",
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia" 
    },
    {  
        "imgSrc" : "https://github.com/harungokcegoz/Blog-Website/blob/main/images/a8eb6babda033968f38e01469c8e86b536a9008f.jpg?raw=true",
        "title" : "Locatie gebaseerde pushberichten sturen",
        "description" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia" 
    },
];

</script>

<div class="blogs">
    <div class="title">
        <h1>
            {title}
        </h1>
    </div>
    <div class="cards">
        <div class="cards__container">
        <!-- this usage is very inefficient tbh. when i am able to fetch the data from api, i can pass the card to this component and match this info inside of the card component but in this case i just hard coded. sorry for this mess -->
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
</div>


<style>
    .blogs{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: stretch;
        padding: 1em;
    }
    .title{
        padding: 0em 2em;
        flex: 0 1 auto;
        align-self: auto;
        text-align: center;
    }
    .cards{
        flex: 10 1 auto;
        align-self: auto;
    }
    .cards__container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-end;   
    }
    .cards__container__item{
        margin: 0em 1em;
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
    }
</style>

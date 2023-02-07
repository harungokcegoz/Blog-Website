<script>
import Label from "../components/Label.svelte";
import { eventsData } from "../data/eventsContainerData.js";
import { blogsData } from "../data/blogsContainerData.js";
  import { findObjectById } from "../utils/network-utils.js";
  import CardContainer from "../components/CardContainer.svelte";

let url = location.pathname.replace('/', '');
let parts = url.split("/")
let dataType = parts[0];
let id = parts[1]
let data = ""
let card = ""
if (dataType.includes("events")) {
    data = eventsData
    
} else {
    data = blogsData
}
console.log(dataType)
console.log(id)
console.log(data)
card = findObjectById(data, id)
console.log(card)


</script>

<div class="container">
    <div class="container__banner__img">
            <img src={card.img} alt="">
        </div>
    
    <div class="container__item">
        <div class="container__item__text">
            <div class="container__banner__text__label">
                <Label card= {card}/>
            </div>
            <div class="container__banner__text__title">
                <h1>{card.title}</h1>
            </div>
            <div class="container__banner__text__description">
                <p>
                 {card.description}     
                </p>
                  
            </div>
            <div class="container__banner__text__main-text">
                <p>
                  {card.text}    
                </p>
                  
            </div>
            
        </div>
    </div>

    <div class="container__item">
      <div class="container__banner__related-blogs">
            {#if dataType.includes("events")}
                <h1>Gerelateerder events</h1>
                <CardContainer element = "events"/>
                {:else}
                <h1>Gerelateerder blogs</h1>
                 <CardContainer element = ""/>
            {/if}
            
            </div>
    </div>
 
</div>


<style>
    *{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h1{
       font-size: 50px; 
       font-weight: bold;
    }
    p{
        font-weight: 200;
        font-size: 20px;
    }
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: left;
        align-items: center;
        align-content: center;
    }
    .container__item{
        display: block;
        width: 70%;
        margin: 5em auto;
    }
    .container__item__text{
        text-align: left;
    }
    img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        object-position:50% 35%;
    }
    .container__banner__text__description{
        margin-top: 5em;
    }
    .container__banner__related-blogs h1{
        text-align: center;
    }
    .container__banner__img{
        position: relative; 
        height: 30em;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .container__banner__text__label{
        width:max-content;
    }
    @media (max-width: 767px) {
        *{
			font-size: small;
		}
    } 
</style>
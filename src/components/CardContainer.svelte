<script>
    import Cards from "./Cards.svelte"
    import { eventsData } from "../data/eventsContainerData.js";
    import {blogsData} from "../data/blogsContainerData.js"
  import { findEventsByCity } from "../utils/network-utils.js";

    export let element;
    let data = ""
    let dataType = ""
    if (element == "") {
        data = blogsData
        dataType = "blogs"
    } else {
        data = eventsData;
        dataType = "events"
    }
    
  </script>
  
    <div class="blogs">
        <div class="cards__container">
            {#each data.slice(0, 3) as item}
            <div class="cards__container__item">
                <Cards dataType = {dataType} card={item} />
            </div>
            {/each}
        </div>  
    </div>
  
  <style>
      .blogs{
          padding: 1em;
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
          align-self: center;
      }
      @media (max-width: 1050px) {
          .cards__container{
              flex-direction: column;
          }
      } 
  </style>
  
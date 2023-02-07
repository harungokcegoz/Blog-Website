
<script>
    import { eventsData } from "../data/eventsContainerData.js";
    import {cityStore} from "../stores/cityStore.js"
  import { findEventsByCity } from "../utils/network-utils.js";
  import Cards from "./Cards.svelte";


    let selectedCity = "Utrecht";
    let cities = eventsData.map(event => event.city);
    let uniqueCities = Array.from(new Set(cities));
    let events = findEventsByCity(eventsData, "utrecht")

    
    function handleCity(city){
        selectedCity = city;
        $cityStore = city
        events = findEventsByCity(eventsData, $cityStore)
    }
    
  </script>
<div class="tabContainer">
        <div class="tabContainer__item">
          {#each uniqueCities as city}
                <div class="tabContainer__item__tab">
                  <button class="tab-buttons" style="background-color: {selectedCity === city ? '#FF8C00' : 'transparent'}; color: {selectedCity === city ? 'white' : 'black'}; border-color:{selectedCity === city ? '#FF8C00' : 'rgba(0, 0, 0, 0.3)'}; " on:click={() => handleCity(city)}>EVENTS {city ? city.toUpperCase() : ''}</button>
                </div>

            {/each}  
        </div>

        <div class="tabContainer__item">
            {#each events as a}
                <div class="cards__container">
                    <div class="cards__container__item">
                      <Cards dataType = "events" card = {a}/>   
                    </div>
                   
                </div>
                
            {/each}
        </div>

</div>




   <style>
  
    .tabContainer__item{
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-content: stretch;
        align-self: center;
        margin-top: 1em;
    }
    .tab-buttons{
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 0.5em 1em;
        border-radius: 5px;
        font-size: 12px;
        
    }
    .tab-buttons:hover{
        border: #FF8C00 2px solid;  
    }
    .tabContainer__item__tab{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin-right: 1em;
        list-style-type: none;
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
        .tabContainer__item {
            justify-content: center;
            flex-direction: column;
        }
        .tabContainer__item__tab{
            padding: 0.5em;
            
        }
    } 
  

   </style>
  
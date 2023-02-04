<script>
    import Cards from "../BlogContainer/BlogCards.svelte"
    import { eventsData } from "../../../data/eventsContainerData.js";


    export let city;
    
    let events = eventsData.find(cityData => cityData.city === city).events;

  </script>
  
  <div class="blogs">
      
    
      <div class="cards__container">
              <div class="cards__container__item">
                  <Cards card = {events[0]}/>
              </div>
              <div class="cards__container__item">
                  <Cards card = {events[1]}/>
              </div>
              <div class="cards__container__item">
                  <Cards card = {events[2]}/>
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
      @media (max-width: 1050px) {
          .cards__container{
              flex-direction: column;
          }
      } 
  </style>
  
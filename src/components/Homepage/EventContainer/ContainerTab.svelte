
<script>
    import { Tabs, Tab, TabContent } from "carbon-components-svelte";
    import { eventsData } from "../../../data/eventsContainerData.js";
    import EventContainer from "./EventContainer.svelte";


    let selected = 0;
  </script>
<div class="tabContainer">
    <Tabs bind:selected>
        <div class="tabContainer__item">
          {#each eventsData as cityData}
                <div class="tabContainer__item__tab">
                   <Tab label="Events {cityData.city}"/>  
                </div>
        
            {/each}  
        </div>
        <svelte:fragment slot="content">
                <div class="tabContainer__item">
                    {#each eventsData as cityData}
                    <TabContent><EventContainer title = "Opkomende Events" city = {cityData.city}/></TabContent>
                    {/each}
                </div>
        </svelte:fragment>  
 </Tabs>
</div>




   <style>
  
    .tabContainer__item{
        display: flex;
        flex-direction: row;
        /* justify-content: center; */
        align-content: stretch;
        align-self: center;
    }
    .tabContainer__item__tab{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin-right: 1em;
        list-style-type: none;
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 0.5em 1em;
        border-radius: 5px;
        color: white;
    }
    .tabContainer__item__tab:hover{
        background-color: #FF8C00;
        border: none;
        color: white;
    }
    @media (max-width: 1050px) {
        .tabContainer__item {
            justify-content: center;
        }
        .tabContainer__item__tab{
            padding: 0.5em;
            
        }
       
    } 

   </style>
  
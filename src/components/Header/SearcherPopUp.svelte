<script>
    import Button from '../Button.svelte'
    export let showPopup;
    let search;

    function searcher(){}
</script>
  
  {#if showPopup}
    <div class="overlay">
      <div class="popupLayer">
        <div class="exit-button">
            <button class="popup__exit-button" on:click={() => showPopup = false}><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="popup">
             <div class="popup__title">
                <h1 style="font-size: 45px;">Waar ben je naar opzoek?</h1>
            </div>
            <div class="popup__descrp">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus error quae repellat inventore recusandae quos pariatur quas laudantium necessitatibus. Sapiente?</p>
            </div>
            <div class="popup__text-field">
                <form action="" on:submit|preventDefault={searcher}>
                    <div class="popup__text-field__text-area">
                        <input type="text" placeholder="Ik ben op zoek naar ..." bind:value={search} required class="text-area">
                    </div>
                    <div class="popup__text-field__button">
                        <Button href = "/" text = "Zoeken"/>
                    </div>
                </form>
            </div> 
        </div>
      
      
      </div>
    </div>
  {/if}

<style>
.popupLayer{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid black;
    text-align: center;
    width: 65%;
}
.popup {
    padding: 5em 10em;
    
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.popup__text-field{
    margin-top: 5em;
}
.popup__text-field__text-area{
    display: inline-block;
   margin-right: 1em;
   width: 70%;
}
.text-area{
    padding: 1em 1em;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0px 0px 7px rgba(66, 66, 66, 0.201);
}
.exit-button{
    float: right;
}
.popup__exit-button{
    background: transparent;
    border: none;
    font-size: 25px;
}
.popup__text-field__button{
    display: inline-block;
}
</style>
  
  
  
<script>
    import {showPopup} from '../../stores/popUpStore.js'
</script>

<button on:click={() => showPopup.update(n => !n)}><i class="fa-solid fa-magnifying-glass"></i></button>


<style>
    button{
        background: none;
        border: none;
        font-size: 1.5em;
        padding: 0;
    }
    button:hover{
        color: #FF8C00;
    }
</style>

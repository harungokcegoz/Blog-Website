<script>
export let card
</script>
<div class="container__img__label">{card.category ? card.category.toUpperCase() : '' || card.city ? card.city.toUpperCase() : ''}</div>
<style>
.container__img__label{
        background-color: rgba(216, 216, 216, 0.993);
        border-radius: 3px;
        padding: 5px 10px;
        color: black;
        font-size: 10px;
    }
</style>
<script>
    //label
    export let imgSrc, title, description;
</script>

<div class="container">
    <div class="container__img">
        <img src={imgSrc} alt="">
    </div>
    <div class="container__description">
        <h3>{title}</h3>
    </div>
    <div class="container__link">
        <p>{description}</p>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: normal;
        align-items: normal;
        align-content: normal;
    }
    .container__img{
        display: block;
        flex-grow: 10;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
    }
    .container__description{
        display: block;
        flex-grow: 2;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
    }
    .container__link{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
    }
</style>
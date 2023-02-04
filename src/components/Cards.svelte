<script>
    //label
    export let card;
</script>

<div class="container">
    <div class="container__img">
        <img src={card.imgSrc} alt="">
    </div>
    <div class="container__title">
        <h3>{card.title}</h3>
    </div>
    <div class="container__description">
        <p>{card.description}</p>
    </div>
    <div class="container__link">
        <a href="">Read More <i class="fa-solid fa-arrow-right"></i></a>
    </div>
</div>

<style>
    a{
        text-decoration: none;
        color: black
    }
    .container{
        display: grid; 
        grid-template-columns: 20em; 
        grid-template-rows: 13em 4em 7em 2em; 
        gap: 5px 0px; 
        grid-template-areas: 
            "img"
            "title"
            "description"
            "link"; 

    }
    .container__img{
        grid-area: img;
    }
    .container__img img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .container__description{
        grid-area: description;
        font-weight: 300;
    }
    .container__title{
        grid-area: title;
    }
    .container__link{
        grid-area: link;
    }
</style>
<script>
  import Label from "./Label.svelte";

    //label
    export let card, dataType;
</script>

<a href="/" class="link" on:click={location.href = "/"+ dataType +"/" + card.id}>
    <div class="container">
        <div class="container__img">
            <img src={card.img} alt="">
            <div class="container__img__label">
               <Label card = {card}/> 
            </div>
            
        </div>
        <div class="container__title">
            <h3>{card.title}</h3>
        </div>
        <div class="container__description">
            <p>{card.description}</p>
        </div>
        <div class="container__link">
            <a href="/" class="link">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
</a>


<style>
    .link{
        text-decoration: none;
        color: black;
    }
    .link:hover{
        color: #FF8C00;
    }
    .link:hover a{
        color: #FF8C00;
    }

    .container{
        display: grid; 
        grid-template-columns: 20em; 
        grid-template-rows: 13em 4em 9em 2em; 
        gap: 5px 0px; 
  
        grid-template-areas: 
            "img"
            "title"
            "description"
            "link"; 
    }
    .container__img{
        grid-area: img;
        position: relative;
    }
    
    .container__img img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .container__img__label{
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 0 5px 5px;
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
   
    @media (max-width: 767px) {
        .container {
            margin-bottom: 1em ;
            gap: 2px 0px;
        }
    } 
</style>
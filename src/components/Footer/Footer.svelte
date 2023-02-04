<div class="container">
    <div class="container__item">
        <a href="/aboutus">About Us</a>
    </div>
    <div class="container__item">
        <a href="/privacy">Privacy</a>
    </div>
    <div class="container__item">
        <a href="/aboutus">Contact</a>
    </div>
</div>

<style>
    a{
        text-decoration: none;
        color: white;
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: stretch;
        padding: 1em;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 54%, rgba(47,47,47,1) 100%);
    }
    .container__item{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin: 1em 2em;
    }
    .container__item:hover a{
         color: #FF8C00;
    }
</style>
<script>

  import Login from "./Login.svelte";
import Searcher from "./Searcher.svelte";


</script>

    <div class="container">
        <div class="container__item">
            <ul class="nav__menu">
                <li class="nav__menu__item" id="link"><a href="/blog">Blog</a></li>
                <li class="nav__menu__item" id="link"><a href="/events">Events</a></li>
            </ul> 
        </div>
        <div class="container__item">
            <ul class="nav__menu">
                <li class="nav__menu__item"><Searcher/></li>
                <li class="nav__menu__item"><Login/></li>
            </ul> 
        </div>
    </div>
    

   


<style>
    a{
        text-decoration: none;
        color: black;
        font-weight: 500;
    }
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
    }
    .container__item{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin: 0 1em;
    }

    .nav__menu{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
    }
    .nav__menu__item{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin: 0 2em;
    }
    #link:hover{
        border-bottom: 5px solid 	#FF8C00;
        padding-bottom: 2px;
    }
    @media (max-width: 1050px) {
        .container {
            flex-direction: column;
        }
        .nav__menu{
            flex-direction: column;
        }
        .nav__menu__item{
            padding: 2px;
            margin: 1em 0em;
        }
    } 
</style>
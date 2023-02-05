<script>

import Button from "../components/Button.svelte";
    let username, password;
    function login(){
       
    }
</script>

<div class="container">
    <div class="container__item">
        <div class="container__item__title">
            <h1>Login bij Social Brothers</h1>
        </div>
    </div>

    <div class="container__item">
        <div class="container__item__description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores animi perspiciatis officiis deserunt natus minus voluptates possimus, aperiam quae unde nemo fugiat in velit ipsa.</p>
        </div>
    </div>

    <div class="container__item"> 
        <div class="container__item__form">
            <form action="" on:submit|preventDefault={login()}>
                <div class="container__item__form__item">
                    <input type="text" placeholder="Gebruikersnaam" bind:value={username} required class="input__field">
                </div>

                <div class="ontainer__item__form__item">
                    <input type="password" placeholder="Wachtwoord" bind:value={password} required class="input__field">
                </div>   
            </form>
        </div>   
    </div>
    
    <div class="container__item">
        <Button href = "/" text = "Log In"/>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
        margin: 5em auto;
        border: 1px rgba(0, 0, 0, 0.22) solid;
        padding: 3em 3em;
        border-radius: 8px;
        width: 40%;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    }
    .container__item{
        display: block;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        margin-bottom: 2em;
    }
    .input__field{
        padding: 0.75em 1em;
        width: 70%;
        border-radius: 5px;
        box-shadow: 0px 0px 7px rgba(66, 66, 66, 0.201);
    }
    @media (max-width: 767px) {
        .container {
            font-size: small;
            width: 65%;
        }
    } 
</style>
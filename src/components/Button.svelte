<script>
    export let href, text;
</script>


<a href={href}>{text}</a>
<style>
    a{
        border-radius: 5px;
        border: solid black 2px;
        padding: 1em;
        text-decoration: none;
        color: black;
    }
    a:hover{
        border: solid 	#FF8C00 2px;
        color: #FF8C00;
    }
    @media (max-width: 480px) {
        a{
            border: none;
        }
        a:hover{
            border: none;
        }
    } 
</style>
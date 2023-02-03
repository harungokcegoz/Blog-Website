<script>
  import BlogsCards from "./BlogsCards.svelte";

</script>

<div class="blogs">
    <div class="title">
    <h1>
        De nieuwste blogs
    </h1>
    </div>

    <div class="container">
        <!-- this usage is very inefficient tbh. when i am able to fetch the data from api, i can pass the card to this component and match this info inside of the card component but in this case i just hard coded. sorry for this mess -->
        <div class="container__item">
            <BlogsCards imgSrc = "https://github.com/harungokcegoz/Blog-Website/blob/main/8d6cb4608c3a0c50624325b0a2b4d0142822345b.jpg?raw=true" title = "Werken bij Social Brothers volgens developer Ryence" description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia. Eum facere ea explicabo omnis, eaque necessitatibus, laudantium odit delectus esse illum ut autem, dolorum ipsum cum harum asperiores corrupti voluptate placeat?"/>
        </div>
        <div class="container__item">
            <BlogsCards imgSrc = "https://github.com/harungokcegoz/Blog-Website/blob/main/c9affda65b1530ebfde2cb412de6009da9e6a477.jpg?raw=true" title = "Hoe stimuleer je winkelbezoek met technologie?" description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia. Eum facere ea explicabo omnis, eaque necessitatibus, laudantium odit delectus esse illum ut autem, dolorum ipsum cum harum asperiores corrupti voluptate placeat?"/>
        </div>
        <div class="container__item">
            <BlogsCards imgSrc = "https://github.com/harungokcegoz/Blog-Website/blob/main/a8eb6babda033968f38e01469c8e86b536a9008f.jpg?raw=true" title = "Locatie gebaseerde pushberichten sturen" description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure hic officiis voluptate totam, quae rem officia. Eum facere ea explicabo omnis, eaque necessitatibus, laudantium odit delectus esse illum ut autem, dolorum ipsum cum harum asperiores corrupti voluptate placeat?"/>
        </div>
    </div>
</div>

<style>
    .blogs{
        padding: 5em 10em;
    }
</style>

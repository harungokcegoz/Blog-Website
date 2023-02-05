<script>
  import PageCardContainer from "../components/PageCardContainer.svelte";


</script>
<div class="container">
  <div class="container__banner">
      <div class="container__banner__img">
          <img src="https://github.com/harungokcegoz/Blog-Website/blob/main/images/719d7119b323a629a782fa92dd43e21e888590ab.jpg?raw=true" alt="">
      </div>
    <div class="container__banner__text">
          <div class="container__banner__text__title">
              <h1>Blogs</h1>
          </div>
      </div>
  </div>
  <div class="container__items">
    <PageCardContainer/>
  </div>

</div>


<style>

h1{
    font-size: 60px;
}
.container__banner{
    position: relative; 
    height: 15em;
    width: 100%;
    align-items: center;
    justify-content: center;
}
img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
    filter: brightness(50%);
}
.container__banner__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}
.container__items{
  align-self: center;
}
</style>
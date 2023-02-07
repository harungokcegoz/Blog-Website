<script>
    import PageCardContainer from "../components/PageCardContainer.svelte";
    
  
  
  </script>
  <div class="container">
    <div class="container__banner">
        <div class="container__banner__img">
            <img src="https://github.com/harungokcegoz/Blog-Website/blob/main/images/215d1c7002ed987517e77ded5f92d0e6489e9f01.jpg?raw=true" alt="">
        </div>
      <div class="container__banner__text">
            <div class="container__banner__text__title">
                <h1>Zoekresultaten</h1>
            </div>
        </div>
    </div>
    <div class="container__items">
      <PageCardContainer dataType = "blogs"/>
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
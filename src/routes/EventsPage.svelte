<script>
    import PageCardContainer from "../components/PageCardContainer.svelte";
    
  
  
  </script>
  <div class="container">
    <div class="container__banner">
        <div class="container__banner__img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Museum_Volkenkunde_%28National_Museum_of_Ethnology%29_in_Leiden_2.jpg/1200px-Museum_Volkenkunde_%28National_Museum_of_Ethnology%29_in_Leiden_2.jpg" alt="">
        </div>
      <div class="container__banner__text">
            <div class="container__banner__text__title">
                <h1>Events</h1>
            </div>
        </div>
    </div>
    <div class="container__items">
      <PageCardContainer dataType = "events"/>
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
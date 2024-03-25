import React from 'react'

const Carousel = () => {
  return (
    
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <img src="/assets/Carouse/Img1.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/Carouse/Img2.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/assets/Carouse/Img3.png" class="d-block w-100" alt="..."/>
          </div>
          {/* <!-- Add more carousel items as needed --/> */}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Carousel

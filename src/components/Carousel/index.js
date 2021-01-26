import React from "react";

// import styles from "./Carousel.module.css";

export const Carousel = () => {
  return (
    <div
      id="carouselMain"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-mdb-interval="3000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/satriaana-resources.appspot.com/o/satCarousel1.jpg?alt=media&token=f934000a-1337-40cf-b6a3-f6b96891ddbf"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-mdb-interval="3000">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/satriaana-resources.appspot.com/o/satCarousel2.jpg?alt=media&token=74f8ba2f-2c8b-4b5c-b216-88ffaee6d342"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselMain"
        role="button"
        data-mdb-slide="prev"
      >
        <span class="fas fa-angle-left" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselMain"
        role="button"
        data-mdb-slide="next"
      >
        <span class="fas fa-angle-right" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  );
};

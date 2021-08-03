<template>
  <div>
    <b-carousel
      id="carousel-1"
      controls
      indicators
      img-width="100%"
      img-height="500"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://static.toiimg.com/photo/82547317.cms"
        class="big1"
      ></b-carousel-slide>

      <b-carousel-slide
        img-src="https://i.ytimg.com/vi/RC8dHEENNHQ/maxresdefault.jpg"
        class="big1"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://www.dekhnews.com/entertainment/wp-content/uploads/2020/11/Anupama-Star-Plus-1200x900-cropped.jpg"
        class="big1"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
.carousel {
  width: 100% !important;
  height: 400px !important;
}
.carousel-item {
  width: 100% !important;
  height: 400px !important;
}
.w-100 {
  width: 100% !important;
  height: 400px !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media (min-width: 10px) and (max-width: 600px) {
  .carousel {
    width: 100% !important;
    height: 300px !important;
  }
  .carousel-item {
    width: 100% !important;
    height: 300px !important;
  }
  .w-100 {
    width: 100% !important;
    height: 300px !important;
  }
}
</style>

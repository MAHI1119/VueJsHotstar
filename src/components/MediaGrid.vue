<template>
  <div>
    <div class="h4 text-white subtit mt-3 fs-6">Latest & Trending</div>
    <div class="overflow-scroll">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div v-for="(movie, i) in movies" :key="i" class="p-2 bd-highlight">
          <img :src="movie.image" alt="" class="item" />
        </div>
      </div>
    </div>
    <div class="h4 text-white subtit fs-6">Movies Recommended For You</div>
    <div class="overflow-scroll">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div v-for="(movie, i) in movies" :key="i" class="p-2 bd-highlight">
          <img :src="movie.image" alt="" class="item" />
        </div>
      </div>
    </div>
    <div class="h4 text-white subtit fs-6">Popular Shows</div>
    <div class="overflow-scroll">
      <div class="d-flex flex-row bd-highlight mb-3">
        <div v-for="(movie, i) in movies" :key="i" class="p-2 bd-highlight">
          <img :src="movie.image" alt="" class="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "submovie",
  created() {
    this.getMovies();
  },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    getMovies() {
      axios
        .get("https://60df0afcabbdd9001722d1d9.mockapi.io/movies/movielist")
        .then((response) => {
          this.movies = response.data;
        });
    },
  },
};
</script>

<style>
#item1 {
  margin-left: 30px;
}
.item {
  width: 190px;
  height: 230px;
  border-radius: 5px;
  cursor: pointer;
}
.item:hover {
  border: 2px solid white;
}
.overflow-scroll::-webkit-scrollbar {
  width: 100%;
}
.subtit {
  margin-left: 30px;
  cursor: pointer;
}
</style>

<template>
  <VueScrollFixedNavbar>
    <nav class="sticky-top">
      <div class="menu-item" id="dis">
        <a href="/">Disney Hotstar</a>
      </div>
      <Dropdown title="TV" id="tv" :items="tv" />
      <Dropdown title="Movies" id="tv" :items="movies" />
      <Dropdown title="Sports" id="tv" :items="sports" />
      <div class="menu-item" id="tv"><a href="#">Premium</a></div>
      <div class="menu-item" id="tv"><a href="#">Disney+News</a></div>
      <div class="kids" id="tv1">Kids</div>
      <div class="search" id="tv2">Search</div>
      <div class="rounded-2">
        <router-link to="/Subscribe"> <h6>SUBSCRIBE</h6></router-link>
      </div>
      <div class="log"><a href="#">Login</a></div>
    </nav>
  </VueScrollFixedNavbar>
</template>
<script>
import Dropdown from "./Dropdown";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      tv: [
        {
          title: "Vijay super",
          link: "#",
        },
        {
          title: "Hotstar Special",
          link: "#",
        },
        {
          title: "Quix",
          link: "#",
        },
        {
          title: "Star Jalsha",
          link: "#",
        },
        {
          title: "StarPlus",
          link: "#",
        },
        {
          title: "Star Bharat",
          link: "#",
        },
        {
          title: "Star sports",
          link: "#",
        },
        {
          title: "Star Jalsha",
          link: "#",
        },
      ],

      movies: [
        {
          title: "Tamil",
          link: "#",
        },
        {
          title: "Telugu",
          link: "#",
        },
        {
          title: "Malayalam",
          link: "#",
        },
        {
          title: "Hindi",
          link: "#",
        },
        {
          title: "English",
          link: "#",
        },
        {
          title: "Marathi",
          link: "#",
        },
      ],
      sports: [
        {
          title: "Hockey",
          link: "#",
        },
        {
          title: "Cricket",
          link: "#",
        },
        {
          title: "Tennis",
          link: "#",
        },
        {
          title: "Volley Ball",
          link: "#",
        },
        {
          title: "FootBall",
          link: "#",
        },
        {
          title: "Golf",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style>
#dis {
  margin: 0px 5px 0px 20px;
}
nav {
  display: flex;
  align-items: center;
  width: 100%;
}
nav .menu-item {
  padding: 20px 12px;
  position: relative;
  display: flex;
}
nav .menu-item a {
  color: white;
  text-decoration: none;
}
h6 {
  font-size: 1rem;
  color: white;
}
.log a {
  float: right;
  color: white;
  text-decoration: none;
  margin-left: 20px;
}
.rounded-2 {
  padding: 7px;
  background: #1f50f1;
  color: white;
  border: 1px solid #1f50f1;
  margin-left: 80px;
}
.search {
  width: 190px;
  border-bottom: 1px solid white;
  margin: 0px 10px 0px 120px;
}

#tv1 {
  color: orange;
  font-family: cursive;
  font-size: bolder;
}
VueScrollFixedNavbar {
  background-color: black;
  width: 100%;
  height: 80px;
}
@media (min-width: 100px) and (max-width: 335px) {
  .search {
    display: none;
  }
  #tv {
    display: none;
  }
  #tv1 {
    display: none;
  }
  #tv2 {
    display: none;
  }
  .rounded-2 {
    border-radius: 0.25rem !important;
    float: right;
    font-size: 10px;
    float: inline-end;
    padding: 1px;
  }
  nav .menu-item {
    padding: 20px 0px;
    position: relative;
    display: flex;
  }
  #dis {
    font-size: 11px;
  }
  .log {
    display: none;
  }
}
@media (min-width: 335px) and (max-width: 500px) {
  .search {
    display: none;
  }
  #tv {
    display: none;
  }
  #tv1 {
    display: none;
  }
  .rounded-2 {
    border-radius: 0.25rem !important;
    float: inline-end;
    padding: 3px;
  }
  #dis {
    font-size: 14px;
  }
  .log {
    display: none;
  }
  nav .menu-item {
    padding: 20px 0px;
    position: relative;
    display: flex;
  }
  #tv2 {
    display: none;
  }
}
@media (min-width: 500px) and (max-width: 700px) {
  #tv {
    display: none;
  }
  #tv1 {
    display: none;
  }

  #dis {
    margin: 0px 10px;
  }
  .rounded-2 {
    margin: 0px 0px 0px 120px;
  }
  .log {
    float: inline-end;
  }
  #tv2 {
    display: none;
  }
}
@media (min-width: 420px) and (max-width: 500px) {
  .rounded-2 {
    margin-right: 90px;
  }
  #tv2 {
    display: none;
  }
}
@media (min-width: 701px) and (max-width: 930px) {
  #tv {
    display: none;
  }
  #tv1 {
    display: none;
  }
  .rounded-2 {
    border-radius: 0.25rem !important;
    margin: 0px 5px 0px 320px;
    padding: 7px;
  }
  .log {
    margin: 0px 5px 0px 40px;
  }
  #tv2 {
    display: none;
  }
}
@media (min-width: 931px) and (max-width: 1075px) {
  #tv {
    display: none;
  }
  #tv1 {
    display: none;
  }
  .rounded-2 {
    border-radius: 0.25rem !important;
    margin: 0px 5px 0px 400px;
    padding: 7px;
  }
  .log {
    margin: 0px 5px 0px 10px;
  }
  #tv2 {
    display: none;
  }
}
</style>

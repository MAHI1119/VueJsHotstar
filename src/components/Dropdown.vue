<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#FFF"
      ></path>
    </svg>
    <transition name="fade" appear>
      <div calss="sub-menu" v-if="isOpen">
        <div class="sub-menu">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }} </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 4px;
}
nav .menu-item {
  position: absolute;
}
nav .menu-item .sub-menu {
  position: absolute;
  background-color: #001a33;
  top: calc(70% + 10px);
  left: 45%;
  width: max-content;
  border-radius: 5px;
}
</style>

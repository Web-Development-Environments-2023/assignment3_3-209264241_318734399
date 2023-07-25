<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div style="display: flex;">
      <div class="child">
        <RecipePreviewList
          title="Explore this recipes"
          class="RandomRecipes center"
          :key="flop"
        />
        <b-button @click="moreButtom">More</b-button>
      </div>
      <div class="child">
        <router-link
          v-if="!$root.store.username"
          to="/login"
          tag="button"
          class="btn btn-primary"
          >You need to Login to view this</router-link
        >
        <RecipePreviewList
          title="Last Viewed Recipes"
          :class="{
            blur: !$root.store.username,
            center: true,
          }"
          disabled
        ></RecipePreviewList>
      </div>
      <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  data() {
    return {
      flop: true,
    };
  },
  methods: {
    moreButtom() {
      this.flop = !this.flop;
    },
  },
  components: {
    RecipePreviewList,
  },
};
</script>

<style lang="scss" scoped>
.child {
  margin-right: 15%;
}

.child:nth-child(1) {
  flex: 0 0 40%;
}

.child:nth-child(2) {
  flex: 0 0 40%;
}
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
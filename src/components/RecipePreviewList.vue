<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <div v-if="recipes.length == 0">
      <h3>
        No recipes here yet
      </h3>
    </div>
    <div
      v-else-if="
        this.title == 'Explore this recipes' ||
          this.title == 'Last Viewed Recipes'
      "
    >
      <b-row v-for="r in recipes" :key="r.id">
        <b-col>
          <RecipePreview class="recipePreview" :recipe="r" :title="title" />
        </b-col>
      </b-row>
    </div>
    <div v-else>
      <b-row v-for="r in recipes" :key="r.id">
        <b-col v-for="c in r" :key="c.id">
          <RecipePreview class="recipePreview" :recipe="c" :title="title" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    searchQuery: {
      type: String,
      required: false,
    },
    number: {
      type: String,
      required: false,
    },
    cuisine: {
      type: String,
      required: false,
    },
    diet: {
      type: String,
      required: false,
    },
    intolerance: {
      type: String,
      required: false,
    },
    sort: {
      type: String,
      required: false,
    },
    sortDirection: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      if (this.title == "Explore this recipes") {
        await this.randomRecipes();
      } else if (this.title == "Search Results") {
        await this.searchRecipes();
      } else if (this.title == "Family Recipes") {
        await this.familyRecipes();
      } else if (this.title == "My Favorite Recipes") {
        await this.favoriteRecipes();
      } else if (this.title == "My Recipes") {
        await this.myRecipes();
      } else if (this.title == "Last Viewed Recipes") {
        await this.myHistory();
      }
    },
    async randomRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random"
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async familyRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/family"
        );

        // console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);

        let res = [];
        const chunkSize = 2;
        while (this.recipes.length > 0) {
          const chunk = this.recipes.splice(0, chunkSize);
          res.push(chunk);
        }
        // console.log(res);
        this.recipes = res;
      } catch (error) {
        console.log(error);
      }
    },
    async favoriteRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/favorites"
        );

        console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);

        let res = [];
        const chunkSize = 3;
        while (this.recipes.length > 0) {
          const chunk = this.recipes.splice(0, chunkSize);
          res.push(chunk);
        }
        // console.log(res);
        this.recipes = res;
      } catch (error) {
        console.log(error);
      }
    },
    async myRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/addRecipe"
        );
        console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
        let res = [];
        const chunkSize = 3;
        while (this.recipes.length > 0) {
          const chunk = this.recipes.splice(0, chunkSize);
          res.push(chunk);
        }
        // console.log(res);
        this.recipes = res;
      } catch (error) {
        console.log(error);
      }
    },
    async myHistory() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/history"
        );
        // console.log(response);
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async searchRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +
            "/recipes/search" +
            "?query=" +
            this.searchQuery +
            "&number=" +
            this.number +
            "&cuisine=" +
            this.cuisine +
            "&diet=" +
            this.diet +
            "&intolerance=" +
            this.intolerance +
            "&sort=" +
            this.sort +
            "&sortDirection=" +
            this.sortDirection
        );

        // console.log(response);
        // console.log(response.data.results);
        const recipes = response.data.results;
        // console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);

        let res = [];
        const chunkSize = 3;
        while (this.recipes.length > 0) {
          const chunk = this.recipes.splice(0, chunkSize);
          res.push(chunk);
        }
        // console.log(res);
        this.recipes = res;
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
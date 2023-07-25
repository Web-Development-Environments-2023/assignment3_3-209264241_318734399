<template>
  <div id="pre">
    <div v-if="$root.store.username && !isNaN(recipe.aggregateLikes)">
      <div v-if="favorite == 0">
        <img
          @click="AddToFavorites"
          width="35"
          height="35"
          src="https://icon-library.com/images/favorite-icon-png/favorite-icon-png-1.jpg"
        />
      </div>
      <div v-else>
        <img
          width="40"
          height="40"
          src="https://icon-library.com/images/favorite-icon/favorite-icon-1.jpg"
        />
      </div>
    </div>
    <!-- add here -->
    <router-link
      :to="{ name: this.to, params: { recipeId: recipe.id } }"
      class="recipe-preview"
    >
      <div class="recipe-body">
        <img :src="recipe.image" class="recipe-image" />
      </div>
      <div class="recipe-footer">
        <div v-if="history == 0" style="color:green;">
          <div :title="recipe.title" class="recipe-title">
            {{ recipe.title }}
          </div>
        </div>
        <div v-else style="color:grey;">
          <div :title="recipe.title" class="recipe-title">
            {{ recipe.title }}
          </div>
        </div>
        <ul class="recipe-overview">
          <li>{{ recipe.readyInMinutes }} minutes</li>
          <li v-if="!isNaN(recipe.aggregateLikes)">
            {{ recipe.aggregateLikes }} likes
          </li>
          <img
            v-if="recipe.vegan"
            width="50"
            height="50"
            src="https://png.monster/wp-content/uploads/2022/03/png.monster-25.png"
          />
          <img
            v-if="recipe.vegetarian"
            width="50"
            height="50"
            src="https://cdn0.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_45--2-512.png"
          />
          <img
            v-if="recipe.glutenFree"
            width="50"
            height="50"
            src="https://cdn-icons-png.flaticon.com/512/1488/1488167.png"
          />
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorite: 0,
      history: "blue",
      to: "recipe",
    };
  },
  mounted() {
    
    if (this.$root.store.username) {
      
      this.inFavorites();
      if (this.title != "Family Recipes" && this.title != "My Recipes") {
        this.inHistory();
      }
    }

    if (this.title == "Family Recipes") {
      this.to = "view_family";
    } else if (this.title == "My Recipes") {
      this.to = "view_my_recipes";
    }
  },
  methods: {
    async inHistory() {
      // check if in history
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +
            "/users/inHistory" +
            "?recipeId=" +
            this.recipe.id
        );
        if (typeof response === 'undefined') {
          return;
        }
        this.history = response.data[0]["COUNT(*)"];
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    async inFavorites() {
      // check if in favorites
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +
          "/users/inFavorites?recipeId=" + 
            this.recipe.id
        );   
        this.favorite = response.data[0]["COUNT(*)"];
        
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    async AddToFavorites() {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipeId: this.recipe.id,
          }
        );
        this.favorite = 1;
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#pre {
  border-radius: 5%;
  border-style: groove;
}
.recipe-preview {
  display: inline-block;
  width: 300px;
  height: 200px;
  position: relative;
  margin: 10px 10px;
  color: blue;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: 98%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>
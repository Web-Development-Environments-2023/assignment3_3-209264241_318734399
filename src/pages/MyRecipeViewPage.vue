<<<<<<< HEAD
=======
<!-- <template>
    <div class="container">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1>{{ recipe.title }}</h1>
          <img :src="recipe.image" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped"> -->
              <!-- <div class="wrapped"> -->
            <!-- Popularity: {{ recipe.popularity }}
            </div>
              <div class="mb-3">
                <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              </div>
              Ingredients for {{ recipe.servings }} servings:
              <ul>
                <li
                  v-for="r in recipe.extendedIngredients.split(',')"
                  :key="index + '_' + r.id"
                >
                  {{ r }}
                </li>
              </ul>
            </div>
            <div class="wrapped">
              Instructions:
              <ol> -->
                <!-- {{
                  recipe._instructions
                }} -->
                <!-- <li v-for="s in recipe.instructions.split(',')" :key="s.number">
                  {{ s }}
                </li>
              </ol>
            </div>
          </div>
        </div> -->
        <!-- <pre>
        {{ $route.params }}
        {{ recipe }}
      </pre
        > -->
      <!-- </div>
    </div>
  </template> -->
>>>>>>> c414e86115dd7218217d03aad816b5bdc44f6594
  <template>
    <div class="container">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1>{{ recipe.title }}</h1>
          <img :src="recipe.image" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
              <div class="mb-3">
                <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              </div>
              Ingredients for {{ recipe.servings }} servings:
              <ul>
                <li v-for="r in recipe.extendedIngredients.split(',')" :key="index + '_' + r.id">
                  {{ r }}
                </li>
              </ul>
            </div>
            <div class="wrapped">
              Instructions:
              <ol>
                <li v-for="s in recipe.instructions.split(',')" :key="s.number">
                  {{ s }}
                </li>
              </ol>
            </div>
            <div class="wrapped">
              Popularity: {{ recipe.popularity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipe: null,
      };
    },
    async created() {
      try {
        let response;
        try {
          response = await this.axios.get(
            this.$root.store.server_domain +
              "/users/recipes/info?recipeId=" +
              this.$route.params.recipeId
            
          );
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
  
        let {
          id,
          title,
          readyInMinutes,
          image,
          popularity,
          vegan,
          vegetarian,
          glutenFree,
          extendedIngredients,
          instructions,
          servings,
        } = response.data[0];
  
        let _recipe = {
          id,
          title,
          readyInMinutes,
          image,
          popularity,
          vegan,
          vegetarian,
          glutenFree,
          extendedIngredients,
          instructions,
          servings,
        };
  
        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
  }
  .wrapped {
    width: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  </style>
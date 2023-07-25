<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <br />
    <h3>Search by recipe\dish:</h3>
    <b-form-input v-model="text" placeholder="Enter your search"></b-form-input>
    <div v-if="$root.store.username">
      Last search: {{ $root.store.lastSearch }}
    </div>
    <!-- <div class="mt-2">Value: {{ text }}</div> -->
    <br />
    <b-form-select
      v-model="selected_size"
      :options="options_size"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <b-form-select
      v-model="selected_sort"
      :options="options_sort"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>
    <br />
    <b-form-select
      v-model="selected_cuisines"
      :options="cuisines"
    ></b-form-select>
    <br />
    <b-form-select v-model="selected_diets" :options="diets"></b-form-select>
    <br />
    <b-form-select
      v-model="selected_intolerances"
      :options="intolerances"
    ></b-form-select>
    <br />
    <br />
    <b-button variant="primary" @click="searchButtom">Search</b-button>
    <br />
    <br />
    <div v-if="$root.store.username || flop > 0">
      <RecipePreviewList
        title="Search Results"
        :blur="!$root.store.username"
        :key="flop"
        :searchQuery="$root.store.lastSearch"
        :number="selected_size"
        :cuisine="selected_cuisines"
        :diet="selected_diets"
        :intolerance="selected_intolerances"
        :sort="selected_sort"
        :sortDirection="sortDirection"
      />
    </div>
    <br />
    <br />
    <!-- Selected: <strong>{{ selected }}</strong> -->
  </div>
</template>

<script>
import cuisines from "../assets/cuisines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  data() {
    return {
      text: "",
      flop: 0,
      sortDirection: "desc",
      selected_size: "5",
      options_size: [
        { item: "5", name: "5 search results" },
        { item: "10", name: "10 search results" },
        { item: "15", name: "15 search results" },
      ],
      selected_sort: "popularity",
      options_sort: [
        { item: "popularity", name: "sort by popularity" },
        { item: "time", name: "sort by cooking time" },
      ],
      cuisines: [{ value: null, text: "", disabled: true }],
      selected_cuisines: "Any cuisine",
      diets: [{ value: null, text: "", disabled: true }],
      selected_diets: "Any diet",
      intolerances: [{ value: null, text: "", disabled: true }],
      selected_intolerances: "Any intolerance",
    };
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.diets.push(...diets);
    this.intolerances.push(...intolerances);
  },
  methods: {
    searchButtom() {
      // console.log(this.text);
      if (this.text == "") {
        this.flop = 0;
      } else {
        this.flop += 1;
      }
      localStorage.setItem("lastSearch", this.text);
      this.$root.store.lastSearch = this.text;

      if (this.selected_sort == "popularity") {
        this.sortDirection = "desc";
      } else {
        this.sortDirection = "asc";
      }
    },
  },
  components: {
    RecipePreviewList,
  },
};
</script>
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66bfa58b"],{"24b0":function(e,t,i){"use strict";i("dcf9")},c1b4:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")])]),e._v(" Ingredients for "+e._s(e.recipe.servings)+" servings: "),t("ul",e._l(e.recipe.extendedIngredients.split(","),(function(i){return t("li",{key:e.index+"_"+i.id},[e._v(" "+e._s(i)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe.instructions.split(","),(function(i){return t("li",{key:i.number},[e._v(" "+e._s(i)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Popularity: "+e._s(e.recipe.popularity)+" ")])])])]):e._e()])},r=[],n={data(){return{recipe:null}},async created(){try{let t;try{t=await this.axios.get(this.$root.store.server_domain+"/users/recipes/info?recipeId="+this.$route.params.recipeId),200!==t.status&&this.$router.replace("/NotFound")}catch(e){return console.log("error.response.status",e.response.status),void this.$router.replace("/NotFound")}let{id:i,title:s,readyInMinutes:r,image:n,popularity:a,vegan:c,vegetarian:d,glutenFree:o,extendedIngredients:u,instructions:p,servings:l}=t.data[0],v={id:i,title:s,readyInMinutes:r,image:n,popularity:a,vegan:c,vegetarian:d,glutenFree:o,extendedIngredients:u,instructions:p,servings:l};this.recipe=v}catch(e){console.log(e)}}},a=n,c=(i("24b0"),i("2877")),d=Object(c["a"])(a,s,r,!1,null,"fdaef0f4",null);t["default"]=d.exports},dcf9:function(e,t,i){}}]);
//# sourceMappingURL=chunk-66bfa58b.b17e917e.js.map
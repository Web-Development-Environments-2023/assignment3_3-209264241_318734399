(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3f6cb12"],{"0e44":function(e,t,r){},"13d5":function(e,t,r){"use strict";var s=r("23e7"),i=r("d58f").left,n=r("a640"),a=r("2d00"),o=r("605d"),c=!o&&a>79&&a<83,u=c||!n("reduce");s({target:"Array",proto:!0,forced:u},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},"4e6d":function(e,t,r){"use strict";r("0e44")},"605d":function(e,t,r){(function(t){var s=r("c6b6");e.exports="undefined"!=typeof t&&"process"==s(t)}).call(this,r("4362"))},6619:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[e.recipe?t("div",[t("div",{staticClass:"recipe-header mt-3 mb-4"},[t("h1",[e._v(e._s(e.recipe.title))]),t("img",{staticClass:"center",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-body"},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"wrapped"},[t("div",{staticClass:"mb-3"},[t("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])]),e._v(" Ingredients for "+e._s(e.recipe.servings)+" servings: "),t("ul",e._l(e.recipe.extendedIngredients,(function(r,s){return t("li",{key:s+"_"+r.id},[e._v(" "+e._s(r.original)+" ")])})),0)]),t("div",{staticClass:"wrapped"},[e._v(" Instructions: "),t("ol",e._l(e.recipe._instructions,(function(r){return t("li",{key:r.number},[e._v(" "+e._s(r.step)+" ")])})),0)])])])]):e._e()])},i=[],n=(r("13d5"),{data(){return{recipe:null}},async created(){if(this.$root.store.username)try{const e=await this.axios.post(this.$root.store.server_domain+"/users/history",{recipeId:this.$route.params.recipeId});console.log(e)}catch(e){console.log(e.response),this.form.submitError=e.response.data.message}try{let e;try{e=await this.axios.get(this.$root.store.server_domain+"/recipes/info?recipeId="+this.$route.params.recipeId),200!==e.status&&this.$router.replace("/NotFound")}catch(t){return console.log("error.response.status",t.response.status),void this.$router.replace("/NotFound")}let{id:r,title:s,readyInMinutes:i,image:n,aggregateLikes:a,vegan:o,vegetarian:c,glutenFree:u,extendedIngredients:d,instructions:l,analyzedInstructions:p,servings:v}=e.data,f=p.map(e=>(e.steps[0].step=e.name+e.steps[0].step,e.steps)).reduce((e,t)=>[...e,...t],[]),g={id:r,title:s,readyInMinutes:i,image:n,aggregateLikes:a,vegan:o,vegetarian:c,glutenFree:u,extendedIngredients:d,instructions:l,_instructions:f,analyzedInstructions:p,servings:v};this.recipe=g}catch(t){console.log(t)}}}),a=n,o=(r("4e6d"),r("2877")),c=Object(o["a"])(a,s,i,!1,null,"77f86682",null);t["default"]=c.exports},a640:function(e,t,r){"use strict";var s=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&s((function(){r.call(null,t||function(){return 1},1)}))}},d58f:function(e,t,r){var s=r("59ed"),i=r("7b0b"),n=r("44ad"),a=r("07fa"),o=TypeError,c=function(e){return function(t,r,c,u){s(r);var d=i(t),l=n(d),p=a(d),v=e?p-1:0,f=e?-1:1;if(c<2)while(1){if(v in l){u=l[v],v+=f;break}if(v+=f,e?v<0:p<=v)throw o("Reduce of empty array with no initial value")}for(;e?v>=0:p>v;v+=f)v in l&&(u=r(u,l[v],v,d));return u}};e.exports={left:c(!1),right:c(!0)}}}]);
//# sourceMappingURL=chunk-b3f6cb12.a78bde54.js.map
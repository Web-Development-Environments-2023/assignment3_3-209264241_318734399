(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],r=!0,s=1;s<i.length;s++){var o=i[s];0!==n[o]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=i[0]))}return e}var r={},s={app:0},n={app:0},a=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-24d9f954":"b371de85","chunk-2d0c20b8":"b7731123","chunk-2d0c5220":"8d3a362a","chunk-2d0e6711":"0c247953","chunk-2d23822a":"4160c6bc","chunk-34468758":"34a296f6","chunk-51f4424a":"a85cb540","chunk-636ae285":"158ac887","chunk-66bfa58b":"b17e917e","chunk-746908e5":"3d93e679","chunk-b3f6cb12":"a78bde54"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],i={"chunk-24d9f954":1,"chunk-34468758":1,"chunk-51f4424a":1,"chunk-636ae285":1,"chunk-66bfa58b":1,"chunk-b3f6cb12":1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise((function(t,i){for(var r="css/"+({}[e]||e)+"."+{"chunk-24d9f954":"87b58be8","chunk-2d0c20b8":"31d6cfe0","chunk-2d0c5220":"31d6cfe0","chunk-2d0e6711":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-34468758":"f46675f7","chunk-51f4424a":"d86b9029","chunk-636ae285":"8835215d","chunk-66bfa58b":"62b3e2c5","chunk-746908e5":"31d6cfe0","chunk-b3f6cb12":"bffaf659"}[e]+".css",n=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var l=a[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===n)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[e],p.parentNode.removeChild(p),i(a)},p.href=n;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){s[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,i){r=n[e]=[t,i]}));t.push(r[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var i=n[e];if(0!==i){if(i){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,i[1](d)}n[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(i,r,function(t){return e[t]}.bind(null,r));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2c84":function(e,t,i){"use strict";i("4bc3")},"4bc3":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var r=i("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("b-navbar",{staticClass:"bg-warning text-white",attrs:{toggleable:"lg",type:"light",variant:"info",id:"navb"}},[t("b-navbar-brand",{attrs:{id:"nav-brand",href:"#",disabled:""}},[e._v("YumTum")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"main"}}},[e._v("Main")]),t("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?t("b-nav-item-dropdown",{scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v("Personal")])]},proxy:!0}],null,!1,1842851784)},[t("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("Favorites recipes")]),t("b-dropdown-item",{attrs:{to:{name:"my_recipes"}}},[e._v("My recipes")]),t("b-dropdown-item",{attrs:{to:{name:"family"}}},[e._v("Family recipes")])],1):e._e(),e.$root.store.username?t("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.create",modifiers:{create:!0}}]},[e._v("Create Recipe")]):e._e()],1),t("b-modal",{attrs:{id:"create",title:"Create Recipe"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[t("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"title","label-for":"title-input","invalid-feedback":"Title is required",state:e.titleState}},[t("b-form-input",{attrs:{id:"title-input",state:e.titleState,required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),t("b-form-group",{attrs:{label:"ready in X minutes","label-for":"readyInMinutes-input","invalid-feedback":"readyInMinutes is required",state:e.readyInMinutesState}},[t("b-form-input",{attrs:{id:"readyInMinutes-input",state:e.readyInMinutesState,required:""},model:{value:e.readyInMinutes,callback:function(t){e.readyInMinutes=t},expression:"readyInMinutes"}})],1),t("b-form-group",{attrs:{label:"image url","label-for":"image-input","invalid-feedback":"image is required",state:e.imageState}},[t("b-form-input",{attrs:{id:"image-input",state:e.imageState,required:""},model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1),t("b-form-group",{attrs:{label:"popularity","label-for":"popularity-input","invalid-feedback":"popularity is required",state:e.popularityState}},[t("b-form-input",{attrs:{id:"popularity-input",state:e.popularityState,required:""},model:{value:e.popularity,callback:function(t){e.popularity=t},expression:"popularity"}})],1),t("b-form-group",{attrs:{label:"vegan ?","label-for":"vegan-input"}},[t("b-form-checkbox",{attrs:{id:"vegan-input",value:"1","unchecked-value":"0"},model:{value:e.vegan,callback:function(t){e.vegan=t},expression:"vegan"}})],1),t("b-form-group",{attrs:{label:"vegetarian ?","label-for":"vegetarian-input"}},[t("b-form-checkbox",{attrs:{id:"vegetarian-input",value:"1","unchecked-value":"0"},model:{value:e.vegetarian,callback:function(t){e.vegetarian=t},expression:"vegetarian"}})],1),t("b-form-group",{attrs:{label:"gluten free ?","label-for":"glutenFree-input"}},[t("b-form-checkbox",{attrs:{id:"glutenFree-input",value:"1","unchecked-value":"0"},model:{value:e.glutenFree,callback:function(t){e.glutenFree=t},expression:"glutenFree"}})],1),t("b-form-group",{attrs:{label:"ingredients","label-for":"extendedIngredients-input","invalid-feedback":"ingredients is required",state:e.extendedIngredientsState}},[t("b-form-textarea",{attrs:{id:"extendedIngredients-input",state:e.extendedIngredientsState,required:""},model:{value:e.extendedIngredients,callback:function(t){e.extendedIngredients=t},expression:"extendedIngredients"}})],1),t("b-form-group",{attrs:{label:"instructions","label-for":"instructions-input","invalid-feedback":"instructions is required",state:e.instructionsState}},[t("b-form-textarea",{attrs:{id:"instructions-input",state:e.instructionsState,required:""},model:{value:e.instructions,callback:function(t){e.instructions=t},expression:"instructions"}})],1),t("b-form-group",{attrs:{label:"servings","label-for":"servings-input","invalid-feedback":"servings is required",state:e.servingsState}},[t("b-form-input",{attrs:{id:"servings-input",state:e.servingsState,required:""},model:{value:e.servings,callback:function(t){e.servings=t},expression:"servings"}})],1)],1)]),e.$root.store.username?t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v(e._s(e.$root.store.username))])]},proxy:!0}])},[t("b-dropdown-item",{on:{click:e.Logout}},[e._v("Logout")])],1)],1):t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v("hello guest")])]},proxy:!0}],null,!1,2653540738)},[t("b-dropdown-item",{attrs:{to:{name:"login"}}},[e._v("Login")]),t("b-dropdown-item",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)],1)],1)],1)],1),t("router-view")],1)},n=[],a=(i("14d9"),{name:"App",data(){return{title:"",titleState:null,readyInMinutes:"",readyInMinutesState:null,image:"",imageState:null,popularity:"",popularityState:null,vegan:"0",veganState:null,vegetarian:"0",vegetarianState:null,glutenFree:"0",glutenFreeState:null,extendedIngredients:"",extendedIngredientsState:null,instructions:"",instructionsState:null,servings:"",servingsState:null}},methods:{checkFormValidity(){const e=this.$refs.form.checkValidity();return this.titleState=e,this.readyInMinutesState=e,this.imageState=e,this.popularityState=e,this.veganState=e,this.vegetarianState=e,this.glutenFreeState=e,this.extendedIngredientsState=e,this.instructionsState=e,this.servingsState=e,e},resetModal(){this.titleState=null,this.readyInMinutesState=null,this.imageState=null,this.popularityState=null,this.veganState=null,this.vegetarianState=null,this.glutenFreeState=null,this.extendedIngredientsState=null,this.instructionsState=null,this.servingsState=null,this.title="",this.readyInMinutes="",this.image="",this.popularity="",this.vegan="0",this.vegetarian="0",this.glutenFree="0",this.extendedIngredients="",this.instructions="",this.servings=""},handleOk(e){e.preventDefault(),this.handleSubmit()},async handleSubmit(){if(this.checkFormValidity()){try{await this.axios.post(this.$root.store.server_domain+"/users/addRecipe",{title:this.title,readyInMinutes:this.readyInMinutes,image:this.image,popularity:this.popularity,vegan:this.vegan,vegetarian:this.vegetarian,glutenFree:this.glutenFree,extendedIngredients:this.extendedIngredients,instructions:this.instructions,servings:this.servings})}catch(e){console.log(e.response),this.form.submitError=e.response.data.message}this.$nextTick(()=>{this.$bvModal.hide("create"),this.resetModal()})}},Logout(){this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/").catch(()=>{this.$forceUpdate()})}}}),o=a,c=(i("2c84"),i("2877")),l=Object(c["a"])(o,s,n,!1,null,null,null),u=l.exports,d=i("a7fe"),p=i.n(d),h=i("bc3a"),m=i.n(h),g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"child"},[t("RecipePreviewList",{key:e.flop,staticClass:"RandomRecipes center",attrs:{title:"Explore this recipes"}}),t("b-button",{on:{click:e.moreButtom}},[e._v("More")])],1),t("div",{staticClass:"child"},[e.$root.store.username?e._e():t("router-link",{staticClass:"btn btn-primary",attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")]),t("RecipePreviewList",{class:{blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])])},f=[],v=i("99d8"),b={data(){return{flop:!0}},methods:{moreButtom(){this.flop=!this.flop}},components:{RecipePreviewList:v["a"]}},y=b,k=(i("5ba6"),Object(c["a"])(y,g,f,!1,null,"73fc4fed",null)),S=k.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},w=[],x={},I=Object(c["a"])(x,_,w,!1,null,null,null),R=I.exports;const M=[{path:"/",name:"main",component:S},{path:"/register",name:"register",component:()=>i.e("chunk-51f4424a").then(i.bind(null,"eaff"))},{path:"/login",name:"login",component:()=>i.e("chunk-34468758").then(i.bind(null,"62cc"))},{path:"/search",name:"search",component:()=>i.e("chunk-746908e5").then(i.bind(null,"37906"))},{path:"/personal/family",name:"family",component:()=>i.e("chunk-2d0e6711").then(i.bind(null,"9983"))},{path:"/personal/family/:recipeId",name:"view_family",component:()=>i.e("chunk-24d9f954").then(i.bind(null,"3d05"))},{path:"/personal/recipes",name:"my_recipes",component:()=>i.e("chunk-2d23822a").then(i.bind(null,"fda7"))},{path:"/personal/recipes/:recipeId",name:"view_my_recipes",component:()=>i.e("chunk-66bfa58b").then(i.bind(null,"c1b4"))},{path:"/personal/favorites",name:"favorites",component:()=>i.e("chunk-2d0c20b8").then(i.bind(null,"4941"))},{path:"/create",name:"create",component:()=>i.e("chunk-2d0c5220").then(i.bind(null,"3e91"))},{path:"/recipe/:recipeId",name:"recipe",component:()=>i.e("chunk-b3f6cb12").then(i.bind(null,"6619"))},{path:"/about",name:"about",component:()=>i.e("chunk-636ae285").then(i.bind(null,"478b"))},{path:"*",name:"notFound",component:R}];var C=M,F=i("8c4f"),q=i("1dce"),$=i.n(q),O=(i("f9e3"),i("2dd8"),i("1073")),P=i("cbd0"),j=i("b1fc"),L=i("7049"),T=i("a7e2"),E=i("f9bc"),N=i("44d4"),A=i("cca8"),D=i("51c2"),H=i("498a"),U=i("dbbe"),V=i("3d31"),B=i("a166");m.a.defaults.withCredentials=!0,r["default"].use(F["a"]);const J=new F["a"]({routes:C});[O["a"],P["a"],j["a"],L["a"],T["a"],E["a"],N["a"],A["a"],D["a"],H["a"],U["a"],V["a"],B["a"]].forEach(e=>r["default"].use(e)),r["default"].use($.a),m.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),m.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(p.a,m.a),r["default"].config.productionTip=!1;const Q={server_domain:"https://ronadav.cs.bgu.ac.il",lastSearch:localStorage.lastSearch,username:localStorage.username,async login(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username),localStorage.setItem("lastSearch","no last search"),this.lastSearch="no last search";try{await fetch(this.server_domain+"/setUsername",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})})}catch(t){console.error("Error occurred while setting username:",t)}},logout(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0,localStorage.removeItem("lastSearch"),this.lastSearch="no last search"}};console.log(Q),new r["default"]({router:J,data(){return{store:Q}},methods:{toast(e,t,i=null,r=!1){this.$bvToast.toast(""+t,{title:""+e,toaster:"b-toaster-top-center",variant:i,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:e=>e(u)}).$mount("#app")},"5ba6":function(e,t,i){"use strict";i("ee03")},"5de2":function(e,t,i){},"99d8":function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),0==e.recipes.length?t("div",[t("h3",[e._v(" No recipes here yet ")])]):"Explore this recipes"==this.title||"Last Viewed Recipes"==this.title?t("div",e._l(e.recipes,(function(i){return t("b-row",{key:i.id},[t("b-col",[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:i,title:e.title}})],1)],1)})),1):t("div",e._l(e.recipes,(function(i){return t("b-row",{key:i.id},e._l(i,(function(i){return t("b-col",{key:i.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:i,title:e.title}})],1)})),1)})),1)])},s=[],n=(i("14d9"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"pre"}},[e.$root.store.username&&!isNaN(e.recipe.aggregateLikes)?t("div",[0==e.favorite?t("div",[t("img",{attrs:{width:"35",height:"35",src:"https://icon-library.com/images/favorite-icon-png/favorite-icon-png-1.jpg"},on:{click:e.AddToFavorites}})]):t("div",[t("img",{attrs:{width:"40",height:"40",src:"https://icon-library.com/images/favorite-icon/favorite-icon-1.jpg"}})])]):e._e(),t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:this.to,params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image}})]),t("div",{staticClass:"recipe-footer"},[0==e.history?t("div",{staticStyle:{color:"green"}},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")])]):t("div",{staticStyle:{color:"grey"}},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")])]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),isNaN(e.recipe.aggregateLikes)?e._e():t("li",[e._v(" "+e._s(e.recipe.aggregateLikes)+" likes ")]),e.recipe.vegan?t("img",{attrs:{width:"50",height:"50",src:"https://png.monster/wp-content/uploads/2022/03/png.monster-25.png"}}):e._e(),e.recipe.vegetarian?t("img",{attrs:{width:"50",height:"50",src:"https://cdn0.iconfinder.com/data/icons/eco-food-and-cosmetic-labels/128/Artboard_45--2-512.png"}}):e._e(),e.recipe.glutenFree?t("img",{attrs:{width:"50",height:"50",src:"https://cdn-icons-png.flaticon.com/512/1488/1488167.png"}}):e._e()])])])],1)}),a=[],o={data(){return{favorite:0,history:"blue",to:"recipe"}},mounted(){this.$root.store.username&&(this.inFavorites(),"Family Recipes"!=this.title&&"My Recipes"!=this.title&&this.inHistory()),"Family Recipes"==this.title?this.to="view_family":"My Recipes"==this.title&&(this.to="view_my_recipes")},methods:{async inHistory(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/inHistory?recipeId="+this.recipe.id);if("undefined"===typeof e)return;this.history=e.data[0]["COUNT(*)"]}catch(e){console.log(e.response),this.form.submitError=e.response.data.message}},async inFavorites(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/inFavorites?recipeId="+this.recipe.id);this.favorite=e.data[0]["COUNT(*)"]}catch(e){console.log(e.response),this.form.submitError=e.response.data.message}},async AddToFavorites(){try{await this.axios.post(this.$root.store.server_domain+"/users/favorites",{recipeId:this.recipe.id});this.favorite=1}catch(e){console.log(e.response),this.form.submitError=e.response.data.message}}},props:{recipe:{type:Object,required:!0},title:{type:String,required:!0}}},c=o,l=(i("c75b"),i("2877")),u=Object(l["a"])(c,n,a,!1,null,"276e6bc0",null),d=u.exports,p={name:"RecipePreviewList",components:{RecipePreview:d},props:{title:{type:String,required:!0},searchQuery:{type:String,required:!1},number:{type:String,required:!1},cuisine:{type:String,required:!1},diet:{type:String,required:!1},intolerance:{type:String,required:!1},sort:{type:String,required:!1},sortDirection:{type:String,required:!1}},data(){return{recipes:[]}},mounted(){this.updateRecipes()},methods:{async updateRecipes(){"Explore this recipes"==this.title?await this.randomRecipes():"Search Results"==this.title?await this.searchRecipes():"Family Recipes"==this.title?await this.familyRecipes():"My Favorite Recipes"==this.title?await this.favoriteRecipes():"My Recipes"==this.title?await this.myRecipes():"Last Viewed Recipes"==this.title&&await this.myHistory()},async randomRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/recipes/random"),t=e.data;this.recipes=[],this.recipes.push(...t)}catch(e){console.log(e)}},async familyRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/recipes/family"),t=e.data;this.recipes=[],this.recipes.push(...t);let i=[];const r=2;while(this.recipes.length>0){const e=this.recipes.splice(0,r);i.push(e)}this.recipes=i}catch(e){console.log(e)}},async favoriteRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/favorites");console.log(e);const t=e.data;this.recipes=[],this.recipes.push(...t);let i=[];const r=3;while(this.recipes.length>0){const e=this.recipes.splice(0,r);i.push(e)}this.recipes=i}catch(e){console.log(e)}},async myRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/addRecipe");console.log(e);const t=e.data;this.recipes=[],this.recipes.push(...t);let i=[];const r=3;while(this.recipes.length>0){const e=this.recipes.splice(0,r);i.push(e)}this.recipes=i}catch(e){console.log(e)}},async myHistory(){try{const e=await this.axios.get(this.$root.store.server_domain+"/users/history"),t=e.data;this.recipes=[],this.recipes.push(...t)}catch(e){console.log(e)}},async searchRecipes(){try{const e=await this.axios.get(this.$root.store.server_domain+"/recipes/search?query="+this.searchQuery+"&number="+this.number+"&cuisine="+this.cuisine+"&diet="+this.diet+"&intolerance="+this.intolerance+"&sort="+this.sort+"&sortDirection="+this.sortDirection),t=e.data.results;this.recipes=[],this.recipes.push(...t);let i=[];const r=3;while(this.recipes.length>0){const e=this.recipes.splice(0,r);i.push(e)}this.recipes=i}catch(e){console.log(e)}}}},h=p,m=(i("aa96"),Object(l["a"])(h,r,s,!1,null,"affde31a",null));t["a"]=m.exports},aa96:function(e,t,i){"use strict";i("5de2")},c75b:function(e,t,i){"use strict";i("c9cf")},c9cf:function(e,t,i){},ee03:function(e,t,i){}});
//# sourceMappingURL=app.60ef7473.js.map
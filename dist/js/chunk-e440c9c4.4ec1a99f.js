(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e440c9c4"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("71d9"),n=i("80d2"),a=Object(n["g"])("v-toolbar__title"),c=Object(n["g"])("v-toolbar__items");o["a"]},"3a2f9":function(t,e,i){"use strict";i("a9e3");var o=i("ade3"),n=(i("9734"),i("4ad4")),a=i("a9ad"),c=i("16b7"),s=i("b848"),r=i("75eb"),d=i("f573"),l=i("f2e7"),u=i("80d2"),h=i("d9bd"),p=i("58df");e["a"]=Object(p["a"])(a["a"],c["a"],s["a"],r["a"],d["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||o?a=n+e.width/2-i.width/2:(this.left||this.right)&&(a=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,o=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=o+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=o+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(n+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["f"])(this.maxWidth),minWidth:Object(u["f"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["n"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===u["q"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o["a"])(t,this.contentClass,!0),Object(o["a"])(t,"menuable__content__active",this.isActive),Object(o["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"52f4":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"deferred-backlog"},[i("v-toolbar",{attrs:{color:"green"}},[i("v-toolbar-title",{staticStyle:{color:"white"}},[t._v("Deferred Backlog")]),i("v-spacer"),i("v-text-field",{staticClass:" d-none d-sm-flex",staticStyle:{"margin-right":"10px"},attrs:{solo:"",flat:"","hide-details":"",clearable:"","prepend-inner-icon":"mdi-magnify",label:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),i("v-select",{staticStyle:{"margin-right":"10px",width:"10px"},attrs:{items:t.sites,label:"Sites","item-text":"siteName","item-value":"siteid",solo:"",flat:"","hide-details":""},model:{value:t.activeSite,callback:function(e){t.activeSite=e},expression:"activeSite"}}),i("v-divider",{attrs:{vertical:""}}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""},on:{click:t.addNewClicked}},o),[i("v-icon",[t._v("mdi-database-plus")])],1)]}}])},[i("span",[t._v("Add New Item")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""}},o),[i("v-icon",[t._v("mdi-delete-alert")])],1)]}}])},[i("span",[t._v("Delete Selected Items")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""}},o),[i("v-icon",[t._v("mdi-content-save")])],1)]}}])},[i("span",[t._v("Save Changes")])]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""}},o),[i("v-icon",[t._v("mdi-refresh")])],1)]}}])},[i("span",[t._v("Refresh Data")])]),i("v-divider",{attrs:{vertical:""}}),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-btn",t._g({attrs:{icon:""},on:{click:function(e){t.selectMode=!t.selectMode}}},o),[i("v-icon",[t._v(t._s(t.selectMode?"mdi-checkbox-multiple-marked-outline":"mdi-checkbox-multiple-blank-outline"))])],1)]}}])},[i("span",[t._v(t._s(t.selectMode?"Turn Off Multi-Select Mode":"Turn On Multi-Select Mode"))])]),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-dots-vertical")])],1)],1),i("div",{staticStyle:{padding:"10px","overflow-y":"auto"}},[i("BackLogGrid",{attrs:{"read-only":t.readOnly,filter:t.filter,"select-mode":t.selectMode}})],1),i("BackLogEntry",{ref:"backlogEntry"})],1)},n=[],a=(i("d81d"),i("d3b7"),i("ddb0"),i("5530")),c=i("2909"),s=i("2f62"),r={name:"DeferredBacklog",components:{BackLogGrid:function(){return i.e("chunk-a6b920be").then(i.bind(null,"0ca4"))},BackLogEntry:function(){return i.e("chunk-07837900").then(i.bind(null,"1a38"))}},data:function(){return{activeSite:null,selectMode:!1,readOnly:!1,filter:null,panel:[],items:[{siteId:1,siteName:"Asslar",products:[{productId:1,productName:"Optics"},{productId:2,productName:"Optics 2"},{productId:3,productName:"Optics 3"},{productId:4,productName:"Optics 4"}]},{siteId:2,siteName:"Batam",products:[{productId:1,productName:"New Product"},{productId:2,productName:"Product 2"},{productId:3,productName:"Product 3"},{productId:4,productName:"Product 4"}]},{siteId:3,siteName:"Manila",products:[{productId:1,productName:"New Product"},{productId:2,productName:"Product 2"},{productId:3,productName:"Product 3"},{productId:4,productName:"Product 4"}]},{siteId:4,siteName:"Montreal",products:[{productId:1,productName:"New Product"},{productId:2,productName:"Product 2"},{productId:3,productName:"Product 3"},{productId:4,productName:"Product 4"}]}]}},methods:{addNewClicked:function(t,e){console.log(t,e),this.$refs.backlogEntry.toggleDialog()},all:function(){this.panel=Object(c["a"])(Array(this.items).keys()).map((function(t,e){return e}))},none:function(){this.panel=[]}},computed:Object(a["a"])({},Object(s["b"])({sites:"getSites"}))},d=r,l=(i("aea7"),i("2877")),u=i("6544"),h=i.n(u),p=i("8336"),f=i("b0af"),v=i("ce7e"),m=i("132d"),b=i("b974"),g=i("2fa4"),y=i("8654"),_=i("71d9"),k=i("2a7f"),I=i("3a2f9"),N=Object(l["a"])(d,o,n,!1,null,null,null);e["default"]=N.exports;h()(N,{VBtn:p["a"],VCard:f["a"],VDivider:v["a"],VIcon:m["a"],VSelect:b["a"],VSpacer:g["a"],VTextField:y["a"],VToolbar:_["a"],VToolbarTitle:k["a"],VTooltip:I["a"]})},9734:function(t,e,i){},aea7:function(t,e,i){"use strict";var o=i("c825"),n=i.n(o);n.a},c825:function(t,e,i){}}]);
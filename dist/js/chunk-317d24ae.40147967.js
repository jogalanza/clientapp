(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-317d24ae"],{"2a7f":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var c=o("71d9"),a=o("80d2"),n=Object(a["g"])("v-toolbar__title"),r=Object(a["g"])("v-toolbar__items");c["a"]},"5e8f":function(e,t,o){"use strict";var c=o("c28b1"),a=o.n(c);a.a},a9be:function(e,t,o){"use strict";o.r(t);var c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"stb-wow"},[o("v-toolbar",{attrs:{color:"green"}},[o("v-toolbar-title",{staticStyle:{color:"white"}},[e._v("Site To Business: Week over Week")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-file-download")])],1),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[e._v("mdi-dots-vertical")])],1)],1),o("div",{staticStyle:{padding:"10px"}},[o("NestedGridCompare",{ref:"stbwow",attrs:{id:"stbwow",items:e.items,fields:e.fields,"field-width-calc":e.colwidthCalc,"show-child-header":!1},on:{"defbacklog-clicked":e.defbacklogClicked}})],1),o("BackLogDialog",{ref:"backlogDialog"})],1)},a=[],n=(o("d3b7"),o("5530")),r=o("2f62"),i=o("e09c"),l={name:"BusinessToSitePriorWeek",components:{NestedGridCompare:function(){return o.e("chunk-5d5991a2").then(o.bind(null,"1897"))},BackLogDialog:function(){return o.e("chunk-6668ead4").then(o.bind(null,"36e7"))}},mixins:[i["a"]],data:function(){return{items:[{id:1,col1:"Asslar",currency:"USD",actSales:[5e3,-3e3],backlogCRD:[5e3,-3e3],contractRelease:null,bookShip:[5e3,-3e3],demandForecast:[5e3,-3e3],defBacklog:[-1500,-3400],salesForecast:[5e3,-3e3],lastQtr:[5e3,-2500],lastYr:[5e3,-1500],vseq:[5e3,1500],vyoy:[1e3,750],childAPI:"/startbusiness/root/1"},{id:2,col1:"Batam",currency:"USD",actSales:[5e3,-3e3],backlogCRD:[5e3,-3e3],contractRelease:null,bookShip:[5e3,-3e3],demandForecast:[5e3,-3e3],defBacklog:[-1500,-3400],salesForecast:[5e3,-3e3],lastQtr:[5e3,-2500],lastYr:[5e3,-1500],vseq:[5e3,1500],vyoy:[1e3,750],childAPI:"/startbusiness/root/2"}]}},methods:{defbacklogClicked:function(e,t){console.log(e,t),this.$refs.backlogDialog.toggleDialog()},colwidthCalc:function(e){return{width:"col1"===e?"280px":"actions"===e?"32px":"100px"}}},computed:Object(n["a"])({},Object(r["b"])({fields:"getPriorWeekFields"})),mounted:function(){this.$hub.sayhello(),this.$eventHub.$on("defbacklog-clicked",this.defbacklogClicked)},beforeDestroy:function(){this.$eventHub.$off("defbacklog-clicked")},updated:function(){}},s=l,u=(o("5e8f"),o("2877")),d=o("6544"),f=o.n(d),b=o("8336"),m=o("b0af"),h=o("132d"),v=o("2fa4"),g=o("71d9"),k=o("2a7f"),w=Object(u["a"])(s,c,a,!1,null,"14cd4d31",null);t["default"]=w.exports;f()(w,{VBtn:b["a"],VCard:m["a"],VIcon:h["a"],VSpacer:v["a"],VToolbar:g["a"],VToolbarTitle:k["a"]})},c28b1:function(e,t,o){},e09c:function(e,t,o){"use strict";o("4160"),o("a9e3"),o("159b");t["a"]={methods:{calcItems:function(e){var t=0;return e&&this.items&&this.items.forEach((function(o,c){o[e]&&Number(o[e])&&(t+=Number(o[e]))})),this.formatNumber(t)},calcItemsPlus:function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;return e&&t&&t.forEach((function(t,o){t[e]&&Number(t[e])&&(c+=Number(t[e]))})),o?this.formatNumber(c):c},calcItemsArrayPlus:function(e,t,o){var c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0;return e&&t&&t.forEach((function(t,c){t[e]&&o<t[e].length&&Number(t[e][o])&&(a+=Number(t[e][o]))})),c?this.formatNumber(a):a},sumRowItems:function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;return e&&t&&e.forEach((function(e,o){t.item[e]&&Number(t.item[e])&&(c+=Number(t.item[e]))})),o?this.formatNumber(c):c},colwidthCalc:function(e){return console.log("mixin.colwidthCalc"),{width:"col1"===e?"280px":"actions"===e?"32px":"70px"}},numberValStyle:function(e){return e&&Number(e)&&Number(e)<0?"row-text row-text-negative":"row-text"},calcVariance:function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;return c=this.calcReverse?(null===t?0:t)-(null===e?0:e):(null===e?0:e)-(null===t?0:t),o?this.formatNumber(c):c}}}}}]);
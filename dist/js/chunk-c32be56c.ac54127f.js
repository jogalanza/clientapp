(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c32be56c"],{"2a7f":function(t,e,o){"use strict";o.d(e,"a",(function(){return c}));var n=o("71d9"),a=o("80d2"),c=Object(a["g"])("v-toolbar__title"),i=Object(a["g"])("v-toolbar__items");n["a"]},"9d6b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"definitions-training"},[o("v-toolbar",{attrs:{color:"green"}},[o("v-toolbar-title",{staticStyle:{color:"white"}},[t._v("Definitions and Training")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-dots-vertical")])],1)],1),o("div",{staticStyle:{padding:"10px"}})],1)},a=[],c=o("5530"),i=o("2f62"),r=o("e09c"),l={name:"DefinitionsTraining",components:{},mixins:[r["a"]],data:function(){return{items:[{id:1,col1:"HFM 2020-02 Feb",currency:"USD",actSales:500,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:-12e3,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123},{id:2,col1:"HFM 2020-01 Jan",currency:"USD",actSales:51e3,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123}]}},methods:{defbacklogClicked:function(t,e){console.log(t,e),this.$refs.backlogDialog.toggleDialog()},colwidthCalc:function(t){return{width:"col1"===t?"280px":"actions"===t?"32px":"100px"}}},computed:Object(c["a"])({},Object(i["b"])({fields:"getFXRateFields"})),mounted:function(){this.$hub.sayhello(),this.$eventHub.$on("defbacklog-clicked",this.defbacklogClicked)},beforeDestroy:function(){this.$eventHub.$off("defbacklog-clicked")},updated:function(){}},s=l,u=(o("ca2c"),o("2877")),f=o("6544"),b=o.n(f),d=o("8336"),m=o("b0af"),h=o("132d"),g=o("2fa4"),v=o("71d9"),k=o("2a7f"),p=Object(u["a"])(s,n,a,!1,null,"fb2ef9ea",null);e["default"]=p.exports;b()(p,{VBtn:d["a"],VCard:m["a"],VIcon:h["a"],VSpacer:g["a"],VToolbar:v["a"],VToolbarTitle:k["a"]})},bff0:function(t,e,o){},ca2c:function(t,e,o){"use strict";var n=o("bff0"),a=o.n(n);a.a},e09c:function(t,e,o){"use strict";o("4160"),o("a9e3"),o("159b");e["a"]={methods:{calcItems:function(t){var e=0;return t&&this.items&&this.items.forEach((function(o,n){o[t]&&Number(o[t])&&(e+=Number(o[t]))})),this.formatNumber(e)},calcItemsPlus:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;return t&&e&&e.forEach((function(e,o){e[t]&&Number(e[t])&&(n+=Number(e[t]))})),o?this.formatNumber(n):n},calcItemsArrayPlus:function(t,e,o){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=0;return t&&e&&e.forEach((function(e,n){e[t]&&o<e[t].length&&Number(e[t][o])&&(a+=Number(e[t][o]))})),n?this.formatNumber(a):a},sumRowItems:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;return t&&e&&t.forEach((function(t,o){e.item[t]&&Number(e.item[t])&&(n+=Number(e.item[t]))})),o?this.formatNumber(n):n},colwidthCalc:function(t){return console.log("mixin.colwidthCalc"),{width:"col1"===t?"280px":"actions"===t?"32px":"70px"}},numberValStyle:function(t){return t&&Number(t)&&Number(t)<0?"row-text row-text-negative":"row-text"},calcVariance:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=0;return n=this.calcReverse?(null===e?0:e)-(null===t?0:t):(null===t?0:t)-(null===e?0:e),o?this.formatNumber(n):n}}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6b6836c"],{"2a7f":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var a=o("71d9"),n=o("80d2"),r=Object(n["g"])("v-toolbar__title"),c=Object(n["g"])("v-toolbar__items");a["a"]},"2d6a":function(t,e,o){"use strict";var a=o("3ef3"),n=o.n(a);n.a},"3ef3":function(t,e,o){},"6c07":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"home"},[o("v-toolbar",{attrs:{color:"green"}},[o("v-toolbar-title",{staticStyle:{color:"white"}},[t._v("Start At Business")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-file-download")])],1),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-dots-vertical")])],1)],1),o("div",{staticStyle:{padding:"10px"}},[o("SABGrid1",{ref:"SABGridMain",attrs:{id:"SABGridMain",items:t.items},on:{"defbacklog-clicked":t.defbacklogClicked}})],1),o("BackLogDialog",{ref:"backlogDialog"})],1)},n=[],r=(o("d3b7"),o("5530")),c=o("2f62"),i=o("e09c"),l={name:"StartAtBusiness",components:{SABGrid1:function(){return o.e("chunk-3f4f61d8").then(o.bind(null,"922e"))},BackLogDialog:function(){return o.e("chunk-6668ead4").then(o.bind(null,"36e7"))}},mixins:[i["a"]],data:function(){return{items:[{id:1,col1:"Commercial 1",currency:"USD",actSales:500,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:-12e3,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123,childAPI:"/startbusiness/root/1"},{id:2,col1:"Defense & Aerospace",currency:"USD",actSales:51e3,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123,childAPI:"/startbusiness/root/2"}]}},methods:{defbacklogClicked:function(t,e){console.log(t,e),this.$refs.backlogDialog.toggleDialog()}},computed:Object(r["a"])({},Object(c["b"])({fields:"getSABFields",autoDrill:"getAutoExpand"})),mounted:function(){this.$hub.sayhello()},updated:function(){}},s=l,u=(o("2d6a"),o("2877")),d=o("6544"),f=o.n(d),b=o("8336"),m=o("b0af"),h=o("132d"),g=o("2fa4"),v=o("71d9"),k=o("2a7f"),p=Object(u["a"])(s,a,n,!1,null,"427a5f78",null);e["default"]=p.exports;f()(p,{VBtn:b["a"],VCard:m["a"],VIcon:h["a"],VSpacer:g["a"],VToolbar:v["a"],VToolbarTitle:k["a"]})},e09c:function(t,e,o){"use strict";o("4160"),o("a9e3"),o("159b");e["a"]={methods:{calcItems:function(t){var e=0;return t&&this.items&&this.items.forEach((function(o,a){o[t]&&Number(o[t])&&(e+=Number(o[t]))})),this.formatNumber(e)},calcItemsPlus:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;return t&&e&&e.forEach((function(e,o){e[t]&&Number(e[t])&&(a+=Number(e[t]))})),o?this.formatNumber(a):a},calcItemsArrayPlus:function(t,e,o){var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=0;return t&&e&&e.forEach((function(e,a){e[t]&&o<e[t].length&&Number(e[t][o])&&(n+=Number(e[t][o]))})),a?this.formatNumber(n):n},sumRowItems:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;return t&&e&&t.forEach((function(t,o){e.item[t]&&Number(e.item[t])&&(a+=Number(e.item[t]))})),o?this.formatNumber(a):a},colwidthCalc:function(t){return console.log("mixin.colwidthCalc"),{width:"col1"===t?"280px":"actions"===t?"32px":"70px"}},numberValStyle:function(t){return t&&Number(t)&&Number(t)<0?"row-text row-text-negative":"row-text"},calcVariance:function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;return a=this.calcReverse?(null===e?0:e)-(null===t?0:t):(null===t?0:t)-(null===e?0:e),o?this.formatNumber(a):a}}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6b6836c"],{"2a7f":function(t,o,e){"use strict";e.d(o,"a",(function(){return n}));var a=e("71d9"),c=e("80d2"),n=Object(c["g"])("v-toolbar__title"),i=Object(c["g"])("v-toolbar__items");a["a"]},"2d6a":function(t,o,e){"use strict";var a=e("3ef3"),c=e.n(a);c.a},"3ef3":function(t,o,e){},"6c07":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-card",{staticClass:"home"},[e("v-toolbar",{attrs:{color:"green"}},[e("v-toolbar-title",{staticStyle:{color:"white"}},[t._v("Start At Business")]),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"white"}},[t._v("mdi-file-download")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"white"}},[t._v("mdi-dots-vertical")])],1)],1),e("div",{staticStyle:{padding:"10px"}},[e("SABGrid1",{ref:"SABGridMain",attrs:{id:"SABGridMain",items:t.items},on:{"defbacklog-clicked":t.defbacklogClicked}})],1),e("BackLogDialog",{ref:"backlogDialog"})],1)},c=[],n=(e("d3b7"),e("5530")),i=e("2f62"),r=e("e09c"),s={name:"StartAtBusiness",components:{SABGrid1:function(){return e.e("chunk-3f4f61d8").then(e.bind(null,"922e"))},BackLogDialog:function(){return e.e("chunk-6668ead4").then(e.bind(null,"36e7"))}},mixins:[r["a"]],data:function(){return{items:[{id:1,col1:"Commercial",currency:"USD",actSales:500,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123,childAPI:"/startbusiness/root/1"},{id:2,col1:"Defense & Aerospace",currency:"USD",actSales:51e3,backlogCRD:23555,contractRelease:null,bookShip:3452,demandForecast:123,defBacklog:123,salesForecast:123,target:123,lastQtr:123,lastYr:123,vseq:123,vyoy:123,orgVyoy:123,actBookings:123,bookingsForecast:123,bookToBill:123,childAPI:"/startbusiness/root/2"}]}},methods:{defbacklogClicked:function(t,o){console.log(t,o),this.$refs.backlogDialog.toggleDialog()}},computed:Object(n["a"])({},Object(i["b"])({fields:"getSABFields",autoDrill:"getAutoExpand"})),mounted:function(){},updated:function(){}},l=s,u=(e("2d6a"),e("2877")),d=e("6544"),f=e.n(d),b=e("8336"),g=e("b0af"),m=e("132d"),k=e("2fa4"),h=e("71d9"),v=e("2a7f"),p=Object(u["a"])(l,a,c,!1,null,"fca6a38e",null);o["default"]=p.exports;f()(p,{VBtn:b["a"],VCard:g["a"],VIcon:m["a"],VSpacer:k["a"],VToolbar:h["a"],VToolbarTitle:v["a"]})},e09c:function(t,o,e){"use strict";e("4160"),e("a9e3"),e("159b");o["a"]={methods:{calcItems:function(t){var o=0;return t&&this.items&&this.items.forEach((function(e,a){Number(e[t])&&(o+=Number(e[t]))})),this.formatNumber(o)},calcItemsPlus:function(t,o){var e=0;return t&&o&&o.forEach((function(o,a){Number(o[t])&&(e+=Number(o[t]))})),this.formatNumber(e)},colwidthCalc:function(t){return{width:"col1"===t?"280px":"actions"===t?"32px":"60px"}}}}}}]);
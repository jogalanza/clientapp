(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f47112c"],{3034:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demand-actuals-nest-grid"},[n("b-table",{ref:"thisTable",staticClass:"fixed-rowheader",attrs:{"show-empty":"",small:"",fixed:"","sticky-header":"calc(100vh - 165px)",responsive:"",items:t.items,fields:t.fields,"thead-class":t.showHeader?"head-class":"d-none","tbody-tr-class":"row-class","tfoot-class":"foot-class"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-danger my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(e){return t._l(e.fields,(function(e){return n("col",{key:e.key,style:t.colwidthCalc(e.key)})}))}},{key:"cell(col1)",fn:function(e){return[n("div",{staticClass:"row-header",on:{click:function(n){return t.toggleRow(e)}}},[n("v-icon",[t._v(t._s(e.detailsShowing?"mdi-chevron-down":"mdi-chevron-right"))]),t._v(" "+t._s(e.value)+" ")],1)]}},{key:"cell(actions)",fn:function(e){return[e.detailsShowing?n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on;return[n("v-btn",t._g({attrs:{small:"",icon:""},on:{click:function(n){return t.saveEntries(e.item)}}},o),[n("v-icon",[t._v("mdi-content-save")])],1)]}}],null,!0)},[n("span",[t._v(t._s("Save "+e.item.col1))])]):t._e()]}},{key:"cell()",fn:function(e){return[n("div",{staticClass:"row-header",staticStyle:{width:"100%",height:"40px"},on:{click:function(n){return t.toggleRow(e)}}})]}},{key:"head(col1)",fn:function(t){return[n("span",{staticClass:"text-info"})]}},{key:"row-details",fn:function(e){return[n("DemandActualsGrid",{ref:"bookforecast"+e.item.siteid,staticClass:"grid2",attrs:{showHeaders:t.showHeader,siteinfo:e.item}})]}},{key:"foot(actions)",fn:function(t){return[n("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(e){return[n("span",{staticClass:"footer-total"},[t._v("Total")])]}},{key:"foot()",fn:function(e){return[n("div",[t._v(t._s(t.calcItems(e.column)))])]}}])})],1)},o=[],s=(n("d3b7"),n("5530")),r=n("e09c"),c=n("4b1f"),a=n("2f62"),l={name:"DemandActualsNestGrid",mixins:[r["a"],c["a"]],components:{DemandActualsGrid:function(){return n.e("chunk-1e51dd9a").then(n.bind(null,"7562"))}},props:{items1:Array},data:function(){return{showHeader:!1,items:[{siteid:1,col1:"Asslar"},{siteid:2,userid:300,col1:"Batam"},{siteid:3,userid:300,col1:"Shenzhen"},{siteid:4,userid:300,col1:"Manila"},{siteid:5,userid:300,col1:"Singapore"},{siteid:6,userid:300,col1:"Montreal"},{siteid:7,userid:300,col1:"St. Asaph"}]}},methods:{saveEntries:function(t){try{if(t.siteid){var e="bookforecast".concat(t.siteid);console.log("saveEntries",t,e,this.$refs[e]),this.$refs[e]&&this.$refs[e].saveEntries()}}catch(n){console.error("BookingsForecastNestGrid.saveEntries",n)}},colwidthCalc:function(t){return{width:"col1"===t?"200px":"entryForm"===t?"680px":"actions"===t?"40px":"month"===t?"80px":"100px"}},toggleRow:function(t){t.toggleDetails()},checkToogleRow:function(t){console.log(t),t.item.childAPI&&t.toggleDetails()}},computed:Object(s["a"])({},Object(a["b"])({fields:"getDemandActualFields",autoDrill:"getAutoExpand"})),mounted:function(){console.log("mounted",this,this.$refs),this.showHeader=this.isStickySupported()}},u=l,d=(n("44ac"),n("2877")),f=n("6544"),h=n.n(f),m=n("8336"),v=n("132d"),b=n("3a2f"),p=Object(d["a"])(u,i,o,!1,null,"270ecf86",null);e["default"]=p.exports;h()(p,{VBtn:m["a"],VIcon:v["a"],VTooltip:b["a"]})},"44ac":function(t,e,n){"use strict";var i=n("54f8"),o=n.n(i);o.a},"4b1f":function(t,e,n){"use strict";n("4160"),n("159b");e["a"]={methods:{collapseExpand:function(){if(this.$refs.thisTable){var t=this.$refs.thisTable;t.$refs.itemRows.forEach((function(t,e){try{console.log(t);var n=t.$el.firstChild.firstElementChild;n.click()}catch(i){console.error("collapseExpand",i)}}))}}}}},"54f8":function(t,e,n){},e09c:function(t,e,n){"use strict";n("4160"),n("a9e3"),n("159b");e["a"]={methods:{calcItems:function(t){var e=0;return t&&this.items&&this.items.forEach((function(n,i){n[t]&&Number(n[t])&&(e+=Number(n[t]))})),this.formatNumber(e)},calcItemsPlus:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;return t&&e&&e.forEach((function(e,n){e[t]&&Number(e[t])&&(i+=Number(e[t]))})),n?this.formatNumber(i):i},calcItemsArrayPlus:function(t,e,n){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=0;return t&&e&&e.forEach((function(e,i){e[t]&&n<e[t].length&&Number(e[t][n])&&(o+=Number(e[t][n]))})),i?this.formatNumber(o):o},sumRowItems:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;return t&&e&&t.forEach((function(t,n){e.item[t]&&Number(e.item[t])&&(i+=Number(e.item[t]))})),n?this.formatNumber(i):i},colwidthCalc:function(t){return console.log("mixin.colwidthCalc"),{width:"col1"===t?"280px":"actions"===t?"32px":"70px"}},numberValStyle:function(t){return t&&Number(t)&&Number(t)<0?"row-text row-text-negative":"row-text"},calcVariance:function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;return i=this.calcReverse?(null===e?0:e)-(null===t?0:t):(null===t?0:t)-(null===e?0:e),n?this.formatNumber(i):i}}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6b920be","chunk-32d8533f"],{"0ca4":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"backlog-grid",staticStyle:{height:"100vh"}},[o("b-table",{style:e.readOnly?"height:calc(100vh - 60px)":"height:calc(100vh - 145px)",attrs:{"show-empty":"",fixed:"","sticky-header":e.readOnly?"calc(100vh - 60px)":"calc(100vh - 145px)",small:"",selectable:"","select-mode":e.selectMode?"multi":"single",responsive:"",items:e.items,fields:e.fields,filter:e.filter,filterIncludedFields:e.filterOn,"thead-class":"head-class","tbody-tr-class":"row-class","tfoot-class":"foot-class"},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"table-busy",fn:function(){return[o("div",{staticClass:"text-center text-danger my-2"},[o("b-spinner",{staticClass:"align-middle"}),o("strong",[e._v("Loading...")])],1)]},proxy:!0},{key:"table-colgroup",fn:function(t){return e._l(t.fields,(function(t){return o("col",{key:t.key,style:e.colwidthCalc(t.key)})}))}},{key:"cell(col1)",fn:function(t){return[o("div",{staticClass:"row-header"},[o("span",[e._v(e._s(t.value))])])]}},{key:"cell(year)",fn:function(t){return[o("span",[e._v(e._s(t.value))])]}},{key:"cell(defBacklog)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{type:"number",flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.defBacklog,callback:function(o){e.$set(t.item,"defBacklog",o)},expression:"row.item.defBacklog"}})]}},{key:"cell(poNo)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.poNo,callback:function(o){e.$set(t.item,"poNo",o)},expression:"row.item.poNo"}})]}},{key:"cell(partNo)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.partNo,callback:function(o){e.$set(t.item,"partNo",o)},expression:"row.item.partNo"}})]}},{key:"cell(comments)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.comments,callback:function(o){e.$set(t.item,"comments",o)},expression:"row.item.comments"}})]}},{key:"cell(reason)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"",dense:"","hide-details":""},model:{value:t.item.reason,callback:function(o){e.$set(t.item,"reason",o)},expression:"row.item.reason"}})]}},{key:"cell(customerName)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.customerName,callback:function(o){e.$set(t.item,"customerName",o)},expression:"row.item.customerName"}})]}},{key:"cell(partDescription)",fn:function(t){return[e.readOnly?o("span",[e._v(e._s(e.formatNumber(t.value)))]):o("v-text-field",{staticClass:"input-fields",attrs:{flat:"",solo:"","single-line":"",dense:"","hide-details":""},model:{value:t.item.partDescription,callback:function(o){e.$set(t.item,"partDescription",o)},expression:"row.item.partDescription"}})]}},{key:"cell()",fn:function(t){return[o("span",[e._v(e._s(t.value))])]}},{key:"head(actions)",fn:function(e){return[o("span",{staticClass:"text-info"})]}},{key:"head(defBacklog)",fn:function(t){return[o("div",[e._v(e._s(t.label))]),0!==Number(e.defCount)?o("div",{staticStyle:{color:"blue","font-size":"0.8rem"}},[e._v(e._s("Total: "+e.defCount))]):e._e()]}},{key:"foot(actions)",fn:function(e){return[o("span",{staticClass:"text-danger"})]}},{key:"foot(col1)",fn:function(t){return[o("span",{staticClass:"text-danger"},[e._v("Total")])]}},{key:"foot(defBacklog)",fn:function(t){return[o("span",[e._v(e._s(e.defCount))])]}},{key:"foot()",fn:function(e){return[o("span",{staticClass:"sr-only"})]}}])})],1)},n=[],a=(o("4de4"),o("5530")),i=o("e09c"),l=o("2f62"),r={name:"BackLogGrid",mixins:[i["a"]],props:{filter:String,readOnly:{type:Boolean,default:!0},selectMode:{type:Boolean,default:!1}},components:{},watch:{selectMode:function(e,t){console.log(e,t)}},data:function(){return{defCount:null,filterOn:["site","businessLine","productLine","productFamily","poNo","partNo","comments","reason","customerName","partDescription"],items:[{id:1,col1:"Commercial",businessLine:"Detection",productLine:"IR Sensing",productFamily:"Pyroelectric Sensors",site:"ESG",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Detection",productLine:"IR Sensing",productFamily:"Pyroelectric Sensors",site:"ESG",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Detection",productLine:"IR Sensing",productFamily:"Pyroelectric Sensors",site:"ESG",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Detection",productLine:"IR Sensing",productFamily:"Pyroelectric Sensors",site:"ESG",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Lighting",productLine:"High Intensity Discharge Lighting",productFamily:"Analytical",site:"Salem",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Optics",productLine:"Biomedical Systems",productFamily:"Biomedical Systems",site:"QSG",year:2019,month:"March",defBacklog:500,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"},{id:1,col1:"Commercial",businessLine:"Optics",productLine:"Semiconductor",productFamily:"Semiconductor",site:"QSG",year:2019,month:"March",defBacklog:123,poNo:123,partNo:123,comments:"sample comment",reason:"No reason at all",customerName:"the customer",partDescription:"sample part description"}]}},methods:{onFiltered:function(e){this.filter?this.defCount=this.calcItemsPlus("defBacklog",e):this.defCount=this.calcItems("defBacklog")},colwidthCalc:function(e){return{width:"col1"===e?"100px":"comments"===e||"customerName"===e||"reason"===e||"partDescription"===e?"120px":"month"===e||"year"===e?"60px":"defBacklog"===e?"100px":"80px"}}},computed:Object(a["a"])({},Object(l["b"])({fields:"getBackLogFields"})),updated:function(){console.log("backloggrid updated")},mounted:function(){console.log("backloggrid mounted"),this.defCount=this.calcItems("defBacklog")}},c=r,m=(o("51a1"),o("2877")),u=o("6544"),d=o.n(u),p=o("8654"),f=Object(m["a"])(c,s,n,!1,null,null,null);t["default"]=f.exports;d()(f,{VTextField:p["a"]})},"51a1":function(e,t,o){"use strict";var s=o("a188"),n=o.n(s);n.a},a188:function(e,t,o){},e09c:function(e,t,o){"use strict";o("4160"),o("a9e3"),o("159b");t["a"]={methods:{calcItems:function(e){var t=0;return e&&this.items&&this.items.forEach((function(o,s){Number(o[e])&&(t+=Number(o[e]))})),this.formatNumber(t)},calcItemsPlus:function(e,t){var o=0;return e&&t&&t.forEach((function(t,s){Number(t[e])&&(o+=Number(t[e]))})),this.formatNumber(o)},colwidthCalc:function(e){return{width:"col1"===e?"280px":"actions"===e?"32px":"60px"}}}}}}]);
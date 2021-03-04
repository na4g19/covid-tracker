(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{203:function(t,e,n){},206:function(t,e,n){"use strict";n.r(e);n(82),n(50),n(83);var a=n(0),i=n.n(a),r=n(25),c=n.n(r),o=(n(88),n(48)),s=n.n(o),u=n(76),l=n(32),d=n(33),h=n(36),b=n(35),f=n(77),p=n(212),j=n(81),v=n(49),y=n.n(v),O=(n(203),n(7)),C=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsx)(g,{})]})}}]),n}(a.Component),g=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={labels:[],datasets:[{label:"Cases",fill:!1,lineTension:.15,borderColor:"rgba(0, 255, 0, 0.9)",borderWidth:3,pointRadius:1,data:[]},{label:"Deaths",fill:!1,lineTension:.15,borderColor:"rgba(255, 0, 0, 0.9)",borderWidth:4,pointRadius:1,data:[]}]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){k=this.updateChart.bind(this)}},{key:"updateChart",value:function(t){var e=this;y.a.get("/api/countries/".concat(t)).then((function(t){var n=t.data.countryData,a=e.state.datasets.slice();a[0].data=n.cases.map((function(t){return t.weeklyCount})),a[1].data=n.deaths.map((function(t){return t.weeklyCount})),e.setState((function(){return{datasets:a,labels:n.cases.map((function(t){return t.yearWeek}))}}))})).catch((function(t){console.log("Could not retrieve data from the server")}))}},{key:"render",value:function(){return Object(O.jsx)("div",{id:"covid-chart",children:Object(O.jsx)(f.Line,{data:this.state,options:{title:{display:!0,text:"Weekly Covid Cases and Deaths by Country",fontSize:20},legend:{display:!0,position:"right"},maintainAspectRatio:!1}})})}}]),n}(a.Component),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).changeTitle=function(t){var e=t.target.textContent;a.setState({btnTitle:e})},a.state={btnTitle:"Select Country",countries:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/api/countries").then((function(t){e.setState({countries:t.data.countryNames})})).catch((function(t){console.log("Error occured while loading country names")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(O.jsx)(p.a,{id:"dropdown-button",title:this.state.btnTitle,onSelect:function(t){return k(t)},children:this.state.countries.map((function(e){return Object(O.jsx)(j.a.Item,{eventKey:e,onClick:t.changeTitle,children:e},e)}))})}}]),n}(a.Component);function k(t){}var x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),x()},88:function(t,e,n){}},[[206,1,2]]]);
//# sourceMappingURL=main.c9498d6a.chunk.js.map
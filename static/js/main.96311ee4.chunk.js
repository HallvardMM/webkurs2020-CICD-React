(this["webpackJsonpreact-bedpress"]=this["webpackJsonpreact-bedpress"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),c=n.n(r),l=(n(10),{height:"60px",width:"100vw",padding:"10px",textAlign:"center",fontSize:"30px"}),s=function(){return o.a.createElement("div",{style:l},o.a.createElement("header",null,o.a.createElement("b",null,"Hvor vil du reise? ")," "))},i=n(1),u=n(2),m=n.n(u),d=(n(11),{width:"100%",height:"calc(100vh - 80px)",position:"absolute"}),h=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null),l=Object(a.useState)("streets-v11"),s=Object(i.a)(l,2),u=s[0],h=s[1],b=Object(a.useState)(!0),v=Object(i.a)(b,2),f=v[0],p=v[1],E=Object(a.useState)([10.5476,59.9134]),g=Object(i.a)(E,2),j=g[0],w=g[1];return Object(a.useEffect)((function(){m.a.accessToken="pk.eyJ1IjoiaGFsbHZhcmRtbSIsImEiOiJja2gwdnV2NzcxaHU1MnlyMWFmZXdybjI5In0.UGyehsmdYKO8vXg_nxIzQg";n||function(e){var t=e.setMap,n=e.mapContainer,a=new m.a.Map({container:n.current,style:"mapbox://styles/mapbox/streets-v11",center:j,zoom:10});a.on("load",(function(){t(a),a.resize()}))}({setMap:r,mapContainer:c}),p(!1)}),[n,u]),Object(a.useEffect)((function(){f||n.setStyle("mapbox://styles/mapbox/".concat(u))}),[u]),Object(a.useEffect)((function(){f||(console.log("number: ",j),n.setCenter(j),n.setZoom(5))}),[j]),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return console.log(u),void h("streets-v11"===u?"light-v10":"light-v10"===u?"dark-v10":"dark-v10"===u?"satellite-v9":"streets-v11")}},u),o.a.createElement("button",{onClick:function(){return w([90*Math.random()*(Math.round(Math.random())?1:-1),90*Math.random()*(Math.round(Math.random())?1:-1)])}},"Random location"),o.a.createElement("div",{ref:function(e){return c.current=e},style:d}))},b={overflow:"hidden"};var v=function(){return o.a.createElement("div",{style:b},o.a.createElement(s,null),o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.96311ee4.chunk.js.map
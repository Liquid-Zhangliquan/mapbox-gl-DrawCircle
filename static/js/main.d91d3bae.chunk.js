(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t){e.exports="pk.eyJ1IjoiaHllb25namlua2ltIiwiYSI6ImNpZXh4dXp5eDA2YjFzaGtyOGR2dnBza2oifQ.a5K673tSr0cOcYoX1rpPhg"},159:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),c=(a(88),a(31)),s=a(40),l=a(41),u=a(46),d=a(15),p=a(77),m=a(45),h=(a(89),a(42)),f=a(76),w=a(21),b=a.n(w),v=(a(146),a(32)),g=a(154),y=Object(f.a)({accessToken:g}),k={style:"mapbox://styles/mapbox/streets-v11",zoom:[13],containerStyle:{height:"100vh",width:"100%"}},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onMapLoaded=function(e){e.addControl(a.draw),a.what();var t=function(e){return a.props.onFeaturesUpdated(e)};e.on("draw.create",function(e){return t(e.features)}),e.on("draw.update",function(e){return t(e.features)}),e.on("draw.delete",function(e){return t(e.features)})},a.draw=new b.a({displayControlsDefault:!1,userProperties:!0,defaultMode:"draw_circle",clickBuffer:10,touchBuffer:10,modes:Object(c.a)({},b.a.modes,{draw_circle:v.a,direct_select:v.b,simple_select:v.d,drag_circle:v.c})}),a.what=function(){console.log(this.draw.getAll().features),setTimeout(this.what,2e3)}.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){e.mode===this.props.mode&&this.props.features.length===this.draw.getAll().features.length||(console.log(this.props.mode),this.draw.deleteAll(),this.draw.changeMode(this.props.mode))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y,Object.assign({},k,{onStyleLoad:function(t){return e.onMapLoaded(t)}})))}}]),t}(o.a.Component),O=a(182),S=a(186),E=a(187),C=a(185),_=a(6),x=a(188),I=[{key:1,value:"Circle",mode:"draw_circle"},{key:2,value:"Drag Circle",mode:"drag_circle"},{key:3,value:"Polygon",mode:"draw_polygon"},{key:4,value:"Line",mode:"draw_line_string"}],A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).initialState={selectedShape:I[0],mode:I[0].mode,features:[]},a.state=Object(c.a)({},a.initialState),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setState",value:function(e,a){Object(p.a)(Object(d.a)(t.prototype),"setState",this).call(this,e,a),console.log("what")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.features[0],n=a&&a.properties.isCircle?a.properties.center.map(function(e){return e.toFixed(3)}):[];return o.a.createElement("div",null,o.a.createElement("div",{className:t.map},o.a.createElement(j,{onFeaturesUpdated:function(t){return e.setState({features:t})},features:this.state.features,mode:this.state.mode})),o.a.createElement("div",{className:t.shapeSelectContainer},o.a.createElement(O.a,null,o.a.createElement(S.a,{value:this.state.selectedShape.key?this.state.selectedShape.key:0,onChange:function(t){var a=I.find(function(e){return e.key===t.target.value});e.setState({selectedShape:a,mode:a.mode,features:[]})},inputProps:{name:"shape",id:"shape-selector"}},I.map(function(e){return o.a.createElement(E.a,{key:e.key,value:e.key},e.value)}))),o.a.createElement(C.a,{onClick:function(){return e.setState(Object(c.a)({},e.initialState))}},o.a.createElement(x.a,null))),o.a.createElement("div",{className:t.textContainer},o.a.createElement("p",null,"Center: [".concat(n.join(", "),"]")),o.a.createElement("p",null,"Radius: ".concat(a&&a.properties.isCircle?a.properties.radiusInKm.toFixed(4):"--"," kms"))))}}]),t}(o.a.Component),B=Object(_.a)(function(e){return{map:{zIndex:-1,position:"absolute",top:0,left:0,width:"100%"},shapeSelectContainer:{position:"absolute",verticalAlign:"middle",right:16,top:16},textContainer:{position:"absolute",bottom:32,left:16,background:"#eee",paddingLeft:16,paddingRight:16}}})(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(159)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.d91d3bae.chunk.js.map
(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[93],{2278:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(113),r=t(1213),o=t(1593),m=t(1713),s=Object(o.compose)(Object(o.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{className:"h-full"}),containerElement:n.a.createElement("div",{className:"h-400"}),mapElement:n.a.createElement("div",{className:"h-full"})}),m.withScriptjs,m.withGoogleMap)((function(e){return n.a.createElement(m.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}})})),i=t(36),p=t(2174),u=Object(o.compose)(Object(o.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",loadingElement:n.a.createElement("div",{className:"h-full"}),containerElement:n.a.createElement("div",{className:"h-400"}),mapElement:n.a.createElement("div",{className:"h-full"})}),m.withScriptjs,m.withGoogleMap)((function(e){return n.a.createElement(m.GoogleMap,{defaultZoom:8,defaultCenter:{lat:-34.397,lng:150.644}},n.a.createElement(m.Marker,{isMarkerShown:!1,position:{lat:-34.397,lng:150.644},onClick:e.onMarkerClick},n.a.createElement(p.InfoBox,{options:{closeBoxURL:"",enableEventPropagation:!0}},n.a.createElement(r.a,{className:"p-4"},n.a.createElement("p",{className:"whitespace-pre m-0"},"Hello World !!!")))))})),E=function(){var e=Object(l.useRef)(null),a=Object(l.useState)(!1),t=Object(i.a)(a,2),c=t[0],r=t[1],o=Object(l.useCallback)((function(){e.current=setTimeout((function(){r(!0)}),3e3)}),[]);return Object(l.useEffect)((function(){return o(),function(){e.current&&clearTimeout(e.current)}}),[o]),n.a.createElement(u,{isMarkerShown:c,onMarkerClick:function(){r(!1),o()}})};a.default=function(){return n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(c.b,{routeSegments:[{name:"Map"}]})),n.a.createElement(r.a,null,n.a.createElement(s,null)),n.a.createElement("div",{className:"py-3"}),n.a.createElement(r.a,null,n.a.createElement(E,null)))}}}]);
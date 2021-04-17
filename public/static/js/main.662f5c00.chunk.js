(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,n,t){"use strict";t.r(n);var c,s,r,a=t(2),l=t.n(a),i=t(79),o=t.n(i),j=(t(93),t(94),t.p+"static/media/logo.87dc8524.png"),d=t(87),h=t(12),m=t(88),b=t(45),g=t(46),O=t(105),u=t(41),p=t(5),x=function(e){var n=e.person,t=n.name;n.mass,n.height,n.gender,n.homeworld;return Object(p.jsx)("div",{className:"card card-body mb-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-9",children:Object(p.jsxs)("h4",{children:["Person: ",t," "]})}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsx)(u.b,{to:"/person/".concat(t),className:"btn btn-secondary",children:"Details"})})]})})},y=Object(g.gql)(c||(c=Object(b.a)(["\n    query PeopleQuery {\n        people {\n            name\n            mass\n            gender\n            height\n            homeworld\n        }\n    }\n"]))),v=Object(g.gql)(s||(s=Object(b.a)(["\n    query PeoplePageQuery($page: Int) {\n        peoplePage(page: $page) {\n            name\n            mass\n            gender\n            height\n            homeworld\n        }\n    }\n"]))),N=function(){var e=Object(a.useState)(1),n=Object(m.a)(e,2),t=n[0],c=n[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"display-4 my-3",children:"People"}),t>1?Object(p.jsx)(O.a,{query:v,variables:{page:t},children:function(e){var n=e.loading,t=e.error,c=e.data;return n?Object(p.jsx)("h4",{children:"Loading..."}):(t&&console.log(t),console.log(c),Object(p.jsx)(p.Fragment,{children:c.peoplePage.map((function(e){return Object(p.jsx)(x,{person:e},e.name)}))}))}}):Object(p.jsx)(O.a,{query:y,children:function(e){var n=e.loading,t=e.error,c=e.data;return n?Object(p.jsx)("h4",{children:"Loading..."}):(t&&console.log(t),Object(p.jsx)(p.Fragment,{children:c.people.map((function(e){return Object(p.jsx)(x,{person:e},e.name)}))}))}}),Object(p.jsx)("input",{type:"number",onChange:function(e){c(parseInt(e.target.value))}})]})},f=Object(g.gql)(r||(r=Object(b.a)(["\n    query PersonQuery($name: String!) {\n        person(name: $name) {\n            name\n            height\n            mass\n            gender\n            homeworld\n        }\n    }\n"]))),P=function(e){var n=e.match.params.name;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O.a,{query:f,variables:{name:n},children:function(e){var n=e.loading,t=e.error,c=e.data;if(n)return Object(p.jsx)("h4",{children:"Loading..."});t&&console.log(t);var s=c.person[0],r=s.name,a=s.height,l=s.mass,i=s.gender,o=s.homeworld;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{className:"display-4 my-3",children:[Object(p.jsx)("span",{className:"text-dark",children:"Person: "}),r]}),Object(p.jsx)("h4",{className:"mb-3",children:"Person Details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Name: "}),r]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Height: "}),a," cm"]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Mass: "}),l," kg"]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Gender: "}),i]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("strong",{children:"Homeworld: "}),o]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(u.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}})})},w=t(11),q=new d.a({uri:"/graphql"});var F=function(){return Object(p.jsx)(h.a,{client:q,children:Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("img",{src:j,alt:"Star Wars",style:{width:300,display:"block",margin:"auto"}}),Object(p.jsx)(w.a,{exact:!0,path:"/",component:N}),Object(p.jsx)(w.a,{exact:!0,path:"/person/:name",component:P})]})})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,106)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),r(e),a(e)}))};o.a.render(Object(p.jsx)(l.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),k()},93:function(e,n,t){},94:function(e,n,t){}},[[104,1,2]]]);
//# sourceMappingURL=main.662f5c00.chunk.js.map
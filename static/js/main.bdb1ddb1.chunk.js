(this["webpackJsonpdeveloper-portfolio-app"]=this["webpackJsonpdeveloper-portfolio-app"]||[]).push([[0],{155:function(e,a,t){var n={"./certificates.md":[157,3],"./education.md":[158,4],"./projects.md":[159,5],"./skills.md":[160,6]};function o(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],o=a[0];return t.e(a[1]).then((function(){return t.t(o,7)}))}o.keys=function(){return Object.keys(n)},o.id=155,e.exports=o},156:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(42),r=t.n(l),i=(t(57),t(16)),c=t(43),s=t(5);i.b.add(c.a,s.f,s.a,s.c,s.h,s.l,s.b,s.k,s.i,s.j,s.e,s.g,s.d);var g,u,m=t(11),p=t(2),h=t(24),d=t(7),f=t(3),b="'Ubuntu', sans-serif",x={root:{'& a[aria-current="page"] span':{display:"inline-block !important"}},navText:Object(f.a)({marginLeft:"8px"},"@media screen and (max-width: ".concat("45rem",")"),{display:"none"}),currentTab:{"& .closeButton":Object(f.a)({marginLeft:"16px"},"@media screen and (max-width: ".concat("45rem",")"),{marginLeft:"8px"})},otherTab:{"& .closeButton":{display:"none"}}},v=Object(p.a)(x),y=function(e){var a=e.name,t=e.url,n=Object(h.a)(e,["name","url"]),l=v();return o.a.createElement("span",{className:l.root},o.a.createElement(m.a,{to:t,getProps:function(e){return{className:e.isCurrent?l.currentTab:l.otherTab}}},o.a.createElement(d.a,Object.assign({},n,{size:n.size||"lg"})),o.a.createElement("span",{className:l.navText},a),o.a.createElement(d.a,{onClick:function(e){e.preventDefault(),e.stopPropagation(),Object(m.c)("/")},className:"closeButton",icon:"times",size:"1x"})))},w=t(8),j=t.n(w),E={root:{float:"left",fontFamily:b},list:{color:"#abb2bf",listStyle:"none",margin:"0",padding:"0"},listItem:{display:"inline-block","& a":(g={borderRight:"1px solid ".concat(j()("#282c34").darken(.05).string()),borderTop:"4px solid ".concat("#21252b"),cursor:"pointer",display:"inline-block",fontSize:"1.2rem",letterSpacing:"0.5px",padding:"10px 15px",textTransform:"lowercase",transition:"background, border-color 250ms ease"},Object(f.a)(g,"@media screen and (max-width: ".concat("45rem",")"),{letterSpacing:"0",padding:"10px"}),Object(f.a)(g,'&:hover, &[aria-current="page"]',{borderTopColor:"#21252b",background:j()("#21252b").lighten(.02).string(),color:"#f3f3f3"}),Object(f.a)(g,'&[aria-current="page"]',{background:"#282c34",borderTopColor:j()("#21252b").lighten(.05).string()}),g)}},S=Object(p.a)(E),k=function(e){var a=e.tabs,t=S();return o.a.createElement("nav",{className:t.root},o.a.createElement("ul",{className:t.list},a.map((function(e){return o.a.createElement("li",{className:t.listItem,key:e.name},o.a.createElement(y,e))}))))},O={root:Object(f.a)({background:"#21252b",position:"fixed",top:"0",left:"50px",width:"100vw"},"@media screen and (max-width: ".concat("45rem",")"),{left:"0"})},N=Object(p.a)(O),H=function(e){var a=e.tabs,t=N();return o.a.createElement("header",{className:t.root},o.a.createElement(k,{tabs:a}))},z={root:(u={alignItems:"center",background:"#333842",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",left:"0",position:"fixed",top:"0",width:"50px"},Object(f.a)(u,"@media screen and (max-width: ".concat("45rem",")"),{display:"none"}),Object(f.a)(u,"& div",{display:"flex",flexDirection:"column",padding:"10px 0"}),u),item:{color:"#9599a0",cursor:"pointer",marginBottom:"10px",transition:"color 100ms ease","&:hover":{color:j()("#9599a0").lighten(.2).string()},"&:last-of-type":{marginBottom:"30px"}},icon:{padding:"10px"}},T=Object(p.a)(z),C=function(e){var a=e.contactData,t=T();return o.a.createElement("div",{className:t.root},o.a.createElement("div",null,o.a.createElement(m.a,{to:"/",key:"home-page",className:t.item,"aria-label":"Home page",title:"Home page"},o.a.createElement(d.a,{className:t.icon,icon:"home",size:"lg"})),a.map((function(e){var a=e.name,n=e.url,l=e.icon;return o.a.createElement("a",{className:t.item,key:"left-bar-".concat(a),href:n,"aria-label":"Find me on ".concat(a),title:"Find me on ".concat(a),target:"_blank",rel:"noopener noreferrer"},o.a.createElement(d.a,{className:t.icon,icon:l,size:"lg"}))}))),o.a.createElement("div",null,o.a.createElement("span",{className:t.item,title:"Useless button!"},o.a.createElement(d.a,{icon:"cog",size:"lg"}))))},I={root:{bottom:"0",background:"#21252b",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:b,fontWeight:400,left:"0",position:"fixed",width:"100vw","& span, & a":{display:"inline-block",padding:"2px 8px","&:hover":{background:"#282c34",cursor:"pointer"}}},icon:{color:"#abb2bf"},text:{color:"#abb2bf",fontSize:"1.2rem",padding:"0 4px"}},M=t(21),D=Object(p.a)(I),B=function(){var e=D();return o.a.createElement("footer",{className:e.root},o.a.createElement("a",{href:M.repository.url,rel:"noopener noreferrer",target:"_blank"},o.a.createElement(d.a,{className:e.icon,icon:"code-branch",size:"xs",inverse:!0}),o.a.createElement("span",{className:e.text},"master")),o.a.createElement("span",null,o.a.createElement(d.a,{className:e.icon,icon:"smile",size:"sm",inverse:!0})))},F={"@global":{html:{fontSize:"62.5%"},body:{fontFamily:"'Ubuntu Mono', monospace",fontSize:"1.6rem",background:"#282c34",boxSizing:"border-box"},button:{cursor:"pointer","&:disabled":{cursor:"default"}},a:{color:"#abb2bf",textDecoration:"none",transition:"color 500ms ease","&:visited":{color:j()("#abb2bf").darken(.1).string()}},".color-transform":{transform:"color 500ms ease"}}},L=Object(p.a)(F),A=function(e){var a=e.children,t=e.tabs,n=e.contactData;L();return o.a.createElement("div",null,o.a.createElement(H,{tabs:t}),o.a.createElement(C,{contactData:n}),o.a.createElement("main",null,a),o.a.createElement(B,null))},J=t(15),G=t.n(J),U=t(22),W=t(10),_=t(46),P=t.n(_),K=t(47),R=t(4),q=function(e){var a=e.title,t=e.description,n=e.lang,l=void 0===n?"en":n,r=e.meta,i=void 0===r?[]:r,c=t||R.description;return o.a.createElement(K.a,{htmlAttributes:{lang:l},title:a,titleTemplate:"%s \u2022 ".concat(R.title),meta:[{name:"description",content:c},{name:"keywords",content:R.keywords},{name:"canonical",content:R.homepage},{name:"theme-color",content:R.themeColor},{property:"og:title",content:R.title},{property:"og:description",content:R.description},{property:"og:type",content:"website"},{property:"og:url",content:R.homepage},{property:"og:image",content:R.image},{property:"og:image:width",content:"320"},{property:"og:image:height",content:"320"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:R.homepage},{name:"twitter:title",content:R.title},{name:"twitter:description",content:R.description},{name:"twitter:image",content:R.image},{name:"google-site-verification",content:R.verification.google}].concat(i)})},V={root:Object(f.a)({marginBottom:"64px",marginTop:"36px",marginLeft:"50px",maxWidth:"960px",padding:"20px","& a:hover":{color:"#c2c2c2"},"& li":{listStyle:"square"}},"@media screen and (max-width: ".concat("45rem",")"),{marginLeft:0}),title:Object(f.a)({color:"#98c379",fontSize:"2.0rem",margin:0,padding:0},"@media screen and (max-width: ".concat("45rem",")"),{fontSize:"1.6rem"}),content:{color:"#abb2bf",fontSize:"1.6rem","& h3":{color:"#42a5f5"},"& ul":Object(f.a)({"& li":{paddingBottom:"4px"}},"@media screen and (max-width: ".concat("45rem",")"),{paddingLeft:"20px"})}},Y=Object(p.a)(V),X=function(e){var a=e.title,t=e.seo,n=e.children,l=Y();return o.a.createElement(o.a.Fragment,null,!!t&&o.a.createElement(q,t),o.a.createElement("div",{className:l.root},o.a.createElement("h2",{className:l.title},a),o.a.createElement("div",{className:l.content},n)))},$=function(e){var a=e.fileName,l=Object(n.useState)(""),r=Object(W.a)(l,2),i=r[0],c=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(U.a)(G.a.mark((function e(){var n,o,l;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(155)("./".concat(a,".md"));case 2:return n=e.sent,e.next=5,fetch(n.default);case 5:return o=e.sent,e.next=8,o.text();case 8:l=e.sent,c(l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),o.a.createElement(X,{title:a,seo:{title:a}},o.a.createElement(P.a,{source:i}))},Q=t(50),Z=t.n(Q),ee={root:{background:"#21252b",borderRadius:"4px",color:"#abb2bf",display:"flex",margin:"8px",transition:"color 500ms ease","&:hover":{background:j()("#21252b").darken(.1).string()},"&:hover .icon":{color:"#42a5f5"}},contents:{alignItems:"center",display:"flex",minHeight:"24px",padding:"6px 10px"},text:{fontSize:"1.2rem",fontWeight:400,marginLeft:"6px"},count:{fontSize:"1.2rem",background:j()("#21252b").lighten(.5).string(),borderRadius:"50%",marginLeft:"10px",padding:"4px 8px"}},ae=Object(p.a)(ee),te=function(e){var a=e.href,t=e.title,n=e.icon,l=e.size,r=e.text,i=e.showCount,c=e.count,s=ae();return o.a.createElement("a",{className:s.root,href:a,"aria-label":t,title:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:s.contents},o.a.createElement(d.a,{className:"icon",icon:n,size:l||"lg"}),o.a.createElement("span",{className:s.text},r),!!i&&o.a.createElement("span",{className:s.count},c)))},ne=function(e,a){var t=Object(n.useState)((function(){var t;try{t=JSON.parse(window.localStorage.getItem(e)||String(a))}catch(n){t=a}return t})),o=Object(W.a)(t,2),l=o[0],r=o[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(l))}),[l,e]),[l,r]},oe=function(e){var a=e.resource,t=a.attr,l=a.endpoint,r=Object(h.a)(e,["resource"]),i=Object(n.useState)(!1),c=Object(W.a)(i,2),s=c[0],g=c[1],u=ne(t,void 0),m=Object(W.a)(u,2),p=m[0],d=m[1],f=ne("".concat(t,"_last_check"),0),b=Object(W.a)(f,2),x=b[0],v=b[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(U.a)(G.a.mark((function e(){var a,n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l);case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent)[t]>=0&&d(n[t]),v(Date.now()),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===p||Date.now()>x+6e5)&&e()})),o.a.createElement(te,Object.assign({},r,{showCount:!s&&void 0!==p,count:p}))},le=t(32),re=Object(p.a)({root:{display:"flex",flexDirection:"column",marginTop:"50px","& div":{display:"flex",alignItems:"center",justifyContent:"center"}}}),ie=function(e){var a=e.contactItems,t=e.repoUrl,n=re(),l=function(e){var a=new URL(e).pathname.split("/");return{repo:a.pop()||"",username:a.pop()||""}}(t),r=l.repo,i=l.username,c=[{resource:{endpoint:"https://api.github.com/users/".concat(i),attr:"followers"},href:"https://github.com/".concat(i),title:"Follow @".concat(i," on GitHub"),icon:["fab","github"],size:"lg",text:"Follow @".concat(i)},{resource:{endpoint:"https://api.github.com/repos/".concat(i,"/").concat(r),attr:"stargazers_count"},href:t,title:"Star ".concat(i,"/").concat(r," on GitHub"),icon:"star",size:"sm",text:"Star"}],s=a.find((function(e){return e.isMain}));return o.a.createElement("div",{className:n.root},o.a.createElement("div",null,c.map((function(e){return o.a.createElement(oe,Object.assign({key:"gh-btn-".concat(e.resource.attr)},e))}))),o.a.createElement("div",null,o.a.createElement(te,{href:s.url,title:"Find me on ".concat(s.name),icon:s.icon,size:"lg",text:"Contact Me"})))},ce={root:{alignItems:"center",display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",fontFamily:b},heading:Object(f.a)({color:"#c2c2c2",fontWeight:400,fontSize:"3.2rem",letterSpacing:"2px",margin:"10px 20px",padding:"0",textShadow:"5px 5px ".concat("#21252b"),userSelect:"none"},"@media screen and (max-width: ".concat("45rem",")"),{fontSize:"2.4rem"}),typedWrap:Object(f.a)({color:"#909295",fontSize:"2.4rem",fontWeight:400,margin:"5px",padding:"0",userSelect:"none","& a":{textDecoration:"none",borderBottom:"1px dashed ".concat("#909295")},"& strong":{fontWeight:"500"}},"@media screen and (max-width: ".concat("45rem",")"),{fontSize:"2.0rem"}),".typed-cursor":{color:"#42a5f5"}},se=Object(p.a)(ce),ge=function(e){var a=e.greeting,t=e.contactItems,l=e.repoUrl,r=se();Object(n.useEffect)((function(){var e={strings:a.typed,typeSpeed:70,backSpeed:50,loop:!0,smartBackspace:!0},t=new Z.a("#typed-insert-point",e);return function(){t.destroy()}}),[a]);var i=function(){var e=Math.floor(Math.random()*le.length);return"".concat(le[e].hello,"!")}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(q,{title:i}),o.a.createElement("section",{className:r.root},o.a.createElement("h1",{className:r.heading},a.mainLine),o.a.createElement("div",{className:r.typedWrap},o.a.createElement("span",{id:"typed-insert-point",style:{whiteSpace:"pre"}})),o.a.createElement(ie,{contactItems:t,repoUrl:l})))},ue=[{icon:["fab","js"],color:"#ffca28",url:"/skills",name:"skills.js",mdFileName:"skills"},{icon:"university",color:"#42a5f5",url:"/education",name:".educationrc",mdFileName:"education"},{icon:"sliders-h",color:"#98c379",url:"/projects",name:"projects.config",mdFileName:"projects"},{icon:["fab","sass"],color:"#e13e76",url:"/certificates",name:"certificates.sass",mdFileName:"certificates"}],me=t(51),pe=t(23),he=function(e){return o.a.createElement(ge,Object.assign({greeting:me,contactItems:pe,repoUrl:M.repository.url},e))},de=function(e){return o.a.createElement($,e)},fe=[o.a.createElement(he,{path:"/",key:"home"}),ue.map((function(e){return o.a.createElement(de,{path:e.url,key:e.name,fileName:e.mdFileName})}))],be=function(){return o.a.createElement(A,{tabs:ue,contactData:pe},o.a.createElement(m.b,null,fe))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e){e.exports=JSON.parse('{"name":"developer-portfolio-app","version":"2.0.0","description":"VS Code/Atom One Dark inspired developer portfolio app.","private":true,"repository":{"type":"git","url":"https://github.com/caglarturali/caglarturali"},"homepage":"https://turali.js.org","license":"GNU GPLv3","scripts":{"start":"react-scripts start","build":"react-scripts build","test:base":"react-scripts test --passWithNoTests","test":"npm run test:base -- --watchAll=false","test:watch":"npm run test:base -- --watchAll","eject":"react-scripts eject","lint":"eslint \\"*/**/*.{js,ts,tsx}\\"","lint:ci":"npm run lint -- --quiet","lint:fix":"npm run lint -- --fix","predeploy":"npm run build && cp build/index.html build/404.html","deploy":"gh-pages -d build -r https://$GH_TOKEN@github.com/caglarturali/caglarturali.git","populateDiploma":"ts-node-dev --respawn -O \'{\\"module\\":\\"commonjs\\"}\' scripts/populateDiploma.ts"},"husky":{"hooks":{"pre-commit":"lint-staged","pre-push":"npm test"}},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.30","@fortawesome/free-brands-svg-icons":"^5.14.0","@fortawesome/free-solid-svg-icons":"^5.14.0","@fortawesome/react-fontawesome":"^0.1.11","@reach/router":"^1.3.4","clsx":"^1.1.1","color":"^3.1.2","normalize.css":"^8.0.1","react":"^16.13.1","react-dom":"^16.13.1","react-helmet":"^6.1.0","react-jss":"^10.4.0","react-markdown":"^4.3.1","react-scripts":"3.4.1","typed.js":"^2.0.11"},"devDependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^10.4.9","@testing-library/user-event":"^12.1.3","@types/color":"^3.0.1","@types/jest":"^25.2.3","@types/node":"^14.6.4","@types/reach__router":"^1.3.5","@types/react":"^16.9.49","@types/react-dom":"^16.9.8","@types/react-helmet":"^5.0.16","@typescript-eslint/eslint-plugin":"^2.34.0","@typescript-eslint/parser":"^2.34.0","eslint":"6.8.0","eslint-config-prettier":"^6.11.0","eslint-plugin-prettier":"^3.1.4","eslint-plugin-react":"^7.20.6","gh-pages":"^3.1.0","husky":"^4.2.5","lint-staged":"^10.3.0","prettier":"^2.1.1","ts-node-dev":"^1.0.0-pre.62","typescript":"^3.9.7"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},23:function(e){e.exports=JSON.parse('[{"name":"Telegram","url":"https://t.me/caglarturali","icon":["fab","telegram-plane"],"isMain":true},{"name":"GitHub","url":"https://github.com/caglarturali","icon":["fab","github"],"isMain":false},{"name":"LinkedIn","url":"https://linkedin.com/in/caglarturali","icon":["fab","linkedin"],"isMain":false},{"name":"Instagram","url":"https://www.instagram.com/caglarturali/","icon":["fab","instagram"],"isMain":false},{"name":"goodreads","url":"https://www.goodreads.com/caglarturali","icon":["fab","goodreads"],"isMain":false}]')},32:function(e){e.exports=JSON.parse('[{"language":"Afrikaans","hello":"hallo"},{"language":"Albanian","hello":"P\xebrsh\xebndetje"},{"language":"Amharic","hello":"\u1230\u120b\u121d"},{"language":"Arabic","hello":"\u0645\u0631\u062d\u0628\u0627"},{"language":"Armenian","hello":"\u0532\u0561\u0580\u0565\u0582"},{"language":"Azerbaijani","hello":"Salam"},{"language":"Basque","hello":"Kaixo"},{"language":"Belarusian","hello":"\u0434\u043e\u0431\u0440\u044b \u0434\u0437\u0435\u043d\u044c"},{"language":"Bengali","hello":"\u09b9\u09cd\u09af\u09be\u09b2\u09cb"},{"language":"Bosnian","hello":"zdravo"},{"language":"Bulgarian","hello":"\u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435"},{"language":"Catalan","hello":"Hola"},{"language":"Cebuano","hello":"Hello"},{"language":"Chichewa","hello":"Moni"},{"language":"Chinese (Simplified)","hello":"\u60a8\u597d"},{"language":"Chinese (Traditional)","hello":"\u60a8\u597d"},{"language":"Corsican","hello":"Bonghjornu"},{"language":"Croatian","hello":"zdravo"},{"language":"Czech","hello":"Ahoj"},{"language":"Danish","hello":"Hej"},{"language":"Dutch","hello":"Hallo"},{"language":"English","hello":"Hello"},{"language":"Esperanto","hello":"Saluton"},{"language":"Estonian","hello":"Tere"},{"language":"Filipino","hello":"Hello"},{"language":"Finnish","hello":"Hei"},{"language":"French","hello":"Bonjour"},{"language":"Frisian","hello":"Hello"},{"language":"Galician","hello":"Ola"},{"language":"Georgian","hello":"\u10d2\u10d0\u10db\u10d0\u10e0\u10ef\u10dd\u10d1\u10d0"},{"language":"German","hello":"Hallo"},{"language":"Greek","hello":"\u0393\u03b5\u03b9\u03b1 \u03c3\u03b1\u03c2"},{"language":"Gujarati","hello":"\u0ab9\u0ac7\u0ab2\u0acb"},{"language":"Haitian Creole","hello":"Bonjou"},{"language":"Hausa","hello":"Sannu"},{"language":"Hawaiian","hello":"Aloha\u02bboe"},{"language":"Hebrew","hello":"\u05e9\u05dc\u05d5\u05dd"},{"language":"Hindi","hello":"\u0928\u092e\u0938\u094d\u0924\u0947"},{"language":"Hmong","hello":"Nyob zoo"},{"language":"Hungarian","hello":"Hell\xf3"},{"language":"Icelandic","hello":"Hall\xf3"},{"language":"Igbo","hello":"Ndewo"},{"language":"Indonesian","hello":"Halo"},{"language":"Irish","hello":"Dia duit"},{"language":"Italian","hello":"Ciao"},{"language":"Japanese","hello":"\u3053\u3093\u306b\u3061\u306f"},{"language":"Javanese","hello":"Hello"},{"language":"Kannada","hello":"\u0cb9\u0cb2\u0ccb"},{"language":"Kazakh","hello":"\u0421\u04d9\u043b\u0435\u043c"},{"language":"Khmer","hello":"\u1787\u17c6\u179a\u17b6\u1794\u179f\u17bd\u179a"},{"language":"Korean","hello":"\uc548\ub155\ud558\uc138\uc694."},{"language":"Kurdish (Kurmanji)","hello":"Hello"},{"language":"Kyrgyz","hello":"\u0441\u0430\u043b\u0430\u043c"},{"language":"Lao","hello":"\u0eaa\u0eb0\u0e9a\u0eb2\u0e8d\u0e94\u0eb5"},{"language":"Latin","hello":"salve"},{"language":"Latvian","hello":"Labdien!"},{"language":"Lithuanian","hello":"Sveiki"},{"language":"Luxembourgish","hello":"Moien"},{"language":"Macedonian","hello":"\u0417\u0434\u0440\u0430\u0432\u043e"},{"language":"Malagasy","hello":"Hello"},{"language":"Malay","hello":"Hello"},{"language":"Malayalam","hello":"\u0d39\u0d32\u0d4b"},{"language":"Maltese","hello":"Hello"},{"language":"Maori","hello":"Hiha"},{"language":"Marathi","hello":"\u0939\u0945\u0932\u094b"},{"language":"Mongolian","hello":"\u0421\u0430\u0439\u043d \u0431\u0430\u0439\u043d\u0430 \u0443\u0443"},{"language":"Myanmar (Burmese)","hello":"\u1019\u1004\u103a\u1039\u1002\u101c\u102c\u1015\u102b"},{"language":"Nepali","hello":"\u0928\u092e\u0938\u094d\u0924\u0947"},{"language":"Norwegian","hello":"Hallo"},{"language":"Pashto","hello":"\u0633\u0644\u0627\u0645"},{"language":"Persian","hello":"\u0633\u0644\u0627\u0645"},{"language":"Polish","hello":"Cze\u015b\u0107"},{"language":"Portuguese","hello":"Ol\xe1"},{"language":"Punjabi","hello":"\u0a39\u0a48\u0a32\u0a4b"},{"language":"Romanian","hello":"Alo"},{"language":"Russian","hello":"\u043f\u0440\u0438\u0432\u0435\u0442"},{"language":"Samoan","hello":"Talofa"},{"language":"Scots Gaelic","hello":"Hello"},{"language":"Serbian","hello":"\u0417\u0434\u0440\u0430\u0432\u043e"},{"language":"Sesotho","hello":"Hello"},{"language":"Shona","hello":"Hello"},{"language":"Sindhi","hello":"\u0647\u064a\u0644\u0648"},{"language":"Sinhala","hello":"\u0dc4\u0dd9\u0dbd\u0ddd"},{"language":"Slovak","hello":"ahoj"},{"language":"Slovenian","hello":"Pozdravljeni"},{"language":"Somali","hello":"Hello"},{"language":"Spanish","hello":"Hola"},{"language":"Sundanese","hello":"halo"},{"language":"Swahili","hello":"Sawa"},{"language":"Swedish","hello":"Hall\xe5"},{"language":"Tajik","hello":"\u0421\u0430\u043b\u043e\u043c"},{"language":"Tamil","hello":"\u0bb9\u0bb2\u0bc7\u0bbe"},{"language":"Telugu","hello":"\u0c39\u0c32\u0c4b"},{"language":"Thai","hello":"\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35"},{"language":"Turkish","hello":"Merhaba"},{"language":"Ukranian","hello":"\u0417\u0434\u0440\u0430\u0441\u0442\u0443\u0439\u0442\u0435"},{"language":"Urdu","hello":"\u06c1\u06cc\u0644\u0648"},{"language":"Uzbek","hello":"Salom"},{"language":"Vietnamese","hello":"Xin ch\xe0o"},{"language":"Welsh","hello":"Helo"},{"language":"Xhosa","hello":"Sawubona"},{"language":"Yiddish","hello":"\u05d4\u05e2\u05dc\u05d0"},{"language":"Yoruba","hello":"Kaabo"},{"language":"Zulu","hello":"Sawubona"}]')},4:function(e){e.exports=JSON.parse('{"title":"\xc7a\u011flar Tural\u0131 | JavaScript Developer","description":"\xc7a\u011flar Tural\u0131\'s personal portfolio website","keywords":"\xc7a\u011flar Tural\u0131, Caglar Turali, JavaScript, TypeScript, React, Fullstack JavaScript, Node, Vue, MongoDB, MEAN stack, MERN stack, GatsbyJS, NextJS, Bilen Adam, Astroloci","homepage":"https://turali.js.org","themeColor":"#21252b","image":"https://turali.js.org/images/logo512.png","verification":{"google":"yoA6kTc96mzuKG5z93MpyxJbTBmCeHRsP64QEEGuI28"}}')},51:function(e){e.exports=JSON.parse('{"mainLine":"Hi! I\'m \xc7a\u011flar.","typed":["I\'m a Developer.","I\'m a <strong>JavaScript</strong> Developer.","I\'m a <strong>TypeScript</strong> Enthusiast.","You know where this goes..","..I\'m a <strong>Full-Stack</strong> Web Developer. :)","By the way..","..I\'m an <a href=\'https://www.16personalities.com/intj-personality\' target=\'_blank\'>Architect</a>."]}')},52:function(e,a,t){e.exports=t(156)}},[[52,1,2]]]);
//# sourceMappingURL=main.bdb1ddb1.chunk.js.map
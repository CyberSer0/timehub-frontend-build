(function(e){function t(t){for(var a,r,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({calendar:"calendar",dashboard:"dashboard",kanban:"kanban"}[e]||e)+"."+{calendar:"22b09608",dashboard:"8ec50678",kanban:"3202f362"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={calendar:1,dashboard:1,kanban:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({calendar:"calendar",dashboard:"dashboard",kanban:"kanban"}[e]||e)+"."+{calendar:"3a058cc5",dashboard:"c2f56397",kanban:"2c4015af"}[e]+".css",o=s.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===a||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],b.parentNode.removeChild(b),n(c)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";var a=n("5502");t["a"]=Object(a["a"])({state:{token:"",user:{username:"",pk:"",email:"",first_name:"",last_name:""},kanbany:[]},mutations:{setUser:function(e,t){e.user=t},setToken:function(e,t){e.token=t},logout:function(e){e.token="",e.user={username:"",pk:"",email:"",first_name:"",last_name:""},e.kanbany=[]},setKanbany:function(e,t){e.kanbany=t}},actions:{saveUser:function(e,t){var n=e.commit;n("setUser",t)},saveToken:function(e,t){var n=e.commit;n("setToken",t)},logout:function(e){var t=e.commit;t("logout")},getKanbany:function(e,t){var n=e.commit;n("setKanbany",t)}},getters:{getAuth:function(e){return""!=e.token},getToken:function(e){return e.token},getUser:function(e){return e.user},getKanbany:function(e){return e.kanbany}}})},"17e8":function(e,t,n){},"27d7":function(e,t,n){e.exports=n.p+"img/Wykresy.7b0e9726.png"},"3fe2":function(e,t,n){e.exports=n.p+"img/LogoSkniKod.52edb021.png"},"486d":function(e,t,n){"use strict";n("17e8")},"4b0c":function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a),o=r.a.create({baseURL:"https://projekt-timehub.herokuapp.com/api/",timeout:1e3,headers:{}});t["a"]=o},afbc:function(e,t,n){"use strict";var a=n("6c02"),r=n("7a23"),o={key:0,class:"mainpanel"},c={class:"square"},u=Object(r["g"])("div",{class:"heading"},[Object(r["g"])("h1",null,"TimeHUB")],-1),s={class:"placeholder"},i=Object(r["g"])("div",{style:{clear:"both"}},null,-1),l={class:"placeholder"},d={class:"button1"},b=Object(r["g"])("h4",null,"Zaloguj się",-1),p=[b],f=Object(r["g"])("div",{class:"underbutton"},[Object(r["g"])("div",{class:"tile1"},"Nie jesteś zarejestrowany?"),Object(r["g"])("div",{class:"tile1"},[Object(r["g"])("button",{class:"changebutton",type:"button",onclick:"window.location.href='/register'"}," Zarejestruj się teraz ")])],-1),g={class:"description"},h=Object(r["g"])("h1",null,"O TimeHUB",-1),j={class:"tile2"},m=Object(r["g"])("div",{class:"text"}," Projekt TimeHUB został założony przez ośmioosobową grupę studentów II roku Informatyki. Ośmioro członków Studenckiego Koła Naukowego Informatyków KOD, postanowiło stworzyć system ułatwiający organizację pracy w zespole. Dzięki wsparciu koła naukowego oraz prowadzących projektu możliwe było stworzenie aplikacji TimeHUB. ",-1),v={class:"photo1"},O=["src"],k={class:"tile2"},y={class:"photo2"},w=["src"],z=Object(r["g"])("div",{class:"text"}," TimeHub pozawala na łatwe oraz efektywne organizowanie pracy w zespole. Umożliwia podział pracy między członków zespołu, poprzez przydzielanie zadań do konkretnych użytkowników. Intuicyjny system wykresów zapewnia przejrzyste śledzenie postępów grupy. Platforma jest dostępna zarówno w przhlądarce jak i w aplikacji mobilnej. ",-1);function _(e,t,a,b,_,N){return Object(r["u"])(),Object(r["f"])(r["a"],null,[e.auth?Object(r["e"])("",!0):(Object(r["u"])(),Object(r["f"])("div",o,[Object(r["g"])("div",c,[u,Object(r["g"])("div",s,[Object(r["J"])(Object(r["g"])("input",{class:"login","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"Login"},null,512),[[r["G"],e.username]])]),i,Object(r["g"])("div",l,[Object(r["J"])(Object(r["g"])("input",{class:"haslo","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"Hasło"},null,512),[[r["G"],e.password]])]),Object(r["g"])("div",d,[Object(r["g"])("button",{class:"loginbutton",type:"button",onClick:t[2]||(t[2]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.login&&e.login.apply(e,t)})},p)]),Object(r["g"])("p",null,Object(r["D"])(e.error),1),f])])),Object(r["g"])("div",g,[h,Object(r["g"])("div",j,[m,Object(r["g"])("div",v,[Object(r["g"])("img",{src:n("3fe2"),alt:"SKNI KOD"},null,8,O)])]),Object(r["g"])("div",k,[Object(r["g"])("div",y,[Object(r["g"])("img",{src:n("27d7"),alt:"Wykresy"},null,8,w)]),z])])],64)}var N=n("4b0c"),B=n("0613"),T=Object(r["k"])({components:{},setup:function(){var e="home";return{pageName:e}},data:function(){return{username:"",password:"",error:"",auth:!1}},methods:{login:function(){var e=this,t={username:this.username,password:this.password};N["a"].post("https://projekt-timehub.herokuapp.com/dj_rest_auth/login/",t).then((function(t){B["a"].dispatch("saveUser",t.data.user),B["a"].dispatch("saveToken",t.data.access_token),e.auth=B["a"].getters.getAuth})).catch((function(t){e.error="Konto nie istnieje"}))}}}),U=(n("fa15"),n("6b0d")),I=n.n(U);const S=I()(T,[["render",_]]);var A=S,E=[{path:"/",name:"Home",component:A},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"8e8e"))},beforeEnter:function(e,t){return!!B["a"].getters.getAuth}},{path:"/calendar",name:"Calendar",component:function(){return n.e("calendar").then(n.bind(null,"6ee1"))},beforeEnter:function(e,t){return!!B["a"].getters.getAuth}},{path:"/kanban",name:"Kanban",component:function(){return n.e("kanban").then(n.bind(null,"21c7"))},beforeEnter:function(e,t){return!!B["a"].getters.getAuth}},{path:"/register",name:"Register",component:function(){return n.e("kanban").then(n.bind(null,"e062"))}},{path:"/statistics",name:"Statistics",component:function(){return n.e("dashboard").then(n.bind(null,"35d5"))},beforeEnter:function(e,t){return!!B["a"].getters.getAuth}}],L=Object(a["a"])({history:Object(a["b"])("/"),routes:E});t["a"]=L},c7c4:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={id:"NavBar"},o={class:"LogoDiv"},c=Object(a["g"])("h1",null,"TimeHUB",-1),u={key:0,class:"NavButtonsDiv"},s=Object(a["g"])("div",{class:"NavButton"},"Dashboard",-1),i=Object(a["g"])("div",{class:"NavButton"},"Calendar",-1),l=Object(a["g"])("div",{class:"NavButton"},"Statistics",-1),d={key:1,class:"NavLoginDiv"},b=Object(a["g"])("div",{class:"NavButton"},"Log in",-1),p=Object(a["g"])("div",{class:"NavButton"},"Register",-1),f={key:2,class:"NavLoginDiv"},g=Object(a["g"])("div",{class:"NavButton"},"Log out",-1);function h(e,t,n,h,j,m){var v=Object(a["B"])("router-link"),O=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("nav",r,[Object(a["g"])("div",o,[Object(a["j"])(v,{to:"/"},{default:Object(a["I"])((function(){return[c]})),_:1})]),e.auth?(Object(a["u"])(),Object(a["f"])("div",u,[Object(a["j"])(v,{to:"/dashboard"},{default:Object(a["I"])((function(){return[s]})),_:1}),Object(a["j"])(v,{to:"/calendar"},{default:Object(a["I"])((function(){return[i]})),_:1}),Object(a["j"])(v,{to:"/statistics"},{default:Object(a["I"])((function(){return[l]})),_:1})])):Object(a["e"])("",!0),e.auth?(Object(a["u"])(),Object(a["f"])("div",f,[Object(a["j"])(v,{to:"/",onClick:e.logout},{default:Object(a["I"])((function(){return[g]})),_:1},8,["onClick"])])):(Object(a["u"])(),Object(a["f"])("div",d,[Object(a["j"])(v,{to:"/"},{default:Object(a["I"])((function(){return[b]})),_:1}),Object(a["j"])(v,{to:"/register"},{default:Object(a["I"])((function(){return[p]})),_:1})]))]),Object(a["j"])(O)],64)}var j=n("9ab4"),m=n("0613"),v=n("5502"),O=Object(a["k"])({components:{},setup:function(){var e="home";return{pageName:e}},methods:{logout:function(){m["a"].dispatch("logout")}},computed:Object(j["a"])({},Object(v["b"])({auth:"getAuth"}))}),k=(n("486d"),n("6b0d")),y=n.n(k);const w=y()(O,[["render",h]]);var z=w,_=n("afbc");Object(a["c"])(z).use(m["a"]).use(_["a"]).mount("#app")},fa15:function(e,t,n){"use strict";n("c7c4")}});
//# sourceMappingURL=app.112fde7e.js.map
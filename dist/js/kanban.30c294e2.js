(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["kanban"],{"0966":function(t,e,a){},"0f6e":function(t,e,a){},"21c7":function(t,e,a){"use strict";a.r(e);var c=a("9ab4"),n=a("7a23"),o=a("4b0c"),s=a("0613"),r={class:"kontenerNotatki"},i={class:"kontenerTytulowyNotatki"},l=Object(n["g"])("svg",{id:"ikonkaPrzyciskuUsunieciaKolumny1",class:"ikonaPrzyciskuUsunieciaKolumny",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 490 490","xml:space":"preserve"},[Object(n["g"])("polygon",{xmlns:"http://www.w3.org/2000/svg",points:"386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490   490,386.812 348.187,244.999 490,103.187 "})],-1),u=[l],d=["textContent"],b={class:"kontenerCzasow"},p={class:"czasUtworzenia"},j={class:"tworca"},z={class:"czasRozpoczecia"},O={class:"czasZakonczenia"},w=Object(n["k"])({__name:"Notatka",props:{id:null,kolumna:null,data_stworzenia:null,czy_zrobione:{type:Boolean},czy_wazne:{type:Boolean},zawartosc:null,data_rozpoczecia:null,data_zakonczenia:null,stworzone_przez:null},setup:function(t){var e=t;function a(){return Object(c["b"])(this,void 0,void 0,(function(){return Object(c["d"])(this,(function(t){switch(t.label){case 0:return[4,o["a"].delete("notatka/"+e.id+"/")];case 1:return t.sent(),[2]}}))}))}return function(c,o){return Object(n["u"])(),Object(n["f"])("div",r,[Object(n["g"])("div",i,[Object(n["g"])("div",{class:Object(n["p"])(["czyWaznePasek",{aktywny:e.czy_wazne}])},null,2),Object(n["g"])("button",{class:"przyciskUsunieciaNotatki",onClick:a},u)]),Object(n["g"])("textarea",{class:"zawartoscNotatki",oninput:'this.style.height = "";this.style.height = this.scrollHeight + "px"',textContent:Object(n["D"])(e.zawartosc)},null,8,d),Object(n["g"])("div",b,[Object(n["g"])("span",p,"Stworzono: "+Object(n["D"])(e.data_stworzenia),1),Object(n["g"])("span",j,"Przez: "+Object(n["D"])(t.stworzone_przez),1),Object(n["g"])("span",z,"Od: "+Object(n["D"])(e.data_rozpoczecia),1),Object(n["g"])("span",O,"Do: "+Object(n["D"])(e.data_zakonczenia),1)])])}}});a("49eb");const y=w;var g=y,k={class:"kontenerKolumny"},h={class:"kontenerGornyKolumny"},m={class:"kontenerTytuluKolumny"},v=Object(n["g"])("button",{class:"przyciskOpcjiKolumny"},[Object(n["g"])("svg",{id:"ikonkaPrzyciskuOpcjiKolumny1",class:"ikonaPrzyciskuOpcjiKolumny",xmlns:"http://www.w3.org/2000/svg",version:"1.1",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 569.613 569.614"},[Object(n["g"])("g",null,[Object(n["g"])("g",null,[Object(n["g"])("path",{d:"M371.49,563.638l113.052-65.854c5.26-3.063,9.088-8.094,10.64-13.975c1.555-5.888,0.701-12.148-2.359-17.405    l-30.769-52.807c4.789-6.524,9.083-13.115,12.972-19.918c3.893-6.799,7.405-13.84,10.606-21.275l61.114-0.221    c6.086-0.021,11.915-2.464,16.202-6.781c4.287-4.32,6.687-10.165,6.665-16.255l-0.48-130.833    c-0.024-6.089-2.464-11.919-6.784-16.206c-4.299-4.269-10.113-6.662-16.166-6.662c-0.03,0-0.062,0-0.089,0l-61.182,0.242    c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001,2.481-25.025-8.52-31.316L369.403,5.335    c-5.281-3.023-11.545-3.822-17.424-2.231c-5.872,1.598-10.872,5.462-13.892,10.747L307.665,67    c-15.766-1.662-31.653-1.613-47.363,0.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646    c-5.884-1.551-12.148-0.704-17.408,2.359L85.068,71.823c-10.949,6.38-14.657,20.429-8.28,31.38l30.765,52.831    c-4.761,6.484-9.048,13.076-12.953,19.899c-3.904,6.824-7.417,13.855-10.6,21.255l-61.139,0.235    C10.187,197.472-0.046,207.785,0,220.456L0.48,351.29c0.024,6.086,2.463,11.919,6.784,16.206    c4.299,4.269,10.11,6.661,16.166,6.661c0.028,0,0.058,0,0.086,0l61.203-0.229c6.432,14.452,14.413,28.131,23.868,40.915    l-30.413,53.141c-3.023,5.284-3.825,11.548-2.231,17.423c1.597,5.872,5.462,10.872,10.747,13.896l113.535,64.977    c3.596,2.056,7.513,3.032,11.38,3.032c7.962,0,15.701-4.146,19.942-11.552l30.417-53.149c15.799,1.671,31.684,1.619,47.348-0.144    l30.799,52.89c3.066,5.26,8.094,9.088,13.978,10.643C359.967,567.552,366.23,566.705,371.49,563.638z M341.129,465.911    c-4.902-8.418-14.599-12.815-24.137-10.994c-20.588,3.935-42.174,3.999-63.128,0.202c-9.572-1.735-19.184,2.741-24.015,11.181    l-26.748,46.745l-73.694-42.18l26.75-46.741c4.832-8.439,3.819-19.006-2.521-26.371c-13.978-16.239-24.685-34.594-31.818-54.554    c-3.265-9.131-11.918-15.227-21.61-15.227c-0.027,0-0.058,0-0.085,0l-53.825,0.199l-0.315-84.937l53.819-0.205    c9.722-0.04,18.366-6.197,21.576-15.374c3.69-10.557,7.962-20.019,13.06-28.917c5.101-8.914,11.089-17.387,18.311-25.897    c6.294-7.417,7.225-17.993,2.334-26.396l-27.081-46.509l73.385-42.754l27.078,46.497c4.893,8.4,14.544,12.821,24.095,11.004    c20.716-3.911,42.317-3.978,63.189-0.19c9.557,1.753,19.189-2.742,24.019-11.178l26.753-46.744l73.697,42.179l-26.753,46.742    c-4.826,8.437-3.816,19,2.521,26.368c13.956,16.221,24.669,34.587,31.842,54.59c3.271,9.119,11.919,15.202,21.604,15.202    c0.031,0,0.062,0,0.092,0l53.789-0.214l0.315,84.927l-53.783,0.192c-9.712,0.037-18.351,6.182-21.569,15.347    c-3.746,10.654-8.023,20.131-13.082,28.975c-5.064,8.847-11.067,17.338-18.356,25.958c-6.271,7.418-7.194,17.978-2.305,26.368    l27.078,46.472l-73.391,42.749L341.129,465.911z"}),Object(n["g"])("path",{d:"M392.531,346.458c16.472-28.773,20.746-62.24,12.047-94.232s-29.342-58.685-58.115-75.151    c-18.761-10.74-40.05-16.417-61.562-16.417c-44.446,0-85.762,23.944-107.822,62.485c-33.994,59.404-13.327,135.39,46.071,169.386    c18.764,10.737,40.052,16.411,61.564,16.411C329.158,408.943,370.475,385.001,392.531,346.458z M352.696,323.658    c-13.902,24.293-39.955,39.385-67.985,39.385c-13.528,0-26.934-3.58-38.764-10.349c-37.433-21.426-50.456-69.312-29.033-106.751    c13.905-24.291,39.958-39.385,67.987-39.385c13.528,0,26.932,3.58,38.762,10.355c18.136,10.379,31.142,27.197,36.628,47.359    C365.771,284.435,363.075,305.524,352.696,323.658z"})])])])],-1),f={class:"kontenerZawartosciKolumny"},_=Object(n["g"])("div",{class:"plusKursoraDodajacegoZawartoscKolumny"},"+",-1),K=Object(n["g"])("div",{class:"tekstKursoraDodajacegoZawartoscKolumny"},"Dodaj nową notatkę",-1),x=[_,K],D=Object(n["k"])({__name:"Kolumna",props:{id:null,tytul:null},setup:function(t){var e=this,a=t,r=Object(n["z"])([]);function i(){return Object(c["b"])(this,void 0,void 0,(function(){var t,e;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return t=new Date,Intl.DateTimeFormat("default",{dateStyle:"long"}).format(t),[4,o["a"].post("notatka/",{kolumna:a.id,data_stworzenia:t,czy_zrobione:!1,czy_wazne:!1,zawartosc:"Napisz coś...",data_rozpoczecia:t,data_zakonczenia:t},{headers:{Authorization:"Bearer "+s["a"].getters.getToken}})];case 1:return e=c.sent(),r.value.push(e.data),console.log(r.value),[2]}}))}))}return Object(n["r"])((function(){return Object(c["b"])(e,void 0,void 0,(function(){var t,e;return Object(c["d"])(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,o["a"].get("notatka/")];case 1:return t=c.sent(),t.data.forEach((function(t){t.kolumna==a.id&&r.value.push(t)})),[3,3];case 2:return e=c.sent(),console.log("Błąd przy wpisywaniu notatek do kolumny: "+a.id+" \n"+e),[3,3];case 3:return[2]}}))}))})),function(t,e){return Object(n["u"])(),Object(n["f"])("div",k,[Object(n["g"])("div",h,[Object(n["g"])("div",m,Object(n["D"])(a.tytul),1),v]),Object(n["g"])("div",f,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.value,(function(t){return Object(n["u"])(),Object(n["d"])(g,{id:t.id,kolumna:t.kolumna,data_stworzenia:t.data_stworzenia,czy_zrobione:t.czy_zrobione,czy_wazne:t.czy_wazne,zawartosc:t.zawartosc,data_rozpoczecia:t.data_rozpoczecia,data_zakonczenia:t.data_zakonczenia,stworzone_przez:t.stworzone_przez,note:"{note}",key:t.id},null,8,["id","kolumna","data_stworzenia","czy_zrobione","czy_wazne","zawartosc","data_rozpoczecia","data_zakonczenia","stworzone_przez"])})),128)),Object(n["g"])("button",{class:"kursorDodajacyZawartoscKolumny",onClick:i},x)])])}}});a("9275");const U=D;var B=U,C=a("bc3a"),P=a.n(C),T=function(t){return Object(n["x"])("data-v-7119ee0d"),t=t(),Object(n["v"])(),t},N={class:"kanban"},Z={class:"kontenerTytulowy"},I={class:"kontenerWszystkichKolumn"},H=T((function(){return Object(n["g"])("div",{class:"plusKursoraDodajacegoZawartoscKolumny"},"+",-1)})),J=T((function(){return Object(n["g"])("div",{class:"tekstKursoraDodajacegoZawartoscKolumny"},"Dodaj nową kolumnę",-1)})),L=[H,J],E=Object(n["k"])({__name:"Kanban",props:{id:null,tytul:null,czy_zautomatyzowane:{type:Boolean}},setup:function(t){var e=this,a=t,o=P.a.create({baseURL:"https://projekt-timehub.herokuapp.com/api/",timeout:1e3,headers:{}}),r=Object(n["z"])([]);function i(){return Object(c["b"])(this,void 0,void 0,(function(){var t;return Object(c["d"])(this,(function(e){switch(e.label){case 0:return[4,o.post("kolumny/",{tablica:a.id,tytul:"Kolumna"},{headers:{Authorization:"Bearer "+s["a"].getters.getToken}})];case 1:return t=e.sent(),r.value.push(t.data),console.log(t.data),[2]}}))}))}return Object(n["r"])((function(){return Object(c["b"])(e,void 0,void 0,(function(){var t;return Object(c["d"])(this,(function(e){switch(e.label){case 0:return[4,o.get("tablicaKolumny/13/")];case 1:return t=e.sent(),console.log(t.data),t.data.forEach((function(t){r.value.push(t)})),[2]}}))}))})),function(t,e){return Object(n["u"])(),Object(n["f"])("div",N,[Object(n["g"])("div",Z,Object(n["D"])(a.tytul),1),Object(n["g"])("div",I,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(r.value,(function(t){return Object(n["u"])(),Object(n["d"])(B,{id:t.id,tytul:t.tytul,col:"{col}",key:t.id},null,8,["id","tytul"])})),128)),Object(n["g"])("button",{class:"kursorDodajacyKolumny",onClick:i},L)])])}}}),G=(a("c983"),a("6b0d")),S=a.n(G);const A=S()(E,[["__scopeId","data-v-7119ee0d"]]);var M=A,V={class:"kanbanPage"},W=Object(n["k"])({__name:"KanbanPage",setup:function(t){var e=this,a=Object(n["z"])({id:0,tytul:"",czy_zautomatyzowane:!1});return Object(n["r"])((function(){return Object(c["b"])(e,void 0,void 0,(function(){var t;return Object(c["d"])(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,o["a"].get("tablice/13/")];case 1:return t=e.sent(),a.value=t.data,[3,3];case 2:return e.sent(),void 0==a.value&&console.log("Błąd w pozyskaniu danych tablicy"),[3,3];case 3:return[2]}}))}))})),function(t,e){return Object(n["u"])(),Object(n["f"])("div",V,[Object(n["j"])(M,{id:Object(n["E"])(a).id,tytul:Object(n["E"])(a).tytul,czy_zautomatyzowane:Object(n["E"])(a).czy_zautomatyzowane},null,8,["id","tytul","czy_zautomatyzowane"])])}}});a("3f87");const R=W;e["default"]=R},"3f87":function(t,e,a){"use strict";a("5deb")},"49eb":function(t,e,a){"use strict";a("0f6e")},"58ad":function(t,e,a){"use strict";a("6f7e")},"5deb":function(t,e,a){},"6f7e":function(t,e,a){},"808a":function(t,e,a){},9275:function(t,e,a){"use strict";a("0966")},c983:function(t,e,a){"use strict";a("808a")},e062:function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={key:0,class:"mainpanel"},o={class:"square"},s=Object(c["g"])("div",{class:"heading"},[Object(c["g"])("h1",null,"TimeHUB")],-1),r={class:"placeholder"},i=Object(c["g"])("div",{style:{clear:"both"}},null,-1),l={class:"placeholder"},u={class:"placeholder"},d=Object(c["g"])("div",{style:{clear:"both"}},null,-1),b={class:"placeholder"},p={class:"error"},j={class:"button1"},z=Object(c["g"])("h4",null,"Zarejestruj się",-1),O=[z],w=Object(c["g"])("div",{class:"underbutton"},[Object(c["g"])("div",{class:"tile1"}," Jesteś już zarejestrowany? "),Object(c["g"])("div",{class:"tile"},[Object(c["g"])("button",{class:"changebutton",type:"button",onclick:"window.location.href='/'"}," Zaloguj się ")])],-1),y={class:"description"},g=Object(c["g"])("h1",null," O TimeHUB ",-1),k={class:"tile2"},h=Object(c["g"])("div",{class:"text"}," Projekt TimeHUB został założony przez ośmioosobową grupę studentów II roku Informatyki. Ośmioro członków Studenckiego Koła Naukowego Informatyków KOD, postanowiło stworzyć system ułatwiający organizację pracy w zespole. Dzięki wsparciu koła naukowego oraz prowadzących projektu możliwe było stworzenie aplikacji TimeHUB. ",-1),m={class:"photo1"},v=["src"],f={class:"tile2"},_={class:"photo2"},K=["src"],x=Object(c["g"])("div",{class:"text"}," TimeHub pozawala na łatwe oraz efektywne organizowanie pracy w zespole. Umożliwia podział pracy między członków zespołu, poprzez przydzielanie zadań do konkretnych użytkowników. Intuicyjny system wykresów zapewnia przejrzyste śledzenie postępów grupy. Platforma jest dostępna zarówno w przhlądarce jak i w aplikacji mobilnej. ",-1);function D(t,e,z,D,U,B){return Object(c["u"])(),Object(c["f"])(c["a"],null,[t.auth?Object(c["e"])("",!0):(Object(c["u"])(),Object(c["f"])("div",n,[Object(c["g"])("div",o,[s,Object(c["g"])("div",r,[Object(c["J"])(Object(c["g"])("input",{class:"login","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.login=e}),type:"text",placeholder:"Login"},null,512),[[c["G"],t.login]])]),i,Object(c["g"])("div",l,[Object(c["J"])(Object(c["g"])("input",{class:"haslo","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.email=e}),type:"email",placeholder:"Email"},null,512),[[c["G"],t.email]])]),Object(c["g"])("div",u,[Object(c["J"])(Object(c["g"])("input",{class:"login","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.password=e}),type:"password",placeholder:"Hasło"},null,512),[[c["G"],t.password]])]),d,Object(c["g"])("div",b,[Object(c["J"])(Object(c["g"])("input",{class:"haslo","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.password_confirm=e}),type:"password",placeholder:"Powtórz hasło"},null,512),[[c["G"],t.password_confirm]])]),Object(c["g"])("p",p,Object(c["D"])(t.error),1),Object(c["g"])("div",j,[Object(c["g"])("button",{class:"loginbutton",type:"button",onClick:e[4]||(e[4]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return t.register&&t.register.apply(t,e)})},O)]),w])])),Object(c["g"])("div",y,[g,Object(c["g"])("div",k,[h,Object(c["g"])("div",m,[Object(c["g"])("img",{src:a("3fe2"),alt:"SKNI KOD"},null,8,v)])]),Object(c["g"])("div",f,[Object(c["g"])("div",_,[Object(c["g"])("img",{src:a("27d7"),alt:"Wykresy"},null,8,K)]),x])])],64)}var U=a("4b0c"),B=a("afbc"),C=Object(c["k"])({components:{},setup:function(){var t="home";return{pageName:t}},data:function(){return{login:"",password:"",email:"",password_confirm:"",error:""}},methods:{register:function(){var t=this,e={username:this.login,email:this.email,password1:this.password,password2:this.password_confirm};U["a"].post("https://projekt-timehub.herokuapp.com/dj_rest_auth/registration/",e).then((function(t){B["a"].push("/")})).catch((function(e){t.error="Sprawdź podane dane"}))}}}),P=(a("58ad"),a("6b0d")),T=a.n(P);const N=T()(C,[["render",D]]);e["default"]=N}}]);
//# sourceMappingURL=kanban.30c294e2.js.map
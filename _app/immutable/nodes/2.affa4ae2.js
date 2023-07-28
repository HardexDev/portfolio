import{A as xe,s as ue,f as u,g as f,B as N,j as n,i as W,y as Z,d as _,a as x,l as K,h as M,c as L,m as X,C as he,D as de,x as i,E as oe,n as ee,e as me,F as Te,o as Je,G as qe,H as Ye}from"../chunks/scheduler.826d4455.js";import{t as R,a as z,S as fe,i as pe,g as Pe,c as De,b as le,d as re,m as ie,e as ne}from"../chunks/index.2c395ff0.js";function ge(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function $e(a,e){R(a,1,1,()=>{e.delete(a.key)})}function Ie(a,e,s,t,l,o,r,b,y,v,g,D){let k=a.length,m=o.length,h=k;const p={};for(;h--;)p[a[h].key]=h;const H=[],P=new Map,$=new Map,E=[];for(h=m;h--;){const T=D(l,o,h),S=s(T);let A=r.get(S);A?t&&E.push(()=>A.p(T,e)):(A=v(S,T),A.c()),P.set(S,H[h]=A),S in p&&$.set(S,Math.abs(h-p[S]))}const w=new Set,C=new Set;function I(T){z(T,1),T.m(b,g),r.set(T.key,T),g=T.first,m--}for(;k&&m;){const T=H[m-1],S=a[k-1],A=T.key,V=S.key;T===S?(g=T.first,k--,m--):P.has(V)?!r.has(A)||w.has(A)?I(T):C.has(V)?k--:$.get(A)>$.get(V)?(C.add(A),I(T)):(w.add(V),k--):(y(S,r),k--)}for(;k--;){const T=a[k];P.has(T.key)||y(T,r)}for(;m;)I(H[m-1]);return xe(E),H}function Qe(a){let e,s=`<div class="row svelte-ko7ecg"><div class="image svelte-ko7ecg"><img src="person.png" alt="" class="svelte-ko7ecg"/></div> <div class="text svelte-ko7ecg"><h2 class="svelte-ko7ecg">Who Am I ?</h2> <p class="svelte-ko7ecg">I am currently studying Computer Science at the <a href="https://www.utbm.fr/" target="_blank" class="svelte-ko7ecg">University of Technology of Belfort-Montbéliard (UTBM), in France</a>.
                I am passionate about software development and programming in general and love building tools that helps people.</p></div></div> <div class="row reverse svelte-ko7ecg"><div class="text svelte-ko7ecg"><h2 class="svelte-ko7ecg">Programming languages and tools</h2> <p class="svelte-ko7ecg">During my studies and thanks to the different projects I have worked on, I have learned many technologies. I have mostly used <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank" class="svelte-ko7ecg">Java</a> and
                <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank" class="svelte-ko7ecg">C#</a> to build applications but also more low-level languages such as <a href="https://en.wikipedia.org/wiki/The_C_Programming_Language" target="_blank" class="svelte-ko7ecg">C</a> and <a href="https://en.wikipedia.org/wiki/C%2B%2B" class="svelte-ko7ecg">C++</a>.
                I also know web technologies and have worked with <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" class="svelte-ko7ecg">NodeJS</a>, <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" class="svelte-ko7ecg">React</a> and <a href="https://en.wikipedia.org/wiki/PHP" target="_blank" class="svelte-ko7ecg">PHP</a>.
                I am used to version control tools such as <a href="https://en.wikipedia.org/wiki/Git" target="_blank" class="svelte-ko7ecg">Git</a>.</p></div> <div class="image swaped svelte-ko7ecg"><img src="coding.png" alt="" class="svelte-ko7ecg"/></div></div> <div class="row skills svelte-ko7ecg"><a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&amp;logo=java&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&amp;logo=c-sharp&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&amp;logo=c&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&amp;logo=c%2B%2B&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&amp;logo=python&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&amp;logo=sass&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&amp;logo=vue.js&amp;logoColor=4FC08D" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&amp;logo=php&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Symfony-14354C?style=for-the-badge&amp;logo=symfony&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Neo4j-0186F7?style=for-the-badge&amp;logo=neo4j&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Redis-D82C20?style=for-the-badge&amp;logo=redis&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Docker-002C66.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Git-E74C3C?style=for-the-badge&amp;logo=git&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Unity-100000?style=for-the-badge&amp;logo=unity&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a></div> <div class="row svelte-ko7ecg"><div class="image svelte-ko7ecg"><img src="software.png" alt="" class="svelte-ko7ecg"/></div> <div class="text svelte-ko7ecg"><h2 class="svelte-ko7ecg">Software</h2> <p class="svelte-ko7ecg">The operating system i am mainly working on is <a href="https://en.wikipedia.org/wiki/Windows_10" target="_blank" class="svelte-ko7ecg">Windows 10</a> but I also have some knowledge with <a href="https://en.wikipedia.org/wiki/Ubuntu" target="_blank" class="svelte-ko7ecg">Ubuntu</a>.
               For programming, I use a lot <a href="https://en.wikipedia.org/wiki/Visual_Studio_Code" target="_blank" class="svelte-ko7ecg">Visual Studio Code</a> but also <a href="https://en.wikipedia.org/wiki/IntelliJ_IDEA" target="_blank" class="svelte-ko7ecg">IntelliJ IDEA</a> and <a href="https://en.wikipedia.org/wiki/Eclipse_(software)" target="_blank" class="svelte-ko7ecg">Eclipse</a>.
               I also have experience with the <a href="https://en.wikipedia.org/wiki/Microsoft_Office" target="_blank" class="svelte-ko7ecg">Office suite</a>.</p></div></div> <div class="row skills svelte-ko7ecg"><a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&amp;logo=visual%20studio%20code&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Visual_Studio-35294F?style=for-the-badge&amp;logo=visual%20studio&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&amp;logo=intellij-idea&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Android_Studio-88BB56.svg?style=for-the-badge&amp;logo=android%20studio&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&amp;logo=eclipse&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Bitbucket-257CF1?style=for-the-badge&amp;logo=bitbucket&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Jira-2684FF?style=for-the-badge&amp;logo=jira&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Microsoft_Office-D54502?style=for-the-badge&amp;logo=microsoft%20office&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Windows%2010-001A37?style=for-the-badge&amp;logo=windows&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a> <a href="" class="svelte-ko7ecg"><img src="https://img.shields.io/badge/Ubuntu-DE4815?style=for-the-badge&amp;logo=ubuntu&amp;logoColor=white" alt="" class="svelte-ko7ecg"/></a></div>`;return{c(){e=u("div"),e.innerHTML=s,this.h()},l(t){e=f(t,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),N(e)!=="svelte-wm6tx8"&&(e.innerHTML=s),this.h()},h(){n(e,"class","Presentation svelte-ko7ecg"),n(e,"id","presentation")},m(t,l){W(t,e,l)},p:Z,i:Z,o:Z,d(t){t&&_(e)}}}class Ke extends fe{constructor(e){super(),pe(this,e,null,Qe,ue,{})}}const Ee=[[{title:"NexCity",imageUrl:"nexcity.png",summary:"Project done for my semester project studying virtual worlds at UTBM. The goal was to create a Virtual Reality video-game in which you create your own smart city, that is to say an ecological and sustainable city, thanks several 3D objects that we added in the game.",language:"Unity 3D VR",frameworks:"No Framework",software:"Unity, Blender, Github",team:"4 students",year:"2023",githubLink:"https://github.com/HardexDev/NextCity"},{title:"Blender Living Room Modelisation",imageUrl:"blender.png",summary:"Project done for my 3D modelisation class. The goal was to recreate a realistic living room in 3D using the Blender modeling software. We were free in our creative choices",language:"3D",frameworks:"No Framework",software:"Blender",team:"Solo project",year:"2023",githubLink:""},{title:"Fluz",imageUrl:"fluz.png",summary:'Mobile application developed for SY43 UV at UTBM (android course). The goal was to create a "zero budget app" that is to say that total expenses must be equal to total income. Very nice project to develop Android skills. Agile project management was used.',language:"Android Kotlin",frameworks:"MVVM design pattern, ROOM database",software:"Android Studio, Astah (for conception), GitHub",team:"2 students",year:"2022",githubLink:"https://github.com/gxfab/SY43_P2022/tree/Fluz"},{title:"Parking Simulation",imageUrl:"parking.png",summary:"Project developed for my SY40 class (Operating Systems). The goal was to develop a program that simulates the behaviour of a parking (entrance and exit handling, time handling etc...) but using low level tools (threads, signals, semaphores, mutex, IPC objects etc...). This was really great to learn more about system and low level programming.",language:"C",frameworks:"No Framework",software:"Visual Studio Code, GitHub",team:"2 students",year:"2022",githubLink:"https://github.com/HardexDev/Parking"},{title:"Routing Optimisation",imageUrl:"sessad.png",summary:"Project developed for my IT45 class (Operational Research). The goal was to develop an algorithm to solve a routing problem with several constraints. We decided to implement a genetic algorithm, it turned out well and gives really satisfying results, close from optimal one.",language:"Java",frameworks:"No Framework",software:"Intellij, GitHub",team:"2 students",year:"2022",githubLink:"https://github.com/HardexDev/Projet-IT45"},{title:"Kanagawa",imageUrl:"kanagawa.jpg",summary:"Project done in context of UTBM AP4B (OOP programming class). The goal was to re-create the board game Kanagawa (see the rules <a href='https://cdn.1j1ju.com/medias/7d/9c/d0-kanagawa-rulebook.pdf' target='_blank'>here</a>) but adapting it to how the UTBM works (UV system etc...), with a GUI interface.",language:"Java",frameworks:"JavaFX",software:"Intellij, SceneBuilder, Visual Paradigm (for conception), GitHub",team:"4 students",year:"2021",githubLink:"https://github.com/HardexDev/Kanagawa"},{title:"Submarine Simulation",imageUrl:"submarine.png",summary:"Project done in context of UTBM AP4A (OOP programming class). The goal was to simulate data sensors in a submarine (Temperature, humidity, light, pressure). The data had to be retreived at specific time intervals for each sensors (usage of threads)",language:"C++",frameworks:"No Framework",software:"Eclipse, GitHub",team:"Solo project",year:"2021",githubLink:""},{title:"MedCare App",imageUrl:"medical.png",summary:"Project done for my last semester at the Institute of Technology of Dijon. This mobile app allows you to manage your medical appointments, for patients and professionals. You have a calendar with your next appointments, a list of your doctors/patients as well as a list of your personal medical documents.",language:"JavaScript, Dart",frameworks:"NodeJS (Express, for backend server), Flutter, MongoDB",software:"Visual Studio Code, Android Studio (for virtual device)",team:"3 students",year:"2021",githubLink:""},{title:"Crypto RSA",imageUrl:"cryptographie.png",summary:"Project done for my cryptography class at the Institute of Technology of Dijon. The final goal was to implement the RSA algorithm through a game developed by our professor",language:"Java",frameworks:"No framework",software:"IntellijIDEA, GitHub",team:"3 students",year:"2021",githubLink:"https://github.com/HardexDev/CryptoRSA"},{title:"Crypto Star Wars",imageUrl:"light-saber.png",summary:"Project done for my cryptography class at the Institute of Technology of Dijon. The goal of this project was to solve cryptography problems through a game in the Star Wars theme, developed by our professor",language:"Java",frameworks:"No framework",software:"IntellijIDEA, GitHub",team:"3 students",year:"2021",githubLink:"https://github.com/HardexDev/CryptoStarWars"},{title:"Menu Generator",imageUrl:"menu.png",summary:"Tutored project of my third semester at the Institute of Technology of Dijon. The goal of this project was to create a random menu generator web app. In order to do this, we had sample data in our database like aliments, dishes, desserts, fruits etc... The menu of the week was randomly generated according to the current season and the parameters of the user (disliked aliments and more). We had several meetings with our professor, who played the role of the client.",language:"PHP",frameworks:"Symfony, MySQL, Bootstrap (for UI)",software:"Visual Studio Code, MySQL Workbench, GitHub",team:"5 students",year:"2020",githubLink:"https://github.com/HardexDev/MenuGenerator"},{title:"Project Management Software",imageUrl:"team.png",summary:"Tutored project of my second semester at the Institute of Technology of Dijon. The goal of this project was to create a web app where workers could see which projects they were assigned to, as well as the details about each project. The worker could change the project status do 'finished' when the project was completed. Two of our professors played the role of the clients, we had several meetings with them.",language:"PHP",frameworks:"MySQL, Bootstrap (for UI)",software:"Visual Studio Code, MySQL Workbench, GitHub",team:"5 students",year:"2020",githubLink:""},{title:"IUT Dijon's website",imageUrl:"iut.png",summary:"Tutored project of my first semester at the Institute of Technology of Dijon. The goal was to create a website presenting the Institute of Technology to new students",language:"Wordpress",frameworks:"Elementor",software:"No specific software used",team:"3 students",year:"2019",githubLink:""},{title:"SkyIUT",imageUrl:"skyrim.jpg",summary:"Project done in context of Algorithm class at Institute of Technology of Dijon, the goal was to create a console game, with a story in the universe of Skyrim. The player could make choices to finally fight the final boss.",language:"Pascal",frameworks:"No framework",software:"Lazarus (Pascal IDE)",team:"3 students",year:"2019",githubLink:""}],[{title:"Portfolio",imageUrl:"logo.png",summary:"The portfolio you are looking at right now !",language:"JavaScript",frameworks:"Svelte, Sass",software:"Visual Studio Code, GitHub",team:"Solo project",year:"2023",githubLink:"https://github.com/HardexDev/portfolio"},{title:"Movie Club",imageUrl:"movie-club.png",summary:"Personal project done on my spare time to learn React. Web app that allows to to search for movies with a nice UI. Users can also add movies to their favorites and see details about a specific movie. All the data comes from the TMDB public api. The app was deployed on Heroku at <a href='https://movie-club-app.herokuapp.com/' target='_blank'>this adress.</a>",language:"JavaScript",frameworks:"React, Sass",software:"Visual Studio Code, GitHub",team:"Solo project",year:"2022",githubLink:"https://github.com/HardexDev/Movies-App"},{title:"The Intern",imageUrl:"intern.png",summary:"Project done in the context of UTBM intersemester's Game Jam. We had one week to create a video-game on the theme : Every Death is Meaningful. Our game is a point and click, you play a soul reaper who must choose between killing someone or keeping him alive. To make his choice, the player will have to retreive information about each person, thanks to their souls. The game was ranked 4 out of 11 participants. You can download the game <a href='' target='_blank'>here</a>.",language:"Unity (C#)",frameworks:"No Framework",software:"Unity, Visual Studio, GitHub",team:"2 students",year:"2022",githubLink:"https://github.com/HardexDev/EveryDeathCount"},{title:"Todo App",imageUrl:"checklist.png",summary:"Small project to learn the Django framework. This is a classic todo-app where the user can : Create, Update or Delete todos. All the data is stored in a database (sqlite)",language:"Python",frameworks:"Django",software:"Visual Studio Code, SQLite, GitHub",team:"Solo project",year:"2021",githubLink:"https://github.com/HardexDev/TODO-APP"}],[{title:"WCS Software",imageUrl:"warehouse.png",summary:"I did my second year internship in a company which main activity is logistics. They create products to help automating warehouses. I worked in an engineering team for three months to develop a new Warehouse Control System (WCS), which is basically a software which controls all the different machines in a warehouse and tries to optimize the products flows. I learned a lot technically, but also about team-working in a tech company.",language:"Java",frameworks:"Maven, MongoDB, Redis, Neo4j, Docker, Git",software:"Intellij, Jira, Bitbucket, LucidChart (for diagrams), Slack",team:"About 15 engineers",year:"2021",githubLink:""}]];function Ae(a){let e,s,t=a[0].title+"",l,o,r,b=a[0].summary+"",y,v,g,D,k,m="Proramming Language :",h,p=a[0].language+"",H,P,$,E,w="Frameworks/Tools :",C,I=a[0].frameworks+"",T,S,A,V,te="Software : ",se=a[0].software+"",q,ce,G,Y,d="Team : ",c=a[0].team+"",j,ae,O,J,F="Year : ",ve=a[0].year+"",we,be;function ze(B,U){return B[4]?Xe:Ze}let ke=ze(a)(a);return{c(){e=u("div"),s=u("p"),l=K(t),o=x(),r=u("p"),y=K(b),v=x(),g=u("div"),D=u("p"),k=u("span"),k.textContent=m,h=x(),H=K(p),P=x(),$=u("p"),E=u("span"),E.textContent=w,C=x(),T=K(I),S=x(),A=u("p"),V=u("span"),V.textContent=te,q=K(se),ce=x(),G=u("p"),Y=u("span"),Y.textContent=d,j=K(c),ae=x(),O=u("p"),J=u("span"),J.textContent=F,we=K(ve),be=x(),ke.c(),this.h()},l(B){e=f(B,"DIV",{class:!0});var U=M(e);s=f(U,"P",{class:!0});var He=M(s);l=X(He,t),He.forEach(_),o=L(U),r=f(U,"P",{class:!0});var Me=M(r);y=X(Me,b),Me.forEach(_),v=L(U),g=f(U,"DIV",{class:!0});var Q=M(g);D=f(Q,"P",{class:!0});var ye=M(D);k=f(ye,"SPAN",{class:!0,"data-svelte-h":!0}),N(k)!=="svelte-hjfxbq"&&(k.textContent=m),h=L(ye),H=X(ye,p),ye.forEach(_),P=L(Q),$=f(Q,"P",{class:!0});var _e=M($);E=f(_e,"SPAN",{class:!0,"data-svelte-h":!0}),N(E)!=="svelte-1cyjp6d"&&(E.textContent=w),C=L(_e),T=X(_e,I),_e.forEach(_),S=L(Q),A=f(Q,"P",{class:!0});var Ce=M(A);V=f(Ce,"SPAN",{class:!0,"data-svelte-h":!0}),N(V)!=="svelte-13puo0p"&&(V.textContent=te),q=X(Ce,se),Ce.forEach(_),ce=L(Q),G=f(Q,"P",{class:!0});var Se=M(G);Y=f(Se,"SPAN",{class:!0,"data-svelte-h":!0}),N(Y)!=="svelte-c4va91"&&(Y.textContent=d),j=X(Se,c),Se.forEach(_),ae=L(Q),O=f(Q,"P",{class:!0});var je=M(O);J=f(je,"SPAN",{class:!0,"data-svelte-h":!0}),N(J)!=="svelte-tna80l"&&(J.textContent=F),we=X(je,ve),je.forEach(_),Q.forEach(_),be=L(U),ke.l(U),U.forEach(_),this.h()},h(){n(s,"class","title bold svelte-12d5tef"),n(r,"class","summary svelte-12d5tef"),n(k,"class","svelte-12d5tef"),n(D,"class","svelte-12d5tef"),n(E,"class","svelte-12d5tef"),n($,"class","svelte-12d5tef"),n(V,"class","svelte-12d5tef"),n(A,"class","svelte-12d5tef"),n(Y,"class","svelte-12d5tef"),n(G,"class","svelte-12d5tef"),n(J,"class","svelte-12d5tef"),n(O,"class","svelte-12d5tef"),n(g,"class","data svelte-12d5tef"),n(e,"class","card-content svelte-12d5tef")},m(B,U){W(B,e,U),i(e,s),i(s,l),i(e,o),i(e,r),i(r,y),i(e,v),i(e,g),i(g,D),i(D,k),i(D,h),i(D,H),i(g,P),i(g,$),i($,E),i($,C),i($,T),i(g,S),i(g,A),i(A,V),i(A,q),i(g,ce),i(g,G),i(G,Y),i(G,j),i(g,ae),i(g,O),i(O,J),i(O,we),i(e,be),ke.m(e,null)},p(B,U){U&1&&t!==(t=B[0].title+"")&&ee(l,t),U&1&&b!==(b=B[0].summary+"")&&ee(y,b),U&1&&p!==(p=B[0].language+"")&&ee(H,p),U&1&&I!==(I=B[0].frameworks+"")&&ee(T,I),U&1&&se!==(se=B[0].software+"")&&ee(q,se),U&1&&c!==(c=B[0].team+"")&&ee(j,c),U&1&&ve!==(ve=B[0].year+"")&&ee(we,ve),ke.p(B,U)},d(B){B&&_(e),ke.d()}}}function Xe(a){let e,s="Code not available";return{c(){e=u("h3"),e.textContent=s,this.h()},l(t){e=f(t,"H3",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1csqqhf"&&(e.textContent=s),this.h()},h(){n(e,"class","svelte-12d5tef")},m(t,l){W(t,e,l)},p:Z,d(t){t&&_(e)}}}function Ze(a){let e,s='<img src="github.png" alt="" class="svelte-12d5tef"/>See on GitHub',t,l;return{c(){e=u("button"),e.innerHTML=s,this.h()},l(o){e=f(o,"BUTTON",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-1gfil7s"&&(e.innerHTML=s),this.h()},h(){n(e,"class","svelte-12d5tef")},m(o,r){W(o,e,r),t||(l=oe(e,"click",a[6]),t=!0)},p:Z,d(o){o&&_(e),t=!1,l()}}}function et(a){let e,s,t,l,o,r,b=a[0].title+"",y,v,g=a[0].language+"",D,k,m,h,p,H,P,$,E,w=a[1]&&Ae(a);return{c(){e=u("div"),s=u("div"),t=u("img"),o=x(),r=u("p"),y=K(b),v=K(" - "),D=K(g),k=x(),m=u("img"),P=x(),w&&w.c(),this.h()},l(C){e=f(C,"DIV",{class:!0});var I=M(e);s=f(I,"DIV",{class:!0});var T=M(s);t=f(T,"IMG",{src:!0,alt:!0,class:!0}),o=L(T),r=f(T,"P",{class:!0});var S=M(r);y=X(S,b),v=X(S," - "),D=X(S,g),S.forEach(_),k=L(T),m=f(T,"IMG",{class:!0,src:!0,alt:!0}),T.forEach(_),P=L(I),w&&w.l(I),I.forEach(_),this.h()},h(){he(t.src,l=a[0].imageUrl)||n(t,"src",l),n(t,"alt",""),n(t,"class","svelte-12d5tef"),n(r,"class","svelte-12d5tef"),n(m,"class",h=de(a[1]?"up-arrow":"down-arrow")+" svelte-12d5tef"),he(m.src,p=a[1]?"up-chevron-white.png":"down-chevron-white.png")||n(m,"src",p),n(m,"alt",""),n(s,"class",H=de(a[1]?"card-header open":"card-header")+" svelte-12d5tef"),n(e,"class","Project svelte-12d5tef")},m(C,I){W(C,e,I),i(e,s),i(s,t),i(s,o),i(s,r),i(r,y),i(r,v),i(r,D),i(s,k),i(s,m),i(e,P),w&&w.m(e,null),$||(E=oe(s,"click",a[5]),$=!0)},p(C,[I]){I&1&&!he(t.src,l=C[0].imageUrl)&&n(t,"src",l),I&1&&b!==(b=C[0].title+"")&&ee(y,b),I&1&&g!==(g=C[0].language+"")&&ee(D,g),I&2&&h!==(h=de(C[1]?"up-arrow":"down-arrow")+" svelte-12d5tef")&&n(m,"class",h),I&2&&!he(m.src,p=C[1]?"up-chevron-white.png":"down-chevron-white.png")&&n(m,"src",p),I&2&&H!==(H=de(C[1]?"card-header open":"card-header")+" svelte-12d5tef")&&n(s,"class",H),C[1]?w?w.p(C,I):(w=Ae(C),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:Z,o:Z,d(C){C&&_(e),w&&w.d(),$=!1,E()}}}function tt(a,e,s){let t=!1,{data:l}=e;const o=()=>{s(1,t=!t)},r=()=>{window.open(l==null?void 0:l.githubLink,"_blank")},b=(l==null?void 0:l.githubLink)==="",y=()=>o(),v=()=>r();return a.$$set=g=>{"data"in g&&s(0,l=g.data)},[l,t,o,r,b,y,v]}class Le extends fe{constructor(e){super(),pe(this,e,tt,et,ue,{data:0})}}function Ue(a,e,s){const t=a.slice();return t[3]=e[s],t}function Ve(a,e,s){const t=a.slice();return t[3]=e[s],t}function Ne(a,e,s){const t=a.slice();return t[3]=e[s],t}function Be(a,e){let s,t,l;return t=new Le({props:{data:e[3]}}),{key:a,first:null,c(){s=me(),le(t.$$.fragment),this.h()},l(o){s=me(),re(t.$$.fragment,o),this.h()},h(){this.first=s},m(o,r){W(o,s,r),ie(t,o,r),l=!0},p(o,r){e=o},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){R(t.$$.fragment,o),l=!1},d(o){o&&_(s),ne(t,o)}}}function Fe(a,e){let s,t,l;return t=new Le({props:{data:e[3]}}),{key:a,first:null,c(){s=me(),le(t.$$.fragment),this.h()},l(o){s=me(),re(t.$$.fragment,o),this.h()},h(){this.first=s},m(o,r){W(o,s,r),ie(t,o,r),l=!0},p(o,r){e=o},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){R(t.$$.fragment,o),l=!1},d(o){o&&_(s),ne(t,o)}}}function Ge(a,e){let s,t,l;return t=new Le({props:{data:e[3]}}),{key:a,first:null,c(){s=me(),le(t.$$.fragment),this.h()},l(o){s=me(),re(t.$$.fragment,o),this.h()},h(){this.first=s},m(o,r){W(o,s,r),ie(t,o,r),l=!0},p(o,r){e=o},i(o){l||(z(t.$$.fragment,o),l=!0)},o(o){R(t.$$.fragment,o),l=!1},d(o){o&&_(s),ne(t,o)}}}function st(a){let e,s,t="My Projects",l,o,r,b,y="School projects",v,g=[],D=new Map,k,m,h,p="Personal projects",H,P=[],$=new Map,E,w,C,I="Professional projects",T,S=[],A=new Map,V,te=ge(a[0]);const se=d=>d[3].title;for(let d=0;d<te.length;d+=1){let c=Ne(a,te,d),j=se(c);D.set(j,g[d]=Be(j,c))}let q=ge(a[1]);const ce=d=>d[3].title;for(let d=0;d<q.length;d+=1){let c=Ve(a,q,d),j=ce(c);$.set(j,P[d]=Fe(j,c))}let G=ge(a[2]);const Y=d=>d[3].title;for(let d=0;d<G.length;d+=1){let c=Ue(a,G,d),j=Y(c);A.set(j,S[d]=Ge(j,c))}return{c(){e=u("div"),s=u("h1"),s.textContent=t,l=x(),o=u("div"),r=u("div"),b=u("h3"),b.textContent=y,v=x();for(let d=0;d<g.length;d+=1)g[d].c();k=x(),m=u("div"),h=u("h3"),h.textContent=p,H=x();for(let d=0;d<P.length;d+=1)P[d].c();E=x(),w=u("div"),C=u("h3"),C.textContent=I,T=x();for(let d=0;d<S.length;d+=1)S[d].c();this.h()},l(d){e=f(d,"DIV",{class:!0,id:!0});var c=M(e);s=f(c,"H1",{class:!0,"data-svelte-h":!0}),N(s)!=="svelte-rvn3aq"&&(s.textContent=t),l=L(c),o=f(c,"DIV",{class:!0});var j=M(o);r=f(j,"DIV",{class:!0});var ae=M(r);b=f(ae,"H3",{class:!0,"data-svelte-h":!0}),N(b)!=="svelte-1l9ks78"&&(b.textContent=y),v=L(ae);for(let F=0;F<g.length;F+=1)g[F].l(ae);ae.forEach(_),k=L(j),m=f(j,"DIV",{class:!0});var O=M(m);h=f(O,"H3",{class:!0,"data-svelte-h":!0}),N(h)!=="svelte-pn4goo"&&(h.textContent=p),H=L(O);for(let F=0;F<P.length;F+=1)P[F].l(O);O.forEach(_),E=L(j),w=f(j,"DIV",{class:!0});var J=M(w);C=f(J,"H3",{class:!0,"data-svelte-h":!0}),N(C)!=="svelte-12s2yer"&&(C.textContent=I),T=L(J);for(let F=0;F<S.length;F+=1)S[F].l(J);J.forEach(_),j.forEach(_),c.forEach(_),this.h()},h(){n(s,"class","svelte-1o7ivzm"),n(b,"class","svelte-1o7ivzm"),n(r,"class","school-projects flex svelte-1o7ivzm"),n(h,"class","svelte-1o7ivzm"),n(m,"class","personal-projects flex svelte-1o7ivzm"),n(C,"class","svelte-1o7ivzm"),n(w,"class","professional-project flex svelte-1o7ivzm"),n(o,"class","projects-container svelte-1o7ivzm"),n(e,"class","Projects svelte-1o7ivzm"),n(e,"id","projects")},m(d,c){W(d,e,c),i(e,s),i(e,l),i(e,o),i(o,r),i(r,b),i(r,v);for(let j=0;j<g.length;j+=1)g[j]&&g[j].m(r,null);i(o,k),i(o,m),i(m,h),i(m,H);for(let j=0;j<P.length;j+=1)P[j]&&P[j].m(m,null);i(o,E),i(o,w),i(w,C),i(w,T);for(let j=0;j<S.length;j+=1)S[j]&&S[j].m(w,null);V=!0},p(d,[c]){c&1&&(te=ge(d[0]),Pe(),g=Ie(g,c,se,1,d,te,D,r,$e,Be,null,Ne),De()),c&2&&(q=ge(d[1]),Pe(),P=Ie(P,c,ce,1,d,q,$,m,$e,Fe,null,Ve),De()),c&4&&(G=ge(d[2]),Pe(),S=Ie(S,c,Y,1,d,G,A,w,$e,Ge,null,Ue),De())},i(d){if(!V){for(let c=0;c<te.length;c+=1)z(g[c]);for(let c=0;c<q.length;c+=1)z(P[c]);for(let c=0;c<G.length;c+=1)z(S[c]);V=!0}},o(d){for(let c=0;c<g.length;c+=1)R(g[c]);for(let c=0;c<P.length;c+=1)R(P[c]);for(let c=0;c<S.length;c+=1)R(S[c]);V=!1},d(d){d&&_(e);for(let c=0;c<g.length;c+=1)g[c].d();for(let c=0;c<P.length;c+=1)P[c].d();for(let c=0;c<S.length;c+=1)S[c].d()}}}function at(a){let e=Ee[0],s=Ee[1],t=Ee[2];return[e,s,t]}class ot extends fe{constructor(e){super(),pe(this,e,at,st,ue,{})}}function lt(a){let e,s,t,l='<img src="logo.png" alt="" class="svelte-1fip37e"/>',o,r,b="ALEXIS | CS STUDENT",y,v,g,D="Presentation",k,m,h="Projects",p,H,P;return{c(){e=u("div"),s=u("div"),t=u("a"),t.innerHTML=l,o=x(),r=u("h1"),r.textContent=b,y=x(),v=u("div"),g=u("a"),g.textContent=D,k=x(),m=u("a"),m.textContent=h,this.h()},l($){e=f($,"DIV",{class:!0});var E=M(e);s=f(E,"DIV",{class:!0});var w=M(s);t=f(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),N(t)!=="svelte-18ssff9"&&(t.innerHTML=l),o=L(w),r=f(w,"H1",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-1dfh29"&&(r.textContent=b),w.forEach(_),y=L(E),v=f(E,"DIV",{class:!0});var C=M(v);g=f(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),N(g)!=="svelte-vter69"&&(g.textContent=D),k=L(C),m=f(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),N(m)!=="svelte-h6rayy"&&(m.textContent=h),C.forEach(_),E.forEach(_),this.h()},h(){n(t,"href",""),n(t,"class","svelte-1fip37e"),n(r,"class","svelte-1fip37e"),n(s,"class","left svelte-1fip37e"),n(g,"href",""),n(g,"class","svelte-1fip37e"),n(m,"href",""),n(m,"class","svelte-1fip37e"),n(v,"class","links svelte-1fip37e"),n(e,"class",p=de(a[0]>50?"Header change_color":"Header")+" svelte-1fip37e")},m($,E){W($,e,E),i(e,s),i(s,t),i(s,o),i(s,r),i(e,y),i(e,v),i(v,g),i(v,k),i(v,m),H||(P=[oe(t,"click",Te(a[2])),oe(g,"click",Te(a[3])),oe(m,"click",Te(a[4]))],H=!0)},p($,[E]){E&1&&p!==(p=de($[0]>50?"Header change_color":"Header")+" svelte-1fip37e")&&n(e,"class",p)},i:Z,o:Z,d($){$&&_(e),H=!1,xe(P)}}}function rt(a,e,s){let t=0;const l=()=>{s(0,t=window.scrollY)},o=v=>{var g;(g=document.querySelector(v))==null||g.scrollIntoView({behavior:"smooth"})};return Je(()=>{window.addEventListener("scroll",l)}),[t,o,()=>o("#welcome"),()=>o("#presentation"),v=>o("#projects")]}class it extends fe{constructor(e){super(),pe(this,e,rt,lt,ue,{})}}const nt=(a,e)=>e.text.length-a.text.length,ct=a=>a.sort(nt)[0].currentNode,gt=a=>new Promise(e=>setTimeout(e,a)),ht=(a,e)=>Math.floor(Math.random()*(e-a)+a),dt=async a=>gt(Array.isArray(a)?a[ht(0,a.length)]:a),We=async(a,e,s)=>{if(!e){console.error("The specified parent element does not exists!");return}let t=a;do{if(t===e)return;s(t),t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1)},mt=async({currentNode:a,text:e},s)=>{We(a,s.parentElement,t=>{const l=a===t?"typing":"finished-typing";t.classList.add(l)});for(let t=0;t<=e.length;t++)e[t]==="<"&&(t=e.indexOf(">",t)),a.innerHTML=e.slice(0,t),await dt(s.interval)},ut=(a,e)=>{new MutationObserver(t=>{t.forEach(l=>{const o=l.type==="attributes",r=l.target.classList.contains("finished-typing");o&&r&&e()})}).observe(a,{attributes:!0,childList:!0,subtree:!0})},Oe=a=>a.childNodes.length===1&&a.childNodes[0].nodeType===3,ft=(a,e)=>{const s=document.createElement(e);return s.textContent=a,s},pt=a=>a.dataset.static===void 0,Re=(a,{parentElement:e})=>{if(Oe(e)){const s=e.textContent,t=ft(e.textContent,"p");return e.textContent="",e.appendChild(t),[{currentNode:t,text:s}]}if(Oe(a)){const s=a.innerHTML.replaceAll("&amp;","&");return[{currentNode:a,text:s}]}else return[...a.children].filter(pt).flatMap(l=>Re(l,{parentElement:e}))},vt=a=>{const e=[...a.querySelectorAll("[data-static]")];for(const s of e)We(s,a,t=>{t!==s&&t.classList.add("finished-typing")})},kt=(a,e)=>{const s=qe(),t={parentElement:a,dispatch:s,...e},l=Re(a,t);return vt(a),{options:t,elements:l}},wt=(a,e)=>{const{options:s,elements:t}=kt(a,e),l=ct(t);ut(l,()=>s.dispatch("done"));for(const o of t)mt(o,s).then(()=>{s.keepCursorOnFinish?o.currentNode!==l?o.currentNode.classList.replace("typing","finished-typing"):s.dispatch("done"):o.currentNode.classList.replace("typing","finished-typing"),typeof s.keepCursorOnFinish=="number"&&setTimeout(()=>{o.currentNode.classList.replace("typing","finished-typing")},s.keepCursorOnFinish)})};function yt(a){let e,s,t,l,o,r,b="ALEXIS ROBIN | CS STUDENT",y,v,g,D,k,m;return s=new it({}),{c(){e=u("div"),le(s.$$.fragment),t=x(),l=u("div"),o=u("div"),r=u("h1"),r.textContent=b,y=x(),v=u("img"),this.h()},l(h){e=f(h,"DIV",{class:!0,id:!0});var p=M(e);re(s.$$.fragment,p),t=L(p),l=f(p,"DIV",{class:!0});var H=M(l);o=f(H,"DIV",{class:!0});var P=M(o);r=f(P,"H1",{class:!0,"data-svelte-h":!0}),N(r)!=="svelte-1iri01f"&&(r.textContent=b),P.forEach(_),H.forEach(_),y=L(p),v=f(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(_),this.h()},h(){n(r,"class","svelte-1kl4hwa"),n(o,"class","title svelte-1kl4hwa"),n(l,"class","main-bg svelte-1kl4hwa"),he(v.src,g="down-chevron.png")||n(v,"src",g),n(v,"alt",""),n(v,"class","svelte-1kl4hwa"),n(e,"class","Welcome svelte-1kl4hwa"),n(e,"id","welcome")},m(h,p){W(h,e,p),ie(s,e,null),i(e,t),i(e,l),i(l,o),i(o,r),i(e,y),i(e,v),D=!0,k||(m=[Ye(wt.call(null,r,{interval:120,keepCursorOnFinish:!0,cursor:!0})),oe(v,"click",a[1])],k=!0)},p:Z,i(h){D||(z(s.$$.fragment,h),D=!0)},o(h){R(s.$$.fragment,h),D=!1},d(h){h&&_(e),ne(s),k=!1,xe(m)}}}function _t(a){const e=t=>{var l;(l=document.querySelector(t))==null||l.scrollIntoView({behavior:"smooth"})};return[e,()=>e("#presentation")]}class bt extends fe{constructor(e){super(),pe(this,e,_t,yt,ue,{})}}function Ct(a){let e,s,t,l,o,r,b,y,v,g,D,k,m;return s=new bt({}),l=new Ke({}),r=new ot({}),{c(){e=u("div"),le(s.$$.fragment),t=x(),le(l.$$.fragment),o=x(),le(r.$$.fragment),b=x(),y=u("img"),this.h()},l(h){e=f(h,"DIV",{class:!0});var p=M(e);re(s.$$.fragment,p),t=L(p),re(l.$$.fragment,p),o=L(p),re(r.$$.fragment,p),b=L(p),y=f(p,"IMG",{class:!0,src:!0,alt:!0}),p.forEach(_),this.h()},h(){n(y,"class",v=a[0]>50?"show scroll-top":"scroll-top"),he(y.src,g="/go-top.png")||n(y,"src",g),n(y,"alt",""),n(e,"class","Home")},m(h,p){W(h,e,p),ie(s,e,null),i(e,t),ie(l,e,null),i(e,o),ie(r,e,null),i(e,b),i(e,y),D=!0,k||(m=oe(y,"click",a[2]),k=!0)},p(h,[p]){(!D||p&1&&v!==(v=h[0]>50?"show scroll-top":"scroll-top"))&&n(y,"class",v)},i(h){D||(z(s.$$.fragment,h),z(l.$$.fragment,h),z(r.$$.fragment,h),D=!0)},o(h){R(s.$$.fragment,h),R(l.$$.fragment,h),R(r.$$.fragment,h),D=!1},d(h){h&&_(e),ne(s),ne(l),ne(r),k=!1,m()}}}function St(a,e,s){let t=0;Je(()=>{window.scroll({top:0}),window.addEventListener("scroll",l)});const l=()=>{s(0,t=window.scrollY)},o=()=>{window.scroll({top:0,behavior:"smooth"})};return[t,o,()=>o()]}class Dt extends fe{constructor(e){super(),pe(this,e,St,Ct,ue,{})}}export{Dt as component};

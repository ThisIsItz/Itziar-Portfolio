(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{18:function(e,a,t){e.exports=t(33)},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),i=t.n(r),c=t(5),s=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"index.html"},l.a.createElement("img",{className:"logo",src:"img/logo.png",alt:"logo"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{className:"nav-link",activeClass:"",to:"landing",spy:!0,smooth:!0,offset:-70,duration:500},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{className:"nav-link",activeClass:"",to:"skills",spy:!0,smooth:!0,offset:-70,duration:500},"Skills")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.Link,{className:"nav-link",activeClass:"",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"My projects")))))))},o=function(e){return l.a.createElement("div",{className:"col-2"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"./img/".concat(e.icon,".png"),alt:e.icon})))},m=function(){return l.a.createElement("div",{className:"landing"},l.a.createElement(s,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row p-5"},l.a.createElement("div",{id:"info",className:"col-lg-6 col-12"},l.a.createElement("h1",{id:"myname"},"Itziar Urbieta Le\xf3n"),l.a.createElement("h2",null,"Front-end Developer"),l.a.createElement("div",{className:"row mt-3"},l.a.createElement(o,{icon:"linkedin",link:"https://www.linkedin.com/in/itziarurbieta/"}),l.a.createElement(o,{icon:"github",link:"https://github.com/ThisIsItz"}),l.a.createElement(o,{icon:"twitter",link:"https://twitter.com/ItUnderTheSea"}),l.a.createElement(o,{icon:"dev",link:"https://dev.to/thisisitz"}),l.a.createElement(o,{icon:"mail",link:"mailto:itziarurbieta94@gmail.com"}),l.a.createElement(o,{icon:"cv",link:"./pdf/itziar_urbieta.pdf"}))),l.a.createElement("div",{id:"photo",className:"col-5 text-center mx-auto"},l.a.createElement("img",{id:"yo",src:"./img/yo.jpg",className:"img-fluid z-depth-1 rounded-circle",alt:"Me"})))))},p=t(14),d=t(15),u=t(17),g=t(16),h=function(e){return l.a.createElement("div",{className:"".concat(e.col," text-center")},l.a.createElement("i",{className:e.icon}),l.a.createElement("p",{className:"text-icon mt-2"},e.title))},v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row mt-5"},l.a.createElement(h,{icon:"devicon-html5-plain",col:"col-4",title:"HTML5"}),l.a.createElement(h,{icon:"devicon-css3-plain",col:"col-4",title:"CSS3"}),l.a.createElement(h,{icon:"devicon-javascript-plain",col:"col-4",title:"JavaScript"})),l.a.createElement("div",{className:"row mt-5"},l.a.createElement("div",{className:"col-1"}),l.a.createElement(h,{icon:"devicon-react-original",col:"col-5",title:"React"}),l.a.createElement(h,{icon:"devicon-git-plain",col:"col-5",title:"Git"})))},E=function(e){return l.a.createElement("div",{className:"project-card col-12 col-lg-6 mb-5"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top h-100 ".concat(e.class),src:e.img,alt:"Project img"}),l.a.createElement("div",{className:"card-body text-center h-100"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},e.description),l.a.createElement("a",{href:e.href,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},"Go To Project"))))},f=function(){return l.a.createElement("div",{className:"container pt-5"},l.a.createElement("div",{className:"row"},l.a.createElement(E,{name:"Streaming Video App",img:"./img/streamblog.png",description:"Streaming Video App that streams your own streaming using a RTMP server, and allows you to create, edit or delete your streams. Developed using React",href:"https://github.com/ThisIsItz/streaming-video"}),l.a.createElement(E,{class:"weather",name:"Weather Journal App",img:"./img/wjasmall.png",description:"Weather Journal App that allows user to get the actual weather from a place using the zip code from this place",href:"https://github.com/ThisIsItz/weather-journal-app"})),l.a.createElement("div",{className:"row"},l.a.createElement(E,{class:"travel",name:"Travel App",img:"./img/travelappclose.png",description:"Travel application that uses the information incoming from the user to displays some information about the trip",href:"https://github.com/ThisIsItz/travelapp"}),l.a.createElement(E,{name:"Natural Language Processing App",class:"npl",img:"./img/nlp.png",description:"This web app allows user to type in any URL and the NLP-API analyse the sentiment of it through getting insight about the author's polarity and subjectivity. ",href:"https://github.com/ThisIsItz/NLP-API"})),l.a.createElement("div",{className:"row"},l.a.createElement(E,{name:"Snake game",img:"./img/snake-game.png",description:"My very first project. Snake game made using Vanilla JavaScript",href:"https://github.com/ThisIsItz/snake-game"})))},b=function(e){Object(u.a)(t,e);var a=Object(g.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"renderSection",value:function(){switch(this.props.id){case"skills":return l.a.createElement(v,null);case"projects":return l.a.createElement(f,null);default:return null}}},{key:"render",value:function(){return this.renderSection(),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{id:this.props.id},l.a.createElement("div",{className:"col-12 text-center title"},l.a.createElement("h1",{className:"pt-5"},this.props.title)),l.a.createElement("div",null,this.renderSection())))}}]),t}(l.a.Component),N=function(){return l.a.createElement("div",{id:"footer"},l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa92020 - All rights reserved",l.a.createElement("br",null),"Made by Itziar Urbieta Le\xf3n"))},k=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m,null),l.a.createElement(b,{id:"skills",title:"SKILLS"}),l.a.createElement(b,{id:"projects",title:"MY PROJECTS"}),l.a.createElement(N,null))};i.a.render(l.a.createElement(k,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bffc9039.chunk.js.map
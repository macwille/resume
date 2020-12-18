(this["webpackJsonpresume-app"]=this["webpackJsonpresume-app"]||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),l=n.n(s),a=n(13),o=n.n(a),r=n(10),c=n(3),d=n(2),h=function(){return Object(i.jsx)(d.Hero,{color:"primary",className:"is-bold",children:Object(i.jsx)(d.Hero.Body,{children:Object(i.jsxs)(d.Columns,{className:"columns is-mobile",children:[Object(i.jsxs)(d.Columns.Column,{children:[Object(i.jsx)(d.Heading,{size:2,children:"Ville Manninen"}),Object(i.jsxs)(d.Heading,{size:3,children:["Software Develeoper, Computer Science student @",Object(i.jsx)("a",{href:"https://www.helsinki.fi/en/computer-science",children:"University of Helsinki"})]})]}),Object(i.jsx)(d.Columns.Column,{className:"is-half",children:Object(i.jsxs)(d.Columns,{className:"columns is-mobile",children:[Object(i.jsx)(d.Columns.Column,{className:"is-one-third"}),Object(i.jsx)(d.Columns.Column,{children:Object(i.jsx)("img",{style:{borderRadius:120},width:"240",className:"is-rounded",src:"/resume/self.jpg",alt:"Portrait"})})]})})]})})})},j=function(){return Object(i.jsx)(d.Box,{children:Object(i.jsxs)(d.Navbar,{role:"navigation",className:"is-mobile",children:[Object(i.jsx)(r.b,{className:"navbar-item",to:"/",children:Object(i.jsx)(d.Button,{children:"About"})}),Object(i.jsx)(r.b,{className:"navbar-item",to:"/skills",children:Object(i.jsx)(d.Button,{children:"Skills"})}),Object(i.jsx)(r.b,{className:"navbar-item",to:"/files",children:Object(i.jsx)(d.Button,{children:"Files"})})]})})},u=function(){return Object(i.jsx)(d.Footer,{backgroundColor:"white",children:Object(i.jsx)(d.Container,{children:Object(i.jsxs)("div",{className:"content has-text-centered",style:{paddingTop:"5em"},children:[Object(i.jsxs)("p",{style:{marginTop:"5em"},children:["Made by Ville Manninen. The source code is licensed ",Object(i.jsx)("a",{href:"http://opensource.org/licenses/mit-license.php",children:"MIT"}),"."]}),Object(i.jsx)("div",{style:{marginTop:"5em"},children:Object(i.jsxs)("span",{children:[Object(i.jsx)("a",{className:"image is-128x128 is-inline-block",href:"https://www.helsinki.fi/fi/tietojenkasittelytiede",children:Object(i.jsx)(d.Image,{src:"/resume/hy.png",alt:"hy-logo"})}),Object(i.jsx)("a",{className:"image is-128x128 is-inline-block",href:"https://github.com/Viltska",children:Object(i.jsx)(d.Image,{src:"/resume/github.png",alt:"github-logo"})})]})})]})})})},m=function(){return Object(i.jsx)(d.Box,{children:Object(i.jsxs)(d.Section,{children:[Object(i.jsx)(d.Heading,{children:"About me"}),["I'm a computer science enthusiast and a student currently located in Helsinki area. I found great interest in programming ever since I found out about it and fell in love with the problem solving challenges and endless room for improvement it offers. The more I learn new skills the more I discover ideas and areas where I can improve myself, this has driven me to continiously trying to improve myself. ","I started out programming when my friend introduced me to an online Java course made by the University of helsinki, I have always been interested in computers and I was instantly hooked. I finished the course and applied to the University of Helsinki where I got the opportunity to learn even more. Since then I have learned many new languages including React and Python, and importantly learned the skills neededto learn even more on my own.","My goal is to keep improving myself and never stop learning about this wonderful industry. I feel lucky to have found a career that keeps me interested and doesn't feel like a task. During my studies the best experiences have been during group projects and the syngergy you get by beeing part of a great team. This is unfortunatley uncommon in university studies so I am looking forward to getting my first job and getting the opportunity to work with and learn from experienced developers.","In my free time I like to focus on my hobbies which include tennis, football and other sports, I have found that as in programming I enjoy sports where you can improve yourself over time. Sports has helped me balance the unfortunate side effect of programming wich is spending alot of time infront of the computer."].map((function(e,t){return Object(i.jsx)(d.Content,{children:e},t)}))]})})},b=function(){return Object(i.jsx)(d.Box,{children:Object(i.jsx)(d.Section,{children:Object(i.jsx)(d.Heading,{children:"Files"})})})},p=function(e){var t=e.skill;console.log("Skill",t);var n=t.level;return Object(i.jsxs)(d.Box,{children:[Object(i.jsx)(d.Heading,{className:"level-left",size:4,children:t.title}),Object(i.jsxs)("p",{children:[t.about,t.link&&Object(i.jsxs)(i.Fragment,{children:[" ",Object(i.jsx)("a",{href:t.link,children:"Example"})]})]}),Object(i.jsx)(d.Progress,{className:"progress is-primary",value:t.level,max:3}),Object(i.jsx)("p",{children:1===n?"Some knowlege":2===n?"Basic":3===n?"Good":null})]})},x=[{id:1,title:"Java",level:3,about:"The language I started programming with, I have done multiple projects using Java.",link:"https://github.com/Viltska/maze-solver"},{id:2,title:"React",level:3,about:"I have used React to program multiple applications and group projects, including front and backend. For example this website."},{id:3,title:"JavaScript",level:3,about:"Using Node.js and React I have used alot of JavaScript."},{id:4,title:"Python",level:2,about:"I have created a website application using Python and SQL",link:"https://chat404-web.herokuapp.com/"},{id:5,title:"SQL",level:2,about:"I have done multiple projects that used SQL.",link:"https://github.com/Viltska/python-chat-app"},{id:6,title:"General Development Skills",level:2,about:"I created a web aplication using Python",link:"https://chat404-web.herokuapp.com/"}],g=function(){var e=x;return console.log(e),Object(i.jsx)(d.Box,{children:Object(i.jsxs)(d.Section,{children:[Object(i.jsx)(d.Heading,{children:"Skills"}),Object(i.jsx)(d.Content,{children:Object(i.jsxs)(d.Columns,{children:[Object(i.jsx)(d.Columns.Column,{children:e.map((function(e,t){return t%2===0?Object(i.jsx)(p,{skill:e},e.id):null}))}),Object(i.jsx)(d.Columns.Column,{children:e.map((function(e,t){return t%2!==0?Object(i.jsx)(p,{skill:e},e.id):null}))})]})})]})})},O=function(){return Object(i.jsx)(r.a,{basename:"/resume",children:Object(i.jsxs)(d.Container,{className:"has-background-white",children:[Object(i.jsx)(h,{}),Object(i.jsx)(j,{}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{path:"/skills",children:Object(i.jsx)(g,{})}),Object(i.jsx)(c.a,{path:"/files",children:Object(i.jsx)(b,{})}),Object(i.jsx)(c.a,{exact:!0,path:"/",children:Object(i.jsx)(m,{})})]}),Object(i.jsx)(u,{})]})})};o.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6e25a0b7.chunk.js.map
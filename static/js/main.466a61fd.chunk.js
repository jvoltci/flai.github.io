(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(20),a(5)),s=a(6),i=a(9),u=a(7),m=a(10),d=(a(21),function(e){var t=e.items;return r.a.createElement("ul",{className:"ulist"},r.a.createElement("ul",{className:"vlist"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:"litem"},r.a.createElement("a",{className:"link",href:"https://flai-api.herokuapp.com/torrent/"+e},e))})))}),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).changeURL=function(t){e.setState({url:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e.handleTorrent=function(){fetch("https://flai-api.herokuapp.com/metadata",{method:"POST",body:JSON.stringify({url:e.state.url,password:e.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t?e.setState({files:t,list:1,magnetSubmit:0}):(e.setState({magnetSubmit:2}),console.log("Vanilla Error"))}).catch(function(t){e.setState({magnetSubmit:2}),console.error("Error:",t)})},e.handleMagnet=function(t){t.preventDefault(),e.setState({list:0,magnetSubmit:1})},e.state={list:0,files:[],url:"",password:"",magnetSubmit:0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){1===this.state.magnetSubmit&&this.handleTorrent()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"home",className:"container"},r.a.createElement("h3",{id:"u1"},"Welcome To fl",r.a.createElement("span",{id:"u11"},"ai")," Downloads"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12",align:"center"},r.a.createElement("form",{onSubmit:function(t){return"magnet"===e.state.url.substring(0,6)?e.handleMagnet(t):""},method:"post",action:"https://flai-api.herokuapp.com/download"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(t){return e.changeURL(t)},type:"text",name:"user[url]",required:!0,className:"form-control",placeholder:"Downloadable URL | Magnet URI",id:"u2"}),r.a.createElement("input",{onChange:function(t){return e.changePassword(t)},type:"password",name:"user[password]",required:!0,className:"form-control",placeholder:"Password",id:"u3"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-danger btn-lg"},"Download"))),r.a.createElement("br",null),r.a.createElement("br",null),1===this.state.magnetSubmit?r.a.createElement("div",{className:"lds-hourglass"}):0===this.state.magnetSubmit?r.a.createElement("div",null):r.a.createElement("div",{className:"error"},"Oops! Something went wrong."),this.state.list?r.a.createElement(d,{items:this.state.files}):"")))}}]),t}(n.Component),h=a(28),f=a(29),g=a(30),b=(a(22),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).trigger=function(){document.querySelector("#u2").value="",document.querySelector("#u3").value="",document.querySelector("#u4").value=""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{path:"/",component:function(){return r.a.createElement(p,{trigger:e.trigger})},exact:!0}),r.a.createElement(g.a,{component:function(){return r.a.createElement("h1",{style:{textAlign:"center",paddingTop:"40vh"}},"Error 404: Not Found!")}})))}}]),t}(n.Component));o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.466a61fd.chunk.js.map
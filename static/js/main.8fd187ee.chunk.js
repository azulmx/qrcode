(this.webpackJsonpautoconstruccion=this.webpackJsonpautoconstruccion||[]).push([[0],{50:function(e,t,a){e.exports=a.p+"static/media/logo.2f3ed641.png"},53:function(e,t,a){e.exports=a(82)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=(a(58),a(59),a(7)),o=a(8),s=a(10),m=a(9),u=a(11),d=a(13),h=a(17),p=(a(60),a(61),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderRegistro",value:function(e){return console.log(e),e?r.a.createElement("input",{type:"text",className:"fadeIn second",name:"login",placeholder:"CORREO ELECTR\xd3NICO"}):""}},{key:"render",value:function(){var e=this.props.registrarse;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"wrapper fadeInDown"},r.a.createElement("div",{id:"formContent"},r.a.createElement("div",{className:"fadeIn first"},r.a.createElement("h1",null,r.a.createElement("span",{className:"azul"},"QUICK RESPONSE"),r.a.createElement("br",null),r.a.createElement("span",{className:"verde"},"GENERADOR DE C\xd3DIGOS QR")),r.a.createElement("p",null,"PRUEBA DE C\xd3GIGO WWW.AZUL.MX - Generador de c\xf3digos QR")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",id:"login",className:"fadeIn second",name:"login",placeholder:"USUARIO"}),r.a.createElement("input",{type:"text",id:"password",className:"fadeIn third",name:"login",placeholder:"CONTRASE\xd1A"}),this.renderRegistro(this.props.registro),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6"},r.a.createElement(d.c,{to:"/dashboard",className:"fadeIn fourth ingresar",value:"INGRESAR"},"INGRESAR")),r.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6"},r.a.createElement("button",{onClick:e,className:"fadeIn fourth"},"REGISTRARSE")))))))))}}]),t}(n.Component)),E=a(21),f=a(49),v=a(47),b=a.n(v),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).datos=function(e){e.preventDefault(),console.log("holaaaa"),console.log(a.inputNode.value),a.setState({codigo:a.inputNode.value})},a.downloadQR=function(){var e=document.getElementById("123456").toDataURL("image/png").replace("image/png","image/octet-stream"),t=document.createElement("a");t.href=e,t.download="123456.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},a.state={codigo:"la vida es una tombola"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6"},r.a.createElement(E.a,{onSubmit:this.downloadQR},["radio"].map((function(e){return r.a.createElement("div",{key:"inline-".concat(e),className:"mb-3"},r.a.createElement(E.a.Check,{inline:!0,label:"Est\xe1tico",type:e,id:"inline-".concat(e,"-1")}),r.a.createElement(E.a.Check,{inline:!0,label:"Din\xe1mico",type:e,id:"inline-".concat(e,"-2")}))})),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(E.a.Control,{name:"elcampo",as:"textarea",rows:"12",onChange:this.datos,ref:function(t){return e.inputNode=t}})),r.a.createElement(f.a,{variant:"primary",type:"submit"},"DESCARGAR C\xd3DIGO QR"))),r.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6"},r.a.createElement(b.a,{id:"123456",value:this.state.codigo,size:550,level:"H",includeMargin:!0}))))}}]),t}(n.Component),O=a(20),C=(a(73),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={spinAngleStart:0,startAngle:0,spinTime:0,arc:Math.PI/(e.options.length/2)},a.spinTimer=null,a.handleOnClick=a.handleOnClick.bind(Object(O.a)(a)),a.spin=a.spin.bind(Object(O.a)(a)),a.rotate=a.rotate.bind(Object(O.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"byte2Hex",value:function(e){return String("0123456789ABCDEF".substr(e>>4&15,1))+"0123456789ABCDEF".substr(15&e,1)}},{key:"RGB2Color",value:function(e,t,a){return"#"+this.byte2Hex(e)+this.byte2Hex(t)+this.byte2Hex(a)}},{key:"getColor",value:function(e,t){var a=2*Math.PI/t,n=188*Math.sin(a*e+2+0)+0,r=188*Math.sin(a*e+0+0)+0,l=188*Math.sin(a*e+4+0)+0;return this.RGB2Color(n,r,l)}},{key:"drawRouletteWheel",value:function(){var e,t=this.props,a=t.options,n=t.baseSize,r=this.state,l=r.startAngle,i=r.arc,c=this.refs.canvas;if(c.getContext){var o=n-25,s=n-75,m=n-115;(e=c.getContext("2d")).clearRect(0,0,900,600),e.strokeStyle="white",e.lineWidth=2,e.font="14px Helvetica, Arial";for(var u=0;u<a.length;u++){var d=l+u*i;e.fillStyle=this.getColor(u,a.length),e.beginPath(),e.arc(n,n,o,d,d+i,!1),e.arc(n,n,m,d+i,d,!0),e.fill(),e.save(),e.fillStyle="white",e.translate(n+Math.cos(d+i/2)*s,n+Math.sin(d+i/2)*s),e.rotate(d+i/2+Math.PI/2);var h=a[u];e.fillText(h,-e.measureText(h).width/2,0),e.restore()}e.fillStyle="red",e.beginPath(),e.lineTo(n+10,n-(o+20)),e.lineTo(n+0,n-(o-5)),e.lineTo(n-10,n-(o+20)),e.fill(),e.stroke()}}},{key:"spin",value:function(){var e=this;this.spinTimer=null,this.setState({spinTime:0},(function(){return e.rotate()}))}},{key:"rotate",value:function(){var e=this,t=this.props,a=t.spinAngleStart,n=t.spinTimeTotal;if(this.state.spinTime>2800)clearTimeout(this.spinTimer),this.stopRotateWheel();else{var r=a-this.easeOut(this.state.spinTime,0,a,n);this.setState({startAngle:this.state.startAngle+r*Math.PI/180,spinTime:this.state.spinTime+30},(function(){e.drawRouletteWheel(),clearTimeout(e.spinTimer),e.spinTimer=setTimeout((function(){return e.rotate()}),30)}))}}},{key:"stopRotateWheel",value:function(){var e=this.state,t=e.startAngle,a=e.arc,n=this.props,r=n.options,l=n.baseSize,i=this.refs.canvas.getContext("2d"),c=180*t/Math.PI+90,o=180*a/Math.PI,s=Math.floor((360-c%360)/o);i.save(),i.font="bold 20px Helvetica, Arial";var m=r[s];i.fillText(m,l-i.measureText(m).width/2,l/1),i.restore(),this.props.onComplete(m)}},{key:"easeOut",value:function(e,t,a,n){var r=(e/=n)*e;return t+a*(r*e+-3*r+3*e)}},{key:"handleOnClick",value:function(){this.spin()}},{key:"render",value:function(){var e=this.props.baseSize;return r.a.createElement("div",{className:"roulette"},r.a.createElement("div",{className:"roulette-container"},r.a.createElement("input",{type:"button",value:"GIRAR LA RULETA",onClick:this.handleOnClick,className:"button",id:"spin"})),r.a.createElement("div",{className:"roulette-container"},r.a.createElement("canvas",{ref:"canvas",width:2*e,height:2*e,className:"roulette-canvas"})))}}]),t}(n.Component));C.defaultProps={options:["item1","item2","item3","item4","item5"],baseSize:275,spinAngleStart:10*Math.random()+10,spinTimeTotal:3*Math.random()+4e3};var N=C,A=a(23),R=a(22),y=a(50),k=a.n(y),T=(a(74),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{expand:"lg"},r.a.createElement(A.a.Brand,null,r.a.createElement("img",{src:k.a,alt:"Manual de autoconstrucci\xf3n",title:"Manual de autoconstrucci\xf3n"})),r.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(R.a,{className:"mr-auto"},r.a.createElement(R.a.Link,{href:"/"},"INICIO"),r.a.createElement(R.a.Link,{href:"/dashboard"},"GENERADOR DE C\xd3DIGO QR"),r.a.createElement(R.a.Link,{href:"/ruleta"},"RULETA DE LA SUERTE"))))}}]),t}(n.Component)),j=(a(81),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-center"},"@ 2019 | Todos Los Derechos Reservados | AZUL.MX.",r.a.createElement("br",null),r.a.createElement(d.c,{to:"#"},"GENERADOR DE C\xd3DIGOS QR")),r.a.createElement("ul",{className:"social_footer_ul"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},r.a.createElement("i",{className:"fa fa-facebook-f"}))),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/"},r.a.createElement("i",{className:"fa fa-instagram"}))))))}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).registrarse=function(e){e.preventDefault(),a.setState({registro:!a.state.registro})},a.handleOnComplete=function(e){console.log(e)},a.options=["CAF\xc9 CON LECHE","SOPA DEL D\xcdA","REBANADA DE PIZZA","UN PAN DE CHOCOLATE","UNA TAZA DE TH\xc9"],a.state={registro:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(d.b,{basename:"/"},r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(d.a,{basename:"/qrcode"},r.a.createElement(h.a,{exact:!0,path:"/",component:function(t){return r.a.createElement(p,Object.assign({},t,{registrarse:e.registrarse,registro:e.state.registro}))}}),r.a.createElement(h.a,{exact:!0,path:"/dashboard",component:function(e){return r.a.createElement(g,e)}}),r.a.createElement(h.a,{exact:!0,path:"/ruleta",component:function(t){return r.a.createElement(N,Object.assign({},t,{options:e.options,baseSize:300,onComplete:e.handleOnComplete}))}})),r.a.createElement(j,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.8fd187ee.chunk.js.map
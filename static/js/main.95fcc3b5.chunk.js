(this.webpackJsonpmisterbitcoin=this.webpackJsonpmisterbitcoin||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(22),c=n.n(r),o=n(12),s=(n(52),n(53),n(6)),i=n(11),u=n(2),l=n.n(u),p=n(4),d=n(7),m=n(8),h=n(10),j=n(9);function b(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function f(e,t){localStorage.setItem(e,JSON.stringify(t)||null)}function v(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}var O=n(55),g={getRate:function(e){return O.get("https://blockchain.info/tobtc?currency=USD&value=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.log(e),e}))},getMarketPrice:function(){var e=v(C);if(!e)return O.get("https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true").then((function(t){return console.log("res.data",t.data),e=t.data.values,f(C,e),t.data.values})).catch((function(e){return console.log(e),e}));return e},getConfirmedTransactions:function(){var e=v(x);if(!e)return O.get("https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true").then((function(t){return e=t.data.values,console.log("transactions",e),f(x,e),t.data.values})).catch((function(e){return console.log(e),e}));return e},getUSDBTC:function(){return O.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return e.data.bpi.USD.rate_float})).catch((function(e){return console.log(e),e}))}},x="transactions",C="market";n(74);var y=n(3),w={signUp:function(e){var t=e.name,n=e.password,a={name:"",coins:6e4,moves:[]};return a.name=t,a.password=n,U(a),Promise.resolve(a)},getLoggedinUser:function(){return JSON.parse(sessionStorage.getItem("loggedinUser")||"null")},chargeUser:function(e,t){return S.apply(this,arguments)},addMove:function(e,t,n){return k.apply(this,arguments)},logout:function(){sessionStorage.clear()}};function S(){return(S=Object(p.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.coins<0)){e.next=2;break}return e.abrupt("return");case 2:return(a=Object(y.a)({},t)).coins-=n,U(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(p.a)(l.a.mark((function e(t,n,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Object(y.a)({},t)).coins-=n,r.moves.push({toId:b(),to:a.name,at:Date.now(),amount:n}),U(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return sessionStorage.setItem("loggedinUser",JSON.stringify(e)),e}function N(){return function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getLoggedinUser();case 2:n=e.sent,t({type:"GET_USER",user:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}n(75);var _=n(0),T=n(26);var D=function(e){var t=e.moves;return t||document.location.reload(),t&&Object(_.jsxs)("ul",{className:"moves-list",children:[Object(_.jsxs)("li",{children:[Object(_.jsx)("i",{className:"fas fa-recycle"}),"Moves History"]}),0===t.length?Object(_.jsx)("h1",{children:"No transactions were made in this account"}):t.map((function(e){return Object(_.jsxs)("li",{children:[Object(_.jsxs)("div",{className:"contact-transaction",children:[Object(_.jsx)("span",{className:"amount",children:(n=e.amount,n.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}))})," |",Object(_.jsx)("span",{className:"contact-name",children:e.to})]}),Object(_.jsxs)("p",{className:"status",children:["status:",Object(_.jsx)("span",{children:"approve"})]}),Object(_.jsx)("p",{className:"at",children:(t=e.at,T(t).format("dddd, MMMM Do YYYY, h:mm:ss a"))})]},e.toId);var t,n}))]})},E=(n(78),n(79),n(30)),B=function(e){var t=e.volume,n=e.marketPrice;return Object(_.jsxs)("div",{className:"chart",children:[Object(_.jsxs)("div",{className:"market-price",children:[Object(_.jsx)("h1",{children:"Market Price"}),Object(_.jsx)(E.a,{type:"line",datasets:[{label:"2020",backgroundColor:"rgba(0, 128, 0, 0.352)",borderColor:"black",pointBackgroundColor:"white",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:n.map((function(e){return e.y}))}],options:{aspectRatio:4,tooltips:{enabled:!0}}})]}),Object(_.jsxs)("div",{className:"confirmed-transactions",children:[Object(_.jsx)("h1",{children:"Confirmed Transactions"}),Object(_.jsx)(E.a,{type:"line",datasets:[{label:"2020",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",tooltipLabelColor:"rgba(255,99,132,1)",data:t.map((function(e){return e.y}))}],options:{aspectRatio:4,tooltips:{enabled:!0}}})]})]})},M=(n(82),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={marketPrice:null,volume:null},e.loadMarketPrice=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getMarketPrice();case 2:n=t.sent,e.setState({marketPrice:n},(function(){e.loadVolume()}));case 4:case"end":return t.stop()}}),t)}))),e.loadVolume=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getConfirmedTransactions();case 2:n=t.sent,e.setState({volume:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadMarketPrice()}},{key:"render",value:function(){var e=this.state,t=e.marketPrice,n=e.volume;return n&&t&&Object(_.jsx)("div",{className:"statistic-page",children:Object(_.jsx)(B,{marketPrice:t,volume:n})})}}]),n}(a.Component)),A=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currBtcRate:null,currUSDBTC:null},e.loadBtcRate=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getRate(e.props.user.coins);case 2:n=t.sent,e.setState({currBtcRate:n});case 4:case"end":return t.stop()}}),t)}))),e.loadUSDBTC=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getUSDBTC();case 2:n=t.sent,e.setState({currUSDBTC:n});case 4:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loadUser(),setTimeout((function(){e.loadBtcRate(),e.loadUSDBTC()}),50)}},{key:"currentCurrency",get:function(){return this.props.user.coins.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})}},{key:"render",value:function(){var e=this.props.user,t=this.state,n=t.currBtcRate,a=t.currUSDBTC;return e?e&&Object(_.jsx)("div",{className:"home-page",children:Object(_.jsxs)("div",{className:"user-details",children:[Object(_.jsx)("div",{className:"user-name",children:Object(_.jsxs)("h1",{children:[" Hello, ",e.name," "]})}),Object(_.jsxs)("div",{className:"user-balance",children:[Object(_.jsxs)("div",{className:"curr-balance",children:[Object(_.jsx)("h4",{children:"current balance"}),Object(_.jsxs)("h3",{children:["BTC: ",Object(_.jsx)("span",{children:n})]}),Object(_.jsxs)("h3",{children:["USD: ",Object(_.jsx)("span",{children:this.currentCurrency})]})]}),Object(_.jsxs)("div",{className:"curr-btc",children:[Object(_.jsx)("h4",{children:"current btc usd"}),Object(_.jsxs)("h3",{children:["$",a]})]})]}),Object(_.jsx)(D,{moves:e.moves})]})}):Object(_.jsx)("div",{children:"loading..."})}}]),n}(a.Component),L={loadUser:N},R=Object(o.b)((function(e){return{user:e.userReducer.user}}),L)(A),P=(n(83),n(84),function(e){var t=e.contact;return Object(_.jsx)(i.b,{to:"/contacts/"+t._id,children:Object(_.jsxs)("li",{className:"contact-preview",children:[Object(_.jsx)("img",{src:t.imgUrl,alt:""}),Object(_.jsxs)("div",{className:"contact-details",children:[Object(_.jsx)("h3",{children:t.name}),Object(_.jsx)("p",{children:t.phone})]})]})})}),I=function(e){var t=e.contacts;e.match;return Object(_.jsx)("ul",{className:"contact-list",children:t.map((function(e){return Object(_.jsx)(P,{contact:e},e._id)}))})},z=n(18),F=(n(86),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:""},e.handleChange=function(t){var n=t.target,a=n.name,r="number"===n.type?+n.value:n.value;e.setState(Object(z.a)({},a,r),(function(){e.props.onFilter(Object(y.a)({},e.state))}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name;e.phone;return Object(_.jsx)("form",{className:"contact-filter",onSubmit:function(e){return e.preventDefault()},children:Object(_.jsx)("div",{className:"name",children:Object(_.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:this.handleChange,placeholder:"Name"})})})}}]),n}(a.Component)),H=(n(87),{getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=v(J)||V;return new Promise((function(n,a){e&&(t=Y(e)),f(J,t),n(G(t))}))},getContactById:function(e){var t=v(J);return new Promise((function(n,a){var r=t.find((function(t){return t._id===e}));r?n(r):a("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=V.findIndex((function(t){return t._id===e}));-1!==a&&V.splice(a,1),f(J,V),t(V)}))},saveContact:function(e){return e._id?(f(J,V),function(e){return new Promise((function(t,n){var a=V.findIndex((function(t){return e._id===t._id}));-1!==a&&(V[a]=e),f(J,V),t(e)}))}(e)):(f(J,V),function(e){return new Promise((function(t,n){var a,r;e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),e.imgUrl="https://randomuser.me/api/portraits/med/men/".concat((a=1,r=100,a=Math.ceil(a),r=Math.floor(r),Math.floor(Math.random()*(r-a)+a)),".jpg"),V.push(e),f(J,V),t(e)}))}(e))},getEmptyContact:function(){return{name:"",email:"",phone:""}}}),J="contacts",V=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824",imgUrl:"https://randomuser.me/api/portraits/med/men/1.jpg"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888",imgUrl:"https://randomuser.me/api/portraits/med/men/2.jpg"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495",imgUrl:"https://randomuser.me/api/portraits/med/men/3.jpg"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312",imgUrl:"https://randomuser.me/api/portraits/med/men/4.jpg"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258",imgUrl:"https://randomuser.me/api/portraits/med/men/5.jpg"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082",imgUrl:"https://randomuser.me/api/portraits/med/men/6.jpg"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678",imgUrl:"https://randomuser.me/api/portraits/med/men/7.jpg"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663",imgUrl:"https://randomuser.me/api/portraits/med/men/8.jpg"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851",imgUrl:"https://randomuser.me/api/portraits/med/men/9.jpg"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166",imgUrl:"https://randomuser.me/api/portraits/med/men/10.jpg"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295",imgUrl:"https://randomuser.me/api/portraits/med/men/11.jpg"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550",imgUrl:"https://randomuser.me/api/portraits/med/men/12.jpg"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181",imgUrl:"https://randomuser.me/api/portraits/med/men/13.jpg"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376",imgUrl:"https://randomuser.me/api/portraits/med/men/14.jpg"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557",imgUrl:"https://randomuser.me/api/portraits/med/men/15.jpg"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629",imgUrl:"https://randomuser.me/api/portraits/med/men/16.jpg"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529",imgUrl:"https://randomuser.me/api/portraits/med/men/17.jpg"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291",imgUrl:"https://randomuser.me/api/portraits/med/men/18.jpg"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812",imgUrl:"https://randomuser.me/api/portraits/med/men/19.jpg"}];function G(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function Y(e){return e.name=e.name.toLocaleLowerCase(),V.filter((function(t){return t.name.toLocaleLowerCase().includes(e.name)&&t.phone.toLocaleLowerCase().includes(e.phone)||t.email.toLocaleLowerCase().includes(e.email)}))}var W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:null,filterBy:null},e.onFilter=function(t){e.setState({filterBy:t},e.loadContacts)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.loadContacts(this.state.filterBy)}},{key:"render",value:function(){var e=this.props.contacts;return e&&Object(_.jsxs)("div",{className:"contact-page",children:[Object(_.jsx)(F,{onFilter:this.onFilter}),Object(_.jsx)(I,{contacts:e}),Object(_.jsx)(i.b,{to:"/contacts/edit",children:Object(_.jsx)("button",{children:Object(_.jsx)("i",{className:"fas fa-plus"})})})]})}}]),n}(a.Component),q={loadContacts:function(e){return function(){var t=Object(p.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getContacts(e);case 2:a=t.sent,n({type:"SET_CONTACTS",contacts:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},X=Object(o.b)((function(e){return{contacts:e.contactReducer.contacts}}),q)(W),K=(n(88),n(89),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={coins:""},e.handleChange=function(t){var n=t.target,a="number"===n.type?+n.value:n.value;e.setState({coins:a})},e.onTransferCoins=function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.chargeUser(e.props.user,e.state.coins,e.props.contact);case 3:e.setState({coins:""});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.loadUser()}},{key:"render",value:function(){return Object(_.jsx)("article",{className:"transfer-fund",children:Object(_.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("div",{className:"amount",children:Object(_.jsx)("input",{type:"number",id:"amount",name:"amount",value:this.state.coins,onChange:this.handleChange})}),Object(_.jsx)("button",{onClick:this.onTransferCoins,children:"Transfer"})]})})}}]),n}(a.Component)),Q={chargeUser:function(e,t,n){return function(){var a=Object(p.a)(l.a.mark((function a(r){var c,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.chargeUser(e,t);case 2:return c=a.sent,a.next=5,w.addMove(e,t,n);case 5:o=a.sent,r({type:"SPEND_BALANCE",spentAmount:c}),r({type:"UPDATE_USER_MOVES",userMoves:o});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},loadUser:N},Z=Object(o.b)((function(e){return{user:e.userReducer.user}}),Q)(K),$=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeDetails=function(){e.props.history.push("/contacts")},e.onDeleteContact=function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.removeContact(e.props.contact._id);case 3:e.props.history.push("/contacts");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.getContactById(this.props.match.params.id),this.props.loadUser()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.props.getContactById(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.contact,n=e.user;return t&&n&&Object(_.jsxs)("div",{className:"contact-details-page",children:[Object(_.jsxs)("header",{children:[Object(_.jsx)("button",{onClick:this.closeDetails,className:"exit-btn",children:"Back"}),Object(_.jsx)("button",{className:"btn edit-btn",children:Object(_.jsx)(i.b,{to:"/contacts/edit/"+this.props.match.params.id,children:"Edit"})})]}),Object(_.jsxs)("main",{className:"user-info",children:[Object(_.jsx)("img",{src:t.imgUrl,alt:""}),Object(_.jsx)("h3",{children:t.name}),Object(_.jsx)("h5",{children:t.phone}),Object(_.jsx)("h5",{children:t.email}),Object(_.jsx)(Z,{contact:t}),Object(_.jsx)(D,{moves:n.moves})]})]})}}]),n}(a.Component),ee={getContactById:function(e){return function(){var t=Object(p.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.getContactById(e);case 2:a=t.sent,n({type:"SET_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},removeContact:function(e){return function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.deleteContact(e);case 2:n({type:"REMOVE_CONTACT",contactId:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},chargeContact:function(e,t){return function(){var n=Object(p.a)(l.a.mark((function n(a,r){var c,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=.5*t,!(r().userReducer.user.balance<c)){n.next=4;break}return n.abrupt("return",alert("Not enough balance!"));case 4:return n.next=6,H.chargeContact(e,t);case 6:o=n.sent,a({type:"SPEND_BALANCE",spendAmount:c}),a({type:"SET_CONTACT",contact:o});case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},loadUser:N},te=Object(o.b)((function(e){return{contact:e.contactReducer.currContact,user:e.userReducer.user}}),ee)($),ne=(n(90),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:null,errMsg:""},e.handleChange=function(t){var n=t.target,a=n.name,r="number"===n.type?+n.value:n.value;e.setState((function(e){return{contact:Object(y.a)(Object(y.a)({},e.contact),{},Object(z.a)({},a,r))}}))},e.onSaveContact=function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.saveContact(Object(y.a)({},e.state.contact));case 3:e.props.history.push("/contacts");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeEdit=function(){e.props.history.push("/contacts")},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.match.params.id,e.prev=1,!t){e.next=8;break}return e.next=5,H.getContactById(t);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=H.getEmptyContact();case 9:n=e.t0,this.setState({contact:n}),e.next=16;break;case 13:e.prev=13,e.t1=e.catch(1),this.setState({errMsg:"contact Not Found"});case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact;return e&&Object(_.jsxs)("div",{className:"edit-page",children:[Object(_.jsx)("header",{children:Object(_.jsx)("button",{onClick:this.closeEdit,className:"exit-btn",children:"Back"})}),Object(_.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(_.jsxs)("main",{children:[e._id?Object(_.jsx)("img",{src:e.imgUrl,alt:""}):Object(_.jsx)("img",{src:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",alt:""}),Object(_.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:this.handleChange,placeholder:"Name"}),Object(_.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:this.handleChange,placeholder:"Email"}),Object(_.jsx)("input",{type:"text",id:"phone",name:"phone",value:e.phone,onChange:this.handleChange,placeholder:"Phone"}),Object(_.jsx)("button",{onClick:this.onSaveContact,children:"Save"})]})})]})}}]),n}(a.Component)),ae={saveContact:function(e){return function(){var t=Object(p.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!e._id,t.next=3,H.saveContact(e);case 3:r=t.sent,n(a?{type:"ADD_CONTACT",contact:r}:{type:"UPDATE_CONTACT",updatedContact:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},re=Object(o.b)(null,ae)(ne),ce=(n(91),function(e){var t=JSON.parse(sessionStorage.getItem("loggedinUser"));return Object(_.jsxs)("div",{className:"app-header",children:[Object(_.jsx)("div",{className:"logo",children:Object(_.jsx)(i.b,{to:"/",children:Object(_.jsx)("h1",{children:"MisterBitcoin"})})}),Object(_.jsx)("nav",{className:"nav-items",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/",children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/contacts",children:"Contacts"})}),Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/statistics",children:"Statistics"})}),t?Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/signup",children:t.name})}):Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/signup",children:"Sign up"})})]})})]})}),oe=(n(92),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{name:"",password:""}},e.handleChange=function(t){var n=t.target,a=n.name,r="password"===n.type?+n.value:n.value;e.setState((function(e){return{user:Object(y.a)(Object(y.a)({},e.user),{},Object(z.a)({},a,r))}}))},e.onSaveUser=function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.signUp(Object(y.a)({},e.state.user));case 3:e.props.history.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onLogout=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.logout();case 2:e.props.history.push("/signup");case 3:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.user,t=JSON.parse(sessionStorage.getItem("loggedinUser"));return t?Object(_.jsxs)("div",{className:"welcome",children:[Object(_.jsxs)("h3",{children:["Welcome, ",t.name]}),Object(_.jsx)("button",{onClick:this.onLogout,children:"Logout"})]}):e&&Object(_.jsxs)("form",{className:"signup-page",onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("h1",{children:"Welcome to MisterBitcoin"}),Object(_.jsxs)("div",{className:"name",children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(_.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:this.handleChange,placeholder:"Name"})]}),Object(_.jsxs)("div",{className:"password",children:[Object(_.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(_.jsx)("input",{type:"password",id:"password",name:"password",value:e.password,onChange:this.handleChange,placeholder:"Password"})]}),Object(_.jsx)("button",{onClick:this.onSaveUser,children:"Sign Up"})]})}}]),n}(a.Component)),se={signUp:function(e){return function(){var t=Object(p.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.signUp(e);case 2:a=t.sent,n({type:"SET_USER",signedUpUser:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.logout();case 2:n=e.sent,t({type:"DELETE_USER",loggedoutUser:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},ie=Object(o.b)(null,se)(oe);var ue=function(){var e=function(e){return sessionStorage.getItem("loggedinUser")||!1?Object(_.jsx)(s.b,{component:e.component,path:e.path}):Object(_.jsx)(s.a,{to:"/signup"})};return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(i.a,{children:[Object(_.jsx)(ce,{}),Object(_.jsx)("div",{children:Object(_.jsxs)(s.d,{children:[Object(_.jsx)(s.b,{path:"/statistics",component:M}),Object(_.jsx)(e,{component:re,path:"/contacts/edit/:id?"}),Object(_.jsx)(e,{component:te,path:"/contacts/:id"}),Object(_.jsx)(e,{component:X,path:"/contacts"}),Object(_.jsx)(s.b,{path:"/signup",component:ie}),Object(_.jsx)(e,{exact:!0,component:R,path:"/"})]})})]})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},pe=n(20),de=n(42),me=n(43),he={contacts:[],currContact:null};var je={user:null};var be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,fe=Object(pe.c)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(y.a)(Object(y.a)({},e),{},{contacts:t.contacts});case"SET_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{currContact:t.contact});case"ADD_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:[].concat(Object(me.a)(e.contacts),[t.contact])});case"REMOVE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.contactId}))});case"UPDATE_CONTACT":var n=t.updatedContact;return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===n._id?n:e}))});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});case"REMOVE_USER":return Object(y.a)(Object(y.a)({},e),{},{user:e.user.name!==t.user.name});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});case"SPEND_BALANCE":return Object(y.a)(Object(y.a)({},e),{},{user:Object(y.a)(Object(y.a)({},e.user),{},{coins:e.user.coins-t.spendAmount})});case"UPDATE_USER_MOVES":return Object(y.a)(Object(y.a)({},e),{},{user:Object(y.a)(Object(y.a)({},e.user),{},{moves:t.moves})});default:return e}}}),ve=Object(pe.e)(fe,be(Object(pe.a)(de.a)));c.a.render(Object(_.jsx)(o.a,{store:ve,children:Object(_.jsx)(ue,{})}),document.getElementById("root")),le()}},[[93,1,2]]]);
//# sourceMappingURL=main.95fcc3b5.chunk.js.map
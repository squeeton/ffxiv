(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.1d985892.png"},27:function(e,t,a){e.exports=a(39)},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=a(5),o=a(6),s=a(8),u=a(7),m=a(9),p=a(11),d=a(10),h=a(22),E=a.n(h),f=function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement("img",{src:E.a,alt:"FFXIV Fan Page"}),r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",null,r.a.createElement(p.b,{exact:!0,to:"/"},"Marketboard")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/gathering"},"Gathering")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/crafting"},"Crafting")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About"))))},g=function(e){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,"Coming Soon"))},v=function(){return r.a.createElement("p",null,"coming soon")},b=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Jsut a dude working on this in spare time"))},y=function(){return r.a.createElement("div",{className:"main-content not-found"},r.a.createElement("i",{className:"material-icons icn-error"},"error_outline"),r.a.createElement("h2",null,"Page Not Found"))},P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",{className:"tab"},r.a.createElement("td",null,this.props.item.Item.Name),r.a.createElement("td",null,100===this.props.item.MinPrice?"100+":this.props.item.MinPrice),r.a.createElement("td",null,100===this.props.item.MinPriceQuantity?"100+":this.props.item.MinPriceQuantity),r.a.createElement("td",null,100===this.props.item.LastWeekGil?"100+":this.props.item.LastWeekGil),r.a.createElement("td",null,100===this.props.item.LastWeekQuantity?"100+":this.props.item.LastWeekQuantity),r.a.createElement("td",null,100===this.props.item.LastWeekTransactions?"100+":this.props.item.LastWeekTransactions))}}]),t}(n.PureComponent),k=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,"Sorry, no Items match your search."))},N=a(14),j=a(25),L=r.a.createContext(),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],items:[],marketMainTable:[],loadPercent:0,pageNumber:0,pageTotal:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("Fetching Data"),this.FetchInitial()}},{key:"FetchInitial",value:function(){var e,t,a=this,n="https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=".concat(this.state.pageNumber,"&columns=ID");fetch(n,{mode:"cors"}).then(function(e){return e.json()}).then(function(n){e=n.Results.map(function(e){return e.ID}).toString(),t="https://xivapi.com/market/items?servers=Goblin&ids=".concat(e),a.setState({pageTotal:n.Pagination.PageTotal,loadPercent:25}),fetch(t,{mode:"cors"}).then(function(e){return e.json()}).then(function(e){var t,n,r=new Date;r.setDate(r.getDate()-7),t=(t=e.map(function(e){return e.Goblin})).map(function(e){return Object(j.a)({},e,{MinPrice:e.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).PricePerUnit,MinPriceQuantity:e.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).Quantity,LastWeekGil:e.History.filter(function(e){return e.PurchaseDateMS>=r}).map(function(e){return e.PriceTotal}).reduce(function(e,t){return e+t},0),LastWeekTransactions:e.History.filter(function(e){return e.PurchaseDateMS>=r}).length,LastWeekQuantity:e.History.filter(function(e){return e.PurchaseDateMS>=r}).map(function(e){return e.Quantity}).reduce(function(e,t){return e+t},0)})}),console.log("data:",e),console.log("items:",t),n=t.map(function(e){return Object(N.a)({ItemName:e.Item.Name,MinPrice:void 0===e.MinPrice?"":e.MinPrice.toLocaleString(navigator.language),MinPriceQuantity:void 0===e.MinPriceQuantity?"":e.MinPriceQuantity.toLocaleString(navigator.language),LastWeekGil:void 0===e.LastWeekGil?"":e.LastWeekGil.toLocaleString(navigator.language),LastWeekQuantity:void 0===e.LastWeekQuantity?"":e.LastWeekQuantity.toLocaleString(navigator.language)},"LastWeekQuantity",void 0===e.LastWeekQuantity?"":e.LastWeekQuantity.toLocaleString(navigator.language))}),console.log("marketMainTable:",n),a.setState({items:t,data:e,loadPercent:100})})})}},{key:"FetchNextPage",value:function(){}},{key:"render",value:function(){return r.a.createElement(L.Provider,{value:{data:this.state.data,items:this.state.items,loadPercent:this.state.loadPercent,actions:{}}},this.props.children)}}]),t}(n.Component),M=L.Consumer,W=function(){return r.a.createElement(M,null,function(e){var t=new Date;t.setDate(t.getDate()-7);var a,n=e.items;return console.log("context",e.items),a=n.length>0?n.map(function(e){return r.a.createElement(P,{item:e,key:e.ID.toString()})}):r.a.createElement(k,null),r.a.createElement("table",{className:"table table-dark item-table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Lowest Price"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Gil Made Last Week"),r.a.createElement("th",null,"Units Sold Last Week"),r.a.createElement("th",null,"Transactions Last Week"))),r.a.createElement("tbody",{className:"table table-dark table-striped"},a))})},S=a(26),D=a.n(S),Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,function(e){return r.a.createElement("div",{className:"loading-div"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h1",null,"Data is being fetched from the server")),r.a.createElement("div",{className:"col-2"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement(D.a,{size:150,spinnerColor:"#333",spinnerWidth:15,visible:!0})),r.a.createElement("div",{className:"col"}))),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h2",null,e.loadPercent,"%")),r.a.createElement("div",{className:"col"})))})}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.name.value,n=a.topic.value,r="teachers/".concat(n,"/").concat(t);a.props.history.push(r)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log("Marketboard props:",this.props)}},{key:"render",value:function(){var e,t=this;return e=this.props.loadPercent<100?r.a.createElement(Q,null):r.a.createElement(W,null),r.a.createElement("div",{className:"main-content home"},r.a.createElement("p",null,"Currently only working on Goblin"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Name",ref:function(e){return t.name=e}}),r.a.createElement("input",{type:"text",placeholder:"Topic",ref:function(e){return t.topic=e}}),r.a.createElement("button",{type:"submit"},"Go!")),r.a.createElement("hr",null),e)}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(M,null,function(e){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(w,{loadPercent:e.loadPercent})}}),r.a.createElement(d.a,{path:"/gathering",render:function(){return r.a.createElement(g,{title:"Gathering"})}}),r.a.createElement(d.a,{exact:!0,path:"/crafting",component:v}),r.a.createElement(d.a,{exact:!0,path:"/about",component:b}),r.a.createElement(d.a,{component:y}))))})}}]),t}(n.Component);a(37),a(38);l.a.render(r.a.createElement(O,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e7d33e01.chunk.js.map
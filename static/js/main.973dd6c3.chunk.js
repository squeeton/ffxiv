(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.1d985892.png"},29:function(e,t,a){e.exports=a(42)},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),i=a(7),o=a(8),s=a(10),u=a(9),m=a(11),d=a(13),f=a(12),h=a(24),p=a.n(h),v=function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement("img",{src:p.a,alt:"FFXIV Fan Page"}),r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",null,r.a.createElement(d.b,{exact:!0,to:"/"},"Marketboard")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/gathering"},"Gathering")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/crafting"},"Crafting")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/about"},"About"))))},b=function(e){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,"Coming Soon"))},E=function(){return r.a.createElement("p",null,"coming soon")},g=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Jsut a dude working on this in spare time"))},N=function(){return r.a.createElement("div",{className:"main-content not-found"},r.a.createElement("i",{className:"material-icons icn-error"},"error_outline"),r.a.createElement("h2",null,"Page Not Found"))},P=a(19),y=a(15),I=r.a.createContext(),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={classJobs:[],data:[],items:[],recipe:[],loadPercent:0,loadIncrementAmount:0,pageNumber:1,pageTotal:0,totalResults:0,specificLoaded:0,specificTotal:100},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"test",value:function(){fetch("https://xivapi.com/search?page=".concat(1),{method:"POST",body:'{"indexes": "item","columns": "ID,Recipes","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gte": "9"}}}]}},"from": 0,"size": 100,"sort": [{"LevelItem": "desc"}]}}'}).then(function(e){return e.json()}).then(function(e){})}},{key:"componentDidMount",value:function(){console.log("Fetching Data"),this.FetchClasses(),this.FetchData(this.state.pageNumber)}},{key:"FetchClasses",value:function(){var e=this;fetch("https://xivapi.com/classJob?columns=ID,Name",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({classJobs:t.Results})})}},{key:"FetchData",value:function(e){var t,a=this;fetch("https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=".concat(e,"&columns=ID"),{mode:"cors"}).then(function(e){return e.json()}).then(function(e){t=e.Results.map(function(e){return e.ID}).toString();var n=1/(2*e.Pagination.PageTotal)*100;return a.setState(function(t){return{pageTotal:e.Pagination.PageTotal,pageNumber:e.Pagination.PageNext,loadIncrementAmount:n,totalResults:e.Pagination.ResultsTotal,loadPercent:t.loadPercent+n}}),fetch("https://xivapi.com/market/items?servers=Goblin&ids=".concat(t),{mode:"cors"}).then(function(e){return e.json()}).then(function(e){a.setState(function(t){return{data:[].concat(Object(y.a)(t.data),Object(y.a)(e)),loadPercent:t.loadPercent+t.loadIncrementAmount}})}).then(function(e){a.state.data.length===a.state.totalResults&&(a.FormatData(),a.setState({loadPercent:100}))}),e.Pagination.PageNext}).then(function(e){null!==e&&setTimeout(a.FetchData(a.state.pageNumber),200)})}},{key:"FormatData",value:function(){var e=this,t=new Date;t.setDate(t.getDate()-7);var a=this.state.data;a=a.map(function(a){return Object(P.a)({},a.Goblin,{MinPrice:a.Goblin.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).PricePerUnit||0,MinPriceQuantity:a.Goblin.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).Quantity||0,MinPriceHQ:a.Goblin.Prices.filter(function(e){return!0===e.IsHQ}).reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).PricePerUnit||0,LastWeekGil:a.Goblin.History.filter(function(e){return e.PurchaseDateMS>=t}).map(function(e){return e.PriceTotal}).reduce(function(e,t){return e+t},0),LastWeekTransactions:a.Goblin.History.filter(function(e){return e.PurchaseDateMS>=t}).length,LastWeekQuantity:a.Goblin.History.filter(function(e){return e.PurchaseDateMS>=t}).map(function(e){return e.Quantity}).reduce(function(e,t){return e+t},0),Rarity:e.GetRarity(a.Goblin.Item.Rarity)})}),this.setState({items:a,data:[]}),this.FetchRecipes()}},{key:"FetchRecipes",value:function(){var e=this;fetch("https://xivapi.com/search",{method:"POST",body:'{"indexes": "item","columns": "ID,Recipes","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gte": "9"}}}]}},"from": '.concat(this.state.specificLoaded,',"size": 100,"sort": [{"LevelItem": "desc"}]}}')}).then(function(e){return e.json()}).then(function(t){e.setState(function(e){return{specificLoaded:e.specificLoaded+100,specificTotal:t.Pagination.ResultsTotal,recipe:[].concat(Object(y.a)(e.recipe),Object(y.a)(t.Results))}}),e.state.specificLoaded<t.Pagination.ResultsTotal?setTimeout(e.FetchRecipes(),200):e.FormatRecipes()})}},{key:"FormatRecipes",value:function(){for(var e=this.state.recipe,t=0;t<e.length;t++){e[t].ItemID=e[t].ID,delete e[t].ID;var a="",n=void 0;if(e[t].Recipes){for(var r=[],c=[],l=0;l<e[t].Recipes.length;l++)r.push(this.GetClass(e[t].Recipes[l].ClassJobID)),c.push(e[t].Recipes[l].Level);a=r.join(", "),n=Math.min(c)}e[t].Crafters=a,e[t].CraftLvl=n,delete e[t].Recipes}this.setState({recipe:e}),this.MergeRecipes()}},{key:"MergeRecipes",value:function(){for(var e=this.state.items,t=this.state.recipe,a=[],n=function(n){a.push(Object(P.a)({},e[n],t.find(function(t){return t.ItemID===e[n].ItemID})))},r=0;r<e.length;r++)n(r);console.log("post merge",a),this.setState(function(e){return{items:a,recipe:[]}})}},{key:"GetClass",value:function(e){if(null===e)return"";var t=this.state.classJobs.find(function(t){return t.ID===e});return this.toTitleCase(t.Name)}},{key:"GetRarity",value:function(e){switch(e){case 1:return"Common";case 2:return"Uncommon";case 3:return"Rare";case 4:return"Relic";case 7:return"Aetherial";default:return"Common"}}},{key:"toTitleCase",value:function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}},{key:"render",value:function(){return r.a.createElement(I.Provider,{value:{classJobs:this.state.classJobs,data:this.state.data,items:this.state.items,recipe:this.state.recipe,loadPercent:this.state.loadPercent,specificLoaded:this.state.specificLoaded,specificTotal:this.state.specificTotal,actions:{}}},this.props.children)}}]),t}(n.Component),C=I.Consumer,D=a(28),j=(a(38),function(){return r.a.createElement(C,null,function(e){var t=new Date;t.setDate(t.getDate()-7);var a=[{Header:"Item ID",accessor:"ItemID",show:!1},{Header:"Rarity",accessor:"Rarity",className:"rarity",show:!1},{Header:"Item Name",accessor:"Item.Name",className:"item-name",sortable:!0,filterable:!0,filterMethod:function(e,t){return""===e.value||!!t[e.id].toUpperCase().includes(e.value.toUpperCase())||void 0}},{Header:"Lowest Price",accessor:"MinPrice",className:"number-table",sortable:!0,width:120,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Qty",accessor:"MinPriceQuantity",className:"number-table",sortable:!0,width:45,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Lowest HQ",accessor:"MinPriceHQ",className:"number-table",sortable:!0,width:120,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Gil L/W",accessor:"LastWeekGil",className:"number-table",sortable:!0,width:120,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return console.log(t[e.id],">=",parseInt(e.value),"=",t[e.id]>=parseInt(e.value)),""===e.value||t[e.id]>=parseInt(e.value)||void 0}},{Header:"Qty L/W",accessor:"LastWeekQuantity",className:"number-table",sortable:!0,width:90,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return""===e.value||t[e.id]<=e.value||void 0}},{Header:"Transactions L/W",accessor:"LastWeekTransactions",className:"number-table",sortable:!0,width:155,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return""===e.value||t[e.id]>=parseInt(e.value)||void 0}}];return 100===e.loadPercent&&e.specificLoaded>=e.specificTotal&&(a.push({Header:"Crafters",accessor:"Crafters",sortable:!0,width:215,filterable:!0,filterMethod:function(e,t){return""===e.value||void 0!==t[e.id]&&null!==t[e.id]&&(!!t[e.id].toUpperCase().includes(e.value.toUpperCase())||void 0)}}),a.push({Header:"Lvl",accessor:"CraftLvl",className:"number-table",sortable:!0,width:45,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return console.log("filter",e),console.log("row[filter.id]",t[e.id]),""===e.value||t[e.id]<=e.value||void 0}})),r.a.createElement(D.a,{className:"dark -striped -highlight",data:e.items,columns:a,pageSizeOptions:[10,25,50,100],defaultPageSize:25,getTrProps:function(e,t,a){return{className:"rarity-".concat(t.row.Rarity)}}})})}),k=a(27),L=a.n(k),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){return r.a.createElement("div",{className:"loading-div"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h1",null,"Data is being fetched from the server")),r.a.createElement("div",{className:"col-2"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement(L.a,{size:150,spinnerColor:"#333",spinnerWidth:15,visible:!0})),r.a.createElement("div",{className:"col"}))),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h2",null,e.loadPercent.toFixed(1),"%")),r.a.createElement("div",{className:"col"})))})}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t;return e=this.props.loadPercent<100?r.a.createElement(R,null):r.a.createElement(j,null),r.a.createElement(C,null,function(a){return t=100===a.loadPercent&&a.specificLoaded<a.specificTotal?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},"Loading Crafters"),r.a.createElement("div",{className:"col"},(a.specificLoaded/a.specificTotal*100).toFixed(1),"%")):r.a.createElement("div",null),r.a.createElement("div",{className:"main-content home"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Currently only working on Goblin")),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Item name")," search box is case insensitive")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Gil made Last Week")," search box is for gil ",r.a.createElement("strong",null,"greater than or equal to")," the provided value")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Units Sold Last Week")," search box is for units ",r.a.createElement("strong",null,"less than or equal to")," the provided value")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Transactions Last Week")," search box is for transactions ",r.a.createElement("strong",null,"greater than or equal to")," the provided value"))),r.a.createElement("hr",null),t,e)})}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{loadPercent:e.loadPercent})}}),r.a.createElement(f.a,{path:"/gathering",render:function(){return r.a.createElement(b,{title:"Gathering"})}}),r.a.createElement(f.a,{exact:!0,path:"/crafting",component:E}),r.a.createElement(f.a,{exact:!0,path:"/about",component:g}),r.a.createElement(f.a,{component:N}))))})}}]),t}(n.Component);a(40),a(41);l.a.render(r.a.createElement(w,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.973dd6c3.chunk.js.map
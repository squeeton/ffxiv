(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/logo.1d985892.png"},29:function(e,t,a){e.exports=a(42)},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),i=a(7),s=a(8),o=a(10),u=a(9),m=a(11),d=a(13),f=a(12),h=a(24),p=a.n(h),v=function(){return r.a.createElement("header",{className:"main-header"},r.a.createElement("img",{src:p.a,alt:"FFXIV Fan Page"}),r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",null,r.a.createElement(d.b,{exact:!0,to:"/"},"Marketboard")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/gathering"},"Gathering")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/crafting"},"Crafting")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/about"},"About"))))},b=function(e){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,"Coming Soon"))},E=function(){return r.a.createElement("p",null,"coming soon")},g=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Jsut a dude working on this in spare time"))},P=function(){return r.a.createElement("div",{className:"main-content not-found"},r.a.createElement("i",{className:"material-icons icn-error"},"error_outline"),r.a.createElement("h2",null,"Page Not Found"))},N=a(16),I=a(15),y=r.a.createContext(),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={classJobs:[],data:[],items:[],itemSpecifics:[],loadPercent:0,loadIncrementAmount:0,pageNumber:1,pageTotal:0,totalResults:0,specificPages:0,specificPage:1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("Fetching Data"),this.FetchClasses(),this.FetchData(this.state.pageNumber)}},{key:"FetchClasses",value:function(){var e=this;fetch("https://xivapi.com/classJob?columns=ID,Name",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({classJobs:t.Results})})}},{key:"FetchData",value:function(e){var t,a=this;fetch("https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=".concat(e,"&columns=ID"),{mode:"cors"}).then(function(e){return e.json()}).then(function(e){t=e.Results.map(function(e){return e.ID}).toString();var n=1/(2*e.Pagination.PageTotal)*100;return a.setState(function(t){return{pageTotal:e.Pagination.PageTotal,pageNumber:e.Pagination.PageNext,loadIncrementAmount:n,totalResults:e.Pagination.ResultsTotal,loadPercent:t.loadPercent+n}}),fetch("https://xivapi.com/market/items?servers=Goblin&ids=".concat(t),{mode:"cors"}).then(function(e){return e.json()}).then(function(e){a.setState(function(t){return{data:[].concat(Object(I.a)(t.data),Object(I.a)(e)),loadPercent:t.loadPercent+t.loadIncrementAmount}})}).then(function(e){a.state.data.length===a.state.totalResults&&(a.FormatData(),a.setState({loadPercent:100}))}),e.Pagination.PageNext}).then(function(e){null!==e&&setTimeout(a.FetchData(a.state.pageNumber),200)})}},{key:"FormatData",value:function(){var e=new Date;e.setDate(e.getDate()-7);var t=this.state.data;t=t.map(function(t){return Object(N.a)({},t.Goblin,{MinPrice:t.Goblin.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).PricePerUnit||0,MinPriceQuantity:t.Goblin.Prices.reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).Quantity||0,MinPriceHQ:t.Goblin.Prices.filter(function(e){return!0===e.IsHQ}).reduce(function(e,t){return e.PricePerUnit<t.PricePerUnit?e:t},0).PricePerUnit||0,LastWeekGil:t.Goblin.History.filter(function(t){return t.PurchaseDateMS>=e}).map(function(e){return e.PriceTotal}).reduce(function(e,t){return e+t},0),LastWeekTransactions:t.Goblin.History.filter(function(t){return t.PurchaseDateMS>=e}).length,LastWeekQuantity:t.Goblin.History.filter(function(t){return t.PurchaseDateMS>=e}).map(function(e){return e.Quantity}).reduce(function(e,t){return e+t},0)})}),this.setState({items:t,data:[]}),this.FetchItemSpecifics(1)}},{key:"FetchItemSpecifics",value:function(e){var t=this;fetch("https://xivapi.com/search?page=".concat(e),{method:"POST",body:'{"indexes": "item","columns": "ID,Recipes,Rarity","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gt": "9"}}}]}},"from": 0,"size": 100,"sort": [{"LevelItem": "desc"}]}}'}).then(function(e){return e.json()}).then(function(e){return t.setState(function(t){return{specificPage:e.Pagination.Page,specificPages:e.Pagination.PageTotal,itemSpecifics:[].concat(Object(I.a)(t.itemSpecifics),Object(I.a)(e.Results))}}),e.Pagination.PageNext}).then(function(e){null!=e?setTimeout(t.FetchItemSpecifics(e),200):t.MergeItemSpecifics()})}},{key:"MergeItemSpecifics",value:function(){var e=this,t={};for(var a in this.state.itemSpecifics){var n=this.state.itemSpecifics[a];t[n.ID]=n}var r=this.state.items;r=r.map(function(a){var n,r;return t[a.Item.ID]&&(n=null===t[a.Item.ID].Recipes?null:e.GetClass(t[a.Item.ID].Recipes[0].ClassJobID),r=e.GetRarity(t[a.Item.ID].Rarity)),Object(N.a)({},a,{Crafter:n,Rarity:r})}),this.setState(function(a){return{items:r.map(function(a){var n,r;return t[a.Item.ID]&&(n=null===t[a.Item.ID].Recipes?null:e.GetClass(t[a.Item.ID].Recipes[0].ClassJobID),r=e.GetRarity(t[a.Item.ID].Rarity)),Object(N.a)({},a,{Crafter:n,Rarity:r})})}})}},{key:"GetClass",value:function(e){if(null===e)return"";var t=this.state.classJobs.find(function(t){return t.ID===e});return this.toTitleCase(t.Name)}},{key:"GetRarity",value:function(e){switch(e){case 1:return"Common";case 2:return"Uncommon";case 3:return"Rare";case 4:return"Relic";case 7:return"Aetherial";default:return"Common"}}},{key:"toTitleCase",value:function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}},{key:"render",value:function(){return r.a.createElement(y.Provider,{value:{classJobs:this.state.classJobs,data:this.state.data,items:this.state.items,itemSpecifics:this.state.itemSpecifics,loadPercent:this.state.loadPercent,specificPages:this.state.specificPages,specificPage:this.state.specificPage,actions:{}}},this.props.children)}}]),t}(n.Component),D=y.Consumer,k=a(28),j=(a(38),function(){return r.a.createElement(D,null,function(e){var t=new Date;t.setDate(t.getDate()-7);var a=[{Header:"Item ID",accessor:"ItemID",headerClassName:"hidden",className:"hidden"},{Header:"Item Name",accessor:"Item.Name",sortable:!0,filterable:!0,filterMethod:function(e,t){return""===e.value||!!t[e.id].toUpperCase().includes(e.value.toUpperCase())||void 0}},{Header:"Lowest Price",accessor:"MinPrice",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Quantity",accessor:"MinPriceQuantity",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Lowest HQ",accessor:"MinPrice",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)}},{Header:"Gil Made Last Week",accessor:"LastWeekGil",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return console.log(t[e.id],">=",parseInt(e.value),"=",t[e.id]>=parseInt(e.value)),""===e.value||t[e.id]>=parseInt(e.value)||void 0}},{Header:"Units Sold Last Week",accessor:"LastWeekQuantity",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return""===e.value||t[e.id]<=e.value||void 0}},{Header:"Transactions Last Week",accessor:"LastWeekTransactions",className:"number-table",sortable:!0,Cell:function(e){return(new Intl.NumberFormat).format(e.value)},filterable:!0,filterMethod:function(e,t){return""===e.value||t[e.id]>=parseInt(e.value)||void 0}}];return e.specificPage>=e.specificPages&&a.push({Header:"Crafter",accessor:"Crafter",sortable:!0,filterable:!0,filterMethod:function(e,t){return""===e.value||void 0!==t[e.id]&&null!==t[e.id]&&(!!t[e.id].toUpperCase().includes(e.value.toUpperCase())||void 0)}}),r.a.createElement(k.a,{className:"dark -striped -highlight",data:e.items,columns:a})})}),S=a(27),w=a.n(S),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,function(e){return r.a.createElement("div",{className:"loading-div"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h1",null,"Data is being fetched from the server")),r.a.createElement("div",{className:"col-2"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement(w.a,{size:150,spinnerColor:"#333",spinnerWidth:15,visible:!0})),r.a.createElement("div",{className:"col"}))),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col center"},r.a.createElement("h2",null,e.loadPercent.toFixed(1),"%")),r.a.createElement("div",{className:"col"})))})}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t;return e=this.props.loadPercent<100?r.a.createElement(O,null):r.a.createElement(j,null),r.a.createElement(D,null,function(a){return t=a.specificPage<a.specificPages?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},"Loading Recipes and rarity"),r.a.createElement("div",{className:"col"},a.specificPage," / ",a.specificPages)):r.a.createElement("div",null),r.a.createElement("div",{className:"main-content home"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"}),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"Currently only working on Goblin")),r.a.createElement("div",{className:"col"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Item name")," search box is case insensitive")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Gil made Last Week")," search box is for gil ",r.a.createElement("strong",null,"greater than or equal to")," the provided value")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Units Sold Last Week")," search box is for units ",r.a.createElement("strong",null,"less than or equal to")," the provided value")),r.a.createElement("div",{className:"col"},r.a.createElement("p",null,r.a.createElement("strong",null,"Transactions Last Week")," search box is for transactions ",r.a.createElement("strong",null,"greater than or equal to")," the provided value"))),r.a.createElement("hr",null),t,e)})}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(D,null,function(e){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(R,{loadPercent:e.loadPercent})}}),r.a.createElement(f.a,{path:"/gathering",render:function(){return r.a.createElement(b,{title:"Gathering"})}}),r.a.createElement(f.a,{exact:!0,path:"/crafting",component:E}),r.a.createElement(f.a,{exact:!0,path:"/about",component:g}),r.a.createElement(f.a,{component:P}))))})}}]),t}(n.Component);a(40),a(41);l.a.render(r.a.createElement(C,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8db648cb.chunk.js.map
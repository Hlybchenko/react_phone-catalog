(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=a(2),s=(a(37),a(12)),i=a.n(s),m=a(14),u=a(31),h=a(15),d=a(7),p=a(8),g=a(10),E=a(9),f=a(11),b=a(13),y="https://cors-anywhere.herokuapp.com/",v="https://mate-academy.github.io/phone-catalogue-static/api",P=function(e){return fetch("".concat(y).concat(v).concat("/phones","/").concat(e,".json")).then(function(e){return e.json()}).then(function(e){return e})},N=r.a.memo(function(e){var t=e.orderedPhones,a=e.handleIncreasQuantity,n=e.handleDecreasQuantity,l=e.handleDeleteItem;return r.a.createElement("div",{className:"order-container"},r.a.createElement("div",{className:"order-box"},r.a.createElement("h3",null,"Your order:"),r.a.createElement("ul",{className:"order-list"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("section",{className:"order-content"},r.a.createElement("div",{className:"order-control-block"},r.a.createElement("button",{type:"button",className:"btn btn-control"},r.a.createElement("img",{onClick:n,name:e.name,id:e.id,className:"control-btn-icons",src:"./img/minus-icon.png",alt:"minus-button"})),r.a.createElement("button",{type:"button",className:"btn btn-control"},r.a.createElement("img",{onClick:a,name:e.name,id:e.id,className:"control-btn-icons",src:"./img/add.png",alt:"add-button"})),r.a.createElement("button",{type:"button",className:"btn btn-control"},r.a.createElement("img",{onClick:l,name:e.name,id:e.id,className:"control-btn-icons",src:"./img/Delete.png",alt:"delete-button"}))),r.a.createElement("table",{className:"order-item"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Phone:"),r.a.createElement("th",null,"Quantity:"),r.a.createElement("th",null,"Extra details link:"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("span",{className:"order-quantity"},e.quantity)),r.a.createElement("td",null,r.a.createElement(c.b,{to:e.link},r.a.createElement("img",{className:"linked-order-photo",src:e.images[0],alt:e.name,title:"see phone details again"}))))))))}))),r.a.createElement("div",{className:"order-btn-block"},r.a.createElement("div",{className:"order-total"},t.length>1?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"order-total-text"},"Total phones in cart: "),t.map(function(e){return e.quantity}).reduce(function(e,t){return e+t})):""),r.a.createElement("button",{type:"button",className:"btn btn-buy btn-pay"},"->> TO PAY <<-")))}),C=function(e){var t=e.orderedPhonesLength;return r.a.createElement("header",{className:"header-container"},r.a.createElement("div",{className:"header-logo"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"./img/logo.png",alt:"logo_mobile-phones"}))),r.a.createElement("nav",{className:"nav-links"},r.a.createElement("ul",{className:"nav-items"},r.a.createElement(c.c,{to:"/",exact:!0},r.a.createElement("li",{className:"nav-item"},"Home")),r.a.createElement(c.c,{to:"/phones"},r.a.createElement("li",{className:"nav-item"},"Phones")),r.a.createElement(c.c,{to:"/cart"},r.a.createElement("li",{className:"nav-item cart-item"},r.a.createElement("img",{className:"cart-icon",src:t<1?"./img/empty-cart.png":"./img/full-cart.png",alt:"shopping-cart"}))))))},k=function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("div",{className:"footer-info"},r.a.createElement("span",null,"Task: ",r.a.createElement("a",{href:"https://github.com/mate-academy/react_phone-catalog"},"phones catalog")),r.a.createElement("span",null,"Pull request: ",r.a.createElement("a",{href:"https://github.com/mate-academy/react_phone-catalog/pull/1/files?file-filters%5B%5D=.js"},"Hlybchenko"))))},x=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home Page"),r.a.createElement("div",{className:"welcome-container"},r.a.createElement(c.b,{to:"/phones"},r.a.createElement("span",{className:"welcome-text"},"Welcome to the best mobile phones store in the world !!!"))))},j=a(30),O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(j.a,{color:"#0ca2e2aa",loading:this.state.loading}))}}]),t}(n.Component),S=function(e){return r.a.createElement("div",{className:"search-panel"},r.a.createElement("input",{onChange:function(t){var a=t.target.value.toLowerCase().trim();e.handleSearchChange(a)},className:"search-field",type:"text",placeholder:"type to search "}),r.a.createElement("select",{onChange:function(t){var a=t.target.value;e.handleSortChange(a)},className:"search-sort"},r.a.createElement("option",null,"sort type"),r.a.createElement("option",{value:"alphabet"},"Alphabetical"),r.a.createElement("option",{value:"age"},"Newest")))},w=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={phones:a.props.phones,pages:[],perPage:20,page:1},a.contentPerPage=[{label:3},{label:6},{label:10},{label:a.state.phones.length}],a.handlePrev=function(){a.setState(function(e){return{page:e.page-1}}),a.props.togglePagination(a.state.page-1,a.state.perPage)},a.handleNext=function(){a.setState(function(e){return{page:e.page+1}}),a.props.togglePagination(a.state.page+1,a.state.perPage)},a.handleNum=function(e){var t=e.target.id;a.props.togglePagination(t,a.state.perPage),a.setState({page:+t})},a.toggleContentPerPage=function(e){var t=a.state.phones,n=e.target.value,r=Math.ceil(t.length/+n);a.setState({perPage:+n,pages:Array.from({length:r},function(e,t){return t+1}),page:1}),a.props.togglePagination(1,+n)},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){var e=this.state,t=e.phones,a=e.perPage,n=Math.ceil(t.length/a);this.setState({pages:Array.from({length:n},function(e,t){return t+1})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pages,n=t.page,l=t.perPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pagination-box"},r.a.createElement("ul",{className:"pagination-panel"},r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-pgn prev-next",type:"button",disabled:n<=1,onClick:function(){return e.handlePrev()}},"<<")),a.map(function(t,a){return r.a.createElement("li",{key:t},r.a.createElement("button",{type:"button",className:a+1===n?"btn btn-pgn selected":"btn btn-pgn",id:a+1,onClick:e.handleNum},t))}),r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-pgn prev-next",type:"button",onClick:this.handleNext,disabled:n>a.length-1},">>")),r.a.createElement("select",{className:"per-page-select",defaultValue:l,onChange:this.toggleContentPerPage,title:"perPage"},this.contentPerPage.map(function(e){return r.a.createElement("option",{key:e.label,value:e.label},e.label)})))))}}]),t}(n.Component),A=r.a.memo(function(e){var t=e.phones,a=e.handleAddToCart;return r.a.createElement("ul",{className:"phones-list"},t.map(function(e){return r.a.createElement("li",{key:e.id,className:"phones-item"},r.a.createElement("section",{className:"phones-item-info"},r.a.createElement(c.b,{to:"/phones/".concat(e.id)},r.a.createElement("img",{className:"phones-main-photo",src:e.imageUrl,alt:e.name})),r.a.createElement("div",{className:"phones-item-text"},r.a.createElement("h3",null,r.a.createElement(c.b,{className:"phones-item-title",to:"/phones/".concat(e.id)},e.name)),r.a.createElement("p",null,e.snippet)),r.a.createElement("div",{className:"phones-item-add-btn"},r.a.createElement("button",{onClick:a,id:e.id,className:"add-btn",type:"button"},"ADD TO CART"))))}))}),T=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).state={phones:[],copyPhones:[],lastPhone:"",firstPhone:""},a.handleSearchChange=function(e){var t=e;a.setState(function(e){return{phones:e.copyPhones.filter(function(e){return[e.snippet,e.name].join("").toLowerCase().includes(t)})}})},a.handleSortChange=function(e){switch(e){case"alphabet":return a.setState(function(e){return{phones:e.phones.sort(function(e,t){return e.name.localeCompare(t.name)}),copyPhones:e.copyPhones.sort(function(e,t){return e.name.localeCompare(t.name)})}});case"age":return a.setState(function(e){return{phones:e.phones.sort(function(e,t){return e.age-t.age}),copyPhones:e.copyPhones.sort(function(e,t){return e.age-t.age})}});default:return a.setState(function(e){return{phones:e.phones,copyPhones:e.copyPhones}})}},a.togglePagination=function(e,t){var n=e*t-t,r=e*t;a.setState(function(e){return{lastPhone:r,firstPhone:n+1,phones:Object(m.a)(e.copyPhones).slice(n,r)}})},a.perPagePhoneCounter=function(){var e=a.state,t=e.firstPhone,n=e.lastPhone,l=e.copyPhones;return r.a.createElement("span",null,t,t?"-":"".concat(Object(m.a)(l).length," "),n>"".concat(Object(m.a)(l).length)?"".concat(Object(m.a)(l).length," "):"".concat(n," "),"of"," ".concat(l.length))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y).concat(v).concat("/phones",".json")).then(function(e){return e.json()}).then(function(e){return e});case 2:t=e.sent,this.setState({phones:t,copyPhones:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.phones,a=e.copyPhones;return r.a.createElement(r.a.Fragment,null,a.length<1?r.a.createElement(O,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{handleSearchChange:this.handleSearchChange,handleSortChange:this.handleSortChange}),r.a.createElement("h2",null,"Phones Page(",this.perPagePhoneCounter(),")"),r.a.createElement(w,{phones:t,togglePagination:this.togglePagination}),r.a.createElement(A,{phones:t,handleAddToCart:this.props.handleAddToCart})))}}]),t}(n.PureComponent),D=function(e){var t=e.extraData,a=e.selectedPhoto,n=e.handleChoosePhoto,l=e.handleAddToCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"extra-details"},r.a.createElement("div",{className:"extra-details-photo-selected"},r.a.createElement("img",{className:"selected-photo",src:a,alt:a})),r.a.createElement("article",null,r.a.createElement("span",{className:"extra-details-title"},t.name),r.a.createElement("div",{className:"extra-details-description"},r.a.createElement("span",{className:"extra-details-text"},t.description),r.a.createElement("ul",{className:"extra-details-photos"},t.images.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("img",{onClick:n,className:"extra-details-photos-item",src:e,alt:e,name:e}))}),r.a.createElement("li",{key:"add-to-cart"},r.a.createElement("img",{onClick:l,id:t.id,className:"extra-details-photos-item extra-details-photos-item-cart-add ",src:"./img/cart-add.png",alt:"add-to-cart",title:"Click for adding to cart ",name:t.id})))))),r.a.createElement("div",{className:"extra-details-more-details"},r.a.createElement("section",{className:"more-info"},r.a.createElement("h3",null,"Camera"),r.a.createElement("i",null,"features:"),t.camera.features.map(function(e){return r.a.createElement("span",{key:e},e)}),r.a.createElement("p",null,r.a.createElement("i",null,"primary:"),r.a.createElement("span",null,t.camera.primary))),r.a.createElement("section",{className:"more-info"},r.a.createElement("h3",null,"Battery"),r.a.createElement("i",null,"standbyTime:"),r.a.createElement("span",null,t.battery.standbyTime),r.a.createElement("p",null,r.a.createElement("i",null,"talkTime:"),t.battery.talkTime),r.a.createElement("p",null,r.a.createElement("i",null,"type:")),t.battery.type),r.a.createElement("section",{className:"more-info"},r.a.createElement("h3",null,"Hardware"),r.a.createElement("i",null,"audioJack:"),t.hardware.audioJack,r.a.createElement("p",null,r.a.createElement("i",null,"cpu:"),t.hardware.cpu),r.a.createElement("p",null,r.a.createElement("i",null,"usb:"),t.hardware.usb)),r.a.createElement("section",{className:"more-info"},r.a.createElement("h3",null,"Size and Weight"),r.a.createElement("i",null,"dimensions:"),r.a.createElement(r.a.Fragment,null,t.sizeAndWeight.dimensions.map(function(e){return r.a.createElement("span",{key:e},e)})),"weight:",t.sizeAndWeight.weight)))},I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={extraData:{},selectedPhoto:""},a.handleChoosePhoto=function(e){var t=e.target.name;a.setState({selectedPhoto:t})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.id,e.next=3,P(t);case 3:a=e.sent,this.setState({extraData:a,selectedPhoto:a.images[0]});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.extraData,a=e.selectedPhoto,n=this.props.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,n===t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{to:"/phones"},r.a.createElement("button",{className:"btn btn-back",type:"button"},"<<- Back to all phones")),r.a.createElement(c.b,{to:"/cart/"},r.a.createElement("button",{onClick:this.props.handleAddToCart,id:t.id,className:"btn btn-buy",type:"button"},"->> BUY NOW  <<-")),r.a.createElement(D,{extraData:t,selectedPhoto:a,handleChoosePhoto:this.handleChoosePhoto,handleAddToCart:this.props.handleAddToCart})):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("p",null,"Maybe this page is not available, ",r.a.createElement(c.b,{to:"/phones"},"go back")," and try checking late"))))}}]),t}(n.Component),F=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Page not found"),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Return to Home Page")))},q=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={orderedPhones:[]},a.getFromLocalStorage=function(){var e=localStorage.getItem("orderedPhones");return JSON.parse(e)},a.saveToLocalStorage=function(){var e=a.state.orderedPhones;localStorage.setItem("orderedPhones",JSON.stringify(e))},a.handleAddToCart=function(){var e=Object(h.a)(i.a.mark(function e(t){var n,r,l,o,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,r=1,l="/phones/".concat(n),e.t0=u.a,e.t1={},e.next=7,P(n);case 7:e.t2=e.sent,e.t3={quantity:r,link:l},o=(0,e.t0)(e.t1,e.t2,e.t3),c=function(e){return e.id===n},a.state.orderedPhones.some(c)||a.setState(function(e){return{orderedPhones:[].concat(Object(m.a)(e.orderedPhones),[o])}}),a.saveToLocalStorage();case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleIncreasQuantity=function(e){var t=e.target.id;a.state.orderedPhones.filter(function(e){return e.id===t})[0].quantity+=1,a.setState(function(e){return{orderedPhones:e.orderedPhones}})},a.handleDecreasQuantity=function(e){var t=e.target.id,n=a.state.orderedPhones.filter(function(e){return e.id===t})[0];n.quantity>1&&(n.quantity-=1),a.setState(function(e){return{orderedPhones:e.orderedPhones}})},a.handleDeleteItem=function(e){var t=e.target.id,n=a.state.orderedPhones.findIndex(function(e){return e.id===t});a.state.orderedPhones.splice(n,1),a.setState(function(e){return{orderedPhones:e.orderedPhones}})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){this.handleAddToCart()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"phones-catalog"},r.a.createElement(C,{orderedPhonesLength:this.state.orderedPhones.length}),r.a.createElement("main",{className:"content-container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:x}),r.a.createElement(b.a,{path:"/phones",exact:!0,component:function(){return r.a.createElement(T,{handleAddToCart:e.handleAddToCart})}}),r.a.createElement(b.a,{path:"/cart",exact:!0,component:function(){return r.a.createElement(N,{orderedPhones:e.state.orderedPhones,handleIncreasQuantity:e.handleIncreasQuantity,handleDecreasQuantity:e.handleDecreasQuantity,handleDeleteItem:e.handleDeleteItem})}}),r.a.createElement(b.a,{exact:!0,path:"/phones/?query=&sort=",component:S}),r.a.createElement(b.a,{path:"/phones/:id",exact:!0,component:function(t){return r.a.createElement(I,{id:t.match.params.id,handleAddToCart:e.handleAddToCart})}}),r.a.createElement(b.a,{component:F}))),r.a.createElement(k,null))}}]),t}(n.Component);q.defaultProps={match:{params:{id:""}}},o.a.render(r.a.createElement(c.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.dee92f15.chunk.js.map
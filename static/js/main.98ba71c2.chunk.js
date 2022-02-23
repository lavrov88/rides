(this.webpackJsonprides=this.webpackJsonprides||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),r=a(19),c=a.n(r),n=(a(31),a(32),a(33),a(34),a(0)),o=function(e){return Object(n.jsxs)("li",{"data-biker-id":e.id,className:"filter_menu_item"+(e.isActive?" active":""),children:[Object(n.jsx)("div",{className:"filter_menu_item__img",children:Object(n.jsx)("img",{src:e.img,alt:e.name})}),Object(n.jsxs)("div",{className:"filter_menu_item__name",children:["Mr. ",e.name]})]})},l=function(e){var t=e.allBikers.map((function(t){return Object(n.jsx)(o,{id:t.id,isActive:(a=t.id,!!e.filteredBikers.find((function(e){return e===a}))),name:t.name,img:t.photoSmall},t.id);var a}));return Object(n.jsx)("ul",{onClick:function(t){if(t.target.closest(".filter_menu_item")){var a={type:"TOGGLE-FILTERED-BIKER",bikerId:t.target.closest(".filter_menu_item").dataset.bikerId};e.dispatch(a)}},className:"filter_menu_items",children:t})},m=(a(36),function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{"data-sort-parameter":e.type,className:"sort_menu_popup_item".concat(e.isActive?" "+e.isActive:""),children:[Object(n.jsx)("div",{className:"sort_menu_popup_item__name",children:e.name}),Object(n.jsx)("button",{className:"sort_menu_popup_item__btn smallest",children:e.sort2}),Object(n.jsx)("button",{className:"sort_menu_popup_item__btn biggest",children:e.sort1})]})})}),d=function(e){var t=e.sortParameter,a=e.sortFromBiggest,s=function(e){return t===e&&(a?"fromBiggest":"fromSmallest")},i=[{name:"By date:",type:"date",sort1:"Latest",sort2:"Oldest",isActive:s("date")},{name:"By distance:",type:"distance",sort1:"Longest",sort2:"Shortest",isActive:s("distance")},{name:"By average speed:",type:"speed",sort1:"Fastest",sort2:"Slowest",isActive:s("speed")},{name:"By riding time:",type:"time",sort1:"Longest",sort2:"Shortest",isActive:s("time")}];return Object(n.jsx)("ul",{onClick:function(t){if(t.target.classList.contains("sort_menu_popup_item__btn")){var a={type:"TOGGLE-RIDES-SORT",sortParameter:t.target.closest(".sort_menu_popup_item").dataset.sortParameter,sortFromBiggest:t.target.classList.contains("biggest")};e.dispatch(a)}},children:i.map((function(e){return Object(n.jsx)(m,{name:e.name,type:e.type,sort1:e.sort1,sort2:e.sort2,isActive:e.isActive},e.type)}))})},p=function(e){var t=e.navbar.filterMenuIsOpened,a=e.navbar.sortMenuIsOpened;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"manage_list",children:[Object(n.jsxs)("div",{className:"manage_list__global_buttons",children:[Object(n.jsxs)("button",{onClick:function(){e.dispatch({type:"TOGGLE-FILTER-MENU"})},className:"manage_list__btn filter_btn",children:["Filter ",Object(n.jsx)("span",{children:function(){var t=e.bikers,a=e.navbar.output.filteredBikers;return a.length===t.length||0===a.length||e.navbar.filterMenuIsOpened?null:1===e.navbar.output.filteredBikers.length?"(Mr. ".concat(e.navbar.output.filteredBikers[0]," only)"):"(".concat(a.length,"/").concat(t.length,")")}()})]}),Object(n.jsx)("button",{onClick:function(){e.dispatch({type:"TOGGLE-SORT-MENU"})},className:"manage_list__btn sort_btn",children:"Sort"})]}),Object(n.jsxs)("div",{className:"manage_list__submenu",children:[Object(n.jsx)("div",{className:"navbar_menu_popup filter_menu"+(t?" opened":""),children:Object(n.jsx)(l,{allBikers:e.bikers,filteredBikers:e.navbar.output.filteredBikers,dispatch:e.dispatch})}),Object(n.jsx)("div",{className:"navbar_menu_popup sort_menu"+(a?" opened":""),children:Object(n.jsx)(d,{sortParameter:e.navbar.output.sortParameter,sortFromBiggest:e.navbar.output.sortFromBiggest,dispatch:e.dispatch})})]})]})})},u=(a(37),a(38),function(e){var t=e.split(":");return 1e3*t[0]*60*60+1e3*t[1]*60+1e3*t[2]}),b=function(e){var t=Math.floor(e/1e3/60/60),a=h(Math.floor((e-1e3*t*60*60)/1e3/60));return"".concat(t,":").concat(a)},h=function(e){return+e<10?"0"+e:e},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=[];return a.push(Math.floor(e)+""),a.push((e.toFixed(t)+"").slice(-t)),a},j=function(e,t){return t.filter((function(t){return e.findIndex((function(e){return e===t.name}))>=0}))},v=a(13),f=function(e){return Object(n.jsx)("img",{src:e.photoSmall,alt:e.name,className:"rides_list_item__member_pic".concat(e.long?" long":"")})},g=function(e){var t=e.members;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)(f,{photoSmall:t[0].photoSmall,name:t[0].name,long:!0})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{photoSmall:t[1].photoSmall,name:t[1].name}),Object(n.jsx)(f,{photoSmall:t[2].photoSmall,name:t[2].name})]})]})},O=function(e){var t=j(e.members,e.allBikers);return 3===t.length?Object(n.jsx)(g,{members:t}):2===t.length?t.map((function(e){return Object(n.jsx)(f,{photoSmall:e.photoSmall,name:e.name,long:!0},e.name)})):t.map((function(e){return Object(n.jsx)(f,{photoSmall:e.photoSmall,name:e.name},e.name)}))},x=function(e){var t=new Date(e.date),a="date"===e.sortParameter?"".concat(h(t.getDate()),".").concat(h(t.getMonth()+1)):"".concat(h(t.getDate()),".").concat(h(t.getMonth()+1),".").concat(t.getFullYear()),s=function(){var t={};return"date"===e.sortParameter||"distance"===e.sortParameter?(t.value=Math.floor(e.distance),t.unit="km"):"speed"===e.sortParameter?(t.value=_(e.speed)[0]+".",t.decimal=_(e.speed)[1],t.unit="km/h"):"time"===e.sortParameter&&(t.decimal=_(e.time/1e3/60/60)[1]>5?5:"",t.value=Math.floor(e.time/1e3/60/60)+(t.decimal>0?".":""),t.unit="h"),t};return Object(n.jsx)("div",{onClick:function(){e.dispatch({type:"TOGGLE-MOBILE-MENU"})},className:"rides_list_item",children:Object(n.jsx)(v.b,{to:e.url,children:Object(n.jsxs)("div",{className:"rides_list_item__container ".concat(e.active?" active":""),children:[Object(n.jsx)("div",{className:"rides_list_item__left",children:Object(n.jsx)("div",{className:"rides_list_item__members",children:Object(n.jsx)(O,{members:e.members,allBikers:e.allBikers})})}),Object(n.jsxs)("div",{className:"rides_list_item__center",children:[Object(n.jsx)("div",{className:"rides_list_item__name",children:e.name}),Object(n.jsx)("div",{className:"rides_list_item__date",children:a})]}),Object(n.jsx)("div",{className:"rides_list_item__right",children:Object(n.jsxs)("div",{className:"rides_list_item__distance",children:[Object(n.jsxs)("div",{className:"rides_list_item__distance_num",children:[s().value,Object(n.jsx)("span",{className:"decimal",children:s().decimal})]}),Object(n.jsx)("div",{className:"rides_list_item__distance_unit",children:s().unit})]})})]})})})},y=function(e){return Object(n.jsx)("div",{className:"header_logo",children:Object(n.jsx)("h1",{children:"Rides history"})})},k=function(e){var t,a=function(e,t,a){switch(a){case"date":var s=new Date(e.startDate),i=t?new Date(t.startDate):null;if(!i)return s.getFullYear();if(i.getFullYear()!==s.getFullYear())return s.getFullYear();break;case"distance":if(!t)return e.distance<50?"<50":e.distance>100?">100":"50-100";if(t.distance<50&&e.distance>50||t.distance>100&&e.distance<100)return"50-100";if(t.distance>50&&e.distance<50)return"<50";if(t.distance<100&&e.distance>100)return">100";break;case"speed":var r=e.distance/e.cleanTime*1e3*60*60,c=t?t.distance/t.cleanTime*1e3*60*60:null;if(!t)return r<15?"<15":r>18?">18":"15-18";if(c<15&&r>15||c>18&&r<18)return"15-18";if(c>15&&r<15)return"<15";if(c<18&&r>18)return">18";break;case"time":var n=e.cleanTime/1e3/60/60,o=t?t.cleanTime/1e3/60/60:null;if(!t)return n<4?"<4":n>7?">7":"4-7";if(o<4&&n>4||o>7&&n<7)return"4-7";if(o>4&&n<4)return"<4";if(o<7&&n>7)return">7";break;default:return null}}(e.currEl,e.prevEl,e.sortParameter),s="date"===(t=e.sortParameter)?null:"distance"===t?"km":"speed"===t?"km/h":"time"===t?"h":void 0;return a?Object(n.jsxs)("div",{className:"rides_list_separator",children:[a," ",Object(n.jsx)("span",{className:"rides_list_separator__unit",children:s})]}):null},N=function(e){return e.state.processedRides.map((function(t,a,s){return Object(n.jsxs)("li",{children:[Object(n.jsx)(k,{currEl:t,prevEl:s[a-1],sortParameter:e.state.navbar.output.sortParameter}),Object(n.jsx)(x,{dispatch:e.dispatch,id:t.id,url:t.url,name:t.name,date:t.startDate,distance:t.distance,speed:t.averageSpeed,time:t.cleanTime,members:t.members,allBikers:e.state.bikers,sortParameter:e.state.navbar.output.sortParameter,active:e.state.activeRide===a},t.id)]},t.url)}))},L=function(e){return Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsx)(y,{}),Object(n.jsx)(p,{bikers:e.state.bikers,navbar:e.state.navbar,dispatch:e.dispatch}),Object(n.jsx)("div",{className:"riders_list_wrapper",children:Object(n.jsx)("ul",{className:"rides_list",children:Object(n.jsx)(N,{state:e.state,dispatch:e.dispatch})})}),Object(n.jsx)("div",{className:"right_border"})]})},M=a(8),T=a(7),I=(a(44),a(45),function(e){return(new Image).src=e.photoLarge,Object(n.jsxs)("div",{className:"ride_member_item",children:[Object(n.jsx)("img",{src:e.photoSmall,alt:"Mr. ".concat(e.name),className:"ride_member_item__img"}),Object(n.jsxs)("div",{className:"ride_member_item__name",children:["Mr. ",e.name]})]})}),w=function(e){var t=e.members.map((function(e){return Object(n.jsx)(I,{name:e.name,photoSmall:e.photoSmall,photoLarge:e.photoLarge},e.id)}));return Object(n.jsxs)("div",{onClick:function(t){if(t.target.classList.contains("ride_member_item__img")){var a=t.target.alt,s=a.slice(4),i={type:"OPEN-MODAL-PHOTO",src:[{url:e.members.find((function(e){return e.name===s})).photoLarge,alt:a}]};e.dispatch(i)}},className:"ride_members",children:[Object(n.jsx)("h3",{children:"Members:"}),Object(n.jsx)("ul",{className:"ride_members_items",children:t})]})},S=(a(46),function(e){var t,a;return e.decimal?(t=_(e.value,e.decimal)[0]+".",a=_(e.value,e.decimal)[1]):(t=e.value,a=""),Object(n.jsxs)("li",{className:"ride_indicators_item",children:[Object(n.jsxs)("div",{className:"ride_indicators_item__value",children:[t,Object(n.jsx)("span",{className:"decimal",children:a}),Object(n.jsx)("span",{className:"ride_indicators_item__unit",children:e.unit?" "+e.unit:""})]}),Object(n.jsx)("div",{className:"ride_indicators_item__name",children:e.name})]})}),G=function(e){var t=new Date(e.ride.startDate),a="".concat(t.getHours(),":").concat(h(t.getMinutes()));return Object(n.jsxs)("div",{className:"ride_indicators",children:[Object(n.jsxs)("ul",{className:"ride_indicators__group group_1",children:[Object(n.jsx)(S,{value:e.ride.distance,decimal:2,unit:"km",name:"Total distance"}),Object(n.jsx)(S,{value:e.ride.climb?e.ride.climb:"n/a",unit:e.ride.climb?"m":"",name:"Climb"}),Object(n.jsx)(S,{value:e.ride.averageSpeed,decimal:1,unit:"km/h",name:"Average speed"})]}),Object(n.jsxs)("ul",{className:"ride_indicators__group group_2",children:[Object(n.jsx)(S,{value:a,name:"Start time"}),Object(n.jsx)(S,{value:b(e.ride.fullTime),name:"Full race time"}),Object(n.jsx)(S,{value:b(e.ride.cleanTime),name:"Net riding time"})]})]})},E=(a(47),function(e){return Object(n.jsx)("li",{className:"photo_item",children:Object(n.jsx)("img",{src:e.url,alt:e.alt,"data-number":e.i,className:"photo_item__photo"})})}),A=function(e){if(0===e.photos.length)return null;var t=e.photos.map((function(e,t){return Object(n.jsx)(E,{url:e.url,alt:e.alt,i:t},e.url)}));return Object(n.jsxs)("div",{className:"ride_gallery",children:[Object(n.jsx)("h3",{children:"Ride gallery"}),Object(n.jsx)("ul",{onClick:function(t){if(t.target.classList.contains("photo_item__photo")){var a={type:"OPEN-MODAL-PHOTO",src:e.photos,number:+t.target.dataset.number};e.dispatch(a)}},className:"ride_gallery_items",children:t})]})},D=a(9),R=function(e){var t=new Date(e.date),a="".concat(h(t.getDate()),".").concat(h(t.getMonth()+1),".").concat(t.getFullYear()),s=Object(D.useSwipeable)({onSwiped:function(t){if(e.isMobile){var a={type:"INFOBAR-HEADER-SWIPED",dir:t.dir};e.dispatch(a)}},preventDefaultTouchmoveEvent:!0});return Object(n.jsxs)("div",Object(T.a)(Object(T.a)({},s),{},{onClick:function(t){if(!t.target.closest("a")&&e.isMobile){e.dispatch({type:"TOOGLE-INFOBAR-COLLAPSE"})}},className:"ride_header",children:[Object(n.jsx)("div",{className:"ride_header__expand_btn"}),Object(n.jsx)("div",{className:"ride_header__name",children:Object(n.jsx)("h2",{children:e.name})}),Object(n.jsxs)("div",{className:"ride_header__subheader",children:[Object(n.jsx)("div",{className:"ride_header_date",children:a}),Object(n.jsxs)("a",{href:e.strava,target:"_blank",rel:"noreferrer",className:"strava_link"+(e.strava?"":" disabled"),children:[Object(n.jsx)("img",{src:"/img/strava.png",alt:"strava",className:"strava_logo"}),Object(n.jsx)("div",{className:"strava_text",children:"This ride in Strava"})]})]})]}))},P=function(e){var t=e.isCollapsed,a=document.querySelector(".infobar"),s=Object(D.useSwipeable)({onSwipeStart:function(t){if(e.isMobile&&!(a.scrollTop>0)&&"Down"===t.dir){e.dispatch({type:"INFOBAR-HEADER-SWIPED",dir:"Down"})}}});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(R,{name:e.ride.name,date:e.ride.startDate,isMobile:e.isMobile,strava:e.ride.stravaLink,dispatch:e.dispatch}),Object(n.jsxs)("div",Object(T.a)(Object(T.a)({},s),{},{className:"infobar"+(t?" collapsed":""),children:[Object(n.jsx)(R,{name:e.ride.name,date:e.ride.startDate,isMobile:e.isMobile,strava:e.ride.stravaLink,dispatch:e.dispatch}),Object(n.jsx)(w,{dispatch:e.dispatch,members:e.members}),Object(n.jsx)(G,{ride:e.ride}),Object(n.jsx)(A,{photos:e.ride.photos,dispatch:e.dispatch})]}))]})},B=function(e){var t=e.state.processedRides[e.state.activeRide],a=t.members,s=Object(M.a)(e.state.bikers),i=j(a,s),r=e.state.layout.isMobile,c=e.state.infobar.isCollapsed;return Object(n.jsx)(P,{ride:t,members:i,dispatch:e.dispatch,isCollapsed:c,isMobile:r})},C=(a(48),function(e){return Object(n.jsx)("button",{onClick:function(t){e.dispatch({type:"TOOGLE-INFOBAR-COLLAPSE"})},className:"collapse_btn"+(e.isCollapsed?" collapsed":""),children:Object(n.jsx)("div",{className:"collapse_arrow"})})}),F=function(e,t){var a={type:"TOGGLE-MOBILE-LAYOUT"};if(window.innerWidth<960){if(e)return;a.mobile=!0,t(a)}else{if(!e)return;a.mobile=!1,t(a)}},U=(a(49),function(e){return Object(n.jsx)("button",{className:"burger_btn"+(e.navbarIsOpen?" active":""),children:Object(n.jsx)("span",{className:"burger_btn__span"})})}),H=function(e){var t=function(){e.dispatch({type:"TOGGLE-MOBILE-MENU"})};return Object(n.jsxs)("div",{className:"mobile_header",children:[Object(n.jsx)("div",{onClick:t,children:Object(n.jsx)(U,{navbarIsOpen:e.navbarIsOpen})}),Object(n.jsx)("div",{onClick:t,children:Object(n.jsx)(y,{})})]})},Y=(a(50),function(e){var t=e.state.layout.mobileNavbarIsOpen,a=Object(D.useSwipeable)({onSwipedLeft:function(t){e.dispatch({type:"TOGGLE-MOBILE-MENU"})}});return Object(n.jsx)("div",Object(T.a)(Object(T.a)({},a),{},{className:"mobile_navbar"+(t?" opened":""),children:Object(n.jsx)(L,{state:e.state,dispatch:e.dispatch})}))}),K=a(22),q=a(23),Z=a(26),W=a(25),X=(a(51),function(e){var t=document.querySelector(".map_loading_spinner");t.style.display="";var a=document.querySelector(".map_container").scrollHeight,s=e.map.replace(/height=\d+/gm,"height=".concat(a)).replace(/.+src="|"><\/script>/gm,""),i=document.querySelector(".map");if(i.innerHTML="",s.match(/https:\/\/api-maps\.yandex\.ru.+scroll=true/gm)){var r=document.createElement("script");r.src=s,r.async=!0,i.appendChild(r)}else{var c=document.createElement("div");c.classList.add("map_error_wrapper"),c.innerHTML="<div>Map for this ride is not ready yet...</div>",i.appendChild(c),t.style.display="none"}}),J=function(e){Object(Z.a)(a,e);var t=Object(W.a)(a);function a(){return Object(K.a)(this,a),t.apply(this,arguments)}return Object(q.a)(a,[{key:"componentDidMount",value:function(){X(this.props)}},{key:"componentDidUpdate",value:function(){X(this.props)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"map_container",children:[Object(n.jsx)("img",{src:"/img/tail-spin.svg",alt:"Loading...",className:"map_loading_spinner"}),Object(n.jsx)("div",{className:"map_left_gradient"}),Object(n.jsx)("div",{className:"map"})]})}}]),a}(i.a.PureComponent),V=J,z=a(2),Q=(a(52),function(e){var t,a;e.isOpened&&(t=e.number,a=e.src.length);var s=function(){var t=document.querySelector(".modal");t.classList.add("fading"),t.ontransitionend=function(){e.dispatch({type:"CLOSE-MODAL-PHOTO"})}},i=function(){var a={type:"OPEN-MODAL-PHOTO",src:e.src,number:t-1};e.dispatch(a)},r=function(){var a={type:"OPEN-MODAL-PHOTO",src:e.src,number:t+1};e.dispatch(a)},c=Object(D.useSwipeable)({onSwiped:function(e){"Up"===e.dir||"Down"===e.dir?s():"Right"===e.dir&&t>0?i():"Left"===e.dir&&t<a-1&&r()},preventDefaultTouchmoveEvent:!0}),o=new Image;if(e.isOpened){var l=document.querySelector(".modal").querySelector(".map_loading_spinner"),m=document.querySelector(".modal_photo_img");o.src=e.src[t].url,o.alt=e.src[t].alt,o.onload=function(){l.classList.add("hide"),m.classList.remove("hide")}}return Object(n.jsxs)("div",Object(T.a)(Object(T.a)({},c),{},{onClick:function(e){e.target.classList.contains("gallery_switch_btn")?e.target.classList.contains("prev_btn")?i():r():s()},className:"modal"+(e.isOpened?" opened":""),children:[Object(n.jsxs)("div",{className:"modal_photo_container",children:[Object(n.jsx)("img",{src:"/img/tail-spin.svg",alt:"Loading...",className:"map_loading_spinner"}),Object(n.jsx)("img",{className:"modal_photo_img hide",src:o.src,alt:o.alt})]}),Object(n.jsx)("button",{className:"gallery_switch_btn prev_btn"+(0===t?" hide":"")}),Object(n.jsx)("button",{className:"gallery_switch_btn next_btn"+(a===t+1?" hide":"")})]}))}),$=function(e,t,a){var s=function(e,t){return-1!==t.map((function(e){return e.url})).findIndex((function(t){return t===e}))}(e,t);if(!s)return"invalid";a({type:"SET-ACTIVE-RIDE",url:e})};var ee=function(e){var t=e.store.getState(),a=e.store.dispatch.bind(e.store),s=e.location.pathname;if("invalid"===$(s,t.rides,a,t.processedRides))return Object(n.jsx)(z.a,{to:t.processedRides[0].url});var i=t.activeRide,r=t.processedRides[i].map;return window.onresize=function(){return F(t.layout.isMobile,a)},t.layout.isMobile?Object(n.jsxs)("div",{className:"App mobile",children:[Object(n.jsx)(H,{navbarIsOpen:t.layout.mobileNavbarIsOpen,dispatch:a}),Object(n.jsxs)("div",{className:"mobile_main",children:[Object(n.jsx)("div",{className:"mobile_map",children:Object(n.jsx)(V,{map:r})}),Object(n.jsx)("div",{className:"mobile_infobar"+(t.infobar.isCollapsed?" collapsed":""),children:Object(n.jsx)(B,{state:t,dispatch:a})}),Object(n.jsx)(Y,{state:t,dispatch:a})]}),Object(n.jsx)(Q,{src:t.layout.modal.src,number:t.layout.modal.number,isOpened:t.layout.modal.isOpened,dispatch:a})]}):Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"rides_menu_container",children:[Object(n.jsx)(L,{state:t,dispatch:a}),Object(n.jsx)(B,{state:t,dispatch:a}),Object(n.jsx)(C,{isCollapsed:t.infobar.isCollapsed,dispatch:a})]}),Object(n.jsx)(V,{map:r}),Object(n.jsx)(Q,{src:t.layout.modal.src,number:t.layout.modal.number,isOpened:t.layout.modal.isOpened,dispatch:a})]})},te=a(24),ae=[{name:"Lavr",id:"Lavr",photoSmall:"/img/bikers/Lavr.jpg",photoLarge:"/img/bikers/LavrLarge.jpg"},{name:"Andy",id:"Andy",photoSmall:"/img/bikers/Andy.jpg",photoLarge:"/img/bikers/AndyLarge.jpg"},{name:"Nick",id:"Nick",photoSmall:"/img/bikers/Nick.jpg",photoLarge:"/img/bikers/NickLarge.jpg"},{name:"Paul",id:"Paul",photoSmall:"/img/bikers//Paul.jpg",photoLarge:"/img/bikers/PaulLarge.jpg"},{name:"Serg",id:"Serg",photoSmall:"/img/bikers/Serg.jpg",photoLarge:"/img/bikers/SergLarge.jpg"}],se=[{name:"Zavidovo - Konakovo - Rogachevo - Klin",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aea221697762f0a4e2c085d935376ee568ae63f758e80d361680811e38059591c&amp;width=100%25&amp;height=562&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:116.61,climb:459,startDate:"2021-10-31",startTime:"10:18",fullTime:"10:51:17",cleanTime:"7:15:08",members:["Lavr","Nick","Andy"],stravaLink:"https://www.strava.com/activities/6193953195",photos:["IMG_20211031_121053.jpg","IMG_20211031_122024.jpg","IMG_20211031_183920.jpg"]},{name:"Konakovo - Solnechnogorsk",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8472ba15980b6a771535d7df0fde7022adbe7e49420c0284e9b5fa633d4e3026&amp;width=100%25&amp;height=507&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:90.61,climb:539,startDate:"2021-08-15",startTime:"12:13",fullTime:"9:12:25",cleanTime:"4:53:44",members:["Lavr","Paul","Nick","Andy"],stravaLink:"https://www.strava.com/activities/5798918869",photos:["PXL_20210815_134724022.jpg","PXL_20210815_135331511.jpg","PXL_20210815_153251515.jpg","PXL_20210815_174156622.jpg"]},{name:"Through Malino's jungle",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A502b1ca7d98ef2d4a8c5a08866594227109af4d9af79bab4d096dbdde10f8025&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:28.37,climb:226,startDate:"2021-07-25",startTime:"14:35",fullTime:"3:51:03",cleanTime:"2:03:50",members:["Lavr","Paul","Nick","Andy"],stravaLink:"https://www.strava.com/activities/5686264901",photos:[]},{name:"To Pyatnitsa through Povarovo",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9fcf7c4415e26a7daf7ce35c57b326981fb8597413161bfb5613dc8ea337f216&amp;width=100%25&amp;height=368&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:40.27,climb:1541,startDate:"2021-06-20",startTime:"14:35",fullTime:"4:04:06",cleanTime:"2:16:37",members:["Lavr","Nick","Andy"],stravaLink:"https://www.strava.com/activities/5503081364",photos:["IMG_20210620_173603.jpg","IMG_20210620_183839.jpg"]},{name:"Dirty journey to Pavlovskaya Sloboda",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A52022963fe77b0760546402b269b136369e1c0eacb2dd1dd4007053064815637&amp;width=100%25&amp;height=484&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:63.97,climb:465,startDate:"2021-05-07",startTime:"11:14",fullTime:"8:34:21",cleanTime:"5:24:26",members:["Lavr","Nick","Paul","Serg"],stravaLink:"https://www.strava.com/activities/5257813977",photos:["IMG_20210507_114057.jpg","IMG_20210507_132101.jpg","IMG_20210507_160611.jpg"]},{name:"Iksha - Pushkino - Dolgoprudniy",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aded685440c9370e219b6f00f0e09f64afa1c0112185739c43f1140ae63332129&amp;width=100%25&amp;height=476&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:87.73,climb:2271,startDate:"2021-05-02",startTime:"09:20",fullTime:"8:16:09",cleanTime:"5:45:04",members:["Lavr","Nick","Serg"],stravaLink:"https://www.strava.com/activities/5231113160",photos:["IMG_20210502_094313.jpg","IMG_20210502_112101.jpg","IMG_20210502_113245.jpg"]},{name:"Ring through Moscow and Krasnogorsk",map:'str<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5ccc2c04f4b0008649f11ff6a5c6342d96fecafed1e74cc76ad27a9afd0234ad&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:150.56,climb:907,startDate:"2020-07-25",startTime:"10:55",fullTime:"12:41:55",cleanTime:"9:27:53",members:["Lavr","Andy"],stravaLink:"https://www.strava.com/activities/3813354535",photos:[]},{name:"Solnechnogorsk - Yakhroma - Zelenograd",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c04de5659479fdd8e90aa8a8f67023b92af302dc94f7f1a753d3366ded6375a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:112.78,climb:1267,startDate:"2020-07-05",startTime:"09:57",fullTime:"11:48:59",cleanTime:"7:13:28",members:["Lavr","Nick","Andy"],stravaLink:"https://www.strava.com/activities/3720632658",photos:["IMG_20200705_114925.jpg","IMG_20200705_130908.jpg","IMG_20200705_175028.jpg","IMG_20200705_183124.jpg","IMG_20200705_193859.jpg"]},{name:"Manikhino - Istra - darky CKAD - Zelenograd",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a8223fd337d72848efb864c9e24f9ad07b2ece458bdb19ec2edbf53305bfffd&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:82,climb:183,startDate:"2020-06-20",startTime:"14:40",fullTime:"8:20:00",cleanTime:"8:20:00",members:["Lavr","Nick","Paul","Andy"],stravaLink:"https://www.strava.com/activities/3645623919",photos:["IMG_20200620_134513.jpg","IMG_20200620_154818.jpg","0DjnlAYpoj0.jpg"]},{name:"Zelenograd - Krasnogorsk - Zvenigorod - Snegiri",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5b4fb76257fafb94aa5825008dcfd156eb5dbfde22c48ac29423f2717280509d&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:118.46,climb:837,startDate:"2020-06-27",startTime:"08:51",fullTime:"10:09:56",cleanTime:"7:27:30",members:["Lavr","Andy"],stravaLink:"https://www.strava.com/activities/4472183662",photos:["IMG_20200627_125001.jpg","IMG_20200627_154630.jpg","IMG_20200627_194504.jpg"]},{name:"Klin - Volokolamsk & Snegiri - Zelenograd",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa02aa953e30dd50fc5cc44d6a096a7872681099e94c24a53d15598034cecf512&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:91.73,climb:843,startDate:"2020-06-13",startTime:"11:03",fullTime:"7:17:26",cleanTime:"4:44:47",members:["Lavr","Nick","Andy"],stravaLink:"https://www.strava.com/activities/4472192681",photos:["IMG_20200613_140625.jpg","IMG_20200613_144021.jpg","IMG_20200613_144505.jpg","IMG_20200613_150446.jpg","IMG_20200613_153716.jpg"]},{name:"From Tver to Konarovo across Saint Places",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acbbbc2ac8be43ac3fbfc8c431eab02bdd78ddad3260b95cdff55751b6055e3fe&amp;width=100%25&amp;height=336&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:79.3,climb:225,startDate:"2019-08-25",startTime:"09:18",fullTime:"5:26:11",cleanTime:"4:36:11",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472204842",photos:["PANO_20190825_130807.vr.jpg","PANO_20190825_153818.vr.jpg","IMG_20190825_102814.jpg","IMG_20190825_111512.jpg","IMG_20190825_123343.jpg","IMG_20190825_134116.jpg","IMG_20190825_140057.jpg","IMG_20190825_141326.jpg"]},{name:"To the back side of Istra",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac3065d6bca86923eaba019c7cbbf147e4893ee7916ffd2916768678ce7e3b2a2&amp;width=100%25&amp;height=435&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:139.65,climb:1141,startDate:"2019-05-18",startTime:"11:36",fullTime:"9:06:00",cleanTime:"7:50:59",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472205448",photos:[]},{name:"Assault attempt of under constructed CKAD",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aee161e8614e5dc0dd48abdbe03433229a435d569625634b34fce55080963ebe4&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:30.29,climb:297,startDate:"2019-04-20",startTime:"14:18",fullTime:"2:11:50",cleanTime:"1:57:31",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472268451",photos:["IMG_20190420_141426.jpg"]},{name:"Hike to Yaroslavl, day 2",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa57658c2eab9be5c2d0e957b80590da7cf282fa40f22463d3ece013d231f6e71&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:48.3,climb:239,startDate:"2018-07-29",startTime:"08:38",fullTime:"3:16:25",cleanTime:"2:45:08",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472290953",photos:["IMG_20180729_110602.jpg","IMG_20180729_115906.jpg","IMG_20180729_121151.jpg"]},{name:"Hike to Yaroslavl, day 1",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75a667968ec739763f4972196875bad59d4a75726481572487ad124dad46dbc8&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:143.54,climb:998,startDate:"2018-07-28",startTime:"10:52",fullTime:"10:09:56",cleanTime:"7:40:36",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472291668",photos:["IMG_20180728_082637.jpg","IMG_20180728_130220_01.jpg","IMG_20180728_145607.jpg","IMG_20180728_170859.jpg","IMG_20180728_193500.jpg","IMG_20180728_194927.jpg"]},{name:"From Zvenigorod to Mozhaysk and Borodino",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad9e8826de5283c7bb13aabc4e9e7075db6c3109530abe31303defe776ffe776e&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:100.59,climb:781,startDate:"2018-07-14",startTime:"09:57",fullTime:"9:09:00",cleanTime:"4:52:07",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472291139",photos:["IMG_20180714_171055.jpg","IMG_20180714_192138.jpg"]},{name:"Autumn trip around Moscow",map:'<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae1726821540dbf35a3103ca223a5e129a1c2364c617f972824a3ee1cc8fbee84&amp;width=100%25&amp;height=382&amp;lang=ru_RU&amp;scroll=true"><\/script>',distance:82.76,climb:594,startDate:"2017-09-23",startTime:"13:27",fullTime:"6:53:15",cleanTime:"5:27:55",members:["Lavr","Nick"],stravaLink:"https://www.strava.com/activities/4472343428",photos:[]},{name:"Journey to the glory of Chester Bennington",map:"string",distance:164.75,climb:0,startDate:"2017-07-22",startTime:"11:15",fullTime:"10:50:00",cleanTime:"10:50:00",members:["Lavr","Nick"],stravaLink:"",photos:["IMG_20170722_082508.jpg","IMG_20170722_110859.jpg","IMG_20170722_143709.jpg","IMG_20170722_174029.jpg","IMG_20170722_202800.jpg","IMG_20170723_004534.jpg"]}],ie={_state:{rides:[],processedRides:[],bikers:[],activeRide:null,infobar:{isCollapsed:!1},navbar:{filterMenuIsOpened:!1,sortMenuIsOpened:!1,output:{sortParameter:"date",sortFromBiggest:!0,filteredBikers:[]}},layout:{modal:{isOpened:!1,src:null,number:null},mobileNavbarIsOpen:!0,isMobile:!1}},_callSubscriber:function(){},subscribe:function(e){this._callSubscriber=e},_processRides:function(){var e=Object(M.a)(this._state.rides),t=this._state.navbar.output,a=function(a){t.sortFromBiggest?e.sort((function(e,t){return e[a]>t[a]?-1:1})):e.sort((function(e,t){return e[a]>t[a]?1:-1}))};switch(t.sortParameter){default:a("startDate");break;case"distance":a("distance");break;case"time":a("cleanTime");break;case"speed":a("averageSpeed")}var s=e.filter((function(e){return function(e,t){var a,s=Object(te.a)(t);try{var i=function(){var t=a.value;if(e.members.find((function(e){return e===t})))return{v:!0}};for(s.s();!(a=s.n()).done;){var r=i();if("object"===typeof r)return r.v}}catch(c){s.e(c)}finally{s.f()}return!1}(e,t.filteredBikers)}));s.length>0?this._state.processedRides=Object(M.a)(s):this._state.processedRides=Object(M.a)(e)},getState:function(){return this._state},dispatch:function(e){switch(e.type){case"SET-ACTIVE-RIDE":var t=this._state.processedRides.findIndex((function(t){return t.url===e.url}));this._state.activeRide=-1!==t?t:0;break;case"TOGGLE-MOBILE-LAYOUT":this._state.layout.isMobile!==e.mobile&&(this._state.layout.isMobile=e.mobile,this._callSubscriber());break;case"TOGGLE-FILTER-MENU":this._state.navbar.filterMenuIsOpened?this._state.navbar.filterMenuIsOpened=!1:(this._state.navbar.sortMenuIsOpened=!1,this._state.navbar.filterMenuIsOpened=!0),this._callSubscriber();break;case"TOGGLE-FILTERED-BIKER":var a=this._state.navbar.output.filteredBikers,s=a.findIndex((function(t){return t===e.bikerId}));-1===s?(a.push(e.bikerId),a.sort((function(e,t){return e>t?1:-1}))):a.splice(s,1),this._processRides(),this._callSubscriber();break;case"TOGGLE-SORT-MENU":this._state.navbar.sortMenuIsOpened?this._state.navbar.sortMenuIsOpened=!1:(this._state.navbar.filterMenuIsOpened=!1,this._state.navbar.sortMenuIsOpened=!0),this._callSubscriber();break;case"TOGGLE-RIDES-SORT":this._state.navbar.output.sortParameter=e.sortParameter,this._state.navbar.output.sortFromBiggest=e.sortFromBiggest,this._state.navbar.sortMenuIsOpened=!1,this._processRides(),this._callSubscriber();break;case"TOOGLE-INFOBAR-COLLAPSE":this._state.infobar.isCollapsed?this._state.infobar.isCollapsed=!1:this._state.infobar.isCollapsed=!0,document.querySelector(".infobar").scrollTop=0,this._callSubscriber();break;case"INFOBAR-HEADER-SWIPED":"Up"===e.dir&&this._state.infobar.isCollapsed&&(this._state.infobar.isCollapsed=!1),"Down"===e.dir&&(this._state.infobar.isCollapsed||(this._state.infobar.isCollapsed=!0)),document.querySelector(".infobar").scrollTop=0,this._callSubscriber();break;case"TOGGLE-MOBILE-MENU":this._state.layout.mobileNavbarIsOpen?this._state.layout.mobileNavbarIsOpen=!1:this._state.layout.mobileNavbarIsOpen=!0,this._callSubscriber();break;case"OPEN-MODAL-PHOTO":this._state.layout.modal.src=e.src,e.number?this._state.layout.modal.number=e.number:this._state.layout.modal.number=0,this._state.layout.modal.isOpened=!0,this._callSubscriber();break;case"CLOSE-MODAL-PHOTO":this._state.layout.modal.src=null,this._state.layout.modal.alt=null,this._state.layout.modal.isOpened=!1,this._callSubscriber();break;default:console.error("unknown action type: ".concat(e.type))}},initState:function(){(function(){var e=this;this._state.bikers.length=0,ae.forEach((function(t){e._state.bikers=[].concat(Object(M.a)(e._state.bikers),[t])})),this._state.bikers.sort((function(e,t){return e.id>t.id?1:-1}))}).bind(this)(),function(){var e=this;this._state.rides.length=0,se.forEach((function(t){var a,s,i={name:t.name,id:"".concat(t.startDate,"T").concat(t.startTime).match(/[0-9]/gi).join(""),url:"/rides/"+t.startDate,map:t.map,startDate:(a=t.startDate,s=t.startTime,Date.parse("".concat(a,"T").concat(s,":00.000+03:00"))),fullTime:u(t.fullTime),cleanTime:u(t.cleanTime),distance:t.distance,climb:t.climb,averageSpeed:+(t.distance/u(t.cleanTime)*1e3*60*60).toFixed(1),members:t.members,stravaLink:t.stravaLink,photos:Object(M.a)(t.photos).map((function(e){return{url:"/img/photos/".concat(e),alt:"Photo from ".concat(t.name," ride")}}))};e._state.rides=[].concat(Object(M.a)(e._state.rides),[i])})),this._state.rides.sort((function(e,t){return e.id>t.id?-1:1})),this._state.processedRides=Object(M.a)(this._state.rides)}.bind(this)(),this._state.activeRide||(this._state.activeRide=0),F(this._state.layout.isMobile,this.dispatch.bind(this)),this._state.layout.isMobile&&(this._state.infobar.isCollapsed=!0)}},re=ie;window.store=ie,window.state=ie.getState(),re.initState();var ce=function(){c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(v.a,{children:Object(n.jsx)(z.b,{path:"/",render:function(e){var t=e.location;return Object(n.jsx)(ee,{location:t,store:re})}})})}),document.getElementById("root"))};ce(),re.subscribe(ce)}},[[53,1,2]]]);
//# sourceMappingURL=main.98ba71c2.chunk.js.map
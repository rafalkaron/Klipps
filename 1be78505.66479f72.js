(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13],{100:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),o=a(81),c=a(83),s=a(80),i=a(84);a(55);function u({to:e,href:t,label:a,prependBaseUrlToHref:l,...o}){const s=Object(i.a)(e),u=Object(i.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?u:t}:{to:s},o),a)}t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{};return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(u,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},121:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(c){}return a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus(),o};e.exports=n,e.exports.default=n},122:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,l,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==l&&".."!==l&&"\u2025"!==l||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(86),o=a(21),c=a(24),s=a(101),i=a(3),u=a(81),m=a(80),p=a(93),d=a(97),h=a(98),b=a(96),y=a(83),g=a(88),f=a(102);var v=e=>l.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),l.a.createElement("g",{fill:"#7a7a7a"},l.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(99),j=a(67),E=a.n(j);const O=(e,t)=>"link"===e.type?Object(m.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>O(e,t)));function N({item:e,onItemClick:t,collapsible:a,activePath:r,...o}){const{items:c,label:s}=e,m=O(e,r),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[d,h]=Object(n.useState)((()=>!!a&&(!m&&e.collapsed))),b=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=b.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{m&&!p&&d&&h(!1)}),[m,p,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>h((e=>!e))),100)}),[y]);return 0===c.length?null:l.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},l.a.createElement("a",Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},o),s),l.a.createElement("ul",{className:"menu__list",ref:b,style:{height:y},onTransitionEnd:()=>{d||f(!1)}},c.map((e=>l.a.createElement(C,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:r})))))}function _({item:e,onItemClick:t,activePath:a,collapsible:n,...r}){const{href:o,label:c}=e,s=O(e,a);return l.a.createElement("li",{className:"menu__list-item",key:c},l.a.createElement(y.a,Object(i.a)({className:Object(u.a)("menu__link",{"menu__link--active":s}),to:o},Object(g.a)(o)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),c))}function C(e){switch(e.item.type){case"category":return l.a.createElement(N,e);case"link":default:return l.a.createElement(_,e)}}var x=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:r,isHidden:o}){const[c,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(m.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(p.a)(),{scrollY:j}=Object(b.a)();Object(d.a)(c);const O=Object(h.a)();return Object(n.useEffect)((()=>{O===h.b.desktop&&s(!1)}),[O]),l.a.createElement("div",{className:Object(u.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:o})},i&&l.a.createElement(f.a,{tabIndex:-1,className:E.a.sidebarLogo}),l.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":c,[E.a.menuWithAnnouncementBar]:!g&&0===j})},l.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!c)}},c?l.a.createElement("span",{className:Object(u.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(k.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(C,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),y&&l.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:r},l.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},S={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},T={Prism:a(22).a,theme:S};function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var w=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},B=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},D=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=P({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=P({},a,{backgroundColor:null}),l};function $(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var M=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?D(e.theme,e.language):void 0;return t.themeDict=a})),I(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=P({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(r.style=o.plain),void 0!==l&&(r.style=void 0!==r.style?P({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),I(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var o=n?{display:"inline-block"}:{},c=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[o].concat(c))}})),I(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,o=P({},$(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(o.style=void 0!==o.style?P({},o.style,l):l),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),o=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,o=0,c=[],s=[c];o>-1;){for(;(r=n[o]++)<l[o];){var i=void 0,u=t[o],m=a[o][r];if("string"==typeof m?(u=o>0?u:["plain"],i=m):(u=B(u,m.type),m.alias&&(u=B(u,m.alias)),i=m.content),"string"==typeof i){var p=i.split(w),d=p.length;c.push({types:u,content:p[0]});for(var h=1;h<d;h++)L(c),s.push(c=[]),c.push({types:u,content:p[h]})}else o++,t.push(u),a.push(i),n.push(0),l.push(i.length)}o--,t.pop(),a.pop(),n.pop(),l.pop()}return L(c),s}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),A=a(121),H=a.n(A),R=a(122),W=a.n(R),z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},F=a(89);var J=()=>{const{prism:e}=Object(m.useThemeConfig)(),{isDarkTheme:t}=Object(F.a)(),a=e.theme||z,n=e.darkTheme||a;return t?n:a},U=a(68),K=a.n(U);const V=/{([\d,-]+)}/,Y=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},q=/(?:title=")(.*)(?:")/;var G=({children:e,className:t,metastring:a})=>{const{prism:r}=Object(m.useThemeConfig)(),[o,c]=Object(n.useState)(!1),[s,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const d=Object(n.useRef)(null);let h=[],b="";const y=J(),g=Array.isArray(e)?e.join(""):e;if(a&&V.test(a)){const e=a.match(V)[1];h=W()(e).filter((e=>e>0))}a&&q.test(a)&&(b=a.match(q)[1]);let f=t&&t.replace(/language-/,"");!f&&r.defaultLanguage&&(f=r.defaultLanguage);let v=g.replace(/\n$/,"");if(0===h.length&&void 0!==f){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}})(f),a=g.replace(/\n$/,"").split("\n");let n;for(let l=0;l<a.length;){const r=l+1,o=a[l].match(t);if(null!==o){switch(o.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(l,1)}else l+=1}h=W()(e),v=a.join("\n")}const k=()=>{H()(v),c(!0),setTimeout((()=>c(!1)),2e3)};return l.a.createElement(M,Object(i.a)({},T,{key:String(s),theme:y,code:v,language:f}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>l.a.createElement(l.a.Fragment,null,b&&l.a.createElement("div",{style:t,className:K.a.codeBlockTitle},b),l.a.createElement("div",{className:K.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(u.a)(e,K.a.codeBlock,"thin-scrollbar",{[K.a.codeBlockWithTitle]:b})},l.a.createElement("div",{className:K.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return h.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(i.a)({key:t},r({token:e,key:t}))))))})))),l.a.createElement("button",{ref:d,type:"button","aria-label":"Copy code to clipboard",className:Object(u.a)(K.a.copyButton),onClick:k},o?"Copied":"Copy")))))},Q=(a(69),a(70)),X=a.n(Q);var Z=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(m.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[X.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},ee=a(71),te=a.n(ee);var ae={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(G,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(y.a,e),pre:e=>l.a.createElement("div",Object(i.a)({className:te.a.mdxCodeBlock},e)),h1:Z("h1"),h2:Z("h2"),h3:Z("h3"),h4:Z("h4"),h5:Z("h5"),h6:Z("h6")},ne=a(103),le=a(85),re=a(72),oe=a.n(re);function ce({currentDocRoute:e,versionMetadata:t,children:a}){var c,i;const{siteConfig:p,isClient:d}=Object(o.default)(),{pluginId:h,permalinkToSidebar:b,docsSidebars:y,version:g}=t,f=b[e.path],k=y[f],[j,E]=Object(n.useState)(!1),[O,N]=Object(n.useState)(!1),_=Object(n.useCallback)((()=>{O&&N(!1),E(!j)}),[O]);return l.a.createElement(s.a,{key:d,searchMetadatas:{version:g,tag:Object(m.docVersionSearchTag)(h,g)}},l.a.createElement("div",{className:oe.a.docPage},k&&l.a.createElement("div",{className:Object(u.a)(oe.a.docSidebarContainer,{[oe.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&j&&N(!0)},role:"complementary"},l.a.createElement(x,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(c=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===c||c,onCollapse:_,isHidden:O}),O&&l.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_},l.a.createElement(v,null))),l.a.createElement("main",{className:oe.a.docMainContainer},l.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",oe.a.docItemWrapper,{[oe.a.docItemWrapperEnhanced]:j})},l.a.createElement(r.a,{components:ae},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,r=t.find((e=>Object(le.matchPath)(n.pathname,e)));return r?l.a.createElement(ce,{currentDocRoute:r,versionMetadata:a},Object(c.a)(t)):l.a.createElement(ne.default,e)}}}]);
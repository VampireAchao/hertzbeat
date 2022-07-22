"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[7292],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),g=r,N=k["".concat(d,".").concat(g)]||k[g]||u[g]||l;return a?n.createElement(N,p(p({ref:e},m),{},{components:a})):n.createElement(N,p({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5298:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(7462),r=(a(7294),a(4137));const l={id:"postgresql",title:"\u76d1\u63a7\uff1aPostgreSQL\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"PostgreSQL\u6570\u636e\u5e93"},p=void 0,i={unversionedId:"help/postgresql",id:"version-v1.0.0/help/postgresql",title:"\u76d1\u63a7\uff1aPostgreSQL\u6570\u636e\u5e93\u76d1\u63a7",description:"\u5bf9PostgreSQL\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301PostgreSQL 10+\u3002",source:"@site/versioned_docs/version-v1.0.0/help/postgresql.md",sourceDirName:"help",slug:"/help/postgresql",permalink:"/en/docs/v1.0.0/help/postgresql",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/help/postgresql.md",tags:[],version:"v1.0.0",frontMatter:{id:"postgresql",title:"\u76d1\u63a7\uff1aPostgreSQL\u6570\u636e\u5e93\u76d1\u63a7",sidebar_label:"PostgreSQL\u6570\u636e\u5e93"},sidebar:"docs",previous:{title:"MariaDB\u6570\u636e\u5e93",permalink:"/en/docs/v1.0.0/help/mariadb"},next:{title:"SqlServer\u6570\u636e\u5e93",permalink:"/en/docs/v1.0.0/help/sqlserver"}},d={},o=[{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1abasic",id:"\u6307\u6807\u96c6\u5408basic",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1astate",id:"\u6307\u6807\u96c6\u5408state",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aactivity",id:"\u6307\u6807\u96c6\u5408activity",level:4}],m={toc:o};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9PostgreSQL\u6570\u636e\u5e93\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7\u3002\u652f\u6301PostgreSQL 10+\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bf9\u5916\u63d0\u4f9b\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a5432\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSQL\u67e5\u8be2\u672a\u54cd\u5e94\u6570\u636e\u65f6\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u540d\u79f0\uff0c\u53ef\u9009\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d\uff0c\u53ef\u9009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801\uff0c\u53ef\u9009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5URL\uff0c\u53ef\u9009\uff0c\u82e5\u914d\u7f6e\uff0c\u5219URL\u91cc\u9762\u7684\u6570\u636e\u5e93\u540d\u79f0\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\u53c2\u6570\u4f1a\u8986\u76d6\u4e0a\u9762\u914d\u7f6e\u7684\u53c2\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a10\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408basic"},"\u6307\u6807\u96c6\u5408\uff1abasic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server_version"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u670d\u52a1\u5668\u7aef\u66b4\u9732\u670d\u52a1\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server_encoding"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u670d\u52a1\u5668\u7aef\u7684\u5b57\u7b26\u96c6\u7f16\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data_directory"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b58\u50a8\u6570\u636e\u76d8\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_connections"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u6700\u5927\u8fde\u63a5\u6570")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408state"},"\u6307\u6807\u96c6\u5408\uff1astate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u540d\u79f0\uff0c\u6216share-object\u4e3a\u5171\u4eab\u5bf9\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conflicts"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7531\u4e8e\u4e0e\u6062\u590d\u51b2\u7a81\u800c\u5728\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u88ab\u53d6\u6d88\u7684\u67e5\u8be2\u7684\u6570\u76ee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadlocks"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u88ab\u68c0\u6d4b\u5230\u7684\u6b7b\u9501\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blks_read"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u88ab\u8bfb\u53d6\u7684\u78c1\u76d8\u5757\u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blks_hit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b21\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u78c1\u76d8\u5757\u88ab\u53d1\u73b0\u5df2\u7ecf\u5728\u7f13\u51b2\u533a\u4e2d\u7684\u6b21\u6570\uff0c\u8fd9\u6837\u4e0d\u9700\u8981\u4e00\u6b21\u8bfb\u53d6\uff08\u8fd9\u53ea\u5305\u62ec PostgreSQL \u7f13\u51b2\u533a\u4e2d\u7684\u547d\u4e2d\uff0c\u800c\u4e0d\u5305\u62ec\u5728\u64cd\u4f5c\u7cfb\u7edf\u6587\u4ef6\u7cfb\u7edf\u7f13\u51b2\u533a\u4e2d\u7684\u547d\u4e2d\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blk_read_time"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u540e\u7aef\u82b1\u8d39\u5728\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\u5757\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blk_write_time"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u540e\u7aef\u82b1\u8d39\u5728\u5199\u6570\u636e\u6587\u4ef6\u5757\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stats_reset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u4e0a\u6b21\u88ab\u91cd\u7f6e\u7684\u65f6\u95f4")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408activity"},"\u6307\u6807\u96c6\u5408\uff1aactivity"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"running"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5ba2\u6237\u7aef\u8fde\u63a5\u6570")))))}u.isMDXComponent=!0}}]);
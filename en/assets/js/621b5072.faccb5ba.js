"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3899],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,k=c["".concat(d,".").concat(s)]||c[s]||u[s]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5388:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const l={id:"oracle",title:"Monitoring\uff1aORACLE database monitoring",sidebar_label:"ORACLE database"},i=void 0,o={unversionedId:"help/oracle",id:"help/oracle",title:"Monitoring\uff1aORACLE database monitoring",description:"Collect and monitor the general performance indicators of ORACLE database.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/oracle.md",sourceDirName:"help",slug:"/help/oracle",permalink:"/en/docs/help/oracle",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/oracle.md",tags:[],version:"current",frontMatter:{id:"oracle",title:"Monitoring\uff1aORACLE database monitoring",sidebar_label:"ORACLE database"},sidebar:"docs",previous:{title:"SqlServer database",permalink:"/en/docs/help/sqlserver"},next:{title:"Linux operating system",permalink:"/en/docs/help/linux"}},d={},p=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection indicator",id:"collection-indicator",level:3},{value:"Indicator set\uff1abasic",id:"indicator-setbasic",level:4},{value:"Indicator set\uff1atablespace",id:"indicator-settablespace",level:4},{value:"Indicator set\uff1auser_connect",id:"indicator-setuser_connect",level:4},{value:"Indicator set\uff1aperformance",id:"indicator-setperformance",level:4}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance indicators of ORACLE database.")),(0,r.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port provided by the database. The default is 1521")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Query timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the timeout time when SQL query does not respond to data, unit: ms, default: 3000ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database name"),(0,r.kt)("td",{parentName:"tr",align:null},"Database instance name, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection user name, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection password, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection URL\uff0coptional\uff0cIf configured, the database name, user name, password and other parameters in the URL will overwrite the above configured parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.kt)("h3",{id:"collection-indicator"},"Collection indicator"),(0,r.kt)("h4",{id:"indicator-setbasic"},"Indicator set\uff1abasic"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database_version"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Database version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database_type"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Database type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Host name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance_name"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Database instance name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startup_time"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Database start time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Database status")))),(0,r.kt)("h4",{id:"indicator-settablespace"},"Indicator set\uff1atablespace"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_id"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"File ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_name"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"File name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tablespace_name"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Table space name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"MB"),(0,r.kt)("td",{parentName:"tr",align:null},"Size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"blocks"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of blocks")))),(0,r.kt)("h4",{id:"indicator-setuser_connect"},"Indicator set\uff1auser_connect"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counts"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Current connection counts")))),(0,r.kt)("h4",{id:"indicator-setperformance"},"Indicator set\uff1aperformance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"qps"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS"),(0,r.kt)("td",{parentName:"tr",align:null},"I/O Requests per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tps"),(0,r.kt)("td",{parentName:"tr",align:null},"TPS"),(0,r.kt)("td",{parentName:"tr",align:null},"User transaction per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mbps"),(0,r.kt)("td",{parentName:"tr",align:null},"MBPS"),(0,r.kt)("td",{parentName:"tr",align:null},"I/O Megabytes per second")))))}u.isMDXComponent=!0}}]);
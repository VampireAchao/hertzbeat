"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4862],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={id:"extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",sidebar_label:"JsonPath Parsing Method"},i=void 0,l={unversionedId:"advanced/extend-http-jsonpath",id:"advanced/extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",description:"After calling the HTTP interface to obtain the response data, use JsonPath script parsing method to parse the response data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-http-jsonpath.md",sourceDirName:"advanced",slug:"/advanced/extend-http-jsonpath",permalink:"/en/docs/advanced/extend-http-jsonpath",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-http-jsonpath.md",tags:[],version:"current",frontMatter:{id:"extend-http-jsonpath",title:"HTTP Protocol JsonPath Parsing Method",sidebar_label:"JsonPath Parsing Method"},sidebar:"docs",previous:{title:"System Default Parsing Method",permalink:"/en/docs/advanced/extend-http-default"},next:{title:"JDBC Protocol Custom Monitoring",permalink:"/en/docs/advanced/extend-jdbc"}},s={},p=[{value:"JsonPath Operator",id:"jsonpath-operator",level:4},{value:"HertzBeat data format specification",id:"hertzbeat-data-format-specification",level:4},{value:"Example",id:"example",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After calling the HTTP interface to obtain the response data, use JsonPath script parsing method to parse the response data.")),(0,a.kt)("p",null,"Note\u26a0\ufe0f The response data is JSON format. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use the JsonPath script to parse the response data into data that conforms to the data structure rules specified by HertzBeat"),"  "),(0,a.kt)("h4",{id:"jsonpath-operator"},"JsonPath Operator"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jsonpath.cn"},"JSONPath online verification"),"     "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"JSONPATH"),(0,a.kt)("th",{parentName:"tr",align:null},"Help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"$"),(0,a.kt)("td",{parentName:"tr",align:null},"Root object or element")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"@"),(0,a.kt)("td",{parentName:"tr",align:null},"Current object or element")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},". or []"),(0,a.kt)("td",{parentName:"tr",align:null},"Child element operator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".."),(0,a.kt)("td",{parentName:"tr",align:null},"Recursively match all child elements")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"Wildcard.  Match all objects or elements")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[]"),(0,a.kt)("td",{parentName:"tr",align:null},"Subscript operator, jsonpath index starts from 0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[,]"),(0,a.kt)("td",{parentName:"tr",align:null},"Join operator, return multiple results as an array. Jsonpath allows the use of aliases")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[start\ud83d\udd1astep]"),(0,a.kt)("td",{parentName:"tr",align:null},"Array slice operator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"?()"),(0,a.kt)("td",{parentName:"tr",align:null},"Filter (script) expression")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"()"),(0,a.kt)("td",{parentName:"tr",align:null},"Script Expression")))),(0,a.kt)("h4",{id:"hertzbeat-data-format-specification"},"HertzBeat data format specification"),(0,a.kt)("p",null,"Single layer format \uff1akey-value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metricName1": "metricValue",\n  "metricName2": "metricValue",\n  "metricName3": "metricValue",\n  "metricName4": "metricValue"\n}\n')),(0,a.kt)("p",null,"Multilayer format\uff1aSet key value in the array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  },\n  {\n    "metricName1": "metricValue",\n    "metricName2": "metricValue",\n    "metricName3": "metricValue",\n    "metricName4": "metricValue"\n  }\n]\n')),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"Query the value information of the custom system, and its exposed interface is  ",(0,a.kt)("inlineCode",{parentName:"p"},"/metrics/person"),". We need ",(0,a.kt)("inlineCode",{parentName:"p"},"type,num")," indicator.",(0,a.kt)("br",{parentName:"p"}),"\n","The raw data returned by the interface is as follows\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName" : "doe",\n  "age"      : 26,\n  "address"  : {\n    "streetAddress": "naist street",\n    "city"         : "Nara",\n    "postalCode"   : "630-0192"\n  },\n  "number": [\n    {\n      "type": "core",\n      "num": 3343\n    },\n    {\n      "type": "home",\n      "num": 4543\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"We use the jsonpath script to parse, and the corresponding script is: ",(0,a.kt)("inlineCode",{parentName:"p"},"$.number[*]")," \uff0cThe parsed data structure is as follows\uff1a  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": "core",\n    "num": 3343\n  },\n  {\n    "type": "home",\n    "num": 4543\n  }\n]\n')),(0,a.kt)("p",null,"This data structure conforms to the data format specification of HertzBeat, and the indicator ",(0,a.kt)("inlineCode",{parentName:"p"},"type,num")," is successfully extracted."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The corresponding monitoring configuration definition file YML can be configured as follows"),"   "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\n# parameter mapping map. These are input parameter variables which can be written to the configuration in form of ^_^host^_^. The system automatically replace variable's value.\n# type means parameter type: 0-number number, 1-string cleartext string, 2-secret encrypted string\n# required parameters - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n# indicator group list\nmetrics:\n# The first monitoring indicator group person\n# Note\uff1athe built-in monitoring indicators have (responseTime - response time)\n  - name: cpu\n    # The smaller indicator group scheduling priority(0-127), the higher the priority. After completion of the high priority indicator group collection,the low priority indicator group will then be scheduled. Indicator groups with the same priority  will be scheduled in parallel.\n    # Indicator group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # Specific monitoring indicators in the indicator group\n    fields:\n      # indicator information include   field: name   type: field type(0-number: number, 1-string: string)   nstance: primary key of instance or not   unit: indicator unit\n      - field: type\n        type: 1\n        instance: true\n      - field: num\n        type: 0\n# protocol for monitoring and collection eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# Specific collection configuration when the protocol is HTTP protocol\n    http:\n      # host: ipv4 ipv6 domain name\n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      # url request interface path\n      url: /metrics/person\n      # request mode GET POST PUT DELETE PATCH\n      method: GET\n      # enable ssl/tls or not, that is to say, HTTP or HTTPS. The default is false\n      ssl: false\n      # parsing method for reponse data: default-system rules, jsonPath-jsonPath script, website-website availability indicator monitoring\n      # jsonPath parsing is used here\n      parseType: $.number[*] \n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[8855],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(4137));const r={id:"extend-point",title:"Custom Monitoring",sidebar_label:"Custom Monitoring"},a=void 0,l={unversionedId:"advanced/extend-point",id:"advanced/extend-point",title:"Custom Monitoring",description:"HertzBeat has custom monitoring ability. You only need to configure two YML file to fit a custom monitoring type.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-point.md",sourceDirName:"advanced",slug:"/advanced/extend-point",permalink:"/en/docs/advanced/extend-point",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/advanced/extend-point.md",tags:[],version:"current",frontMatter:{id:"extend-point",title:"Custom Monitoring",sidebar_label:"Custom Monitoring"},sidebar:"docs",previous:{title:"H2 Database Switch to MYSQL",permalink:"/en/docs/start/mysql-init"},next:{title:"HTTP Protocol Custom Monitoring",permalink:"/en/docs/advanced/extend-http"}},s={},p=[{value:"Custom Steps",id:"custom-steps",level:3},{value:"Monitoring configuration definition file",id:"monitoring-configuration-definition-file",level:3},{value:"Monitoring parameter definition file",id:"monitoring-parameter-definition-file",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HertzBeat has custom monitoring ability. You only need to configure two YML file to fit a custom monitoring type.",(0,o.kt)("br",{parentName:"p"}),"\n","Custom monitoring currently supports ",(0,o.kt)("a",{parentName:"p",href:"extend-http"},"HTTP protocol"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"extend-jdbc"},"JDBC protocol"),"(mysql,mariadb,postgresql..)\uff0c",(0,o.kt)("a",{parentName:"p",href:"extend-ssh"},"SSH protocol"),".And it will support more general protocols in the future(ssh telnet wmi snmp).\u3002        ")),(0,o.kt)("h3",{id:"custom-steps"},"Custom Steps"),(0,o.kt)("p",null,"In order to configure a custom monitoring type, you need to add and configure two YML file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Monitoring configuration definition file named after monitoring type - eg\uff1aexample.yml should be in the installation directory /hertzbeat/define/app/"),(0,o.kt)("li",{parentName:"ol"},"Monitoring parameter definition file named after monitoring type - eg\uff1aexample.yml should be in the installation directory /hertzbeat/define/param/"),(0,o.kt)("li",{parentName:"ol"},"Restart hertzbeat system, we successfully fit a new custom monitoring type.  ")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Configuration usages of the two files are detailed below."),(0,o.kt)("h3",{id:"monitoring-configuration-definition-file"},"Monitoring configuration definition file"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Monitoring configuration definition file is used to define ",(0,o.kt)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.  ")),(0,o.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example which use the HTTP protocol to collect data.",(0,o.kt)("br",{parentName:"p"}),"\n","The file name: example.yml in /define/app/example.yml   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example\nname:\n  zh-CN: \u6a21\u62df\u5e94\u7528\u7c7b\u578b\n  en-US: EXAMPLE APP\n# parameter mapping map. These are input parameter variables which can be written to the configuration in form of ^_^host^_^. The system automatically replace variable's value.\n# type means parameter type: 0-number number, 1-string cleartext string, 2-secret encrypted string\n# required parameters - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n# indicator group list\nmetrics:\n# The first monitoring indicator group cpu\n# Note\uff1a: the built-in monitoring indicators have (responseTime - response time)\n  - name: cpu\n    # The smaller indicator group scheduling priority(0-127), the higher the priority. After completion of the high priority indicator group collection,the low priority indicator group will then be scheduled. Indicator groups with the same priority  will be scheduled in parallel.\n    # Indicator group with a priority of 0 is an availability group which will be scheduled first. If the collection succeeds, the  scheduling will continue otherwise interrupt scheduling.\n    priority: 0\n    # Specific monitoring indicators in the indicator group\n    fields:\n      # indicator information include field: name   type: field type(0-number: number, 1-string: string)   instance: primary key of instance or not   unit: indicator unit\n      - field: hostname\n        type: 1\n        instance: true\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: cores\n        type: 0\n      - field: waitTime\n        type: 0\n        unit: s\n# (optional)Monitoring indicator alias mapping to the indicator name above. The field used to collect interface data is not the final indicator name directly. This alias is required for mapping conversion.\n    aliasFields:\n      - hostname\n      - core1\n      - core2\n      - usage\n      - allTime\n      - runningTime\n# (optional)The indicator calculation expression works with the above alias to calculate the final required indicator value.\n# eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - hostname=hostname\n      - cores=core1+core2\n      - usage=usage\n      - waitTime=allTime-runningTime\n# protocol for monitoring and collection  eg: sql, ssh, http, telnet, wmi, snmp, sdk\n    protocol: http\n# Specific collection configuration when the protocol is HTTP protocol \n    http:\n      # host: ipv4 ipv6 domain name \n      host: ^_^host^_^\n      # port\n      port: ^_^port^_^\n      # url request interface path \n      url: /metrics/cpu\n      # request mode  GET POST PUT DELETE PATCH\n      method: GET\n      # enable ssl/tls or not, tthat is to say, HTTP or HTTPS. The default is false\n      ssl: false\n      # request header content \n      headers:\n        apiVersion: v1\n      # request parameter content \n      params:\n        param1: param1\n        param2: param2\n      # authorization \n      authorization:\n        # authorization method : Basic Auth, Digest Auth, Bearer Token\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      # parsing method for reponse data: default-system rules, jsonPath-jsonPath script, website-website availability indicator monitoring \n      # todo xmlPath-xmlPath script,prometheus-Prometheus data rules\n      parseType: jsonPath\n      parseScript: '$'\n\n  - name: memory\n    priority: 1\n    fields:\n      - field: hostname\n        type: 1\n        instance: true\n      - field: total\n        type: 0\n        unit: kb\n      - field: usage\n        type: 0\n        unit: '%'\n      - field: speed\n        type: 0\n    protocol: http\n    http:\n      host: ^_^host^_^\n      port: ^_^port^_^\n      url: /metrics/memory\n      method: GET\n      headers:\n        apiVersion: v1\n      params:\n        param1: param1\n        param2: param2\n      authorization:\n        type: Basic Auth\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n      parseType: default\n")),(0,o.kt)("h3",{id:"monitoring-parameter-definition-file"},"Monitoring parameter definition file"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Monitoring parameter definition file is used to define ",(0,o.kt)("em",{parentName:"p"},"required input parameter field structure definition (Front-end page render input parameter box according to structure)"),".   ")),(0,o.kt)("p",null,"eg\uff1aDefine a custom monitoring type named example which use the HTTP protocol to collect data.",(0,o.kt)("br",{parentName:"p"}),"\n","The file name: example.yml in /define/param/example.yml   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Monitoring application type name(consistent with the file name) eg: linux windows tomcat mysql aws...\napp: example\n# required parameters - host(ipv4, ipv6, domain name)\nparam:\n    # field-field name identifier \n  - field: host\n    # name-parameter field display name \n    name: \n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-field type, style(most mappings are input label type attribute)\n    type: host\n    # required or not  true-required  false-optional\n    required: true\n  - field: port\n    name: \n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    type: number\n    # When type is number, range is used to represent the range.\n    range: '[0,65535]'\n    required: true\n    # port default\n    defaultValue: 80\n    # Prompt information of parameter input box \n    placeholder: 'Please enter the port'\n  - field: username\n    name: \n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    # When type is text, use limit to indicate the string limit size\n    limit: 20\n    required: false\n  - field: password\n    name: \n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n  - field: ssl\n    name: \n      zh-CN: \u542f\u52a8SSL\n      en-US: Enable SSL\n    # When type is boolean, front end uses switch to show the switch\n    type: boolean\n    required: false\n  - field: method\n    name: \n      zh-CN: \u8bf7\u6c42\u65b9\u5f0f\n      en-US: Method\n    type: radio\n    required: true\n    # When type is radio or checkbox, option indicates the list of selectable values {name1:value1,name2:value2}\n    options:\n      - label: GET request\n        value: GET\n      - label: POST request\n        value: POST\n      - label: PUT request\n        value: PUT\n      - label: DELETE request\n        value: DELETE\n")))}m.isMDXComponent=!0}}]);
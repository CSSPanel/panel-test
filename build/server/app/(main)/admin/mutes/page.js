(()=>{var e={};e.id=4714,e.ids=[4714],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},15673:e=>{"use strict";e.exports=require("node:events")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},39512:e=>{"use strict";e.exports=require("timers")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},39307:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>l}),s(83840),s(86242),s(8678),s(89638);var r=s(32845),i=s(64502),n=s(95251),a=s.n(n),o=s(5074),u={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>o[e]);s.d(t,u);let l=["",{children:["(main)",{children:["admin",{children:["mutes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,83840)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\mutes\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,86242)),"C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,8678,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,89638)),"C:\\Projects\\CSS-Panel\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,8678,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Projects\\CSS-Panel\\app\\(main)\\admin\\mutes\\page.tsx"],p="/(main)/admin/mutes/page",d={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(main)/admin/mutes/page",pathname:"/admin/mutes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},99234:(e,t,s)=>{Promise.resolve().then(s.bind(s,22649)),Promise.resolve().then(s.bind(s,94823))},58598:(e,t,s)=>{Promise.resolve().then(s.bind(s,27387))},22649:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(82478),i=s(54316),n=s(63397),a=s(63107),o=s(97091);let u=({children:e,flags:t})=>{let{admin:s,isLoading:u}=(0,o.ZP)(),l=(0,n.useRouter)();return(0,a.useEffect)(()=>{if(!u&&(!s||t.length>0&&!t.some(e=>s.flags?.includes(e))))return l.push("/")},[s,u,l,t]),u?r.jsx(i.c,{}):s?r.jsx(r.Fragment,{children:e}):r.jsx(r.Fragment,{children:"No Access"})}},94823:(e,t,s)=>{"use strict";s.d(t,{default:()=>u,r:()=>l});var r=s(82478),i=s(63397),n=s(20982),a=s(73395),o=s(97091);let u=()=>{let e=(0,i.usePathname)(),t=(0,i.useRouter)(),{admin:s}=(0,o.ZP)(),u=s?.flags||[],c=l.filter(e=>e.permissions.some(e=>u.includes(e)));return r.jsx(n.n,{"aria-label":"Admin-tabs",selectedKey:e,onSelectionChange:e=>t.push(e),items:c,children:e=>r.jsx(a.r,{title:e.title},e.path)})},l=[{path:"/admin",title:"Statistics",permissions:["@web/root","@web/logs","@css/root","@web/stats"]},{path:"/admin/modules",title:"Modules",permissions:["@web/root","@css/root"]},{path:"/admin/admins",title:"Manage Admins",permissions:["@web/root","@css/root","@web/admins"]},{path:"/admin/servers",title:"Manage Servers",permissions:["@web/root","@css/root","@web/servers","@web/rcon"]},{path:"/admin/bans",title:"Manage Bans",permissions:["@web/root","@css/root","@web/bans"]},{path:"/admin/mutes",title:"Manage Mutes",permissions:["@web/root","@css/root","@web/mutes"]},{path:"/admin/logs",title:"Logs",permissions:["@web/root","@css/root","@web/logs"]},{path:"/admin/settings",title:"Panel Settings",permissions:["@web/root","@css/root"]}]},27387:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(82478),i=s(63397),n=s(94823),a=s(22649),o=s(45709);let u=()=>{let e=(0,i.usePathname)(),t=n.r.find(t=>t.path===e);return r.jsx(a.default,{flags:t?.permissions||[],children:r.jsx(o.default,{type:"MANAGE"})})}},86242:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>m});var r=s(40119),i=s(46589);let n=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx`),{__esModule:a,$$typeof:o}=n;n.default;let u=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx#default`);(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\Tabs.tsx#ADMIN_TABS`);let l=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\AdminCheck.tsx`),{__esModule:c,$$typeof:p}=l;l.default;let d=(0,i.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\UI\AdminCheck.tsx#default`),m={title:"Admin Panel"},x=({children:e})=>(0,r.jsxs)(d,{flags:["@css/rcon","@css/root","@web/admingroups","@web/admins","@web/bans","@web/logs","@web/mutes","@web/root","@web/servers","@web/stats","@web/rcon"],children:[r.jsx(u,{}),e]})},83840:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});var r=s(46589);let i=(0,r.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\mutes\page.tsx`),{__esModule:n,$$typeof:a}=i;i.default;let o=(0,r.createProxy)(String.raw`C:\Projects\CSS-Panel\app\(main)\admin\mutes\page.tsx#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[1368,5660,7306,6992,3967,1191,210,7160,982,8231,4448,5709],()=>s(39307));module.exports=r})();
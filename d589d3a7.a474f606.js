(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=(n(0),n(214));const i={title:"Getting Started"},o={id:"getting-started",title:"Getting Started",description:"This is a quick introduction into project setup and our CLI. For a TypeScript quick start please read//www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html",source:"@site/docs/getting-started.md",permalink:"/docs/getting-started",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/getting-started.md",sidebar:"docs",next:{title:"Configuration",permalink:"/docs/configuration"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Project setup",id:"project-setup",children:[]},{value:"Building your project",id:"building-your-project",children:[]},{value:"Declarations",id:"declarations",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a quick introduction into project setup and our CLI. For a TypeScript quick start please read: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"}),"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"TypeScriptToLua is built using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," and distributed via ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),". To install it, you need to create a ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file in the root of your project, containing at least ",Object(r.b)("inlineCode",{parentName:"p"},"{}"),". Then you can use this command to add the latest version of TypeScriptToLua to your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install -D typescript-to-lua\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Installing ",Object(r.b)("inlineCode",{parentName:"p"},"tstl")," locally is recommended to keep your build reproducible and prevent version conflicts between projects. However, it is also possible to install it globally with ",Object(r.b)("inlineCode",{parentName:"p"},"npm install --global typescript-to-lua")," or run it without install using ",Object(r.b)("inlineCode",{parentName:"p"},"npx typescript-to-lua"),"."))),Object(r.b)("h2",{id:"project-setup"},"Project setup"),Object(r.b)("p",null,"TypeScriptToLua shares the configuration format with vanilla TypeScript. This file is called ",Object(r.b)("inlineCode",{parentName:"p"},"tsconfig.json")," and should be located in your project's root."),Object(r.b)("p",null,"Basic recommended configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"}),'{\n  "compilerOptions": {\n    "target": "esnext",\n    "lib": ["esnext"],\n    "moduleResolution": "node",\n    "types": [],\n    "strict": true\n  },\n  "tstl": {\n    "luaTarget": "JIT"\n  }\n}\n')),Object(r.b)("p",null,"Check out ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration"}),"Configuration")," page for more information."),Object(r.b)("h2",{id:"building-your-project"},"Building your project"),Object(r.b)("p",null,"Our command line interface is called ",Object(r.b)("inlineCode",{parentName:"p"},"tstl")," and it works almost exactly as TypeScript's ",Object(r.b)("inlineCode",{parentName:"p"},"tsc"),"."),Object(r.b)("p",null,"Since ",Object(r.b)("inlineCode",{parentName:"p"},"tstl")," is installed locally to your project, you cannot run it as a bare command in your terminal, so it's recommended to use it with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/misc/scripts"}),"npm scripts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"title=package.json",title:"package.json"}),'{\n  "private": true,\n  "scripts": {\n    "build": "tstl",\n    "dev": "tstl --watch"\n  },\n  "devDependencies": {\n    "typescript-to-lua": "..."\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Build\nnpm run build\n\n# Build and watch for changes\nnpm run dev\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For testing purposes you also can run ",Object(r.b)("inlineCode",{parentName:"p"},"tstl")," directly from your terminal with ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/.bin/tstl")," or ",Object(r.b)("inlineCode",{parentName:"p"},"npx --no-install tstl"),"."))),Object(r.b)("h2",{id:"declarations"},"Declarations"),Object(r.b)("p",null,"The real power of this transpiler is usage together with good declarations for the Lua API provided. Some examples of Lua interface declarations can be found here:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/TypeScriptToLua/lua-types"}),"Lua Standard Library")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ModDota/API/tree/master/declarations/server"}),"Dota 2 Custom Games")," (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ModDota/TypeScriptAddonTemplate"}),"template"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dasannikov/DefoldTypeScript/blob/master/defold.d.ts"}),"Defold Game Engine Scripting")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/hazzard993/love-typescript-definitions"}),"L\xd6VE 2D Game Development")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wartoshika/wow-declarations"}),"World of Warcraft - Addon Development")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/wartoshika/wow-classic-declarations"}),"World of Warcraft Classic - Addon Development"))))}p.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
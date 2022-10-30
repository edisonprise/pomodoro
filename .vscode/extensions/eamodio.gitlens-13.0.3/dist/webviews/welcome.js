(()=>{"use strict";var ke={};class E{constructor(t,e=!1){this.method=t,this.overwriteable=e}}class T extends E{}class I extends E{}function B(i,t,e){i.method===t.method&&e(t.params,i)}const ee=new T("webview/ready"),Pe=new T("command/execute"),te=new T("configuration/preview"),oe=new T("configuration/update"),U=new I("configuration/didChange"),ne=new I("configuration/didPreview"),L=new I("webview/didOpenAnchor"),F=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,O=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,re=null;let k;const w=new Map;let v,P,b;function se(i){typeof i=="string"?i==="system"?v=void 0:v=[i]:v=i??void 0,P=void 0,b=void 0,w.clear(),k=void 0}function we(i,t){const e=new Date(i.getTime());for(const[o,n]of Object.entries(t))if(!!n)switch(o){case"years":e.setFullYear(e.getFullYear()+n);break;case"months":e.setMonth(e.getMonth()+n);break;case"days":e.setDate(e.getDate()+n);break;case"hours":e.setHours(e.getHours()+n);break;case"minutes":e.setMinutes(e.getMinutes()+n);break;case"seconds":e.setSeconds(e.getSeconds()+n);break}return e}function _e(i,t){const e=(typeof i=="number"?i:i.getTime())-new Date().getTime();for(const[o,n,a,s]of re){const l=Math.abs(e);if(l>=n||n===1e3)return t?(k==null&&(b!=null?k=b.resolvedOptions().locale:P!=null?k=P.resolvedOptions().locale:(b=new Intl.RelativeTimeFormat(v,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),k=b.resolvedOptions().locale)),k==="en"||k?.startsWith("en-")?`${Math.round(l/a)}${s}`:(b==null&&(b=new Intl.RelativeTimeFormat(v,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),b.format(Math.round(e/a),o))):(P==null&&(P=new Intl.RelativeTimeFormat(v,{localeMatcher:"best fit",numeric:"auto",style:"long"})),P.format(Math.round(e/a),o))}return""}function j(i,t,e,o=!0){t=t??void 0;const n=`${e??""}:${t}`;let a=w.get(n);if(a==null){const r=ie(t);let c;e==null?c=v:e==="system"?c=void 0:c=[e],a=new Intl.DateTimeFormat(c,r),o&&w.set(n,a)}if(t==null||O.test(t))return a.format(i);function s(r){const c=`${e??""}:time:${r}`;let u=w.get(c);if(u==null){const f={localeMatcher:"best fit",timeStyle:r};let m;e==null?m=v:e==="system"?m=void 0:m=[e],u=new Intl.DateTimeFormat(m,f),o&&w.set(c,u)}return u}const l=a.formatToParts(i);return t.replace(F,(r,c,u,f,m,xe,$e,Ve,Ce,Ie,Be,Me,De,Ne,J)=>{if(c!=null)return c.substring(1,c.length-1);for(const K in J){const A=J[K];if(A==null)continue;const S=l.find(X=>X.type===K);return A==="Do"&&S?.type==="day"?ae(Number(S.value)):A==="a"&&S?.type==="dayPeriod"?` ${(s("short").formatToParts(i).find(be=>be.type==="dayPeriod")??S)?.value??""}`:S?.value??""}return""})}function Se(i,t,e){const o=(typeof t=="number"?t:t.getTime())-(typeof i=="number"?i:i.getTime());switch(e){case"days":return Math.floor(o/(1e3*60*60*24));case"hours":return Math.floor(o/(1e3*60*60));case"minutes":return Math.floor(o/(1e3*60));case"seconds":return Math.floor(o/1e3);default:return o}}function ie(i){if(i==null)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=O.exec(i);if(t?.groups!=null){const{dateStyle:o,timeStyle:n}=t.groups;return{localeMatcher:"best fit",dateStyle:o||"full",timeStyle:n||void 0}}const e={localeMatcher:"best fit"};for(const{groups:o}of i.matchAll(F))if(o!=null)for(const n in o){const a=o[n];if(a!=null)switch(n){case"year":e.year=a.length===4?"numeric":"2-digit";break;case"month":switch(a.length){case 4:e.month="long";break;case 3:e.month="short";break;case 2:e.month="2-digit";break;case 1:e.month="numeric";break}break;case"day":a==="DD"?e.day="2-digit":e.day="numeric";break;case"weekday":switch(a.length){case 4:e.weekday="long";break;case 3:e.weekday="short";break;case 2:e.weekday="narrow";break}break;case"hour":e.hour=a.length===2?"2-digit":"numeric",e.hour12=a==="hh"||a==="h";break;case"minute":e.minute=a.length===2?"2-digit":"numeric";break;case"second":e.second=a.length===2?"2-digit":"numeric";break;case"fractionalSecond":e.fractionalSecondDigits=3;break;case"dayPeriod":e.dayPeriod="narrow",e.hour12=!0,e.hourCycle="h12";break;case"timeZoneName":e.timeZoneName=a.length===2?"long":"short";break}}return e}const M=["th","st","nd","rd"];function ae(i){const t=i%100;return`${i}${M[(t-20)%10]??M[t]??M[0]}`}var y;(i=>{function t(n,a,s,l){let r=!1;if(typeof n=="string"){const u=function(f){const m=f?.target;!m?.matches(n)||s(f,m)};return document.addEventListener(a,u,l??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(a,u,l??!0))}}}const c=function(u){s(u,this)};return n.addEventListener(a,c,l??!1),{dispose:()=>{r||(r=!0,n.removeEventListener(a,c,l??!1))}}}i.on=t;function e(n,a,s){const l=document.getElementById(n);if(a.replaceChildren(l?.content.cloneNode(!0)),a.className=l.className,s?.visible!=null){const r=a.querySelectorAll("[data-visible]");for(const c of r){const u=c.dataset.visible;!u||(s.visible[u]?c.style.display="initial":c.style.display="none")}}if(s?.bindings!=null){const r=a.querySelectorAll("[data-bind]");for(const c of r){const u=c.dataset.bind;if(!u)continue;const f=s.bindings[u];f!=null&&(c.textContent=String(f))}}}i.insertTemplate=e;function o(n){n.replaceChildren(),n.className=""}i.resetSlot=o})(y||(y={}));const le=/^(?:(#?)([0-9a-f]{3}|[0-9a-f]{6})|((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\))$/i;function D(i,t){const e=i+t,o=t<0?e<0?0:e:e>255?255:e;return Math.round(o)}function g(i,t){return p(i,-t)}function p(i,t){const e=$(i);if(e==null)return i;const[o,n,a,s]=e,l=255*t/100;return`rgba(${D(o,l)}, ${D(n,l)}, ${D(a,l)}, ${s})`}function h(i,t){const e=$(i);if(e==null)return i;const[o,n,a,s]=e;return`rgba(${o}, ${n}, ${a}, ${s*(t/100)})`}function Te(i,t,e){const o=$(i),n=$(t);if(o==null||n==null)return i;const[a,s,l,r]=o,[c,u,f,m]=n;return`rgba(${x(a,c,e)}, ${x(s,u,e)}, ${x(l,f,e)}, ${x(r,m,e)})`}const x=(i,t,e)=>i+(t-i)*e/100;function $(i){i=i.trim();const t=le.exec(i);if(t==null)return null;if(t[1]==="#"){const e=t[2];switch(e.length){case 3:return[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),1];case 6:return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16),1]}return null}switch(t[3]){case"rgb":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),1];case"rgba":return[parseInt(t[4],10),parseInt(t[5],10),parseInt(t[6],10),parseFloat(t[7])];default:return null}}const R=class{constructor(){this._disposed=!1}get event(){return this._event==null&&(this._event=(i,t,e)=>{this.listeners==null&&(this.listeners=new z);const o=this.listeners.push(t==null?i:[i,t]),n={dispose:()=>{n.dispose=R._noop,this._disposed||o()}};return Array.isArray(e)&&e.push(n),n}),this._event}fire(i){if(this.listeners!=null){this._deliveryQueue==null&&(this._deliveryQueue=new z);for(let t=this.listeners.iterator(),e=t.next();!e.done;e=t.next())this._deliveryQueue.push([e.value,i]);for(;this._deliveryQueue.size>0;){const[t,e]=this._deliveryQueue.shift();try{typeof t=="function"?t(e):t[0].call(t[1],e)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let q=R;q._noop=function(){};const ce={done:!0,value:void 0},V=class{constructor(i){this.element=i,this.next=V.Undefined,this.prev=V.Undefined}};let d=V;d.Undefined=new V(void 0);class z{constructor(){this._first=d.Undefined,this._last=d.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===d.Undefined}clear(){this._first=d.Undefined,this._last=d.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){const o=new d(t);if(this._first===d.Undefined)this._first=o,this._last=o;else if(e){const a=this._last;this._last=o,o.prev=a,a.next=o}else{const a=this._first;this._first=o,o.next=a,a.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===d.Undefined)return;const t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===d.Undefined)return;const t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==d.Undefined&&t.next!==d.Undefined){const e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===d.Undefined&&t.next===d.Undefined?(this._first=d.Undefined,this._last=d.Undefined):t.next===d.Undefined?(this._last=this._last.prev,this._last.next=d.Undefined):t.prev===d.Undefined&&(this._first=this._first.next,this._first.prev=d.Undefined);this._size-=1}iterator(){let t,e=this._first;return{next:function(){return e===d.Undefined?ce:(t==null?t={done:!1,value:e.element}:t.value=e.element,e=e.next,t)}}}toArray(){const t=[];for(let e=this._first;e!==d.Undefined;e=e.next)t.push(e.element);return t}}const W=new q,ue=W.event;function de(){const i=e=>{const o=document.body,n=window.getComputedStyle(o),a=o.classList.contains("vscode-light")||o.classList.contains("vscode-high-contrast-light"),s=o.style;s.setProperty("--font-family",n.getPropertyValue("--vscode-font-family").trim()),s.setProperty("--font-size",n.getPropertyValue("--vscode-font-size").trim()),s.setProperty("--font-weight",n.getPropertyValue("--vscode-font-weight").trim()),s.setProperty("--editor-font-family",n.getPropertyValue("--vscode-editor-font-family").trim()),s.setProperty("--editor-font-size",n.getPropertyValue("--vscode-editor-font-size").trim()),s.setProperty("--editor-font-weight",n.getPropertyValue("--vscode-editor-font-weight").trim());const l=n.getPropertyValue("--vscode-editor-background").trim();let r=l;s.setProperty("--color-background",r),s.setProperty("--color-background--lighten-05",p(r,5)),s.setProperty("--color-background--darken-05",g(r,5)),s.setProperty("--color-background--lighten-075",p(r,7.5)),s.setProperty("--color-background--darken-075",g(r,7.5)),s.setProperty("--color-background--lighten-10",p(r,10)),s.setProperty("--color-background--darken-10",g(r,10)),s.setProperty("--color-background--lighten-15",p(r,15)),s.setProperty("--color-background--darken-15",g(r,15)),s.setProperty("--color-background--lighten-30",p(r,30)),s.setProperty("--color-background--darken-30",g(r,30)),s.setProperty("--color-background--lighten-50",p(r,50)),s.setProperty("--color-background--darken-50",g(r,50)),r=n.getPropertyValue("--vscode-button-background").trim(),s.setProperty("--color-button-background",r),s.setProperty("--color-button-background--darken-30",g(r,30)),s.setProperty("--color-highlight",r),s.setProperty("--color-highlight--75",h(r,75)),s.setProperty("--color-highlight--50",h(r,50)),s.setProperty("--color-highlight--25",h(r,25)),r=n.getPropertyValue("--vscode-button-secondaryBackground").trim(),s.setProperty("--color-button-secondary-background",r),s.setProperty("--color-button-secondary-background--darken-30",g(r,30)),r=n.getPropertyValue("--vscode-button-foreground").trim(),s.setProperty("--color-button-foreground",r);let c=n.getPropertyValue("--vscode-editor-foreground").trim();c||(c=n.getPropertyValue("--vscode-foreground").trim()),s.setProperty("--color-foreground",c),s.setProperty("--color-foreground--85",h(c,85)),s.setProperty("--color-foreground--75",h(c,75)),s.setProperty("--color-foreground--65",h(c,65)),s.setProperty("--color-foreground--50",h(c,50)),r=n.getPropertyValue("--vscode-focusBorder").trim(),s.setProperty("--color-focus-border",r),r=n.getPropertyValue("--vscode-textLink-foreground").trim(),s.setProperty("--color-link-foreground",r),s.setProperty("--color-link-foreground--darken-20",g(r,20)),s.setProperty("--color-link-foreground--lighten-20",p(r,20)),r=n.getPropertyValue("--vscode-sideBar-background").trim(),s.setProperty("--color-view-background",r||l),r=n.getPropertyValue("--vscode-sideBar-foreground").trim(),s.setProperty("--color-view-foreground",r||c),s.setProperty("--color-view-header-foreground",n.getPropertyValue("--vscode-sideBarSectionHeader-foreground").trim()||r||c),r=n.getPropertyValue("--vscode-editorHoverWidget-background").trim(),s.setProperty("--color-hover-background",r),r=n.getPropertyValue("--vscode-editorHoverWidget-border").trim(),s.setProperty("--color-hover-border",r),r=n.getPropertyValue("--vscode-editorHoverWidget-foreground").trim(),s.setProperty("--color-hover-foreground",r),r=n.getPropertyValue("--vscode-editorHoverWidget-statusBarBackground").trim(),s.setProperty("--color-hover-statusBarBackground",r),s.setProperty("--graph-theme-opacity-factor",a?"0.5":"1"),s.setProperty("--color-graph-actionbar-background",a?g(l,5):p(l,5)),s.setProperty("--color-graph-actionbar-selectedBackground",a?g(l,10):p(l,10)),s.setProperty("--color-graph-background",a?g(l,5):p(l,5)),s.setProperty("--color-graph-background2",a?g(l,10):p(l,10)),r=n.getPropertyValue("--vscode-list-focusOutline").trim(),s.setProperty("--color-graph-contrast-border-color",r),r=n.getPropertyValue("--vscode-list-activeSelectionBackground").trim(),s.setProperty("--color-graph-selected-row",r),r=n.getPropertyValue("--vscode-list-hoverBackground").trim(),s.setProperty("--color-graph-hover-row",r),r=n.getPropertyValue("--vscode-list-activeSelectionForeground").trim(),s.setProperty("--color-graph-text-selected-row",r),s.setProperty("--color-graph-text-dimmed-selected",h(r,50)),s.setProperty("--color-graph-text-dimmed",h(c,20)),r=n.getPropertyValue("--vscode-list-hoverForeground").trim(),s.setProperty("--color-graph-text-hovered",r),s.setProperty("--color-graph-text-selected",c),s.setProperty("--color-graph-text-normal",h(c,85)),s.setProperty("--color-graph-text-secondary",h(c,65)),s.setProperty("--color-graph-text-disabled",h(c,50)),r=n.getPropertyValue("--vscode-inputValidation-infoBackground").trim(),s.setProperty("--color-alert-infoHoverBackground",a?g(r,5):p(r,5)),s.setProperty("--color-alert-infoBackground",r),r=n.getPropertyValue("--vscode-inputValidation-warningBackground").trim(),s.setProperty("--color-alert-warningHoverBackground",a?g(r,5):p(r,5)),s.setProperty("--color-alert-warningBackground",r),r=n.getPropertyValue("--vscode-inputValidation-errorBackground").trim(),s.setProperty("--color-alert-errorHoverBackground",a?g(r,5):p(r,5)),s.setProperty("--color-alert-errorBackground",r),r=a?g(l,5):p(l,5),s.setProperty("--color-alert-neutralHoverBackground",a?g(r,5):p(r,5)),s.setProperty("--color-alert-neutralBackground",r),s.setProperty("--color-alert-infoBorder","var(--vscode-inputValidation-infoBorder)"),s.setProperty("--color-alert-warningBorder","var(--vscode-inputValidation-warningBorder)"),s.setProperty("--color-alert-errorBorder","var(--vscode-inputValidation-errorBorder)"),s.setProperty("--color-alert-neutralBorder","var(--vscode-input-foreground)"),s.setProperty("--color-alert-foreground","var(--vscode-input-foreground)"),e!=null&&W.fire()};i();const t=new MutationObserver(i);return t.observe(document.body,{attributeFilter:["class"]}),t}const ge=2**30;let C=0;function H(){return C===ge?C=1:C++,`webview:${C}`}class pe{constructor(t){this.appName=t,this.state=window.bootstrap,window.bootstrap=void 0,this.log(`${this.appName}()`),this._api=acquireVsCodeApi(),this.onThemeUpdated!=null&&ue(this.onThemeUpdated,this),de(),requestAnimationFrame(()=>{this.log(`${this.appName}.initializing`);try{this.onInitialize?.(),this.bind(),this.onMessageReceived!=null&&window.addEventListener("message",this.onMessageReceived.bind(this)),this.sendCommand(ee,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}})}bind(){this.bindDisposables?.forEach(t=>t.dispose()),this.bindDisposables=this.onBind?.()}log(t,...e){}getState(){return this._api.getState()}sendCommand(t,e){const o=H();this.log(`${this.appName}.sendCommand(${o}): name=${t.method}`),this.postMessage({id:o,method:t.method,params:e})}async sendCommandWithCompletion(t,e,o){const n=H();this.log(`${this.appName}.sendCommandWithCompletion(${n}): name=${t.method}`);const a=new Promise((s,l)=>{let r;const c=[y.on(window,"message",u=>{B(o,u.data,f=>{u.data.completionId===n&&(c.forEach(m=>m.dispose()),queueMicrotask(()=>s(f)))})}),{dispose:function(){r!=null&&(clearTimeout(r),r=void 0)}}];r=setTimeout(()=>{r=void 0,c.forEach(u=>u.dispose()),l(new Error(`Timed out waiting for completion of ${o.method}`))},6e4)});return this.postMessage({id:n,method:t.method,params:e,completionId:n}),a}setState(t){this.state=t,t!=null&&this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}const Y=new Date().getTimezoneOffset()/60*100,Q=new Date(`Wed Jul 25 2018 19:18:00 GMT${Y>=0?"-":"+"}${String(Math.abs(Y)).padStart(4,"0")}`);class he extends pe{constructor(t){super(t),this._changes=Object.create(null),this._updating=!1}onInitialized(){this.updateState()}onBind(){const t=super.onBind?.()??[];return t.push(y.on("input[type=checkbox][data-setting]","change",(e,o)=>this.onInputChecked(o)),y.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","blur",(e,o)=>this.onInputBlurred(o)),y.on("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]","focus",(e,o)=>this.onInputFocused(o)),y.on("input[type=text][data-setting][data-setting-preview], input[type=number][data-setting][data-setting-preview]","input",(e,o)=>this.onInputChanged(o)),y.on("button[data-setting-clear]","click",(e,o)=>this.onButtonClicked(o)),y.on("select[data-setting]","change",(e,o)=>this.onInputSelected(o)),y.on(".token[data-token]","mousedown",(e,o)=>this.onTokenMouseDown(o,e))),t}onMessageReceived(t){const e=t.data;switch(this.log(`${this.appName}.onMessageReceived(${e.id}): name=${e.method}`),e.method){case L.method:{B(L,e,o=>{this.scrollToAnchor(o.anchor,o.scrollBehavior)});break}case U.method:B(U,e,o=>{this.state.config=o.config,this.state.customSettings=o.customSettings,this.updateState()});break;default:super.onMessageReceived?.(t)}}applyChanges(){this.sendCommand(oe,{changes:{...this._changes},removes:Object.keys(this._changes).filter(t=>this._changes[t]===void 0),scope:this.getSettingsScope()}),this._changes=Object.create(null)}getSettingsScope(){return"user"}onInputBlurred(t){this.log(`${this.appName}.onInputBlurred: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);e?.classList.add("hidden");let o=t.value;if((o==null||o.length===0)&&(o=t.dataset.defaultValue,o===void 0&&(o=null)),t.dataset.settingType==="arrayObject"){const n=t.name.split("."),a=n[0],s=parseInt(n[1],10),l=n.slice(2);let r=this.getSettingValue(a);if(o==null&&(r===void 0||r?.length===0))r!==void 0&&(this._changes[a]=void 0);else{r=r??[];let c=r[s];(o!=null||o==null&&c!==void 0)&&(c===void 0&&(c=Object.create(null),r[s]=c),_(c,l.join("."),t.type==="number"&&o!=null?Number(o):o),this._changes[a]=r)}}else this._changes[t.name]=t.type==="number"&&o!=null?Number(o):o;this.applyChanges()}onButtonClicked(t){if(t.dataset.settingType==="arrayObject"){const e=t.name.split("."),o=e[0],n=this.getSettingValue(o);if(n===void 0)return;const a=parseInt(e[1],10);if(n[a]==null)return;n.splice(a,1),this._changes[o]=n.length?n:void 0,this.applyChanges()}}onInputChanged(t){if(!this._updating)for(const e of document.querySelectorAll(`span[data-setting-preview="${t.name}"]`))this.updatePreview(e,t.value)}onInputChecked(t){if(!this._updating){switch(this.log(`${this.appName}.onInputChecked: name=${t.name}, checked=${t.checked}, value=${t.value}`),t.dataset.settingType){case"object":{const e=t.name.split("."),o=e.splice(0,1)[0],n=this.getSettingValue(o)??Object.create(null);t.checked?_(n,e.join("."),N(t.value)):_(n,e.join("."),!1),this._changes[o]=n;break}case"array":{const e=this.getSettingValue(t.name)??[];if(Array.isArray(e)){if(t.checked)e.includes(t.value)||e.push(t.value);else{const o=e.indexOf(t.value);o!==-1&&e.splice(o,1)}this._changes[t.name]=e}break}case"arrayObject":{const e=t.name.split("."),o=e[0],n=parseInt(e[1],10),a=e.slice(2),s=this.getSettingValue(o)??[],l=s[n]??Object.create(null);s[n]===void 0&&(s[n]=l),t.checked?_(s[n],a.join("."),N(t.value)):_(s[n],a.join("."),!1),this._changes[o]=s;break}case"custom":{this._changes[t.name]=t.checked;break}default:{t.checked?this._changes[t.name]=N(t.value):this._changes[t.name]=t.dataset.valueOff==null?!1:t.dataset.valueOff;break}}this.setAdditionalSettings(t.checked?t.dataset.addSettingsOn:t.dataset.addSettingsOff),this.applyChanges()}}onInputFocused(t){this.log(`${this.appName}.onInputFocused: name=${t.name}, value=${t.value}`);const e=document.getElementById(`${t.name}.popup`);if(e!=null){if(e.childElementCount===0){const o=document.querySelector("#token-popup")?.content.cloneNode(!0);o!=null&&e.appendChild(o)}e.classList.remove("hidden")}}onInputSelected(t){if(this._updating)return;const e=t.options[t.selectedIndex].value;this.log(`${this.appName}.onInputSelected: name=${t.name}, value=${e}`),this._changes[t.name]=Z(e),this.applyChanges()}onTokenMouseDown(t,e){if(this._updating)return;this.log(`${this.appName}.onTokenClicked: id=${t.id}`);const o=t.closest(".setting");if(o==null)return;const n=o.querySelector("input[type=text], input:not([type])");if(n==null)return;const a=`\${${t.dataset.token}}`;let s=n.selectionStart;s!=null?(n.value=`${n.value.substring(0,s)}${a}${n.value.substr(n.selectionEnd??s)}`,s+=a.length):s=n.value.length,n.focus(),n.setSelectionRange(s,s),s===n.value.length&&(n.scrollLeft=n.scrollWidth),setTimeout(()=>this.onInputChanged(n),0),setTimeout(()=>n.focus(),250),e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault()}scrollToAnchor(t,e,o){const n=document.getElementById(t);n!=null&&this.scrollTo(n,e,o)}scrollTo(t,e,o){const n=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0);window.scrollTo({top:n,behavior:e??"smooth"});const a=()=>{this._scrollTimer!=null&&clearTimeout(this._scrollTimer),this._scrollTimer=setTimeout(()=>{window.removeEventListener("scroll",a);const s=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top-(o??0);n!==s&&this.scrollTo(t,e,o)},50)};window.addEventListener("scroll",a,!1)}evaluateStateExpression(t,e){let o=!1;for(const n of t.trim().split("&")){const[a,s,l]=ye(n);switch(s){case"=":{let r=e[a];r===void 0&&(r=this.getSettingValue(a)??!1),o=l!==void 0?l===String(r):Boolean(r);break}case"!":{let r=e[a];r===void 0&&(r=this.getSettingValue(a)??!1),o=l!==void 0?l!==String(r):!r;break}case"+":{if(l!==void 0){const r=this.getSettingValue(a);o=r!==void 0?r.includes(l.toString()):!1}break}}if(!o)break}return o}getCustomSettingValue(t){return this.state.customSettings?.[t]}getSettingValue(t){const e=this.getCustomSettingValue(t);return e??fe(this.state.config,t)}updateState(){this.beforeUpdateState?.(),this._updating=!0,se(this.state.config.defaultDateLocale);try{for(const e of document.querySelectorAll("input[type=checkbox][data-setting]"))if(e.dataset.settingType==="custom")e.checked=this.getCustomSettingValue(e.name)??!1;else if(e.dataset.settingType==="array")e.checked=(this.getSettingValue(e.name)??[]).includes(e.value);else if(e.dataset.valueOff!=null){const o=this.getSettingValue(e.name);e.checked=e.dataset.valueOff!==o}else e.checked=this.getSettingValue(e.name)??!1;for(const e of document.querySelectorAll("input[type=text][data-setting], input[type=number][data-setting], input:not([type])[data-setting]"))e.value=this.getSettingValue(e.name)??"";for(const e of document.querySelectorAll("select[data-setting]")){const o=this.getSettingValue(e.name),n=e.querySelector(`option[value='${o}']`);n!=null&&(n.selected=!0)}for(const e of document.querySelectorAll("span[data-setting-preview]"))this.updatePreview(e)}finally{this._updating=!1}const t=G(this.state.config);if(this.state.customSettings!=null)for(const[e,o]of Object.entries(this.state.customSettings))t[e]=o;this.setVisibility(t),this.setEnablement(t)}setAdditionalSettings(t){if(!t)return;const e=me(t);for(const[o,n]of e)this._changes[o]=n}setEnablement(t){for(const e of document.querySelectorAll("[data-enablement]")){const o=!this.evaluateStateExpression(e.dataset.enablement,t);if(o?e.setAttribute("disabled",""):e.removeAttribute("disabled"),e.matches("input,select"))e.disabled=o;else{const n=e.querySelector("input,select");if(n==null)continue;n.disabled=o}}}setVisibility(t){for(const e of document.querySelectorAll("[data-visibility]"))e.classList.toggle("hidden",!this.evaluateStateExpression(e.dataset.visibility,t))}updatePreview(t,e){const o=t.dataset.settingPreviewType;switch(o){case"date":{if(e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),!e&&(e=t.dataset.settingPreviewDefault,e==null)){const n=t.dataset.settingPreviewDefaultLookup;n!=null&&(e=this.getSettingValue(n))}t.innerText=e==null?"":j(Q,e,void 0,!1);break}case"date-locale":{e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),e||(e=void 0);const n=this.getSettingValue(t.dataset.settingPreviewDefault)??"MMMM Do, YYYY h:mma";try{t.innerText=j(Q,n,e,!1)}catch(a){t.innerText=a.message}break}case"commit":case"commit-uncommitted":{if(e===void 0&&(e=this.getSettingValue(t.dataset.settingPreview)),!e&&(e=t.dataset.settingPreviewDefault,e==null)){const n=t.dataset.settingPreviewDefaultLookup;n!=null&&(e=this.getSettingValue(n))}if(e==null){t.innerText="";return}this.sendCommandWithCompletion(te,{key:t.dataset.settingPreview,type:o,format:e},ne).then(n=>{t.innerText=n.preview??""});break}default:break}}}function Z(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:i}function fe(i,t){return t.split(".").reduce((e={},o)=>e?.[o],i)}function _(i,t,e){const o=t.split("."),n=o.length,a=n-1;let s=-1,l=i;for(;l!=null&&++s<n;){const r=o[s];let c=e;if(s!==a){const u=l[r];c=typeof u=="object"?u:{}}l[r]=c,l=l[r]}return i}function me(i){return i.trim().split(",").map(e=>{const[o,n]=e.split("=");return[o,Z(n)]})}function ye(i){const[t,e,o]=i.trim().split(/([=+!])/);return[t.trim(),e!==void 0?e.trim():"=",o!==void 0?o.trim():o]}function G(i,t){const e={};for(const o in i){const n=i[o];Array.isArray(n)||(typeof n=="object"?Object.assign(e,G(n,t===void 0?o:`${t}.${o}`)):e[t===void 0?o:`${t}.${o}`]=n)}return e}function N(i){switch(i){case"on":return!0;case"null":return null;case"undefined":return;default:return i}}class ve extends he{constructor(){super("WelcomeApp")}}new ve})();
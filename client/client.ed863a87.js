function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function c(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,m,h=!1;function p(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(h){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(r>0&&t[n[r]].claim_order<=o?r+1:p(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[a]+1;const i=a+1;n[i]=e,r=Math.max(i,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){h&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function T(){return E("")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function R(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:R(e,s,t[s])}function P(e){return Array.from(e.childNodes)}function k(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,s,r=!1){k(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function I(e,t,n,s){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return I(e,t,n,w)}function C(e,t,n){return I(e,t,n,y)}function H(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function M(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function j(e){const t=M(e,"HTML_TAG_START",0),n=M(e,"HTML_TAG_END",t);if(t===n)return new B;k(e);const s=e.splice(t,n+1);$(s[0]),$(s[s.length-1]);const r=s.slice(1,s.length-1);for(const t of r)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new B(r)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function V(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=S(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=S(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),$(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class B extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function K(e){m=e}function W(){if(!m)throw new Error("Function called outside component initialization");return m}function J(e){W().$$.on_mount.push(e)}function F(e){W().$$.after_update.push(e)}function Y(e){W().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function se(e){Z.push(e)}let re=!1;const oe=new Set;function ae(){if(!re){re=!0;do{for(let e=0;e<X.length;e+=1){const t=X[e];K(t),ie(t.$$)}for(K(null),X.length=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,re=!1,oe.clear()}}function ie(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function de(){le.r||r(le.c),le=le.p}function fe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function me(e,t,n,s){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function he(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function pe(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),a||se((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(se)}function $e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,a,i,c,l,u=[-1]){const d=m;K(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let p=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&_e(t,e)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){h=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),h=!1,ae()}K(d)}class ye{$destroy(){$e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function xe(t,n=e){let s;const r=new Set;function o(e){if(a(t,e)&&(t=e,s)){const e=!Ee.length;for(const e of r)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.add(c),1===r.size&&(s=n(o)||e),a(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Te={};var Se={owner:"marcosdid-kompa",repo:"upptime-kompa","user-agent":"marcosdid-kompa",sites:[{name:"App Kompa (PAGE)",url:"https://app.kompa.com.br/"},{name:"App Kompa (API)",url:"https://app.kompa.com.br/pagamentos/check-user/",method:"POST",maxResponseTime:5e3},{name:"App Kompa Homologação (PAGE)",url:"https://hg.kompa.com.br/",maxResponseTime:5e3},{name:"Portal",url:"https://portal.kompa.com.br/",maxResponseTime:5e3},{name:"Broker",url:"https://broker.assinasaude.com.br/",maxResponseTime:5e3},{name:"Karmen (PAGE)",url:"https://karmen.kompa.com.br/login",maxResponseTime:5e3},{name:"Karmen Rasa (API)",url:"https://karmen.kompa.com.br/health",method:"POST"},{name:"Vindi",url:"app.vindi.com.br",maxResponseTime:5e3},{name:"Versatilis",url:"http://sistema.globalmedclinica.com.br/globalmed/login3.aspx",maxResponseTime:5e3},{name:"Google",url:"https://www.google.com/",icon:"https://www.google.com/favicon.ico",maxResponseTime:5e3},{name:"Octadesk",url:"https://octadesk.com",maxResponseTime:5e3},{name:"LiveChat",url:"https://www.livechat.com/pt/",maxResponseTime:5e3},{name:"Twilio",url:"https://www.twilio.com/",maxResponseTime:5e3},{name:"Whereby",url:"https://whereby.com/",maxResponseTime:5e3},{name:"Sendgrid",url:"https://sendgrid.com/",maxResponseTime:5e3}],"status-website":{cname:"http://status.kompa.com.br",name:"",logoUrl:"https://app.kompa.com.br/static/img/logo.png",navbar:[{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}],theme:"light",introTitle:"Página com os status dos serviços usados pela Kompa.",introMessage:"Abaixo temos um card com o nome do serviço e seu respectivo status."},i18n:{activeIncidents:"Ocorrências ativas",allSystemsOperational:"Todos os sistemas estão funcionando",incidentReport:"Ocorrência #$NUMBER report →",activeIncidentSummary:"Aberto as $DATE posts $POSTS posts",incidentTitle:"Ocorrência $NUMBER Detalhes",incidentDetails:"Detalhes da Ocorrência",incidentFixed:"Fixado",incidentOngoing:"Em progresso",incidentOpenedAt:"Aberto em",incidentClosedAt:"Fechado em",incidentSubscribe:"Escreva atualizações",incidentViewOnGitHub:"Ver no GitHub",incidentCommentSummary:"Postado em $DATE by $AUTHOR",incidentBack:"← Voltar a toda as ocorrências",pastIncidents:"Ocorrências anteriores",pastIncidentsResolved:"Resolvido em $MINUTES minutos com $POSTS post",liveStatus:"Status",overallUptime:"Tempo de atividade geral: $UPTIME",overallUptimeTitle:"Tempo de atividade geral",averageResponseTime:"Tempo de resposta: $TIMEms",averageResponseTimeTitle:"Tempo de resposta",sevelDayResponseTime:"Tempo de resposta de 7 dias",responseTimeMs:"Tempo de resposta (ms)",up:"Acima",down:"Baixo",degraded:"Degradado",ms:"ms",loading:"Carregando",navGitHub:"GitHub",footer:"",rateLimitExceededTitle:"Limite de taxa excedido",rateLimitExceededIntro:"Você excedeu o número de solicitações que pode fazer em uma hora, então terá que esperar antes de acessar este site novamente.",rateLimitExceededWhatDoesErrorMean:"WO que esse erro significa?",rateLimitExceededErrorMeaning:"Este site usa a API do GitHub para acessar dados em tempo real sobre o status de nossos sites. Por padrão, o GitHub permite a cada endereço IP 60 solicitações por hora, que você consumiu.",rateLimitExceededErrorHowCanFix:"Como posso corrigir isso?",rateLimitExceededErrorFix:"Você pode esperar mais uma hora e o limite do seu endereço IP será restaurado.",rateLimitExceededGeneratePAT:"Aprenda a gerar um token de acesso pessoal",rateLimitExceededHasSet:"Você tem um conjunto de tokens de acesso pessoal.",rateLimitExceededRemoveToken:"Remover token",rateLimitExceededGitHubPAT:"Token de acesso pessoal do GitHub",rateLimitExceededCopyPastePAT:"Copie e cole seu token",rateLimitExceededSaveToken:"Salvar token",errorTitle:"Ocorreu um erro",errorIntro:"Ocorreu um erro ao tentar obter os detalhes de status mais recentes.",errorText:"Você pode tentar novamente em alguns instantes.",errorHome:"Vá para a página inicial",pastScheduledMaintenance:"Manutenção programada anterior",scheduledMaintenance:"Manutenção agendada",scheduledMaintenanceSummaryStarted:"Começou às $DATE para $DURATION minutos",scheduledMaintenanceSummaryStarts:"Começa em $DATE para $DURATION minutes",startedAt:"Começou às",startsAt:"Começa em",duration:"Duração",durationMin:"$DURATION minutos",incidentCompleted:"Concluída",incidentScheduled:"Agendada"},path:"https://http://status.kompa.com.br"};function Ae(e,t,n){const s=e.slice();return s[1]=t[n],s}function Re(t){let n,s,r,o=Se["status-website"]&&!Se["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){R(n,"alt",""),c(n.src,s=Se["status-website"].logoUrl)||R(n,"src",s),R(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}(),a=Se["status-website"]&&!Se["status-website"].hideNavTitle&&function(t){let n,s,r=Se["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(e){n=O(e,"DIV",{});var t=P(n);s=H(t,r),t.forEach($)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=x(),a&&a.c(),this.h()},l(e){n=O(e,"DIV",{});var t=P(n);s=O(t,"A",{href:!0,class:!0});var i=P(s);o&&o.l(i),r=U(i),a&&a.l(i),i.forEach($),t.forEach($),this.h()},h(){R(s,"href",Se["status-website"].logoHref||Se.path),R(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){Se["status-website"]&&!Se["status-website"].hideNavLogo&&o.p(e,t),Se["status-website"]&&!Se["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&$(n),o&&o.d(),a&&a.d()}}}function Ne(e){let t,n,s,r,o,a,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),s=E(i),a=x(),this.h()},l(e){t=O(e,"LI",{});var r=P(t);n=O(r,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);s=H(o,i),o.forEach($),a=U(r),r.forEach($),this.h()},h(){R(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),R(n,"href",o=e[1].href.replace("$OWNER",Se.owner).replace("$REPO",Se.repo)),R(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,a)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&R(n,"aria-current",r)},d(e){e&&$(t)}}}function Pe(t){let n,s,r,o,a,i=Se["status-website"]&&Se["status-website"].logoUrl&&Re(),c=Se["status-website"]&&Se["status-website"].navbar&&function(e){let t,n=Se["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ne(Ae(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=Se["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ae(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ne(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),l=Se["status-website"]&&Se["status-website"].navbarGitHub&&!Se["status-website"].navbar&&function(t){let n,s,r,o=Se.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(e){n=O(e,"LI",{});var t=P(n);s=O(t,"A",{href:!0,class:!0});var a=P(s);r=H(a,o),a.forEach($),t.forEach($),this.h()},h(){R(s,"href",`https://github.com/${Se.owner}/${Se.repo}`),R(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("nav"),s=w("div"),i&&i.c(),r=x(),o=w("ul"),c&&c.c(),a=x(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=P(n);s=O(t,"DIV",{class:!0});var u=P(s);i&&i.l(u),r=U(u),o=O(u,"UL",{class:!0});var d=P(o);c&&c.l(d),a=U(d),l&&l.l(d),d.forEach($),u.forEach($),t.forEach($),this.h()},h(){R(o,"class","svelte-a08hsz"),R(s,"class","container svelte-a08hsz"),R(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,a),l&&l.m(o,null)},p(e,[t]){Se["status-website"]&&Se["status-website"].logoUrl&&i.p(e,t),Se["status-website"]&&Se["status-website"].navbar&&c.p(e,t),Se["status-website"]&&Se["status-website"].navbarGitHub&&!Se["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&$(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function ke(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Le extends ye{constructor(e){super(),we(this,e,ke,Pe,a,{segment:0})}}var Ie={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function He(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=Ie[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function m(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Oe(Ce(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=He(Oe(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ce(r[8])+'" alt="'+Ce(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ce(r[11]||u[s.toLowerCase()])+'">'),n=m()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+He(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ce(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(d)+m()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const s=e.slice();return s[3]=t[n],s}function Me(e,t,n){const s=e.slice();return s[3]=t[n],s}function je(e,t,n){const s=e.slice();return s[8]=t[n],s}function De(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){R(n,"rel","stylesheet"),R(n,"href",`${Se.path}/themes/${(Se["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){R(n,"rel","stylesheet"),R(n,"href",(Se["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function qe(t){let n,s;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),P(n).forEach($),this.h()},h(){c(n.src,s=t[8].src)||R(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ve(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){R(n,"rel",t[3].rel),R(n,"href",t[3].href),R(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function ze(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){R(n,"name",t[3].name),R(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Be(t){let n,s,r,o,a,i,c,u,d,f,m,h,p,b,y,E,S,A,N=He(Se.i18n.footer.replace(/\$REPO/,`https://github.com/${Se.owner}/${Se.repo}`))+"",k=(Se["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Se["status-website"]||{}).customHeadHtml+"";return{c(){n=new B,s=T(),this.h()},l(e){n=j(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}();let L=((Se["status-website"]||{}).themeUrl?Ge:De)(t),I=(Se["status-website"]||{}).scripts&&function(e){let t,n=(Se["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Se["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=je(e,n,o);s[o]?s[o].p(a,r):(s[o]=qe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),C=(Se["status-website"]||{}).links&&function(e){let t,n=(Se["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ve(Me(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Se["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Me(e,n,o);s[o]?s[o].p(a,r):(s[o]=Ve(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),H=(Se["status-website"]||{}).metaTags&&function(e){let t,n=(Se["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=T()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Se["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ue(e,n,o);s[o]?s[o].p(a,r):(s[o]=ze(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){_(s,e),e&&$(t)}}}(t),M=Se["status-website"].css&&function(t){let n,s,r=`<style>${Se["status-website"].css}</style>`;return{c(){n=new B,s=T(),this.h()},l(e){n=j(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}(),D=Se["status-website"].js&&function(t){let n,s,r=`<script>${Se["status-website"].js}<\/script>`;return{c(){n=new B,s=T(),this.h()},l(e){n=j(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}(),G=(Se["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Se["status-website"]||{}).customBodyHtml+"";return{c(){n=new B,s=T(),this.h()},l(e){n=j(e),s=T(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&$(s),e&&n.d()}}}();h=new Le({props:{segment:t[0]}});const q=t[2].default,V=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(q,t,t[1],null);return{c(){k&&k.c(),n=T(),L.c(),s=w("link"),r=w("link"),o=w("link"),I&&I.c(),a=T(),C&&C.c(),i=T(),H&&H.c(),c=T(),M&&M.c(),u=T(),D&&D.c(),d=T(),f=x(),G&&G.c(),m=x(),ge(h.$$.fragment),p=x(),b=w("main"),V&&V.c(),y=x(),E=w("footer"),S=w("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);k&&k.l(t),n=T(),L.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),I&&I.l(t),a=T(),C&&C.l(t),i=T(),H&&H.l(t),c=T(),M&&M.l(t),u=T(),D&&D.l(t),d=T(),t.forEach($),f=U(e),G&&G.l(e),m=U(e),be(h.$$.fragment,e),p=U(e),b=O(e,"MAIN",{class:!0});var l=P(b);V&&V.l(l),l.forEach($),y=U(e),E=O(e,"FOOTER",{class:!0});var g=P(E);S=O(g,"P",{}),P(S).forEach($),g.forEach($),this.h()},h(){R(s,"rel","stylesheet"),R(s,"href",`${Se.path}/global.css`),R(r,"rel","icon"),R(r,"type","image/svg"),R(r,"href",(Se["status-website"]||{}).faviconSvg||(Se["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),R(o,"rel","icon"),R(o,"type","image/png"),R(o,"href",(Se["status-website"]||{}).favicon||"/logo-192.png"),R(b,"class","container"),R(E,"class","svelte-jbr799")},m(e,t){k&&k.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),I&&I.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,d),v(e,f,t),G&&G.m(e,t),v(e,m,t),ve(h,e,t),v(e,p,t),v(e,b,t),V&&V.m(b,null),v(e,y,t),v(e,E,t),g(E,S),S.innerHTML=N,A=!0},p(e,[t]){(Se["status-website"]||{}).customHeadHtml&&k.p(e,t),L.p(e,t),(Se["status-website"]||{}).scripts&&I.p(e,t),(Se["status-website"]||{}).links&&C.p(e,t),(Se["status-website"]||{}).metaTags&&H.p(e,t),Se["status-website"].css&&M.p(e,t),Se["status-website"].js&&D.p(e,t),(Se["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),h.$set(n),V&&V.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const a=l(t,n,s,o);e.p(a,r)}}(V,q,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(fe(h.$$.fragment,e),fe(V,e),A=!0)},o(e){me(h.$$.fragment,e),me(V,e),A=!1},d(e){k&&k.d(e),$(n),L.d(e),$(s),$(r),$(o),I&&I.d(e),$(a),C&&C.d(e),$(i),H&&H.d(e),$(c),M&&M.d(e),$(u),D&&D.d(e),$(d),e&&$(f),G&&G.d(e),e&&$(m),$e(h,e),e&&$(p),e&&$(b),V&&V.d(e),e&&$(y),e&&$(E)}}}function Ke(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class We extends ye{constructor(e){super(),we(this,e,Ke,Be,a,{segment:0})}}function Je(e){let t,n,s=e[1].stack+"";return{c(){t=w("pre"),n=E(s)},l(e){t=O(e,"PRE",{});var r=P(t);n=H(r,s),r.forEach($)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&D(n,s)},d(e){e&&$(t)}}}function Fe(t){let n,s,r,o,a,i,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Je(t);return{c(){s=x(),r=w("h1"),o=E(t[0]),a=x(),i=w("p"),c=E(d),l=x(),f&&f.c(),u=T(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach($),s=U(e),r=O(e,"H1",{class:!0});var n=P(r);o=H(n,t[0]),n.forEach($),a=U(e),i=O(e,"P",{class:!0});var m=P(i);c=H(m,d),m.forEach($),l=U(e),f&&f.l(e),u=T(),this.h()},h(){R(r,"class","svelte-17w3omn"),R(i,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,a,t),v(e,i,t),g(i,c),v(e,l,t),f&&f.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&d!==(d=e[1].message+"")&&D(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Je(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&$(s),e&&$(r),e&&$(a),e&&$(i),e&&$(l),f&&f.d(e),e&&$(u)}}}function Ye(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Xe extends ye{constructor(e){super(),we(this,e,Ye,Fe,a,{status:0,error:1})}}function Qe(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ge(n.$$.fragment),s=T()},l(e){n&&be(n.$$.fragment,e),s=T()},m(e,t){n&&ve(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?he(o,[pe(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ue();const e=n;me(e.$$.fragment,1,0,(()=>{$e(e,1)})),de()}a?(n=new a(i()),ge(n.$$.fragment),fe(n.$$.fragment,1),ve(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&fe(n.$$.fragment,e),r=!0)},o(e){n&&me(n.$$.fragment,e),r=!1},d(e){e&&$(s),n&&$e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,s){ve(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){me(t.$$.fragment,e),n=!1},d(e){$e(t,e)}}}function et(e){let t,n,s,r;const o=[Ze,Qe],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=T()},l(e){n.l(e),s=T()},m(e,n){a[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(ue(),me(a[c],1,1,(()=>{a[c]=null})),de(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),fe(n,1),n.m(s.parentNode,s))},i(e){r||(fe(n),r=!0)},o(e){me(n),r=!1},d(e){a[t].d(e),e&&$(s)}}}function tt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new We({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),s=!0},p(e,[t]){const s=12&t?he(r,[4&t&&{segment:e[2][0]},8&t&&pe(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(fe(n.$$.fragment,e),s=!0)},o(e){me(n.$$.fragment,e),s=!1},d(e){$e(n,e)}}}function nt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return F(l),u=Te,d=s,W().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class st extends ye{constructor(e){super(),we(this,e,nt,tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.004d6fc7.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.83b4ab2b.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].08ff5b9b.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].0ba1e08d.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.2b2a62cf.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},mt={};let ht,pt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ht))return null;let t=e.pathname.slice(ht.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const s=at[n],r=s.pattern.exec(t);if(r){const n=gt(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=bt(r);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ft.pushState({id:ut},"",r.href)}}function $t(){return{x:pageXOffset,y:pageYOffset}}function _t(e){if(mt[ut]=$t(),e.state){const t=bt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function wt(e,t,n,s){return ct(this,void 0,void 0,(function*(){const r=!!t;if(r)ut=t;else{const e=$t();mt[ut]=e,ut=t=++dt,mt[ut]=n?e:{x:0,y:0}}if(yield pt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=mt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),mt[ut]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Et,xt=null;function Tt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)xt&&e===xt.href||(xt={href:e,promise:qt(t)}),xt.promise}(t.href)}function St(e){clearTimeout(Et),Et=setTimeout((()=>{Tt(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const s=wt(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),s}return location.href=e,new Promise((()=>{}))}const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,Pt,kt,Lt=!1,It=[],Ot="{}";const Ct={page:function(e){const t=xe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:xe(null),session:xe(Rt&&Rt.session)};let Ht,Ut,Mt;function jt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Dt(e){return ct(this,void 0,void 0,(function*(){Nt&&Ct.preloading.set(!0);const t=function(e){return xt&&xt.href===e.href?xt.promise:qt(e)}(e),n=Pt={},s=yield t,{redirect:r}=s;if(n===Pt)if(r)yield At(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Gt(n,t,jt(t,e.page))}}))}function Gt(e,t,n){return ct(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),Nt?Nt.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield kt},t.notify=Ct.page.notify,Nt=new st({target:Mt,props:t,hydrate:!0})),It=e,Ot=JSON.stringify(n.query),Lt=!0,Ut=!1}))}function qt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!kt){const e=()=>({});kt=Rt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>ct(this,void 0,void 0,(function*(){const d=s[i];if(function(e,t,n,s){if(s!==Ot)return!0;const r=It[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,d,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:d};const f=c++;let m;if(Ut||u||!It[i]||It[i].part!==t.i){u=!1;const{default:s,preload:r}=yield ot[t.i].js();let o;o=Lt||!Rt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ht):{}:Rt.preloaded[i+1],m={component:s,props:o,segment:d,match:l,part:t.i}}else m=It[i];return o[`level${f}`]=m})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var Vt,zt,Bt;Ct.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ht=e,!Lt)return;Ut=!0;const t=bt(new URL(location.href)),n=Pt={},{redirect:s,props:r,branch:o}=yield qt(t);n===Pt&&(s?yield At(s.location,{replaceState:!0}):yield Gt(o,r,jt(r,t.page)))})))),Vt={target:document.querySelector("#sapper")},zt=Vt.target,Mt=zt,Bt=Rt.baseUrl,ht=Bt,pt=Dt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",_t),addEventListener("touchstart",Tt),addEventListener("mousemove",St),Rt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Rt;kt||(kt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:kt},level1:{props:{status:o,error:a},component:Xe},segments:r},c=gt(n);Gt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=bt(new URL(location.href));if(n)return wt(n,dt,!0,e)}));export{$e as A,S as B,r as C,Q as D,j as E,c as F,d as G,B as H,z as I,He as J,y as K,C as L,At as M,G as N,A as O,t as P,N as Q,he as R,ye as S,F as T,Y as U,u as V,pe as W,se as X,V as Y,P as a,H as b,O as c,$ as d,w as e,R as f,v as g,g as h,we as i,x as j,U as k,ue as l,me as m,e as n,de as o,fe as p,J as q,Se as r,a as s,E as t,D as u,T as v,_ as w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';
var F,d,Q,on,C,q,X,A,O,H,I,ln,S={},Y=[],rn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function w(t,n){for(var e in n)t[e]=n[e];return t}function Z(t){var n=t.parentNode;n&&n.removeChild(t)}function un(t,n,e){var r,o,l,s={};for(l in n)l=="key"?r=n[l]:l=="ref"?o=n[l]:s[l]=n[l];if(arguments.length>2&&(s.children=arguments.length>3?F.call(arguments,2):e),typeof t=="function"&&t.defaultProps!=null)for(l in t.defaultProps)s[l]===void 0&&(s[l]=t.defaultProps[l]);return E(t,s,r,o,null)}function E(t,n,e,r,o){var l={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Q,__i:-1,__u:0};return o==null&&d.vnode!=null&&d.vnode(l),l}function N(t){return t.children}function L(t,n){this.props=t,this.context=n}function x(t,n){if(n==null)return t.__?x(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null)return e.__e;return typeof t.type=="function"?x(t):null}function nn(t){var n,e;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null){t.__e=t.__c.base=e.__e;break}return nn(t)}}function G(t){(!t.__d&&(t.__d=!0)&&C.push(t)&&!W.__r++||q!==d.debounceRendering)&&((q=d.debounceRendering)||X)(W)}function W(){var t,n,e,r,o,l,s,c;for(C.sort(A);t=C.shift();)t.__d&&(n=C.length,r=void 0,l=(o=(e=t).__v).__e,s=[],c=[],e.__P&&((r=w({},o)).__v=o.__v+1,d.vnode&&d.vnode(r),V(e.__P,r,o,e.__n,e.__P.namespaceURI,32&o.__u?[l]:null,s,l??x(o),!!(32&o.__u),c),r.__v=o.__v,r.__.__k[r.__i]=r,_n(s,r,c),r.__e!=l&&nn(r)),C.length>n&&C.sort(A));W.__r=0}function tn(t,n,e,r,o,l,s,c,p,u,f){var _,m,i,h,k,v=r&&r.__k||Y,a=n.length;for(e.__d=p,sn(e,n,v),p=e.__d,_=0;_<a;_++)(i=e.__k[_])!=null&&typeof i!="boolean"&&typeof i!="function"&&(m=i.__i===-1?S:v[i.__i]||S,i.__i=_,V(t,i,m,o,l,s,c,p,u,f),h=i.__e,i.ref&&m.ref!=i.ref&&(m.ref&&j(m.ref,null,i),f.push(i.ref,i.__c||h,i)),k==null&&h!=null&&(k=h),65536&i.__u||m.__k===i.__k?(p&&!p.isConnected&&(p=x(m)),p=en(i,p,t)):typeof i.type=="function"&&i.__d!==void 0?p=i.__d:h&&(p=h.nextSibling),i.__d=void 0,i.__u&=-196609);e.__d=p,e.__e=k}function sn(t,n,e){var r,o,l,s,c,p=n.length,u=e.length,f=u,_=0;for(t.__k=[],r=0;r<p;r++)s=r+_,(o=t.__k[r]=(o=n[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?E(null,o,null,null,null):B(o)?E(N,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?E(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,c=cn(o,e,s,f),o.__i=c,l=null,c!==-1&&(f--,(l=e[c])&&(l.__u|=131072)),l==null||l.__v===null?(c==-1&&_--,typeof o.type!="function"&&(o.__u|=65536)):c!==s&&(c===s+1?_++:c>s?f>p-s?_+=c-s:_--:c<s?c==s-1&&(_=c-s):_=0,c!==r+_&&(o.__u|=65536))):(l=e[s])&&l.key==null&&l.__e&&!(131072&l.__u)&&(l.__e==t.__d&&(t.__d=x(l)),$(l,l,!1),e[s]=null,f--);if(f)for(r=0;r<u;r++)(l=e[r])!=null&&!(131072&l.__u)&&(l.__e==t.__d&&(t.__d=x(l)),$(l,l))}function en(t,n,e){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=en(r[o],n,e));return n}t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function cn(t,n,e,r){var o=t.key,l=t.type,s=e-1,c=e+1,p=n[e];if(p===null||p&&o==p.key&&l===p.type&&!(131072&p.__u))return e;if(r>(p!=null&&!(131072&p.__u)?1:0))for(;s>=0||c<n.length;){if(s>=0){if((p=n[s])&&!(131072&p.__u)&&o==p.key&&l===p.type)return s;s--}if(c<n.length){if((p=n[c])&&!(131072&p.__u)&&o==p.key&&l===p.type)return c;c++}}return-1}function J(t,n,e){n[0]==="-"?t.setProperty(n,e??""):t[n]=e==null?"":typeof e!="number"||rn.test(n)?e:e+"px"}function M(t,n,e,r,o){var l;n:if(n==="style")if(typeof e=="string")t.style.cssText=e;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||J(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||J(t.style,n,e[n])}else if(n[0]==="o"&&n[1]==="n")l=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in t||n==="onFocusOut"||n==="onFocusIn"?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+l]=e,e?r?e.u=r.u:(e.u=O,t.addEventListener(n,l?I:H,l)):t.removeEventListener(n,l?I:H,l);else{if(o=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n in t)try{t[n]=e??"";break n}catch{}typeof e=="function"||(e==null||e===!1&&n[4]!=="-"?t.removeAttribute(n):t.setAttribute(n,e))}}function K(t){return function(n){if(this.l){var e=this.l[n.type+t];if(n.t==null)n.t=O++;else if(n.t<e.u)return;return e(d.event?d.event(n):n)}}}function V(t,n,e,r,o,l,s,c,p,u){var f,_,m,i,h,k,v,a,y,b,U,P,z,T,R,g=n.type;if(n.constructor!==void 0)return null;128&e.__u&&(p=!!(32&e.__u),l=[c=n.__e=e.__e]),(f=d.__b)&&f(n);n:if(typeof g=="function")try{if(a=n.props,y=(f=g.contextType)&&r[f.__c],b=f?y?y.props.value:f.__:r,e.__c?v=(_=n.__c=e.__c).__=_.__E:("prototype"in g&&g.prototype.render?n.__c=_=new g(a,b):(n.__c=_=new L(a,b),_.constructor=g,_.render=fn),y&&y.sub(_),_.props=a,_.state||(_.state={}),_.context=b,_.__n=r,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=w({},_.__s)),w(_.__s,g.getDerivedStateFromProps(a,_.__s))),i=_.props,h=_.state,_.__v=n,m)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&a!==i&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(a,b),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(a,_.__s,b)===!1||n.__v===e.__v)){for(n.__v!==e.__v&&(_.props=a,_.state=_.__s,_.__d=!1),n.__e=e.__e,n.__k=e.__k,n.__k.forEach(function(D){D&&(D.__=n)}),U=0;U<_._sb.length;U++)_.__h.push(_._sb[U]);_._sb=[],_.__h.length&&s.push(_);break n}_.componentWillUpdate!=null&&_.componentWillUpdate(a,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(i,h,k)})}if(_.context=b,_.props=a,_.__P=t,_.__e=!1,P=d.__r,z=0,"prototype"in g&&g.prototype.render){for(_.state=_.__s,_.__d=!1,P&&P(n),f=_.render(_.props,_.state,_.context),T=0;T<_._sb.length;T++)_.__h.push(_._sb[T]);_._sb=[]}else do _.__d=!1,P&&P(n),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++z<25);_.state=_.__s,_.getChildContext!=null&&(r=w(w({},r),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(k=_.getSnapshotBeforeUpdate(i,h)),tn(t,B(R=f!=null&&f.type===N&&f.key==null?f.props.children:f)?R:[R],n,e,r,o,l,s,c,p,u),_.base=n.__e,n.__u&=-161,_.__h.length&&s.push(_),v&&(_.__E=_.__=null)}catch(D){n.__v=null,p||l!=null?(n.__e=c,n.__u|=p?160:32,l[l.indexOf(c)]=null):(n.__e=e.__e,n.__k=e.__k),d.__e(D,n,e)}else l==null&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=pn(e.__e,n,e,r,o,l,s,p,u);(f=d.diffed)&&f(n)}function _n(t,n,e){n.__d=void 0;for(var r=0;r<e.length;r++)j(e[r],e[++r],e[++r]);d.__c&&d.__c(n,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(l){l.call(o)})}catch(l){d.__e(l,o.__v)}})}function pn(t,n,e,r,o,l,s,c,p){var u,f,_,m,i,h,k,v=e.props,a=n.props,y=n.type;if(y==="svg"?o="http://www.w3.org/2000/svg":y==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),l!=null){for(u=0;u<l.length;u++)if((i=l[u])&&"setAttribute"in i==!!y&&(y?i.localName===y:i.nodeType===3)){t=i,l[u]=null;break}}if(t==null){if(y===null)return document.createTextNode(a);t=document.createElementNS(o,y,a.is&&a),l=null,c=!1}if(y===null)v===a||c&&t.data===a||(t.data=a);else{if(l=l&&F.call(t.childNodes),v=e.props||S,!c&&l!=null)for(v={},u=0;u<t.attributes.length;u++)v[(i=t.attributes[u]).name]=i.value;for(u in v)if(i=v[u],u!="children"){if(u=="dangerouslySetInnerHTML")_=i;else if(u!=="key"&&!(u in a)){if(u=="value"&&"defaultValue"in a||u=="checked"&&"defaultChecked"in a)continue;M(t,u,null,i,o)}}for(u in a)i=a[u],u=="children"?m=i:u=="dangerouslySetInnerHTML"?f=i:u=="value"?h=i:u=="checked"?k=i:u==="key"||c&&typeof i!="function"||v[u]===i||M(t,u,i,v[u],o);if(f)c||_&&(f.__html===_.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),n.__k=[];else if(_&&(t.innerHTML=""),tn(t,B(m)?m:[m],n,e,r,y==="foreignObject"?"http://www.w3.org/1999/xhtml":o,l,s,l?l[0]:e.__k&&x(e,0),c,p),l!=null)for(u=l.length;u--;)l[u]!=null&&Z(l[u]);c||(u="value",h!==void 0&&(h!==t[u]||y==="progress"&&!h||y==="option"&&h!==v[u])&&M(t,u,h,v[u],o),u="checked",k!==void 0&&k!==t[u]&&M(t,u,k,v[u],o))}return t}function j(t,n,e){try{typeof t=="function"?t(n):t.current=n}catch(r){d.__e(r,e)}}function $(t,n,e){var r,o;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,n)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(l){d.__e(l,n)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&$(r[o],n,e||typeof t.type!="function");e||t.__e==null||Z(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function fn(t,n,e){return this.constructor(t,e)}function an(t,n,e){var r,o,l,s;d.__&&d.__(t,n),o=(r=typeof e=="function")?null:e&&e.__k||n.__k,l=[],s=[],V(n,t=(!r&&e||n).__k=un(N,null,[t]),o||S,S,n.namespaceURI,!r&&e?[e]:o?null:n.firstChild?F.call(n.childNodes):null,l,!r&&e?e:o?o.__e:n.firstChild,r,s),_n(l,t,s)}F=Y.slice,d={__e:function(t,n,e,r){for(var o,l,s;n=n.__;)if((o=n.__c)&&!o.__)try{if((l=o.constructor)&&l.getDerivedStateFromError!=null&&(o.setState(l.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(c){t=c}throw t}},Q=0,on=function(t){return t!=null&&t.constructor==null},L.prototype.setState=function(t,n){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof t=="function"&&(t=t(w({},e),this.props)),t&&w(e,t),t!=null&&this.__v&&(n&&this._sb.push(n),G(this))},L.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),G(this))},L.prototype.render=N,C=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A=function(t,n){return t.__v.__b-n.__v.__b},W.__r=0,O=0,H=K(!1),I=K(!0),ln=0;export{d as a,on as b,un as c,N as d,L as e,an as f};

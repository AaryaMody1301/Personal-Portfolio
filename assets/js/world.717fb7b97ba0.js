var bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ud=0,zh=1,Od=2;var io=1,Fd=2,$r=3,Ti=0,yn=1,jn=2,Ei=0,jr=1,kh=2,Vh=3,Hh=4,Bd=5;var tr=100,zd=101,kd=102,Vd=103,Hd=104,Gd=200,Wd=201,Xd=202,qd=203,Gh=204,Wh=205,Yd=206,Zd=207,Kd=208,Jd=209,$d=210,jd=211,Qd=212,ep=213,tp=214,ll=0,cl=1,hl=2,Or=3,ul=4,fl=5,dl=6,pl=7,Ul=0,np=1,ip=2,fi=0,Xh=1,qh=2,Yh=3,so=4,Zh=5,Kh=6,Jh=7,Ah="attached",sp="detached",$h=300,Es=301,nr=302,Ol=303,Fl=304,ir=306,ms=1e3,En=1001,Fr=1002,kt=1003,Bl=1004;var sr=1005;var yt=1006,Qr=1007;var Qn=1008;var In=1009,jh=1010,Qh=1011,ea=1012,zl=1013,di=1014,hn=1015,vn=1016,kl=1017,Vl=1018,ta=1020,eu=35902,tu=35899,nu=1021,iu=1022,Wn=1023,yi=1026,ws=1027,Hl=1028,Gl=1029,As=1030,Wl=1031;var Xl=1033,ro=33776,ao=33777,oo=33778,lo=33779,ql=35840,Yl=35841,Zl=35842,Kl=35843,Jl=36196,$l=37492,jl=37496,Ql=37488,ec=37489,co=37490,tc=37491,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,lc=37814,cc=37815,hc=37816,uc=37817,fc=37818,dc=37819,pc=37820,mc=37821,gc=36492,_c=36494,xc=36495,yc=36283,vc=36284,ho=36285,Sc=36286;var Gs=2300,Ws=2301,rl=2302,Rh=2303,Ch=2400,Ph=2401,Ih=2402,rp=2500;var su=0,uo=1,na=2,ap=3200;var fo=0,op=1,ji="",Bt="srgb",tn="srgb-linear",Ca="linear",lt="srgb";var al=7680;var lp=519,cp=512,hp=513,up=514,Mc=515,fp=516,dp=517,bc=518,pp=519,ru=35044;var au="300 es",li=2e3,Br=2001;function fg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function dg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){let s=zr("canvas");return s.style.display="block",s}var jf={},kr=null;function Pa(...s){let e="THREE."+s.shift();kr?kr("log",e,...s):console.log(e,...s)}function gp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=gp(s);let e="THREE."+s.shift();if(kr)kr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ze(...s){s=gp(s);let e="THREE."+s.shift();if(kr)kr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Hs(...s){let e=s.join(" ");e in jf||(jf[e]=!0,Pe(...s))}function _p(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xp={[ll]:cl,[hl]:dl,[ul]:pl,[Or]:fl,[cl]:ll,[dl]:hl,[pl]:ul,[fl]:Or},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=1234567,Aa=Math.PI/180,Xs=180/Math.PI;function ci(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function ou(s,e){return(s%e+e)%e}function pg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mg(s,e,t){return s!==e?(t-s)/(e-s):0}function Ra(s,e,t){return(1-t)*s+t*e}function gg(s,e,t,n){return Ra(s,e,1-Math.exp(-t*n))}function _g(s,e=1){return e-Math.abs(ou(s,e*2)-e)}function xg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sg(s,e){return s+Math.random()*(e-s)}function Mg(s){return s*(.5-Math.random())}function bg(s){s!==void 0&&(Qf=s);let e=Qf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tg(s){return s*Aa}function Eg(s){return s*Xs}function wg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Ag(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cg(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var po={DEG2RAD:Aa,RAD2DEG:Xs,generateUUID:ci,clamp:Ye,euclideanModulo:ou,mapLinear:pg,inverseLerp:mg,lerp:Ra,damp:gg,pingpong:_g,smoothstep:xg,smootherstep:yg,randInt:vg,randFloat:Sg,randFloatSpread:Mg,seededRandom:bg,degToRad:Tg,radToDeg:Eg,isPowerOfTwo:wg,ceilPowerOfTwo:Ag,floorPowerOfTwo:Rg,setQuaternionFromProperEuler:Cg,normalize:ht,denormalize:oi},Ie=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nh=new D,ed=new cn,Xe=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],A=i[4],y=i[7],M=i[2],T=i[5],w=i[8];return r[0]=a*_+o*S+l*M,r[3]=a*m+o*A+l*T,r[6]=a*p+o*y+l*w,r[1]=c*_+h*S+u*M,r[4]=c*m+h*A+u*T,r[7]=c*p+h*y+u*w,r[2]=f*_+d*S+g*M,r[5]=f*m+d*A+g*T,r[8]=f*p+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,t)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ih=new Xe,td=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pg(){let s={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(i.r=Gi(i.r),i.g=Gi(i.g),i.b=Gi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=Ur(i.r),i.g=Ur(i.g),i.b=Ur(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[tn]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}var $e=Pg();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Sr,ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=zr("canvas")),Sr.width=e.width,Sr.height=e.height;let i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ig=0,Vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(sh(i[a].image)):r.push(sh(i[a]))}else r=sh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ml.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Lg=0,rh=new D,Qt=class s extends hi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=En,i=En,r=yt,a=Qn,o=Wn,l=In,c=s.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=ci(),this.name="",this.source=new Vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=$h;Qt.DEFAULT_ANISOTROPY=1;var ut=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,y=(d+1)/2,M=(p+1)/2,T=(h+f)/4,w=(u+_)/4,x=(g+m)/4;return A>y&&A>M?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=T/n,r=w/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gl=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Qt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Vr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ia=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qe=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dg,e,Ng)}lookAt(e,t,n){let i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ls.crossVectors(n,zn),ls.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ls.crossVectors(n,zn)),ls.normalize(),No.crossVectors(zn,ls),i[0]=ls.x,i[4]=No.x,i[8]=zn.x,i[1]=ls.y,i[5]=No.y,i[9]=zn.y,i[2]=ls.z,i[6]=No.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],A=n[7],y=n[11],M=n[15],T=i[0],w=i[4],x=i[8],b=i[12],R=i[1],L=i[5],I=i[9],N=i[13],C=i[2],U=i[6],z=i[10],G=i[14],ee=i[3],X=i[7],K=i[11],te=i[15];return r[0]=a*T+o*R+l*C+c*ee,r[4]=a*w+o*L+l*U+c*X,r[8]=a*x+o*I+l*z+c*K,r[12]=a*b+o*N+l*G+c*te,r[1]=h*T+u*R+f*C+d*ee,r[5]=h*w+u*L+f*U+d*X,r[9]=h*x+u*I+f*z+d*K,r[13]=h*b+u*N+f*G+d*te,r[2]=g*T+_*R+m*C+p*ee,r[6]=g*w+_*L+m*U+p*X,r[10]=g*x+_*I+m*z+p*K,r[14]=g*b+_*N+m*G+p*te,r[3]=S*T+A*R+y*C+M*ee,r[7]=S*w+A*L+y*U+M*X,r[11]=S*x+A*I+y*z+M*K,r[15]=S*b+A*N+y*G+M*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*d-c*f,A=o*d-c*u,y=o*f-l*u,M=a*d-c*h,T=a*f-l*h,w=a*u-o*h;return t*(_*S-m*A+p*y)-n*(g*S-m*M+p*T)+i*(g*A-_*M+p*w)-r*(g*y-_*T+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=t*o-n*a,A=t*l-i*a,y=t*c-r*a,M=n*l-i*o,T=n*c-r*o,w=i*c-r*l,x=h*_-u*g,b=h*m-f*g,R=h*p-d*g,L=u*m-f*_,I=u*p-d*_,N=f*p-d*m,C=S*N-A*I+y*L+M*R-T*b+w*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(o*N-l*I+c*L)*U,e[1]=(i*I-n*N-r*L)*U,e[2]=(_*w-m*T+p*M)*U,e[3]=(f*T-u*w-d*M)*U,e[4]=(l*R-a*N-c*b)*U,e[5]=(t*N-i*R+r*b)*U,e[6]=(m*y-g*w-p*A)*U,e[7]=(h*w-f*y+d*A)*U,e[8]=(a*I-o*R+c*x)*U,e[9]=(n*R-t*I-r*x)*U,e[10]=(g*T-_*y+p*S)*U,e[11]=(u*y-h*T-d*S)*U,e[12]=(o*b-a*L-l*x)*U,e[13]=(t*L-n*b+i*x)*U,e[14]=(_*A-g*M-m*S)*U,e[15]=(h*M-u*A+f*S)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=l*c,A=l*h,y=l*u,M=n.x,T=n.y,w=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+y)*M,i[2]=(g-A)*M,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+p))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+A)*w,i[9]=(m-S)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Mr.set(i[0],i[1],i[2]).length(),o=Mr.set(i[4],i[5],i[6]).length(),l=Mr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),si.copy(this);let c=1/a,h=1/o,u=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===li)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Br)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=li,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===li)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Br)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new D,si=new qe,Dg=new D(0,0,0),Ng=new D(1,1,1),ls=new D,No=new D,zn=new D,id=new qe,sd=new cn,vi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var La=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ug=0,rd=new D,br=new cn,Oi=new qe,Uo=new D,ya=new D,Og=new D,Fg=new cn,ad=new D(1,0,0),od=new D(0,1,0),ld=new D(0,0,1),cd={type:"added"},Bg={type:"removed"},Tr={type:"childadded",child:null},ah={type:"childremoved",child:null},bt=class s extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new vi,n=new cn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Xe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(ya,Uo,this.up):Oi.lookAt(Uo,ya,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),br.setFromRotationMatrix(Oi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bg),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,Fg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function oh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=ou(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oh(a,r,e+1/3),this.g=oh(a,r,e),this.b=oh(a,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return $e.workingToColorSpace(ln.copy(this),e),Math.round(Ye(ln.r*255,0,255))*65536+Math.round(Ye(ln.g*255,0,255))*256+Math.round(Ye(ln.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(ln.copy(this),t);let n=ln.r,i=ln.g,r=ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Bt){$e.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,i=ln.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Oo);let n=Ra(cs.h,Oo.h,t),i=Ra(cs.s,Oo.s,t),r=Ra(cs.l,Oo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ue;Ue.NAMES=yp;var Da=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Na=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new D,Fi=new D,lh=new D,Bi=new D,Er=new D,wr=new D,hd=new D,ch=new D,hh=new D,uh=new D,fh=new ut,dh=new ut,ph=new ut,ps=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ri.subVectors(i,t),Fi.subVectors(n,t),lh.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Fi),l=ri.dot(lh),c=Fi.dot(Fi),h=Fi.dot(lh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return fh.setScalar(0),dh.setScalar(0),ph.setScalar(0),fh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(fh,r.x),a.addScaledVector(dh,r.y),a.addScaledVector(ph,r.z),a}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Fi.subVectors(e,t),ri.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ri.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Er.subVectors(i,n),wr.subVectors(r,n),ch.subVectors(e,n);let l=Er.dot(ch),c=wr.dot(ch);if(l<=0&&c<=0)return t.copy(n);hh.subVectors(e,i);let h=Er.dot(hh),u=wr.dot(hh);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Er,a);uh.subVectors(e,r);let d=Er.dot(uh),g=wr.dot(uh);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(wr,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return hd.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(hd,o);let p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Er,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ai):ai.fromBufferAttribute(r,a),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Bo.subVectors(this.max,va),Ar.subVectors(e.a,va),Rr.subVectors(e.b,va),Cr.subVectors(e.c,va),hs.subVectors(Rr,Ar),us.subVectors(Cr,Rr),Bs.subVectors(Ar,Cr);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Bs.z,Bs.y,hs.z,0,-hs.x,us.z,0,-us.x,Bs.z,0,-Bs.x,-hs.y,hs.x,0,-us.y,us.x,0,-Bs.y,Bs.x,0];return!mh(t,Ar,Rr,Cr,Bo)||(t=[1,0,0,0,1,0,0,0,1],!mh(t,Ar,Rr,Cr,Bo))?!1:(zo.crossVectors(hs,us),t=[zo.x,zo.y,zo.z],mh(t,Ar,Rr,Cr,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new D,new D,new D,new D,new D,new D,new D,new D],ai=new D,Fo=new Hn,Ar=new D,Rr=new D,Cr=new D,hs=new D,us=new D,Bs=new D,va=new D,Bo=new D,zo=new D,zs=new D;function mh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zs.fromArray(s,r);let o=i.x*Math.abs(zs.x)+i.y*Math.abs(zs.y)+i.z*Math.abs(zs.z),l=e.dot(zs),c=t.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Hi=kg();function kg(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Vg(s){Math.abs(s)>65504&&Pe("DataUtils.toHalfFloat(): Value out of range."),s=Ye(s,-65504,65504),Hi.floatView[0]=s;let e=Hi.uint32View[0],t=e>>23&511;return Hi.baseTable[t]+((e&8388607)>>Hi.shiftTable[t])}function Hg(s){let e=s>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[e]+(s&1023)]+Hi.exponentTable[e],Hi.floatView[0]}var gs=class{static toHalfFloat(e){return Vg(e)}static fromHalfFloat(e){return Hg(e)}},Wt=new D,ko=new Ie,Gg=0,zt=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ua=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Oa=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wg=new Hn,Sa=new D,gh=new D,An=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(gh)),this.expandByPoint(Sa.copy(e.center).sub(gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xg=0,$n=new qe,_h=new bt,Pr=new D,kn=new Hn,Ma=new Hn,$t=new D,wt=class s extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?Oa:Ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ma.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(kn.min,Ma.min),kn.expandByPoint($t),$t.addVectors(kn.max,Ma.max),kn.expandByPoint($t)):(kn.expandByPoint(Ma.min),kn.expandByPoint(Ma.max))}kn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(Pr.fromBufferAttribute(e,c),$t.add(Pr)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,h=new D,u=new D,f=new Ie,d=new Ie,g=new Ie,_=new D,m=new D;function p(x,b,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,x),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(_),o[b].add(_),o[R].add(_),l[x].add(m),l[b].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,b=S.length;x<b;++x){let R=S[x],L=R.start,I=R.count;for(let N=L,C=L+I;N<C;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let A=new D,y=new D,M=new D,T=new D;function w(x){M.fromBufferAttribute(i,x),T.copy(M);let b=o[x];A.copy(b),A.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(T,b);let L=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,b=S.length;x<b;++x){let R=S[x],L=R.start,I=R.count;for(let N=L,C=L+I;N<C;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new zt(f,h,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_n=new D,Wr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xh=new D,qg=new D,Yg=new Xe,Vn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xh.subVectors(n,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yg.getNormalMatrix(e),i=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zg=0,xn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=jr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=al,this.stencilZFail=al,this.stencilZPass=al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ki=new D,yh=new D,Vo=new D,Ho=new D,Wi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yh.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Ho.copy(this.origin).sub(yh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vo),o=Ho.dot(this.direction),l=-Ho.dot(Vo),c=Ho.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yh).addScaledVector(Vo,f),d}intersectSphere(e,t){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),i=ki.dot(ki)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,y=Math.abs(l),M=Math.abs(c),T=Math.abs(h),w,x,b,R,L,I,N,C,U,z,G,ee;if(y>=M&&y>=T?(b=l,I=u,U=g,ee=p,l>=0?(w=c,x=h,R=f,L=d,N=_,C=m,z=S,G=A):(w=h,x=c,R=d,L=f,N=m,C=_,z=A,G=S)):M>=T?(b=c,I=f,U=_,ee=S,c>=0?(w=h,x=l,R=d,L=u,N=m,C=g,z=A,G=p):(w=l,x=h,R=u,L=d,N=g,C=m,z=p,G=A)):(b=h,I=d,U=m,ee=A,h>=0?(w=l,x=c,R=u,L=f,N=g,C=_,z=p,G=S):(w=c,x=l,R=f,L=u,N=_,C=g,z=S,G=p)),b===0)return null;let X=w/b,K=x/b,te=1/b,ae=R-X*I,oe=L-K*I,Te=N-X*U,ke=C-K*U,it=z-X*ee,Y=G-K*ee,ne=it*ke-Y*Te,ye=ae*Y-oe*it,Re=Te*oe-ke*ae;if(i){if(ne<0||ye<0||Re<0)return null}else if((ne<0||ye<0||Re<0)&&(ne>0||ye>0||Re>0))return null;let ue=ne+ye+Re;if(ue===0)return null;let Oe=te*(ne*I+ye*U+Re*ee);return(ue>0?Oe<0:Oe>0)?null:this.at(Oe/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ud=new qe,ks=new Wi,Go=new An,fd=new D,Wo=new D,Xo=new D,qo=new D,vh=new D,Yo=new D,dd=new D,Zo=new D,Xt=class extends bt{constructor(e=new wt,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vh.fromBufferAttribute(u,e),a?Yo.addScaledVector(vh,h):Yo.addScaledVector(vh.sub(t),h))}t.add(Yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Go.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Go,fd)===null||ks.origin.distanceToSquared(fd)>(e.far-e.near)**2))&&(ud.copy(r).invert(),ks.copy(e.ray).applyMatrix4(ud),!(n.boundingBox!==null&&ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,M=A;y<M;y+=3){let T=o.getX(y),w=o.getX(y+1),x=o.getX(y+2);i=Ko(this,p,e,n,c,h,u,T,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);i=Ko(this,a,e,n,c,h,u,S,A,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,M=A;y<M;y+=3){let T=y,w=y+1,x=y+2;i=Ko(this,p,e,n,c,h,u,T,w,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,A=m+1,y=m+2;i=Ko(this,a,e,n,c,h,u,S,A,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Kg(s,e,t,n,i,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Ti,o),l===null)return null;Zo.copy(o),Zo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zo);return c<t.near||c>t.far?null:{distance:c,point:Zo.clone(),object:s}}function Ko(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Wo),s.getVertexPosition(l,Xo),s.getVertexPosition(c,qo);let h=Kg(s,e,t,n,Wo,Xo,qo,dd);if(h){let u=new D;ps.getBarycoord(dd,Wo,Xo,qo,u),i&&(h.uv=ps.getInterpolatedAttribute(i,o,l,c,u,new Ie)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,l,c,u,new Ie)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};ps.getNormal(Wo,Xo,qo,f.normal),h.face=f,h.barycoord=u}return h}var ba=new ut,pd=new ut,md=new ut,Jg=new ut,gd=new qe,Jo=new D,Sh=new An,_d=new qe,Mh=new Wi,Fa=class extends Xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sh.copy(this.boundingSphere),Sh.applyMatrix4(i),e.ray.intersectsSphere(Sh)!==!1&&(_d.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&Mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;pd.fromBufferAttribute(i.attributes.skinIndex,e),md.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ba.copy(t),t.set(0,0,0,0)):(ba.set(...t,1),t.set(0,0,0)),ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=md.getComponent(r);if(a!==0){let o=pd.getComponent(r);gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Jg.copy(ba).applyMatrix4(gd),a)}}return t.isVector4&&(t.w=ba.w),t.applyMatrix4(this.bindMatrixInverse)}},Xr=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends Qt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=kt,h=kt,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xd=new qe,$g=new qe,Ba=class s{constructor(e=[],t=[]){this.uuid=ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:$g;xd.multiplyMatrices(o,t[r]),xd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,Wn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new Xr),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Xi=class extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ir=new qe,yd=new qe,$o=[],vd=new Hn,jg=new qe,Ta=new Xt,Ea=new An,za=class extends Xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),vd.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ir),Ea.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ir),yd.multiplyMatrices(n,Ir),Ta.matrixWorld=yd,Ta.raycast(e,$o);for(let a=0,o=$o.length;a<o;a++){let l=$o[a];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(i*this.count),i,this.count,Hl,hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new An,Qg=new Ie(.5,.5),jo=new D,qr=class{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],A=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-a,d-h,p-g,M-S).normalize(),i[1].setComponents(c+a,d+h,p+g,M+S).normalize(),i[2].setComponents(c+o,d+u,p+_,M+A).normalize(),i[3].setComponents(c-o,d-u,p-_,M-A).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,M-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,M-y).normalize(),t===li)i[5].setComponents(c+l,d+f,p+m,M+y).normalize();else if(t===Br)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Qg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(jo.x=i.normal.x>0?e.max.x:e.min.x,jo.y=i.normal.y>0?e.max.y:e.min.y,jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xl=new D,yl=new D,Sd=new qe,wa=new Wi,Qo=new An,bh=new D,Md=new D,qi=class extends bt{constructor(e=new wt,t=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xl.fromBufferAttribute(t,i-1),yl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(yl);e.setAttribute("lineDistance",new ct(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;Sd.copy(i).invert(),wa.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let p=h.getX(_),S=h.getX(_+1),A=el(this,e,wa,l,p,S,_);A&&t.push(A)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=el(this,e,wa,l,_,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){let p=el(this,e,wa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=el(this,e,wa,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function el(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(xl.fromBufferAttribute(o,i),yl.fromBufferAttribute(o,r),t.distanceSqToSegment(xl,yl,bh,Md)>n)return;bh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(bh);if(!(c<e.near||c>e.far))return{distance:c,point:Md.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var bd=new D,Td=new D,ka=class extends qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bd.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bd.distanceTo(Td);e.setAttribute("lineDistance",new ct(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Va=class extends qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ed=new qe,Lh=new Wi,tl=new An,nl=new D,Ys=class extends bt{constructor(e=new wt,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(i),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;Ed.copy(i).invert(),Lh.copy(e.ray).applyMatrix4(Ed);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);nl.fromBufferAttribute(u,m),wd(nl,m,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,_=d;g<_;g++)nl.fromBufferAttribute(u,g),wd(nl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wd(s,e,t,n,i,r,a){let o=Lh.distanceSqToPoint(s);if(o<t){let l=new D;Lh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ha=class extends Qt{constructor(e=[],t=Es,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ys=class extends Qt{constructor(e,t,n=di,i,r,a,o=kt,l=kt,c,h=yi,u=1){if(h!==yi&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vl=class extends ys{constructor(e,t=di,n=Es,i,r,a=kt,o=kt,l,c=yi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ga=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vs=class s extends wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function g(_,m,p,S,A,y,M,T,w,x,b){let R=y/w,L=M/x,I=y/2,N=M/2,C=T/2,U=w+1,z=x+1,G=0,ee=0,X=new D;for(let K=0;K<z;K++){let te=K*L-N;for(let ae=0;ae<U;ae++){let oe=ae*R-I;X[_]=oe*S,X[m]=te*A,X[p]=C,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(ae/w),u.push(1-K/x),G+=1}}for(let K=0;K<x;K++)for(let te=0;te<w;te++){let ae=f+te+U*K,oe=f+te+U*(K+1),Te=f+(te+1)+U*(K+1),ke=f+(te+1)+U*K;l.push(ae,oe,ke),l.push(oe,Te,ke),ee+=6}o.addGroup(d,ee,b),d+=ee,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zs=class s extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new Ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ks=class s extends wt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function S(){let y=new D,M=new D,T=0,w=(t-e)/n;for(let x=0;x<=r;x++){let b=[],R=x/r,L=R*(t-e)+e;for(let I=0;I<=i;I++){let N=I/i,C=N*l+o,U=Math.sin(C),z=Math.cos(C);M.x=L*U,M.y=-R*n+m,M.z=L*z,u.push(M.x,M.y,M.z),y.set(U,w,z).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-R),b.push(g++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<r;b++){let R=_[b][x],L=_[b+1][x],I=_[b+1][x+1],N=_[b][x+1];(e>0||b!==0)&&(h.push(R,L,N),T+=3),(t>0||b!==r-1)&&(h.push(L,I,N),T+=3)}c.addGroup(p,T,0),p+=T}function A(y){let M=g,T=new Ie,w=new D,x=0,b=y===!0?e:t,R=y===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),g++;let L=g;for(let I=0;I<=i;I++){let C=I/i*l+o,U=Math.cos(C),z=Math.sin(C);w.x=b*z,w.y=m*R,w.z=b*U,u.push(w.x,w.y,w.z),f.push(0,R,0),T.x=U*.5+.5,T.y=z*.5*R+.5,d.push(T.x,T.y),g++}for(let I=0;I<i;I++){let N=M+I,C=L+I;y===!0?h.push(C,C+1,N):h.push(C+1,C,N),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yr=class s extends Ks{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sl=class s extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let A=new D,y=new D,M=new D;for(let T=0;T<t.length;T+=3)d(t[T+0],A),d(t[T+1],y),d(t[T+2],M),l(A,y,M,S)}function l(S,A,y,M){let T=M+1,w=[];for(let x=0;x<=T;x++){w[x]=[];let b=S.clone().lerp(y,x/T),R=A.clone().lerp(y,x/T),L=T-x;for(let I=0;I<=L;I++)I===0&&x===T?w[x][I]=b:w[x][I]=b.clone().lerp(R,I/L)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){let R=Math.floor(b/2);b%2===0?(f(w[x][R+1]),f(w[x+1][R]),f(w[x][R])):(f(w[x][R+1]),f(w[x+1][R+1]),f(w[x+1][R]))}}function c(S){let A=new D;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(S),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let S=new D;for(let A=0;A<r.length;A+=3){S.x=r[A+0],S.y=r[A+1],S.z=r[A+2];let y=m(S)/2/Math.PI+.5,M=p(S)/Math.PI+.5;a.push(y,1-M)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){let A=a[S+0],y=a[S+2],M=a[S+4],T=Math.max(A,y,M),w=Math.min(A,y,M);T>.9&&w<.1&&(A<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,A){let y=S*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function g(){let S=new D,A=new D,y=new D,M=new D,T=new Ie,w=new Ie,x=new Ie;for(let b=0,R=0;b<r.length;b+=9,R+=6){S.set(r[b+0],r[b+1],r[b+2]),A.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),T.set(a[R+0],a[R+1]),w.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),M.copy(S).add(A).add(y).divideScalar(3);let L=m(M);_(T,R+0,S,L),_(w,R+2,A,L),_(x,R+4,y,L)}}function _(S,A,y,M){M<0&&S.x===1&&(a[A]=S.x-1),y.x===0&&y.z===0&&(a[A]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},Js=class s extends Sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Ml=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ie:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],a=[],o=new D,l=new qe;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ye(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Ye(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function e_(s,e){let t=1-s;return t*t*e}function t_(s,e){return 2*(1-s)*s*e}function n_(s,e){return s*s*e}function Th(s,e,t,n){return e_(s,e)+t_(s,t)+n_(s,n)}var Wa=class extends Ml{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Th(e,i.x,r.x,a.x),Th(e,i.y,r.y,a.y),Th(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Xa=class s extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*f-a;for(let A=0;A<c;A++){let y=A*u-r;g.push(y,-S,0),_.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let A=S+c*p,y=S+c*(p+1),M=S+1+c*(p+1),T=S+1+c*p;d.push(A,y,T),d.push(y,M,T)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var $s=class s extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,y=a+A*o,M=e*Math.cos(y),T=Math.sqrt(e*e-M*M),w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let b=x/t,R=i+b*r;u.x=-T*Math.cos(R),u.y=M,u.z=T*Math.sin(R),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+w,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let A=h[p][S+1],y=h[p][S],M=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&d.push(A,y,T),(p!==n-1||l<Math.PI)&&d.push(y,M,T)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qa=class s extends wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new D,d=new D,g=new D;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let p=0;p<=i;p++){let S=p/i*r;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(p/i),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let p=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,A=(i+1)*(_-1)+m,y=(i+1)*_+m;l.push(p,S,y),l.push(S,A,y)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ad(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ad(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function un(s){let e={};for(let t=0;t<s.length;t++){let n=rr(s[t]);for(let i in n)e[i]=n[i]}return e}function Ad(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function i_(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function lu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var vp={clone:rr,merge:un},s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ie().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bl=class extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Si=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Zr=class extends xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tl=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ya=class extends qs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ds(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ol(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function a_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function o_(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,o=2*t-n;break;case Ih:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:a=e,l=2*n-t;break;case Ih:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+S*a[c+M]+A*a[l+M]+y*a[u+M];return r}},Al=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Rl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Cl=class extends Mi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(i-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let f=o*2,d=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=d*f+g*2,S=u[p],A=u[p+1],y=e*f+g*2,M=h[y],T=h[y+1],w=c_(n,t,S,M,i);r[g]=Sp(w,_,A,T,m)}return r}};function Sp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function l_(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function c_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Sp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=l_(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Pn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ol(e.settings)&&(n.settings={inTangents:ds(e.settings.inTangents,Array),outTangents:ds(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case rl:t=this.InterpolantFactoryMethodSmooth;break;case Rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return rl;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ol(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&dg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===rl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ol(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Cd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ws;var Yi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Gs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Pn{constructor(e,t,n,i){super(e,t,n,i)}};Za.prototype.ValueTypeName="color";var Zi=class extends Pn{constructor(e,t,n,i){super(e,t,n,i)}};Zi.prototype.ValueTypeName="number";var Pl=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ki=class extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};Ki.prototype.ValueTypeName="quaternion";Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Pn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Gs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Pn{constructor(e,t,n,i){super(e,t,n,i)}};Ss.prototype.ValueTypeName="vector";var Ka=class{constructor(e="",t=-1,n=[],i=rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ci(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(u_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=a_(l);l=Rd(l,1,h),c=Rd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function h_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Za;case"quaternion":return Ki;case"bool":case"boolean":return Yi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function u_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=h_(s.type);if(s.times===void 0){let n=[],i=[];o_(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ol(s.settings)&&(t.settings={inTangents:ds(s.settings.inTangents,Float32Array),outTangents:ds(s.settings.outTangents,Float32Array)}),t}var xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Pd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Pd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Il=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new Il,ui=class{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},js=class extends ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:i});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Vi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){S();function S(){u.read().then(({done:A,value:y})=>{if(A)p.close();else{_+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,w=h.length;T<w;T++){let x=h[T];x.onProgress&&x.onProgress(M)}p.enqueue(y),S()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Dh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{xi.add(`file:${e}`,c);let h=Vi[e];delete Vi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Lr=new WeakMap,Ll=class extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Lr.get(a);u===void 0&&(u=[],Lr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=zr("img");function l(){h(),t&&t(this);let u=Lr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Lr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),xi.remove(`image:${e}`);let f=Lr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ja=class extends ui{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new _s,o=new js(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):ze(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new _s;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:En,e.wrapT=t.wrapT!==void 0?t.wrapT:En,e.magFilter=t.magFilter!==void 0?t.magFilter:yt,e.minFilter=t.minFilter!==void 0?t.minFilter:yt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Qn),t.mipmapCount===1&&(e.minFilter=yt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},$a=class extends ui{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,a=new Ll(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Qs=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ja=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eh=new qe,Id=new D,Ld=new D,Kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},il=new D,sl=new cn,_i=new D,Qa=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(il,sl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,sl,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(il,sl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,sl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new D,Dd=new Ie,Nd=new Ie,jt=class extends Qa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Nd),t.subVectors(Nd,Dd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nh=class extends Kr{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},eo=class extends Qs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Uh=class extends Kr{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bi=class extends Qa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Kr{constructor(){super(new bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wh=new WeakMap,to=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{wh.has(a)===!0?(i&&i(wh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return xi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wh.set(l,c),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Dr=-90,Nr=1,Dl=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(Dr,Nr,e,t);i.layers=this.layers,this.add(i);let r=new jt(Dr,Nr,e,t);r.layers=this.layers,this.add(r);let a=new jt(Dr,Nr,e,t);a.layers=this.layers,this.add(a);let o=new jt(Dr,Nr,e,t);o.layers=this.layers,this.add(o);let l=new jt(Dr,Nr,e,t);l.layers=this.layers,this.add(l);let c=new jt(Dr,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nl=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cu="\\[\\]\\.:\\/",f_=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",d_="[^"+cu.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",hu),m_=/(WCOD+)?/.source.replace("WCOD",d_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),x_=new RegExp("^"+p_+m_+g_+__+"$"),y_=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(f_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);y_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Fh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vb=new Float32Array(1);var Jr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bh=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};var no=class extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function uu(s,e,t,n){let i=v_(n);switch(t){case nu:return s*e;case Hl:return s*e/i.components*i.byteLength;case Gl:return s*e/i.components*i.byteLength;case As:return s*e*2/i.components*i.byteLength;case Wl:return s*e*2/i.components*i.byteLength;case iu:return s*e*3/i.components*i.byteLength;case Wn:return s*e*4/i.components*i.byteLength;case Xl:return s*e*4/i.components*i.byteLength;case ro:case ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(s,16)*Math.max(e,8)/4;case ql:case Zl:return Math.max(s,8)*Math.max(e,8)/2;case Jl:case $l:case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case co:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gc:case _c:case xc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yc:case vc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ho:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v_(s){switch(s){case In:case jh:return{byteLength:1,components:1};case ea:case Qh:case vn:return{byteLength:2,components:1};case kl:case Vl:return{byteLength:2,components:4};case di:case zl:case hn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function M_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",e0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,m0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,g0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ix=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:b_,alphahash_pars_fragment:T_,alphamap_fragment:E_,alphamap_pars_fragment:w_,alphatest_fragment:A_,alphatest_pars_fragment:R_,aomap_fragment:C_,aomap_pars_fragment:P_,batching_pars_vertex:I_,batching_vertex:L_,begin_vertex:D_,beginnormal_vertex:N_,bsdfs:U_,iridescence_fragment:O_,bumpmap_pars_fragment:F_,clipping_planes_fragment:B_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:V_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:X_,common:q_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:K_,displacementmap_vertex:J_,emissivemap_fragment:$_,emissivemap_pars_fragment:j_,colorspace_fragment:Q_,colorspace_pars_fragment:e0,envmap_fragment:t0,envmap_common_pars_fragment:n0,envmap_pars_fragment:i0,envmap_pars_vertex:s0,envmap_physical_pars_fragment:m0,envmap_vertex:r0,fog_vertex:a0,fog_pars_vertex:o0,fog_fragment:l0,fog_pars_fragment:c0,gradientmap_pars_fragment:h0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:d0,lights_pars_begin:p0,lights_toon_fragment:g0,lights_toon_pars_fragment:_0,lights_phong_fragment:x0,lights_phong_pars_fragment:y0,lights_physical_fragment:v0,lights_physical_pars_fragment:S0,lights_fragment_begin:M0,lights_fragment_maps:b0,lights_fragment_end:T0,lightprobes_pars_fragment:E0,logdepthbuf_fragment:w0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:R0,logdepthbuf_vertex:C0,map_fragment:P0,map_pars_fragment:I0,map_particle_fragment:L0,map_particle_pars_fragment:D0,metalnessmap_fragment:N0,metalnessmap_pars_fragment:U0,morphinstance_vertex:O0,morphcolor_vertex:F0,morphnormal_vertex:B0,morphtarget_pars_vertex:z0,morphtarget_vertex:k0,normal_fragment_begin:V0,normal_fragment_maps:H0,normal_pars_fragment:G0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:J0,opaque_fragment:$0,packing:j0,premultiplied_alpha_fragment:Q0,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:sx,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:ax,shadowmap_vertex:ox,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:hx,skinning_vertex:ux,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:_x,transmission_pars_fragment:xx,uv_pars_fragment:yx,uv_pars_vertex:vx,uv_vertex:Sx,worldpos_vertex:Mx,background_vert:bx,background_frag:Tx,backgroundCube_vert:Ex,backgroundCube_frag:wx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distance_vert:Ix,distance_frag:Lx,equirect_vert:Dx,equirect_frag:Nx,linedashed_vert:Ux,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:Bx,meshlambert_vert:zx,meshlambert_frag:kx,meshmatcap_vert:Vx,meshmatcap_frag:Hx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:Zx,meshtoon_vert:Kx,meshtoon_frag:Jx,points_vert:$x,points_frag:jx,shadow_vert:Qx,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},ge={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ai={basic:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:un([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:un([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:un([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:un([ge.points,ge.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:un([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:un([ge.common,ge.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:un([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:un([ge.sprite,ge.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:un([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:un([ge.lights,ge.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ai.physical={uniforms:un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Tc={r:0,b:0,g:0},iy=new qe,Xp=new Xe;Xp.set(-1,0,0,0,1,0,0,0,1);function sy(s,e,t,n,i,r){let a=new Ue(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=e.get(A,y)}return A}function g(S){let A=!1,y=d(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===ir)?(c===void 0&&(c=new Xt(new vs(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:rr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xp),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==lt,(h!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xt(new Xa(2,2),new Gn({name:"BackgroundMaterial",uniforms:rr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Tc,lu(s)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function ry(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(L,I,N,C,U){let z=!1,G=u(L,C,N,I);r!==G&&(r=G,c(r.object)),z=d(L,C,N,U),z&&g(L,C,N,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(L,I,N,C),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,I,N,C){let U=C.wireframe===!0,z=n[I.id];z===void 0&&(z={},n[I.id]=z);let G=L.isInstancedMesh===!0?L.id:0,ee=z[G];ee===void 0&&(ee={},z[G]=ee);let X=ee[N.id];X===void 0&&(X={},ee[N.id]=X);let K=X[U];return K===void 0&&(K=f(l()),X[U]=K),K}function f(L){let I=[],N=[],C=[];for(let U=0;U<t;U++)I[U]=0,N[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,I,N,C){let U=r.attributes,z=I.attributes,G=0,ee=N.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=U[X],ae=z[X];if(ae===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),te===void 0||te.attribute!==ae||ae&&te.data!==ae.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function g(L,I,N,C){let U={},z=I.attributes,G=0,ee=N.getAttributes();for(let X in ee)if(ee[X].location>=0){let te=z[X];te===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));let ae={};ae.attribute=te,te&&te.data&&(ae.data=te.data),U[X]=ae,G++}r.attributes=U,r.attributesNum=G,r.index=C}function _(){let L=r.newAttributes;for(let I=0,N=L.length;I<N;I++)L[I]=0}function m(L){p(L,0)}function p(L,I){let N=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;N[L]=1,C[L]===0&&(s.enableVertexAttribArray(L),C[L]=1),U[L]!==I&&(s.vertexAttribDivisor(L,I),U[L]=I)}function S(){let L=r.newAttributes,I=r.enabledAttributes;for(let N=0,C=I.length;N<C;N++)I[N]!==L[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function A(L,I,N,C,U,z,G){G===!0?s.vertexAttribIPointer(L,I,N,U,z):s.vertexAttribPointer(L,I,N,C,U,z)}function y(L,I,N,C){_();let U=C.attributes,z=N.getAttributes(),G=I.defaultAttributeValues;for(let ee in z){let X=z[ee];if(X.location>=0){let K=U[ee];if(K===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let te=K.normalized,ae=K.itemSize,oe=e.get(K);if(oe===void 0)continue;let Te=oe.buffer,ke=oe.type,it=oe.bytesPerElement,Y=ke===s.INT||ke===s.UNSIGNED_INT||K.gpuType===zl;if(K.isInterleavedBufferAttribute){let ne=K.data,ye=ne.stride,Re=K.offset;if(ne.isInstancedInterleavedBuffer){for(let ue=0;ue<X.locationSize;ue++)p(X.location+ue,ne.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<X.locationSize;ue++)m(X.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ue=0;ue<X.locationSize;ue++)A(X.location+ue,ae/X.locationSize,ke,te,ye*it,(Re+ae/X.locationSize*ue)*it,Y)}else{if(K.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)p(X.location+ne,K.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ne=0;ne<X.locationSize;ne++)m(X.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ne=0;ne<X.locationSize;ne++)A(X.location+ne,ae/X.locationSize,ke,te,ae*it,ae/X.locationSize*ne*it,Y)}}else if(G!==void 0){let te=G[ee];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(X.location,te);break;case 3:s.vertexAttrib3fv(X.location,te);break;case 4:s.vertexAttrib4fv(X.location,te);break;default:s.vertexAttrib1fv(X.location,te)}}}}S()}function M(){b();for(let L in n){let I=n[L];for(let N in I){let C=I[N];for(let U in C){let z=C[U];for(let G in z)h(z[G].object),delete z[G];delete C[U]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let I=n[L.id];for(let N in I){let C=I[N];for(let U in C){let z=C[U];for(let G in z)h(z[G].object),delete z[G];delete C[U]}}delete n[L.id]}function w(L){for(let I in n){let N=n[I];for(let C in N){let U=N[C];if(U[L.id]===void 0)continue;let z=U[L.id];for(let G in z)h(z[G].object),delete z[G];delete U[L.id]}}}function x(L){for(let I in n){let N=n[I],C=L.isInstancedMesh===!0?L.id:0,U=N[C];if(U!==void 0){for(let z in U){let G=U[z];for(let ee in G)h(G[ee].object),delete G[ee];delete U[z]}delete N[C],Object.keys(N).length===0&&delete n[I]}}}function b(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function ay(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function oy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Wn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==In&&w!==hn&&!x&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:M,samples:T}}function ly(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Vn,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,y=p.clippingState||null;l.value=y,y=h(g,f,A,d);for(let M=0;M!==A;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=d;A!==_;++A,y+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var sa=4,cy=6,hy=20,uy=256,mo=new bi,bp=new Ue,fu=null,du=0,pu=0,mu=!1,fy=new D,ar=new D,wc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=fy}=r;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,du,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:vn,format:Wn,colorSpace:tn,depthBuffer:!1},i=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dy(r)),this._blurMaterial=my(r,e,t),this._ggxMaterial=py(r,e,t)}return i}_compileMaterial(e){let t=new Xt(new wt,e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,n,i,r){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(bp),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new vs,new Rn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(bp),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let M=this._cubeSize;ia(i,y*M,A>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(_,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Es||e.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-sa?n-g+sa:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,ia(r,m,p,3*_,2*_),i.setRenderTarget(r),i.render(o,mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ia(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,mo)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-sa?i-this._lodMax+sa:0),f=4*(this._cubeSize-h);ia(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,mo)}};function dy(s){let e=[],t=[],n=s,i=s-sa+1+cy;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=new Float32Array(d*f*u),_=new Float32Array(d*f*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,A=p>2?0:-1,y=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(y,d*f*p);for(let M=0;M<f;M++){let T=h[M*2]*2-1,w=h[M*2+1]*2-1;p===0?ar.set(1,w,T):p===1?ar.set(-T,1,-w):p===2?ar.set(-T,w,1):p===3?ar.set(-1,w,-T):p===4?ar.set(-T,-1,w):ar.set(T,w,-1),ar.toArray(_,(p*f+M)*d)}}let m=new wt;m.setAttribute("position",new zt(g,d)),m.setAttribute("outputDirection",new zt(_,d)),t.push(new Xt(m,null)),n>sa&&n--}return{lodMeshes:t,sizeLods:e}}function Tp(s,e,t){let n=new wn(s,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function py(s,e,t){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function my(s,e,t){return new Gn({name:"SphericalGaussianBlur",defines:{SAMPLES:hy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ep(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function wp(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ac=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new vs(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Ei});r.uniforms.tEquirect.value=t;let a=new Xt(i,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=yt),new Dl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function gy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ol||d===Fl)if(e.has(f)){let g=e.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let _=new Ac(g.height);return _.fromEquirectangularTexture(s,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Ol||d===Fl,_=d===Es||d===nr;if(g||_){let m=t.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new wc(s)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new wc(s)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Ol?f.mapping=Es:d===Fl&&(f.mapping=nr),f}function l(f){let d=0,g=6;for(let _=0;_<g;_++)f[_]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function _y(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Hs("WebGLRenderer: "+n+" extension not supported."),i}}}function xy(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let A=0,y=S.length;A<y;A+=3){let M=S[A+0],T=S[A+1],w=S[A+2];f.push(M,T,T,w,w,M)}}else{let S=g.array;_=g.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let M=A+0,T=A+1,w=A+2;f.push(M,T,T,w,w,M)}}let m=new(g.count>=65535?Oa:Ua)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function yy(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sy(s,e,t){let n=new WeakMap,i=new ut;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;d===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let y=o.attributes.position.count*A,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*M*4*u),w=new Ia(T,y,M,u);w.type=hn,w.needsUpdate=!0;let x=A*4;for(let R=0;R<u;R++){let L=m[R],I=p[R],N=S[R],C=y*M*4*R;for(let U=0;U<L.count;U++){let z=U*x;d===!0&&(i.fromBufferAttribute(L,U),T[C+z+0]=i.x,T[C+z+1]=i.y,T[C+z+2]=i.z,T[C+z+3]=0),g===!0&&(i.fromBufferAttribute(I,U),T[C+z+4]=i.x,T[C+z+5]=i.y,T[C+z+6]=i.z,T[C+z+7]=0),_===!0&&(i.fromBufferAttribute(N,U),T[C+z+8]=i.x,T[C+z+9]=i.y,T[C+z+10]=i.z,T[C+z+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Ie(y,M)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function My(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var by={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[so]:"ACES_FILMIC_TONE_MAPPING",[Kh]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[Zh]:"CUSTOM_TONE_MAPPING"};function Ty(s,e,t,n,i,r){let a=new wn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new wt;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));let h=new bl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xt(c,h),f=new bi(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,S=[],A=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let T=0;T<S.length;T++){let w=S[T];w.setSize&&w.setSize(y,M)}},this.setEffects=function(y){S=y,A=S.length>0&&S[0].isRenderPass===!0;let M=a.width,T=a.height;S.length>0&&o===null&&(o=new wn(M,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(M,T,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let x=S[w];x.setSize&&x.setSize(M,T)}},this.begin=function(y,M){if(_||y.toneMapping===fi&&S.length===0)return!1;if(p=M,M!==null){let T=M.width,w=M.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=fi,!0},this.hasRenderPass=function(){return A},this.end=function(y,M){y.toneMapping=m,_=!0;let T=a,w=o;for(let x=0;x<S.length;x++){let b=S[x];b.enabled!==!1&&(b.render(y,w,T,M),b.needsSwap!==!1&&(T=w,w=w===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},$e.getTransfer(d)===lt&&(h.defines.SRGB_TRANSFER="");let x=by[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(u,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var qp=new Qt,xu=new ys(1,1),Yp=new Ia,Zp=new _l,Kp=new Ha,Ap=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function aa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ap[i];if(r===void 0&&(r=new Float32Array(i),Ap[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pc(s,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ey(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function Ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function Ry(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function Cy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ip.set(n),s.uniformMatrix2fv(this.addr,!1,Ip),Yt(t,n)}}function Py(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Pp.set(n),s.uniformMatrix3fv(this.addr,!1,Pp),Yt(t,n)}}function Iy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Cp.set(n),s.uniformMatrix4fv(this.addr,!1,Cp),Yt(t,n)}}function Ly(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Dy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function Ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function Uy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function Oy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Fy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function By(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function zy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function ky(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xu.compareFunction=t.isReversedDepthBuffer()?bc:Mc,r=xu):r=qp,t.setTexture2D(e||r,i)}function Vy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zp,i)}function Hy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kp,i)}function Gy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yp,i)}function Wy(s){switch(s){case 5126:return Ey;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Dy;case 35668:case 35672:return Ny;case 35669:case 35673:return Uy;case 5125:return Oy;case 36294:return Fy;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Xy(s,e){s.uniform1fv(this.addr,e)}function qy(s,e){let t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function Yy(s,e){let t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function Zy(s,e){let t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function Ky(s,e){let t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jy(s,e){let t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $y(s,e){let t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jy(s,e){s.uniform1iv(this.addr,e)}function Qy(s,e){s.uniform2iv(this.addr,e)}function ev(s,e){s.uniform3iv(this.addr,e)}function tv(s,e){s.uniform4iv(this.addr,e)}function nv(s,e){s.uniform1uiv(this.addr,e)}function iv(s,e){s.uniform2uiv(this.addr,e)}function sv(s,e){s.uniform3uiv(this.addr,e)}function rv(s,e){s.uniform4uiv(this.addr,e)}function av(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=xu:a=qp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function ov(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Zp,r[a])}function lv(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Kp,r[a])}function cv(s,e,t){let n=this.cache,i=e.length,r=Pc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Yp,r[a])}function hv(s){switch(s){case 5126:return Xy;case 35664:return qy;case 35665:return Yy;case 35666:return Zy;case 35674:return Ky;case 35675:return Jy;case 35676:return $y;case 5124:case 35670:return jy;case 35667:case 35671:return Qy;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return sv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}var yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wy(t.type)}},vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hv(t.type)}},Su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function Lp(s,e){s.seq.push(e),s.map[e.id]=e}function uv(s,e,t){let n=s.name,i=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),a=gu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lp(t,c===void 0?new yu(o,s,e):new vu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Su(o),Lp(t,u)),t=u}}}var ra=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);uv(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Dp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var fv=37297,dv=0;function pv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Np=new Xe;function mv(s){$e._getMatrix(Np,$e.workingColorSpace,s);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case Ca:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Up(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pv(s.getShaderSource(e),o)}else return r}function gv(s,e){let t=mv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var _v={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[so]:"ACESFilmic",[Kh]:"AgX",[Jh]:"Neutral",[Zh]:"Custom"};function xv(s,e){let t=_v[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new D;function yv(){$e.getLuminanceCoefficients(Ec);let s=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function Sv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function _o(s){return s!==""}function Op(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(s){return s.replace(bv,Ev)}var Tv=new Map;function Ev(s,e){let t=Je[e];if(t===void 0){let n=Tv.get(e);if(n!==void 0)t=Je[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}var wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(s){return s.replace(wv,Av)}function Av(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Rv={[io]:"SHADOWMAP_TYPE_PCF",[$r]:"SHADOWMAP_TYPE_VSM"};function Cv(s){return Rv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Pv={[Es]:"ENVMAP_TYPE_CUBE",[nr]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function Iv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Pv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Lv={[nr]:"ENVMAP_MODE_REFRACTION"};function Dv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nv={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[np]:"ENVMAP_BLENDING_MIX",[ip]:"ENVMAP_BLENDING_ADD"};function Uv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Nv[s.combine]||"ENVMAP_BLENDING_NONE"}function Ov(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Cv(t),c=Iv(t),h=Dv(t),u=Uv(t),f=Ov(t),d=vv(t),g=Sv(r),_=i.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(m=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Je.tonemapping_pars_fragment:"",t.toneMapping!==fi?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,gv("linearToOutputTexel",t.outputColorSpace),yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),a=Mu(a),a=Op(a,t),a=Fp(a,t),o=Mu(o),o=Op(o,t),o=Fp(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+a,y=S+p+o,M=Dp(i,i.VERTEX_SHADER,A),T=Dp(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(L){if(s.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(M)||"",C=i.getShaderInfoLog(T)||"",U=I.trim(),z=N.trim(),G=C.trim(),ee=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,T);else{let K=Up(i,M,"vertex"),te=Up(i,T,"fragment");ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+K+`
`+te)}else U!==""?Pe("WebGLProgram: Program Info Log:",U):(z===""||G==="")&&(X=!1);X&&(L.diagnostics={runnable:ee,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(M),i.deleteShader(T),x=new ra(i,_),b=Mv(i,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,fv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var Bv=0,bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tu(e),t.set(e,n)),n}},Tu=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function zv(s){return s===As||s===co||s===ho}function kv(s,e,t,n,i,r){let a=new La,o=new bu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,R,L,I,N){let C=L.fog,U=I.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||z,G),X=ee&&ee.mapping===ir?ee.image.height:null,K=d[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ae=te!==void 0?te.length:0,oe=0;U.morphAttributes.position!==void 0&&(oe=1),U.morphAttributes.normal!==void 0&&(oe=2),U.morphAttributes.color!==void 0&&(oe=3);let Te,ke,it,Y;if(K){let pt=Ai[K];Te=pt.vertexShader,ke=pt.fragmentShader}else{Te=x.vertexShader,ke=x.fragmentShader;let pt=o.getVertexShaderStage(x),nt=o.getFragmentShaderStage(x);o.update(x,pt,nt),it=pt.id,Y=nt.id}let ne=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Re=I.isInstancedMesh===!0,ue=I.isBatchedMesh===!0,Oe=!!x.map,Tt=!!x.matcap,He=!!ee,et=!!x.aoMap,Ge=!!x.lightMap,Ve=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,Ot=!!x.displacementMap,Lt=!!x.emissiveMap,gt=!!x.metalnessMap,Rt=!!x.roughnessMap,B=x.anisotropy>0,Jt=x.clearcoat>0,at=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,Z=B&&!!x.anisotropyMap,se=Jt&&!!x.clearcoatMap,re=Jt&&!!x.clearcoatNormalMap,$=Jt&&!!x.clearcoatRoughnessMap,Q=v&&!!x.iridescenceMap,de=v&&!!x.iridescenceThicknessMap,Le=k&&!!x.sheenColorMap,pe=k&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ce=!!x.specularColorMap,Fe=!!x.specularIntensityMap,We=W&&!!x.transmissionMap,F=W&&!!x.thicknessMap,he=!!x.gradientMap,j=!!x.alphaMap,le=x.alphaTest>0,me=!!x.alphaHash,ie=!!x.extensions,Ne=fi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ne=s.toneMapping);let Me={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Te,fragmentShader:ke,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ue,batchingColor:ue&&I._colorsTexture!==null,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:Tt,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:X,aoMap:et,lightMap:Ge,bumpMap:Ve,normalMap:dt,displacementMap:Ot,emissiveMap:Lt,normalMapObjectSpace:dt&&x.normalMapType===op,normalMapTangentSpace:dt&&x.normalMapType===fo,packedNormalMap:dt&&x.normalMapType===fo&&zv(x.normalMap.format),metalnessMap:gt,roughnessMap:Rt,anisotropy:B,anisotropyMap:Z,clearcoat:Jt,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:$,dispersion:at,retroreflection:P,iridescence:v,iridescenceMap:Q,iridescenceThicknessMap:de,sheen:k,sheenColorMap:Le,sheenRoughnessMap:pe,specularMap:fe,specularColorMap:Ce,specularIntensityMap:Fe,transmission:W,transmissionMap:We,thicknessMap:F,gradientMap:he,opaque:x.transparent===!1&&x.blending===jr&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:le,alphaHash:me,combine:x.combine,mapUv:Oe&&g(x.map.channel),aoMapUv:et&&g(x.aoMap.channel),lightMapUv:Ge&&g(x.lightMap.channel),bumpMapUv:Ve&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:Ot&&g(x.displacementMap.channel),emissiveMapUv:Lt&&g(x.emissiveMap.channel),metalnessMapUv:gt&&g(x.metalnessMap.channel),roughnessMapUv:Rt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:fe&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Fe&&g(x.specularIntensityMap.channel),transmissionMapUv:We&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(dt||B),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(Oe||j),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:oe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(b,x),S(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let b=d[x.type],R;if(b){let L=Ai[b];R=vp.clone(L.uniforms)}else R=x.uniforms;return R}function y(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new Fv(s,b,x,i),c.push(R),h.set(b,R)),R}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function Vv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function kp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,_,m,p){let S=s[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},s[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=g,S.materialVariant=a(f),S.groupOrder=_,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function l(f,d,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let A=o(f,d,g,_,m,p);g.transmission>0?n.push(A):g.transparent===!0?i.push(A):t.push(A)}function c(f,d,g,_,m,p){let S=o(f,d,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function h(f,d){t.length>1&&t.sort(f||Hv),n.length>1&&n.sort(d||kp),i.length>1&&i.sort(d||kp)}function u(){for(let f=e,d=s.length;f<d;f++){let g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Gv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Vp,s.set(n,[a])):i>=r.length?(a=new Vp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Wv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ue};break;case"SpotLight":t={position:new D,direction:new D,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function Xv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var qv=0;function Yv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zv(s){let e=new Wv,t=Xv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let i=new D,r=new qe,a=new qe;function o(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,A=0,y=0,M=0,T=0,w=0,x=0,b=0,R=0;c.sort(Yv);for(let I=0,N=c.length;I<N;I++){let C=c[I],U=C.color,z=C.intensity,G=C.distance,ee=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===As?ee=C.shadow.map.texture:ee=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*z,u+=U.g*z,f+=U.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],z);R++}else if(C.isSunLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=ee;let ae=K.getViewportCount();for(let oe=0;oe<ae;oe++)n.sunShadowMatrix[_+oe]=K.getMatrix(oe),n.sunShadowCascade[_+oe]=K._cascadeData[oe];_+=ae,g++}n.sun[d]=X,d++}else if(C.isDirectionalLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.directionalShadow[m]=te,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=X,m++}else if(C.isSpotLight){let X=e.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[S]=X;let K=C.shadow;if(C.map&&(n.spotLightMap[x]=C.map,x++,K.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[S]=K.matrix,C.castShadow){let te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,n.spotShadow[S]=te,n.spotShadowMap[S]=ee,w++}S++}else if(C.isRectAreaLight){let X=e.get(C);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=X,A++}else if(C.isPointLight){let X=e.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){let K=C.shadow,te=t.get(C);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,n.pointShadow[p]=te,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=X,p++}else if(C.isHemisphereLight){let X=e.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[y]=X,y++}}A>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==A||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=A,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=R,n.version=qv++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let y=c[S];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Hp(s){let e=new Zv(s),t=[],n=[],i=[];function r(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Kv(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Hp(s),e.set(i,[o])):r>=a.length?(o=new Hp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Qv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Gp=new qe,go=new D,_u=new D;function eS(s,e,t){let n=new qr,i=new Ie,r=new Ie,a=new ut,o=new Tl,l=new El,c={},h=t.maxTextureSize,u={[Ti]:yn,[yn]:Ti,[jn]:jn},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Jv,fragmentShader:$v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(T,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Fd&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=io);let b=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),I=s.state;I.setBlending(Ei),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let N=p!==this.type;N&&w.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=T.length;C<U;C++){let z=T[C],G=z.shadow;if(G===void 0){Pe("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ee=G.getFrameExtents();i.multiply(ee),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,G.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||N===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$r){if(z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(i.x,i.y,{format:As,type:vn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new ys(i.x,i.y,hn),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=yi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt}else z.isPointLight?(G.map=new Ac(i.x),G.map.depthTexture=new vl(i.x,di)):(G.map=new wn(i.x,i.y),G.map.depthTexture=new ys(i.x,i.y,di)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=yi,this.type===io?(G.map.depthTexture.compareFunction=X?bc:Mc,G.map.depthTexture.minFilter=yt,G.map.depthTexture.magFilter=yt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=kt,G.map.depthTexture.magFilter=kt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();z.isPointLight!==!0&&G.updateMatrices(z,x);for(let te=0;te<K;te++){let ae=G.getCamera(te);if(z.isPointLight){let oe=G.camera,Te=G.matrix,ke=z.distance||oe.far;ke!==oe.far&&(oe.far=ke,oe.updateProjectionMatrix()),go.setFromMatrixPosition(z.matrixWorld),oe.position.copy(go),_u.copy(oe.position),_u.add(jv[te]),oe.up.copy(Qv[te]),oe.lookAt(_u),oe.updateMatrixWorld(),Te.makeTranslation(-go.x,-go.y,-go.z),Gp.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Gp,oe.coordinateSystem,oe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,te),s.clear();else{te===0&&(s.setRenderTarget(G.map),s.clear());let oe=G.getViewport(te);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),I.viewport(a)}n=G.getFrustum(te),y(w,x,ae,z,this.type)}G.isPointLightShadow!==!0&&this.type===$r&&S(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,R,L)};function S(T,w){let x=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new wn(i.x,i.y,{format:As,type:vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,x,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,x,d,_,null)}function A(T,w,x,b){let R=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let I=R.uuid,N=w.uuid,C=c[I];C===void 0&&(C={},c[I]=C);let U=C[N];U===void 0&&(U=R.clone(),C[N]=U,w.addEventListener("dispose",M)),R=U}if(R.visible=w.visible,R.wireframe=w.wireframe,b===$r?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:u[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=s.properties.get(R);I.light=x}return R}function y(T,w,x,b,R){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===$r)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let N=e.update(T),C=T.material;if(Array.isArray(C)){let U=N.groups;for(let z=0,G=U.length;z<G;z++){let ee=U[z],X=C[ee.materialIndex];if(X&&X.visible){let K=A(T,X,b,R);T.onBeforeShadow(s,T,w,x,N,K,ee),s.renderBufferDirect(x,null,N,K,T,ee),T.onAfterShadow(s,T,w,x,N,K,ee)}}}else if(C.visible){let U=A(T,C,b,R);T.onBeforeShadow(s,T,w,x,N,U,null),s.renderBufferDirect(x,null,N,U,T,null),T.onAfterShadow(s,T,w,x,N,U,null)}}let I=T.children;for(let N=0,C=I.length;N<C;N++)y(I[N],w,x,b,R)}function M(T){T.target.removeEventListener("dispose",M);for(let x in c){let b=c[x],R=T.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function tS(s,e){function t(){let F=!1,he=new ut,j=null,le=new ut(0,0,0,0);return{setMask:function(me){j!==me&&!F&&(s.colorMask(me,me,me,me),j=me)},setLocked:function(me){F=me},setClear:function(me,ie,Ne,Me,pt){pt===!0&&(me*=Me,ie*=Me,Ne*=Me),he.set(me,ie,Ne,Me),le.equals(he)===!1&&(s.clearColor(me,ie,Ne,Me),le.copy(he))},reset:function(){F=!1,j=null,le.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,j=null,le=null,me=null;return{setReversed:function(ie){if(he!==ie){let Ne=e.get("EXT_clip_control");ie?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let Me=me;me=null,this.setClear(Me)}},getReversed:function(){return he},setTest:function(ie){ie?ne(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ie){j!==ie&&!F&&(s.depthMask(ie),j=ie)},setFunc:function(ie){if(he&&(ie=xp[ie]),le!==ie){switch(ie){case ll:s.depthFunc(s.NEVER);break;case cl:s.depthFunc(s.ALWAYS);break;case hl:s.depthFunc(s.LESS);break;case Or:s.depthFunc(s.LEQUAL);break;case ul:s.depthFunc(s.EQUAL);break;case fl:s.depthFunc(s.GEQUAL);break;case dl:s.depthFunc(s.GREATER);break;case pl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=ie}},setLocked:function(ie){F=ie},setClear:function(ie){me!==ie&&(me=ie,he&&(ie=1-ie),s.clearDepth(ie))},reset:function(){F=!1,j=null,le=null,me=null,he=!1}}}function i(){let F=!1,he=null,j=null,le=null,me=null,ie=null,Ne=null,Me=null,pt=null;return{setTest:function(nt){F||(nt?ne(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(nt){he!==nt&&!F&&(s.stencilMask(nt),he=nt)},setFunc:function(nt,Bn,Kn){(j!==nt||le!==Bn||me!==Kn)&&(s.stencilFunc(nt,Bn,Kn),j=nt,le=Bn,me=Kn)},setOp:function(nt,Bn,Kn){(ie!==nt||Ne!==Bn||Me!==Kn)&&(s.stencilOp(nt,Bn,Kn),ie=nt,Ne=Bn,Me=Kn)},setLocked:function(nt){F=nt},setClear:function(nt){pt!==nt&&(s.clearStencil(nt),pt=nt)},reset:function(){F=!1,he=null,j=null,le=null,me=null,ie=null,Ne=null,Me=null,pt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,y=null,M=null,T=null,w=null,x=new Ue(0,0,0),b=0,R=!1,L=null,I=null,N=null,C=null,U=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ee=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ee>=2);let K=null,te={},ae=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Te=new ut().fromArray(ae),ke=new ut().fromArray(oe);function it(F,he,j,le){let me=new Uint8Array(4),ie=s.createTexture();s.bindTexture(F,ie),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<j;Ne++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(he+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ie}let Y={};Y[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(Or),Ve(!1),dt(zh),ne(s.CULL_FACE),et(Ei);function ne(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function ye(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Re(F,he){return f[F]!==he?(s.bindFramebuffer(F,he),f[F]=he,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=he),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ue(F,he){let j=g,le=!1;if(F){j=d.get(he),j===void 0&&(j=[],d.set(he,j));let me=F.textures;if(j.length!==me.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Ne=me.length;ie<Ne;ie++)j[ie]=s.COLOR_ATTACHMENT0+ie;j.length=me.length,le=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,le=!0);le&&s.drawBuffers(j)}function Oe(F){return _!==F?(s.useProgram(F),_=F,!0):!1}let Tt={[tr]:s.FUNC_ADD,[zd]:s.FUNC_SUBTRACT,[kd]:s.FUNC_REVERSE_SUBTRACT};Tt[Vd]=s.MIN,Tt[Hd]=s.MAX;let He={[Gd]:s.ZERO,[Wd]:s.ONE,[Xd]:s.SRC_COLOR,[Gh]:s.SRC_ALPHA,[$d]:s.SRC_ALPHA_SATURATE,[Kd]:s.DST_COLOR,[Yd]:s.DST_ALPHA,[qd]:s.ONE_MINUS_SRC_COLOR,[Wh]:s.ONE_MINUS_SRC_ALPHA,[Jd]:s.ONE_MINUS_DST_COLOR,[Zd]:s.ONE_MINUS_DST_ALPHA,[jd]:s.CONSTANT_COLOR,[Qd]:s.ONE_MINUS_CONSTANT_COLOR,[ep]:s.CONSTANT_ALPHA,[tp]:s.ONE_MINUS_CONSTANT_ALPHA};function et(F,he,j,le,me,ie,Ne,Me,pt,nt){if(F===Ei){m===!0&&(ye(s.BLEND),m=!1);return}if(m===!1&&(ne(s.BLEND),m=!0),F!==Bd){if(F!==p||nt!==R){if((S!==tr||M!==tr)&&(s.blendEquation(s.FUNC_ADD),S=tr,M=tr),nt)switch(F){case jr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFunc(s.ONE,s.ONE);break;case Vh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",F);break}else switch(F){case jr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",F);break}A=null,y=null,T=null,w=null,x.set(0,0,0),b=0,p=F,R=nt}return}me=me||he,ie=ie||j,Ne=Ne||le,(he!==S||me!==M)&&(s.blendEquationSeparate(Tt[he],Tt[me]),S=he,M=me),(j!==A||le!==y||ie!==T||Ne!==w)&&(s.blendFuncSeparate(He[j],He[le],He[ie],He[Ne]),A=j,y=le,T=ie,w=Ne),(Me.equals(x)===!1||pt!==b)&&(s.blendColor(Me.r,Me.g,Me.b,pt),x.copy(Me),b=pt),p=F,R=!1}function Ge(F,he){F.side===jn?ye(s.CULL_FACE):ne(s.CULL_FACE);let j=F.side===yn;he&&(j=!j),Ve(j),F.blending===jr&&F.transparent===!1?et(Ei):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let le=F.stencilWrite;o.setTest(le),le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){L!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),L=F)}function dt(F){F!==Ud?(ne(s.CULL_FACE),F!==I&&(F===zh?s.cullFace(s.BACK):F===Od?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),I=F}function Ot(F){F!==N&&(G&&s.lineWidth(F),N=F)}function Lt(F,he,j){F?(ne(s.POLYGON_OFFSET_FILL),(C!==he||U!==j)&&(C=he,U=j,a.getReversed()&&(he=-he),s.polygonOffset(he,j))):ye(s.POLYGON_OFFSET_FILL)}function gt(F){F?ne(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Rt(F){F===void 0&&(F=s.TEXTURE0+z-1),K!==F&&(s.activeTexture(F),K=F)}function B(F,he,j){j===void 0&&(K===null?j=s.TEXTURE0+z-1:j=K);let le=te[j];le===void 0&&(le={type:void 0,texture:void 0},te[j]=le),(le.type!==F||le.texture!==he)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(F,he||Y[F]),le.type=F,le.texture=he)}function Jt(){let F=te[K];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function at(){try{s.compressedTexImage2D(...arguments)}catch(F){ze("WebGLState:",F)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(F){ze("WebGLState:",F)}}function v(){try{s.texSubImage2D(...arguments)}catch(F){ze("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){ze("WebGLState:",F)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(F){ze("WebGLState:",F)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(F){ze("WebGLState:",F)}}function se(){try{s.texStorage2D(...arguments)}catch(F){ze("WebGLState:",F)}}function re(){try{s.texStorage3D(...arguments)}catch(F){ze("WebGLState:",F)}}function $(){try{s.texImage2D(...arguments)}catch(F){ze("WebGLState:",F)}}function Q(){try{s.texImage3D(...arguments)}catch(F){ze("WebGLState:",F)}}function de(F){return u[F]!==void 0?u[F]:s.getParameter(F)}function Le(F,he){u[F]!==he&&(s.pixelStorei(F,he),u[F]=he)}function pe(F){Te.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function fe(F){ke.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function Ce(F,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let le=j.get(F);le===void 0&&(le=s.getUniformBlockIndex(he,F.name),j.set(F,le))}function Fe(F,he){let le=c.get(he).get(F);l.get(he)!==le&&(s.uniformBlockBinding(he,le,F.__bindingPointIndex),l.set(he,le))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,te={},f={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,y=null,M=null,T=null,w=null,x=new Ue(0,0,0),b=0,R=!1,L=null,I=null,N=null,C=null,U=null,Te.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ye,bindFramebuffer:Re,drawBuffers:ue,useProgram:Oe,setBlending:et,setMaterial:Ge,setFlipSided:Ve,setCullFace:dt,setLineWidth:Ot,setPolygonOffset:Lt,setScissorTest:gt,activeTexture:Rt,bindTexture:B,unbindTexture:Jt,compressedTexImage2D:at,compressedTexImage3D:P,texImage2D:$,texImage3D:Q,pixelStorei:Le,getParameter:de,updateUBOMapping:Ce,uniformBlockBinding:Fe,texStorage2D:se,texStorage3D:re,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:pe,viewport:fe,reset:We}}function nS(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return g?new OffscreenCanvas(P,v):zr("canvas")}function m(P,v,k){let W=1,Z=at(P);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(W*Z.width),re=Math.floor(W*Z.height);f===void 0&&(f=_(se,re));let $=v?_(se,re):f;return $.width=se,$.height=re,$.getContext("2d").drawImage(P,0,0,se,re),Pe("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+se+"x"+re+")."),$}else return"data"in P&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){s.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,v,k,W,Z,se=!1){if(P!==null){if(s[P]!==void 0)return s[P];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re;W&&(re=e.get("EXT_texture_norm16"),re||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8),k===s.UNSIGNED_SHORT&&re&&($=re.R16_EXT),k===s.SHORT&&re&&($=re.R16_SNORM_EXT)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),v===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8),k===s.UNSIGNED_SHORT&&re&&($=re.RG16_EXT),k===s.SHORT&&re&&($=re.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),v===s.RGB&&(k===s.UNSIGNED_SHORT&&re&&($=re.RGB16_EXT),k===s.SHORT&&re&&($=re.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),v===s.RGBA){let Q=se?Ca:$e.getTransfer(Z);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=Q===lt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&re&&($=re.RGBA16_EXT),k===s.SHORT&&re&&($=re.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(P,v){let k;return P?v===null||v===di||v===ta?k=s.DEPTH24_STENCIL8:v===hn?k=s.DEPTH32F_STENCIL8:v===ea&&(k=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===ta?k=s.DEPTH_COMPONENT24:v===hn?k=s.DEPTH_COMPONENT32F:v===ea&&(k=s.DEPTH_COMPONENT16),k}function T(P,v){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==kt&&P.minFilter!==yt?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function w(P){let v=P.target;v.removeEventListener("dispose",w),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),L(v)}function b(P){let v=n.get(P);if(v.__webglInit===void 0)return;let k=P.source,W=d.get(k);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(W).length===0&&d.delete(k)}n.remove(P)}function R(P){let v=n.get(P);s.deleteTexture(v.__webglTexture);let k=P.source,W=d.get(k);delete W[v.__cacheKey],a.memory.textures--}function L(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)s.deleteFramebuffer(v.__webglFramebuffer[W]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,Z=k.length;W<Z;W++){let se=n.get(k[W]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(P)}let I=0;function N(){I=0}function C(){return I}function U(P){I=P}function z(){let P=I;return P>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function G(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function ee(P,v){let k=n.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,P,v);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function X(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,v);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function K(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){ye(k,P,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function te(P,v){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Re(k,P,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}let ae={[ms]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},oe={[kt]:s.NEAREST,[Bl]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[yt]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Te={[cp]:s.NEVER,[pp]:s.ALWAYS,[hp]:s.LESS,[Mc]:s.LEQUAL,[up]:s.EQUAL,[bc]:s.GEQUAL,[fp]:s.GREATER,[dp]:s.NOTEQUAL};function ke(P,v){if(v.type===hn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===yt||v.magFilter===Qr||v.magFilter===sr||v.magFilter===Qn||v.minFilter===yt||v.minFilter===Qr||v.minFilter===sr||v.minFilter===Qn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ae[v.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ae[v.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ae[v.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,oe[v.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===kt||v.minFilter!==sr&&v.minFilter!==Qn||v.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(P,v){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",w));let W=v.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let se=G(v);if(se!==P.__cacheKey){Z[se]===void 0&&(Z[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[se].usedTimes++;let re=Z[P.__cacheKey];re!==void 0&&(Z[P.__cacheKey].usedTimes--,re.usedTimes===0&&R(v)),P.__cacheKey=se,P.__webglTexture=Z[se].texture}return k}function Y(P,v,k){return Math.floor(Math.floor(P/k)/v)}function ne(P,v,k,W){let se=P.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{se.sort((Le,pe)=>Le.start-pe.start);let re=0;for(let Le=1;Le<se.length;Le++){let pe=se[re],fe=se[Le],Ce=pe.start+pe.count,Fe=Y(fe.start,v.width,4),We=Y(pe.start,v.width,4);fe.start<=Ce+1&&Fe===We&&Y(fe.start+fe.count-1,v.width,4)===Fe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++re,se[re]=fe)}se.length=re+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Le=0,pe=se.length;Le<pe;Le++){let fe=se[Le],Ce=Math.floor(fe.start/4),Fe=Math.ceil(fe.count/4),We=Ce%v.width,F=Math.floor(Ce/v.width),he=Fe,j=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,We),t.pixelStorei(s.UNPACK_SKIP_ROWS,F),t.texSubImage2D(s.TEXTURE_2D,0,We,F,he,j,k,W,v.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function ye(P,v,k){let W=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=s.TEXTURE_3D);let Z=it(P,v),se=v.source;t.bindTexture(W,P.__webglTexture,s.TEXTURE0+k);let re=n.get(se);if(se.version!==re.__version||Z===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=$e.getPrimaries($e.workingColorSpace),le=v.colorSpace===ji?null:$e.getPrimaries(v.colorSpace),me=v.colorSpace===ji||j===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,i.maxTextureSize);Q=Jt(v,Q);let de=r.convert(v.format,v.colorSpace),Le=r.convert(v.type),pe=y(v.internalFormat,de,Le,v.normalized,v.colorSpace,v.isVideoTexture);ke(W,v);let fe,Ce=v.mipmaps,Fe=v.isVideoTexture!==!0,We=re.__version===void 0||Z===!0,F=se.dataReady,he=T(v,Q);if(v.isDepthTexture)pe=M(v.format===ws,v.type),We&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Le,null));else if(v.isDataTexture)if(Ce.length>0){Fe&&We&&t.texStorage2D(s.TEXTURE_2D,he,pe,Ce[0].width,Ce[0].height);for(let j=0,le=Ce.length;j<le;j++)fe=Ce[j],Fe?F&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,de,Le,fe.data):t.texImage2D(s.TEXTURE_2D,j,pe,fe.width,fe.height,0,de,Le,fe.data);v.generateMipmaps=!1}else Fe?(We&&t.texStorage2D(s.TEXTURE_2D,he,pe,Q.width,Q.height),F&&ne(v,Q,de,Le)):t.texImage2D(s.TEXTURE_2D,0,pe,Q.width,Q.height,0,de,Le,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&We&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,pe,Ce[0].width,Ce[0].height,Q.depth);for(let j=0,le=Ce.length;j<le;j++)if(fe=Ce[j],v.format!==Wn)if(de!==null)if(Fe){if(F)if(v.layerUpdates.size>0){let me=uu(fe.width,fe.height,v.format,v.type);for(let ie of v.layerUpdates){let Ne=fe.data.subarray(ie*me/fe.data.BYTES_PER_ELEMENT,(ie+1)*me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ie,fe.width,fe.height,1,de,Ne)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,pe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Q.depth,de,Le,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,pe,fe.width,fe.height,Q.depth,0,de,Le,fe.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Fe&&We&&t.texStorage2D(s.TEXTURE_2D,he,pe,Ce[0].width,Ce[0].height);for(let j=0,le=Ce.length;j<le;j++)fe=Ce[j],v.format!==Wn?de!==null?Fe?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,j,pe,fe.width,fe.height,0,fe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,fe.width,fe.height,de,Le,fe.data):t.texImage2D(s.TEXTURE_2D,j,pe,fe.width,fe.height,0,de,Le,fe.data)}else if(v.isDataArrayTexture)if(Fe){if(We&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,pe,Q.width,Q.height,Q.depth),F)if(v.layerUpdates.size>0){let j=uu(Q.width,Q.height,v.format,v.type);for(let le of v.layerUpdates){let me=Q.data.subarray(le*j/Q.data.BYTES_PER_ELEMENT,(le+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,de,Le,me)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Le,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,de,Le,Q.data);else if(v.isData3DTexture)Fe?(We&&t.texStorage3D(s.TEXTURE_3D,he,pe,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Le,Q.data)):t.texImage3D(s.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,de,Le,Q.data);else if(v.isFramebufferTexture){if(We)if(Fe)t.texStorage2D(s.TEXTURE_2D,he,pe,Q.width,Q.height);else{let j=Q.width,le=Q.height;for(let me=0;me<he;me++)t.texImage2D(s.TEXTURE_2D,me,pe,j,le,0,de,Le,null),j>>=1,le>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(v),j.onpaint=le=>{let me=le.changedElements;for(let ie of u)me.includes(ie.image)&&(ie.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let me=s.RGBA,ie=s.RGBA,Ne=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,me,ie,Ne,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Fe&&We){let j=at(Ce[0]);t.texStorage2D(s.TEXTURE_2D,he,pe,j.width,j.height)}for(let j=0,le=Ce.length;j<le;j++)fe=Ce[j],Fe?F&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,de,Le,fe):t.texImage2D(s.TEXTURE_2D,j,pe,de,Le,fe);v.generateMipmaps=!1}else if(Fe){if(We){let j=at(Q);t.texStorage2D(s.TEXTURE_2D,he,pe,j.width,j.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Le,Q)}else t.texImage2D(s.TEXTURE_2D,0,pe,de,Le,Q);p(v)&&S(W),re.__version=se.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Re(P,v,k){if(v.image.length!==6)return;let W=it(P,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);let se=n.get(Z);if(Z.version!==se.__version||W===!0){t.activeTexture(s.TEXTURE0+k);let re=$e.getPrimaries($e.workingColorSpace),$=v.colorSpace===ji?null:$e.getPrimaries(v.colorSpace),Q=v.colorSpace===ji||re===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=v.isCompressedTexture||v.image[0].isCompressedTexture,Le=v.image[0]&&v.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!de&&!Le?pe[ie]=m(v.image[ie],!0,i.maxCubemapSize):pe[ie]=Le?v.image[ie].image:v.image[ie],pe[ie]=Jt(v,pe[ie]);let fe=pe[0],Ce=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),We=y(v.internalFormat,Ce,Fe,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,he=se.__version===void 0||W===!0,j=Z.dataReady,le=T(v,fe);ke(s.TEXTURE_CUBE_MAP,v);let me;if(de){F&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,We,fe.width,fe.height);for(let ie=0;ie<6;ie++){me=pe[ie].mipmaps;for(let Ne=0;Ne<me.length;Ne++){let Me=me[Ne];v.format!==Wn?Ce!==null?F?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,We,Me.width,Me.height,0,Me.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,0,0,Me.width,Me.height,Ce,Fe,Me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne,We,Me.width,Me.height,0,Ce,Fe,Me.data)}}}else{if(me=v.mipmaps,F&&he){me.length>0&&le++;let ie=at(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,We,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Le){F?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,Ce,Fe,pe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,pe[ie].width,pe[ie].height,0,Ce,Fe,pe[ie].data);for(let Ne=0;Ne<me.length;Ne++){let pt=me[Ne].image[ie].image;F?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,pt.width,pt.height,Ce,Fe,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,We,pt.width,pt.height,0,Ce,Fe,pt.data)}}else{F?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,Fe,pe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,We,Ce,Fe,pe[ie]);for(let Ne=0;Ne<me.length;Ne++){let Me=me[Ne];F?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,0,0,Ce,Fe,Me.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ne+1,We,Ce,Fe,Me.image[ie])}}}p(v)&&S(s.TEXTURE_CUBE_MAP),se.__version=Z.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ue(P,v,k,W,Z,se){let re=r.convert(k.format,k.colorSpace),$=r.convert(k.type),Q=y(k.internalFormat,re,$,k.normalized,k.colorSpace),de=n.get(v),Le=n.get(k);if(Le.__renderTarget=v,!de.__hasExternalTextures){let pe=Math.max(1,v.width>>se),fe=Math.max(1,v.height>>se);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,se,Q,pe,fe,v.depth,0,re,$,null):t.texImage2D(Z,se,Q,pe,fe,0,re,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Rt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Z,Le.__webglTexture,0,gt(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Z,Le.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(P,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),v.depthBuffer){let W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,se=M(v.stencilBuffer,Z),re=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Rt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(v),se,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(v),se,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,se,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,P)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let se=W[Z],re=r.convert(se.format,se.colorSpace),$=r.convert(se.type),Q=y(se.internalFormat,re,$,se.normalized,se.colorSpace);Rt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(v),Q,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(v),Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(P,v,k){let W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),ke(s.TEXTURE_CUBE_MAP,v.depthTexture);let de=r.convert(v.depthTexture.format),Le=r.convert(v.depthTexture.type),pe;v.depthTexture.format===yi?pe=s.DEPTH_COMPONENT24:v.depthTexture.format===ws&&(pe=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,v.width,v.height,0,de,Le,null)}}else ee(v.depthTexture,0);let se=Z.__webglTexture,re=gt(v),$=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Q=v.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===yi)Rt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,$,se,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,Q,$,se,0);else if(v.depthTexture.format===ws)Rt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,$,se,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,Q,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(P){let v=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Tt(v.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Tt(v.__webglFramebuffer[0],P,0):Tt(v.__webglFramebuffer,P,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=s.createRenderbuffer(),Oe(v.__webglDepthbuffer[W],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,se)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Oe(v.__webglDepthbuffer,P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(P,v,k){let W=n.get(P);v!==void 0&&ue(W.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&He(P)}function Ge(P){let v=P.texture,k=n.get(P),W=n.get(v);P.addEventListener("dispose",x);let Z=P.textures,se=P.isWebGLCubeRenderTarget===!0,re=Z.length>1;if(re||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=v.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[$][Q]=s.createFramebuffer()}else k.__webglFramebuffer[$]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[$]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(re)for(let $=0,Q=Z.length;$<Q;$++){let de=n.get(Z[$]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Rt(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let Q=Z[$];k.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let de=r.convert(Q.format,Q.colorSpace),Le=r.convert(Q.type),pe=y(Q.internalFormat,de,Le,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),fe=gt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,pe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,k.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),ke(s.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ue(k.__webglFramebuffer[$][Q],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else ue(k.__webglFramebuffer[$],P,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(v)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let $=0,Q=Z.length;$<Q;$++){let de=Z[$],Le=n.get(de),pe=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Le.__webglTexture),ke(pe,de),ue(k.__webglFramebuffer,P,de,s.COLOR_ATTACHMENT0+$,pe,0),p(de)&&S(pe)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&($=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),ke($,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)ue(k.__webglFramebuffer[Q],P,v,s.COLOR_ATTACHMENT0,$,Q);else ue(k.__webglFramebuffer,P,v,s.COLOR_ATTACHMENT0,$,0);p(v)&&S($),t.unbindTexture()}P.depthBuffer&&He(P)}function Ve(P){let v=P.textures;for(let k=0,W=v.length;k<W;k++){let Z=v[k];if(p(Z)){let se=A(P),re=n.get(Z).__webglTexture;t.bindTexture(se,re),S(se),t.unbindTexture()}}}let dt=[],Ot=[];function Lt(P){if(P.samples>0){if(Rt(P)===!1){let v=P.textures,k=P.width,W=P.height,Z=s.COLOR_BUFFER_BIT,se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(P),$=v.length>1;if($)for(let de=0;de<v.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let Q=P.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let de=0;de<v.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[de]);let Le=n.get(v[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,k,W,0,0,k,W,Z,s.NEAREST),l===!0&&(dt.length=0,Ot.length=0,dt.push(s.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(dt.push(se),Ot.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let de=0;de<v.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,re.__webglColorRenderbuffer[de]);let Le=n.get(v[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function gt(P){return Math.min(i.maxSamples,P.samples)}function Rt(P){let v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(P){let v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function Jt(P,v){let k=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==tn&&k!==ji&&($e.getTransfer(k)===lt?(W!==Wn||Z!==In)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",k)),v}function at(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=te,this.rebindTextures=et,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iS(s,e){function t(n,i=ji){let r,a=$e.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return s.BYTE;if(n===Qh)return s.SHORT;if(n===ea)return s.UNSIGNED_SHORT;if(n===zl)return s.INT;if(n===di)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===nu)return s.ALPHA;if(n===iu)return s.RGB;if(n===Wn)return s.RGBA;if(n===yi)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===Hl)return s.RED;if(n===Gl)return s.RED_INTEGER;if(n===As)return s.RG;if(n===Wl)return s.RG_INTEGER;if(n===Xl)return s.RGBA_INTEGER;if(n===ro||n===ao||n===oo||n===lo)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===$l||n===jl||n===Ql||n===ec||n===co||n===tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===$l)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ql)return r.COMPRESSED_R11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===co)return r.COMPRESSED_RG11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===_c||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yc||n===vc||n===ho||n===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var sS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ga(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gn({vertexShader:sS,fragmentShader:rS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends hi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Eu,p={},S=t.getContextAttributes(),A=null,y=null,M=[],T=[],w=new Ie,x=null,b=null,R=new jt;R.viewport=new ut;let L=new jt;L.viewport=new ut;let I=[R,L],N=new Nl,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Hr,M[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Hr,M[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Hr,M[Y]=ne),ne.getHandSpace()};function z(Y){let ne=T.indexOf(Y.inputSource);if(ne===-1)return;let ye=M[ne];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||a),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<M.length;Y++){let ne=T[Y];ne!==null&&(T[Y]=null,M[Y].disconnect(ne))}C=null,U=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(A),d=null,f=null,u=null,i=null,y=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),b!==null){let Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,ue=null;S.depth&&(ue=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?ws:yi,Re=S.stencil?ta:di);let Oe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new wn(f.textureWidth,f.textureHeight,{format:Wn,type:In,depthTexture:new ys(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wn(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Y){for(let ne=0;ne<Y.removed.length;ne++){let ye=Y.removed[ne],Re=T.indexOf(ye);Re>=0&&(T[Re]=null,M[Re].disconnect(ye))}for(let ne=0;ne<Y.added.length;ne++){let ye=Y.added[ne],Re=T.indexOf(ye);if(Re===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=T.length){T.push(ye),Re=Oe;break}else if(T[Oe]===null){T[Oe]=ye,Re=Oe;break}if(Re===-1)break}let ue=M[Re];ue&&ue.connect(ye)}}let X=new D,K=new D;function te(Y,ne,ye){X.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);let Re=X.distanceTo(K),ue=ne.projectionMatrix.elements,Oe=ye.projectionMatrix.elements,Tt=ue[14]/(ue[10]-1),He=ue[14]/(ue[10]+1),et=(ue[9]+1)/ue[5],Ge=(ue[9]-1)/ue[5],Ve=(ue[8]-1)/ue[0],dt=(Oe[8]+1)/Oe[0],Ot=Tt*Ve,Lt=Tt*dt,gt=Re/(-Ve+dt),Rt=gt*-Ve;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ue[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let B=Tt+gt,Jt=He+gt,at=Ot-Rt,P=Lt+(Re-Rt),v=et*He/Jt*B,k=Ge*He/Jt*B;Y.projectionMatrix.makePerspective(at,P,v,k,B,Jt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ne=Y.near,ye=Y.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),N.near=L.near=R.near=ne,N.far=L.far=R.far=ye,(C!==N.near||U!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,U=N.far),N.layers.mask=Y.layers.mask|6,R.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;let Re=Y.parent,ue=N.cameras;ae(N,Re);for(let Oe=0;Oe<ue.length;Oe++)ae(ue[Oe],Re);ue.length===2?te(N,R,L):N.projectionMatrix.copy(R.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),oe(Y,N,Re)};function oe(Y,ne,ye){ye===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return p[Y]};let Te=null;function ke(Y,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Re=!1;ye.length!==N.cameras.length&&(N.cameras.length=0,Re=!0);for(let He=0;He<ye.length;He++){let et=ye[He],Ge=null;if(d!==null)Ge=d.getViewport(et);else{let dt=u.getViewSubImage(f,et);Ge=dt.viewport,He===0&&(e.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(y))}let Ve=I[He];Ve===void 0&&(Ve=new jt,Ve.layers.enable(He),Ve.viewport=new ut,I[He]=Ve),Ve.matrix.fromArray(et.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(et.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),He===0&&(N.matrix.copy(Ve.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Re===!0&&N.cameras.push(Ve)}let ue=i.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let He=u.getDepthInformation(ye[0]);He&&He.isValid&&He.texture&&m.init(He,i.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let He=0;He<ye.length;He++){let et=ye[He].camera;if(et){let Ge=p[et];Ge||(Ge=new Ga,p[et]=Ge);let Ve=u.getCameraImage(et);Ge.sourceTexture=Ve}}}}for(let ye=0;ye<M.length;ye++){let Re=T[ye],ue=M[ye];Re!==null&&ue!==void 0&&ue.update(Re,ne,c||a)}Te&&Te(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let it=new Wp;it.setAnimationLoop(ke),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}},aS=new qe,Jp=new Xe;Jp.set(-1,0,0,0,1,0,0,0,1);function oS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),A=S.envMap,y=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(aS.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lS(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let T=M.program;n.uniformBlockBinding(y,T)}function c(y,M){let T=i[y.id];T===void 0&&(m(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",S));let w=M.program;n.updateUBOMapping(y,w);let x=e.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function h(y){let M=u();y.__bindingPointIndex=M;let T=s.createBuffer(),w=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,w,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,T),T}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=i[y.id],T=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let x=0,b=T.length;x<b;x++){let R=T[x];if(Array.isArray(R))for(let L=0,I=R.length;L<I;L++)d(R[L],x,L,w);else d(R,x,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,T,w){if(_(y,M,T,w)===!0){let x=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let L=0;L<b.length;L++){let I=b[L],N=p(I);g(I,y.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,T){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,T)}function _(y,M,T,w){let x=y.value,b=M+"_"+T;if(w[b]===void 0)return typeof x=="number"||typeof x=="boolean"?w[b]=x:ArrayBuffer.isView(x)?w[b]=x.slice():w[b]=x.clone(),!0;{let R=w[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return w[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let M=y.uniforms,T=0,w=16;for(let b=0,R=M.length;b<R;b++){let L=Array.isArray(M[b])?M[b]:[M[b]];for(let I=0,N=L.length;I<N;I++){let C=L[I],U=Array.isArray(C.value)?C.value:[C.value];for(let z=0,G=U.length;z<G;z++){let ee=U[z],X=p(ee),K=T%w,te=K%X.boundary,ae=K+te;T+=te,ae!==0&&w-ae<X.storage&&(T+=w-ae),C.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=X.storage}}}let x=T%w;return x>0&&(T+=w-x),y.__size=T,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",y),M}function S(y){let M=y.target;M.removeEventListener("dispose",S);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function A(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:A}}var cS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wi=null;function hS(){return wi===null&&(wi=new _s(cS,16,16,As,vn),wi.name="DFG_LUT",wi.minFilter=yt,wi.magFilter=yt,wi.wrapS=En,wi.wrapT=En,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Rc=class{constructor(e={}){let{canvas:t=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=d,m=new Set([Xl,Wl,Gl]),p=new Set([In,di,ea,ta,kl,Vl]),S=new Uint32Array(4),A=new Int32Array(4),y=new D,M=null,T=null,w=[],x=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,I=null,N=null,C=null,U=null;this._outputColorSpace=Bt;let z=0,G=0,ee=null,X=-1,K=null,te=new ut,ae=new ut,oe=null,Te=new Ue(0),ke=0,it=t.width,Y=t.height,ne=1,ye=null,Re=null,ue=new ut(0,0,it,Y),Oe=new ut(0,0,it,Y),Tt=!1,He=new qr,et=!1,Ge=!1,Ve=new qe,dt=new D,Ot=new ut,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Rt(){return ee===null?ne:1}let B=n;function Jt(E,O){return t.getContext(E,O)}let at,P,v,k,W,Z,se,re,$,Q,de,Le,pe,fe,Ce,Fe,We,F,he,j,le,me,ie;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Bn,!1),B===null){let O="webgl2";if(B=Jt(O,E),B===null)throw Jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(E){throw t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),ze("WebGLRenderer: "+E.message),E}function Ne(){at=new _y(B),at.init(),le=new iS(B,at),P=new oy(B,at,e,le),v=new tS(B,at),P.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),N=B.createFramebuffer(),C=B.createFramebuffer(),U=B.createFramebuffer(),k=new vy(B),W=new Vv,Z=new nS(B,at,v,W,P,le,k),se=new gy(R),re=new M_(B),me=new ry(B,re),$=new xy(B,re,k,me),Q=new My(B,$,re,me,k),F=new Sy(B,P,Z),Ce=new ly(W),de=new kv(R,se,at,P,me,Ce),Le=new oS(R,W),pe=new Gv,fe=new Kv(at),We=new sy(R,se,v,Q,g,l),Fe=new eS(R,Q,P),ie=new lS(B,k,P,v),he=new ay(B,at,k),j=new yy(B,at,k),k.programs=de.programs,R.capabilities=P,R.extensions=at,R.properties=W,R.renderLists=pe,R.shadowMap=Fe,R.state=v,R.info=k}_!==In&&(b=new Ty(_,t.width,t.height,o,i,r));let Me=new wu(R,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(E){E!==void 0&&(ne=E,this.setSize(it,Y,!1))},this.getSize=function(E){return E.set(it,Y)},this.setSize=function(E,O,q=!0){if(Me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}it=E,Y=O,t.width=Math.floor(E*ne),t.height=Math.floor(O*ne),q===!0&&(t.style.width=E+"px",t.style.height=O+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(it*ne,Y*ne).floor()},this.setDrawingBufferSize=function(E,O,q){it=E,Y=O,ne=q,t.width=Math.floor(E*q),t.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(_===In){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(te)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,O,q,V){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,O,q,V),v.viewport(te.copy(ue).multiplyScalar(ne).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,O,q,V){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,O,q,V),v.scissor(ae.copy(Oe).multiplyScalar(ne).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(E){v.setScissorTest(Tt=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){Re=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let V=0;if(E){let H=!1;if(ee!==null){let xe=ee.texture.format;H=m.has(xe)}if(H){let xe=ee.texture.type,Se=p.has(xe),_e=We.getClearColor(),Ee=We.getClearAlpha(),De=_e.r,Ke=_e.g,Qe=_e.b;Se?(S[0]=De,S[1]=Ke,S[2]=Qe,S[3]=Ee,B.clearBufferuiv(B.COLOR,0,S)):(A[0]=De,A[1]=Ke,A[2]=Qe,A[3]=Ee,B.clearBufferiv(B.COLOR,0,A))}else V|=B.COLOR_BUFFER_BIT}O&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Bn,!1),We.dispose(),pe.dispose(),fe.dispose(),W.dispose(),se.dispose(),Q.dispose(),me.dispose(),ie.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Be),Me.removeEventListener("sessionend",rt),Dt.stop()};function pt(E){E.preventDefault(),Pa("WebGLRenderer: Context Lost."),L=!0}function nt(){Pa("WebGLRenderer: Context Restored."),L=!1;let E=k.autoReset,O=Fe.enabled,q=Fe.autoUpdate,V=Fe.needsUpdate,H=Fe.type;Ne(),k.autoReset=E,Fe.enabled=O,Fe.autoUpdate=q,Fe.needsUpdate=V,Fe.type=H}function Bn(E){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Kn(E){let O=E.target;O.removeEventListener("dispose",Kn),J(O)}function J(E){ce(E),W.remove(E)}function ce(E){let O=W.get(E).programs;O!==void 0&&(O.forEach(function(q){de.releaseProgram(q)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,V,H,xe){O===null&&(O=Lt);let Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=eh(E,O,q,V,H);v.setMaterial(V,Se);let Ee=q.index,De=1;if(V.wireframe===!0){if(Ee=$.getWireframeAttribute(q),Ee===void 0)return;De=2}let Ke=q.drawRange,Qe=q.attributes.position,we=Ke.start*De,ot=(Ke.start+Ke.count)*De;xe!==null&&(we=Math.max(we,xe.start*De),ot=Math.min(ot,(xe.start+xe.count)*De)),Ee!==null?(we=Math.max(we,0),ot=Math.min(ot,Ee.count)):Qe!=null&&(we=Math.max(we,0),ot=Math.min(ot,Qe.count));let Gt=ot-we;if(Gt<0||Gt===1/0)return;me.setup(H,V,_e,q,Ee);let Et,_t=he;if(Ee!==null&&(Et=re.get(Ee),_t=j,_t.setIndex(Et)),H.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*Rt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(H.isLine){let an=V.linewidth;an===void 0&&(an=1),v.setLineWidth(an*Rt()),H.isLineSegments?_t.setMode(B.LINES):H.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else H.isPoints?_t.setMode(B.POINTS):H.isSprite&&_t.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(at.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let an=H._multiDrawStarts,ve=H._multiDrawCounts,gn=H._multiDrawCount,st=Ee?re.get(Ee).bytesPerElement:1,Jn=W.get(V).currentProgram.getUniforms();for(let gi=0;gi<gn;gi++)Jn.setValue(B,"_gl_DrawID",gi),_t.render(an[gi]/st,ve[gi])}else if(H.isInstancedMesh)_t.renderInstances(we,Gt,H.count);else if(q.isInstancedBufferGeometry){let an=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,an);_t.renderInstances(we,Gt,ve)}else _t.render(we,Gt)};function be(E,O,q,V){I!==null&&E.isNodeMaterial&&I.setObject(V,E),et===!0&&Ce.setState(E,q,!1),E.transparent===!0&&E.side===jn&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,ss(E,O,V),E.side=Ti,E.needsUpdate=!0,ss(E,O,V),E.side=jn):ss(E,O,V)}this.compile=function(E,O,q=null){q===null&&(q=E),I!==null&&I.renderStart(E,O,q),T=fe.get(q),T.init(O),x.push(T),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Ge=this.localClippingEnabled,et=Ce.init(this.clippingPlanes,Ge),et===!0&&Ce.setGlobalState(this.clippingPlanes,O),I!==null&&Fe.render(T.state.shadowsArray,q,O);let V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let xe=H.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){let _e=xe[Se];be(_e,q,O,H),V.add(_e)}else be(xe,q,O,H),V.add(xe)}),T=x.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(E,O,q=null){let V=this.compile(E,O,q);return new Promise(H=>{function xe(){if(V.forEach(function(Se){let Ee=W.get(Se).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Se)}),V.size===0){H(E);return}setTimeout(xe,10)}at.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ae=null;function Ze(E){Ae&&Ae(E)}function Be(){Dt.stop()}function rt(){Dt.start()}let Dt=new Wp;Dt.setAnimationLoop(Ze),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(E){Ae=E,Me.setAnimationLoop(E),E===null?Dt.stop():Dt.start()},Me.addEventListener("sessionstart",Be),Me.addEventListener("sessionend",rt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(E,O);let q=Me.enabled===!0&&Me.isPresenting===!0,V=b!==null&&(ee===null||q)&&b.begin(R,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(O),O=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,ee),T=fe.get(E,x.length),T.init(O),T.state.textureUnits=Z.getTextureUnits(),x.push(T),Ve.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(Ve,li,O.reversedDepth),Ge=this.localClippingEnabled,et=Ce.init(this.clippingPlanes,Ge),M=pe.get(E,w.length),M.init(),w.push(M),Me.enabled===!0&&Me.isPresenting===!0){let Se=R.xr.getDepthSensingMesh();Se!==null&&mi(Se,O,-1/0,R.sortObjects)}mi(E,O,0,R.sortObjects),M.finish(),I!==null&&I.updateLights(T.state.lightsArray),R.sortObjects===!0&&M.sort(ye,Re),gt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,gt&&We.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ce.beginShadows();let H=T.state.shadowsArray;if(Fe.render(H,E,O),et===!0&&Ce.endShadows(),(V&&b.hasRenderPass())===!1){let Se=M.opaque,_e=M.transmissive;if(T.setupLights(),O.isArrayCamera){let Ee=O.cameras;if(_e.length>0)for(let De=0,Ke=Ee.length;De<Ke;De++){let Qe=Ee[De];mn(Se,_e,E,Qe)}gt&&We.render(E);for(let De=0,Ke=Ee.length;De<Ke;De++){let Qe=Ee[De];bn(M,E,Qe,Qe.viewport)}}else _e.length>0&&mn(Se,_e,E,O),gt&&We.render(E),bn(M,E,O)}ee!==null&&G===0&&(Z.updateMultisampleRenderTarget(ee),Z.updateRenderTargetMipmap(ee)),V&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),me.resetDefaultState(),X=-1,K=null,x.pop(),x.length>0?(T=x[x.length-1],Z.setTextureUnits(T.state.textureUnits),et===!0&&Ce.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,I!==null&&I.renderEnd()};function mi(E,O,q,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(He)){V&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ve);let Se=Q.update(E),_e=E.material;_e.visible&&M.push(E,Se,_e,q,Ot.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(He))){let Se=Q.update(E),_e=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ot.copy(Se.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ve)),Array.isArray(_e)){let Ee=Se.groups;for(let De=0,Ke=Ee.length;De<Ke;De++){let Qe=Ee[De],we=_e[Qe.materialIndex];we&&we.visible&&M.push(E,Se,we,q,Ot.z,Qe,O)}}else _e.visible&&M.push(E,Se,_e,q,Ot.z,null,O)}}let xe=E.children;for(let Se=0,_e=xe.length;Se<_e;Se++)mi(xe[Se],O,q,V)}function bn(E,O,q,V){let{opaque:H,transmissive:xe,transparent:Se}=E;T.setupLightsView(q),et===!0&&Ce.setGlobalState(R.clippingPlanes,q),V&&v.viewport(te.copy(V)),H.length>0&&rn(H,O,q),xe.length>0&&rn(xe,O,q),Se.length>0&&rn(Se,O,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function mn(E,O,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let we=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new wn(1,1,{generateMipmaps:!0,type:we?vn:In,minFilter:Qn,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let xe=T.state.transmissionRenderTarget[V.id],Se=V.viewport||te;xe.setSize(Se.z*R.transmissionResolutionScale,Se.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),Ee=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(xe),R.getClearColor(Te),ke=R.getClearAlpha(),ke<1&&R.setClearColor(16777215,.5),R.clear(),gt&&We.render(q);let Ke=R.toneMapping;R.toneMapping=fi;let Qe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),et===!0&&Ce.setGlobalState(R.clippingPlanes,V),rn(E,q,V),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ot=0,Gt=O.length;ot<Gt;ot++){let Et=O[ot],{object:_t,geometry:an,material:ve,group:gn}=Et;if(ve.side===jn&&_t.layers.test(V.layers)){let st=ve.side;ve.side=yn,ve.needsUpdate=!0,xr(_t,q,V,an,ve,gn),ve.side=st,ve.needsUpdate=!0,we=!0}}we===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}R.setRenderTarget(_e,Ee,De),R.setClearColor(Te,ke),Qe!==void 0&&(V.viewport=Qe),R.toneMapping=Ke}function rn(E,O,q){let V=O.isScene===!0?O.overrideMaterial:null;for(let H=0,xe=E.length;H<xe;H++){let Se=E[H],{object:_e,geometry:Ee,group:De}=Se,Ke=Se.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),_e.layers.test(q.layers)&&xr(_e,O,q,Ee,Ke,De)}}function xr(E,O,q,V,H,xe){I!==null&&H.isNodeMaterial&&I.setObject(E,H),E.onBeforeRender(R,O,q,V,H,xe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,O,q,V,E,xe),H.transparent===!0&&H.side===jn&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,R.renderBufferDirect(q,O,V,H,E,xe),H.side=Ti,H.needsUpdate=!0,R.renderBufferDirect(q,O,V,H,E,xe),H.side=jn):R.renderBufferDirect(q,O,V,H,E,xe),E.onAfterRender(R,O,q,V,H,xe)}function ss(E,O,q){O.isScene!==!0&&(O=Lt);let V=W.get(E),H=T.state.lights,xe=T.state.shadowsArray,Se=H.state.version,_e=de.getParameters(E,H.state,xe,O,q,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(_e),De=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;let Ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=se.get(E.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Kn),De=new Map,V.programs=De);let Qe=De.get(Ee);if(Qe!==void 0){if(V.currentProgram===Qe&&V.lightsStateVersion===Se)return Ni(E,_e),Qe}else _e.uniforms=de.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,q,_e),E.onBeforeCompile(_e,R),Qe=de.acquireProgram(_e,Ee),De.set(Ee,Qe),V.uniforms=_e.uniforms;let we=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=Ce.uniform),Ni(E,_e),V.needsLights=Tn(E),V.lightsStateVersion=Se,V.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.sunLights.value=H.state.sun,we.sunLightShadows.value=H.state.sunShadow,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.sunShadowMatrix.value=H.state.sunShadowMatrix,we.sunShadowCascade.value=H.state.sunShadowCascade,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Qe,V.uniformsList=null,Qe}function Di(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=ra.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ni(E,O){let q=W.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Do(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let q=0,V=E.length;q<V;q++){let H=E[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function eh(E,O,q,V,H){O.isScene!==!0&&(O=Lt),Z.resetTextureUnits();let xe=O.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,_e=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=se.get(V.envMap||Se,Ee),Ke=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Gt=!!q.morphAttributes.color,Et=fi;V.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Et=R.toneMapping);let _t=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,an=_t!==void 0?_t.length:0,ve=W.get(V),gn=T.state.lights;if(et===!0&&(Ge===!0||E!==K)){let Mt=E===K&&V.id===X;Ce.setState(V,E,Mt)}let st=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==gn.state.version||ve.outputColorSpace!==_e||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==De||V.fog===!0&&ve.fog!==xe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==Ke||ve.vertexTangents!==Qe||ve.morphTargets!==we||ve.morphNormals!==ot||ve.morphColors!==Gt||ve.toneMapping!==Et||ve.morphTargetsCount!==an||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,ve.__version=V.version);let Jn=ve.currentProgram;st===!0&&(Jn=ss(V,O,H),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Jn,ve));let gi=!1,rs=!1,yr=!1,mt=Jn.getUniforms(),Ft=ve.uniforms;if(v.useProgram(Jn.program)&&(gi=!0,rs=!0,yr=!0),V.id!==X&&(X=V.id,rs=!0),ve.needsLights){let Mt=Do(T.state.lightProbeGridArray,H);ve.lightProbeGrid!==Mt&&(ve.lightProbeGrid=Mt,rs=!0)}if(gi||K!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(B,"projectionMatrix",E.projectionMatrix),mt.setValue(B,"viewMatrix",E.matrixWorldInverse);let os=mt.map.cameraPosition;os!==void 0&&os.setValue(B,dt.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&mt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,rs=!0,yr=!0)}if(ve.needsLights&&(gn.state.sunShadowMap.length>0&&mt.setValue(B,"sunShadowMap",gn.state.sunShadowMap,Z),gn.state.directionalShadowMap.length>0&&mt.setValue(B,"directionalShadowMap",gn.state.directionalShadowMap,Z),gn.state.spotShadowMap.length>0&&mt.setValue(B,"spotShadowMap",gn.state.spotShadowMap,Z),gn.state.pointShadowMap.length>0&&mt.setValue(B,"pointShadowMap",gn.state.pointShadowMap,Z)),H.isSkinnedMesh){mt.setOptional(B,H,"bindMatrix"),mt.setOptional(B,H,"bindMatrixInverse");let Mt=H.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),mt.setValue(B,"boneTexture",Mt.boneTexture,Z))}H.isBatchedMesh&&(mt.setOptional(B,H,"batchingTexture"),mt.setValue(B,"batchingTexture",H._matricesTexture,Z),mt.setOptional(B,H,"batchingIdTexture"),mt.setValue(B,"batchingIdTexture",H._indirectTexture,Z),mt.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(B,"batchingColorTexture",H._colorsTexture,Z));let as=q.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&F.update(H,q,Jn),(rs||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,mt.setValue(B,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Ft.envMapIntensity.value=O.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=hS()),rs){if(mt.setValue(B,"toneMappingExposure",R.toneMappingExposure),ve.needsLights&&th(Ft,yr),xe&&V.fog===!0&&Le.refreshFogUniforms(Ft,xe),Le.refreshMaterialUniforms(Ft,V,ne,Y,T.state.transmissionRenderTarget[E.id]),ve.needsLights&&ve.lightProbeGrid){let Mt=ve.lightProbeGrid;Ft.probesSH.value=Mt.texture,Ft.probesMin.value.copy(Mt.boundingBox.min),Ft.probesMax.value.copy(Mt.boundingBox.max),Ft.probesResolution.value.copy(Mt.resolution)}ra.upload(B,Di(ve),Ft,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ra.upload(B,Di(ve),Ft,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(B,"center",H.center),mt.setValue(B,"modelViewMatrix",H.modelViewMatrix),mt.setValue(B,"normalMatrix",H.normalMatrix),mt.setValue(B,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Mt=V.uniformsGroups;for(let os=0,vr=Mt.length;os<vr;os++){let $f=Mt[os];ie.update($f,Jn),ie.bind($f,Jn)}}return Jn}function th(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Tn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,O,q){let V=W.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=O,W.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let q=W.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){ee=E,z=O,G=q;let V=null,H=!1,xe=!1;if(E){let _e=W.get(E);if(_e.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,_e.__webglFramebuffer),te.copy(E.viewport),ae.copy(E.scissor),oe=E.scissorTest,v.viewport(te),v.scissor(ae),v.setScissorTest(oe),X=-1;return}else if(_e.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(_e.__hasExternalTextures)Z.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ke=E.depthTexture;if(_e.__boundDepthTexture!==Ke){if(Ke!==null&&W.has(Ke)&&(E.width!==Ke.image.width||E.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(xe=!0);let De=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[O])?V=De[O][q]:V=De[O],H=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?V=W.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[q]:V=De,te.copy(E.viewport),ae.copy(E.scissor),oe=E.scissorTest}else te.copy(ue).multiplyScalar(ne).floor(),ae.copy(Oe).multiplyScalar(ne).floor(),oe=Tt;if(q!==0&&(V=N),v.bindFramebuffer(B.FRAMEBUFFER,V)&&v.drawBuffers(E,V),v.viewport(te),v.scissor(ae),v.setScissorTest(oe),H){let _e=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,q)}else if(xe){let _e=O;for(let Ee=0;Ee<E.textures.length;Ee++){let De=W.get(E.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,De.__webglTexture,q,_e)}}else if(E!==null&&q!==0){let _e=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_e.__webglTexture,q)}X=-1};function Ui(E){let O=W.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=P.textureFormatReadable(E.format),O.__typeReadable=P.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,q,V,H,xe,Se,_e=0){if(!(E&&E.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){v.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let De=E.textures[_e],Ke=De.format,Qe=De.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);let we=Ui(De);if(we.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&q>=0&&q<=E.height-H&&B.readPixels(O,q,V,H,le.convert(Ke),le.convert(Qe),xe)}finally{let De=ee!==null?W.get(ee).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,V,H,xe,Se,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(O>=0&&O<=E.width-V&&q>=0&&q<=E.height-H){v.bindFramebuffer(B.FRAMEBUFFER,Ee);let De=E.textures[_e],Ke=De.format,Qe=De.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_e);let we=Ui(De);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,xe.byteLength,B.STREAM_READ),B.readPixels(O,q,V,H,le.convert(Ke),le.convert(Qe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Gt=ee!==null?W.get(ee).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,Gt);let Et=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _p(B,Et,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,xe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ot),B.deleteSync(Et),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){let V=Math.pow(2,-q),H=Math.floor(E.image.width*V),xe=Math.floor(E.image.height*V),Se=O!==null?O.x:0,_e=O!==null?O.y:0;Z.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Se,_e,H,xe),v.unbindTexture()},this.copyTextureToTexture=function(E,O,q=null,V=null,H=0,xe=0){let Se,_e,Ee,De,Ke,Qe,we,ot,Gt,Et=E.isCompressedTexture?E.mipmaps[xe]:E.image;if(q!==null)Se=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Ke=q.min.y,Qe=q.isBox3?q.min.z:0;else{let Ft=Math.pow(2,-H);Se=Math.floor(Et.width*Ft),_e=Math.floor(Et.height*Ft),E.isDataArrayTexture?Ee=Et.depth:E.isData3DTexture?Ee=Math.floor(Et.depth*Ft):Ee=1,De=0,Ke=0,Qe=0}V!==null?(we=V.x,ot=V.y,Gt=V.z):(we=0,ot=0,Gt=0);let _t=le.convert(O.format),an=le.convert(O.type),ve;O.isData3DTexture?(Z.setTexture3D(O,0),ve=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),ve=B.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),ve=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let gn=v.getParameter(B.UNPACK_ROW_LENGTH),st=v.getParameter(B.UNPACK_IMAGE_HEIGHT),Jn=v.getParameter(B.UNPACK_SKIP_PIXELS),gi=v.getParameter(B.UNPACK_SKIP_ROWS),rs=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,De),v.pixelStorei(B.UNPACK_SKIP_ROWS,Ke),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);let yr=E.isDataArrayTexture||E.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let Ft=W.get(E),as=W.get(O),Mt=W.get(Ft.__renderTarget),os=W.get(as.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,Mt.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,os.__webglFramebuffer);for(let vr=0;vr<Ee;vr++)yr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(E).__webglTexture,H,Qe+vr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(O).__webglTexture,xe,Gt+vr)),B.blitFramebuffer(De,Ke,Se,_e,we,ot,Se,_e,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||W.has(E)){let Ft=W.get(E),as=W.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,C),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Mt=0;Mt<Ee;Mt++)yr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,H,Qe+Mt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,H),mt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,as.__webglTexture,xe,Gt+Mt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,as.__webglTexture,xe),H!==0?B.blitFramebuffer(De,Ke,Se,_e,we,ot,Se,_e,B.COLOR_BUFFER_BIT,B.NEAREST):mt?B.copyTexSubImage3D(ve,xe,we,ot,Gt+Mt,De,Ke,Se,_e):B.copyTexSubImage2D(ve,xe,we,ot,De,Ke,Se,_e);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else mt?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(ve,xe,we,ot,Gt,Se,_e,Ee,_t,an,Et.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(ve,xe,we,ot,Gt,Se,_e,Ee,_t,Et.data):B.texSubImage3D(ve,xe,we,ot,Gt,Se,_e,Ee,_t,an,Et):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,xe,we,ot,Se,_e,_t,an,Et.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,xe,we,ot,Et.width,Et.height,_t,Et.data):B.texSubImage2D(B.TEXTURE_2D,xe,we,ot,Se,_e,_t,an,Et);v.pixelStorei(B.UNPACK_ROW_LENGTH,gn),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st),v.pixelStorei(B.UNPACK_SKIP_PIXELS,Jn),v.pixelStorei(B.UNPACK_SKIP_ROWS,gi),v.pixelStorei(B.UNPACK_SKIP_IMAGES,rs),xe===0&&O.generateMipmaps&&B.generateMipmap(ve),v.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){z=0,G=0,ee=null,v.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var $p={type:"change"},Ru={type:"start"},Qp={type:"end"},Ic=new Wi,jp=new Vn,fS=Math.cos(70*po.DEG2RAD),Zt=new D,Ln=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Au=1e-6,Lc=class extends no{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new cn,this._lastTargetPosition=new D,this._quat=new cn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jr,this._sphericalDelta=new Jr,this._scale=1,this._panOffset=new D,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new D,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pS.bind(this),this._onPointerDown=dS.bind(this),this._onPointerUp=mS.bind(this),this._onContextMenu=MS.bind(this),this._onMouseWheel=xS.bind(this),this._onKeyDown=yS.bind(this),this._onTouchStart=vS.bind(this),this._onTouchMove=SS.bind(this),this._onMouseDown=gS.bind(this),this._onMouseMove=_S.bind(this),this._interceptControlDown=bS.bind(this),this._interceptControlUp=TS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($p),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Zt.copy(t).sub(this.target),Zt.applyQuaternion(this._quat),this._spherical.setFromVector3(Zt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Zt.setFromSpherical(this._spherical),Zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Zt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<fS?this.object.lookAt(this.target):(jp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(jp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Au||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Au||this._lastTargetPosition.distanceToSquared(this.target)>Au?(this.dispatchEvent($p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Zt.setFromMatrixColumn(t,0),Zt.multiplyScalar(-e),this._panOffset.add(Zt)}_panUp(e,t){this.screenSpacePanning===!0?Zt.setFromMatrixColumn(t,1):(Zt.setFromMatrixColumn(t,0),Zt.crossVectors(this.object.up,Zt)),Zt.multiplyScalar(e),this._panOffset.add(Zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Zt.copy(i).sub(this.target);let r=Zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function dS(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pS(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function mS(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qp),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function gS(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ft.DOLLY;break;case bs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ft.ROTATE}break;case bs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ru)}function _S(s){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function xS(s){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(s.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Qp))}function yS(s){this.enabled!==!1&&this._handleKeyDown(s)}function vS(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ft.TOUCH_ROTATE;break;case Ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ft.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ru)}function SS(s){switch(this._trackPointer(s),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ft.NONE}}function MS(s){this.enabled!==!1&&s.preventDefault()}function bS(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TS(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cu(s,e){if(e===su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===na||e===uo){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===na)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function em(s){let e=new Map,t=new Map,n=s.clone();return tm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)tm(s.children[n],e.children[n],t)}var Dc=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nc(t,je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nc(t,je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ku(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=$i.extractUrlBase(e);a=$i.resolveURL(c,this.path)}else a=$i.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new js(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===am){try{a[je.KHR_BINARY_GLTF]=new Ju(e)}catch(u){i&&i(u);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new sf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new Nu;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new $u(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new ju;break;case je.KHR_MESH_QUANTIZATION:a[u]=new Qu;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ES(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Vt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Du=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ms(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new er(h),c.distance=u;break;case"spot":c=new eo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Nu=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Rn}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(i)}},Uu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(r,r)}return Promise.all(i)}},Fu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Bu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},zu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],tn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Bt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},ku=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Vu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],tn),Promise.all(i)}},Hu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Gu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],tn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Bt)),Promise.all(i)}},Wu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Xu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},qu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Yu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Zu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Nc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Ku=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==ei.TRIANGLES&&c.mode!==ei.TRIANGLE_STRIP&&c.mode!==ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let g of u){let _=new qe,m=new D,p=new cn,S=new D(1,1,1),A=new za(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&S.fromBufferAttribute(l.SCALE,M),A.setMatrixAt(M,_.compose(m,p,S));let y=null;for(let M in l)if(M==="_COLOR_0"){let T=l[M];A.instanceColor=new Xi(T.array,T.itemSize,T.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let w=A.geometry;y=new wt,y.name=w.name;for(let x in w.attributes)y.setAttribute(x,w.attributes[x]);for(let x in w.morphAttributes)y.morphAttributes[x]=w.morphAttributes[x];w.index!==null&&y.setIndex(w.index),y.morphTargetsRelative=w.morphTargetsRelative;for(let x of w.groups)y.addGroup(x.start,x.count,x.materialIndex);w.boundingBox!==null&&(y.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(y.boundingSphere=w.boundingSphere.clone()),y.drawRange.start=w.drawRange.start,y.drawRange.count=w.drawRange.count,y.userData=Object.assign({},w.userData),A.geometry=y}let T=l[M];y.setAttribute(M,new Xi(T.array,T.itemSize,T.normalized))}bt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),d.push(A)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},am="glTF",xo=12,nm={JSON:1313821514,BIN:5130562},Ju=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xo,r=new DataView(e,xo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===nm.JSON){let c=new Uint8Array(e,xo+a,o);this.content=n.decode(c)}else if(l===nm.BIN){let c=xo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=tf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=tf[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=oa[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(d)},o,c,tn,f)})})}},ju=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qu=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Uc=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,A=p-f+u;for(let y=0;y!==o;y++){let M=a[_+y+o],T=a[_+y+l]*h,w=a[g+y+o],x=a[g+y]*h;r[y]=S*M+A*T+m*w+p*x}return r}},wS=new cn,ef=class extends Uc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return wS.fromArray(r).normalize().toArray(r),r}},ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},im={9728:kt,9729:yt,9984:Bl,9985:Qr,9986:sr,9987:Qn},sm={33071:En,33648:Fr,10497:ms},Pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AS={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Iu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),s.DefaultMaterial}function or(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function PS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IS(s){let e,t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lu(t.attributes):e=s.indices+":"+Lu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Lu(s.targets[n]);return e}function Lu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function LS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var DS=new qe,sf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ES,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new $a(this.options.manager):this.textureLoader=new to(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new js(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return or(r,o,i),Ri(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load($i.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Pu[i.type],o=oa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new zt(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Pu[i.type],c=oa[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==u){let p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,A=t.cache.get(S);A||(_=new c(o,p*d,i.count*d/h),A=new Gr(_,d/h),t.cache.add(S,A)),m=new Wr(A,l,f%d/h,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new zt(_,l,g);if(i.sparse!==void 0){let p=Pu.SCALAR,S=oa[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new S(a[1],A,i.sparse.count*p),T=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,x=M.length;w<x;w++){let b=M[w];if(m.setX(b,T[w*l]),l>=2&&m.setY(b,T[w*l+1]),l>=3&&m.setZ(b,T[w*l+2]),l>=4&&m.setW(b,T[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=im[f.magFilter]||yt,h.minFilter=im[f.minFilter]||Qn,h.wrapS=sm[f.wrapS]||ms,h.wrapT=sm[f.wrapT]||ms,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==yt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Qt(_);m.needsUpdate=!0,f(m)}),t.load($i.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ri(u,a),u.userData.mimeType=a.mimeType||LS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new xs,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new qs,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Si}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){let u=i[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],tn),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Bt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jn);let h=r.alphaMode||Iu.OPAQUE;if(h===Iu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Iu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Rn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Rn){let u=r.emissiveFactor;o.emissive=new Ue().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==Rn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&or(i,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rm(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=IS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=rm(new wt,c,t),c.mode===ei.TRIANGLE_STRIP?f=f.then(d=>Cu(d,uo)):c.mode===ei.TRIANGLE_FAN&&(f=f.then(d=>Cu(d,na))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?RS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,g=h.length;d<g;d++){let _=h[d],m=a[d],p,S=c[d];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");A&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&y?new Fa(_,S):new Xt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===ei.LINES)p=new ka(_,S);else if(m.mode===ei.LINE_STRIP)p=new qi(_,S);else if(m.mode===ei.LINE_LOOP)p=new Va(_,S);else if(m.mode===ei.POINTS)p=new Ys(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&PS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ri(p,r),m.extensions&&or(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&or(i,u[0],r),u[0];let f=new en;r.extensions&&or(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(po.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ba(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let A=0,y=f.length;A<y;A++){let M=f[A],T=d[A],w=g[A],x=_[A],b=m[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let R=n._createAnimationTracks(M,T,w,x,b);if(R)for(let L=0;L<R.length;L++)p.push(R[L])}let S=new Ka(r,void 0,p);return Ri(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,DS)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Xr:c.length>1?h=new en:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ri(h,r),r.extensions&&or(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new en;n.name&&(r.name=i.createUniqueName(n.name)),Ri(r,n),n.extensions&&or(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(em(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof xn||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Rs[r.path]===Rs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Rs[r.path]){case Rs.weights:h=Zi;break;case Rs.rotation:h=Ki;break;case Rs.translation:case Rs.scale:h=Ss;break;default:n.itemSize===1?h=Zi:h=Ss;break}let u=i.interpolation!==void 0?AS[i.interpolation]:Ws,f=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){let _=new h(l[d]+"."+Rs[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ki?ef:Uc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function NS(s,e,t){let n=e.attributes,i=new Hn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=nf(oa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=nf(oa[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new An;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function rm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=tf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $e.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Ri(s,e),NS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?CS(s,e.targets,t):s})}var Oc=class extends Ja{constructor(e){super(e),this.type=vn}parse(e){let a=function(x,b){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},u=function(x,b,R){b=b||1024;let I=x.pos,N=-1,C=0,U="",z=String.fromCharCode.apply(null,new Uint16Array(x.subarray(I,I+128)));for(;0>(N=z.indexOf(`
`))&&C<b&&I<x.byteLength;)U+=z,C+=z.length,I+=128,z=String.fromCharCode.apply(null,new Uint16Array(x.subarray(I,I+128)));return-1<N?(R!==!1&&(x.pos+=C+N+1),U+z.slice(0,N)):!1},f=function(x){let b=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,z;for((x.pos>=x.byteLength||!(U=u(x)))&&a(1,"no header found"),(z=U.match(b))||a(3,"bad initial token"),C.valid|=1,C.programtype=z[1],C.string+=U+`
`;U=u(x),U!==!1;){if(C.string+=U+`
`,U.charAt(0)==="#"){C.comments+=U+`
`;continue}if((z=U.match(R))&&(C.gamma=parseFloat(z[1])),(z=U.match(L))&&(C.exposure=parseFloat(z[1])),(z=U.match(I))&&(C.valid|=2,C.format=z[1]),(z=U.match(N))&&(C.valid|=4,C.height=parseInt(z[1],10),C.width=parseInt(z[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},d=function(x,b,R){let L=b;if(L<8||L>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);L!==(x[2]<<8|x[3])&&a(3,"wrong scanline width");let I=new Uint8Array(4*b*R);I.length||a(4,"unable to allocate buffer space");let N=0,C=0,U=4*L,z=new Uint8Array(4),G=new Uint8Array(U),ee=R;for(;ee>0&&C<x.byteLength;){C+4>x.byteLength&&a(1),z[0]=x[C++],z[1]=x[C++],z[2]=x[C++],z[3]=x[C++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=L)&&a(3,"bad rgbe scanline format");let X=0,K;for(;X<U&&C<x.byteLength;){K=x[C++];let ae=K>128;if(ae&&(K-=128),(K===0||X+K>U)&&a(3,"bad scanline data"),ae){let oe=x[C++];for(let Te=0;Te<K;Te++)G[X++]=oe}else G.set(x.subarray(C,C+K),X),X+=K,C+=K}let te=L;for(let ae=0;ae<te;ae++){let oe=0;I[N]=G[ae+oe],oe+=L,I[N+1]=G[ae+oe],oe+=L,I[N+2]=G[ae+oe],oe+=L,I[N+3]=G[ae+oe],N+=4}ee--}return I},g=function(x,b,R,L){let I=x[b+3],N=Math.pow(2,I-128)/255;R[L+0]=x[b+0]*N,R[L+1]=x[b+1]*N,R[L+2]=x[b+2]*N,R[L+3]=1},_=function(x,b,R,L){let I=x[b+3],N=Math.pow(2,I-128)/255;R[L+0]=gs.toHalfFloat(Math.min(x[b+0]*N,65504)),R[L+1]=gs.toHalfFloat(Math.min(x[b+1]*N,65504)),R[L+2]=gs.toHalfFloat(Math.min(x[b+2]*N,65504)),R[L+3]=gs.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=f(m),S=p.width,A=p.height,y=d(m.subarray(m.pos),S,A),M,T,w;switch(this.type){case hn:w=y.length/4;let x=new Float32Array(w*4);for(let R=0;R<w;R++)g(y,R*4,x,R*4);M=x,T=hn;break;case vn:w=y.length/4;let b=new Uint16Array(w*4);for(let R=0;R<w;R++)_(y,R*4,b,R*4);M=b,T=vn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:A,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T,colorSpace:tn,minFilter:yt,magFilter:yt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};function Qi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function mm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},To={duration:.5,overwrite:!1,delay:0},Mf,nn,At,ni=1e8,St=1/ni,ff=Math.PI*2,US=ff/4,OS=0,gm=Math.sqrt,FS=Math.cos,BS=Math.sin,Kt=function(e){return typeof e=="string"},Nt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},qc=function(e){return typeof e>"u"},Ii=function(e){return typeof e=="object"},Un=function(e){return e!==!1},bf=function(){return typeof window<"u"},Fc=function(e){return Nt(e)||Kt(e)},_m=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},dn=Array.isArray,zS=/random\([^)]+\)/g,kS=/,\s*/g,om=/(?:-?\.?\d|\.)+/gi,Tf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ef=/[+-]=-?[.\d]+/,VS=/[^,'"\[\]\s]+/gi,HS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,Ci,df,wf,qn={},Vc={},xm,ym=function(e){return(Vc=ca(e,qn))&&pn},Yc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Eo=function(e,t){return!t&&console.warn(e)},vm=function(e,t){return e&&(qn[e]=t)&&Vc&&(Vc[e]=t)||qn},wo=function(){return 0},GS={suppressEvents:!0,isStart:!0,kill:!1},Bc={suppressEvents:!0,kill:!1},WS={suppressEvents:!0},Af={},Ps=[],pf={},Sm,Dn={},af={},lm=30,zc=[],Rf="",Cf=function(e){var t=e[0],n,i;if(Ii(t)||Nt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=zc.length;i--&&!zc[i].targetTest(t););n=zc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Df(e[i],n)))||e.splice(i,1);return e},Is=function(e){return e._gsap||Cf(ii(e))[0]._gsap},Pf=function(e,t,n){return(n=e[t])&&Nt(n)?e[t]():qc(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ut=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},fr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},XS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Hc=function(){var e=Ps.length,t=Ps.slice(0),n,i;for(pf={},Ps.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},If=function(e){return!!(e._initted||e._startAt||e.add)},Mm=function(e,t,n,i){Ps.length&&!nn&&Hc(),e.render(t,n,i||!!(nn&&t<0&&If(e))),Ps.length&&!nn&&Hc()},bm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(VS).length<2?t:Kt(e)?e.trim():e},Tm=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},qS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ca=function(e,t){for(var n in t)e[n]=t[n];return e},cm=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ii(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Gc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},So=function(e){var t=e.parent||Pt,n=e.keyframes?qS(dn(e.keyframes)):Yn;if(Un(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},YS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Em=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Zc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ZS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mf=function(e,t,n,i){return e._startAt&&(nn?e._startAt.revert(Bc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},KS=function s(e){return!e||e._ts&&s(e.parent)},hm=function(e){return e._repeat?ha(e._tTime,e=e.duration()+e._rDelay)*e:0},ha=function(e,t){var n=Math.floor(e=Ct(e/t));return e&&n===e?n-1:n},Wc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kc=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Jc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kc(e),n._dirty||lr(n,e)),e},wm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wc(e.rawTime(),t),(!t._dur||Co(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Pi=function(e,t,n,i){return t.parent&&Ls(t),t._start=Ct((ts(n)?n:n||e!==Pt?ti(e,n,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Em(e,t,"_first","_last",e._sort?"_start":0),gf(t)||(e._recent=t),i||wm(e,t),e._ts<0&&Jc(e,e._tTime),e},Am=function(e,t){return(qn.ScrollTrigger||Yc("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},Rm=function(e,t,n,i,r){if(Of(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sm!==Nn.frame)return Ps.push(e),e._lazy=[r,i],1},JS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},gf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$S=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&JS(e)&&!(!e._initted&&gf(e))||(e._ts<0||e._dp._ts<0)&&!gf(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Co(0,e._tDur,t),h=ha(l,o),e._yoyo&&h&1&&(a=1-a),h!==ha(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||nn||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&Rm(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&mf(e,t,n,!0),e._onUpdate&&!n&&Xn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ls(e,1),!n&&!nn&&(Xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},jS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ua=function(e,t,n,i){var r=e._repeat,a=Ct(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Ct(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Jc(e,e._tTime=e._tDur*o),e.parent&&Kc(e),n||lr(e.parent,e),e},um=function(e){return e instanceof fn?lr(e):ua(e,e._dur)},QS={_start:0,endTime:wo,totalDuration:wo},ti=function s(e,t,n){var i=e.labels,r=e._recent||QS,a=e.duration()>=ni?r.endTime(!1):e._dur,o,l,c;return Kt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(dn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Mo=function(e,t,n){var i=ts(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Un(l.vars.inherit)&&l.parent;a.immediateRender=Un(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ht(t[0],a,t[r+1])},Ds=function(e,t){return e||e===0?t(e):t},Co=function(e,t,n){return n<e?e:n>t?t:n},sn=function(e,t){return!Kt(e)||!(t=HS.exec(e))?"":t[1]},eM=function(e,t,n){return Ds(n,function(i){return Co(e,t,i)})},_f=[].slice,Cm=function(e,t){return e&&Ii(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ii(e[0]))&&!e.nodeType&&e!==Ci},tM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Kt(i)&&!t||Cm(i,1)?(r=n).push.apply(r,ii(i)):n.push(i)})||n},ii=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Kt(e)&&!n&&(df||!fa())?_f.call((t||wf).querySelectorAll(e),0):dn(e)?tM(e,n):Cm(e)?_f.call(e,0):e?[e]:[]},xf=function(e){return e=ii(e)[0]||Eo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?Eo("Invalid scope")||wf.createElement("div"):e)}},Pm=function(e){return e.sort(function(){return .5-Math.random()})},Im=function(e){if(Nt(e))return e;var t=Ii(e)?e:{each:e},n=cr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,u=i;return Kt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,S,A,y,M,T,w,x,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,ni])[1],!b){for(w=-ni;w<(w=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],p=l?Math.min(b,_)*h-.5:i%b,S=b===ni?0:l?_*u/b-.5:i/b|0,w=0,x=ni,T=0;T<_;T++)A=T%b-p,y=S-(T/b|0),m[T]=M=c?Math.abs(c==="y"?y:A):gm(A*A+y*y),M>w&&(w=M),M<x&&(x=M);i==="random"&&Pm(m),m.max=w-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=sn(t.amount||t.each)||0,n=n&&_<0?pM(n):n}return _=(m[f]-m.min)/m.max||0,Ct(m.b+(n?n(_):_)*m.v)+m.u}},yf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ts(n)?0:sn(n))}},Lm=function(e,t){var n=dn(e),i,r;return!n&&Ii(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(r=!ts(e[0]))&&(i*=i)):e=yf(e.increment)),Ds(t,n?Nt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ni,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-o,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-o),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:a,r||h===a||ts(a)?h:h+sn(a)}:yf(e))},Dm=function(e,t,n,i){return Ds(dn(e)?!t:n===!0?!!(n=0):!i,function(){return dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},iM=function(e,t){return function(n){return e(parseFloat(n))+(t||sn(n))}},sM=function(e,t,n){return Um(e,t,0,1,n)},Nm=function(e,t,n){return Ds(n,function(i){return e[~~t(i)]})},rM=function s(e,t,n){var i=t-e;return dn(e)?Nm(e,s(0,e.length),t):Ds(n,function(r){return(i+(r-e)%i)%i+e})},aM=function s(e,t,n){var i=t-e,r=i*2;return dn(e)?Nm(e,s(0,e.length-1),t):Ds(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},da=function(e){return e.replace(zS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(kS);return Dm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Um=function(e,t,n,i,r){var a=t-e,o=i-n;return Ds(r,function(l){return n+((l-e)/a*o||0)})},oM=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Kt(e),o={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(dn(e)&&!dn(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=t}else i||(e=ca(dn(e)?[]:{},e));if(!h){for(l in t)Nf.call(o,e,l,"get",t[l]);r=function(g){return zf(g,o)||(a?e.p:e)}}}return Ds(n,r)},fm=function(e,t,n){var i=e.labels,r=ni,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Xn=function(e,t,n){var i=e.vars,r=i[t],a=At,o=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ps.length&&Hc(),o&&(At=o),h=l?r.apply(c,l):r.call(c),At=a,h},yo=function(e){return Ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Xn(e,"onInterrupt"),e},la,Om=[],Fm=function(e){if(e)if(e=!e.name&&e.default||e,bf()||e.headless){var t=e.name,n=Nt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:wo,render:zf,add:Nf,kill:TM,modifier:bM,rawVars:0},a={targetTest:0,get:0,getSetter:$c,aliases:{},register:0};if(fa(),e!==i){if(Dn[t])return;Yn(i,Yn(Gc(e,r),a)),ca(i.prototype,ca(r,Gc(e,a))),Dn[i.prop=t]=i,e.targetTest&&(zc.push(i),Af[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vm(t,i),e.register&&e.register(pn,i,Mn)}else Om.push(e)},vt=255,vo={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},of=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vt+.5|0},Bm=function(e,t,n){var i=e?ts(e)?[e>>16,e>>8&vt,e&vt]:0:vo.black,r,a,o,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vo[e])i=vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&vt,i&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(om),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=of(l+1/3,r,a),i[1]=of(l,r,a),i[2]=of(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Tf),n&&i.length<4&&(i[3]=1),i}else i=e.match(om)||vo.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/vt,a=i[1]/vt,o=i[2]/vt,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},zm=function(e){var t=[],n=[],i=-1;return e.split(es).forEach(function(r){var a=r.match(ur)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},dm=function(e,t,n){var i="",r=(e+i).match(es),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Bm(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=zm(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(es,"1").split(ur),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(es),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},es=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vo)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),lM=/hsl[a]?\(/,Lf=function(e){var t=e.join(" "),n;if(es.lastIndex=0,es.test(t))return n=lM.test(t),e[1]=dm(e[1],n),e[0]=dm(e[0],n,zm(e[1])),!0},Ao,Nn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,f,d,g=function _(m){var p=s()-i,S=m===!0,A,y,M,T;if((p>e||p<0)&&(n+=p-t),i+=p,M=i-n,A=M-a,(A>0||S)&&(T=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,a+=A+(A>=r?4:r-A),y=1),S||(l=c(_)),y)for(d=0;d<o.length;d++)o[d](M,f,T,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){xm&&(!df&&bf()&&(Ci=df=window,wf=Ci.document||{},qn.gsap=pn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(pn.version),ym(Vc||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),Om.forEach(Fm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ao=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=wo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,S){var A=p?function(y,M,T,w){m(y,M,T,w),u.remove(A)}:m;return u.remove(m),o[S?"unshift":"push"](A),fa(),A},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),fa=function(){return!Ao&&Nn.wake()},tt={},cM=/^[\d.\-M][\d.\-,\s]/,hM=/["']/g,uM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(hM,"").trim():+c,i=l.substr(o+1).trim();return t},fM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dM=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uM(t[1])]:fM(e).split(",").map(bm)):tt._CE&&cM.test(e)?tt._CE("",e):n},pM=function(e){return function(t){return 1-e(1-t)}},cr=function(e,t){return e&&(Nt(e)?e:tt[e]||dM(e))||t},dr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Sn(e,function(o){tt[o]=qn[o]=r,tt[a=o.toLowerCase()]=n;for(var l in r)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[o+"."+l]=r[l]}),r},km=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lf=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ff*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*BS((h-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:km(o);return r=ff/r,l.config=function(c,h){return s(e,c,h)},l},cf=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:km(n);return i.config=function(r){return s(e,r)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;dr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;dr("Elastic",lf("in"),lf("out"),lf());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};dr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);dr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});dr("Circ",function(s){return-(gm(1-s*s)-1)});dr("Sine",function(s){return s===1?1:-FS(s*US)+1});dr("Back",cf("in"),cf("out"),cf());tt.SteppedEase=tt.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-St;return function(o){return((i*Co(0,a,o)|0)+r)*n}}};To.ease=tt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Rf+=s+","+s+"Params,"});var Df=function(e,t){this.id=OS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pf,this.set=t?t.getSetter:$c},Ro=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ua(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),Ao||Nn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Jc(this,n),!r._dp||r.parent||wm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Mm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ha(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Wc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Co(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Kc(this),ZS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ct(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=WS);var i=nn;return nn=n,If(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,um(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,um(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Un(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-St)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Nt(n)?n:Tm,l=function(){var h=i.then;i.then=null,r&&r(),Nt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){yo(this)},s})();Yn(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var fn=(function(s){mm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Un(n.sortChildren),Pt&&Pi(n.parent||Pt,Qi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Am(Qi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Mo(0,arguments,this),this},t.from=function(i,r,a){return Mo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Mo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,So(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ht(i,r,ti(this,a),1),this},t.call=function(i,r,a){return Pi(this,Ht.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ht(i,a,ti(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,So(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},t.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,So(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ct(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,A,y,M,T,w;if(this!==Pt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,A=this._ts,p=!A,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Ct(h%m),h===l?(_=this._repeat,f=c):(M=Ct(h/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=ha(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),T&&_&1&&(f=c-f,w=1),_!==M&&!this._lock){var x=T&&M&1,b=x===(T&&_&1);if(_<M&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Ct(_*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=jS(this,Ct(o),Ct(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!M&&(Xn(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=-St);break}}d=g}else{d=this._last;for(var R=i<0?i:f;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,a||nn&&If(d)),f!==this._time||!this._ts&&!p){S=0,g&&(h+=this._zTime=R?-St:St);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-St)._zTime=f>=o?1:-1,this._ts))return this._start=y,Kc(this),this.render(i,r,a);this._onUpdate&&!r&&Xn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(Xn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ts(r)||(r=ti(this,r,i)),!(i instanceof Ro)){if(dn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Kt(i))return this.addLabel(i,r);if(Nt(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Pi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ht?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Kt(i)?this.removeLabel(i):Nt(i)?this.killTweensOf(i):(i.parent===this&&Zc(this,i),i===this._recent&&(this._recent=this._last),lr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ti(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Ht.delayedCall(0,r||wo,a);return o.data="isPause",this._hasPause=1,Pi(this,o,ti(this,i))},t.removePause=function(i){var r=this._first;for(i=ti(this,i);r;)r._start===i&&r.data==="isPause"&&Ls(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Cs!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=ii(i),l=this._first,c=ts(r),h;l;)l instanceof Ht?XS(l._targets,o)&&(c?(!Cs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=ti(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Ht.to(a,Yn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||St,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ua(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Yn({startAt:{time:ti(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),fm(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),fm(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ct(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return lr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),lr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ni,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Ct(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ua(a,a===Pt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Pt._ts&&(Mm(Pt,Wc(i,Pt)),Sm=Nn.frame),Nn.frame>=lm){lm+=On.autoSleep||120;var r=Pt._first;if((!r||!r._ts)&&On.autoSleep&&Nn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nn.sleep()}}},e})(Ro);Yn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mM=function(e,t,n,i,r,a,o){var l=new Mn(this._pt,e,t,0,1,Bf,null,r),c=0,h=0,u,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=da(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(rf)||[];u=rf.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?fr(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=rf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ef.test(i)||p)&&(l.e=0),this._pt=l,l},Nf=function(e,t,n,i,r,a,o,l,c,h){Nt(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:Nt(u)?c?e[t.indexOf("set")||!Nt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Nt(u)?c?vM:Gm:Ff,g;if(Kt(i)&&(~i.indexOf("random(")&&(i=da(i)),i.charAt(1)==="="&&(g=fr(f,i)+(sn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||vf)return!isNaN(f*i)&&i!==""?(g=new Mn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?MM:Wm,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&Yc(t,i),mM.call(this,e,t,f,i,d,l||On.stringFilter,c))},gM=function(e,t,n,i,r){if(Nt(e)&&(e=bo(e,r,t,n,i)),!Ii(e)||e.style&&e.nodeType||dn(e)||_m(e))return Kt(e)?bo(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=bo(e[o],r,t,n,i);return a},Uf=function(e,t,n,i,r,a){var o,l,c,h;if(Dn[e]&&(o=new Dn[e]).init(r,o.rawVars?t[e]:gM(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Mn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==la))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Cs,vf,Of=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,A=e._overwrite==="auto"&&!Mf,y=e.timeline,M=i.easeReverse||u,T,w,x,b,R,L,I,N,C,U,z,G,ee;if(y&&(!f||!r)&&(r="none"),e._ease=cr(r,To.ease),e._rEase=M&&(cr(M)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(N=m[0]?Is(m[0]).harness:0,G=N&&i[N.prop],T=Gc(i,Af),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&g?Bc:GS),_._lazy=0),a){if(Ls(e._startAt=Ht.set(m,Yn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Un(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!o&&!d)&&e._startAt.revert(Bc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),x=Yn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Un(l),immediateRender:o,stagger:0,parent:p},T),G&&(x[N.prop]=G),Ls(e._startAt=Ht.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(Bc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Un(l)||l&&!g,w=0;w<m.length;w++){if(R=m[w],I=R._gsap||Cf(m)[w]._gsap,e._ptLookup[w]=U={},pf[I.id]&&Ps.length&&Hc(),z=S===m?w:S.indexOf(R),N&&(C=new N).init(R,G||T,e,z,S)!==!1&&(e._pt=b=new Mn(e._pt,R,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(X){U[X]=b}),C.priority&&(L=1)),!N||G)for(x in T)Dn[x]&&(C=Uf(x,T,e,z,R,S))?C.priority&&(L=1):U[x]=b=Nf.call(e,R,x,"get",T[x],z,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(R,e._op[w]),A&&e._pt&&(Cs=e,Pt.killTweensOf(R,U,e.globalTime(t)),ee=!e.parent,Cs=0),e._pt&&l&&(pf[I.id]=1)}L&&kf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ee,f&&t<=0&&y.render(ni,!0,!0)},_M=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return vf=1,e.vars[t]="+=0",Of(e,o),vf=0,l?Eo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Ut(n)+sn(u.e)),u.b&&(u.b=h.s+sn(u.b))},xM=function(e,t){var n=e[0]?Is(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ca({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},yM=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(dn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},bo=function(e,t,n,i,r){return Nt(e)?e.call(t,n,i,r):Kt(e)&&~e.indexOf("random(")?da(e):e},Vm=Rf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hm={};Sn(Vm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Hm[s]=1});var Ht=(function(s){mm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:So(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Pt,S=(dn(n)||_m(n)?ts(n[0]):"length"in i)?[n]:ii(n),A,y,M,T,w,x,b,R;if(o._targets=S.length?Cf(S):Eo("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Fc(c)||Fc(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(A=o.timeline=new fn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),A.kill(),A.parent=A._dp=Qi(o),A._start=0,f||Fc(c)||Fc(h)){if(T=S.length,b=f&&Im(f),Ii(f))for(w in f)~Vm.indexOf(w)&&(R||(R={}),R[w]=f[w]);for(y=0;y<T;y++)M=Gc(i,Hm),M.stagger=0,L&&(M.easeReverse=L),R&&ca(M,R),x=S[y],M.duration=+bo(c,Qi(o),y,x,S),M.delay=(+bo(h,Qi(o),y,x,S)||0)-o._delay,!f&&T===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),A.to(x,M,b?b(y,x,S):0),A._ease=tt.none;A.duration()?c=h=0:o.timeline=0}else if(g){So(Yn(A.vars.defaults,{ease:"none"})),A._ease=cr(g.ease||i.ease||"none");var I=0,N,C,U;if(dn(g))g.forEach(function(z){return A.to(S,z,">")}),A.duration();else{M={};for(w in g)w==="ease"||w==="easeEach"||yM(w,g[w],M,g.easeEach);for(w in M)for(N=M[w].sort(function(z,G){return z.t-G.t}),I=0,y=0;y<N.length;y++)C=N[y],U={ease:C.e,duration:(C.t-(y?N[y-1].t:0))/100*c},U[w]=C.v,A.to(S,U,I),I+=U.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return d===!0&&!Mf&&(Cs=Qi(o),Pt.killTweensOf(S),Cs=0),Pi(p,Qi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!g&&o._start===Ct(p._time)&&Un(u)&&KS(Qi(o))&&p.data!=="nested")&&(o._tTime=-St,o.render(Math.max(0,-h)||0)),m&&Am(Qi(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-St&&!h?l:i<St?0:i,f,d,g,_,m,p,S,A;if(!c)$S(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,a);if(f=Ct(u%_),u===l?(g=this._repeat,f=c):(m=Ct(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=ha(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Ct(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Rm(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var M=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(Xn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&mf(this,i,r,a),Xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Xn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&mf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ls(this,1),!r&&!(h&&!o)&&(u||o||p)&&(Xn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Ao||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Of(this,c),h=this._ease(c/this._dur),_M(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Jc(this,0),this.parent||Em(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Cs&&Cs.vars.overwrite!==!0)._first||yo(this),this.parent&&a!==this.timeline.totalDuration()&&ua(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ii(i):o,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!r||r==="all")&&YS(o,l))return r==="all"&&(this._pt=0),yo(this);for(u=this._op=this._op||[],r!=="all"&&(Kt(r)&&(_={},Sn(r,function(S){return _[S]=1}),r=_),r=xM(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(u[p]=r,g=f,d={}):(d=u[p]=u[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Zc(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&yo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Mo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Mo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Pt.killTweensOf(i,r,a)},e})(Ro);Yn(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(s){Ht[s]=function(){var e=new fn,t=_f.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ff=function(e,t,n){return e[t]=n},Gm=function(e,t,n){return e[t](n)},vM=function(e,t,n,i){return e[t](i.fp,n)},SM=function(e,t,n){return e.setAttribute(t,n)},$c=function(e,t){return Nt(e[t])?Gm:qc(e[t])&&e.setAttribute?SM:Ff},Wm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bM=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},TM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Zc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},EM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Mn=(function(){function s(t,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Wm,this.d=l||this,this.set=c||Ff,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=EM,this.m=n,this.mt=r,this.tween=i},s})();Sn(Rf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Af[s]=1});qn.TweenMax=qn.TweenLite=Ht;qn.TimelineLite=qn.TimelineMax=fn;Pt=new fn({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Lf;var hr=[],kc={},wM=[],pm=0,AM=0,hf=function(e){return(kc[e]||wM).map(function(t){return t()})},Sf=function(){var e=Date.now(),t=[];e-pm>2&&(hf("matchMediaInit"),hr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Ci.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),hf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pm=e,hf("matchMedia"))},Xm=(function(){function s(t,n){this.selector=n&&xf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AM++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Nt(n)&&(r=i,i=n,n=Nt);var a=this,o=function(){var c=At,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=xf(r)),At=a,u=i.apply(a,arguments),Nt(u)&&a._r.push(u),At=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Nt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=hr.length;a--;)hr[a].id===this.id&&hr.splice(a,1)},e.revert=function(n){this.kill(n||{})},s})(),RM=(function(){function s(t){this.contexts=[],this.scope=t,At&&At.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Ii(n)||(n={matches:n});var a=new Xm(0,r||this.scope),o=a.conditions={},l,c,h;At&&!a.selector&&(a.selector=At.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ci.matchMedia(n[c]),l&&(hr.indexOf(a)<0&&hr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Sf):l.addEventListener("change",Sf)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fm(i)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return Pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Kt(e)&&(e=ii(e)[0]);var r=Is(e||{}).get,a=n?Tm:bm;return n==="native"&&(n=""),e&&(t?a((Dn[t]&&Dn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Dn[o]&&Dn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(h){return pn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=Dn[t],o=Is(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;la._pt=0,u.init(e,n?h+n:h,la,0,[e]),u.render(1,u),la._pt&&zf(1,la)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=pn.to(e,Yn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(t,l,c,h)};return a.tween=r,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cr(e.ease,To.ease)),cm(To,e||{})},config:function(e){return cm(On,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Dn[o]&&!qn[o]&&Eo(t+" effect requires "+o+" plugin.")}),af[t]=function(o,l,c){return n(ii(o),Yn(l||{},r),c)},a&&(fn.prototype[t]=function(o,l,c){return this.add(af[t](o,Ii(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=cr(t)},parseEase:function(e,t){return arguments.length?cr(e,t):tt},getById:function(e){return Pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),i,r;for(n.smoothChildTiming=Un(e.smoothChildTiming),Pt.remove(n),n._dp=0,n._time=n._tTime=Pt._time,i=Pt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=r;return Pi(Pt,n,0),n},context:function(e,t){return e?new Xm(e,t):At},matchMedia:function(e){return new RM(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Sf()},addEventListener:function(e,t){var n=kc[e]||(kc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=kc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rM,wrapYoyo:aM,distribute:Im,random:Dm,snap:Lm,normalize:sM,getUnit:sn,clamp:eM,splitColor:Bm,toArray:ii,selector:xf,mapRange:Um,pipe:nM,unitize:iM,interpolate:oM,shuffle:Pm},install:ym,effects:af,ticker:Nn,updateRoot:fn.updateRoot,plugins:Dn,globalTimeline:Pt,core:{PropTween:Mn,globals:vm,Tween:Ht,Timeline:fn,Animation:Ro,getCache:Is,_removeLinkedListItem:Zc,reverting:function(){return nn},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Mf=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xc[s]=Ht[s]});Nn.add(fn.updateRoot);la=Xc.to({},{duration:0});var CM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},PM=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=CM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},uf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Kt(r)&&(l={},Sn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}PM(o,r)}}}},pn=Xc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},uf("roundProps",yf),uf("modifiers"),uf("snap",Lm))||Xc;Ht.version=fn.version=pn.version="3.15.0";xm=1;bf()&&fa();var IM=tt.Power0,LM=tt.Power1,DM=tt.Power2,NM=tt.Power3,UM=tt.Power4,OM=tt.Linear,FM=tt.Quad,BM=tt.Cubic,zM=tt.Quart,kM=tt.Quint,VM=tt.Strong,HM=tt.Elastic,GM=tt.Back,WM=tt.SteppedEase,XM=tt.Bounce,qM=tt.Sine,YM=tt.Expo,ZM=tt.Circ;var qm,Ns,ma,qf,_r,KM,Ym,Yf,JM=function(){return typeof window<"u"},is={},gr=180/Math.PI,ga=Math.PI/180,pa=Math.atan2,Zm=1e8,Zf=/([A-Z])/g,$M=/(left|right|width|margin|padding|x)/i,jM=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ng=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ig=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ib=function(e,t,n){return e.style[t]=n},sb=function(e,t,n){return e.style.setProperty(t,n)},rb=function(e,t,n){return e._gsap[t]=n},ab=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ob=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},lb=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},It="transform",Fn=It+"Origin",cb=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in is&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ns(i,o)}):this.tfm[e]=a.x?a[e]:ns(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return Li.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=It}(r||t)&&this.props.push(e,t,r[e])},sg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Zf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Yf(),(!r||!r.isStart)&&!n[It]&&(sg(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rg=function(e,t){var n={target:e,props:[],revert:hb,save:cb};return e._gsap||pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ag,Gf=function(e,t){var n=Ns.createElementNS?Ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ns.createElement(e);return n&&n.style?n:Ns.createElement(e)},Zn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,_a(t)||t,1)||""},Km="O,Moz,ms,Ms,Webkit".split(","),_a=function(e,t,n){var i=t||_r,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Km[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Km[a]:"")+e},Wf=function(){JM()&&window.document&&(qm=window,Ns=qm.document,ma=Ns.documentElement,_r=Gf("div")||{style:{}},KM=Gf("div"),It=_a(It),Fn=It+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ag=!!_a("perspective"),Yf=pn.core.reverting,qf=1)},Jm=function(e){var t=e.ownerSVGElement,n=Gf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ma.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ma.removeChild(n),r},$m=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},og=function(e){var t,n;try{t=e.getBBox()}catch{t=Jm(e),n=1}return t&&(t.width||t.height)||n||(t=Jm(e)),t&&!t.width&&!t.x&&!t.y?{x:+$m(e,["x","cx","x1"])||0,y:+$m(e,["y","cy","y1"])||0,width:0,height:0}:t},lg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&og(e))},Os=function(e,t){if(t){var n=e.style,i;t in is&&t!==Fn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Zf,"-$1").toLowerCase())):n.removeAttribute(t)}},Us=function(e,t,n,i,r,a){var o=new Mn(e._pt,t,n,0,1,a?ig:ng);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},jm={deg:1,rad:1,turn:1},ub={grid:1,flex:1},Fs=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=_r.style,l=$M.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===a||!r||jm[i]||jm[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&lg(e),(d||a==="%")&&(is[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Ut(d?r/g*u:r/100*g);if(o[l?"width":"height"]=u+(f?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ns||!_.appendChild)&&(_=Ns.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Nn.time&&!m.uncache)return Ut(r/m.width*u);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+i,g=e[h],S?e.style[t]=S:Os(e,t)}else(d||a==="%")&&!ub[Zn(_,"display")]&&(o.position=Zn(e,"position")),_===e&&(o.position="static"),_.appendChild(_r),g=_r[h],_.removeChild(_r),o.position="absolute";return l&&d&&(m=Is(_),m.time=Nn.time,m.width=_[h]),Ut(f?g*r/u:g&&r?u/g*r:0)},ns=function(e,t,n,i){var r;return qf||Wf(),t in Li&&t!=="transform"&&(t=Li[t],~t.indexOf(",")&&(t=t.split(",")[0])),is[t]&&t!=="transform"?(r=Lo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Qc(Zn(e,Fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=jc[t]&&jc[t](e,t,n)||Zn(e,t)||Pf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Fs(e,t,r,n)+n:r},fb=function(e,t,n,i){if(!n||n==="none"){var r=_a(t,e,1),a=r&&Zn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Mn(this._pt,e.style,t,0,1,Bf),l=0,c=0,h,u,f,d,g,_,m,p,S,A,y,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Zn(e,t)||i,_?e.style[t]=_:Os(e,t)),h=[n,i],Lf(h),n=h[0],i=h[1],f=n.match(ur)||[],M=i.match(ur)||[],M.length){for(;u=ur.exec(i);)m=u[0],S=i.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=fr(d,m)+y),p=parseFloat(m),A=m.substr((p+"").length),l=ur.lastIndex-A.length,A||(A=A||On.units[t]||y,l===i.length&&(i+=A,o.e+=A)),y!==A&&(d=Fs(e,t,_,A)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ig:ng;return Ef.test(i)&&(o.e=0),this._pt=o,o},Qm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},db=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Qm[n]||n,t[1]=Qm[i]||i,t.join(" ")},pb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],is[o]&&(l=1,o=o==="transformOrigin"?Fn:It),Os(n,o);l&&(Os(n,It),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),a.uncache=1,sg(i)))}},jc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Mn(e._pt,t,n,0,0,pb);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Io=[1,0,0,1,0,0],cg={},hg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},eg=function(e){var t=Zn(e,It);return hg(t)?Io:t.substr(7).match(Tf).map(Ut)},Kf=function(e,t){var n=e._gsap||Is(e),i=e.style,r=eg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Io:r):(r===Io&&!e.offsetParent&&e!==ma&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ma.appendChild(e)),r=eg(e),l?i.display=l:Os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ma.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Xf=function(e,t,n,i,r,a){var o=e._gsap,l=r||Kf(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],A=t.split(" "),y=parseFloat(A[0])||0,M=parseFloat(A[1])||0,T,w,x,b;n?l!==Io&&(w=d*m-g*_)&&(x=y*(m/w)+M*(-_/w)+(_*S-m*p)/w,b=y*(-g/w)+M*(d/w)-(d*S-g*p)/w,y=x,M=b):(T=og(e),y=T.x+(~A[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(A[1]||A[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&o.smooth?(p=y-c,S=M-h,o.xOffset=u+(p*d+S*_)-p,o.yOffset=f+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(Us(a,o,"xOrigin",c,y),Us(a,o,"yOrigin",h,M),Us(a,o,"xOffset",u,o.xOffset),Us(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Lo=function(e,t){var n=e._gsap||new Df(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zn(e,Fn)||"0",h,u,f,d,g,_,m,p,S,A,y,M,T,w,x,b,R,L,I,N,C,U,z,G,ee,X,K,te,ae,oe,Te,ke;return h=u=f=_=m=p=S=A=y=0,d=g=1,n.svg=!!(e.getCTM&&lg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),w=Kf(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Xf(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,T=n.yOrigin||0,w!==Io&&(L=w[0],I=w[1],N=w[2],C=w[3],h=U=w[4],u=z=w[5],w.length===6?(d=Math.sqrt(L*L+I*I),g=Math.sqrt(C*C+N*N),_=L||I?pa(I,L)*gr:0,S=N||C?pa(N,C)*gr+_:0,S&&(g*=Math.abs(Math.cos(S*ga))),n.svg&&(h-=M-(M*L+T*N),u-=T-(M*I+T*C))):(ke=w[6],oe=w[7],K=w[8],te=w[9],ae=w[10],Te=w[11],h=w[12],u=w[13],f=w[14],x=pa(ke,ae),m=x*gr,x&&(b=Math.cos(-x),R=Math.sin(-x),G=U*b+K*R,ee=z*b+te*R,X=ke*b+ae*R,K=U*-R+K*b,te=z*-R+te*b,ae=ke*-R+ae*b,Te=oe*-R+Te*b,U=G,z=ee,ke=X),x=pa(-N,ae),p=x*gr,x&&(b=Math.cos(-x),R=Math.sin(-x),G=L*b-K*R,ee=I*b-te*R,X=N*b-ae*R,Te=C*R+Te*b,L=G,I=ee,N=X),x=pa(I,L),_=x*gr,x&&(b=Math.cos(x),R=Math.sin(x),G=L*b+I*R,ee=U*b+z*R,I=I*b-L*R,z=z*b-U*R,L=G,U=ee),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ut(Math.sqrt(L*L+I*I+N*N)),g=Ut(Math.sqrt(z*z+ke*ke)),x=pa(U,z),S=Math.abs(x)>2e-4?x*gr:0,y=Te?1/(Te<0?-Te:Te):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hg(Zn(e,It)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Ut(d),n.scaleY=Ut(g),n.rotation=Ut(_)+o,n.rotationX=Ut(m)+o,n.rotationY=Ut(p)+o,n.skewX=S+o,n.skewY=A+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=Qc(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?gb:ag?ug:mb,n.uncache=0,n},Qc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vf=function(e,t,n){var i=sn(t);return Ut(parseFloat(t)+parseFloat(Fs(e,"x",n+"px",i)))+i},mb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ug(e,t)},pr="0deg",Po="0px",mr=") ",ug=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,A=n.zOrigin,y="",M=p==="auto"&&e&&e!==1||p===!0;if(A&&(u!==pr||h!==pr)){var T=parseFloat(h)*ga,w=Math.sin(T),x=Math.cos(T),b;T=parseFloat(u)*ga,b=Math.cos(T),a=Vf(S,a,w*b*-A),o=Vf(S,o,-Math.sin(T)*-A),l=Vf(S,l,x*b*-A+A)}m!==Po&&(y+="perspective("+m+mr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||a!==Po||o!==Po||l!==Po)&&(y+=l!==Po||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+mr),c!==pr&&(y+="rotate("+c+mr),h!==pr&&(y+="rotateY("+h+mr),u!==pr&&(y+="rotateX("+u+mr),(f!==pr||d!==pr)&&(y+="skew("+f+", "+d+mr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+mr),S.style[It]=y||"translate(0, 0)"},gb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,A=parseFloat(a),y=parseFloat(o),M,T,w,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ga,c*=ga,M=Math.cos(l)*u,T=Math.sin(l)*u,w=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ga,b=Math.tan(c-h),b=Math.sqrt(1+b*b),w*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,T*=b)),M=Ut(M),T=Ut(T),w=Ut(w),x=Ut(x)):(M=u,x=f,T=w=0),(A&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(A=Fs(d,"x",a,"px"),y=Fs(d,"y",o,"px")),(g||_||m||p)&&(A=Ut(A+g-(g*M+_*w)+m),y=Ut(y+_-(g*T+_*x)+p)),(i||r)&&(b=d.getBBox(),A=Ut(A+i/100*b.width),y=Ut(y+r/100*b.height)),b="matrix("+M+","+T+","+w+","+x+","+A+","+y+")",d.setAttribute("transform",b),S&&(d.style[It]=b)},_b=function(e,t,n,i,r){var a=360,o=Kt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?gr:1),c=l-i,h=i+c+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Zm)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Zm)%a-~~(c/a)*a)),e._pt=f=new Mn(e._pt,t,n,i,c,QM),f.e=h,f.u="deg",e._props.push(n),f},tg=function(e,t){for(var n in t)e[n]=t[n];return e},xb=function(e,t,n){var i=tg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=Lo(n,1),Os(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],a[It]=t,o=Lo(n,1),a[It]=c);for(l in is)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(d=sn(c),g=sn(h),u=d!==g?Fs(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new Mn(e._pt,o,l,u,f-u,Hf),e._pt.u=g||0,e._props.push(l));tg(o,i)};Sn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});jc[e>1?"border"+s:s]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(g){return ns(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,u)}});var Jf={name:"css",register:Wf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,S,A,y,M,T,w,x,b;qf||Wf(),this.styles=this.styles||rg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Dn[_]&&Uf(_,t,n,i,e,r)))){if(d=typeof h,g=jc[_],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=da(h)),g)g(this,e,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",es.lastIndex=0,es.test(c)||(m=sn(c),p=sn(h),p?m!==p&&(c=Fs(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,_),a.push(_),x.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Kt(c)&&~c.indexOf("random(")&&(c=da(c)),sn(c+"")||c==="auto"||(c+=On.units[_]||sn(ns(e,_))||""),(c+"").charAt(1)==="="&&(c=ns(e,_))):c=ns(e,_),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Li&&(_==="autoAlpha"&&(f===1&&ns(e,"visibility")==="hidden"&&u&&(f=0),x.push("visibility",0,o.visibility),Us(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in is,A){if(this.styles.save(_),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Zn(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=h,h=Zn(e,"perspective"),R?e.style.perspective=R:Os(e,"perspective")}u=parseFloat(h)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Lo(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Mn(this._pt,o,It,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new Mn(this._pt,M,"scaleY",M.scaleY,(S?fr(M.scaleY,S+u):u)-M.scaleY||0,Hf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Fn,0,o[Fn]),h=db(h),M.svg?Xf(e,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==M.zOrigin&&Us(this,M,"zOrigin",M.zOrigin,p),Us(this,o,_,Qc(c),Qc(h)));continue}else if(_==="svgOrigin"){Xf(e,h,1,T,0,this);continue}else if(_ in cg){_b(this,M,_,f,S?fr(f,S+h):h);continue}else if(_==="smoothOrigin"){Us(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){xb(this,h,e);continue}}else _ in o||(_=_a(_)||_);if(A||(u||u===0)&&(f||f===0)&&!jM.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),p=sn(h)||(_ in On.units?On.units[_]:m),m!==p&&(f=Fs(e,_,c,p)),this._pt=new Mn(this._pt,A?M:o,_,f,(S?fr(f,S+u):u)-f,!A&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?nb:Hf),this._pt.u=p||0,A&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=tb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=eb);else if(_ in o)fb.call(this,e,_,c,S?S+h:h);else if(_ in e)this.add(e,_,c||e[_],S?S+h:h,i,r);else if(_!=="parseTransform"){Yc(_,h);continue}A||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}w&&kf(this)},render:function(e,t){if(t.tween._time||!Yf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ns,aliases:Li,getSetter:function(e,t,n){var i=Li[t];return i&&i.indexOf(",")<0&&(t=i),t in is&&t!==Fn&&(e._gsap.x||ns(e,"x"))?n&&Ym===n?t==="scale"?ab:rb:(Ym=n||{})&&(t==="scale"?ob:lb):e.style&&!qc(e.style[t])?ib:~t.indexOf("-")?sb:$c(e,t)},core:{_removeProperty:Os,_getMatrix:Kf}};pn.utils.checkPrefix=_a;pn.core.getStyleSaver=rg;(function(s,e,t,n){var i=Sn(s+","+e+","+t,function(r){is[r]=1});Sn(e,function(r){On.units[r]="deg",cg[r]=1}),Li[i[13]]=s+","+e,Sn(n,function(r){var a=r.split(":");Li[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){On.units[s]="px"});pn.registerPlugin(Jf);var pi=pn.registerPlugin(Jf)||pn,Pw=pi.core.Tween;var xa={home:[0,1,-1],driftdoctor:[-6,-1,3],compatforge:[6,-.2,2],originkeep:[4.7,2,-6.4]},yb={home:"Home",driftdoctor:"Repair Works",compatforge:"Observatory",originkeep:"The Archive"};async function Ow({mount:s,assets:e,onFailure:t,status:n,initialActive:i=!0}){let r=i,a=!1,o=!1,l=0,c=0,h=0,u,f,d,g,_,m,p=!1,S=!0,A={},y=new Set,M=new Set,T=async()=>{if(globalThis.scheduler?.yield?await scheduler.yield():await new Promise(X=>setTimeout(X,0)),o)throw new Error("Renderer lost during initialization")},w=matchMedia("(max-width: 767px)").matches||navigator.hardwareConcurrency<=4;await T();let x=document.createElement("canvas"),b=performance.now(),R=x.getContext("webgl2",{alpha:!0,antialias:!w,powerPreference:"low-power"});if(performance.measure("World WebGL2 context",{start:b}),!R)throw new Error("WebGL2 is unavailable");await T();let L=performance.now(),I=new Rc({canvas:x,context:R,alpha:!0,antialias:!w,powerPreference:"low-power"});I.setPixelRatio(Math.min(devicePixelRatio,w?1.25:1.5)),I.outputColorSpace=Bt,I.toneMapping=so,I.toneMappingExposure=1.35,performance.measure("World renderer setup",{start:L}),s.append(I.domElement),I.domElement.style.touchAction="none",s.dataset.quality=w?"low":"high";let N=new Na;N.fog=new Da("#5d6680",.012);let C=new bi(-15,15,10,-10,.1,150),U=new Lc(C,I.domElement);U.enableDamping=!0,U.dampingFactor=.08,U.enablePan=!1,U.enableZoom=!1,U.minPolarAngle=.75,U.maxPolarAngle=1.35,U.minAzimuthAngle=-.55,U.maxAzimuthAngle=.55;let z=X=>{X.preventDefault(),o||(ee(),t())};I.domElement.addEventListener("webglcontextlost",z);try{let Ce=function(J){return A[J]??=Le.loadAsync(e[J]).then(ce=>{if(w){let be=new Map;ce.scene.traverse(Ae=>{if(!Ae.isMesh)return;let Ze=Be=>(be.has(Be)||(be.set(Be,new Zr({color:Be.color,map:Be.map,alphaTest:Be.alphaTest,side:Be.side,transparent:Be.transparent,opacity:Be.opacity,vertexColors:Be.vertexColors,flatShading:!0})),Be.dispose()),be.get(Be));Ae.material=Array.isArray(Ae.material)?Ae.material.map(Ze):Ze(Ae.material)})}if(o)throw G([ce.scene]),new Error("World was disposed");return y.add(ce.scene),ce.scene})},le=function(){S=!0,he=null;let J=s.clientWidth,ce=s.clientHeight,be=J<768&&ce>J;if(!J||!ce)return;let Ae=be?Math.max(32,19.5*ce/J):Math.max(19,24*ce/J);if(C.left=-Ae*J/ce/2,C.right=Ae*J/ce/2,C.top=Ae/2,C.bottom=-Ae/2,C.updateProjectionMatrix(),I.getSize(j),(j.x!==J||j.y!==ce)&&I.setSize(J,ce,!1),!p){p=!0;let Ze=be?new D(0,5,0):new D(-4,1,0);U.target.copy(Ze),C.position.copy(Ze).add(new D(0,14,27)),U.update()}C.updateMatrixWorld(),me()},me=function(){!he&&F[0].offsetWidth&&(he=F.map(Be=>({width:Be.offsetWidth,height:Be.offsetHeight})));let J=[],ce=s.clientWidth,be=s.clientHeight,Ae=be<500?50:ce<768?220:70,Ze=be-95;for(let[Be,rt]of F.entries()){let Dt=rt.dataset.island,mi=new D(...xa[Dt]).add(He[Dt].userData.label.position).project(C),bn=he?.[Be]||{width:150,height:54},mn=bn.width/2,rn=bn.height/2,xr=Math.round(Math.min(ce-75,Math.max(75,(mi.x*.5+.5)*ce))),ss=Math.round(Math.min(Ze,Math.max(Ae,(-mi.y*.5+.5)*be))),Di=xr,Ni=ss,Do=1/0,eh=[xr,...J.flatMap(Tn=>[Tn.left-mn-8,Tn.right+mn+8])],th=[ss,...J.flatMap(Tn=>[Tn.top-rn-8,Tn.bottom+rn+8])];for(let Tn of eh)for(let Ui of th){if(Tn<75||Tn>ce-75||Ui<Ae||Ui>Ze||J.some(O=>Tn+mn+8>O.left&&Tn-mn-8<O.right&&Ui+rn+8>O.top&&Ui-rn-8<O.bottom))continue;let E=(Tn-xr)**2+(Ui-ss)**2;E<Do&&(Do=E,Di=Tn,Ni=Ui)}Di=Math.round(Di),Ni=Math.round(Ni),J.push({left:Di-mn,right:Di+mn,top:Ni-rn,bottom:Ni+rn}),rt.style.left=`${Di}px`,rt.style.top=`${Ni}px`}},ie=function(J=0){if(!r||o||(l=requestAnimationFrame(ie),J-c<(w?33:24)))return;let ce=Math.min((J-c)/1e3,.05);if(c=J,a||(h+=ce),U.update(),!((a||w)&&!S&&!f?.visible)){if(!a&&!w){for(let[be,Ae]of Object.values(He).entries())Ae.position.y=Object.values(xa)[be][1]+Math.sin(h*.65+be)*.1;dt.rotation.z=h*.1,B.rotation.z=h*.12,Z.rotation.y=h*.07,Q.rotation.y=Math.sin(h*.5)*.15}!a&&f?.visible&&(f.rotation.y=h*.2),me();try{I.render(N,C),S=!1}catch{Ne()}}},Ne=function(){o||(ee(),t())},Me=function(J,ce=!1){if(!He[J]||o)return;s.dataset.destination=J,fe(J),u?.kill();let be=s.clientWidth<768&&s.clientHeight>s.clientWidth,Ae=ce?be?new D(0,5,0):new D(-4,1,0):new D(...xa[J]);!ce&&!be&&(Ae.x+=3.4);let Ze=Ae.clone().add(new D(0,14,27)),Be=ce?1:be?1.12:1.38,rt=ce?"Drag to look around \xB7 choose an island":`${yb[J]} \xB7 close the panel to explore here`;if(U.enabled=!0,C.position.distanceToSquared(Ze)<1e-10&&U.target.distanceToSquared(Ae)<1e-10&&Math.abs(C.zoom-Be)<1e-6){S=!0,n(rt);return}u=pi.timeline({onComplete:()=>{u=null,U.enabled=!0,U.update()}}).to(C.position,{x:Ze.x,y:Ze.y,z:Ze.z,duration:a?0:1.4,ease:"power3.inOut"},0).to(U.target,{x:Ae.x,y:Ae.y,z:Ae.z,duration:a?0:1.4,ease:"power3.inOut"},0).to(C,{zoom:Be,duration:a?0:1.4,onUpdate:()=>{C.updateProjectionMatrix(),S=!0}},0),n(rt)};await T();let X=new ja("#b4d4ee","#d38d72",2.2);N.add(X);let K=new Ms("#ffe3b4",3.2);K.position.set(-7,15,10),N.add(K);let te=new Ms("#b1c8ff",2);te.position.set(8,4,-10),N.add(te);let ae=(J,ce=0,be=.8)=>{let Ae=w?new Zr({color:J,flatShading:!0}):new Si({color:J,metalness:ce,roughness:be,flatShading:!0});return M.add(Ae),Ae},oe=ae("#bac3bc"),Te=ae("#eadbc2"),ke=ae("#314b54"),it=ae("#526e63"),Y=ae("#b96e4c",.55,.35),ne=ae("#e3ae71",.5,.3),ye=w?new Rn({color:"#ffe4a4"}):new Si({color:"#ffe4a4",emissive:"#ffbd6e",emissiveIntensity:2});M.add(ye);let Re=(J,ce,be,Ae=0,Ze=0,Be=0)=>{let rt=new Xt(J,ce);return rt.position.set(Ae,Ze,Be),be.add(rt),rt},ue=(J,ce,be,Ae,Ze,Be=0,rt=0,Dt=0)=>Re(new vs(ce,be,Ae),Ze,J,Be,rt,Dt),Oe=(J,ce,be,Ae,Ze=0,Be=0,rt=0,Dt=24)=>Re(new Ks(ce,ce,be,Dt),Ae,J,Ze,Be,rt),Tt=(J,ce,be,Ae,Ze=0,Be=0,rt=0)=>Re(new qa(ce,be,8,48),Ae,J,Ze,Be,rt),He={},et=27,Ge=()=>(et=et*16807%2147483647,(et-1)/2147483646);for(let[J,ce]of Object.entries(xa)){let be=new en;be.position.fromArray(ce),N.add(be),He[J]=be;let Ae=J==="home"?2.65:2.05,Ze=Oe(be,Ae,.35,Te,0,0,0,9);Ze.rotation.y=.2;let Be=Oe(be,Ae*.96,.12,it,0,.2,0,9);Be.rotation.y=.2,Re(new Yr(Ae*.98,2.2,7),oe,be,0,-1.3,0).rotation.z=Math.PI;for(let bn=0;bn<8;bn++){let mn=bn/8*Math.PI*2,rn=Re(new Js(.45+Ge()*.35),bn%2?oe:Te,be,Math.cos(mn)*Ae*.73,-.6-Ge()*.5,Math.sin(mn)*Ae*.73);rn.scale.y=1.9,rn.rotation.set(Ge(),Ge(),Ge())}let rt=Re(new Zs(Ae*.7,36),Te,be,0,.275,0);rt.rotation.x=-Math.PI/2;let Dt=Re(new Zs(1.2,32),new Rn({color:"#233c39",transparent:!0,opacity:.18,depthWrite:!1}),be,0,.28,0);Dt.rotation.x=-Math.PI/2;for(let bn=0;bn<7;bn++){let mn=bn*.9,rn=Re(new Js(.12+Ge()*.15),Te,be,Math.sin(mn)*Ae*.86,.32,Math.cos(mn)*Ae*.86);rn.scale.y=.7}let mi=new bt;mi.position.set(0,-1.5,Ae*.7),be.add(mi),be.userData.label=mi,await T()}let Ve=He.home;Oe(Ve,1.05,.25,oe,0,.4,0),Oe(Ve,.67,.3,Te,0,.62,0),Re(new Ks(.38,.65,2.15,8),Te,Ve,0,1.82,0);for(let J=1;J<2.9;J+=.45)Oe(Ve,.4,.06,Y,0,J,0,8);Oe(Ve,.62,.15,Y,0,3.02,0,8),Oe(Ve,.41,.62,ye,0,3.38,0,8);for(let J=0;J<8;J++){let ce=J/8*Math.PI*2;ue(Ve,.05,.65,.05,Y,Math.sin(ce)*.48,3.36,Math.cos(ce)*.48)}Re(new Yr(.74,.4,8),Y,Ve,0,3.9,0),Re(new $s(.1,12,8),ye,Ve,0,4.2,0);let dt=Tt(Ve,1.3,.025,ne,0,2.8,0);dt.rotation.x=1.15,dt.rotation.y=.4;let Ot=new er("#ffc485",8,6);Ot.position.set(0,3.4,0),Ve.add(Ot),await T();let Lt=He.driftdoctor;Oe(Lt,1.25,.25,oe,0,.4,0),ue(Lt,1.65,.35,1.25,ke,0,.7,0);let gt=new en;Lt.add(gt),gt.position.y=.9;let Rt=[];for(let J=0;J<3;J++){let ce=new en;gt.add(ce),ce.position.set((J-1)*.7+(J===0?-.2:0),.38+(J-1)*.23,0),ce.rotation.z=(J-1)*.19,ue(ce,.45,.8,.68,J===1?Te:Y),ue(ce,.48,.07,.73,ne,0,.23,0),ue(ce,.48,.07,.73,ne,0,-.23,0),Rt.push(ce)}let B=Tt(Lt,.47,.13,Y,.85,1.9,.45);for(let J=0;J<10;J++){let ce=ue(B,.18,.26,.25,Y,Math.sin(J*Math.PI/5)*.56,Math.cos(J*Math.PI/5)*.56,0);ce.rotation.z=-J*Math.PI/5}ue(Lt,.4,1.9,.3,Y,-1.2,1.3,-.5),ue(Lt,2.1,.18,.25,Y,-.28,2.2,-.5);let Jt=Re(new $s(.1,12,8),ye,Lt,-1.2,2.35,-.5),at=ae("#a4dfb6",0,.3);await T();let P=He.compatforge;Oe(P,1.17,.35,Te,0,.5,0),Oe(P,.53,.7,Y,0,1,0);let v=new en;v.position.y=1.4,v.rotation.z=-.45,P.add(v);let k=Oe(v,.37,1.55,ke,0,.5,0);k.rotation.x=Math.PI/2,Tt(v,.4,.1,Y,0,.5,.8);let W=ae("#a6d8c4",.4,.2);Re(new Zs(.35,36),W,v,0,.5,.86);let Z=Tt(P,1.25,.025,ne,0,1.45,0);Z.rotation.x=.75,Z.rotation.z=.3;let se=[];for(let J=0;J<3;J++){let ce=(J-1)*.55;Oe(P,.12,.38,Y,ce,.65,1.15),se.push(Re(new $s(.14,16,10),ae(J===0?"#a4d6c5":"#526a76"),P,ce,.97,1.15))}await T();let re=He.originkeep;Oe(re,1.2,.28,Te,0,.4,0);for(let J of[-.95,.95])ue(re,.38,1.65,.4,Te,J,1.25,-.35),ue(re,.53,.15,.53,Y,J,2.05,-.35);ue(re,2.4,.27,.65,Te,0,2.27,-.35),ue(re,2.65,.13,.77,Y,0,2.46,-.35);let $=ae("#eed5ad",.22,.4);m={value:-.1},$.onBeforeCompile=J=>{J.uniforms.uProgress=m,J.vertexShader=J.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPos=position;`),J.fragmentShader=J.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPos;uniform float uProgress;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float noise=fract(sin(dot(floor(vPos*18.0),vec3(12.9898,78.233,37.719)))*43758.5453);if(noise<uProgress)discard;if(noise<uProgress+0.12)gl_FragColor=vec4(1.0,0.65,0.3,1.0);`)},$.customProgramCacheKey=()=>"aarya-dissolve-v1";let Q=new en;re.add(Q),Q.position.set(0,1.45,.35),ue(Q,.78,1.03,.1,$);for(let J=0;J<4;J++)ue(Q,.44,.025,.01,Y,0,.26-J*.16,.06);let de=Tt(re,.72,.022,ne,0,1.45,.35);if(de.rotation.y=.4,!w){let J=new Float32Array(270);for(let be=0;be<90;be++)J[be*3]=(Ge()-.5)*2,J[be*3+1]=.8+Ge()*2,J[be*3+2]=(Ge()-.5)*2;let ce=new wt;ce.setAttribute("position",new zt(J,3)),f=new Ys(ce,new xs({color:"#ffc590",size:.035,transparent:!0,opacity:.75,depthWrite:!1})),re.add(f),f.visible=!1}await T();for(let[J,ce]of[["home","driftdoctor"],["home","compatforge"],["home","originkeep"]]){let be=new D(...xa[J]),Ae=new D(...xa[ce]);be.y-=.35,Ae.y-=.35;let Ze=new Wa(be,be.clone().lerp(Ae,.5).add(new D(0,-1,0)),Ae),Be=new qi(new wt().setFromPoints(Ze.getPoints(30)),new Ya({color:"#f1c6a0",transparent:!0,opacity:.45,dashSize:.1,gapSize:.16}));Be.computeLineDistances(),N.add(Be)}for(let J=0;J<(w?10:25);J++)Re(new Js(.12+Ge()*.3),oe,N,Ge()*27-12,Ge()*8-5,Ge()*12-7).rotation.set(Ge()*3,Ge()*3,Ge()*3);let Le=new Dc,pe=new Set;async function fe(J){if(!pe.has(J)){pe.add(J);try{let[ce,be]=await Promise.all([Ce("birch"),Ce("bush")]);if(o)return;let Ae=He[J],Ze=J==="home"?2.3:1.8;for(let Be=0;Be<(w?2:3);Be++){let rt=ce.clone(!0),Dt=2.1+Be*1.5;rt.position.set(Math.cos(Dt)*Ze,.27,Math.sin(Dt)*Ze),rt.scale.setScalar(.29+Ge()*.1),rt.rotation.y=Ge()*6,Ae.add(rt)}for(let Be=0;Be<3;Be++){let rt=be.clone(!0),Dt=.3+Be*2;rt.position.set(Math.cos(Dt)*Ze,.27,Math.sin(Dt)*Ze),rt.scale.setScalar(.48),Ae.add(rt)}S=!0}catch{o||n("Some scenery could not load. All destinations and project content remain available.")}}}if(await fe("home"),o)throw new Error("Renderer lost during initialization");g=(window.requestIdleCallback||(J=>setTimeout(J,1e3)))(async()=>{for(let J of["driftdoctor","compatforge","originkeep"]){if(o)return;await fe(J),globalThis.scheduler?.yield?await scheduler.yield():await new Promise(ce=>setTimeout(ce,0))}},{timeout:5e3});let We=Promise.resolve();w?s.dataset.lighting="built-in":We=new Oc().loadAsync(e.environment).then(J=>{if(o){J.dispose();return}J.mapping=ir,N.environment=J,N.environmentIntensity=.22,s.dataset.lighting="environment"}).catch(()=>{o||(s.dataset.lighting="built-in",n("Using the world\u2019s built-in dusk lighting."))});let F=[...document.querySelectorAll(".island-labels [data-island]")],he,j=new Ie;U.addEventListener("start",()=>{u?.kill(),u=null,s.dataset.orbit="dragging"}),U.addEventListener("end",()=>{s.dataset.orbit="idle"}),U.addEventListener("change",()=>{S=!0}),le(),_=new ResizeObserver(le),_.observe(s),await We,await T();let pt=performance.now();await I.compileAsync(N,C),performance.measure("World shader preparation",{start:pt}),await T();let nt=N.children.map(J=>{let ce=[];return J.traverseVisible(be=>{(be.isMesh||be.isPoints||be.isLine||be.isSprite)&&ce.push(be)}),ce}).filter(J=>J.length);for(let J of nt.flat())J.visible=!1;let Bn=performance.now();I.setSize(1,1,!1);try{for(let J of nt){for(let ce of J)ce.visible=!0;I.render(N,C);for(let ce of J)ce.visible=!1;await T()}}finally{for(let J of nt.flat())J.visible=!0;le()}performance.measure("World buffer uploads",{start:Bn});let Kn=performance.now();return I.render(N,C),performance.measure("World first full frame",{start:Kn}),await T(),C.updateMatrixWorld(),me(),ie(),{refreshLayout:le,getView(){return{position:C.position.toArray(),target:U.target.toArray(),zoom:C.zoom}},setView(J){S=!0,u?.kill(),C.position.fromArray(J.position),U.target.fromArray(J.target),C.zoom=J.zoom,C.updateProjectionMatrix(),U.update(),me()},travel:Me,reset(){Me("home",!0)},setActive(J){S=!0,r=J&&!document.hidden,r?(le(),cancelAnimationFrame(l),c=performance.now(),ie(c)):(cancelAnimationFrame(l),u?.pause()),r&&u?.resume(),s.dataset.rendering=r?"active":"paused"},setPaused(J){a=J,S=!0,s.dataset.motion=J?"paused":"active"},panelEnter(J){a||pi.fromTo(J,{opacity:0,x:14},{opacity:1,x:0,duration:.35,ease:"power2.out",clearProps:"transform,opacity"})},demo(J,ce,be=!1){S=!0;let Ae=!a&&!be;if(s.dataset[`${J}State`]=String(ce),J==="repair"){for(let[Ze,Be]of Rt.entries())pi.killTweensOf([Be.position,Be.rotation]),pi.to(Be.position,{x:(Ze-1)*.7+(ce?0:Ze===0?-.2:0),y:ce?.38:.38+(Ze-1)*.23,duration:Ae?.7:0,delay:Ae?Ze*.12:0,onUpdate:()=>{S=!0}}),pi.to(Be.rotation,{z:ce?0:(Ze-1)*.19,duration:Ae?.7:0,onUpdate:()=>{S=!0}});Jt.material=ce?at:ye}if(J==="evidence"){let Ze={supported:"#a4d6c5",unknown:"#c4beab",conflicting:"#ed987e"};W.color.set(Ze[ce]),se.forEach((Be,rt)=>Be.material.color.set(rt==={supported:0,unknown:1,conflicting:2}[ce]?Ze[ce]:"#526a76"))}J==="archive"&&(pi.to(m,{value:ce?1.1:-.1,duration:Ae?1.2:0,ease:"none",overwrite:!0,onUpdate:()=>{S=!0}}),d?.kill(),f&&(f.visible=Ae,Ae&&(d=pi.delayedCall(1.3,()=>{f.visible=!1,S=!0}))))},dispose:ee}}catch(X){throw ee(),X}function G(X){let K=new Set,te=new Set(M),ae=new Set;for(let oe of X)oe.traverse(Te=>{Te.geometry&&K.add(Te.geometry);for(let ke of Array.isArray(Te.material)?Te.material:[Te.material])ke&&te.add(ke);pi.killTweensOf([Te.position,Te.rotation])});for(let oe of te){for(let Te of Object.values(oe))Te?.isTexture&&ae.add(Te);oe.dispose()}for(let oe of K)oe.dispose();for(let oe of ae)oe.dispose()}function ee(){o||(o=!0,cancelAnimationFrame(l),u?.kill(),d?.kill(),window.cancelIdleCallback?cancelIdleCallback(g):clearTimeout(g),_?.disconnect(),m&&pi.killTweensOf(m),I.domElement.removeEventListener("webglcontextlost",z),U.dispose(),G([N,...y]),M.clear(),N.environment?.dispose(),I.dispose(),I.forceContextLoss(),I.domElement.remove(),s.dataset.rendering="disposed")}}export{Ow as createWorld};
/*! For license information please see world.js.LEGAL.txt */

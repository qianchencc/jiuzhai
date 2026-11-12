var Tu=0,Al=1,Au=2;var Rl=1,_a=2,Gn=3,Pn=0,De=1,ie=2,ci=0,$i=1,Cl=2,Il=3,Pl=4,Ru=5,Ei=100,Cu=101,Iu=102,Pu=103,Du=104,Lu=200,Uu=201,Fu=202,Nu=203,Go=204,Wo=205,Ou=206,Bu=207,zu=208,Hu=209,ku=210,Vu=211,Gu=212,Wu=213,Xu=214,xa=0,ya=1,va=2,Ji=3,Ma=4,ba=5,Sa=6,wa=7,Dl=0,qu=1,Yu=2,li=0,Zu=1,$u=2,Ju=3,Ku=4,ju=5,Qu=6,Ea=7;var Ll=300,ns=301,is=302,Ta=303,Aa=304,Kr=306,Xo=1e3,wi=1001,qo=1002,xn=1003,td=1004;var jr=1005;var Dn=1006,Ra=1007;var Ci=1008;var Fn=1009,Ul=1010,Fl=1011,Gs=1012,Ca=1013,Ii=1014,Wn=1015,Ws=1016,Ia=1017,Pa=1018,Xs=1020,Nl=35902,Ol=35899,Bl=1021,zl=1022,vn=1023,Is=1026,qs=1027,Hl=1028,Da=1029,kl=1030,La=1031;var Ua=1033,Qr=33776,to=33777,eo=33778,no=33779,Fa=35840,Na=35841,Oa=35842,Ba=35843,za=36196,Ha=37492,ka=37496,Va=37808,Ga=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,Za=37814,$a=37815,Ja=37816,Ka=37817,ja=37818,Qa=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,oc=36284,ac=36285,cc=36286;var vr=2300,Yo=2301,Vo=2302,ml=2400,gl=2401,_l=2402;var ed=3200,nd=3201;var Vl=0,id=1,hi="",Te="srgb",Ki="srgb-linear",Mr="linear",ce="srgb";var Zi=7680;var xl=519,sd=512,rd=513,od=514,Gl=515,ad=516,cd=517,ld=518,hd=519,yl=35044,Pi=35048;var Wl="300 es",In=2e3,br=2001;var ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,gr=Math.PI/180,Ps=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Xl(i,t){return(i%t+t)%t}function Ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tp(i,t,e){return i!==t?(e-i)/(t-i):0}function _r(i,t,e){return(1-e)*i+e*t}function Ap(i,t,e,n){return _r(i,t,1-Math.exp(-e*n))}function Rp(i,t=1){return t-Math.abs(Xl(i,t*2)-t)}function Cp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dp(i,t){return i+Math.random()*(t-i)}function Lp(i){return i*(.5-Math.random())}function Up(i){i!==void 0&&(tu=i);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(i){return i*gr}function Np(i){return i*Ps}function Op(i){return(i&i-1)===0&&i!==0}function Bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var me={DEG2RAD:gr,RAD2DEG:Ps,generateUUID:ss,clamp:$t,euclideanModulo:Xl,mapLinear:Ep,inverseLerp:Tp,lerp:_r,damp:Ap,pingpong:Rp,smoothstep:Cp,smootherstep:Ip,randInt:Pp,randFloat:Dp,randFloatSpread:Lp,seededRandom:Up,degToRad:Fp,radToDeg:Np,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Hp,normalize:Ye,denormalize:Rs},xt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ii=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(u!==y||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*y,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let M=Math.sqrt(v),w=Math.atan2(M,p*x);m=Math.sin(m*w)/M,a=Math.sin(a*w)/M}let _=a*x;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+y*_,m===1-a){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wc=new U,eu=new ii,Zt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],v=s[4],_=s[7],M=s[2],w=s[5],E=s[8];return r[0]=o*y+a*x+c*M,r[3]=o*m+a*v+c*w,r[6]=o*p+a*_+c*E,r[1]=l*y+h*x+u*M,r[4]=l*m+h*v+u*w,r[7]=l*p+h*_+u*E,r[2]=f*y+d*x+g*M,r[5]=f*m+d*v+g*w,r[8]=f*p+d*_+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xc.makeScale(t,e)),this}rotate(t){return this.premultiply(Xc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Xc=new Zt;function ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=Sr("canvas");return i.style.display="block",i}var nu={};function Ds(i){i in nu||(nu[i]=!0,console.warn(i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var iu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){let i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:t,whitePoint:n,transfer:Mr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Te},outputColorSpaceConfig:{drawingBufferColorSpace:Te}},[Te]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Te}}}),i}var te=kp();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,Zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gs===void 0&&(gs=Sr("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vp=0,Ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qc(s[o].image)):r.push(qc(s[o]))}else r=qc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gp=0,Yc=new U,je=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wi,s=wi,r=Dn,o=Ci,a=vn,c=Fn,l=i.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=ss(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Ll;je.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(d+1)/2,M=(p+1)/2,w=(h+f)/4,E=(u+y)/4,T=(g+m)/4;return v>_&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=E/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=T/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=T/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-y)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new je(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends $o{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jo=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),bo.subVectors(this.max,ur),_s.subVectors(t.a,ur),xs.subVectors(t.b,ur),ys.subVectors(t.c,ur),_i.subVectors(xs,_s),xi.subVectors(ys,xs),Wi.subVectors(_s,ys);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Wi.z,Wi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Wi.z,0,-Wi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Wi.y,Wi.x,0];return!Zc(e,_s,xs,ys,bo)||(e=[1,0,0,0,1,0,0,0,1],!Zc(e,_s,xs,ys,bo))?!1:(So.crossVectors(_i,xi),e=[So.x,So.y,So.z],Zc(e,_s,xs,ys,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,Mo=new Ti,_s=new U,xs=new U,ys=new U,_i=new U,xi=new U,Wi=new U,ur=new U,bo=new U,So=new U,Xi=new U;function Zc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Wp=new Ti,dr=new U,$c=new U,Us=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add($c)),this.expandByPoint(dr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kn=new U,Jc=new U,wo=new U,yi=new U,Kc=new U,Eo=new U,jc=new U,Er=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),wo.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wo),a=yi.dot(this.direction),c=-yi.dot(wo),l=yi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(wo,f),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Kc.subVectors(e,t),Eo.subVectors(n,t),jc.crossVectors(Kc,Eo);let o=this.direction.dot(jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let c=a*this.direction.dot(Eo.crossVectors(yi,Eo));if(c<0)return null;let l=a*this.direction.dot(Kc.cross(yi));if(l<0||c+l>o)return null;let h=-a*yi.dot(jc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,y=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*u,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+y,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xp,t,qp)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),vi.crossVectors(n,cn),vi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),vi.crossVectors(n,cn)),vi.normalize(),To.crossVectors(cn,vi),s[0]=vi.x,s[4]=To.x,s[8]=cn.x,s[1]=vi.y,s[5]=To.y,s[9]=cn.y,s[2]=vi.z,s[6]=To.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],v=n[7],_=n[11],M=n[15],w=s[0],E=s[4],T=s[8],S=s[12],b=s[1],C=s[5],A=s[9],P=s[13],L=s[2],O=s[6],N=s[10],H=s[14],z=s[3],j=s[7],X=s[11],et=s[15];return r[0]=o*w+a*b+c*L+l*z,r[4]=o*E+a*C+c*O+l*j,r[8]=o*T+a*A+c*N+l*X,r[12]=o*S+a*P+c*H+l*et,r[1]=h*w+u*b+f*L+d*z,r[5]=h*E+u*C+f*O+d*j,r[9]=h*T+u*A+f*N+d*X,r[13]=h*S+u*P+f*H+d*et,r[2]=g*w+y*b+m*L+p*z,r[6]=g*E+y*C+m*O+p*j,r[10]=g*T+y*A+m*N+p*X,r[14]=g*S+y*P+m*H+p*et,r[3]=x*w+v*b+_*L+M*z,r[7]=x*E+v*C+_*O+M*j,r[11]=x*T+v*A+_*N+M*X,r[15]=x*S+v*P+_*H+M*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+y*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=u*m*l-y*f*l+y*c*d-a*m*d-u*c*p+a*f*p,v=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,_=h*y*l-g*u*l+g*a*d-o*y*d-h*a*p+o*u*p,M=g*u*c-h*y*c-g*a*f+o*y*f+h*a*m-o*u*m,w=e*x+n*v+s*_+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=x*E,t[1]=(y*f*r-u*m*r-y*s*d+n*m*d+u*s*p-n*f*p)*E,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*E,t[4]=v*E,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=_*E,t[9]=(g*u*r-h*y*r-g*n*d+e*y*d+h*n*p-e*u*p)*E,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*E,t[12]=M*E,t[13]=(h*y*s-g*u*s+g*n*f-e*y*f-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,y=o*h,m=o*u,p=a*u,x=c*l,v=c*h,_=c*u,M=n.x,w=n.y,E=n.z;return s[0]=(1-(y+p))*M,s[1]=(d+_)*M,s[2]=(g-v)*M,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(g+v)*E,s[9]=(m-x)*E,s[10]=(1-(f+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);let l=1/r,h=1/o,u=1/a;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===In)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===br)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===In)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===br)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new U,Rn=new le,Xp=new U(0,0,0),qp=new U(1,1,1),vi=new U,To=new U,cn=new U,ru=new le,ou=new ii,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yp=0,au=new U,Ms=new ii,jn=new le,Ao=new U,fr=new U,Zp=new U,$p=new ii,cu=new U(1,0,0),lu=new U(0,1,0),hu=new U(0,0,1),uu={type:"added"},Jp={type:"removed"},bs={type:"childadded",child:null},Qc={type:"childremoved",child:null},ze=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Ln,n=new ii,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(fr,Ao,this.up):jn.lookAt(Ao,fr,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(jn),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jp),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Zp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,$p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new U(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cn=new U,Qn=new U,tl=new U,ti=new U,Ss=new U,ws=new U,du=new U,el=new U,nl=new U,il=new U,sl=new Me,rl=new Me,ol=new Me,Si=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Qn.subVectors(n,e),tl.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Qn),c=Cn.dot(tl),l=Qn.dot(Qn),h=Qn.dot(tl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Qn.subVectors(t,e),Cn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ss.subVectors(s,n),ws.subVectors(r,n),el.subVectors(t,n);let c=Ss.dot(el),l=ws.dot(el);if(c<=0&&l<=0)return e.copy(n);nl.subVectors(t,s);let h=Ss.dot(nl),u=ws.dot(nl);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ss,o);il.subVectors(t,r);let d=Ss.dot(il),g=ws.dot(il);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ws,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return du.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(du,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Xl(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=al(o,r,t+1/3),this.g=al(o,r,t),this.b=al(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){let n=fd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.workingToColorSpace(Ne.copy(this),t),Math.round($t(Ne.r*255,0,255))*65536+Math.round($t(Ne.g*255,0,255))*256+Math.round($t(Ne.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Te){te.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Ro);let n=_r(Mi.h,Ro.h,e),s=_r(Mi.s,Ro.s,e),r=_r(Mi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Mt;Mt.NAMES=fd;var Kp=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=$i,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},He=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new U,Co=new xt,jp=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),t}};var Tr=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qp=0,_n=new le,cl=new ze,Es=new U,ln=new Ti,pr=new Ti,Ie=new U,se=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?Ar:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(ln.min,pr.min),ln.expandByPoint(Ie),Ie.addVectors(ln.max,pr.max),ln.expandByPoint(Ie)):(ln.expandByPoint(pr.min),ln.expandByPoint(pr.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(t,l),Ie.add(Es)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new U,c[T]=new U;let l=new U,h=new U,u=new U,f=new xt,d=new xt,g=new xt,y=new U,m=new U;function p(T,S,b){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[T].add(y),a[S].add(y),a[b].add(y),c[T].add(m),c[S].add(m),c[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let T=0,S=x.length;T<S;++T){let b=x[T],C=b.start,A=b.count;for(let P=C,L=C+A;P<L;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let v=new U,_=new U,M=new U,w=new U;function E(T){M.fromBufferAttribute(s,T),w.copy(M);let S=a[T];v.copy(S),v.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(w,S);let C=_.dot(c[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,C)}for(let T=0,S=x.length;T<S;++T){let b=x[T],C=b.start,A=b.count;for(let P=C,L=C+A;P<L;P+=3)E(t.getX(P+0)),E(t.getX(P+1)),E(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new le,qi=new Er,Io=new Us,pu=new U,Po=new U,Do=new U,Lo=new U,ll=new U,Uo=new U,mu=new U,Fo=new U,jt=class extends ze{constructor(t=new se,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ll.fromBufferAttribute(u,t),o?Uo.addScaledVector(ll,h):Uo.addScaledVector(ll.sub(e),h))}e.add(Uo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Io.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Io,pu)===null||qi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),qi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=v;_<M;_+=3){let w=a.getX(_),E=a.getX(_+1),T=a.getX(_+2);s=No(this,p,t,n,l,h,u,w,E,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=No(this,o,t,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=v;_<M;_+=3){let w=_,E=_+1,T=_+2;s=No(this,p,t,n,l,h,u,w,E,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=m,v=m+1,_=m+2;s=No(this,o,t,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tm(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fo);return l<e.near||l>e.far?null:{distance:l,point:Fo.clone(),object:i}}function No(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Po),i.getVertexPosition(c,Do),i.getVertexPosition(l,Lo);let h=tm(i,t,e,n,Po,Do,Lo,mu);if(h){let u=new U;Si.getBarycoord(mu,Po,Do,Lo,u),s&&(h.uv=Si.getInterpolatedAttribute(s,a,c,l,u,new xt)),r&&(h.uv1=Si.getInterpolatedAttribute(r,a,c,l,u,new xt)),o&&(h.normal=Si.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};Si.getNormal(Po,Do,Lo,f.normal),h.face=f,h.barycoord=u}return h}var Qe=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(y,m,p,x,v,_,M,w,E,T,S){let b=_/E,C=M/T,A=_/2,P=M/2,L=w/2,O=E+1,N=T+1,H=0,z=0,j=new U;for(let X=0;X<N;X++){let et=X*C-P;for(let St=0;St<O;St++){let ct=St*b-A;j[y]=ct*x,j[m]=et*v,j[p]=L,l.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(St/E),u.push(1-X/T),H+=1}}for(let X=0;X<T;X++)for(let et=0;et<E;et++){let St=f+et+O*X,ct=f+et+O*(X+1),dt=f+(et+1)+O*(X+1),bt=f+(et+1)+O*X;c.push(St,ct,bt),c.push(ct,dt,bt),z+=6}a.addGroup(d,z,S),d+=z,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function em(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var pd={clone:rs,merge:ke},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=em(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rr=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new U,gu=new xt,_u=new xt,Oe=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,_u),e.subVectors(_u,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=-90,As=1,Ko=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Ts,As,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Ts,As,t,e);r.layers=this.layers,this.add(r);let o=new Oe(Ts,As,t,e);o.layers=this.layers,this.add(o);let a=new Oe(Ts,As,t,e);a.layers=this.layers,this.add(a);let c=new Oe(Ts,As,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Ts,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Cr=class extends je{constructor(t=[],e=ns,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jo=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ci});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Dn),new Ko(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},oe=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},sm={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Ir=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var hl=new U,rm=new U,om=new Zt,kn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||om.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Us,am=new xt(.5,.5),Oo=new U,Os=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,o=new kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],v=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-o,d-h,p-g,M-x).normalize(),s[1].setComponents(l+o,d+h,p+g,M+x).normalize(),s[2].setComponents(l+a,d+u,p+y,M+v).normalize(),s[3].setComponents(l-a,d-u,p-y,M-v).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,p-m,M-_).normalize();else if(s[4].setComponents(l-c,d-f,p-m,M-_).normalize(),e===In)s[5].setComponents(l+c,d+f,p+m,M+_).normalize();else if(e===br)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=am.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pr=class extends je{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Dr=class extends je{constructor(t,e,n=Ii,s,r,o,a=xn,c=xn,l,h=Is,u=1){if(h!==Is&&h!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Lr=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ri=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function x(){let _=new U,M=new U,w=0,E=(e-t)/n;for(let T=0;T<=r;T++){let S=[],b=T/r,C=b*(e-t)+t;for(let A=0;A<=s;A++){let P=A/s,L=P*c+a,O=Math.sin(L),N=Math.cos(L);M.x=C*O,M.y=-b*n+m,M.z=C*N,u.push(M.x,M.y,M.z),_.set(O,E,N).normalize(),f.push(_.x,_.y,_.z),d.push(P,1-b),S.push(g++)}y.push(S)}for(let T=0;T<s;T++)for(let S=0;S<r;S++){let b=y[S][T],C=y[S+1][T],A=y[S+1][T+1],P=y[S][T+1];(t>0||S!==0)&&(h.push(b,C,P),w+=3),(e>0||S!==r-1)&&(h.push(C,A,P),w+=3)}l.addGroup(p,w,0),p+=w}function v(_){let M=g,w=new xt,E=new U,T=0,S=_===!0?t:e,b=_===!0?1:-1;for(let A=1;A<=s;A++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;let C=g;for(let A=0;A<=s;A++){let L=A/s*c+a,O=Math.cos(L),N=Math.sin(L);E.x=S*N,E.y=m*b,E.z=S*O,u.push(E.x,E.y,E.z),f.push(0,b,0),w.x=O*.5+.5,w.y=N*.5*b+.5,d.push(w.x,w.y),g++}for(let A=0;A<s;A++){let P=M+A,L=C+A;_===!0?h.push(L,L+1,P):h.push(L+1,L,P),T+=3}l.addGroup(p,T,_===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qo=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new U,_=new U,M=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],v),d(e[w+1],_),d(e[w+2],M),c(v,_,M,x)}function c(x,v,_,M){let w=M+1,E=[];for(let T=0;T<=w;T++){E[T]=[];let S=x.clone().lerp(_,T/w),b=v.clone().lerp(_,T/w),C=w-T;for(let A=0;A<=C;A++)A===0&&T===w?E[T][A]=S:E[T][A]=S.clone().lerp(b,A/C)}for(let T=0;T<w;T++)for(let S=0;S<2*(w-T)-1;S++){let b=Math.floor(S/2);S%2===0?(f(E[T][b+1]),f(E[T+1][b]),f(E[T][b])):(f(E[T][b+1]),f(E[T+1][b+1]),f(E[T+1][b]))}}function l(x){let v=new U;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new U;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=m(x)/2/Math.PI+.5,M=p(x)/Math.PI+.5;o.push(_,1-M)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let v=o[x+0],_=o[x+2],M=o[x+4],w=Math.max(v,_,M),E=Math.min(v,_,M);w>.9&&E<.1&&(v<.2&&(o[x+0]+=1),_<.2&&(o[x+2]+=1),M<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,v){let _=x*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let x=new U,v=new U,_=new U,M=new U,w=new xt,E=new xt,T=new xt;for(let S=0,b=0;S<r.length;S+=9,b+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),T.set(o[b+4],o[b+5]),M.copy(x).add(v).add(_).divideScalar(3);let C=m(M);y(w,b+0,x,C),y(E,b+2,v,C),y(T,b+4,_,C)}}function y(x,v,_,M){M<0&&x.x===1&&(o[v]=x.x-1),_.x===0&&_.z===0&&(o[v]=M/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new xt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new le;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($t(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Bs=class extends hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ta=class extends Bs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Bo=new U,ul=new Zl,dl=new Zl,fl=new Zl,oi=class extends hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Bo.subVectors(s[0],s[1]).add(s[0]),l=Bo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ul.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,y,m),dl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,y,m),fl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),dl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ul.calc(c),dl.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function cm(i,t){let e=1-i;return e*e*t}function lm(i,t){return 2*(1-i)*i*t}function hm(i,t){return i*i*t}function xr(i,t,e,n){return cm(i,t)+lm(i,e)+hm(i,n)}function um(i,t){let e=1-i;return e*e*e*t}function dm(i,t){let e=1-i;return 3*e*e*i*t}function fm(i,t){return 3*(1-i)*i*i*t}function pm(i,t){return i*i*i*t}function yr(i,t,e,n,s){return um(i,t)+dm(i,e)+fm(i,n)+pm(i,s)}var Ur=class extends hn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends hn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(t,s.x,r.x,o.x,a.x),yr(t,s.y,r.y,o.y,a.y),yr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends hn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends hn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends hn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ji=class extends hn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(t,s.x,r.x,o.x),xr(t,s.y,r.y,o.y),xr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xu(a,c.x,l.x,h.x,u.x),xu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},ia=Object.freeze({__proto__:null,ArcCurve:ta,CatmullRomCurve3:oi,CubicBezierCurve:Ur,CubicBezierCurve3:ea,EllipseCurve:Bs,LineCurve:Fr,LineCurve3:na,QuadraticBezierCurve:Nr,QuadraticBezierCurve3:ji,SplineCurve:Or}),sa=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ia[s.type]().fromJSON(s))}return this}},Br=class extends sa{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Nr(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Ur(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Bs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},yn=class extends Br{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}};function mm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=md(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=vm(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return zr(r,o,e,a,c,l,0),o}function md(i,t,e,n,s){let r;if(s===Pm(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yu(o/n|0,i[o],i[o+1],r);return r&&zs(r,r.next)&&(kr(r),r=r.next),r}function Qi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||ve(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Em(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?_m(i,n,s,r):gm(i)){t.push(c.i,i.i,l.i),kr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xm(Qi(i),t),zr(i,t,e,n,s,r,2)):o===2&&ym(i,t,e,n,s,r):zr(Qi(i),t,e,n,s,r,1);break}}}function gm(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&mr(s,a,r,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),y=Math.max(a,c,l),m=Math.max(h,u,f),p=vl(d,g,t,e,n),x=vl(y,m,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&mr(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&mr(a,h,c,u,l,f,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&mr(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&mr(a,h,c,u,l,f,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!zs(n,s)&&_d(n,e,e.next,s)&&Hr(n,s)&&Hr(s,n)&&(t.push(n.i,e.i,s.i),kr(e),kr(e.next),e=i=s),e=e.next}while(e!==i);return Qi(e)}function ym(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rm(o,a)){let c=xd(o,a);o=Qi(o,o.next),c=Qi(c,c.next),zr(o,t,e,n,s,r,0),zr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=md(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Am(l))}s.sort(Mm);for(let r=0;r<s.length;r++)e=bm(s[r],e);return e}function Mm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bm(i,t){let e=Sm(i,t);if(!e)return t;let n=xd(e,i);return Qi(n,n.next),Qi(e,e.next)}function Sm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(zs(i,e))return e;do{if(zs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&gd(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Hr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&wm(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function wm(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Em(i,t,e,n){let s=i;do s.z===0&&(s.z=vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tm(s)}function Tm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Am(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function mr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&gd(i,t,e,n,s,r,o,a)}function Rm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cm(i,t)&&(Hr(i,t)&&Hr(t,i)&&Im(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||zs(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function zs(i,t){return i.x===t.x&&i.y===t.y}function _d(i,t,e,n){let s=Ho(ve(i,t,e)),r=Ho(ve(i,t,n)),o=Ho(ve(e,n,i)),a=Ho(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&zo(i,e,t)||r===0&&zo(i,n,t)||o===0&&zo(e,i,n)||a===0&&zo(e,t,n))}function zo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ho(i){return i>0?1:i<0?-1:0}function Cm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_d(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Im(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xd(i,t){let e=Ml(i.i,i.x,i.y),n=Ml(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yu(i,t,e,n){let s=Ml(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ml(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bl=class{static triangulate(t,e,n=2){return mm(t,e,n)}},Be=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vu(t),Mu(n,t);let o=t.length;e.forEach(vu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Mu(n,e[c]);let a=bl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function vu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vr=class i extends se{constructor(t=new yn([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Vt(s,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Dm,v,_=!1,M,w,E,T;p&&(v=p.getSpacedPoints(h),_=!0,f=!1,M=p.computeFrenetFrames(h,!1),w=new U,E=new U,T=new U),f||(m=0,d=0,g=0,y=0);let S=a.extractPoints(l),b=S.shape,C=S.holes;if(!Be.isClockWise(b)){b=b.reverse();for(let nt=0,tt=C.length;nt<tt;nt++){let K=C[nt];Be.isClockWise(K)&&(C[nt]=K.reverse())}}function P(nt){let K=10000000000000001e-36,J=nt[0];for(let ht=1;ht<=nt.length;ht++){let st=ht%nt.length,ut=nt[st],Ot=ut.x-J.x,Lt=ut.y-J.y,D=Ot*Ot+Lt*Lt,R=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(J.x),Math.abs(J.y)),k=K*R*R;if(D<=k){nt.splice(st,1),ht--;continue}J=ut}}P(b),C.forEach(P);let L=C.length,O=b;for(let nt=0;nt<L;nt++){let tt=C[nt];b=b.concat(tt)}function N(nt,tt,K){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(tt,K)}let H=b.length;function z(nt,tt,K){let J,ht,st,ut=nt.x-tt.x,Ot=nt.y-tt.y,Lt=K.x-nt.x,D=K.y-nt.y,R=ut*ut+Ot*Ot,k=ut*D-Ot*Lt;if(Math.abs(k)>Number.EPSILON){let Y=Math.sqrt(R),rt=Math.sqrt(Lt*Lt+D*D),Q=tt.x-Ot/Y,Et=tt.y+ut/Y,at=K.x-D/rt,At=K.y+Lt/rt,Rt=((at-Q)*D-(At-Et)*Lt)/(ut*D-Ot*Lt);J=Q+ut*Rt-nt.x,ht=Et+Ot*Rt-nt.y;let ot=J*J+ht*ht;if(ot<=2)return new xt(J,ht);st=Math.sqrt(ot/2)}else{let Y=!1;ut>Number.EPSILON?Lt>Number.EPSILON&&(Y=!0):ut<-Number.EPSILON?Lt<-Number.EPSILON&&(Y=!0):Math.sign(Ot)===Math.sign(D)&&(Y=!0),Y?(J=-Ot,ht=ut,st=Math.sqrt(R)):(J=ut,ht=Ot,st=Math.sqrt(R/2))}return new xt(J/st,ht/st)}let j=[];for(let nt=0,tt=O.length,K=tt-1,J=nt+1;nt<tt;nt++,K++,J++)K===tt&&(K=0),J===tt&&(J=0),j[nt]=z(O[nt],O[K],O[J]);let X=[],et,St=j.concat();for(let nt=0,tt=L;nt<tt;nt++){let K=C[nt];et=[];for(let J=0,ht=K.length,st=ht-1,ut=J+1;J<ht;J++,st++,ut++)st===ht&&(st=0),ut===ht&&(ut=0),et[J]=z(K[J],K[st],K[ut]);X.push(et),St=St.concat(et)}let ct;if(m===0)ct=Be.triangulateShape(O,C);else{let nt=[],tt=[];for(let K=0;K<m;K++){let J=K/m,ht=d*Math.cos(J*Math.PI/2),st=g*Math.sin(J*Math.PI/2)+y;for(let ut=0,Ot=O.length;ut<Ot;ut++){let Lt=N(O[ut],j[ut],st);yt(Lt.x,Lt.y,-ht),J===0&&nt.push(Lt)}for(let ut=0,Ot=L;ut<Ot;ut++){let Lt=C[ut];et=X[ut];let D=[];for(let R=0,k=Lt.length;R<k;R++){let Y=N(Lt[R],et[R],st);yt(Y.x,Y.y,-ht),J===0&&D.push(Y)}J===0&&tt.push(D)}}ct=Be.triangulateShape(nt,tt)}let dt=ct.length,bt=g+y;for(let nt=0;nt<H;nt++){let tt=f?N(b[nt],St[nt],bt):b[nt];_?(E.copy(M.normals[0]).multiplyScalar(tt.x),w.copy(M.binormals[0]).multiplyScalar(tt.y),T.copy(v[0]).add(E).add(w),yt(T.x,T.y,T.z)):yt(tt.x,tt.y,0)}for(let nt=1;nt<=h;nt++)for(let tt=0;tt<H;tt++){let K=f?N(b[tt],St[tt],bt):b[tt];_?(E.copy(M.normals[nt]).multiplyScalar(K.x),w.copy(M.binormals[nt]).multiplyScalar(K.y),T.copy(v[nt]).add(E).add(w),yt(T.x,T.y,T.z)):yt(K.x,K.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let tt=nt/m,K=d*Math.cos(tt*Math.PI/2),J=g*Math.sin(tt*Math.PI/2)+y;for(let ht=0,st=O.length;ht<st;ht++){let ut=N(O[ht],j[ht],J);yt(ut.x,ut.y,u+K)}for(let ht=0,st=C.length;ht<st;ht++){let ut=C[ht];et=X[ht];for(let Ot=0,Lt=ut.length;Ot<Lt;Ot++){let D=N(ut[Ot],et[Ot],J);_?yt(D.x,D.y+v[h-1].y,v[h-1].x+K):yt(D.x,D.y,u+K)}}}W(),q();function W(){let nt=s.length/3;if(f){let tt=0,K=H*tt;for(let J=0;J<dt;J++){let ht=ct[J];gt(ht[2]+K,ht[1]+K,ht[0]+K)}tt=h+m*2,K=H*tt;for(let J=0;J<dt;J++){let ht=ct[J];gt(ht[0]+K,ht[1]+K,ht[2]+K)}}else{for(let tt=0;tt<dt;tt++){let K=ct[tt];gt(K[2],K[1],K[0])}for(let tt=0;tt<dt;tt++){let K=ct[tt];gt(K[0]+H*h,K[1]+H*h,K[2]+H*h)}}n.addGroup(nt,s.length/3-nt,0)}function q(){let nt=s.length/3,tt=0;pt(O,tt),tt+=O.length;for(let K=0,J=C.length;K<J;K++){let ht=C[K];pt(ht,tt),tt+=ht.length}n.addGroup(nt,s.length/3-nt,1)}function pt(nt,tt){let K=nt.length;for(;--K>=0;){let J=K,ht=K-1;ht<0&&(ht=nt.length-1);for(let st=0,ut=h+m*2;st<ut;st++){let Ot=H*st,Lt=H*(st+1),D=tt+J+Ot,R=tt+ht+Ot,k=tt+ht+Lt,Y=tt+J+Lt;Gt(D,R,k,Y)}}}function yt(nt,tt,K){c.push(nt),c.push(tt),c.push(K)}function gt(nt,tt,K){Wt(nt),Wt(tt),Wt(K);let J=s.length/3,ht=x.generateTopUV(n,s,J-3,J-2,J-1);F(ht[0]),F(ht[1]),F(ht[2])}function Gt(nt,tt,K,J){Wt(nt),Wt(tt),Wt(J),Wt(tt),Wt(K),Wt(J);let ht=s.length/3,st=x.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);F(st[0]),F(st[1]),F(st[3]),F(st[1]),F(st[2]),F(st[3])}function Wt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function F(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ia[s.type]().fromJSON(s)),new i(n,t.options)}},Dm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new xt(r,o),new xt(a,c),new xt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new xt(o,1-c),new xt(l,1-u),new xt(f,1-g),new xt(y,1-p)]:[new xt(a,1-c),new xt(h,1-u),new xt(d,1-g),new xt(m,1-p)]}};function Lm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gr=class i extends Qo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ai=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let x=p*f-o;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let v=x+l*p,_=x+l*(p+1),M=x+1+l*(p+1),w=x+1+l*p;d.push(v,_,w),d.push(_,M,w)}this.setIndex(d),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(y,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hs=class i extends se{constructor(t=new yn([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(r,3)),this.setAttribute("uv",new Vt(o,2));function l(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Be.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];Be.isClockWise(x)===!0&&(g[m]=x.reverse())}let y=Be.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){let x=y[m],v=x[0]+u,_=x[1]+u,M=x[2]+u;n.push(v,_,M),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Um(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Um(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ts=class i extends se{constructor(t=new ji(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,c=new U,l=new xt,h=new U,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(d,2));function y(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),x(),p()}function m(v){h=t.getPointAt(v/e,h);let _=o.normals[v],M=o.binormals[v];for(let w=0;w<=s;w++){let E=w/s*Math.PI*2,T=Math.sin(E),S=-Math.cos(E);c.x=S*_.x+T*M.x,c.y=S*_.y+T*M.y,c.z=S*_.z+T*M.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let M=(s+1)*(v-1)+(_-1),w=(s+1)*v+(_-1),E=(s+1)*v+_,T=(s+1)*(v-1)+_;g.push(M,w,T),g.push(w,E,T)}}function x(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Wr=class extends si{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Mt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var we=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vl,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ra=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oa=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ko(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},aa=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gl:r=t,a=2*e-n;break;case _l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gl:o=t,c=2*n-e;break;case _l:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*y+.5*g,_=d*m-d*y;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+x*o[l+M]+v*o[c+M]+_*o[u+M];return r}},ca=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},la=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ko(e,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ko(t.times,Array),values:ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new aa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Fm(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Yo;var Ai=class extends un{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=vr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="color";var ua=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="number";var da=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ii.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xr=class extends un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends un{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=vr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends un{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="vector";var pa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},yd=new pa,ma=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},qr=class extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},pl=new le,bu=new U,Su=new U,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yr=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wl=class extends Sl{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},$r=class extends ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ga=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var $l="\\[\\]\\.:\\/",Nm=new RegExp("["+$l+"]","g"),Jl="[^"+$l+"]",Om="[^"+$l.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",Jl),zm=/(WCOD+)?/.source.replace("WCOD",Om),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Vm=new RegExp("^"+Bm+zm+Hm+km+"$"),Gm=["material","materials","bones","map"],El=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nm,"")}static parseTrackName(t){let e=Vm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=El;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jv=new Float32Array(1);var wu=new le,Jr=class{constructor(t,e,n=0,s=1/0){this.ray=new Er(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(t,e=!0,n=[]){return Tl(t,this,n,e),n.sort(Eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tl(t[s],this,n,e);return n.sort(Eu),n}};function Eu(i,t){return i.distance-t.distance}function Tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Tl(r[o],t,e,!0)}}var Vs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};function Kl(i,t,e,n){let s=Wm(n);switch(e){case Bl:return i*t;case Hl:return i*t/s.components*s.byteLength;case Da:return i*t/s.components*s.byteLength;case kl:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case zl:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case Qr:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Fa:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ac:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(i){switch(i){case Fn:case Ul:return{byteLength:1,components:1};case Gs:case Fl:case Ws:return{byteLength:2,components:1};case Ia:case Pa:return{byteLength:2,components:4};case Ii:case Ca:case Wn:return{byteLength:4,components:1};case Nl:case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Gd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ng=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dg=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,qg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Kg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,l0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,j0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
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
}`,r_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
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
}`,u_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,g_=`#define MATCAP
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
}`,__=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
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
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,b_=`#define STANDARD
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
}`,S_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,w_=`#define TOON
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
}`,E_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,T_=`uniform float size;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,I_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Qm,alphahash_pars_fragment:tg,alphamap_fragment:eg,alphamap_pars_fragment:ng,alphatest_fragment:ig,alphatest_pars_fragment:sg,aomap_fragment:rg,aomap_pars_fragment:og,batching_pars_vertex:ag,batching_vertex:cg,begin_vertex:lg,beginnormal_vertex:hg,bsdfs:ug,iridescence_fragment:dg,bumpmap_pars_fragment:fg,clipping_planes_fragment:pg,clipping_planes_pars_fragment:mg,clipping_planes_pars_vertex:gg,clipping_planes_vertex:_g,color_fragment:xg,color_pars_fragment:yg,color_pars_vertex:vg,color_vertex:Mg,common:bg,cube_uv_reflection_fragment:Sg,defaultnormal_vertex:wg,displacementmap_pars_vertex:Eg,displacementmap_vertex:Tg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Ig,envmap_fragment:Pg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Lg,envmap_pars_vertex:Ug,envmap_physical_pars_fragment:Xg,envmap_vertex:Fg,fog_vertex:Ng,fog_pars_vertex:Og,fog_fragment:Bg,fog_pars_fragment:zg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:kg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Wg,lights_toon_fragment:qg,lights_toon_pars_fragment:Yg,lights_phong_fragment:Zg,lights_phong_pars_fragment:$g,lights_physical_fragment:Jg,lights_physical_pars_fragment:Kg,lights_fragment_begin:jg,lights_fragment_maps:Qg,lights_fragment_end:t0,logdepthbuf_fragment:e0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:c0,metalnessmap_fragment:l0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:x0,normal_pars_vertex:y0,normal_vertex:v0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:I0,dithering_pars_fragment:P0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:F0,shadowmap_vertex:N0,shadowmask_pars_fragment:O0,skinbase_vertex:B0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:k0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:K0,background_vert:j0,background_frag:Q0,backgroundCube_vert:t_,backgroundCube_frag:e_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distanceRGBA_vert:o_,distanceRGBA_frag:a_,equirect_vert:c_,equirect_frag:l_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:d_,meshbasic_frag:f_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:__,meshnormal_vert:x_,meshnormal_frag:y_,meshphong_vert:v_,meshphong_frag:M_,meshphysical_vert:b_,meshphysical_frag:S_,meshtoon_vert:w_,meshtoon_frag:E_,points_vert:T_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:I_,sprite_frag:P_},Ct={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Xn={basic:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ke([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ke([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ke([Ct.points,Ct.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ke([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ke([Ct.common,Ct.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ke([Ct.sprite,Ct.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ke([Ct.common,Ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ke([Ct.lights,Ct.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Xn.physical={uniforms:ke([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var lc={r:0,b:0,g:0},os=new Ln,D_=new le;function L_(i,t,e,n,s,r,o){let a=new Mt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function y(v){let _=!1,M=g(v);M===null?p(a,c):M&&M.isColor&&(p(M,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===Kr)?(h===void 0&&(h=new jt(new Qe(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:rs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(_.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(os)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new jt(new ai(2,2),new Un({name:"BackgroundMaterial",uniforms:rs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(lc,Yl(i)),n.buffers.color.setClear(lc.r,lc.g,lc.b,_,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:y,addToRenderList:m,dispose:x}}function U_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,C,A,P,L){let O=!1,N=u(P,A,C);r!==N&&(r=N,l(r.object)),O=d(b,P,A,L),O&&g(b,P,A,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(b,C,A,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,C,A){let P=A.wireframe===!0,L=n[b.id];L===void 0&&(L={},n[b.id]=L);let O=L[C.id];O===void 0&&(O={},L[C.id]=O);let N=O[P];return N===void 0&&(N=f(c()),O[P]=N),N}function f(b){let C=[],A=[],P=[];for(let L=0;L<e;L++)C[L]=0,A[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:A,attributeDivisors:P,object:b,attributes:{},index:null}}function d(b,C,A,P){let L=r.attributes,O=C.attributes,N=0,H=A.getAttributes();for(let z in H)if(H[z].location>=0){let X=L[z],et=O[z];if(et===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),X===void 0||X.attribute!==et||et&&X.data!==et.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function g(b,C,A,P){let L={},O=C.attributes,N=0,H=A.getAttributes();for(let z in H)if(H[z].location>=0){let X=O[z];X===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(X=b.instanceColor));let et={};et.attribute=X,X&&X.data&&(et.data=X.data),L[z]=et,N++}r.attributes=L,r.attributesNum=N,r.index=P}function y(){let b=r.newAttributes;for(let C=0,A=b.length;C<A;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){let A=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;A[b]=1,P[b]===0&&(i.enableVertexAttribArray(b),P[b]=1),L[b]!==C&&(i.vertexAttribDivisor(b,C),L[b]=C)}function x(){let b=r.newAttributes,C=r.enabledAttributes;for(let A=0,P=C.length;A<P;A++)C[A]!==b[A]&&(i.disableVertexAttribArray(A),C[A]=0)}function v(b,C,A,P,L,O,N){N===!0?i.vertexAttribIPointer(b,C,A,L,O):i.vertexAttribPointer(b,C,A,P,L,O)}function _(b,C,A,P){y();let L=P.attributes,O=A.getAttributes(),N=C.defaultAttributeValues;for(let H in O){let z=O[H];if(z.location>=0){let j=L[H];if(j===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){let X=j.normalized,et=j.itemSize,St=t.get(j);if(St===void 0)continue;let ct=St.buffer,dt=St.type,bt=St.bytesPerElement,W=dt===i.INT||dt===i.UNSIGNED_INT||j.gpuType===Ca;if(j.isInterleavedBufferAttribute){let q=j.data,pt=q.stride,yt=j.offset;if(q.isInstancedInterleavedBuffer){for(let gt=0;gt<z.locationSize;gt++)p(z.location+gt,q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let gt=0;gt<z.locationSize;gt++)m(z.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let gt=0;gt<z.locationSize;gt++)v(z.location+gt,et/z.locationSize,dt,X,pt*bt,(yt+et/z.locationSize*gt)*bt,W)}else{if(j.isInstancedBufferAttribute){for(let q=0;q<z.locationSize;q++)p(z.location+q,j.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let q=0;q<z.locationSize;q++)m(z.location+q);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let q=0;q<z.locationSize;q++)v(z.location+q,et/z.locationSize,dt,X,et*bt,et/z.locationSize*q*bt,W)}}else if(N!==void 0){let X=N[H];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(z.location,X);break;case 3:i.vertexAttrib3fv(z.location,X);break;case 4:i.vertexAttrib4fv(z.location,X);break;default:i.vertexAttrib1fv(z.location,X)}}}}x()}function M(){T();for(let b in n){let C=n[b];for(let A in C){let P=C[A];for(let L in P)h(P[L].object),delete P[L];delete C[A]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let A in C){let P=C[A];for(let L in P)h(P[L].object),delete P[L];delete C[A]}delete n[b.id]}function E(b){for(let C in n){let A=n[C];if(A[b.id]===void 0)continue;let P=A[b.id];for(let L in P)h(P[L].object),delete P[L];delete A[b.id]}}function T(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function F_(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function N_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let T=E===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Fn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Wn&&!T)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:w}}function O_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new kn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let x=r?0:n,v=x*4,_=p.clippingState||null;c.value=_,_=h(g,f,v,d);for(let M=0;M!==v;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==y;++v,_+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function B_(i){let t=new WeakMap;function e(o,a){return a===Ta?o.mapping=ns:a===Aa&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ta||a===Aa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jo(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zs=4,vd=[.125,.215,.35,.446,.526,.582],ls=20,jl=new Yr,Md=new Mt,Ql=null,th=0,eh=0,nh=!1,cs=(1+Math.sqrt(5))/2,Ys=1/cs,bd=[new U(-cs,Ys,0),new U(cs,Ys,0),new U(-Ys,0,cs),new U(Ys,0,cs),new U(0,cs,-Ys),new U(0,cs,Ys),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],z_=new U,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=z_}=r;Ql=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ql,th,eh),this._renderer.xr.enabled=nh,t.scissorTest=!1,hc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ql=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ws,format:vn,colorSpace:Ki,depthBuffer:!1},s=Sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=k_(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,jl)}_sceneToCubeUV(t,e,n,s,r){let c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Md),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new He({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new jt(new Qe,y),p=!1,x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,p=!0):(y.color.copy(Md),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let M=this._cubeSize;hc(s,_*M,v>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;hc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,jl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bd[(s-r-1)%bd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new jt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let p=[],x=0;for(let E=0;E<ls;++E){let T=E/y,S=Math.exp(-T*T/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],M=3*_*(s>v-Zs?s-v+Zs:0),w=4*(this._cubeSize-_);hc(e,M,w,3*_,2*_),c.setRenderTarget(e),c.render(u,jl)}};function H_(i){let t=[],e=[],n=[],s=i,r=i-Zs+1+vd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zs?c=vd[o-i+Zs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,T=w>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];x.set(S,y*g*w),v.set(f,m*g*w);let b=[w,w,w,w,w,w];_.set(b,p*g*w)}let M=new se;M.setAttribute("position",new Pe(x,y)),M.setAttribute("uv",new Pe(v,m)),M.setAttribute("faceIndex",new Pe(_,p)),t.push(M),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sd(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function k_(i,t,e){let n=new Float32Array(ls),s=new U(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wd(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ed(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ta||c===Aa,h=c===ns||c===is;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new dc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new dc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function G_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function W_(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,y=0;if(d!==null){let x=d.array;y=d.version;for(let v=0,_=x.length;v<_;v+=3){let M=x[v+0],w=x[v+1],E=x[v+2];f.push(M,w,w,E,E,M)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let M=v+0,w=v+1,E=v+2;f.push(M,w,w,E,E,M)}}else return;let m=new(ql(f)?Ar:Tr)(f,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function X_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*y[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function q_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*M*4*u),E=new wr(w,_,M,u);E.type=Wn,E.needsUpdate=!0;let T=v*4;for(let b=0;b<u;b++){let C=m[b],A=p[b],P=x[b],L=_*M*4*b;for(let O=0;O<C.count;O++){let N=O*T;d===!0&&(s.fromBufferAttribute(C,O),w[L+N+0]=s.x,w[L+N+1]=s.y,w[L+N+2]=s.z,w[L+N+3]=0),g===!0&&(s.fromBufferAttribute(A,O),w[L+N+4]=s.x,w[L+N+5]=s.y,w[L+N+6]=s.z,w[L+N+7]=0),y===!0&&(s.fromBufferAttribute(P,O),w[L+N+8]=s.x,w[L+N+9]=s.y,w[L+N+10]=s.z,w[L+N+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new xt(_,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Z_(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Wd=new je,Td=new Dr(1,1),Xd=new wr,qd=new Jo,Yd=new Cr,Ad=[],Rd=[],Cd=new Float32Array(16),Id=new Float32Array(9),Pd=new Float32Array(4);function Js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pc(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function K_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function Q_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),Re(e,n)}}function tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Re(e,n)}}function ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),Re(e,n)}}function nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function ox(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Td.compareFunction=Gl,r=Td):r=Wd,e.setTexture2D(t||r,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qd,s)}function dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yd,s)}function fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xd,s)}function px(i){switch(i){case 5126:return $_;case 35664:return J_;case 35665:return K_;case 35666:return j_;case 35674:return Q_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(i,t){i.uniform1fv(this.addr,t)}function gx(i,t){let e=Js(t,this.size,2);i.uniform2fv(this.addr,e)}function _x(i,t){let e=Js(t,this.size,3);i.uniform3fv(this.addr,e)}function xx(i,t){let e=Js(t,this.size,4);i.uniform4fv(this.addr,e)}function yx(i,t){let e=Js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vx(i,t){let e=Js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mx(i,t){let e=Js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function Sx(i,t){i.uniform2iv(this.addr,t)}function wx(i,t){i.uniform3iv(this.addr,t)}function Ex(i,t){i.uniform4iv(this.addr,t)}function Tx(i,t){i.uniform1uiv(this.addr,t)}function Ax(i,t){i.uniform2uiv(this.addr,t)}function Rx(i,t){i.uniform3uiv(this.addr,t)}function Cx(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wd,r[o])}function Px(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qd,r[o])}function Dx(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yd,r[o])}function Lx(i,t,e){let n=this.cache,s=t.length,r=pc(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xd,r[o])}function Ux(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return yx;case 35675:return vx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return wx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=px(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function Fx(i,t,e){let n=i.name,s=n.length;for(ih.lastIndex=0;;){let r=ih.exec(n),o=ih.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Dd(e,l===void 0?new sh(a,i,t):new rh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new oh(a),Dd(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Nx=37297,Ox=0;function Bx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ud=new Zt;function zx(i){te._getMatrix(Ud,te.workingColorSpace,i);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Mr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Bx(i.getShaderSource(t),a)}else return r}function Hx(i,t){let e=zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kx(i,t){let e;switch(t){case Zu:e="Linear";break;case $u:e="Reinhard";break;case Ju:e="Cineon";break;case Ku:e="ACESFilmic";break;case Qu:e="AgX";break;case Ea:e="Neutral";break;case ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new U;function Vx(){te.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Wx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function io(i){return i!==""}function Nd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(i){return i.replace(qx,Zx)}var Yx=new Map;function Zx(i,t){let e=Jt[t];if(e===void 0){let n=Yx.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace($x,Jx)}function Jx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_a?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function jx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function ty(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dl:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function ey(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ny(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Kx(e),l=jx(e),h=Qx(e),u=ty(e),f=ey(e),d=Gx(e),g=Wx(r),y=s.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(io).join(`
`),p.length>0&&(p+=`
`)):(m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),p=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Jt.tonemapping_pars_fragment:"",e.toneMapping!==li?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Hx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=ah(o),o=Nd(o,e),o=Od(o,e),a=ah(a),a=Nd(a,e),a=Od(a,e),o=Bd(o),a=Bd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+o,_=x+p+a,M=Ld(s,s.VERTEX_SHADER,v),w=Ld(s,s.FRAGMENT_SHADER,_);s.attachShader(y,M),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(C){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(y)||"",P=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(w)||"",O=A.trim(),N=P.trim(),H=L.trim(),z=!0,j=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,w);else{let X=Fd(s,M,"vertex"),et=Fd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+X+`
`+et)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:z,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(M),s.deleteShader(w),T=new $s(s,y),S=Xx(s,y)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Nx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ox++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}var iy=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lh(t),e.set(t,n)),n}},lh=class{constructor(t){this.id=iy++,this.code=t,this.usedTimes=0}};function sy(i,t,e,n,s,r,o){let a=new Fs,c=new ch,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,C,A,P){let L=A.fog,O=P.geometry,N=S.isMeshStandardMaterial?A.environment:null,H=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),z=H&&H.mapping===Kr?H.image.height:null,j=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,et=X!==void 0?X.length:0,St=0;O.morphAttributes.position!==void 0&&(St=1),O.morphAttributes.normal!==void 0&&(St=2),O.morphAttributes.color!==void 0&&(St=3);let ct,dt,bt,W;if(j){let Qt=Xn[j];ct=Qt.vertexShader,dt=Qt.fragmentShader}else ct=S.vertexShader,dt=S.fragmentShader,c.update(S),bt=c.getVertexShaderID(S),W=c.getFragmentShaderID(S);let q=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),yt=P.isInstancedMesh===!0,gt=P.isBatchedMesh===!0,Gt=!!S.map,Wt=!!S.matcap,F=!!H,nt=!!S.aoMap,tt=!!S.lightMap,K=!!S.bumpMap,J=!!S.normalMap,ht=!!S.displacementMap,st=!!S.emissiveMap,ut=!!S.metalnessMap,Ot=!!S.roughnessMap,Lt=S.anisotropy>0,D=S.clearcoat>0,R=S.dispersion>0,k=S.iridescence>0,Y=S.sheen>0,rt=S.transmission>0,Q=Lt&&!!S.anisotropyMap,Et=D&&!!S.clearcoatMap,at=D&&!!S.clearcoatNormalMap,At=D&&!!S.clearcoatRoughnessMap,Rt=k&&!!S.iridescenceMap,ot=k&&!!S.iridescenceThicknessMap,wt=Y&&!!S.sheenColorMap,Dt=Y&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,_t=!!S.specularColorMap,Bt=!!S.specularIntensityMap,B=rt&&!!S.transmissionMap,lt=rt&&!!S.thicknessMap,mt=!!S.gradientMap,Pt=!!S.alphaMap,ft=S.alphaTest>0,it=!!S.alphaHash,Ut=!!S.extensions,qt=li;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=i.toneMapping);let re={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:dt,defines:S.defines,customVertexShaderID:bt,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:gt,batchingColor:gt&&P._colorsTexture!==null,instancing:yt,instancingColor:yt&&P.instanceColor!==null,instancingMorph:yt&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:Wt,envMap:F,envMapMode:F&&H.mapping,envMapCubeUVHeight:z,aoMap:nt,lightMap:tt,bumpMap:K,normalMap:J,displacementMap:f&&ht,emissiveMap:st,normalMapObjectSpace:J&&S.normalMapType===id,normalMapTangentSpace:J&&S.normalMapType===Vl,metalnessMap:ut,roughnessMap:Ot,anisotropy:Lt,anisotropyMap:Q,clearcoat:D,clearcoatMap:Et,clearcoatNormalMap:at,clearcoatRoughnessMap:At,dispersion:R,iridescence:k,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:Y,sheenColorMap:wt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:_t,specularIntensityMap:Bt,transmission:rt,transmissionMap:B,thicknessMap:lt,gradientMap:mt,opaque:S.transparent===!1&&S.blending===$i&&S.alphaToCoverage===!1,alphaMap:Pt,alphaTest:ft,alphaHash:it,combine:S.combine,mapUv:Gt&&y(S.map.channel),aoMapUv:nt&&y(S.aoMap.channel),lightMapUv:tt&&y(S.lightMap.channel),bumpMapUv:K&&y(S.bumpMap.channel),normalMapUv:J&&y(S.normalMap.channel),displacementMapUv:ht&&y(S.displacementMap.channel),emissiveMapUv:st&&y(S.emissiveMap.channel),metalnessMapUv:ut&&y(S.metalnessMap.channel),roughnessMapUv:Ot&&y(S.roughnessMap.channel),anisotropyMapUv:Q&&y(S.anisotropyMap.channel),clearcoatMapUv:Et&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(S.sheenRoughnessMap.channel),specularMapUv:Tt&&y(S.specularMap.channel),specularColorMapUv:_t&&y(S.specularColorMap.channel),specularIntensityMapUv:Bt&&y(S.specularIntensityMap.channel),transmissionMapUv:B&&y(S.transmissionMap.channel),thicknessMapUv:lt&&y(S.thicknessMap.channel),alphaMapUv:Pt&&y(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(J||Lt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Gt||Pt),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:St,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===ce,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===ce,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ie,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)b.push(C),b.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(b,S),v(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let b=g[S.type],C;if(b){let A=Xn[b];C=pd.clone(A.uniforms)}else C=S.uniforms;return C}function M(S,b){let C;for(let A=0,P=h.length;A<P;A++){let L=h[A];if(L.cacheKey===b){C=L,++C.usedTimes;break}}return C===void 0&&(C=new ny(i,b,S,r),h.push(C)),C}function w(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:T}}function ry(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function oy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,y,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function a(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,y,m){let p=o(u,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||oy),n.length>1&&n.sort(f||Hd),s.length>1&&s.sort(f||Hd)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ay(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new kd,i.set(n,[o])):s>=r.length?(o=new kd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Mt};break;case"SpotLight":e={position:new U,direction:new U,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function ly(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hy=0;function uy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dy(i){let t=new cy,e=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new le,o=new le;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,x=0,v=0,_=0,M=0,w=0,E=0;l.sort(uy);for(let S=0,b=l.length;S<b;S++){let C=l[S],A=C.color,P=C.intensity,L=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=A.r*P,u+=A.g*P,f+=A.b*P;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],P);E++}else if(C.isDirectionalLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,z=e.get(C);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=N,d++}else if(C.isSpotLight){let N=t.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(A).multiplyScalar(P),N.distance=L,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[y]=N;let H=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,H.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=H.matrix,C.castShadow){let z=e.get(C);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=O,_++}y++}else if(C.isRectAreaLight){let N=t.get(C);N.color.copy(A).multiplyScalar(P),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=t.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let H=C.shadow,z=e.get(C);z.shadowIntensity=H.intensity,z.shadowBias=H.bias,z.shadowNormalBias=H.normalBias,z.shadowRadius=H.radius,z.shadowMapSize=H.mapSize,z.shadowCameraNear=H.camera.near,z.shadowCameraFar=H.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=N,g++}else if(C.isHemisphereLight){let N=t.get(C);N.skyColor.copy(C.color).multiplyScalar(P),N.groundColor.copy(C.groundColor).multiplyScalar(P),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==y||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==x||T.numPointShadows!==v||T.numSpotShadows!==_||T.numSpotMaps!==M||T.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,T.directionalLength=d,T.pointLength=g,T.spotLength=y,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=x,T.numPointShadows=v,T.numSpotShadows=_,T.numSpotMaps=M,T.numLightProbes=E,n.version=hy++)}function c(l,h){let u=0,f=0,d=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Vd(i){let t=new dy(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vd(i),t.set(s,[a])):r>=o.length?(a=new Vd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gy(i,t,e){let n=new Os,s=new xt,r=new xt,o=new Me,a=new ra({depthPacking:nd}),c=new oa,l={},h=e.maxTextureSize,u={[Pn]:De,[De]:Pn,[ie]:ie},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:py,fragmentShader:my}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new se;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let p=this.type;this.render=function(w,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ci),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let P=p!==Gn&&this.type===Gn,L=p===Gn&&this.type!==Gn;for(let O=0,N=w.length;O<N;O++){let H=w[O],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||P===!0||L===!0){let et=this.type!==Gn?{minFilter:xn,magFilter:xn}:{};z.map!==null&&z.map.dispose(),z.map=new Vn(s.x,s.y,et),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let X=z.getViewportCount();for(let et=0;et<X;et++){let St=z.getViewport(et);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),A.viewport(o),z.updateMatrices(H,et),n=z.getFrustum(),_(E,T,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Gn&&x(z,T),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,C)};function x(w,E){let T=t.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,T,f,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,T,d,y,null)}function v(w,E,T,S){let b=null,C=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=T.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let A=b.uuid,P=E.uuid,L=l[A];L===void 0&&(L={},l[A]=L);let O=L[P];O===void 0&&(O=b.clone(),L[P]=O,E.addEventListener("dispose",M)),b=O}if(b.visible=E.visible,b.wireframe=E.wireframe,S===Gn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let A=i.properties.get(b);A.light=T}return b}function _(w,E,T,S,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Gn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let P=t.update(w),L=w.material;if(Array.isArray(L)){let O=P.groups;for(let N=0,H=O.length;N<H;N++){let z=O[N],j=L[z.materialIndex];if(j&&j.visible){let X=v(w,j,S,b);w.onBeforeShadow(i,w,E,T,P,X,z),i.renderBufferDirect(T,null,P,X,w,z),w.onAfterShadow(i,w,E,T,P,X,z)}}}else if(L.visible){let O=v(w,L,S,b);w.onBeforeShadow(i,w,E,T,P,O,null),i.renderBufferDirect(T,null,P,O,w,null),w.onAfterShadow(i,w,E,T,P,O,null)}}let A=w.children;for(let P=0,L=A.length;P<L;P++)_(A[P],E,T,S,b)}function M(w){w.target.removeEventListener("dispose",M);for(let T in l){let S=l[T],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var _y={[xa]:ya,[va]:Sa,[Ma]:wa,[Ji]:ba,[ya]:xa,[Sa]:va,[wa]:Ma,[ba]:Ji};function xy(i,t){function e(){let B=!1,lt=new Me,mt=null,Pt=new Me(0,0,0,0);return{setMask:function(ft){mt!==ft&&!B&&(i.colorMask(ft,ft,ft,ft),mt=ft)},setLocked:function(ft){B=ft},setClear:function(ft,it,Ut,qt,re){re===!0&&(ft*=qt,it*=qt,Ut*=qt),lt.set(ft,it,Ut,qt),Pt.equals(lt)===!1&&(i.clearColor(ft,it,Ut,qt),Pt.copy(lt))},reset:function(){B=!1,mt=null,Pt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,mt=null,Pt=null,ft=null;return{setReversed:function(it){if(lt!==it){let Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),lt=it;let qt=ft;ft=null,this.setClear(qt)}},getReversed:function(){return lt},setTest:function(it){it?q(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(it){mt!==it&&!B&&(i.depthMask(it),mt=it)},setFunc:function(it){if(lt&&(it=_y[it]),Pt!==it){switch(it){case xa:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=it}},setLocked:function(it){B=it},setClear:function(it){ft!==it&&(lt&&(it=1-it),i.clearDepth(it),ft=it)},reset:function(){B=!1,mt=null,Pt=null,ft=null,lt=!1}}}function s(){let B=!1,lt=null,mt=null,Pt=null,ft=null,it=null,Ut=null,qt=null,re=null;return{setTest:function(Qt){B||(Qt?q(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!B&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,Je,rn){(mt!==Qt||Pt!==Je||ft!==rn)&&(i.stencilFunc(Qt,Je,rn),mt=Qt,Pt=Je,ft=rn)},setOp:function(Qt,Je,rn){(it!==Qt||Ut!==Je||qt!==rn)&&(i.stencilOp(Qt,Je,rn),it=Qt,Ut=Je,qt=rn)},setLocked:function(Qt){B=Qt},setClear:function(Qt){re!==Qt&&(i.clearStencil(Qt),re=Qt)},reset:function(){B=!1,lt=null,mt=null,Pt=null,ft=null,it=null,Ut=null,qt=null,re=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,x=null,v=null,_=null,M=null,w=null,E=new Mt(0,0,0),T=0,S=!1,b=null,C=null,A=null,P=null,L=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=H>=2);let j=null,X={},et=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),ct=new Me().fromArray(et),dt=new Me().fromArray(St);function bt(B,lt,mt,Pt){let ft=new Uint8Array(4),it=i.createTexture();i.bindTexture(B,it),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<mt;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return it}let W={};W[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Ji),K(!1),J(Al),q(i.CULL_FACE),nt(ci);function q(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function pt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function yt(B,lt){return u[B]!==lt?(i.bindFramebuffer(B,lt),u[B]=lt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(B,lt){let mt=d,Pt=!1;if(B){mt=f.get(lt),mt===void 0&&(mt=[],f.set(lt,mt));let ft=B.textures;if(mt.length!==ft.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ut=ft.length;it<Ut;it++)mt[it]=i.COLOR_ATTACHMENT0+it;mt.length=ft.length,Pt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(mt)}function Gt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Wt={[Ei]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};Wt[Pu]=i.MIN,Wt[Du]=i.MAX;let F={[Lu]:i.ZERO,[Uu]:i.ONE,[Fu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Wu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(B,lt,mt,Pt,ft,it,Ut,qt,re,Qt){if(B===ci){y===!0&&(pt(i.BLEND),y=!1);return}if(y===!1&&(q(i.BLEND),y=!0),B!==Ru){if(B!==m||Qt!==S){if((p!==Ei||_!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,_=Ei),Qt)switch(B){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFunc(i.ONE,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,v=null,M=null,w=null,E.set(0,0,0),T=0,m=B,S=Qt}return}ft=ft||lt,it=it||mt,Ut=Ut||Pt,(lt!==p||ft!==_)&&(i.blendEquationSeparate(Wt[lt],Wt[ft]),p=lt,_=ft),(mt!==x||Pt!==v||it!==M||Ut!==w)&&(i.blendFuncSeparate(F[mt],F[Pt],F[it],F[Ut]),x=mt,v=Pt,M=it,w=Ut),(qt.equals(E)===!1||re!==T)&&(i.blendColor(qt.r,qt.g,qt.b,re),E.copy(qt),T=re),m=B,S=!1}function tt(B,lt){B.side===ie?pt(i.CULL_FACE):q(i.CULL_FACE);let mt=B.side===De;lt&&(mt=!mt),K(mt),B.blending===$i&&B.transparent===!1?nt(ci):nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Pt=B.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),st(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(B){b!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),b=B)}function J(B){B!==Tu?(q(i.CULL_FACE),B!==C&&(B===Al?i.cullFace(i.BACK):B===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),C=B}function ht(B){B!==A&&(N&&i.lineWidth(B),A=B)}function st(B,lt,mt){B?(q(i.POLYGON_OFFSET_FILL),(P!==lt||L!==mt)&&(i.polygonOffset(lt,mt),P=lt,L=mt)):pt(i.POLYGON_OFFSET_FILL)}function ut(B){B?q(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Ot(B){B===void 0&&(B=i.TEXTURE0+O-1),j!==B&&(i.activeTexture(B),j=B)}function Lt(B,lt,mt){mt===void 0&&(j===null?mt=i.TEXTURE0+O-1:mt=j);let Pt=X[mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},X[mt]=Pt),(Pt.type!==B||Pt.texture!==lt)&&(j!==mt&&(i.activeTexture(mt),j=mt),i.bindTexture(B,lt||W[B]),Pt.type=B,Pt.texture=lt)}function D(){let B=X[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function wt(B){ct.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ct.copy(B))}function Dt(B){dt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),dt.copy(B))}function Tt(B,lt){let mt=l.get(lt);mt===void 0&&(mt=new WeakMap,l.set(lt,mt));let Pt=mt.get(B);Pt===void 0&&(Pt=i.getUniformBlockIndex(lt,B.name),mt.set(B,Pt))}function _t(B,lt){let Pt=l.get(lt).get(B);c.get(lt)!==Pt&&(i.uniformBlockBinding(lt,Pt,B.__bindingPointIndex),c.set(lt,Pt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,X={},u={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,x=null,v=null,_=null,M=null,w=null,E=new Mt(0,0,0),T=0,S=!1,b=null,C=null,A=null,P=null,L=null,ct.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:pt,bindFramebuffer:yt,drawBuffers:gt,useProgram:Gt,setBlending:nt,setMaterial:tt,setFlipSided:K,setCullFace:J,setLineWidth:ht,setPolygonOffset:st,setScissorTest:ut,activeTexture:Ot,bindTexture:Lt,unbindTexture:D,compressedTexImage2D:R,compressedTexImage3D:k,texImage2D:Rt,texImage3D:ot,updateUBOMapping:Tt,uniformBlockBinding:_t,texStorage2D:at,texStorage3D:At,texSubImage2D:Y,texSubImage3D:rt,compressedTexSubImage2D:Q,compressedTexSubImage3D:Et,scissor:wt,viewport:Dt,reset:Bt}}function yy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return d?new OffscreenCanvas(D,R):Sr("canvas")}function y(D,R,k){let Y=1,rt=Lt(D);if((rt.width>k||rt.height>k)&&(Y=k/Math.max(rt.width,rt.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Q=Math.floor(Y*rt.width),Et=Math.floor(Y*rt.height);u===void 0&&(u=g(Q,Et));let at=R?g(Q,Et):u;return at.width=Q,at.height=Et,at.getContext("2d").drawImage(D,0,0,Q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+Q+"x"+Et+")."),at}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(D,R,k,Y,rt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=R;if(R===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8)),R===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),R===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8)),R===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),R===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),R===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),R===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),R===i.RGBA){let Et=rt?Mr:te.getTransfer(Y);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=Et===ce?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(D,R){let k;return D?R===null||R===Ii||R===Xs?k=i.DEPTH24_STENCIL8:R===Wn?k=i.DEPTH32F_STENCIL8:R===Gs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ii||R===Xs?k=i.DEPTH_COMPONENT24:R===Wn?k=i.DEPTH_COMPONENT32F:R===Gs&&(k=i.DEPTH_COMPONENT16),k}function M(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==Dn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function w(D){let R=D.target;R.removeEventListener("dispose",w),T(R),R.isVideoTexture&&h.delete(R)}function E(D){let R=D.target;R.removeEventListener("dispose",E),b(R)}function T(D){let R=n.get(D);if(R.__webglInit===void 0)return;let k=D.source,Y=f.get(k);if(Y){let rt=Y[R.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&S(D),Object.keys(Y).length===0&&f.delete(k)}n.remove(D)}function S(D){let R=n.get(D);i.deleteTexture(R.__webglTexture);let k=D.source,Y=f.get(k);delete Y[R.__cacheKey],o.memory.textures--}function b(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let rt=0;rt<R.__webglFramebuffer[Y].length;rt++)i.deleteFramebuffer(R.__webglFramebuffer[Y][rt]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let k=D.textures;for(let Y=0,rt=k.length;Y<rt;Y++){let Q=n.get(k[Y]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(D)}let C=0;function A(){C=0}function P(){let D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function L(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function O(D,R){let k=n.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){let Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,D,R);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+R)}function N(D,R){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){W(k,D,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+R)}function H(D,R){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){W(k,D,R);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+R)}function z(D,R){let k=n.get(D);if(D.version>0&&k.__version!==D.version){q(k,D,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+R)}let j={[Xo]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},X={[xn]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[jr]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},et={[sd]:i.NEVER,[hd]:i.ALWAYS,[rd]:i.LESS,[Gl]:i.LEQUAL,[od]:i.EQUAL,[ld]:i.GEQUAL,[ad]:i.GREATER,[cd]:i.NOTEQUAL};function St(D,R){if(R.type===Wn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Dn||R.magFilter===Ra||R.magFilter===jr||R.magFilter===Ci||R.minFilter===Dn||R.minFilter===Ra||R.minFilter===jr||R.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,j[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,j[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,j[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,X[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,X[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,et[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===xn||R.minFilter!==jr&&R.minFilter!==Ci||R.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ct(D,R){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",w));let Y=R.source,rt=f.get(Y);rt===void 0&&(rt={},f.set(Y,rt));let Q=L(R);if(Q!==D.__cacheKey){rt[Q]===void 0&&(rt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),rt[Q].usedTimes++;let Et=rt[D.__cacheKey];Et!==void 0&&(rt[D.__cacheKey].usedTimes--,Et.usedTimes===0&&S(R)),D.__cacheKey=Q,D.__webglTexture=rt[Q].texture}return k}function dt(D,R,k){return Math.floor(Math.floor(D/k)/R)}function bt(D,R,k,Y){let Q=D.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,k,Y,R.data);else{Q.sort((ot,wt)=>ot.start-wt.start);let Et=0;for(let ot=1;ot<Q.length;ot++){let wt=Q[Et],Dt=Q[ot],Tt=wt.start+wt.count,_t=dt(Dt.start,R.width,4),Bt=dt(wt.start,R.width,4);Dt.start<=Tt+1&&_t===Bt&&dt(Dt.start+Dt.count-1,R.width,4)===_t?wt.count=Math.max(wt.count,Dt.start+Dt.count-wt.start):(++Et,Q[Et]=Dt)}Q.length=Et+1;let at=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let ot=0,wt=Q.length;ot<wt;ot++){let Dt=Q[ot],Tt=Math.floor(Dt.start/4),_t=Math.ceil(Dt.count/4),Bt=Tt%R.width,B=Math.floor(Tt/R.width),lt=_t,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Bt,B,lt,mt,k,Y,R.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function W(D,R,k){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);let rt=ct(D,R),Q=R.source;e.bindTexture(Y,D.__webglTexture,i.TEXTURE0+k);let Et=n.get(Q);if(Q.version!==Et.__version||rt===!0){e.activeTexture(i.TEXTURE0+k);let at=te.getPrimaries(te.workingColorSpace),At=R.colorSpace===hi?null:te.getPrimaries(R.colorSpace),Rt=R.colorSpace===hi||at===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=y(R.image,!1,s.maxTextureSize);ot=Ot(R,ot);let wt=r.convert(R.format,R.colorSpace),Dt=r.convert(R.type),Tt=v(R.internalFormat,wt,Dt,R.colorSpace,R.isVideoTexture);St(Y,R);let _t,Bt=R.mipmaps,B=R.isVideoTexture!==!0,lt=Et.__version===void 0||rt===!0,mt=Q.dataReady,Pt=M(R,ot);if(R.isDepthTexture)Tt=_(R.format===qs,R.type),lt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Tt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ot.width,ot.height,0,wt,Dt,null));else if(R.isDataTexture)if(Bt.length>0){B&&lt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,Bt[0].width,Bt[0].height);for(let ft=0,it=Bt.length;ft<it;ft++)_t=Bt[ft],B?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,wt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,wt,Dt,_t.data);R.generateMipmaps=!1}else B?(lt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ot.width,ot.height),mt&&bt(R,ot,wt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Tt,ot.width,ot.height,0,wt,Dt,ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Tt,Bt[0].width,Bt[0].height,ot.depth);for(let ft=0,it=Bt.length;ft<it;ft++)if(_t=Bt[ft],R.format!==vn)if(wt!==null)if(B){if(mt)if(R.layerUpdates.size>0){let Ut=Kl(_t.width,_t.height,R.format,R.type);for(let qt of R.layerUpdates){let re=_t.data.subarray(qt*Ut/_t.data.BYTES_PER_ELEMENT,(qt+1)*Ut/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,qt,_t.width,_t.height,1,wt,re)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ot.depth,wt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,_t.width,_t.height,ot.depth,wt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Tt,_t.width,_t.height,ot.depth,0,wt,Dt,_t.data)}else{B&&lt&&e.texStorage2D(i.TEXTURE_2D,Pt,Tt,Bt[0].width,Bt[0].height);for(let ft=0,it=Bt.length;ft<it;ft++)_t=Bt[ft],R.format!==vn?wt!==null?B?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,wt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,_t.width,_t.height,wt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,ft,Tt,_t.width,_t.height,0,wt,Dt,_t.data)}else if(R.isDataArrayTexture)if(B){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Tt,ot.width,ot.height,ot.depth),mt)if(R.layerUpdates.size>0){let ft=Kl(ot.width,ot.height,R.format,R.type);for(let it of R.layerUpdates){let Ut=ot.data.subarray(it*ft/ot.data.BYTES_PER_ELEMENT,(it+1)*ft/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ot.width,ot.height,1,wt,Dt,Ut)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,Dt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ot.width,ot.height,ot.depth,0,wt,Dt,ot.data);else if(R.isData3DTexture)B?(lt&&e.texStorage3D(i.TEXTURE_3D,Pt,Tt,ot.width,ot.height,ot.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ot.width,ot.height,ot.depth,0,wt,Dt,ot.data);else if(R.isFramebufferTexture){if(lt)if(B)e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ot.width,ot.height);else{let ft=ot.width,it=ot.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Tt,ft,it,0,wt,Dt,null),ft>>=1,it>>=1}}else if(Bt.length>0){if(B&&lt){let ft=Lt(Bt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ft.width,ft.height)}for(let ft=0,it=Bt.length;ft<it;ft++)_t=Bt[ft],B?mt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,wt,Dt,_t):e.texImage2D(i.TEXTURE_2D,ft,Tt,wt,Dt,_t);R.generateMipmaps=!1}else if(B){if(lt){let ft=Lt(ot);e.texStorage2D(i.TEXTURE_2D,Pt,Tt,ft.width,ft.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Dt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Tt,wt,Dt,ot);m(R)&&p(Y),Et.__version=Q.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function q(D,R,k){if(R.image.length!==6)return;let Y=ct(D,R),rt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+k);let Q=n.get(rt);if(rt.version!==Q.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);let Et=te.getPrimaries(te.workingColorSpace),at=R.colorSpace===hi?null:te.getPrimaries(R.colorSpace),At=R.colorSpace===hi||Et===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Rt=R.isCompressedTexture||R.image[0].isCompressedTexture,ot=R.image[0]&&R.image[0].isDataTexture,wt=[];for(let it=0;it<6;it++)!Rt&&!ot?wt[it]=y(R.image[it],!0,s.maxCubemapSize):wt[it]=ot?R.image[it].image:R.image[it],wt[it]=Ot(R,wt[it]);let Dt=wt[0],Tt=r.convert(R.format,R.colorSpace),_t=r.convert(R.type),Bt=v(R.internalFormat,Tt,_t,R.colorSpace),B=R.isVideoTexture!==!0,lt=Q.__version===void 0||Y===!0,mt=rt.dataReady,Pt=M(R,Dt);St(i.TEXTURE_CUBE_MAP,R);let ft;if(Rt){B&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Bt,Dt.width,Dt.height);for(let it=0;it<6;it++){ft=wt[it].mipmaps;for(let Ut=0;Ut<ft.length;Ut++){let qt=ft[Ut];R.format!==vn?Tt!==null?B?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,qt.width,qt.height,Tt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Bt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,qt.width,qt.height,Tt,_t,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Bt,qt.width,qt.height,0,Tt,_t,qt.data)}}}else{if(ft=R.mipmaps,B&&lt){ft.length>0&&Pt++;let it=Lt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(ot){B?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt[it].width,wt[it].height,Tt,_t,wt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,wt[it].width,wt[it].height,0,Tt,_t,wt[it].data);for(let Ut=0;Ut<ft.length;Ut++){let re=ft[Ut].image[it].image;B?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,re.width,re.height,Tt,_t,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Bt,re.width,re.height,0,Tt,_t,re.data)}}else{B?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt,_t,wt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,Tt,_t,wt[it]);for(let Ut=0;Ut<ft.length;Ut++){let qt=ft[Ut];B?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Tt,_t,qt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Bt,Tt,_t,qt.image[it])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),Q.__version=rt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function pt(D,R,k,Y,rt,Q){let Et=r.convert(k.format,k.colorSpace),at=r.convert(k.type),At=v(k.internalFormat,Et,at,k.colorSpace),Rt=n.get(R),ot=n.get(k);if(ot.__renderTarget=R,!Rt.__hasExternalTextures){let wt=Math.max(1,R.width>>Q),Dt=Math.max(1,R.height>>Q);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,Q,At,wt,Dt,R.depth,0,Et,at,null):e.texImage2D(rt,Q,At,wt,Dt,0,Et,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,rt,ot.__webglTexture,0,ht(R)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,rt,ot.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(D,R,k){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){let Y=R.depthTexture,rt=Y&&Y.isDepthTexture?Y.type:null,Q=_(R.stencilBuffer,rt),Et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ht(R);st(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Q,R.width,R.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Q,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Q,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,D)}else{let Y=R.textures;for(let rt=0;rt<Y.length;rt++){let Q=Y[rt],Et=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),At=v(Q.internalFormat,Et,at,Q.colorSpace),Rt=ht(R);k&&st(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,R.width,R.height):st(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,At,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(R.depthTexture);Y.__renderTarget=R,(!Y.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),O(R.depthTexture,0);let rt=Y.__webglTexture,Q=ht(R);if(R.depthTexture.format===Is)st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(R.depthTexture.format===qs)st(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Gt(D){let R=n.get(D),k=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let Y=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){let rt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",rt)};Y.addEventListener("dispose",rt),R.__depthDisposeCallback=rt}R.__boundDepthTexture=Y}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Y=D.texture.mipmaps;Y&&Y.length>0?gt(R.__webglFramebuffer[0],D):gt(R.__webglFramebuffer,D)}else if(k){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),yt(R.__webglDepthbuffer[Y],D,!1);else{let rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Q)}}else{let Y=D.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),yt(R.__webglDepthbuffer,D,!1);else{let rt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(D,R,k){let Y=n.get(D);R!==void 0&&pt(Y.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Gt(D)}function F(D){let R=D.texture,k=n.get(D),Y=n.get(R);D.addEventListener("dispose",E);let rt=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Et=rt.length>1;if(Et||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let At=0;At<R.mipmaps.length;At++)k.__webglFramebuffer[at][At]=i.createFramebuffer()}else k.__webglFramebuffer[at]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<R.mipmaps.length;at++)k.__webglFramebuffer[at]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Et)for(let at=0,At=rt.length;at<At;at++){let Rt=n.get(rt[at]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&st(D)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){let At=rt[at];k.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[at]);let Rt=r.convert(At.format,At.colorSpace),ot=r.convert(At.type),wt=v(At.internalFormat,Rt,ot,At.colorSpace,D.isXRRenderTarget===!0),Dt=ht(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,wt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,k.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(k.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),St(i.TEXTURE_CUBE_MAP,R);for(let at=0;at<6;at++)if(R.mipmaps&&R.mipmaps.length>0)for(let At=0;At<R.mipmaps.length;At++)pt(k.__webglFramebuffer[at][At],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,At);else pt(k.__webglFramebuffer[at],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(R)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let at=0,At=rt.length;at<At;at++){let Rt=rt[at],ot=n.get(Rt),wt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ot.__webglTexture),St(wt,Rt),pt(k.__webglFramebuffer,D,Rt,i.COLOR_ATTACHMENT0+at,wt,0),m(Rt)&&p(wt)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),St(at,R),R.mipmaps&&R.mipmaps.length>0)for(let At=0;At<R.mipmaps.length;At++)pt(k.__webglFramebuffer[At],D,R,i.COLOR_ATTACHMENT0,at,At);else pt(k.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,at,0);m(R)&&p(at),e.unbindTexture()}D.depthBuffer&&Gt(D)}function nt(D){let R=D.textures;for(let k=0,Y=R.length;k<Y;k++){let rt=R[k];if(m(rt)){let Q=x(D),Et=n.get(rt).__webglTexture;e.bindTexture(Q,Et),p(Q),e.unbindTexture()}}}let tt=[],K=[];function J(D){if(D.samples>0){if(st(D)===!1){let R=D.textures,k=D.width,Y=D.height,rt=i.COLOR_BUFFER_BIT,Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(D),at=R.length>1;if(at)for(let Rt=0;Rt<R.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let At=D.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Rt=0;Rt<R.length;Rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let ot=n.get(R[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,rt,i.NEAREST),c===!0&&(tt.length=0,K.length=0,tt.push(i.COLOR_ATTACHMENT0+Rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(tt.push(Q),K.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Rt=0;Rt<R.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Rt]);let ot=n.get(R[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function ht(D){return Math.min(s.maxSamples,D.samples)}function st(D){let R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ut(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function Ot(D,R){let k=D.colorSpace,Y=D.format,rt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Ki&&k!==hi&&(te.getTransfer(k)===ce?(Y!==vn||rt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),R}function Lt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=A,this.setTexture2D=O,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=z,this.rebindTextures=Wt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=st}function vy(i,t){function e(n,s=hi){let r,o=te.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Ws)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===zl)return i.RGB;if(n===vn)return i.RGBA;if(n===Is)return i.DEPTH_COMPONENT;if(n===qs)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===kl)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===Qr||n===to||n===eo||n===no)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Na||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ha)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===oc||n===ac||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,by=`
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

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Lr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:My,fragmentShader:by,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new hh,p={},x=e.getContextAttributes(),v=null,_=null,M=[],w=[],E=new xt,T=null,S=new Oe;S.viewport=new Me;let b=new Oe;b.viewport=new Me;let C=[S,b],A=new ga,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=M[W];return q===void 0&&(q=new Ns,M[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=M[W];return q===void 0&&(q=new Ns,M[W]=q),q.getGripSpace()},this.getHand=function(W){let q=M[W];return q===void 0&&(q=new Ns,M[W]=q),q.getHandSpace()};function O(W){let q=w.indexOf(W.inputSource);if(q===-1)return;let pt=M[q];pt!==void 0&&(pt.update(W.inputSource,W.frame,l||o),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let W=0;W<M.length;W++){let q=w[W];q!==null&&(w[W]=null,M[W].disconnect(q))}P=null,L=null,m.reset();for(let W in p)delete p[W];t.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,yt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=x.stencil?qs:Is,yt=x.stencil?Xs:Ii);let Gt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Gt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Vn(f.textureWidth,f.textureHeight,{format:vn,type:Fn,depthTexture:new Dr(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Vn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(W){for(let q=0;q<W.removed.length;q++){let pt=W.removed[q],yt=w.indexOf(pt);yt>=0&&(w[yt]=null,M[yt].disconnect(pt))}for(let q=0;q<W.added.length;q++){let pt=W.added[q],yt=w.indexOf(pt);if(yt===-1){for(let Gt=0;Gt<M.length;Gt++)if(Gt>=w.length){w.push(pt),yt=Gt;break}else if(w[Gt]===null){w[Gt]=pt,yt=Gt;break}if(yt===-1)break}let gt=M[yt];gt&&gt.connect(pt)}}let z=new U,j=new U;function X(W,q,pt){z.setFromMatrixPosition(q.matrixWorld),j.setFromMatrixPosition(pt.matrixWorld);let yt=z.distanceTo(j),gt=q.projectionMatrix.elements,Gt=pt.projectionMatrix.elements,Wt=gt[14]/(gt[10]-1),F=gt[14]/(gt[10]+1),nt=(gt[9]+1)/gt[5],tt=(gt[9]-1)/gt[5],K=(gt[8]-1)/gt[0],J=(Gt[8]+1)/Gt[0],ht=Wt*K,st=Wt*J,ut=yt/(-K+J),Ot=ut*-K;if(q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ot),W.translateZ(ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),gt[10]===-1)W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let Lt=Wt+ut,D=F+ut,R=ht-Ot,k=st+(yt-Ot),Y=nt*F/D*Lt,rt=tt*F/D*Lt;W.projectionMatrix.makePerspective(R,k,Y,rt,Lt,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let q=W.near,pt=W.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),A.near=b.near=S.near=q,A.far=b.far=S.far=pt,(P!==A.near||L!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,L=A.far),A.layers.mask=W.layers.mask|6,S.layers.mask=A.layers.mask&3,b.layers.mask=A.layers.mask&5;let yt=W.parent,gt=A.cameras;et(A,yt);for(let Gt=0;Gt<gt.length;Gt++)et(gt[Gt],yt);gt.length===2?X(A,S,b):A.projectionMatrix.copy(S.projectionMatrix),St(W,A,yt)};function St(W,q,pt){pt===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ps*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(W){return p[W]};let ct=null;function dt(W,q){if(h=q.getViewerPose(l||o),g=q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let yt=!1;pt.length!==A.cameras.length&&(A.cameras.length=0,yt=!0);for(let F=0;F<pt.length;F++){let nt=pt[F],tt=null;if(d!==null)tt=d.getViewport(nt);else{let J=u.getViewSubImage(f,nt);tt=J.viewport,F===0&&(t.setRenderTargetTextures(_,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(_))}let K=C[F];K===void 0&&(K=new Oe,K.layers.enable(F),K.viewport=new Me,C[F]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(tt.x,tt.y,tt.width,tt.height),F===0&&(A.matrix.copy(K.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),yt===!0&&A.cameras.push(K)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let F=u.getDepthInformation(pt[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let F=0;F<pt.length;F++){let nt=pt[F].camera;if(nt){let tt=p[nt];tt||(tt=new Lr,p[nt]=tt);let K=u.getCameraImage(nt);tt.sourceTexture=K}}}}for(let pt=0;pt<M.length;pt++){let yt=w[pt],gt=M[pt];yt!==null&&gt!==void 0&&gt.update(yt,q,l||o)}ct&&ct(W,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let bt=new Gd;bt.setAnimationLoop(dt),this.setAnimationLoop=function(W){ct=W},this.dispose=function(){}}},as=new Ln,Sy=new le;function wy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,as.copy(_),as.x*=-1,as.y*=-1,as.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(as)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ey(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));let M=v.program;n.updateUBOMapping(x,M);let w=t.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function h(x){let v=u();x.__bindingPointIndex=v;let _=i.createBuffer(),M=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=s[x.id],_=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,E=_.length;w<E;w++){let T=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,b=T.length;S<b;S++){let C=T[S];if(d(C,w,S,M)===!0){let A=C.__offset,P=Array.isArray(C.value)?C.value:[C.value],L=0;for(let O=0;O<P.length;O++){let N=P[O],H=y(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,A+L,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,_,M){let w=x.value,E=v+"_"+_;if(M[E]===void 0)return typeof w=="number"||typeof w=="boolean"?M[E]=w:M[E]=w.clone(),!0;{let T=M[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return M[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(x){let v=x.uniforms,_=0,M=16;for(let E=0,T=v.length;E<T;E++){let S=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,C=S.length;b<C;b++){let A=S[b],P=Array.isArray(A.value)?A.value:[A.value];for(let L=0,O=P.length;L<O;L++){let N=P[L],H=y(N),z=_%M,j=z%H.boundary,X=z+j;_+=j,X!==0&&M-X<H.storage&&(_+=M-X),A.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,_+=H.storage}}}let w=_%M;return w>0&&(_+=M-w),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var fc=class{constructor(t={}){let{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,M=!1;this._outputColorSpace=Te;let w=0,E=0,T=null,S=-1,b=null,C=new Me,A=new Me,P=null,L=new Mt(0),O=0,N=e.width,H=e.height,z=1,j=null,X=null,et=new Me(0,0,N,H),St=new Me(0,0,N,H),ct=!1,dt=new Os,bt=!1,W=!1,q=new le,pt=new U,yt=new Me,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Wt(){return T===null?z:1}let F=n;function nt(I,V){return e.getContext(I,V)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let V="webgl2";if(F=nt(V,I),F===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let tt,K,J,ht,st,ut,Ot,Lt,D,R,k,Y,rt,Q,Et,at,At,Rt,ot,wt,Dt,Tt,_t,Bt;function B(){tt=new G_(F),tt.init(),Tt=new vy(F,tt),K=new N_(F,tt,t,Tt),J=new xy(F,tt),K.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),ht=new q_(F),st=new ry,ut=new yy(F,tt,J,st,K,Tt,ht),Ot=new B_(_),Lt=new V_(_),D=new jm(F),_t=new U_(F,D),R=new W_(F,D,ht,_t),k=new Z_(F,R,D,ht),ot=new Y_(F,K,ut),at=new O_(st),Y=new sy(_,Ot,Lt,tt,K,_t,at),rt=new wy(_,st),Q=new ay,Et=new fy(tt),Rt=new L_(_,Ot,Lt,J,k,d,c),At=new gy(_,k,K),Bt=new Ey(F,ht,K,J),wt=new F_(F,tt,ht),Dt=new X_(F,tt,ht),ht.programs=Y.programs,_.capabilities=K,_.extensions=tt,_.properties=st,_.renderLists=Q,_.shadowMap=At,_.state=J,_.info=ht}B();let lt=new uh(_,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let I=tt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=tt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(I){I!==void 0&&(z=I,this.setSize(N,H,!1))},this.getSize=function(I){return I.set(N,H)},this.setSize=function(I,V,Z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=I,H=V,e.width=Math.floor(I*z),e.height=Math.floor(V*z),Z===!0&&(e.style.width=I+"px",e.style.height=V+"px"),this.setViewport(0,0,I,V)},this.getDrawingBufferSize=function(I){return I.set(N*z,H*z).floor()},this.setDrawingBufferSize=function(I,V,Z){N=I,H=V,z=Z,e.width=Math.floor(I*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,I,V)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(et)},this.setViewport=function(I,V,Z,$){I.isVector4?et.set(I.x,I.y,I.z,I.w):et.set(I,V,Z,$),J.viewport(C.copy(et).multiplyScalar(z).round())},this.getScissor=function(I){return I.copy(St)},this.setScissor=function(I,V,Z,$){I.isVector4?St.set(I.x,I.y,I.z,I.w):St.set(I,V,Z,$),J.scissor(A.copy(St).multiplyScalar(z).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(I){J.setScissorTest(ct=I)},this.setOpaqueSort=function(I){j=I},this.setTransparentSort=function(I){X=I},this.getClearColor=function(I){return I.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(I=!0,V=!0,Z=!0){let $=0;if(I){let G=!1;if(T!==null){let vt=T.texture.format;G=vt===Ua||vt===La||vt===Da}if(G){let vt=T.texture.type,It=vt===Fn||vt===Ii||vt===Gs||vt===Xs||vt===Ia||vt===Pa,Nt=Rt.getClearColor(),Ft=Rt.getClearAlpha(),Xt=Nt.r,Yt=Nt.g,Ht=Nt.b;It?(g[0]=Xt,g[1]=Yt,g[2]=Ht,g[3]=Ft,F.clearBufferuiv(F.COLOR,0,g)):(y[0]=Xt,y[1]=Yt,y[2]=Ht,y[3]=Ft,F.clearBufferiv(F.COLOR,0,y))}else $|=F.COLOR_BUFFER_BIT}V&&($|=F.DEPTH_BUFFER_BIT),Z&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Rt.dispose(),Q.dispose(),Et.dispose(),st.dispose(),Ot.dispose(),Lt.dispose(),k.dispose(),_t.dispose(),Bt.dispose(),Y.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",rn),lt.removeEventListener("sessionend",Vi),Tn.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=ht.autoReset,V=At.enabled,Z=At.autoUpdate,$=At.needsUpdate,G=At.type;B(),ht.autoReset=I,At.enabled=V,At.autoUpdate=Z,At.needsUpdate=$,At.type=G}function ft(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function it(I){let V=I.target;V.removeEventListener("dispose",it),Ut(V)}function Ut(I){qt(I),st.remove(I)}function qt(I){let V=st.get(I).programs;V!==void 0&&(V.forEach(function(Z){Y.releaseProgram(Z)}),I.isShaderMaterial&&Y.releaseShaderCache(I))}this.renderBufferDirect=function(I,V,Z,$,G,vt){V===null&&(V=gt);let It=G.isMesh&&G.matrixWorld.determinant()<0,Nt=yp(I,V,Z,$,G);J.setMaterial($,It);let Ft=Z.index,Xt=1;if($.wireframe===!0){if(Ft=R.getWireframeAttribute(Z),Ft===void 0)return;Xt=2}let Yt=Z.drawRange,Ht=Z.attributes.position,Kt=Yt.start*Xt,ue=(Yt.start+Yt.count)*Xt;vt!==null&&(Kt=Math.max(Kt,vt.start*Xt),ue=Math.min(ue,(vt.start+vt.count)*Xt)),Ft!==null?(Kt=Math.max(Kt,0),ue=Math.min(ue,Ft.count)):Ht!=null&&(Kt=Math.max(Kt,0),ue=Math.min(ue,Ht.count));let be=ue-Kt;if(be<0||be===1/0)return;_t.setup(G,$,Nt,Z,Ft);let ge,de=wt;if(Ft!==null&&(ge=D.get(Ft),de=Dt,de.setIndex(ge)),G.isMesh)$.wireframe===!0?(J.setLineWidth($.wireframeLinewidth*Wt()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(G.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),J.setLineWidth(kt*Wt()),G.isLineSegments?de.setMode(F.LINES):G.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else G.isPoints?de.setMode(F.POINTS):G.isSprite&&de.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let kt=G._multiDrawStarts,xe=G._multiDrawCounts,ne=G._multiDrawCount,on=Ft?D.get(Ft).bytesPerElement:1,ms=st.get($).currentProgram.getUniforms();for(let an=0;an<ne;an++)ms.setValue(F,"_gl_DrawID",an),de.render(kt[an]/on,xe[an])}else if(G.isInstancedMesh)de.renderInstances(Kt,be,G.count);else if(Z.isInstancedBufferGeometry){let kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,xe=Math.min(Z.instanceCount,kt);de.renderInstances(Kt,be,xe)}else de.render(Kt,be)};function re(I,V,Z){I.transparent===!0&&I.side===ie&&I.forceSinglePass===!1?(I.side=De,I.needsUpdate=!0,vo(I,V,Z),I.side=Pn,I.needsUpdate=!0,vo(I,V,Z),I.side=ie):vo(I,V,Z)}this.compile=function(I,V,Z=null){Z===null&&(Z=I),p=Et.get(Z),p.init(V),v.push(p),Z.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),I!==Z&&I.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let $=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let vt=G.material;if(vt)if(Array.isArray(vt))for(let It=0;It<vt.length;It++){let Nt=vt[It];re(Nt,Z,G),$.add(Nt)}else re(vt,Z,G),$.add(vt)}),p=v.pop(),$},this.compileAsync=function(I,V,Z=null){let $=this.compile(I,V,Z);return new Promise(G=>{function vt(){if($.forEach(function(It){st.get(It).currentProgram.isReady()&&$.delete(It)}),$.size===0){G(I);return}setTimeout(vt,10)}tt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Qt=null;function Je(I){Qt&&Qt(I)}function rn(){Tn.stop()}function Vi(){Tn.start()}let Tn=new Gd;Tn.setAnimationLoop(Je),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(I){Qt=I,lt.setAnimationLoop(I),I===null?Tn.stop():Tn.start()},lt.addEventListener("sessionstart",rn),lt.addEventListener("sessionend",Vi),this.render=function(I,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),I.isScene===!0&&I.onBeforeRender(_,I,V,T),p=Et.get(I,v.length),p.init(V),v.push(p),q.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(q,In,V.reversedDepth),W=this.localClippingEnabled,bt=at.init(this.clippingPlanes,W),m=Q.get(I,x.length),m.init(),x.push(m),lt.enabled===!0&&lt.isPresenting===!0){let vt=_.xr.getDepthSensingMesh();vt!==null&&Vc(vt,V,-1/0,_.sortObjects)}Vc(I,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(j,X),Gt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Gt&&Rt.addToRenderList(m,I),this.info.render.frame++,bt===!0&&at.beginShadows();let Z=p.state.shadowsArray;At.render(Z,I,V),bt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){let vt=V.cameras;if(G.length>0)for(let It=0,Nt=vt.length;It<Nt;It++){let Ft=vt[It];Jh($,G,I,Ft)}Gt&&Rt.render(I);for(let It=0,Nt=vt.length;It<Nt;It++){let Ft=vt[It];$h(m,I,Ft,Ft.viewport)}}else G.length>0&&Jh($,G,I,V),Gt&&Rt.render(I),$h(m,I,V);T!==null&&E===0&&(ut.updateMultisampleRenderTarget(T),ut.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(_,I,V),_t.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],bt===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Vc(I,V,Z,$){if(I.visible===!1)return;if(I.layers.test(V.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(V);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||dt.intersectsSprite(I)){$&&yt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(q);let It=k.update(I),Nt=I.material;Nt.visible&&m.push(I,It,Nt,Z,yt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||dt.intersectsObject(I))){let It=k.update(I),Nt=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),yt.copy(I.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),yt.copy(It.boundingSphere.center)),yt.applyMatrix4(I.matrixWorld).applyMatrix4(q)),Array.isArray(Nt)){let Ft=It.groups;for(let Xt=0,Yt=Ft.length;Xt<Yt;Xt++){let Ht=Ft[Xt],Kt=Nt[Ht.materialIndex];Kt&&Kt.visible&&m.push(I,It,Kt,Z,yt.z,Ht)}}else Nt.visible&&m.push(I,It,Nt,Z,yt.z,null)}}let vt=I.children;for(let It=0,Nt=vt.length;It<Nt;It++)Vc(vt[It],V,Z,$)}function $h(I,V,Z,$){let G=I.opaque,vt=I.transmissive,It=I.transparent;p.setupLightsView(Z),bt===!0&&at.setGlobalState(_.clippingPlanes,Z),$&&J.viewport(C.copy($)),G.length>0&&yo(G,V,Z),vt.length>0&&yo(vt,V,Z),It.length>0&&yo(It,V,Z),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Jh(I,V,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Vn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Ws:Fn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let vt=p.state.transmissionRenderTarget[$.id],It=$.viewport||C;vt.setSize(It.z*_.transmissionResolutionScale,It.w*_.transmissionResolutionScale);let Nt=_.getRenderTarget(),Ft=_.getActiveCubeFace(),Xt=_.getActiveMipmapLevel();_.setRenderTarget(vt),_.getClearColor(L),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),Gt&&Rt.render(Z);let Yt=_.toneMapping;_.toneMapping=li;let Ht=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),bt===!0&&at.setGlobalState(_.clippingPlanes,$),yo(I,Z,$),ut.updateMultisampleRenderTarget(vt),ut.updateRenderTargetMipmap(vt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ue=0,be=V.length;ue<be;ue++){let ge=V[ue],de=ge.object,kt=ge.geometry,xe=ge.material,ne=ge.group;if(xe.side===ie&&de.layers.test($.layers)){let on=xe.side;xe.side=De,xe.needsUpdate=!0,Kh(de,Z,$,kt,xe,ne),xe.side=on,xe.needsUpdate=!0,Kt=!0}}Kt===!0&&(ut.updateMultisampleRenderTarget(vt),ut.updateRenderTargetMipmap(vt))}_.setRenderTarget(Nt,Ft,Xt),_.setClearColor(L,O),Ht!==void 0&&($.viewport=Ht),_.toneMapping=Yt}function yo(I,V,Z){let $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,vt=I.length;G<vt;G++){let It=I[G],Nt=It.object,Ft=It.geometry,Xt=It.group,Yt=It.material;Yt.allowOverride===!0&&$!==null&&(Yt=$),Nt.layers.test(Z.layers)&&Kh(Nt,V,Z,Ft,Yt,Xt)}}function Kh(I,V,Z,$,G,vt){I.onBeforeRender(_,V,Z,$,G,vt),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(_,V,Z,$,I,vt),G.transparent===!0&&G.side===ie&&G.forceSinglePass===!1?(G.side=De,G.needsUpdate=!0,_.renderBufferDirect(Z,V,$,G,I,vt),G.side=Pn,G.needsUpdate=!0,_.renderBufferDirect(Z,V,$,G,I,vt),G.side=ie):_.renderBufferDirect(Z,V,$,G,I,vt),I.onAfterRender(_,V,Z,$,G,vt)}function vo(I,V,Z){V.isScene!==!0&&(V=gt);let $=st.get(I),G=p.state.lights,vt=p.state.shadowsArray,It=G.state.version,Nt=Y.getParameters(I,G.state,vt,V,Z),Ft=Y.getProgramCacheKey(Nt),Xt=$.programs;$.environment=I.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(I.isMeshStandardMaterial?Lt:Ot).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?V.environmentRotation:I.envMapRotation,Xt===void 0&&(I.addEventListener("dispose",it),Xt=new Map,$.programs=Xt);let Yt=Xt.get(Ft);if(Yt!==void 0){if($.currentProgram===Yt&&$.lightsStateVersion===It)return Qh(I,Nt),Yt}else Nt.uniforms=Y.getUniforms(I),I.onBeforeCompile(Nt,_),Yt=Y.acquireProgram(Nt,Ft),Xt.set(Ft,Yt),$.uniforms=Nt.uniforms;let Ht=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ht.clippingPlanes=at.uniform),Qh(I,Nt),$.needsLights=Mp(I),$.lightsStateVersion=It,$.needsLights&&(Ht.ambientLightColor.value=G.state.ambient,Ht.lightProbe.value=G.state.probe,Ht.directionalLights.value=G.state.directional,Ht.directionalLightShadows.value=G.state.directionalShadow,Ht.spotLights.value=G.state.spot,Ht.spotLightShadows.value=G.state.spotShadow,Ht.rectAreaLights.value=G.state.rectArea,Ht.ltc_1.value=G.state.rectAreaLTC1,Ht.ltc_2.value=G.state.rectAreaLTC2,Ht.pointLights.value=G.state.point,Ht.pointLightShadows.value=G.state.pointShadow,Ht.hemisphereLights.value=G.state.hemi,Ht.directionalShadowMap.value=G.state.directionalShadowMap,Ht.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ht.spotShadowMap.value=G.state.spotShadowMap,Ht.spotLightMatrix.value=G.state.spotLightMatrix,Ht.spotLightMap.value=G.state.spotLightMap,Ht.pointShadowMap.value=G.state.pointShadowMap,Ht.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=Yt,$.uniformsList=null,Yt}function jh(I){if(I.uniformsList===null){let V=I.currentProgram.getUniforms();I.uniformsList=$s.seqWithValue(V.seq,I.uniforms)}return I.uniformsList}function Qh(I,V){let Z=st.get(I);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function yp(I,V,Z,$,G){V.isScene!==!0&&(V=gt),ut.resetTextureUnits();let vt=V.fog,It=$.isMeshStandardMaterial?V.environment:null,Nt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,Ft=($.isMeshStandardMaterial?Lt:Ot).get($.envMap||It),Xt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Yt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ht=!!Z.morphAttributes.position,Kt=!!Z.morphAttributes.normal,ue=!!Z.morphAttributes.color,be=li;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(be=_.toneMapping);let ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,de=ge!==void 0?ge.length:0,kt=st.get($),xe=p.state.lights;if(bt===!0&&(W===!0||I!==b)){let qe=I===b&&$.id===S;at.setState($,I,qe)}let ne=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==xe.state.version||kt.outputColorSpace!==Nt||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==Ft||$.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==at.numPlanes||kt.numIntersection!==at.numIntersection)||kt.vertexAlphas!==Xt||kt.vertexTangents!==Yt||kt.morphTargets!==Ht||kt.morphNormals!==Kt||kt.morphColors!==ue||kt.toneMapping!==be||kt.morphTargetsCount!==de)&&(ne=!0):(ne=!0,kt.__version=$.version);let on=kt.currentProgram;ne===!0&&(on=vo($,V,G));let ms=!1,an=!1,hr=!1,ye=on.getUniforms(),mn=kt.uniforms;if(J.useProgram(on.program)&&(ms=!0,an=!0,hr=!0),$.id!==S&&(S=$.id,an=!0),ms||b!==I){J.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ye.setValue(F,"projectionMatrix",I.projectionMatrix),ye.setValue(F,"viewMatrix",I.matrixWorldInverse);let Ke=ye.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,pt.setFromMatrixPosition(I.matrixWorld)),K.logarithmicDepthBuffer&&ye.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ye.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,an=!0,hr=!0)}if(G.isSkinnedMesh){ye.setOptional(F,G,"bindMatrix"),ye.setOptional(F,G,"bindMatrixInverse");let qe=G.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ye.setValue(F,"boneTexture",qe.boneTexture,ut))}G.isBatchedMesh&&(ye.setOptional(F,G,"batchingTexture"),ye.setValue(F,"batchingTexture",G._matricesTexture,ut),ye.setOptional(F,G,"batchingIdTexture"),ye.setValue(F,"batchingIdTexture",G._indirectTexture,ut),ye.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(F,"batchingColorTexture",G._colorsTexture,ut));let gn=Z.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ot.update(G,Z,on),(an||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,ye.setValue(F,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mn.envMap.value=Ft,mn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(mn.envMapIntensity.value=V.environmentIntensity),an&&(ye.setValue(F,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&vp(mn,hr),vt&&$.fog===!0&&rt.refreshFogUniforms(mn,vt),rt.refreshMaterialUniforms(mn,$,z,H,p.state.transmissionRenderTarget[I.id]),$s.upload(F,jh(kt),mn,ut)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($s.upload(F,jh(kt),mn,ut),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ye.setValue(F,"center",G.center),ye.setValue(F,"modelViewMatrix",G.modelViewMatrix),ye.setValue(F,"normalMatrix",G.normalMatrix),ye.setValue(F,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let qe=$.uniformsGroups;for(let Ke=0,Gc=qe.length;Ke<Gc;Ke++){let Gi=qe[Ke];Bt.update(Gi,on),Bt.bind(Gi,on)}}return on}function vp(I,V){I.ambientLightColor.needsUpdate=V,I.lightProbe.needsUpdate=V,I.directionalLights.needsUpdate=V,I.directionalLightShadows.needsUpdate=V,I.pointLights.needsUpdate=V,I.pointLightShadows.needsUpdate=V,I.spotLights.needsUpdate=V,I.spotLightShadows.needsUpdate=V,I.rectAreaLights.needsUpdate=V,I.hemisphereLights.needsUpdate=V}function Mp(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,V,Z){let $=st.get(I);$.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),st.get(I.texture).__webglTexture=V,st.get(I.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,V){let Z=st.get(I);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};let bp=F.createFramebuffer();this.setRenderTarget=function(I,V=0,Z=0){T=I,w=V,E=Z;let $=!0,G=null,vt=!1,It=!1;if(I){let Ft=st.get(I);if(Ft.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Ft.__webglFramebuffer===void 0)ut.setupRenderTarget(I);else if(Ft.__hasExternalTextures)ut.rebindTextures(I,st.get(I.texture).__webglTexture,st.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ht=I.depthTexture;if(Ft.__boundDepthTexture!==Ht){if(Ht!==null&&st.has(Ht)&&(I.width!==Ht.image.width||I.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(I)}}let Xt=I.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);let Yt=st.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Yt[V])?G=Yt[V][Z]:G=Yt[V],vt=!0):I.samples>0&&ut.useMultisampledRTT(I)===!1?G=st.get(I).__webglMultisampledFramebuffer:Array.isArray(Yt)?G=Yt[Z]:G=Yt,C.copy(I.viewport),A.copy(I.scissor),P=I.scissorTest}else C.copy(et).multiplyScalar(z).floor(),A.copy(St).multiplyScalar(z).floor(),P=ct;if(Z!==0&&(G=bp),J.bindFramebuffer(F.FRAMEBUFFER,G)&&$&&J.drawBuffers(I,G),J.viewport(C),J.scissor(A),J.setScissorTest(P),vt){let Ft=st.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ft.__webglTexture,Z)}else if(It){let Ft=V;for(let Xt=0;Xt<I.textures.length;Xt++){let Yt=st.get(I.textures[Xt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,Z,Ft)}}else if(I!==null&&Z!==0){let Ft=st.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(I,V,Z,$,G,vt,It,Nt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=st.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){J.bindFramebuffer(F.FRAMEBUFFER,Ft);try{let Xt=I.textures[Nt],Yt=Xt.format,Ht=Xt.type;if(!K.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=I.width-$&&Z>=0&&Z<=I.height-G&&(I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(V,Z,$,G,Tt.convert(Yt),Tt.convert(Ht),vt))}finally{let Xt=T!==null?st.get(T).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(I,V,Z,$,G,vt,It,Nt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=st.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(V>=0&&V<=I.width-$&&Z>=0&&Z<=I.height-G){J.bindFramebuffer(F.FRAMEBUFFER,Ft);let Xt=I.textures[Nt],Yt=Xt.format,Ht=Xt.type;if(!K.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.bufferData(F.PIXEL_PACK_BUFFER,vt.byteLength,F.STREAM_READ),I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Nt),F.readPixels(V,Z,$,G,Tt.convert(Yt),Tt.convert(Ht),0);let ue=T!==null?st.get(T).__webglFramebuffer:null;J.bindFramebuffer(F.FRAMEBUFFER,ue);let be=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dd(F,be,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Kt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,vt),F.deleteBuffer(Kt),F.deleteSync(be),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,V=null,Z=0){let $=Math.pow(2,-Z),G=Math.floor(I.image.width*$),vt=Math.floor(I.image.height*$),It=V!==null?V.x:0,Nt=V!==null?V.y:0;ut.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,It,Nt,G,vt),J.unbindTexture()};let Sp=F.createFramebuffer(),wp=F.createFramebuffer();this.copyTextureToTexture=function(I,V,Z=null,$=null,G=0,vt=null){vt===null&&(G!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=G,G=0):vt=0);let It,Nt,Ft,Xt,Yt,Ht,Kt,ue,be,ge=I.isCompressedTexture?I.mipmaps[vt]:I.image;if(Z!==null)It=Z.max.x-Z.min.x,Nt=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,Xt=Z.min.x,Yt=Z.min.y,Ht=Z.isBox3?Z.min.z:0;else{let gn=Math.pow(2,-G);It=Math.floor(ge.width*gn),Nt=Math.floor(ge.height*gn),I.isDataArrayTexture?Ft=ge.depth:I.isData3DTexture?Ft=Math.floor(ge.depth*gn):Ft=1,Xt=0,Yt=0,Ht=0}$!==null?(Kt=$.x,ue=$.y,be=$.z):(Kt=0,ue=0,be=0);let de=Tt.convert(V.format),kt=Tt.convert(V.type),xe;V.isData3DTexture?(ut.setTexture3D(V,0),xe=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ut.setTexture2DArray(V,0),xe=F.TEXTURE_2D_ARRAY):(ut.setTexture2D(V,0),xe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);let ne=F.getParameter(F.UNPACK_ROW_LENGTH),on=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ms=F.getParameter(F.UNPACK_SKIP_PIXELS),an=F.getParameter(F.UNPACK_SKIP_ROWS),hr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Yt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht);let ye=I.isDataArrayTexture||I.isData3DTexture,mn=V.isDataArrayTexture||V.isData3DTexture;if(I.isDepthTexture){let gn=st.get(I),qe=st.get(V),Ke=st.get(gn.__renderTarget),Gc=st.get(qe.__renderTarget);J.bindFramebuffer(F.READ_FRAMEBUFFER,Ke.__webglFramebuffer),J.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gc.__webglFramebuffer);for(let Gi=0;Gi<Ft;Gi++)ye&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,st.get(I).__webglTexture,G,Ht+Gi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,st.get(V).__webglTexture,vt,be+Gi)),F.blitFramebuffer(Xt,Yt,It,Nt,Kt,ue,It,Nt,F.DEPTH_BUFFER_BIT,F.NEAREST);J.bindFramebuffer(F.READ_FRAMEBUFFER,null),J.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||I.isRenderTargetTexture||st.has(I)){let gn=st.get(I),qe=st.get(V);J.bindFramebuffer(F.READ_FRAMEBUFFER,Sp),J.bindFramebuffer(F.DRAW_FRAMEBUFFER,wp);for(let Ke=0;Ke<Ft;Ke++)ye?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gn.__webglTexture,G,Ht+Ke):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gn.__webglTexture,G),mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qe.__webglTexture,vt,be+Ke):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qe.__webglTexture,vt),G!==0?F.blitFramebuffer(Xt,Yt,It,Nt,Kt,ue,It,Nt,F.COLOR_BUFFER_BIT,F.NEAREST):mn?F.copyTexSubImage3D(xe,vt,Kt,ue,be+Ke,Xt,Yt,It,Nt):F.copyTexSubImage2D(xe,vt,Kt,ue,Xt,Yt,It,Nt);J.bindFramebuffer(F.READ_FRAMEBUFFER,null),J.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mn?I.isDataTexture||I.isData3DTexture?F.texSubImage3D(xe,vt,Kt,ue,be,It,Nt,Ft,de,kt,ge.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(xe,vt,Kt,ue,be,It,Nt,Ft,de,ge.data):F.texSubImage3D(xe,vt,Kt,ue,be,It,Nt,Ft,de,kt,ge):I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,vt,Kt,ue,It,Nt,de,kt,ge.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,vt,Kt,ue,ge.width,ge.height,de,ge.data):F.texSubImage2D(F.TEXTURE_2D,vt,Kt,ue,It,Nt,de,kt,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,ne),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,on),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ms),F.pixelStorei(F.UNPACK_SKIP_ROWS,an),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hr),vt===0&&V.generateMipmaps&&F.generateMipmap(xe),J.unbindTexture()},this.initRenderTarget=function(I){st.get(I).__webglFramebuffer===void 0&&ut.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ut.setTextureCube(I,0):I.isData3DTexture?ut.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ut.setTexture2DArray(I,0):ut.setTexture2D(I,0),J.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,J.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function $d(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new se,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Zd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);let g=Zd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Zd(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Pe(o,e,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let y=h.getComponent(f,g);a.setComponent(f+u,g,y)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}var fh=new Map,ph=new Map,Ty=new U(0,1,0),dn={paper:"#f8eedb",edge:"#d8c8ae",wood:"#92735c",ink:"#55483f",rust:"#956152",sage:"#8b9b85",gold:"#c9ac76"};function Ay(i=1){let t=(Number(i)||1)>>>0;return()=>{t+=1831565813;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function mh(i,t){return new Mt(i).lerp(new Mt(t>=0?"#fff8e9":"#554a42"),Math.abs(t))}function js(i,t=""){let e=new Mt(i),n=`${e.getHexString()}:${t}`;return fh.has(n)||fh.set(n,new we({color:e,roughness:1,metalness:0,flatShading:!0,name:`paper-${n}`})),fh.get(n)}function Ry(i){return[js(i),js(mh(i,-.055)),js(mh(i,-.16))]}function gh(i,t){return ph.has(i)||ph.set(i,t()),ph.get(i)}function mc(i,t,e,n=[0,0,0],s=[1,1,1]){let r=new jt(i,t);return r.position.set(...n),r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,e.add(r),r}function fe(i,t,e,n){return mc(gh("box",()=>new Qe),js(t),i,n,e)}function Jd(i,t,e,n,s=dn.wood){let r=new U(...t),o=new U(...e),a=o.clone().sub(r),c=mc(gh("tapered-stem",()=>new ri(.66,1,1,5,1)),js(s),i,r.add(o).multiplyScalar(.5).toArray(),[n,a.length(),n]);return c.quaternion.setFromUnitVectors(Ty,a.normalize()),c}function Cy(i,t,e=.014){return gh(i,()=>{let n=new Vr(t,{depth:e,bevelEnabled:!1,steps:1,curveSegments:4});n.translate(0,0,-e/2);let s=n.getAttribute("normal");n.clearGroups();let r=0,o=-1;for(let a=0;a<s.count;a+=3){let c=s.getZ(a),l=c>.8?0:c<-.8?1:2;l!==o&&o!==-1&&(n.addGroup(r,a-r,o),r=a),o=l}return n.addGroup(r,s.count-r,o),n})}function Kd(i,t,e){return i.name=`paper-${t}`,i.userData={propKind:t,seed:e},i}function Ks(i,t,e,n,s=0,r=.17,o=.21){let a=new oe;a.position.set(t,e,n),a.rotation.y=s,i.add(a),fe(a,dn.ink,[r+.035,o+.035,.026],[0,0,0]),fe(a,"#d9bd89",[r-.018,o-.024,.009],[0,0,.019]),fe(a,dn.ink,[.013,o,.018],[0,0,.026]),fe(a,dn.ink,[r,.013,.018],[0,.025,.027]),fe(a,dn.rust,[r+.07,.025,.067],[0,o/2+.035,.008])}function jd({scale:i=1,seed:t=1}={}){let e=new oe,n=Ay(t),s=mh("#f1e5cc",Math.floor(n()*3)*.025);fe(e,"#cab99f",[1.15,.05,.9],[0,.025,0]),fe(e,"#e7d9be",[1.11,.05,.86],[0,.075,0]),fe(e,"#d7c5a8",[1.07,.035,.82],[0,.1175,0]),fe(e,s,[1.01,.745,.76],[0,.5075,0]),fe(e,"#bda98e",[1.025,.055,.775],[0,.163,0]),[dn.rust,dn.gold,dn.paper,dn.sage,dn.rust].forEach((r,o)=>{fe(e,r,[1.035,.012,.785],[0,.855+o*.012,0])}),fe(e,dn.ink,[1.09,.035,.845],[0,.9275,0]),fe(e,dn.rust,[1.15,.027,.9],[0,.9585,0]),fe(e,"#d5bda0",[1.095,.027,.845],[0,.9855,0]),fe(e,"#eee0c7",[1.02,.025,.77],[0,1.0115,0]),fe(e,"#a87960",[1.04,.052,.035],[0,1.05,.371]),fe(e,"#a87960",[1.04,.052,.035],[0,1.05,-.371]),fe(e,"#a87960",[.035,.052,.71],[-.5025,1.05,0]),fe(e,"#a87960",[.035,.052,.71],[.5025,1.05,0]);for(let r of[-.492,.492])for(let o of[-.368,.368])fe(e,"#bea487",[.032,.63,.031],[r,.51,o]);Ks(e,-.29,.61,.388),Ks(e,.29,.61,.388),Ks(e,-.27,.61,-.388,Math.PI),Ks(e,.27,.61,-.388,Math.PI);for(let r of[-.21,.21])Ks(e,.513,.61,r,Math.PI/2,.15,.21),Ks(e,-.513,.61,r,-Math.PI/2,.15,.21);return fe(e,"#6b5145",[.23,.39,.026],[0,.329,.395]),fe(e,"#a67c5d",[.162,.325,.015],[0,.314,.414]),fe(e,"#6b5145",[.014,.325,.012],[0,.314,.429]),fe(e,dn.rust,[.3,.045,.09],[0,.551,.403]),fe(e,"#d9c4a2",[.34,.045,.135],[0,.1425,.3825]),fe(e,"#d8c5a8",[.14,.07,.15],[-.3,1.05,-.18]),fe(e,"#a98469",[.17,.015,.18],[-.3,1.0925,-.18]),e.scale.setScalar(i),Kd(e,"tibetan-house",t)}function Qd({length:i=2.5}={}){let t=new oe,e=i/2;Jd(t,[-e,0,0],[-e,.93,0],.016),Jd(t,[e,0,0],[e,.96,0],.016);let n=new ji(new U(-e,.9,0),new U(0,.64,.025),new U(e,.93,0));mc(new ts(n,20,.005,3,!1),js("#b7a48c"),t);let s=Math.max(5,Math.min(12,Math.round(i*3.2))),r=i/(s+1)*.76,o=["#829bb3","#e8dfc7","#a96f5e","#8f9f83","#c9ad72"],a=new yn;a.moveTo(-.5,0),a.lineTo(.5,0),a.lineTo(.46,-.91),a.lineTo(.06,-.98),a.lineTo(-.46,-.92),a.closePath();let c=Cy("prayer-flag",a,.022);for(let l=0;l<s;l++){let h=n.getPoint((l+1)/(s+1)),u=mc(c,Ry(o[l%o.length]),t,h.toArray(),[r,r*1.13,r]);u.rotation.y=Math.sin(l*1.8)*.17,u.rotation.z=Math.cos(l*1.7)*.065}return Kd(t,"prayer-flags",1)}var ui=Math.PI*2,{clamp:Di,lerp:Ce}=me,fn=i=>(i=Di(i,0,1),i*i*(3-2*i)),di=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)},Ze=Object.fromEntries(Object.entries({ivory:"#fff1d7",cream:"#ead8b8",sand:"#ceb89b",peach:"#d6ad95",foam:"#fff8e6",foamShade:"#c5e1cc",mint:"#a5d9c1",paleJade:"#71c8b0",jade:"#35b8ae",turquoise:"#20aeb3",blue:"#178ba5",deep:"#16718a",fallShade:"#aab9a7",fallMid:"#e0d3b9",fallLight:"#fff5de"}).map(([i,t])=>[i,new Mt(t)])),sf=new we({color:"#ffffff",vertexColors:!0,side:ie,roughness:1,metalness:0});sf.name="hand-cut-water-sculpture-v4";var rf=new we({color:"#ffffff",vertexColors:!0,side:ie,roughness:.72,metalness:0});rf.name="mineral-colour-water-v4";function _c(i,t){let e=new se;return e.setAttribute("position",new Vt(i,3)),e.setAttribute("color",new Vt(t,3)),e.computeVertexNormals(),e}function ro(i,t,e,n,s,r){i.push(...e,...n,...s);for(let o=0;o<3;o++)t.push(r.r,r.g,r.b)}function of(i,t,e,n,s,r,o){ro(i,t,e,n,s,o),ro(i,t,e,s,r,o)}function xh(i,t,e,n=sf){let s=new jt(t,n);return s.name=e,s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Qs(i,t,e){let n=!1,s=1/0;for(let r=0,o=e.length-1;r<e.length;o=r++){let a=e[r],c=e[o],l=c[0]-a[0],h=c[1]-a[1],u=Di(((i-a[0])*l+(t-a[1])*h)/(l*l+h*h||1),0,1);s=Math.min(s,Math.hypot(i-a[0]-l*u,t-a[1]-h*u)),a[1]>t!=c[1]>t&&i<(c[0]-a[0])*(t-a[1])/(c[1]-a[1])+a[0]&&(n=!n)}return n?s:-s}function Iy(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t*.5}function _h(i,t){let e=Math.floor(i),n=Math.floor(t),s=fn(i-e),r=fn(t-n);return Ce(Ce(di(e,n),di(e+1,n),s),Ce(di(e,n+1),di(e+1,n+1),s),r)*2-1}function yh(i,t,e,n){let s=i.id,r=fn((n+.1)/(s==="wuhua"?1.28:.74)),o=_h(t*.34+4,e*.34-7),a=_h(t*.43-9,e*.38+3),c;return s==="changhai"?c=Ze.blue.clone().lerp(Ze.deep,.48+.48*r):s==="wucai"?c=new Mt("#2abeb9").lerp(new Mt("#1687ab"),r*.74):s==="wuhua"?(c=new Mt("#5cc9b8").lerp(Ze.turquoise,r*.91),c.lerp(new Mt("#198da3"),fn((o+.15)/.8)*r*.34),c.lerp(new Mt("#91d7bb"),fn((a-.12)/.8)*.27)):s==="mirror"?(c=new Mt("#4bbfb0").lerp(new Mt("#319f9d"),r*.52),c.lerp(new Mt("#82d1b8"),(.5+a*.5)*.16)):(c=new Mt(s==="shuzheng-lower"?"#35aaa9":"#38b3ac"),c.lerp(new Mt("#7bceba"),(.5+a*.5)*.27),c.lerp(new Mt("#279ca7"),(.5+o*.5)*.12)),c.multiplyScalar(.996+.006*_h(t*.78,e*.78))}function Py(i,t,e=0){let n=Math.sign(Iy(i));return i.map((s,r)=>{let o=i[(r-1+i.length)%i.length],a=i[(r+1)%i.length],c=a[0]-o[0],l=a[1]-o[1],h=Math.hypot(c,l)||1,u=-n*l/h,f=n*c/h,d=1+.1*Math.sin(r*.17+e)+.05*Math.sin(r*.39-e),g=t*d;if(g>0){let y=s[0]-o[0],m=s[1]-o[1],p=a[0]-s[0],x=a[1]-s[1],v=y*x-m*p;if(n*v>1e-7){let M=Math.hypot(y,m)*Math.hypot(p,x)*h/(2*Math.abs(v));g=M*(1-Math.exp(-g/M))}let _=0;for(;Qs(s[0]+u*g,s[1]+f*g,i)<-1e-4&&_++<8;)g*=.5}return[s[0]+u*g,s[1]+f*g]})}function Dy(i,t,e,n,s,r,o,a=null,c=0){for(let l=0;l<e.length;l++){let h=(l+1)%e.length,u=e[l],f=e[h],d=n[h],g=n[l],y=o.clone().multiplyScalar(.995+.008*Math.sin(l*.12)),m=a?.[l]??1,p=a?.[h]??1,x=[u[0],Ce(c,s,m),u[1]],v=[g[0],Ce(c,r,m),g[1]],_=[d[0],Ce(c,r,p),d[1]],M=[f[0],Ce(c,s,p),f[1]];for(let w of[[x,v,_],[x,_,M]]){let[E,T,S]=w;(T[2]-E[2])*(S[0]-E[0])-(T[0]-E[0])*(S[2]-E[2])<0?ro(i,t,E,S,T,y):ro(i,t,E,T,S,y)}}}function gc(i,t,e,n,s,r,o){let a=n[0]-e[0],c=n[1]-e[1],l=Math.hypot(a,c)||1,h=-c/l*s,u=a/l*s;of(i,t,[e[0]-h,o,e[1]-u],[e[0]+h,o,e[1]+u],[n[0]+h*.55,o,n[1]+u*.55],[n[0]-h*.55,o,n[1]-u*.55],r)}function Ly(i,t,e){if(e.id!=="wuhua")return;let n=[[[3.55,-4.1],[6.55,-3.28]],[[6.15,-5.98],[8.08,-3.85]],[[7.65,-1.6],[9.65,-2.64]],[[3.4,-5.2],[5.7,-5.8]]],s=new Mt("#468e87"),r=new Mt("#84bdb0");for(let o=0;o<n.length;o++){let[a,c]=n[o],l=e.y+.012;gc(i,t,a,c,.021,s.clone().lerp(r,o*.09),l),gc(i,t,[a[0]-.014,a[1]-.014],[c[0]-.014,c[1]-.014],.006,r,l+.003);for(let h=1;h<6;h++){let u=h/6,f=Ce(a[0],c[0],u),d=Ce(a[1],c[1],u),g=h%2?1:-1,y=.22+di(o,h)*.47,m=[f-.24+di(h,o)*.15,d+g*y];gc(i,t,[f,d],m,.009,s,l+.001),h%2&&gc(i,t,[Ce(f,m[0],.64),Ce(d,m[1],.64)],[m[0]-.19,m[1]-.05],.005,s,l+.001)}}}var Uy=[{x:7.45,z:.57,width:3.12,top:3.4,bottom:1.78,depth:1.02,curve:.07},{x:-.35,z:4.54,width:5.15,top:1.78,bottom:.26,depth:.72,curve:.08},{x:1,z:6.94,width:2.1,top:.26,bottom:.08,depth:.23,curve:.025},{x:2.25,z:8.54,width:2.4,top:.08,bottom:-.08,depth:.23,curve:.025}];function Fy(i){return i.poly.map(([t,e])=>{let n=1;for(let s of Uy){let r=Math.abs(i.y-s.top)<.001,o=Math.abs(i.y-s.bottom)<.001;if(!r&&!o)continue;let a=Math.abs(t-s.x)/(s.width*.5),c=s.z+s.curve*Math.sin(t*1.7)+(o?s.depth:0),l=(1-fn((a-.8)/.22))*(1-fn((Math.abs(e-c)-.18)/.65));n=Math.min(n,1-l)}return n})}function vh(i){let t=i.id==="wuhua"?1:i.id==="changhai"?.67:.65,e=[-.135,-.018,.025,.101,.143,.255,.303,.44,.5].map(r=>r*t),n=Fy(i);return{cuts:e.map(r=>Py(i.poly,r,.45).map((o,a)=>[Ce(i.poly[a][0],o[0],n[a]),Ce(i.poly[a][1],o[1],n[a])])),weights:n}}function af(i,t){let e=i.name||i.id,n={pearl:"mirror",nuorilang:"shuzheng-upper","shuzheng-one":"shuzheng-middle","shuzheng-two":"shuzheng-lower"}[e],s={pearl:"wuhua",nuorilang:"nuorilang-head","shuzheng-one":"shuzheng-upper","shuzheng-two":"shuzheng-middle"}[e],r=t.find(d=>d.id===n),o=t.find(d=>d.id===s);if(!r)return{...i};let a=vh(r).cuts.at(-1),c=o?vh(o).cuts.at(-1):null,l=[],h=[],u=[],f=[];for(let d=0;d<=32;d++){let g=i.x+(d/32-.5)*i.width,y=i.z+(i.curve??.08)*Math.sin(g*1.7)+.026,m=y+i.depth,p=m;for(let M=m;M<=m+1.05;M+=.012)if(Qs(g,M,a)>.035){p=M+.065;break}let x=y-.045;if(c){for(let M=y+.55;M>=y-1.2;M-=.012)if(Qs(g,M,c)>.025){x=Math.min(y-.02,M-.035);break}}l.push(p),h.push(x);let v=yh(r,g,p,Math.max(0,Qs(g,p,r.poly))),_=o?yh(o,g,x,Math.max(0,Qs(g,x,o.poly))):v;u.push([v.r,v.g,v.b]),f.push([_.r,_.g,_.b])}return{...i,runout:l,inlet:h,receiverPigment:u,sourcePigment:f}}function cf(i,t,e){let n=Be.triangulateShape(i.poly.map(m=>new xt(...m)),[]),s=[],r=[];function o(m,p,x,v=0){let _=[Math.hypot(m[0]-p[0],m[1]-p[1]),Math.hypot(p[0]-x[0],p[1]-x[1]),Math.hypot(x[0]-m[0],x[1]-m[1])],M=Math.max(..._);if(M>.29&&v<16){let w=_.indexOf(M);if(w===0){let E=[(m[0]+p[0])*.5,(m[1]+p[1])*.5];o(m,E,x,v+1),o(E,p,x,v+1)}else if(w===1){let E=[(p[0]+x[0])*.5,(p[1]+x[1])*.5];o(m,p,E,v+1),o(m,E,x,v+1)}else{let E=[(x[0]+m[0])*.5,(x[1]+m[1])*.5];o(m,p,E,v+1),o(E,p,x,v+1)}return}for(let[w,E]of[m,x,p]){s.push(w,i.y,E);let T=yh(i,w,E,Math.max(0,Qs(w,E,i.poly)));r.push(T.r,T.g,T.b)}}for(let m of n)o(...m.map(p=>i.poly[p]));let a=i.id.startsWith("shuzheng")?"shuzheng":i.id==="nuorilang-head"?"nuorilang":i.id,c=xh(t,_c(s,r),`water-${i.id}`,rf.clone());c.castShadow=!1,c.userData={water:!0,stopId:a,basin:i.id,area:i.area};let l=[],h=[],{cuts:u,weights:f}=vh(i);c.userData.surfaceContour=u.at(-1).map(m=>[m[0],m[1]]);let d=[.08,.073,.05,.046,.031,.028,.015,.011,0],g=i.id==="changhai"?new Mt("#489fac"):new Mt("#4fc2b2"),y=[Ze.ivory,Ze.ivory.clone().lerp(Ze.mint,.35),Ze.mint,Ze.mint.clone().lerp(Ze.paleJade,.4),Ze.paleJade,Ze.paleJade.clone().lerp(g,.34),g,g.clone().lerp(new Mt("#76cbbb"),.14)];for(let m=0;m<u.length-1;m++)Dy(l,h,u[m],u[m+1],i.y+d[m],i.y+d[m+1],y[m],f,i.y);return Ly(l,h,i),{lake:c,rim:_c(l,h)}}var so={white:new Mt("#fafbec"),light:new Mt("#edf7e9"),body:new Mt("#c4e2d9"),channel:new Mt("#72b2b2"),edge:new Mt("#bfddd4")};function xc(i){return i.seed??{pearl:8,nuorilang:19,"shuzheng-one":20,"shuzheng-two":22}[i.id||i.name]??1}function tf(i,t,e){if(!i?.length)return e;let n=Di(t,0,1)*(i.length-1),s=Math.floor(n),r=Math.min(s+1,i.length-1);return Ce(i[s],i[r],n-s)}function ef(i,t,e){if(!i?.length)return e.clone();let n=Di(t,0,1)*(i.length-1),s=Math.floor(n),r=Math.min(s+1,i.length-1),o=n-s;return new Mt().setRGB(Ce(i[s][0],i[r][0],o),Ce(i[s][1],i[r][1],o),Ce(i[s][2],i[r][2],o))}function tn(i,t,e,n=0){t=Di(t,0,1),e=Di(e,0,1);let s=xc(i),r=i.top-i.bottom,o=r>.6,a=i.x+(t-.5)*i.width,c=Di((e-.055)/.945,0,1),l=Math.sin(c*Math.PI),h=(o?.008:.002)*Math.sin(t*ui*4.7+s),u=(o?.009:.0025)*(Math.sin(t*ui*16.4+s)*.62+Math.sin(t*ui*33.7+s*.31)*.38),f=i.z+(i.curve??.08)*Math.sin(a*1.7)+.026,d=tf(i.inlet,t,f-.045),g=tf(i.runout,t,f+i.depth),y=Math.max(0,g-(f+i.depth));return[a+(o?.005:.0014)*Math.sin(t*23+s)*l,Ce(i.top+.007,i.bottom+.004,fn(c))+h*(1-fn(c)),Ce(d,f,fn(e/.14))+i.depth*(.23*c+.77*c*c)+u*l+(o?.006:.0017)*Math.sin(t*ui*7.1-c*14+n*7.3+s)*l+y*fn((c-.68)/.32)]}function lf(i,t,e,n=0){let o=tn(i,Math.max(0,t-2e-4),e,n),a=tn(i,Math.min(1,t+2e-4),e,n),c=tn(i,t,Math.max(0,e-2e-4),n),l=tn(i,t,Math.min(1,e+2e-4),n),h=a[0]-o[0],u=a[1]-o[1],f=a[2]-o[2],d=l[0]-c[0],g=l[1]-c[1],y=l[2]-c[2],m=g*f-y*u,p=y*h-d*f,x=d*u-g*h,v=Math.hypot(m,p,x)||1;return[m/v,p/v,x/v]}function hf(i,t,e,n){let s=Math.pow(.5+.5*Math.sin(t*36-e*18+n*(9+Math.sin(t*17)*1.6)+i),3),r=Math.pow(.5+.5*Math.sin(t*79-e*31+n*15.3+i),5);return(s*.38+r*.24)*Math.sin(e*Math.PI)}function Ny(i,t,e){let n=xc(i),s=.13*Math.sin(e*4.4+t*19+n),r=Math.pow(.5+.5*Math.sin(t*ui*17.3+s+n),3.5),o=Math.pow(.5+.5*Math.sin(t*ui*31.7+e*.55+n*.31),5),a=Math.pow(.5+.5*Math.sin(t*ui*8.7+n*.7),2),c=so.body.clone().lerp(so.channel,(r*.56+o*.18)*Math.sin(e*Math.PI));c.lerp(so.light,.16+a*.24);let l=Math.exp(-Math.pow((e-(.75+.035*Math.sin(t*37+n)))/.12,2))*(.42+a*.27),h=so.white.clone().sub(c).multiplyScalar(1-l);c.lerp(so.white,l);let u=.79+.055*Math.sin(t*ui*4.3+n)+.025*Math.sin(t*ui*9.7),f=fn((e-u)/(1-u)),d=1-fn(e/.18);return c.lerp(ef(i.receiverPigment,t,Ze.jade),f),c.lerp(ef(i.sourcePigment,t,Ze.jade),d),h.multiplyScalar((1-f)*(1-d)),{color:c,gain:h}}function Mh(i,t,e){let n=Di((t-i.x)/i.width+.5,0,1),s=0,r=1;if(e<tn(i,n,0)[2]-.1||e>tn(i,n,1)[2]+.1)return 1/0;for(let o=0;o<18;o++){let a=(s+r)*.5;tn(i,n,a)[2]<e?s=a:r=a}return tn(i,n,(s+r)*.5)[1]-.18}var uf=new WeakMap;function df(i,t){let e=uf.get(i);if(!e)return!1;let{profile:n,uv:s,baseColors:r,gainColors:o}=e,a=i.geometry.attributes.position,c=i.geometry.attributes.color,l=xc(n);for(let h=0;h<a.count;h++){let u=s[h*2],f=s[h*2+1],d=tn(n,u,f,t),g=hf(l,u,f,t);a.array.set(d,h*3);for(let y=0;y<3;y++)c.array[h*3+y]=r[h*3+y]+o[h*3+y]*g}return a.needsUpdate=!0,c.needsUpdate=!0,!0}function nf(i,t,e,n,s,r,o,a,c){let l=[[-.5,-.5],[-.21,-.61],[.29,-.56],[.54,-.18],[.46,.42],[.04,.55],[-.43,.39]],h=l.map(([d,g],y)=>[e+d*r,n+o*(.54+.53*di(y,c)),s+g*a]),u=[e-r*.07,n+o*.96,s-a*.09],f=Ze.cream.clone().lerp(Ze.peach,.18+di(c,7)*.16);for(let d=0;d<l.length;d++){let g=(d+1)%l.length,y=h[d],m=h[g],p=f.clone().multiplyScalar(.95+.05*di(d,c+4));ro(i,t,u,m,y,p),of(i,t,y,m,[e+(m[0]-e)*1.13,n,s+(m[2]-s)*1.09],[e+(y[0]-e)*1.13,n,s+(y[2]-s)*1.09],p.clone().multiplyScalar(.94))}}function ff(i,t){let e=xc(t),n=t.top-t.bottom>.6,s=[],r=[],o=[],a=[],c=Math.ceil(t.width/(n?.067:.09)),l=n?34:18,h=[],u=[],f=[],d=[];for(let x=0;x<=c;x++)for(let v=0;v<=l;v++){let _=x/c,M=v/l;s.push(...tn(t,_,M)),h.push(_,M);let{color:w,gain:E}=Ny(t,_,M),T=hf(e,_,M,0);f.push(w.r,w.g,w.b),d.push(E.r,E.g,E.b),r.push(w.r+E.r*T,w.g+E.g*T,w.b+E.b*T)}for(let x=0;x<c;x++)for(let v=0;v<l;v++){let _=x*(l+1)+v,M=_+1,w=(x+1)*(l+1)+v,E=w+1;u.push(_,M,E,_,E,w)}let g=_c(s,r);g.setIndex(u),g.setAttribute("uv",new Vt(h,2)),g.attributes.position.setUsage(Pi),g.attributes.color.setUsage(Pi),g.computeVertexNormals();let y=new He({color:"#ffffff",vertexColors:!0,side:ie,toneMapped:!1});y.name="thin-aerated-water-veil-v5";let m=xh(i,g,`waterfall-${t.name}`,y);m.castShadow=!1,m.receiveShadow=!1,m.userData={water:!0,falls:!0,bakeSkip:!0,bakeNoOcclude:!0,stopId:t.name.startsWith("shuzheng")?"shuzheng":t.name,flowSurface:{...t,seed:e},maxChannelRelief:n?.015:.0042},uf.set(m,{profile:{...t,seed:e},uv:h,baseColors:Float32Array.from(f),gainColors:Float32Array.from(d)});for(let x of[-1,1]){let v=t.x+x*(t.width*.5+.035),_=t.z+(t.curve??.08)*Math.sin(v*1.7);nf(o,a,v,t.top-.14,_-.09,n?.2:.13,.13,n?.2:.12,e+x*19),n&&nf(o,a,v+x*.055,t.bottom+.01,_+t.depth*.72,.23,.2,.25,e+x*31)}let p=xh(i,_c(o,a),`travertine-shoulders-${t.name}`);return p.userData={kind:"travertine",stopId:m.userData.stopId},{mesh:m,base:Float32Array.from(m.geometry.attributes.position.array),seed:e}}var hs=Math.PI*2,Oy=me.clamp,pf=me.lerp,en={ivory:new Mt("#fff0cf"),wood:new Mt("#b28d61"),woodLight:new Mt("#e0b587"),woodShade:new Mt("#936e50"),fir:["#7f9569","#92a475","#6c845d","#a1ac79","#617b61","#b0b587"].map(i=>new Mt(i)),autumn:["#ffb9a5","#ffcaac","#ffd29b","#ffda8b","#f5aeba","#ffc1c8","#ffe5a6"].map(i=>new Mt(i))};function Sh(i){let t=i>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0,t/4294967296)}function By(i,t,e,n){let s=n[0]-e[0],r=n[1]-e[1],o=Oy(((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1),0,1);return Math.hypot(i-e[0]-o*s,t-e[1]-o*r)}function zy(i,t,e){let n=-1/0;for(let s of e){let r=s.bounds;if(r&&(i<r.x0-1.8||i>r.x1+1.8||t<r.z0-1.8||t>r.z1+1.8))continue;let o=!1,a=1/0,c=s.poly;for(let l=0,h=c.length-1;l<c.length;h=l++){let u=c[l],f=c[h];u[1]>t!=f[1]>t&&i<(f[0]-u[0])*(t-u[1])/(f[1]-u[1])+u[0]&&(o=!o),a=Math.min(a,By(i,t,u,f))}n=Math.max(n,o?a:-a)}return n}var bh=class{constructor(){this.positions=[],this.colors=[],this.wind=[]}triangle(t,e,n,s,r=0){this.positions.push(...t,...e,...n);for(let o=0;o<3;o++)this.colors.push(s.r,s.g,s.b),this.wind.push(Array.isArray(r)?r[o]:r)}quad(t,e,n,s,r,o=0){this.triangle(t,e,n,r,Array.isArray(o)?[o[0],o[1],o[2]]:o),this.triangle(t,n,s,r,Array.isArray(o)?[o[0],o[2],o[3]]:o)}finish(){let t=new se;return t.setAttribute("position",new Vt(this.positions,3)),t.setAttribute("color",new Vt(this.colors,3)),t.setAttribute("windWeight",new Vt(this.wind,1)),t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),t}};function gf(i,t,e,n,s,r){let o=Math.cos(s),a=Math.sin(s);return[r[0]+n*(i*o+e*a),r[1]+n*t,r[2]+n*(e*o-i*a)]}function yc(i,t,e,n,s,r,o=0){let a=new U(...t),c=new U(...e),l=c.clone().sub(a).normalize(),h=new U(0,0,1).cross(l).normalize();h.lengthSq()<.01&&h.set(1,0,0);let u=new U().crossVectors(l,h).normalize(),f=[],d=[];for(let g=0;g<4;g++){let y=g*Math.PI/2+.25,m=h.clone().multiplyScalar(Math.cos(y)*n).addScaledVector(u,Math.sin(y)*n);f.push(r(...a.clone().add(m).toArray())),d.push(r(...c.clone().addScaledVector(m,.57).toArray()))}for(let g=0;g<4;g++)i.quad(f[g],f[(g+1)%4],d[(g+1)%4],d[g],s.clone().multiplyScalar(g===0?1.12:g===2?.88:1),o)}function Hy(i,{x:t,y:e,z:n,height:s,color:r,seed:o,hero:a=!1}){let c=Sh(o),l=c()*hs,h=(c()-.5)*.045,u=(m,p,x)=>gf(m+h*p,p,x,s,l,[t,e,n]);yc(i,[0,0,0],[h,.98,0],.02,en.woodShade,u);let f=a?6:5;for(let m=0;m<f;m++){let p=m/(f-1),x=pf(.305,.885,p),v=(.09+.29*Math.pow(1-p,.88))*(1+(c()-.5)*.08),_=m*.59+c()*.13,M=r.clone().lerp(en.ivory,.025+m*.015);for(let w=0;w<5;w++){let E=_+w*hs/5,T=v*(.94+c()*.12),S=Math.cos(E),b=Math.sin(E),C=(X,et,St)=>u(S*X-b*et,St,b*X+S*et),A=C(T*.115,0,x+.071),P=[[.45,-.35,.012],[.74,-.48,-.047],[.7,-.3,-.022],[.94,-.25,-.08],[1.02,0,-.12],[.94,.25,-.08],[.7,.3,-.022],[.74,.48,-.047],[.45,.35,.012]].map(([X,et,St])=>C(X*T,et*T,x+St)),L=.25+x*.65;for(let X=0;X<P.length-1;X++){let et=M.clone().multiplyScalar(X<4?X%2?1.035:.96:X%2?.91:.98);i.triangle(A,P[X+1],P[X],et,[L*.3,L,L])}let O=C(T*.12,0,x+.077),N=C(T*1.015,0,x-.114),H=pf(x+.071,x-.12,.64)+.008,z=C(T*.71,-T*.025,H),j=C(T*.71,T*.025,H);i.triangle(O,N,z,M.clone().lerp(en.ivory,.17),[L*.3,L,L*.75]),i.triangle(O,j,N,M.clone().multiplyScalar(.93),[L*.3,L*.75,L])}}let d=u(.009,1.045,.008),g=.052,y=.865;for(let m=0;m<6;m++){let p=m*hs/6,x=(m+1)*hs/6;i.triangle(d,u(Math.cos(x)*g,y,Math.sin(x)*g),u(Math.cos(p)*g,y,Math.sin(p)*g),r.clone().lerp(en.ivory,.12).multiplyScalar(m%2?1:.9),[1,.7,.7])}}function ky(i,{x:t,y:e,z:n,height:s,color:r,seed:o,hero:a=!1}){let c=Sh(o),l=c()*hs,h=(c()-.5)*.07,u=(d,g,y)=>gf(d+h*g,g,y,s,l,[t,e,n]);yc(i,[0,0,0],[.012,.6,.006],.022,en.woodLight,u);let f=[[-.19,.42,.035,.4,-.18],[.2,.46,-.018,.41,.48],[-.025,.57,-.13,.4,1.55],[.035,.56,.14,.42,-1.02],[.015,.65,.01,.35,.84]];for(let d=0;d<f.length;d++){let[g,y,m,p,x]=f[d],v=p*(.96+c()*.08),_=x+(c()-.5)*.18;yc(i,[.005,.27,0],[g,y+.055,m],.012,en.woodLight.clone().multiplyScalar(d===2?.9:1.02),u);let M=(b,C,A)=>u(g+b*Math.cos(_)+A*Math.sin(_),y+C,m+A*Math.cos(_)-b*Math.sin(_)),w=M(0,0,0),E=a?18:14,T=[];for(let b=0;b<=E;b++){let C=-1.28+b/E*2.56,A=1+.014*Math.cos(b*Math.PI)+.012*Math.sin(b*.83+o),P=v*A,L=(.078*Math.cos(C)-.018)*v/.4;T.push([Math.sin(C)*P,.065+Math.cos(C)*P,L+(b%2?-.012:.015)*v/.4])}let S=r.clone().lerp(en.ivory,d===2?.045:d===3?.12:.025);for(let b=0;b<E;b++){let C=T[b],A=T[b+1],P=M(...C),L=M(...A),O=.65+d*.06;i.triangle(w,L,P,S.clone().multiplyScalar(b%2?.94:1.04),[.32,O,O]);let N=M(C[0],C[1],C[2]-.011),H=M(A[0],A[1],A[2]-.011);i.quad(P,L,H,N,S.clone().lerp(en.ivory,.18),O)}}if(a)for(let d=0;d<3;d++){let g=d*hs/3+l;yc(i,[0,.09,0],[Math.cos(g)*.14,.005,Math.sin(g)*.14],.01,en.woodLight,u)}}var mf=[{x:-11.1,z:-4.7,r:2,fir:.92,p:1},{x:-9.8,z:-1.2,r:1.5,fir:.77,p:0},{x:-4,z:-6,r:1.8,fir:.93,p:3},{x:-1.2,z:-6.1,r:2,fir:.88,p:1},{x:.1,z:-2.6,r:1.5,fir:.67,p:2},{x:2.5,z:-8,r:1.2,fir:.83,p:0},{x:10.6,z:-4.6,r:1.6,fir:.63,p:4},{x:10.6,z:-.9,r:1.6,fir:.56,p:0},{x:10.1,z:4.4,r:1.7,fir:.57,p:1},{x:-6.1,z:1.6,r:1.9,fir:.38,p:0},{x:-10.1,z:5.9,r:1.6,fir:.5,p:4},{x:-3.6,z:3.6,r:1.35,fir:.55,p:2},{x:4.7,z:5.7,r:1.05,fir:.38,p:2},{x:6.7,z:6.4,r:1.55,fir:.65,p:0},{x:-8.1,z:7.7,r:1.45,fir:.47,p:0},{x:-4.7,z:8,r:1.4,fir:.32,p:3},{x:-2.9,z:8.7,r:.7,fir:.25,p:4},{x:6.2,z:8.3,r:1.25,fir:.48,p:1},{x:8.3,z:7.5,r:1.3,fir:.64,p:0},{x:-2.6,z:.5,r:1.1,fir:.68,p:3},{x:3.6,z:-7.8,r:.95,fir:.34,p:3},{x:8.2,z:-7.5,r:1.1,fir:.43,p:4},{x:-11.1,z:2.4,r:1,fir:.58,p:1},{x:-5.9,z:-2.4,r:.9,fir:.75,p:2},{x:2.6,z:.6,r:1.05,fir:.58,p:0}];function _f({groundHeight:i,basins:t,route:e,homes:n,islandPhi:s,count:r=570}){let o=Sh(917326),a=new bh,c=[],l=new Map,h=0,u=0,f=0,d=0,g=0,y=.7,m=(S,b)=>`${Math.floor(S/y)},${Math.floor(b/y)}`,p=e.filter((S,b)=>b%5===0);function x(S,b,C){let A=Math.floor(S/y),P=Math.floor(b/y);for(let L=A-2;L<=A+2;L++)for(let O=P-2;O<=P+2;O++){let N=l.get(`${L},${O}`);if(N){for(let H of N)if(Math.hypot(S-H.x,b-H.z)<C+H.radius)return!0}}return!1}function v(S,b){let C=1/0;for(let A of p)C=Math.min(C,Math.hypot(S-A.x,b-A.z));return C}for(;h<r&&g++<48e3;){let S=mf[Math.floor(o()*mf.length)],b=o()*hs,C=Math.sqrt(o())*S.r,A=S.x+Math.cos(b)*C,P=S.z+Math.sin(b)*C;if(s(A,P)>-.045||P>9.65)continue;let L=i(A,P),O=zy(A,P,t);if(L>7||O>-.19||v(A,P)<.3||n.some(q=>Math.hypot(A-q.x,P-q.z)<q.radius+.1)||A>5.4&&A<9.45&&P>-.05&&P<2.2||A>-3.5&&A<2.8&&P>4.22&&P<5.8||Math.hypot(i(A+.1,P)-i(A-.1,P),i(A,P+.1)-i(A,P-.1))/.2>2.05)continue;let H=A>-9.05&&A<-5.35&&P>.05&&P<1.5;if(H&&o()>.36)continue;let z=!H&&o()<S.fir,j=!H&&o()<.1&&L<4.7&&O<-.48,X=H?.64+o()*.27:(z?1.32+o()*.83:1.13+o()*.67)*(j?1.19:1)*(L>5.3?.78:1),et=(z?.115:.13)*X;if(x(A,P,et))continue;let ct=(z?en.fir[Math.floor(o()*en.fir.length)]:en.autumn[(S.p+(o()<.2?1:0))%en.autumn.length]).clone().lerp(en.ivory,o()*.06),dt={x:A,y:L-.02,z:P,height:X,color:ct,seed:h*19+8721,hero:j};z?(Hy(a,dt),u++):(ky(a,dt),f++),j&&d++;let bt={x:A,z:P,radius:et,height:X,isFir:z},W=m(A,P);l.has(W)||l.set(W,[]),l.get(W).push(bt),c.push([A,P]),h++}let _=a.finish(),M=new we({color:"#ffffff",vertexColors:!0,roughness:1,metalness:0,side:ie});M.name="hand-folded-colour-forest-v4";let w=new jt(_,M);w.name="layered-firs-and-coral-fan-groves",w.castShadow=!0,w.receiveShadow=!0,w.userData={kind:"foliage",staticSculpture:!0};let E=new oe;E.name="jiuzhai-paper-forest-v4",E.add(w);let T={trees:h,firs:u,autumnTrees:f,heroTrees:d,triangles:_.attributes.position.count/3,vertices:_.attributes.position.count};return E.userData.metadata=T,{group:E,trees:h,locations:c,metadata:T}}var Qb=Math.PI*2,Ah=me.clamp,Li=me.lerp,vc=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Th=(i,t,e)=>{let n=Ah((e-i)/(t-i),0,1);return n*n*(3-2*n)};var xf=["#fff3df","#f5ead6","#eadfcb","#fff6e5","#f0e3cf"],wh=new Map,Le=i=>(wh.has(i)||wh.set(i,new Mt(i)),wh.get(i)),Mf=new we({color:"#ffffff",vertexColors:!0,side:ie,roughness:1,metalness:0});Mf.name="folded-alpine-paper-v4";var bf=new He({color:"#ffffff",vertexColors:!0,side:ie});bf.name="warm-ivory-paper-cloud-v4";var Vy=[{id:"western-crown",seed:81,snow:6.25,outline:[[-12.8,-5.5],[-11.3,-8],[-9.6,-9.4],[-8.2,-9.15],[-8.65,-7.9],[-8.55,-6.65],[-8.9,-5.55],[-9.25,-4.1],[-9.8,-2.65],[-11.3,-2.6],[-12.5,-3.8]],ridges:[{w:1.65,p:[[-11.65,-4.7,4.5],[-11.2,-6.3,6.8],[-10.65,-7.55,7.1],[-10,-7.9,8.5],[-9.45,-8.55,6.65],[-8.95,-8.65,7.35]]},{w:.98,p:[[-10,-7.9,8.5],[-9.65,-6.55,6.65],[-10,-5.75,5.8],[-9.55,-4.75,4.6]]},{w:.78,p:[[-11.2,-6.3,6.8],[-12.1,-5.2,4.6],[-11.4,-3.5,3.4]]}]},{id:"northern-snow-ridge",seed:113,snow:6.35,outline:[[-7.6,-9.65],[-5.75,-10.35],[-3.75,-10.5],[-1.45,-10.25],[.35,-9.5],[.95,-8.45],[-.15,-7.4],[-1.6,-6.55],[-3.3,-6.2],[-4.55,-6.6],[-4.55,-8.4],[-5.9,-9.25]],ridges:[{w:1.7,p:[[-6.6,-9.75,5.8],[-5.2,-9.8,7.6],[-4.35,-9.65,6.95],[-3.35,-9.45,8.65],[-2.35,-9.1,6.9],[-1.2,-9.1,7.4],[-.35,-8.8,5.9]]},{w:1.15,p:[[-3.35,-9.45,8.65],[-3.65,-8.65,7.15],[-3.1,-7.8,6.15],[-2.5,-6.8,4.55]]},{w:.85,p:[[-2.35,-9.1,6.9],[-1.25,-7.9,5.8],[.1,-7.7,4]]}]},{id:"inner-folded-spur",seed:29,snow:7.9,outline:[[-4.5,-5.9],[-3.6,-6.75],[-1.8,-6.9],[-.3,-6.1],[.65,-5.25],[1.1,-4.15],[.75,-2.8],[-.05,-1.5],[-1.4,-1.9],[-2.6,-2.8],[-3.85,-3.9]],ridges:[{w:1.3,p:[[-3.15,-5.7,5.95],[-1.9,-5,5.45],[-1.25,-3.5,4.45],[-.55,-2.2,3.3]]},{w:.83,p:[[-3.15,-5.7,5.95],[-2.1,-6.25,5.35],[-.6,-5.5,4.55]]}]},{id:"eastern-alpine-ridge",seed:307,snow:6,outline:[[.55,-8.65],[1.7,-10],[4,-10.45],[6.4,-10],[8.65,-8.8],[9.9,-7.6],[9.2,-6.95],[7.75,-7.78],[6.15,-7.4],[4.3,-7.75],[2.35,-6.95],[1.1,-7.4]],ridges:[{w:1.25,p:[[1.8,-9,5],[3.85,-9.5,6.65],[5.05,-9.25,5.95],[6.3,-9,7.8],[7.1,-8.65,6.9],[7.8,-8.25,6.3],[9,-7.55,4.7]]},{w:.9,p:[[6.3,-9,7.8],[5.7,-8.3,6.1],[4.75,-7.95,4.1]]},{w:.7,p:[[3.85,-9.5,6.5],[2.65,-8.15,5.15],[1.45,-7.65,3.65]]}]},{id:"eastern-shore-folds",seed:401,snow:8.6,outline:[[10.55,-6.4],[11.4,-5.8],[12.4,-4.2],[12.85,-2.3],[12.1,-1.05],[11.25,-.55],[10.95,-1.6],[11.2,-3.5],[10.8,-5.25]],ridges:[{w:.75,p:[[11.35,-5.6,5.75],[11.8,-4.15,5.15],[12,-2.9,4.05],[11.6,-1.3,3.25]]}]}];function tr(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let o=e[s],a=e[r];o[1]>t!=a[1]>t&&i<(a[0]-o[0])*(t-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Sf(i,t,e,n){let s=n[0]-e[0],r=n[1]-e[1],o=Ah(((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1),0,1);return{d:Math.hypot(i-e[0]-o*s,t-e[1]-o*r),t:o}}function Mc(i,t,e){let n=1/0;for(let s=0;s<e.length;s++)n=Math.min(n,Sf(i,t,e[s],e[(s+1)%e.length]).d);return n}function yf(i,t,e){let n=2*(i[0]*(t[1]-e[1])+t[0]*(e[1]-i[1])+e[0]*(i[1]-t[1]));if(Math.abs(n)<1e-10)return{x:0,z:0,r:-1};let s=i[0]*i[0]+i[1]*i[1],r=t[0]*t[0]+t[1]*t[1],o=e[0]*e[0]+e[1]*e[1],a=(s*(t[1]-e[1])+r*(e[1]-i[1])+o*(i[1]-t[1]))/n,c=(s*(e[0]-t[0])+r*(i[0]-e[0])+o*(t[0]-i[0]))/n;return{x:a,z:c,r:(a-i[0])**2+(c-i[1])**2}}function Gy(i){let t=i.slice(),e=t.length,n=1/0,s=1/0,r=-1/0,o=-1/0;for(let u of t)n=Math.min(n,u[0]),r=Math.max(r,u[0]),s=Math.min(s,u[1]),o=Math.max(o,u[1]);let a=Math.max(r-n,o-s)*12,c=(n+r)/2,l=(s+o)/2;t.push([c-a,l-a],[c,l+a],[c+a,l-a]);let h=[{ids:[e,e+1,e+2],circle:yf(t[e],t[e+1],t[e+2])}];for(let u=0;u<e;u++){let f=t[u],d=[],g=new Map;for(let m=0;m<h.length;m++){let p=h[m].circle;p.r>=0&&(f[0]-p.x)**2+(f[1]-p.z)**2<=p.r+1e-8&&d.push(m)}for(let m of d){let p=h[m].ids;for(let x=0;x<3;x++){let v=p[x],_=p[(x+1)%3],M=v<_?`${v}:${_}`:`${_}:${v}`;g.has(M)?g.delete(M):g.set(M,[v,_])}}let y=new Set(d);h=h.filter((m,p)=>!y.has(p));for(let[m,p]of g.values())h.push({ids:[m,p,u],circle:yf(t[m],t[p],f)})}return h.filter(u=>u.ids.every(f=>f<e)).map(u=>u.ids)}function qn(i,t,e,n,s){i.p.push(...t,...e,...n);for(let r=0;r<3;r++)i.c.push(s.r,s.g,s.b)}function bc(i,t,e){let n=new se;n.setAttribute("position",new Vt(i.p,3)),n.setAttribute("color",new Vt(i.c,3)),n.computeVertexNormals(),n.computeBoundingBox(),n.computeBoundingSphere();let s=new jt(n,Mf);return s.name=t,s.castShadow=!0,s.receiveShadow=!0,s.userData.kind="mountain",e.add(s),s}function vf(i,t,e){return new U().subVectors(new U(...t),new U(...i)).cross(new U().subVectors(new U(...e),new U(...i))).normalize()}function Eh(i,t,e,n){let s=n;for(let r of e.ridges)for(let o=0;o<r.p.length-1;o++){let a=r.p[o],c=r.p[o+1],l=Sf(i,t,a,c),h=Li(a[2],c[2],l.t),u=Math.pow(Math.max(0,1-l.d/(r.w*1.62)),1.1);s=Math.max(s,n+(h-n)*u)}return n+(s-n)*Th(0,.72,Mc(i,t,e.outline))}function Wy(i,t,e,n,s,r){let o=i.outline,a=[],c=new Set,l=o.length;function h(_,M,w=!1){let E=`${_.toFixed(4)},${M.toFixed(4)}`;c.has(E)||(c.add(E),a.push([_,M,w]))}o.forEach(_=>h(..._,!0));for(let _=0;_<o.length;_++){let M=o[_],w=o[(_+1)%o.length];Math.hypot(M[0]-w[0],M[1]-w[1])>1.5&&h(Li(M[0],w[0],.47),Li(M[1],w[1],.47),!0)}for(let _ of i.ridges)for(let M=0;M<_.p.length;M++){let w=_.p[M];if(tr(w[0],w[1],o)&&h(w[0],w[1]),M<_.p.length-1){let E=_.p[M+1],T=E[0]-w[0],S=E[1]-w[1],b=Math.hypot(T,S),C=-S/b,A=T/b;for(let P of[.3,.67]){let L=Li(w[0],E[0],P),O=Li(w[1],E[1],P);tr(L,O,o)&&h(L,O);for(let N of[-1,1])for(let H of[.45,.95]){let z=L+C*_.w*H*N,j=O+A*_.w*H*N;tr(z,j,o)&&Mc(z,j,o)>.14&&h(z,j)}}}}let u=Math.min(...o.map(_=>_[0])),f=Math.max(...o.map(_=>_[0])),d=Math.min(...o.map(_=>_[1])),g=Math.max(...o.map(_=>_[1])),y=0;for(let _=d+.5;_<g;_+=.82)for(let M=u+.4;M<f;M+=.85){let w=M+(vc(y,i.seed)-.5)*.48,E=_+(vc(y+971,i.seed)-.5)*.43;y++,tr(w,E,o)&&Mc(w,E,o)>.24&&a.every(T=>Math.hypot(T[0]-w,T[1]-E)>.37)&&h(w,E)}let m=a.map(([_,M,w])=>{let E=t(_,M);return[_,w?E-.018:Math.max(E-.005,Eh(_,M,i,E)),M]}),p=Gy(a),x=new Map,v=0;for(let _ of p){let M=_.map(X=>a[X]),w=[M.reduce((X,et)=>X+et[0],0)/3,M.reduce((X,et)=>X+et[1],0)/3];if(!tr(...w,o)||M.some((X,et)=>{let St=M[(et+1)%3],ct=Li(X[0],St[0],.5),dt=Li(X[1],St[1],.5);return!tr(ct,dt,o)&&Mc(ct,dt,o)>.035}))continue;let E=_.slice(),T=m[E[0]],S=m[E[1]],b=m[E[2]],C=vf(T,S,b);C.y<0&&([E[1],E[2]]=[E[2],E[1]],S=m[E[1]],b=m[E[2]],C=vf(T,S,b));let A=(T[1]+S[1]+b[1])/3,P=Ah(.45-C.x*.32+C.z*.19,0,1),L=Le("#b0b88c").clone(),O=.5+.5*Math.sin(w[0]*.52+w[1]*.24+i.seed*.02);L.lerp(Le("#cdcca1"),Th(.35,.8,P)*.43),L.lerp(Le("#7e9271"),Th(.58,.16,P)*.3),L.lerp(Le("#c9bd92"),O*.15),L.multiplyScalar(.99+vc(v,i.seed)*.02),i.id==="inner-folded-spur"&&L.lerp(Le("#c8c79b"),.1),Math.sin(w[0]*.67-w[1]*.35+i.seed*.075)>.91&&A<5.9&&L.lerp(Le("#d3b49c"),.3),qn(e,T,S,b,L),r.push({a:T,b:S,c:b,minX:Math.min(T[0],S[0],b[0]),maxX:Math.max(T[0],S[0],b[0]),minZ:Math.min(T[2],S[2],b[2]),maxZ:Math.max(T[2],S[2],b[2])}),v++;for(let X=0;X<3;X++){let et=E[X],St=E[(X+1)%3],ct=et<St?`${et}:${St}`:`${St}:${et}`;x.has(ct)?x.get(ct).push(C):x.set(ct,[C])}let H=i.ridges.flatMap(X=>X.p).reduce((X,et)=>et[2]>X[2]?et:X),z=X=>{let et=Math.atan2(X[2]-H[1],X[0]-H[0]),St=Math.pow(Math.max(0,Math.cos(et*5+i.seed*.13)),8);return i.snow+.25*Math.sin(X[0]*2.7+X[2]*1.2)+.12*Math.sin(X[0]*4.1-X[2]*2.9)-St*.85},j=[];for(let X=0;X<3;X++){let et=[T,S,b][X],St=[T,S,b][(X+1)%3],ct=et[1]-z(et),dt=St[1]-z(St);if(ct>=0&&j.push(et),ct>=0!=dt>=0){let bt=ct/(ct-dt);j.push(et.map((W,q)=>Li(W,St[q],bt)))}}if(j.length>=3){let X=ct=>ct.map((dt,bt)=>dt+C.getComponent(bt)*.028),et=j.map(X),St=Le(xf[Math.floor(vc(v,i.seed+55)*xf.length)]).clone();St.lerp(Le("#e9e6ce"),(1-P)*.16);for(let ct=1;ct<et.length-1;ct++)qn(n,et[0],et[ct],et[ct+1],St);for(let ct=0;ct<et.length;ct++){let dt=(ct+1)%et.length;qn(n,et[ct],j[ct],j[dt],Le("#d4c6ae")),qn(n,et[ct],j[dt],et[dt],Le("#e4d8bf"))}}}for(let _ of i.ridges)for(let M=0;M<_.p.length-1;M++){let w=_.p[M],E=_.p[M+1];if(Math.max(w[2],E[2])>i.snow-.2)continue;let T=E[0]-w[0],S=E[1]-w[1],b=Math.hypot(T,S),C=-S/b*.018,A=T/b*.018,P=Eh(w[0],w[1],i,t(w[0],w[1]))+.028,L=Eh(E[0],E[1],i,t(E[0],E[1]))+.028;qn(s,[w[0]-C,P,w[1]-A],[E[0]-C,L,E[1]-A],[E[0]+C,L+.018,E[1]+A],Le("#d9d5ae")),qn(s,[w[0]-C,P,w[1]-A],[E[0]+C,L+.018,E[1]+A],[w[0]+C,P+.018,w[1]+A],Le("#d9d5ae"))}return{id:i.id,vertices:m.length,faces:v}}function Xy(i,t,e){let n=e.a,s=e.b,r=e.c,o=(s[2]-r[2])*(n[0]-r[0])+(r[0]-s[0])*(n[2]-r[2]);if(Math.abs(o)<1e-9)return-1/0;let a=((s[2]-r[2])*(i-r[0])+(r[0]-s[0])*(t-r[2]))/o,c=((r[2]-n[2])*(i-r[0])+(n[0]-r[0])*(t-r[2]))/o,l=1-a-c;return a>=-1e-6&&c>=-1e-6&&l>=-1e-6?a*n[1]+c*s[1]+l*r[1]:-1/0}function qy(){let i=new yn;return i.moveTo(-1.7,0),i.bezierCurveTo(-1.64,.18,-1.48,.28,-1.22,.27),i.bezierCurveTo(-1.18,.48,-.92,.59,-.68,.48),i.bezierCurveTo(-.48,.78,-.13,.81,.13,.59),i.bezierCurveTo(.36,.77,.68,.64,.75,.43),i.bezierCurveTo(.99,.52,1.24,.38,1.25,.22),i.bezierCurveTo(1.52,.24,1.73,.11,1.67,-.025),i.bezierCurveTo(1.36,-.15,1.08,-.14,.8,-.1),i.bezierCurveTo(.56,-.22,.22,-.21,-.02,-.13),i.bezierCurveTo(-.34,-.2,-.58,-.12,-.84,-.1),i.bezierCurveTo(-1.14,-.18,-1.5,-.12,-1.7,0),i.closePath(),i.getPoints(5).slice(0,-1)}function Yy(i){let t=new oe;t.name=`layered-paper-cloud-${i}`,t.userData.kind="cloud";let e=qy();for(let n=0;n<4;n++){let s={p:[],c:[]},r=1-n*.145,o=.045+n*.085,a=n*.055,c=n%2?.08:-.06,l=e.map((d,g)=>[d.x*r+c,d.y*r+o,a+.014*Math.sin(g*.88+i)]),h=[c,.2+n*.08,a+.105],u=[c,.2+n*.08,a-.022];for(let d=0;d<l.length;d++){let g=l[d],y=l[(d+1)%l.length],m=[g[0],g[1],g[2]-.025],p=[y[0],y[1],y[2]-.025],x=Le(n%2?"#fff2de":"#f7e6cd").clone().lerp(Le("#eed3ae"),.06+.035*Math.sin(d*.54));qn(s,h,g,y,x),qn(s,u,p,m,Le("#edddc3")),qn(s,g,m,p,Le("#d8bd97")),qn(s,g,p,y,Le("#e4c9a5"))}let f=bc(s,`cloud-${i}-paper-layer-${n}`,t);f.userData.kind="cloud",f.material=bf,f.castShadow=!1,f.receiveShadow=!1,f.userData.bakeSkip=!0}return t}function wf({groundHeight:i}){let t=new oe;t.name="hand-folded-alpine-ridges-and-clouds";let e={p:[],c:[]},n={p:[],c:[]},s={p:[],c:[]},r=[],o=Vy.map(d=>Wy(d,i,e,n,s,r)),a=[bc(e,"five-connected-alpine-paper-massifs",t),bc(n,"separate-ivory-snow-papers",t),bc(s,"warm-mountain-fold-edges",t)],c=[{position:[-6.25,10.15,-10.2],scale:.66,rotation:-.18,seed:1},{position:[1.35,8.6,-9.2],scale:.8,rotation:.12,seed:2},{position:[10.85,7.25,-5.7],scale:.54,rotation:.24,seed:3}].map(({position:d,scale:g,rotation:y,seed:m})=>{let p=Yy(m);return p.position.set(...d),p.scale.setScalar(g),p.scale.y*=1.36,p.rotation.y=y,t.add(p),p}),l=new Map,h=.9;for(let d of r)for(let g=Math.floor(d.minZ/h);g<=Math.floor(d.maxZ/h);g++)for(let y=Math.floor(d.minX/h);y<=Math.floor(d.maxX/h);y++){let m=`${y},${g}`;l.has(m)||l.set(m,[]),l.get(m).push(d)}let u=(d,g)=>{let y=-1/0,m=l.get(`${Math.floor(d/h)},${Math.floor(g/h)}`)||[];for(let p of m)d<p.minX||d>p.maxX||g<p.minZ||g>p.maxZ||(y=Math.max(y,Xy(d,g,p)));return y},f=0;return t.traverse(d=>{d.isMesh&&(f+=d.geometry.attributes.position.count/3)}),{group:t,clouds:c,mountainMeshes:a,surfaceHeight:u,metadata:{massifs:o,clouds:c.length,triangles:f}}}var Ph=Math.PI*2,On={land:"#d9d5a9",moss:"#b6be8b",chalk:"#f1dfbd",paper:"#fff0d6",blush:"#eeb39f",cut:"#d2b58b",wood:"#c9a475",woodDark:"#947355",sage:"#8b9e72",sageLight:"#b0bd8c",pine:"#526f59",coral:"#ed9f8e",peach:"#f5bd91",honey:"#e7bb6e",gold:"#f5d492",snow:"#fff3df",aqua:"#7abfad",jade:"#289f9f",blue:"#268594",deep:"#285e73"},Ui=Object.fromEntries(Object.entries(On).map(([i,t])=>[i,new Mt(t)])),Zy=new U(0,1,0),Rf=[{name:"pearl",x:7.45,z:.57,width:3.12,top:3.4,bottom:1.78,depth:1.02,seed:8,curve:.07},{name:"nuorilang",x:-.35,z:4.54,width:5.15,top:1.78,bottom:.26,depth:.72,seed:19,curve:.08},{name:"shuzheng-one",x:1,z:6.94,width:2.1,top:.26,bottom:.08,depth:.23,seed:20,curve:.025},{name:"shuzheng-two",x:2.25,z:8.54,width:2.4,top:.08,bottom:-.08,depth:.23,seed:22,curve:.025}],Ec=me.clamp,$e=me.lerp,Bn=(i,t,e)=>{let n=Ec((e-i)/(t-i),0,1);return n*n*(3-2*n)},er=(i,t=0)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)};function $y(i=1){let t=i>>>0;return()=>(t=1664525*t+1013904223>>>0,t/4294967296)}function Dh(i,t){let e=Math.floor(i),n=Math.floor(t),s=Bn(0,1,i-e),r=Bn(0,1,t-n);return $e($e(er(e,n),er(e+1,n),s),$e(er(e,n+1),er(e+1,n+1),s),r)*2-1}function Jy(i,t=120){return new oi(i.map(([n,s])=>new U(n,0,s)),!0,"centripetal").getPoints(t).slice(0,-1).map(n=>[n.x,n.z])}function Ky(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-n[1]*s[0]}return t/2}function Cf(i,t,e,n){let s=n[0]-e[0],r=n[1]-e[1],o=Ec(((i-e[0])*s+(t-e[1])*r)/(s*s+r*r||1),0,1);return{d:Math.hypot(i-e[0]-o*s,t-e[1]-o*r),t:o,x:e[0]+o*s,z:e[1]+o*r}}function If(i,t,e){let n=!1,s=1/0;for(let r=0,o=e.length-1;r<e.length;o=r++){let a=e[r],c=e[o];a[1]>t!=c[1]>t&&i<(c[0]-a[0])*(t-a[1])/(c[1]-a[1])+a[0]&&(n=!n),s=Math.min(s,Cf(i,t,a,c).d)}return n?s:-s}function Pf(i,t){let e=new se;return e.setAttribute("position",new Vt(i,3)),t?.length&&e.setAttribute("color",new Vt(t,3)),e.computeVertexNormals(),e}function oo(i,t,e,n,s,r){i.push(...e,...n,...s);for(let o=0;o<3;o++)t.push(r.r,r.g,r.b)}function fi(i,t,e,n){let s=new jt(i,t);return s.castShadow=!0,s.receiveShadow=!0,n&&(s.name=n),e&&e.add(s),s}function Lh(i,t={}){return new we({color:i,roughness:1,metalness:0,...t})}var us=Lh("#ffffff",{vertexColors:!0,side:ie});us.name="paper-v2-vertex-colour";var jy=Lh("#ffffff",{vertexColors:!0,roughness:.83,side:ie});jy.name="mineral-water-v2";var Rh=new Map;function Tc(i){let t=typeof i=="string"?i:i.getHexString();return Rh.has(t)||Rh.set(t,Lh(i)),Rh.get(t)}var Qy=new Qe(1,1,1),tv=new ri(.7,1,1,5,1);function Sc(i,t,e,n,s=0){let r=fi(Qy,Tc(n),i);return r.position.set(...e),r.scale.set(...t),r.rotation.y=s,r}function ev(i,t,e,n,s=On.woodDark){let r=new U(...t),o=new U(...e),a=o.clone().sub(r),c=fi(tv,Tc(s),i);return c.position.copy(r.add(o).multiplyScalar(.5)),c.scale.set(n,a.length(),n),c.quaternion.setFromUnitVectors(Zy,a.normalize()),c}function nv(){return[{id:"wuhua",y:3.4,depth:.76,lip:.07,color:"jade",points:[[1.25,-4.8],[2.2,-6.4],[4.3,-7.45],[6.2,-7.1],[7.8,-7.5],[9.6,-6.5],[10.4,-5.1],[10.8,-3.5],[10.1,-2.4],[10.5,-1.3],[9.2,-.2],[8.7,.58],[7.5,.64],[6.15,.6],[5.7,-.05],[4.8,-.9],[3.15,-.8],[2.2,-2.2],[1.5,-2.9]]},{id:"changhai",y:3.95,depth:.72,lip:.055,color:"deep",points:[[-7.6,-9],[-6.15,-9.1],[-4.8,-8.1],[-4.7,-6.8],[-5.55,-5.3],[-5.6,-4.15],[-6.6,-3.15],[-7.95,-3.2],[-8.5,-4.3],[-7.8,-5.5],[-8.35,-6.65],[-8.65,-7.9]]},{id:"wucai",y:2.35,depth:.47,lip:.055,color:"blue",points:[[-8.8,-1.2],[-8.15,-1.95],[-6.75,-1.85],[-5.8,-1.1],[-5.9,-.2],[-6.7,.45],[-7.9,.6],[-8.65,-.1]]},{id:"mirror",y:1.78,depth:.5,lip:.055,color:"aqua",points:[[3.5,2.55],[4.1,1.95],[5.7,1.7],[7.35,1.85],[8.5,2.45],[8.7,3.5],[7.7,4.2],[6.15,4.5],[4.8,4.1],[4.15,3.5]]},{id:"nuorilang-head",y:1.78,depth:.23,lip:.05,color:"jade",points:[[-3.4,3.7],[-2.45,3.05],[-.6,3],[1.15,3.3],[2.6,3.1],[4.2,2.7],[4.7,3.4],[3.1,4.1],[1.7,4.55],[-.1,4.65],[-1.7,4.55],[-3.15,4.25]]},{id:"shuzheng-upper",y:.26,depth:.22,lip:.055,color:"jade",points:[[-3.1,5.8],[-1.9,5.05],[-.65,5.2],[.65,5.14],[1.8,5.18],[2.65,5.05],[3.8,5.65],[3.75,6.25],[2.9,6.72],[1.65,6.96],[-.1,6.96],[-1.45,6.66],[-2.6,6.82],[-3.25,6.3]]},{id:"shuzheng-middle",y:.08,depth:.16,lip:.055,color:"aqua",points:[[-2.2,7.55],[-1.2,7.2],[.1,7.2],[1.6,7.19],[2.8,7.12],[3.8,7.3],[4.65,7.8],[4.4,8.35],[3.3,8.55],[1.6,8.59],[.2,8.33],[-1.4,8.4],[-2.35,8.08]]},{id:"shuzheng-lower",y:-.08,depth:.12,lip:.055,color:"blue",points:[[-.9,8.85],[.5,8.74],[2.4,8.8],[4.1,8.75],[5.1,9],[5.2,9.5],[3.75,10.15],[1.9,10.35],[.5,10],[-.9,9.6],[-1.8,9.15]]}].map(t=>{let e=Jy(t.points,t.id==="wuhua"?144:96);return{...t,poly:e,area:Math.abs(Ky(e)),bounds:{x0:Math.min(...e.map(n=>n[0])),x1:Math.max(...e.map(n=>n[0])),z0:Math.min(...e.map(n=>n[1])),z1:Math.max(...e.map(n=>n[1]))}}})}var iv=[{width:2.65,points:[[-12,-5.4,2.2],[-10.7,-7.8,4.4],[-9.15,-9.25,6],[-6.9,-10.2,3.6],[-4,-10.4,5.35],[-1.6,-9.9,5.6],[.7,-9.5,3.5],[3.2,-10.1,3.7],[6,-9.6,2.6],[8.7,-8.65,3.9],[11.45,-6.9,2.15]]},{width:1.55,points:[[-11.5,-7.2,3.3],[-10.5,-4.5,3.15],[-10.65,-1.75,1.45],[-11.4,.5,.55]]},{width:1.7,points:[[-3.6,-9.1,4.5],[-3.3,-6.7,3.35],[-2.45,-4.4,2.6],[-1.6,-2.15,1.05]]},{width:1.2,points:[[10.6,-6.8,2.3],[11.5,-4.8,1.7],[12.2,-2.9,.9],[11.8,-.5,.35]]}];function sv(i,t,e){let n=1/0,s=0;for(let o=0;o<e.points.length-1;o++){let a=e.points[o],c=e.points[o+1],l=Cf(i,t,a,c);l.d<n&&(n=l.d,s=$e(a[2],c[2],l.t))}let r=1+.12*Math.sin(i*2.5+t*1.8)+.065*Math.sin(i*4.1-t*2.2);return s*Math.exp(-Math.pow(n/(e.width*r),1.23))}function Ef(i,t){let e=.16+(10.2-t)*.133;e+=.47*Math.exp(-((i+7.2)**2/17+(t-2.8)**2/17)),e+=1.15*Math.exp(-((i-6.2)**2/36+(t+3.1)**2/36));let n=iv.map(s=>sv(i,t,s)).sort((s,r)=>r-s);return e+=n[0]*.22+n[1]*.045,e+=.16*Dh(i*.58,t*.58)+.09*Dh(i*1.7,t*1.7),e-=.35*Bn(5,10.8,t),e}var Ch=new Map;function rv(i,t){let n=Math.cos(.31),s=Math.sin(.31),r=(i*n+t*s)/1.08,o=(-i*s+t*n)/1.08,a=Math.floor(r),c=Math.floor(o),l=r-a,h=o-c;function u(x,v){let _=`${x},${v}`;if(!Ch.has(_)){let M=(x*n-v*s)*1.08,w=(x*s+v*n)*1.08;Ch.set(_,Ef(M,w))}return Ch.get(_)}let f=u(a,c),d=u(a+1,c),g=u(a+1,c+1),y=u(a,c+1),m;(a+c)%2===0?m=l>h?f+(d-f)*l+(g-d)*h:f+(g-y)*l+(y-f)*h:m=l+h<1?f+(d-f)*l+(y-f)*h:g+(y-g)*(1-l)+(d-g)*(1-h);let p=Ef(i,t);return $e(p,m,Bn(2.5,4.6,p))}function nr(i,t){let e=Math.atan2(t/11.3,i/14.15),n=1+.021*Math.sin(e*5+.7)+.012*Math.sin(e*9-1.4)+.007*Math.sin(e*17);return Math.hypot(i/14.15,t/11.3)-n}function ov(i,t){return(e,n)=>{let s=rv(e,n),r=null,o=-1/0;for(let a of i){let c=a.bounds,l=2.1;if(e<c.x0-l||e>c.x1+l||n<c.z0-l||n>c.z1+l)continue;let h=If(e,n,a.poly);h>o&&(r=a,o=h)}if(r){if(o>=0)s=r.y-.012-r.depth*Bn(.16,1.35,o);else if(o>-1.85){let a=-o,c=r.y+.016+a*.105;s=$e(s,c,1-Bn(.16,1.85,a))}}for(let a of t){let c=Math.abs(e-a.x),l=a.width*.5+.08;if(c>l+.2)continue;let h=Mh(a,e,n),u=1-Bn(l,l+.2,c);s=$e(s,Math.min(s,h),u)}return s}}function av(i,t,e){let n=[],s=[],r=[],o=new Map,a=.25,c=[[-10,-4,3],[-4,-5,3],[.4,-7,2.6],[11,-2,2.4],[9,5,2.6],[-8,3,3],[-4,1,2.3]];function l(p,x){let v=`${p.toFixed(5)},${x.toFixed(5)}`;if(o.has(v))return o.get(v);let _=t(p,x),M=.06,w=(t(p+M,x)-t(p-M,x))/(2*M),E=(t(p,x+M)-t(p,x-M))/(2*M),T=Math.hypot(w,E),S=Dh(p*.9,x*.9),b=Ui.land.clone().lerp(Ui.moss,.28+.16*S),C=0;for(let[P,L,O]of c)C=Math.max(C,Math.exp(-((p-P)**2+(x-L)**2)/(O*O)));b.lerp(Ui.sageLight,C*.22),b.lerp(new Mt("#95a67e"),Bn(.7,2.4,T)*.35),b.lerp(new Mt("#b8bd94"),Bn(2.7,5.8,_)*.25);for(let P of Rf){let L=Math.abs(p-P.x),O=x-P.z;if(L<P.width*.5+.85&&O>-.2&&O<P.depth+1.2){let N=1-Bn(P.width*.5+.25,P.width*.5+.85,L);b.lerp(new Mt("#ead7bb"),N*Bn(.45,1.6,T)*.74)}}b.multiplyScalar(.975+.05*er(Math.floor(p*10),Math.floor(x*10)));let A=n.length/3;return n.push(p,_,x),s.push(b.r,b.g,b.b),o.set(v,A),A}function h(p){let x=[];for(let _=0;_<3;_++){let M=p[_],w=p[(_+1)%3],E=nr(...M),T=nr(...w);if(E<=0&&x.push(M),E<0!=T<0){let S=0,b=1;for(let A=0;A<14;A++){let P=(S+b)/2;nr($e(M[0],w[0],P),$e(M[1],w[1],P))<0==E<0?S=P:b=P}let C=(S+b)/2;x.push([$e(M[0],w[0],C),$e(M[1],w[1],C)])}}if(x.length<3)return;let v=x.map(_=>l(..._));for(let _=1;_<v.length-1;_++)r.push(v[0],v[_+1],v[_])}for(let p=-11.75;p<11.75;p+=a)for(let x=-14.75;x<14.75;x+=a){let v=[x,p],_=[x+a,p],M=[x+a,p+a],w=[x,p+a];(Math.floor(x/a)+Math.floor(p/a))%2?(h([v,_,w]),h([_,M,w])):(h([v,_,M]),h([v,M,w]))}let u=new se;u.setAttribute("position",new Vt(n,3)),u.setAttribute("color",new Vt(s,3)),u.setIndex(r),u.computeVertexNormals();let f=u.toNonIndexed();u.dispose();let d=fi(f,us,i,"one-continuous-folded-valley");d.userData.kind="terrain";let g=[];for(let p=0;p<360;p++){let x=p/360*Ph,v=1+.021*Math.sin(x*5+.7)+.012*Math.sin(x*9-1.4)+.007*Math.sin(x*17);g.push([Math.cos(x)*14.15*v,Math.sin(x)*11.3*v])}let y=[],m=[];for(let p=0;p<g.length;p++){let x=g[p],v=g[(p+1)%g.length],_=t(...x),M=t(...v),w=[0,.045,-.018,.033,-.025,-.085],E=["#efdfb9","#edb6a4","#f8dec0","#e8ae9c","#f2d5b1"];for(let T=0;T<5;T++){let S=(ct,dt)=>Math.sin(ct*.13+T*.8)*.035*Math.sin(Math.PI*dt),b=T/5,C=(T+1)/5,A=$e(_,-1.04,b)+S(p,b),P=$e(M,-1.04,b)+S(p+1,b),L=$e(_,-1.04,C)+S(p,C),O=$e(M,-1.04,C)+S(p+1,C),N=w[T],H=w[T+1],z=[x[0]*(1+N/14),x[1]*(1+N/11)],j=[v[0]*(1+N/14),v[1]*(1+N/11)],X=[x[0]*(1+H/14),x[1]*(1+H/11)],et=[v[0]*(1+H/14),v[1]*(1+H/11)],St=new Mt(E[T]).multiplyScalar(.97+.035*er(Math.floor(p/3),T));oo(y,m,[z[0],A,z[1]],[j[0],P,j[1]],[et[0],O,et[1]],St),oo(y,m,[z[0],A,z[1]],[et[0],O,et[1]],[X[0],L,X[1]],St)}}return fi(Pf(y,m),us,i,"five-scalloped-paper-strata"),{vertices:f.attributes.position.count,triangles:r.length/3}}var cv=new Map;function lv(i,t){let e=[[-8,6.4],[-6.4,7.2],[-4.4,6.8],[-4.5,4.7],[-4.25,2.8],[-2,2.35],[.8,2.25],[3.4,1.35],[3,3.25],[4,4.8],[6.7,5.15],[9.2,4.5],[10,2.7],[10.8,0],[11.4,-2.5],[11.1,-4.8],[9.8,-6.85],[8.2,-7.78],[6.1,-7.5],[4.2,-7.78],[2.2,-6.8],[.5,-4.95],[.5,-2.25],[-2.6,-.4],[-5.2,.1],[-6.4,1.1],[-8.7,1.25],[-9.55,-1.3],[-9.15,-2.65],[-8.9,-3.6],[-8.85,-4.65],[-8.7,-5.6]];return{route:new oi(e.map(([r,o])=>new U(r,0,o)),!1,"centripetal").getSpacedPoints(960).map(r=>{let o=wc(r.x,r.z,t),a=i(r.x,r.z)+.085,c=o.d>-.06?Math.max(a,o.body.y+.135):a;return new U(r.x,c,r.z)}),plan:e}}function Tf(i,t,e){let n=1/0;for(let s=0;s<e.length;s+=5){let r=e[s];n=Math.min(n,Math.hypot(i-r.x,t-r.z))}return n}function Af(i,t,e){let n=new oe,s=[],r=[];i.add(n),n.name="one-continuous-shore-walk";let o=2;for(let a=0;a<t.length-1;a+=o){let c=t[a],l=t[Math.min(a+o,t.length-1)],h=l.clone().sub(c),u=Math.hypot(h.x,h.z),f=c.clone().add(l).multiplyScalar(.5),d=Math.atan2(h.x,h.z),g=Math.cos(d),y=-Math.sin(d),m=a<250?.41:.3;if(Sc(n,[m,.037,u*.94],[f.x,Math.max(c.y,l.y),f.z],a%6===0?"#cfb58a":On.wood,d),(a<220||a>300&&a<410||a>660&&a<810)&&a%6===0)for(let x of[-1,1]){let v=f.x+g*m*.46*x,_=f.z+y*m*.46*x,M=e(v,_),w=f.y+.29;Sc(n,[.024,w-M+.06,.024],[v,(w+M-.06)/2,_],On.woodDark)}if(s.push(new U(f.x+g*m*.46,f.y+.25,f.z+y*m*.46)),r.push(new U(f.x-g*m*.46,f.y+.25,f.z-y*m*.46)),a%8===0)for(let x of[-1,1]){let v=f.x+g*m*.35*x,_=f.z+y*m*.35*x,M=e(v,_);f.y-M>.045&&ev(n,[v,M-.04,_],[v,f.y-.025,_],.022,On.woodDark)}}for(let[a,c]of[[0,109],[151,205],[331,405]])for(let l of[s,r]){let h=l.slice(a,c+1);if(h.length<2)continue;let u=new oi(h);fi(new ts(u,h.length*2,.014,4,!1),Tc(On.wood),n)}return n}function wc(i,t,e){let n=-1/0,s=null;for(let r of e){let o=r.bounds;if(i<o.x0-1.5||i>o.x1+1.5||t<o.z0-1.5||t>o.z1+1.5)continue;let a=If(i,t,r.poly);a>n&&(n=a,s=r)}return{d:n,body:s}}function hv(i,t){let e=[[-8.25,5.5,1.05,-.16],[-6.55,5.85,.82,.1],[-7.65,3.7,.82,-.2],[-9.65,4.15,.67,.12]],n=[];for(let s=0;s<e.length;s++){let[r,o,a,c]=e[s],l=t(r,o),h=jd({scale:a,seed:20+s});h.position.set(r,l+.035,o),h.rotation.y=c,i.add(h),n.push({x:r,z:o,radius:a*.87});for(let f=0;f<3;f++)Sc(i,[a*.7,.045,a*.19],[r,l+.02-f*.032,o+a*.48+f*.15],f%2?On.cut:On.chalk,c);let u=Qd({length:a*1.4});u.position.set(r-.68*a,l,o-.6*a),u.scale.setScalar(.7),i.add(u);for(let f=0;f<4;f++)Sc(i,[.12,.065,.15],[r+a*.27+f%2*.11,l+a*1.09+Math.floor(f/2)*.065,o-.15],On.woodDark,c)}return n}function uv(i,t,e,n,s,r,o){let a=(g,y)=>o.some(m=>Math.abs(g-m.x)<m.width*.5+.24&&Number.isFinite(Mh(m,g,y))),c=$y(47019),l=[],h=[],u=new Gr(1,0),f=0,d=0;for(let g=0;g<1400;g++){let y=r[Math.floor(c()*r.length)],m=c()*Ph,p=.16+c()*.54,x=y[0]+Math.cos(m)*p,v=y[1]+Math.sin(m)*p;if(nr(x,v)>-.035||wc(x,v,e).d>-.12||a(x,v)||Tf(x,v,n)<.23||s.some(E=>Math.hypot(x-E.x,v-E.z)<E.radius))continue;let _=t(x,v);if(_>6.2)continue;let M=[Ui.moss,Ui.sageLight,Ui.honey,Ui.peach][Math.floor(c()*4)].clone(),w=.06+c()*.12;for(let E=0;E<3;E++){let T=m+E*1.1,S=Math.cos(T)*w,b=Math.sin(T)*w,C=w*(.65+c()*.7),A=[x,_+.012,v],P=[x+S,_+.035,v+b],L=[x+S*.35,_+C,v+b*.35],O=[x-b*.25,_+.025,v+S*.25];oo(l,h,A,P,L,M),oo(l,h,A,L,O,M.clone().multiplyScalar(.9))}if(f++,g%13===0){let E=fi(u,Tc(g%2?On.cut:On.chalk),i);E.position.set(x,_+.035,v),E.scale.set(.11+c()*.15,.055+c()*.11,.09+c()*.15),E.rotation.set(c(),c(),c()),d++}}for(let g=0;g<1200;g++){let y=(c()-.5)*27,m=(c()-.5)*21;if(nr(y,m)>-.08||wc(y,m,e).d>-.15||a(y,m)||Tf(y,m,n)<.23)continue;let p=t(y,m);if(p>5.3)continue;let x=.035+c()*.065,v=.014,_=c()*Ph,M=Math.cos(_)*v,w=Math.sin(_)*v,E=Ui.sageLight.clone().multiplyScalar(.9+c()*.2);oo(l,h,[y-M,p+.008,m-w],[y+M,p+.008,m+w],[y+.025,p+x,m+.01],E)}return fi(Pf(l,h),us,i,"small-paper-undergrowth"),{shrubs:f,stones:d}}function Ih(i,t){i.updateMatrixWorld(!0);let e=[];i.traverse(r=>{if(!r.isMesh)return;let o=r.geometry,a=o.index?o.toNonIndexed():o.clone(),c=a.attributes.position,l=a.attributes.normal,h=a.attributes.color,u=Array.isArray(r.material)?a.groups:[{start:0,count:c.count,materialIndex:0}];for(let f of u){let d=Array.isArray(r.material)?r.material[f.materialIndex]:r.material;if(!d)continue;let g=f.start,y=Math.min(g+f.count,c.count),m=new se,p=[],x=[],v=[],_=[],M=r.parent,w=!1;for(;M&&M!==i;)M.userData.propKind==="fir"&&(w=!0),M=M.parent;let E=[...cv.values()].includes(o),T=E||w&&Array.isArray(r.material);for(let S=g;S<y;S++){p.push(c.getX(S),c.getY(S),c.getZ(S)),l&&x.push(l.getX(S),l.getY(S),l.getZ(S));let b=d.color||new Mt("#fff");v.push(b.r*(h?h.getX(S):1),b.g*(h?h.getY(S):1),b.b*(h?h.getZ(S):1)),_.push(T?Math.pow(Ec(c.getY(S),0,1),1.35)*(E?.8:1):0)}m.setAttribute("position",new Vt(p,3)),m.setAttribute("color",new Vt(v,3)),m.setAttribute("windWeight",new Vt(_,1)),x.length?m.setAttribute("normal",new Vt(x,3)):m.computeVertexNormals(),m.applyMatrix4(r.matrixWorld),e.push(m)}a.dispose()});let n=$d(e,!1);e.forEach(r=>r.dispose());let s=fi(n,us,null,t);return s.userData.staticSculpture=!0,s}function Df(){let i=new oe;i.name="jiuzhai-paper-colour-miniature";let t=nv(),e=Rf.map(A=>af(A,t)),n=ov(t,e),s=new oe,r=av(s,n,t);i.add(s);let o=wf({groundHeight:n});i.add(o.group);let a=(A,P)=>Math.max(n(A,P),o.surfaceHeight(A,P)),c=new oe,l=new oe,h=[];i.add(c);for(let A of t){let{lake:P,rim:L}=cf(A,c,a);h.push(P),fi(L,us,l)}i.add(Ih(l,"layered-mineral-shores-and-submerged-timber"));let u=e.map(A=>ff(i,A));h.push(...u.map(A=>A.mesh));let{route:f,plan:d}=lv(a,t),g=new oe,y=hv(g,a);Af(g,f,a);let p=new oi([[-5.8,7.6],[-4.15,7.9],[-3,8.6],[-1.5,9.65],[.3,10.4],[2.6,10.75],[4.5,10.35]].map(([A,P])=>new U(A,0,P))).getSpacedPoints(260).map(A=>{let P=wc(A.x,A.z,t);return A.y=Math.max(a(A.x,A.z)+.09,P.d>-.1?P.body.y+.15:-1/0),A});Af(g,p,a),i.add(Ih(g,"village-and-shore-boardwalks"));let x=_f({groundHeight:a,basins:t,route:[...f,...p],homes:y,islandPhi:nr});i.add(x.group);let v=new oe,_=uv(v,a,t,[...f,...p],y,x.locations,e),M=Ih(v,"paper-meadow-and-understory");M.userData.kind="foliage",M.material=us.clone(),i.add(M);let w={changhai:new U(-6.75,3.97,-6),wucai:new U(-7.3,2.37,-.7),wuhua:new U(6.1,3.43,-3.5),pearl:new U(7.45,2.65,1),mirror:new U(6.25,1.8,3.1),nuorilang:new U(-.35,1.07,4.98),shuzheng:new U(1.2,.22,7.8)},E={};for(let[A,P]of Object.entries(w)){let L=1/0,O=0;for(let N=0;N<f.length;N++){let H=f[N],z=Math.hypot(H.x-P.x,H.z-P.z);z<L&&(L=z,O=N)}E[A]=O/(f.length-1)}E.shuzheng=.035;let T=[...Object.entries(w).map(([A,P])=>({id:A,kind:A==="pearl"||A==="nuorilang"?"falls":"water",center:P.clone(),radius:A==="wuhua"?4.2:A==="changhai"?2.2:1.6})),{id:"autumn-woods",kind:"forest",center:new U(10.1,a(10.1,4.6)+.8,4.6),radius:2.1},{id:"village-grove",kind:"forest",center:new U(-8.5,a(-8.5,2.2)+.8,2.2),radius:2.2}];i.traverse(A=>{let P=A.geometry?.attributes.color;if(P)for(let L=0;L<P.array.length;L++)P.array[L]=Ec(P.array[L],0,1)});let S=0,b=0;i.traverse(A=>{A.isMesh&&(S+=(A.geometry.index?A.geometry.index.count:A.geometry.attributes.position.count)/3,b++)});let C={title:"\u4E5D\u5BE8 \xB7 \u6C34\u884C\u8BB0",version:"4-water-light",baseRevision:4,trees:x.trees,forest:x.metadata,mountains:o.metadata,shrubs:_.shrubs,stones:_.stones,triangles:S,meshCount:b,terrain:r,basinAreas:Object.fromEntries(t.map(A=>[A.id,+A.area.toFixed(2)])),routePlan:d,hero:{direction:[7,27,37],target:[0,2.8,-.15],fov:38},bounds:{width:28.5,depth:23,height:10.8},design:"Revision 4 dense paper groves, authored mountain ridges and free orbit, with retained thin waterfalls, open-sky lighting and surface-bound water interactions."};return{group:i,anchors:w,route:f,stopProgress:E,waterMeshes:h,interactionZones:T,groundHeight:a,metadata:C,clouds:o.clouds,update(){}}}var Lf=2,ao=48,Uh=16,dv="JZLIGHT2",fv=1e-4,pv=1/fv,Ff=new Float32Array(1),mv=new Uint32Array(Ff.buffer),Uf=new WeakMap;function Ve(i,t){return Math.imul((i^t)>>>0,16777619)>>>0}function gv(i){return Ff[0]=i===0?0:i,mv[0]}function ir(i){if(!Number.isFinite(i))throw new Error("Paper lighting geometry contains a nonfinite component.");return Math.round(i*pv)}function _v(i,t){let e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("normal"),r=e.index,o=2166136261;o=Ve(o,n.count),o=Ve(o,s?.count||0),o=Ve(o,r?.count||0);for(let a=0;a<n.count;a++)o=Ve(o,ir(n.getX(a))),o=Ve(o,ir(n.getY(a))),o=Ve(o,ir(n.getZ(a))),s&&(o=Ve(o,ir(s.getX(a))),o=Ve(o,ir(s.getY(a))),o=Ve(o,ir(s.getZ(a))));if(r)for(let a=0;a<r.count;a++)o=Ve(o,r.getX(a));for(let a of t.elements)o=Ve(o,gv(Math.round(a*1e6)/1e6));return o>>>0}function xv(i){i.updateWorldMatrix(!0,!0);let t=new le().copy(i.matrixWorld).invert(),e=[],n=0,s=2166136261;return i.traverse(r=>{if(!r.isMesh||!r.geometry?.getAttribute("position")||r.userData.bakeSkip)return;if(r.isInstancedMesh||r.isSkinnedMesh)throw new Error("Paper lighting expects static, non-instanced scene meshes.");let o=new le().multiplyMatrices(t,r.matrixWorld),a=r.geometry.getAttribute("position").count,c=_v(r,o),h=(!!(r.userData.water||r.userData.isWater||r.userData.bakeWater)?1:0)|(r.userData.bakeNoOcclude?2:0);e.push({mesh:r,matrix:o,vertexOffset:n,vertexCount:a,hash:c,flags:h}),n+=a,s=Ve(Ve(Ve(s,c),a),h)}),s=Ve(Ve(s,e.length),n),{meshes:e,meshCount:e.length,vertexCount:n,sceneHash:s>>>0}}function co(i,t){if(t.throwOnMismatch)throw new Error(i);return{applied:!1,reason:i}}function Nf(i,t,e={}){if(ArrayBuffer.isView(t)&&(t=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)),!(t instanceof ArrayBuffer)||t.byteLength<ao)return co("Paper light asset is missing or truncated.",e);let n=new Uint8Array(t);if([...dv].some((M,w)=>n[w]!==M.charCodeAt(0)))return co("Paper light asset has an unknown signature.",e);let s=new DataView(t),r=s.getUint32(8,!0),o=s.getUint32(12,!0),a=s.getUint32(16,!0),c=s.getUint32(20,!0),l=s.getUint32(24,!0),h=s.getUint32(28,!0),u=s.getUint32(32,!0),f=s.getUint32(36,!0);if(r!==Lf||o!==ao||h!==2||u!==ao+a*Uh||f!==c*2||t.byteLength!==u+f)return co("Paper light asset layout is invalid.",e);let d=xv(i);if(a!==d.meshCount||c!==d.vertexCount||l!==d.sceneHash){if(a===d.meshCount){let M=d.meshes.flatMap((w,E)=>{let T=ao+E*Uh,S=s.getUint32(T+4,!0),b=s.getUint32(T,!0);return S!==w.hash||b!==w.vertexCount?[{name:w.mesh.name,assetCount:b,sceneCount:w.vertexCount,assetHash:S.toString(16),sceneHash:w.hash.toString(16)}]:[]});console.warn("Paper light geometry mismatch:",JSON.stringify(M))}return co(`Paper light fingerprint mismatch: asset ${a}/${c}/${l.toString(16)}, scene ${d.meshCount}/${d.vertexCount}/${d.sceneHash.toString(16)}.`,e)}for(let M=0;M<a;M++){let w=ao+M*Uh,E=d.meshes[M];if(s.getUint32(w,!0)!==E.vertexCount||s.getUint32(w+4,!0)!==E.hash||s.getUint32(w+8,!0)!==E.vertexOffset||s.getUint32(w+12,!0)!==E.flags)return co(`Paper light mesh ${M} no longer matches.`,e)}let g=new Uint8Array(t,u,f),y=e.aoStrength??.66,m=e.software?e.shadowStrength??.29:0,p=e.minimumBrightness??.43,x=e.waterWeight??.12,v=1,_=0;for(let M of d.meshes){let w=M.mesh,E=Uf.get(w);if(!E){let b=w.geometry.getAttribute("color"),C=new Float32Array(M.vertexCount*3);for(let A=0;A<M.vertexCount;A++)C[A*3]=b?b.getX(A):1,C[A*3+1]=b?b.getY(A):1,C[A*3+2]=b?b.getZ(A):1;w.geometry=w.geometry.clone(),w.material=Array.isArray(w.material)?w.material.map(A=>A.clone()):w.material.clone(),E={base:C,geometry:w.geometry},Uf.set(w,E)}let T=new Float32Array(M.vertexCount*3),S=M.flags&1?x:1;for(let b=0;b<M.vertexCount;b++){let C=(M.vertexOffset+b)*2,A=1-y*S*(1-g[C]/255),P=1-m*S*(1-g[C+1]/255),L=Math.max(p,A*P);T[b*3]=E.base[b*3]*(L+(1-L)*.045),T[b*3+1]=E.base[b*3+1]*(L+(1-L)*.075),T[b*3+2]=E.base[b*3+2]*(L+(1-L)*.12),v=Math.min(v,L),_+=L}E.geometry.setAttribute("color",new Pe(T,3));for(let b of Array.isArray(w.material)?w.material:[w.material])b.vertexColors=!0,b.needsUpdate=!0;w.userData.paperLightVersion=Lf}return{applied:!0,meshCount:a,vertexCount:c,sceneHash:l.toString(16).padStart(8,"0"),mode:e.software?"ambient + static sun":"ambient",minimumFactor:v,meanFactor:_/Math.max(1,c)}}var Fi=(i,t,e)=>Math.max(t,Math.min(e,i)),Fh=(i,t,e=1e-7)=>!t||i.some((n,s)=>Math.abs(n-t[s])>e),Nh=new Uint8Array(65536),Ac=new Float64Array(257);for(let i=0;i<Nh.length;i++){let t=i/65535;Nh[i]=Math.round((t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055)*255)}for(let i=1;i<256;i++){let t=(i-.5)/255;Ac[i]=t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}Ac[256]=1/0;var sr=i=>{if(i<=0)return 0;if(i>=1)return 255;let t=Nh[Math.round(i*65535)];return i<Ac[t]?t-1:i>=Ac[t+1]?t+1:t};function Of(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}var Rc=class{constructor(){if(this.isSoftwareRenderer=!0,this.domElement=document.createElement("canvas"),this.domElement.style.display="block",this.domElement.style.touchAction="none",this._context=this.domElement.getContext("2d",{alpha:!0}),!this._context)throw new Error("Canvas 2D is not available.");this._surface=document.createElement("canvas"),this._surfaceContext=this._surface.getContext("2d",{alpha:!0}),this.shadowMap={enabled:!0,type:0},this.info={render:{calls:0,triangles:0,frame:0}},this.toneMappingExposure=1.15,this.outputColorSpace=Te,this.autoClear=!0,this._width=1,this._height=1,this._pixelRatio=1,this._rasterRatio=1,this._lastMotionTime=-1/0,this._needsRefinement=!1,this._clearColor=new Mt(0),this._clearAlpha=0,this._dirty=!0,this._records=[],this._materials=[],this._matrix=new le,this._visibilityMatrix=new le,this._normalMatrix=new Zt,this._lightDirection=new U(-12,22,10).normalize(),this._sunColor=new Mt("#fff1d9"),this._sunIntensity=3.3,this._order=[],this._translucentOrder=[],this._staticOrder=[],this._dynamicOrder=[],this._staticCacheValid=!1,this._motionRatio=.6,this._lastFrameMilliseconds=0,this._depthBins=new Uint32Array(16384),this._lastCamera=null,this._lastLighting="",this._styles=[],this._styleTable=new Map,this._materialStates=[],this._compareDepth=(t,e)=>this._depth[e]-this._depth[t]}setPixelRatio(t=1){let e=Fi(Number(t)||1,.5,1.25);e!==this._pixelRatio&&(this._pixelRatio=e,this._needsRefinement||(this._rasterRatio=e),this.setSize(this._width,this._height))}getPixelRatio(){return this._pixelRatio}setClearColor(t,e=1){this._clearColor.set(t),this._clearAlpha=Fi(e,0,1),this._dirty=!0}setSize(t,e,n=!0){this._width=Math.max(1,Math.round(t)),this._height=Math.max(1,Math.round(e)),this.domElement.width=Math.round(this._width*this._pixelRatio),this.domElement.height=Math.round(this._height*this._pixelRatio),n&&(this.domElement.style.width=`${this._width}px`,this.domElement.style.height=`${this._height}px`),this._dirty=!0}getSize(t=new xt){return t.set(this._width,this._height)}isWorldPointVisible(t,e,n=2e-5){if(!this._zBuffer||!this._lastCamera||this._dirty||!e)return!0;let s=this._visibilityMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);if(Fh(s.elements,this._lastCamera,1e-6))return!0;let r=s.elements,o=t.x,a=t.y,c=t.z,l=r[3]*o+r[7]*a+r[11]*c+r[15];if(!(l>0))return!1;let h=(r[0]*o+r[4]*a+r[8]*c+r[12])/l,u=(r[1]*o+r[5]*a+r[9]*c+r[13])/l,f=(r[2]*o+r[6]*a+r[10]*c+r[14])/l;if(!Number.isFinite(h+u+f)||h<-1||h>1||u<-1||u>1||f<-1||f>1)return!1;let d=this._surface.width,g=this._surface.height,y=Math.floor((h*.5+.5)*d-.5),m=Math.floor((.5-u*.5)*g-.5),p=-1/0;for(let x=0;x<2;x++){let v=Fi(m+x,0,g-1)*d;for(let _=0;_<2;_++){let M=this._zBuffer[v+Fi(y+_,0,d-1)];if(M===1/0)return!0;p=Math.max(p,M)}}return f<=p+Math.max(0,Number(n)||0)}compile(t,e){t.updateMatrixWorld(!0),e.updateMatrixWorld(!0),this._scene=t,this._records=[],this._materials=[];let n=new Map,s=[],r=[],o=[],a=[],c=[],l=0,h=0;t.traverse(u=>{if(!u.isMesh||!u.geometry?.attributes?.position)return;let f=Array.isArray(u.material)?u.material:[u.material];if(!f.some(E=>E&&!E.isShadowMaterial))return;let d=u.geometry,g=d.attributes.position,y=d.attributes.color,m={object:u,geometry:d,vertexStart:h,vertexCount:g.count,faceStart:r.length,faceCount:0,matrix:null,active:Of(u),positionVersion:g.version,normalVersion:d.attributes.normal?.version,colorVersion:y?.version,materialIds:new Set,visibleFaces:[],projectDirty:!0,orderDirty:!0,shadeDirty:!0,dynamic:!1,smoothWater:!!(u.userData.water&&(!u.userData.falls||u.userData.flowSurface)),minimumDepth:1/0,maximumDepth:-1/0},p=this._records.length;this._records.push(m);let x=d.index,v=x?x.count:g.count,_=d.drawRange.start||0,M=Math.min(v,_+d.drawRange.count),w=Array.isArray(u.material)&&d.groups.length?d.groups:[{start:0,count:v,materialIndex:0}];for(let E of w){let T=f[E.materialIndex||0];if(!T||T.isShadowMaterial)continue;n.has(T)||(n.set(T,this._materials.length),this._materials.push(T));let S=n.get(T);m.materialIds.add(S);let b=Math.max(E.start,_),C=Math.min(E.start+E.count,M);for(let A=b;A+2<C;A+=3){let P=x?x.getX(A):A,L=x?x.getX(A+1):A+1,O=x?x.getX(A+2):A+2;s.push(h+P,h+L,h+O),r.push(S),o.push(p),c.push(m.smoothWater?l:-1),m.smoothWater&&(l+=9),y&&T.vertexColors?a.push((y.getX(P)+y.getX(L)+y.getX(O))/3,(y.getY(P)+y.getY(L)+y.getY(O))/3,(y.getZ(P)+y.getZ(L)+y.getZ(O))/3):a.push(1,1,1)}}m.faceCount=r.length-m.faceStart,h+=g.count}),this._positions=new Float32Array(h*3),this._projected=new Float32Array(h*3),this._clipW=new Float32Array(h),this._indices=new Uint32Array(s),this._faceMaterials=new Uint16Array(r),this._owners=new Uint16Array(o),this._vertexColors=new Float32Array(a),this._smoothColorOffsets=new Int32Array(c),this._smoothFrontColors=new Float32Array(l),this._smoothBackColors=new Float32Array(l),this._normals=new Float32Array(r.length*3),this._flips=new Int8Array(r.length),this._depth=new Float32Array(r.length),this._faceBins=new Uint16Array(r.length),this._sortedOrder=new Uint32Array(r.length),this._frontFacing=new Uint8Array(r.length),this._front=new Uint32Array(r.length),this._back=new Uint32Array(r.length),this._drawStyle=new Uint32Array(r.length),this._styles=[],this._styleTable.clear(),this._materialStates=[],this._staticCacheValid=!1;for(let u of this._records)this._updateWorld(u);this._lastCamera=null,this._lastLighting="",this._lastMaterials="",this._dirty=!0}_updateWorld(t){let e=t.geometry,n=e.attributes.position,s=e.attributes.normal,r=t.object.matrixWorld,o=r.elements,a=this._positions,c=t.vertexStart;for(let u=0;u<n.count;u++){let f=n.getX(u),d=n.getY(u),g=n.getZ(u),y=(c+u)*3;a[y]=o[0]*f+o[4]*d+o[8]*g+o[12],a[y+1]=o[1]*f+o[5]*d+o[9]*g+o[13],a[y+2]=o[2]*f+o[6]*d+o[10]*g+o[14]}let l=this._normalMatrix.getNormalMatrix(r).elements,h=r.determinant()<0?-1:1;for(let u=t.faceStart;u<t.faceStart+t.faceCount;u++){let f=u*3,d=this._indices[f],g=this._indices[f+1],y=this._indices[f+2],m,p,x;if(s){let _=d-c,M=g-c,w=y-c,E=s.getX(_)+s.getX(M)+s.getX(w),T=s.getY(_)+s.getY(M)+s.getY(w),S=s.getZ(_)+s.getZ(M)+s.getZ(w);m=l[0]*E+l[3]*T+l[6]*S,p=l[1]*E+l[4]*T+l[7]*S,x=l[2]*E+l[5]*T+l[8]*S}else{let _=d*3,M=g*3,w=y*3,E=a[M]-a[_],T=a[M+1]-a[_+1],S=a[M+2]-a[_+2],b=a[w]-a[_],C=a[w+1]-a[_+1],A=a[w+2]-a[_+2];m=(T*A-S*C)*h,p=(S*b-E*A)*h,x=(E*C-T*b)*h}let v=Math.hypot(m,p,x)||1;this._normals[f]=m/v,this._normals[f+1]=p/v,this._normals[f+2]=x/v,this._flips[u]=h}t.matrix=o.slice(),t.positionVersion=n.version,t.normalVersion=s?.version,t.projectDirty=t.orderDirty=t.shadeDirty=!0}_lighting(t){let e=null;if(t.traverse(n=>{!e&&n.isDirectionalLight&&n.visible&&(e=n)}),e){let n=new U().setFromMatrixPosition(e.target.matrixWorld);this._lightDirection.setFromMatrixPosition(e.matrixWorld).sub(n).normalize(),this._sunColor.copy(e.color),this._sunIntensity=e.intensity}return[this._lightDirection.x,this._lightDirection.y,this._lightDirection.z,this._sunColor.r,this._sunColor.g,this._sunColor.b,this._sunIntensity,this.toneMappingExposure].map(n=>Math.round(n*700)).join(",")}_updateFaceColors(t){let e=t.geometry.attributes.color,n=this._vertexColors,s=t.vertexStart,r=this._indices;for(let o=t.faceStart,a=o+t.faceCount;o<a;o++){let c=o*3,l=this._materials[this._faceMaterials[o]];if(e&&l.vertexColors){let h=r[c]-s,u=r[c+1]-s,f=r[c+2]-s;n[c]=(e.getX(h)+e.getX(u)+e.getX(f))/3,n[c+1]=(e.getY(h)+e.getY(u)+e.getY(f))/3,n[c+2]=(e.getZ(h)+e.getZ(u)+e.getZ(f))/3}else n[c]=n[c+1]=n[c+2]=1}t.colorVersion=e?.version,t.shadeDirty=!0}_shadeFaces(t=null){t||(this._styles.length=0,this._styleTable.clear());let e=this._styles,n=this._styleTable,s=this._vertexColors,r=this._lightDirection,o=this._sunColor,a=.86+this.toneMappingExposure*.12,c=Fi(this._sunIntensity/2.65,.25,1.2),l=this._normals,h=(u,f)=>{let d=this._materials[this._faceMaterials[u]],g=u*3,y=1;if(!d.isMeshBasicMaterial){let T=(l[g]*r.x+l[g+1]*r.y+l[g+2]*r.z)*f,S=.5+.5*l[g+1]*f;y=.57+.34*Math.max(0,(T+.35)/1.35)*c+.13*S,y=Math.round(y*100)/100}let m=d.color||{r:1,g:1,b:1},p=d.isMeshBasicMaterial?0:.12,x=this._smoothColorOffsets[u];if(x>=0){let T=this._records[this._owners[u]],S=T.geometry.attributes.color,b=f>0?this._smoothFrontColors:this._smoothBackColors,C=m.r*y*a*(1-p+o.r*p),A=m.g*y*a*(1-p+o.g*p),P=m.b*y*a*(1-p+o.b*p);for(let L=0;L<3;L++){let O=this._indices[g+L]-T.vertexStart,N=x+L*3;b[N]=C*(S&&d.vertexColors?S.getX(O):1),b[N+1]=A*(S&&d.vertexColors?S.getY(O):1),b[N+2]=P*(S&&d.vertexColors?S.getZ(O):1)}}let v=sr(m.r*s[g]*y*a*(1-p+o.r*p)),_=sr(m.g*s[g+1]*y*a*(1-p+o.g*p)),M=sr(m.b*s[g+2]*y*a*(1-p+o.b*p)),w=v|_<<8|M<<16,E=n.get(w);return E===void 0&&(E=e.length,n.set(w,E),e.push({r:v,g:_,b:M,pixel:(w|255<<24)>>>0})),E};for(let u of t||this._records){for(let f=u.faceStart,d=f+u.faceCount;f<d;f++)this._front[f]=h(f,1),this._back[f]=h(f,-1),this._drawStyle[f]=this._frontFacing[f]?this._front[f]:this._back[f];u.shadeDirty=!1,this._shadedFaces+=u.faceCount}}_project(t,e=this._records){let n=this._positions,s=this._projected,r=this._clipW,o=t.elements,a=this._width/2,c=this._height/2;for(let l of e){if(!l.active)continue;let h=l.vertexStart+l.vertexCount;for(let u=l.vertexStart,f=u*3;u<h;u++,f+=3){let d=n[f],g=n[f+1],y=n[f+2],m=o[3]*d+o[7]*g+o[11]*y+o[15],p=1/m;s[f]=(1+(o[0]*d+o[4]*g+o[8]*y+o[12])*p)*a,s[f+1]=(1-(o[1]*d+o[5]*g+o[9]*y+o[13])*p)*c,s[f+2]=(o[2]*d+o[6]*g+o[10]*y+o[14])*p,r[u]=m}l.projectDirty=!1,l.orderDirty=!0,this._projectedVertices+=l.vertexCount}}_collectFaces(t,e){let n=t.visibleFaces;if(n.length=0,t.orderDirty=!1,t.minimumDepth=1/0,t.maximumDepth=-1/0,!t.active)return;let s=this._projected,r=this._indices,o=this._depth,a=this._width,c=this._height,l=this._clipW,h=t.materialIds.size===1?this._materials[t.materialIds.values().next().value]:null;if(!(h&&(!h.visible||h.transparent&&h.opacity<=0)))for(let u=t.faceStart,f=u+t.faceCount;u<f;u++){let d=h||this._materials[this._faceMaterials[u]];if(!h&&(!d.visible||d.transparent&&d.opacity<=0))continue;let g=u*3,y=r[g],m=r[g+1],p=r[g+2];if(l[y]<=0||l[m]<=0||l[p]<=0)continue;let x=y*3,v=m*3,_=p*3,M=s[x],w=s[x+1],E=s[v],T=s[v+1],S=s[_],b=s[_+1];if(M<-1&&E<-1&&S<-1||M>a+1&&E>a+1&&S>a+1||w<-1&&T<-1&&b<-1||w>c+1&&T>c+1&&b>c+1||s[x+2]<-1&&s[v+2]<-1&&s[_+2]<-1||s[x+2]>1&&s[v+2]>1&&s[_+2]>1)continue;let C=(E-M)*(b-w)-(T-w)*(S-M);if(Math.abs(C)<e)continue;let A=C*this._flips[u]<0;d.side===Pn&&!A||d.side===De&&A||(o[u]=(s[x+2]+s[v+2]+s[_+2])/3,t.minimumDepth=Math.min(t.minimumDepth,o[u]),t.maximumDepth=Math.max(t.maximumDepth,o[u]),this._frontFacing[u]=A?1:0,this._drawStyle[u]=A?this._front[u]:this._back[u],n.push(u))}}_groundShadow(t){let e=(c,l,h)=>{let u=new U(c,l,h).applyMatrix4(t);return[(u.x+1)*this._width/2,(1-u.y)*this._height/2]},n=e(.55,-1.08,.7),s=e(15.85,-1.08,.7),r=e(.55,-1.08,12.5),o=this._context;o.save(),o.transform(s[0]-n[0],s[1]-n[1],r[0]-n[0],r[1]-n[1],n[0],n[1]);let a=o.createRadialGradient(0,0,.18,0,0,1.18);a.addColorStop(0,"rgba(101,65,43,0.26)"),a.addColorStop(.8,"rgba(101,65,43,0.17)"),a.addColorStop(1,"rgba(91,65,45,0)"),o.fillStyle=a,o.fillRect(-1.2,-1.2,2.4,2.4),o.restore()}_rasterize(){let t=Math.max(1,Math.round(this._width*this._rasterRatio)),e=Math.max(1,Math.round(this._height*this._rasterRatio));(!this._image||this._surface.width!==t||this._surface.height!==e)&&(this._surface.width=t,this._surface.height=e,this._image=this._surfaceContext.createImageData(t,e),this._pixels=new Uint32Array(this._image.data.buffer),this._zBuffer=new Float32Array(t*e),this._staticPixels=new Uint32Array(t*e),this._staticDepth=new Float32Array(t*e),this._staticCacheValid=!1);let n=this._pixels,s=this._zBuffer,r=this._projected,o=this._indices,a=this._order,c=t/this._width,l=e/this._height,h=!this._needsRefinement,u=h&&this._staticCacheValid;u?(n.set(this._staticPixels),s.set(this._staticDepth)):(n.fill(0),s.fill(1/0));let f=this._staticOrder,d=this._dynamicOrder;f.length=d.length=this._translucentOrder.length=0;for(let m=0;m<a.length;m++){let p=a[m],x=this._materials[this._faceMaterials[p]],v=x.transparent?Fi(x.opacity??1,0,1):1;v<=0||(v<.999?this._translucentOrder.push(p):!h||this._records[this._owners[p]].dynamic||x.depthWrite===!1||x.depthTest===!1?d.push(p):u||f.push(p))}this._translucentOrder.sort(this._compareDepth);let g=h&&!u,y=g?[f,d,this._translucentOrder]:[d,this._translucentOrder];for(let m=0;m<y.length;m++){let p=y[m],x=p===this._translucentOrder;for(let v=0;v<p.length;v++){let _=p[v],M=this._materials[this._faceMaterials[_]],w=this._styles[this._drawStyle[_]],E=M.transparent?Fi(M.opacity??1,0,1):1,T=_*3,S=o[T]*3,b=o[T+1]*3,C=o[T+2]*3,A=r[S]*c,P=r[S+1]*l,L=r[S+2],O=r[b]*c,N=r[b+1]*l,H=r[b+2],z=r[C]*c,j=r[C+1]*l,X=r[C+2],et=0,St=3,ct=6,dt;P>N&&(dt=A,A=O,O=dt,dt=P,P=N,N=dt,dt=L,L=H,H=dt,dt=et,et=St,St=dt),N>j&&(dt=O,O=z,z=dt,dt=N,N=j,j=dt,dt=H,H=X,X=dt,dt=St,St=ct,ct=dt),P>N&&(dt=A,A=O,O=dt,dt=P,P=N,N=dt,dt=L,L=H,H=dt,dt=et,et=St,St=dt);let bt=(O-A)*(j-P)-(N-P)*(z-A);if(Math.abs(bt)<1e-5||j-P<1e-5)continue;let W=((H-L)*(j-P)-(X-L)*(N-P))/bt,q=((O-A)*(X-L)-(z-A)*(H-L))/bt,pt=(z-A)/(j-P),yt=N-P>1e-5?(O-A)/(N-P):0,gt=j-N>1e-5?(z-O)/(j-N):0,Gt=Math.max(0,Math.ceil(P-.5)),Wt=Math.min(e-1,Math.ceil(j-.5)-1),F=w.pixel,nt=M.depthTest!==!1,tt=M.depthWrite!==!1,K=this._smoothColorOffsets[_],J=0,ht=0,st=0,ut=0,Ot=0,Lt=0,D=0,R=0,k=0,Y=0,rt=0,Q=0;if(K>=0){let Et=this._frontFacing[_]?this._smoothFrontColors:this._smoothBackColors;ut=1/this._clipW[o[T+et/3]];let at=1/this._clipW[o[T+St/3]],At=1/this._clipW[o[T+ct/3]];J=Et[K+et]*ut,ht=Et[K+et+1]*ut,st=Et[K+et+2]*ut;let Rt=Et[K+St]*at,ot=Et[K+ct]*At,wt=Et[K+St+1]*at,Dt=Et[K+ct+1]*At,Tt=Et[K+St+2]*at,_t=Et[K+ct+2]*At,Bt=O-A,B=z-A,lt=N-P,mt=j-P;Ot=((Rt-J)*mt-(ot-J)*lt)/bt,Lt=((wt-ht)*mt-(Dt-ht)*lt)/bt,D=((Tt-st)*mt-(_t-st)*lt)/bt,R=((at-ut)*mt-(At-ut)*lt)/bt,k=(Bt*(ot-J)-B*(Rt-J))/bt,Y=(Bt*(Dt-ht)-B*(wt-ht))/bt,rt=(Bt*(_t-st)-B*(Tt-st))/bt,Q=(Bt*(At-ut)-B*(at-ut))/bt}for(let Et=Gt;Et<=Wt;Et++){let at=Et+.5,At=A+(at-P)*pt,Rt=at<N?A+(at-P)*yt:O+(at-N)*gt,ot=Math.max(0,Math.ceil(Math.min(At,Rt)-.5)),wt=Math.min(t-1,Math.ceil(Math.max(At,Rt)-.5)-1),Dt=L+W*(ot+.5-A)+q*(at-P),Tt=Et*t+ot;if(K>=0){let _t=ot+.5-A,Bt=at-P,B=J+Ot*_t+k*Bt,lt=ht+Lt*_t+Y*Bt,mt=st+D*_t+rt*Bt,Pt=ut+R*_t+Q*Bt;for(let ft=ot;ft<=wt;ft++,Tt++,Dt+=W,B+=Ot,lt+=Lt,mt+=D,Pt+=R){if(Dt<-1||Dt>1||nt&&Dt>s[Tt]+1e-7)continue;let it=1/Pt,Ut=sr(B*it),qt=sr(lt*it),re=sr(mt*it),Qt=255;if(x){let Je=n[Tt],rn=(Je>>>24)/255,Vi=E+rn*(1-E),Tn=rn*(1-E);Ut=Math.round((Ut*E+(Je&255)*Tn)/Vi),qt=Math.round((qt*E+(Je>>>8&255)*Tn)/Vi),re=Math.round((re*E+(Je>>>16&255)*Tn)/Vi),Qt=Math.round(Vi*255)}n[Tt]=(Ut|qt<<8|re<<16|Qt<<24)>>>0,tt&&(s[Tt]=Dt)}}else if(x)for(let _t=ot;_t<=wt;_t++,Tt++,Dt+=W){if(Dt<-1||Dt>1||nt&&Dt>s[Tt]+1e-7)continue;let Bt=n[Tt],B=(Bt>>>24)/255,lt=E+B*(1-E),mt=B*(1-E),Pt=Math.round((w.r*E+(Bt&255)*mt)/lt),ft=Math.round((w.g*E+(Bt>>>8&255)*mt)/lt),it=Math.round((w.b*E+(Bt>>>16&255)*mt)/lt);n[Tt]=(Pt|ft<<8|it<<16|Math.round(lt*255)<<24)>>>0,tt&&(s[Tt]=Dt)}else for(let _t=ot;_t<=wt;_t++,Tt++,Dt+=W)Dt<-1||Dt>1||nt&&Dt>s[Tt]+1e-7||(n[Tt]=F,tt&&(s[Tt]=Dt))}}g&&m===0&&(this._staticPixels.set(n),this._staticDepth.set(s),this._staticCacheValid=!0)}this._surfaceContext.putImageData(this._image,0,0),this._context.imageSmoothingEnabled=!0,this._context.imageSmoothingQuality="high",this._context.drawImage(this._surface,0,0,this._width,this._height)}_sortDepth(t,e){let n=this._order,s=this._depthBins,r=this._faceBins,o=this._depth,a=this._sortedOrder;s.fill(0);let c=(s.length-1)/Math.max(e-t,1e-9);for(let h=0;h<n.length;h++){let u=n[h],f=Fi(Math.floor((o[u]-t)*c),0,s.length-1);r[u]=f,s[f]++}let l=0;for(let h=s.length-1;h>=0;h--){let u=s[h];s[h]=l,l+=u}for(let h=0;h<n.length;h++){let u=n[h];a[s[r[u]]++]=u}for(let h=0;h<n.length;h++)n[h]=a[h]}render(t,e){(this._scene!==t||!this._positions)&&this.compile(t,e),t.updateMatrixWorld(),e.updateMatrixWorld(),this._matrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);let n=Fh(this._matrix.elements,this._lastCamera,1e-6),s=performance.now(),r=this._needsRefinement,o=this._rasterRatio;n&&this._lastCamera?(this._lastMotionTime=s,this._needsRefinement=!0,r?this._lastFrameMilliseconds>85?this._motionRatio=Math.max(.42,this._motionRatio-.06):this._lastFrameMilliseconds<40&&(this._motionRatio=Math.min(.66,this._motionRatio+.03)):this._motionRatio=.6,this._rasterRatio=Math.min(this._pixelRatio,this._motionRatio)):this._needsRefinement&&s-this._lastMotionTime>=150&&(this._needsRefinement=!1,this._rasterRatio=this._pixelRatio);let a=r!==this._needsRefinement||o!==this._rasterRatio,c=!1,l=!1,h=!1;for(let A of this._records){(Fh(A.object.matrixWorld.elements,A.matrix)||A.geometry.attributes.position.version!==A.positionVersion||A.geometry.attributes.normal?.version!==A.normalVersion)&&(A.dynamic||(this._staticCacheValid=!1),A.dynamic=!0,this._updateWorld(A),c=!0),A.geometry.attributes.color?.version!==A.colorVersion&&(A.dynamic||(this._staticCacheValid=!1),A.dynamic=!0,this._updateFaceColors(A),h=!0);let P=Of(A.object);P!==A.active&&(A.dynamic||(this._staticCacheValid=!1),A.dynamic=!0,A.active=P,A.projectDirty=A.orderDirty=!0,l=!0)}let u=this._lighting(t),f=u!==this._lastLighting,d=new Set,g=new Set,y=new Set,m=new Set,p=!1;for(let A=0;A<this._materials.length;A++){let P=this._materials[A],L=this._materialStates[A],O=[P.color?.r,P.color?.g,P.color?.b,P.opacity,P.transparent,P.visible,P.side,P.depthTest,P.depthWrite,P.vertexColors];(!L||O.some((N,H)=>N!==L[H]))&&(p=!0,L&&m.add(A)),(!L||O[0]!==L[0]||O[1]!==L[1]||O[2]!==L[2]||O[9]!==L[9])&&d.add(A),(!L||O[5]!==L[5]||O[6]!==L[6]||!!(O[4]&&O[3]<=0)!=!!(L[4]&&L[3]<=0))&&g.add(A),L&&O[9]!==L[9]&&y.add(A),this._materialStates[A]=O}if(!n&&!c&&!l&&!h&&!p&&!f&&!a&&!this._dirty)return;this._shadedFaces=0,this._projectedVertices=0;let x=[],v=[];for(let A of this._records){for(let P of A.materialIds)m.has(P)&&(A.dynamic||(this._staticCacheValid=!1),A.dynamic=!0),y.has(P)&&this._updateFaceColors(A),d.has(P)&&(A.shadeDirty=!0),g.has(P)&&(A.orderDirty=!0);A.shadeDirty&&x.push(A),A.projectDirty&&v.push(A)}(f||n||a||this._dirty)&&(this._staticCacheValid=!1),f||!this._styles.length?this._shadeFaces():x.length&&this._shadeFaces(x),n||this._dirty?this._project(this._matrix):v.length&&this._project(this._matrix,v),this._lastCamera=this._matrix.elements.slice(),this._lastLighting=u;let _=n||a||this._dirty,M=this._needsRefinement?.55/(this._rasterRatio*this._rasterRatio):.03,w=this._order,E=_;for(let A of this._records)(_||A.orderDirty)&&(this._collectFaces(A,M),E=!0);if(E){w.length=0;let A=1/0,P=-1/0;for(let L of this._records){let O=L.visibleFaces;for(let N=0;N<O.length;N++)w.push(O[N]);A=Math.min(A,L.minimumDepth),P=Math.max(P,L.maximumDepth)}this._sortDepth(A,P)}this._dirty=!1;let T=this._width,S=this._height,b=this._context,C=this._pixelRatio;b.setTransform(1,0,0,1,0,0),b.clearRect(0,0,this.domElement.width,this.domElement.height),b.setTransform(C,0,0,C,0,0),b.globalAlpha=1,this._clearAlpha>0&&(b.globalAlpha=this._clearAlpha,b.fillStyle=`#${this._clearColor.getHexString()}`,b.fillRect(0,0,T,S),b.globalAlpha=1),t.background?.isColor&&(b.fillStyle=`#${t.background.getHexString()}`,b.fillRect(0,0,T,S)),this.shadowMap.enabled&&this._groundShadow(this._matrix),this._rasterize(),b.globalAlpha=1,this.info.render.calls=1,this.info.render.triangles=w.length,this.info.render.resolutionRatio=this._rasterRatio,this.info.render.quality=this._needsRefinement?"motion":"full",this.info.render.shadedTriangles=this._shadedFaces,this.info.render.projectedVertices=this._projectedVertices,this._lastFrameMilliseconds=performance.now()-s,this.info.render.frameMilliseconds=this._lastFrameMilliseconds,this.info.render.frame++}dispose(){this._records=[],this._materials=[],this._styles=[],this._styleTable.clear(),this._materialStates=[],this._order=[],this._positions=this._projected=this._indices=this._normals=null,this._smoothColorOffsets=this._smoothFrontColors=this._smoothBackColors=null,this._image=this._pixels=this._zBuffer=null,this._staticPixels=this._staticDepth=null,this._staticOrder=[],this._dynamicOrder=[],this._staticCacheValid=!1,this._context.clearRect(0,0,this.domElement.width,this.domElement.height),this._scene=null}};var{clamp:Ge}=me,Bf=new U(0,2.8,-.15),yv=new U(7,27,37).normalize(),lo=new Vs().setFromVector3(yv),zf=.28,Hf=1.31;function kf({camera:i,groundHeight:t=()=>0,width:e=1,height:n=1,reducedMotion:s=!1}){let r=Bf.clone(),o=r.clone(),a=new Vs(43.5,lo.phi,lo.theta),c=a.clone(),l=new U,h=new U,u=new U,f=new U,d=new U,g=Math.max(1,e),y=Math.max(1,n),m=43.5,p=7.5,x=70,v=!0,_=!1;function M(N){return N&&Number.isFinite(N.x)&&Number.isFinite(N.y)&&Number.isFinite(N.z)}function w(N=null){o.x=Ge(o.x,-14,14),o.z=Ge(o.z,-11.5,11.5);let H=Math.hypot(o.x/14,o.z/11.5);H>1&&(o.x/=H,o.z/=H);let z=t(o.x,o.z);N!==null&&Number.isFinite(z)&&(o.y=z+N),o.y=Ge(Math.max(o.y,Number.isFinite(z)?z+.12:0),.12,9)}function E(){if(l.setFromSpherical(a),d.copy(r).add(l),Math.hypot(d.x/14.4,d.z/11.6)<1.08){let N=t(d.x,d.z);Number.isFinite(N)&&(d.y=Math.max(d.y,N+.85))}i.position.copy(d),i.lookAt(r),i.updateMatrixWorld()}function T(){r.copy(o),a.copy(c),_=!1,E()}function S(N=!1){v=!0,o.copy(Bf);let H=Math.round((a.theta-lo.theta)/(Math.PI*2));c.set(m,lo.phi,lo.theta+H*Math.PI*2),_=!0,(N||s)&&T()}function b(N,H){g=Math.max(1,Number.isFinite(N)?N:1),y=Math.max(1,Number.isFinite(H)?H:1);let z=g/y,j=g<650;m=Ge(43.5*Math.max(1,.95/z),43.5,102),p=j?11:7.5,x=Math.max(j?105:70,m+5),i.aspect=z,i.updateProjectionMatrix(),v?S(!0):(c.radius=Ge(c.radius,p,x),_=!0)}function C(N,H){if(!Number.isFinite(N)||!Number.isFinite(H))return;v=!1;let z=Math.PI*2/Math.max(560,y);c.theta-=Ge(N,-500,500)*z,c.phi=Ge(c.phi-Ge(H,-500,500)*z*.78,zf,Hf),_=!0}function A(N,H){if(!Number.isFinite(N)||!Number.isFinite(H))return;v=!1;let z=t(o.x,o.z),j=Number.isFinite(z)?Math.max(.12,o.y-z):null,X=2*a.radius*Math.tan(me.degToRad(i.fov*.5))/y;h.set(Math.cos(a.theta),0,-Math.sin(a.theta)),u.set(-Math.sin(a.theta),0,-Math.cos(a.theta)),o.addScaledVector(h,-Ge(N,-300,300)*X),o.addScaledVector(u,Ge(H,-300,300)*X/Math.max(.35,Math.cos(a.phi))),w(j),_=!0}function P(N,H=null){if(!Number.isFinite(N)||N===0)return;v=!1;let z=c.radius;if(c.radius=Ge(z*Math.exp(Ge(N,-800,800)*.00125),p,x),M(H)){let j=Ge((1-c.radius/z)*.82,-.12,.25);f.copy(H).sub(o).multiplyScalar(j),f.lengthSq()>4&&f.setLength(2),o.add(f),w()}_=!0}function L(N,H={}){if(M(N)){if(v=!1,o.copy(N),w(),c.radius=Ge(Number.isFinite(H.radius)?H.radius:g<650?20:13.5,p,x),Number.isFinite(H.theta)){let z=Math.round((a.theta-H.theta)/(Math.PI*2));c.theta=H.theta+z*Math.PI*2}Number.isFinite(H.phi)&&(c.phi=Ge(H.phi,zf,Hf)),_=!0,(H.immediate||s)&&T()}}function O(N){if(!_)return!1;let H=Number.isFinite(N)?Ge(N,0,.1):1/60,z=s?1:1-Math.exp(-H*10);return r.lerp(o,z),a.radius=me.lerp(a.radius,c.radius,z),a.theta=me.lerp(a.theta,c.theta,z),a.phi=me.lerp(a.phi,c.phi,z),r.distanceToSquared(o)<1e-7&&Math.abs(a.radius-c.radius)<3e-4&&Math.abs(a.theta-c.theta)<2e-5&&Math.abs(a.phi-c.phi)<2e-5?T():E(),!0}return b(g,y),S(!0),{target:r,desiredTarget:o,resize:b,home:S,rotate:C,pan:A,zoom:P,focus:L,update:O,get moving(){return _},get isHome(){return v},get radius(){return a.radius},get homeRadius(){return m},get theta(){return a.theta},get phi(){return a.phi}}}function Vf(i){let t=performance.now(),e=[],n=[],s=0;i.updateWorldMatrix(!0,!0),i.traverse(ct=>{let dt=ct.isMesh&&ct.geometry,bt=dt&&dt.getAttribute("position");if(!bt)return;let W=dt.index?dt.index.count:bt.count,q=Math.ceil(Math.max(0,dt.drawRange.start)/3)*3,pt=Math.floor(Math.min(W,dt.drawRange.start+dt.drawRange.count)/3)*3;pt<=q||(e.push(ct),n.push([q,pt]),s+=(pt-q)/3)});let r=new Float32Array(s*9),o=new Uint32Array(s),a=new Uint32Array(s),c=new Uint32Array(s),l=new Float32Array(s*6),h=new Float32Array(s*3),u=0;for(let ct=0;ct<e.length;ct++){let dt=e[ct],bt=dt.geometry.getAttribute("position"),W=dt.geometry.index,q=dt.matrixWorld.elements,[pt,yt]=n[ct];for(let gt=pt;gt<yt;gt+=3,u++){let Gt=u*9;for(let Wt=0;Wt<3;Wt++){let F=W?W.getX(gt+Wt):gt+Wt,nt=bt.getX(F),tt=bt.getY(F),K=bt.getZ(F),J=Gt+Wt*3;r[J]=q[0]*nt+q[4]*tt+q[8]*K+q[12],r[J+1]=q[1]*nt+q[5]*tt+q[9]*K+q[13],r[J+2]=q[2]*nt+q[6]*tt+q[10]*K+q[14]}for(let Wt=0;Wt<3;Wt++){let F=r[Gt+Wt],nt=r[Gt+Wt+3],tt=r[Gt+Wt+6];l[u*6+Wt]=Math.min(F,nt,tt),l[u*6+Wt+3]=Math.max(F,nt,tt),h[u*3+Wt]=(F+nt+tt)/3}o[u]=ct,a[u]=gt/3,c[u]=u}}let f=20,d=Math.max(1,Math.ceil(s/10)*2),g=new Float32Array(d*6),y=new Int32Array(d),m=new Int32Array(d),p=new Uint32Array(d),x=new Uint16Array(d),v=0,_=0,M=0;function w(){d*=2;let ct=(dt,bt)=>{let W=new dt.constructor(bt);return W.set(dt),W};g=ct(g,d*6),y=ct(y,d),m=ct(m,d),p=ct(p,d),x=ct(x,d)}function E(ct,dt,bt){let W=v++;W>=d&&w(),M=Math.max(M,bt);let q=1/0,pt=1/0,yt=1/0,gt=-1/0,Gt=-1/0,Wt=-1/0,F=1/0,nt=1/0,tt=1/0,K=-1/0,J=-1/0,ht=-1/0;for(let at=ct;at<dt;at++){let At=c[at],Rt=At*6,ot=At*3;q=Math.min(q,l[Rt]),pt=Math.min(pt,l[Rt+1]),yt=Math.min(yt,l[Rt+2]),gt=Math.max(gt,l[Rt+3]),Gt=Math.max(Gt,l[Rt+4]),Wt=Math.max(Wt,l[Rt+5]),F=Math.min(F,h[ot]),nt=Math.min(nt,h[ot+1]),tt=Math.min(tt,h[ot+2]),K=Math.max(K,h[ot]),J=Math.max(J,h[ot+1]),ht=Math.max(ht,h[ot+2])}let st=W*6;if(g[st]=q,g[st+1]=pt,g[st+2]=yt,g[st+3]=gt,g[st+4]=Gt,g[st+5]=Wt,dt-ct<=f)return p[W]=ct,x[W]=dt-ct,y[W]=m[W]=-1,_++,W;let ut=K-F,Ot=J-nt,Lt=ht-tt,D=ut>=Ot&&ut>=Lt?0:Ot>=Lt?1:2,R=D===0?(F+K)*.5:D===1?(nt+J)*.5:(tt+ht)*.5,k=ct,Y=dt-1;for(;k<=Y;)if(h[c[k]*3+D]<R)k++;else{let at=c[k];c[k]=c[Y],c[Y--]=at}let rt=k===ct||k===dt?ct+dt>>>1:k,Q=E(ct,rt,bt+1),Et=E(rt,dt,bt+1);return y[W]=Q,m[W]=Et,W}s&&E(0,s,0),g=g.slice(0,v*6),y=y.slice(0,v),m=m.slice(0,v),p=p.slice(0,v),x=x.slice(0,v),l=null,h=null;let T=new Int32Array(M+3),S=new Float64Array(M+3),b=new Uint8Array(e.length),C,A,P,L,O,N,H,z,j;function X(ct,dt){let bt=ct*6,W=0,q=dt,pt,yt;if(L===0){if(C<g[bt]||C>g[bt+3])return 1/0}else{if(pt=(g[bt]-C)*H,yt=(g[bt+3]-C)*H,pt>yt){let gt=pt;pt=yt,yt=gt}if(W=Math.max(W,pt),q=Math.min(q,yt),W>q)return 1/0}if(O===0){if(A<g[bt+1]||A>g[bt+4])return 1/0}else{if(pt=(g[bt+1]-A)*z,yt=(g[bt+4]-A)*z,pt>yt){let gt=pt;pt=yt,yt=gt}if(W=Math.max(W,pt),q=Math.min(q,yt),W>q)return 1/0}if(N===0){if(P<g[bt+2]||P>g[bt+5])return 1/0}else{if(pt=(g[bt+2]-P)*j,yt=(g[bt+5]-P)*j,pt>yt){let gt=pt;pt=yt,yt=gt}if(W=Math.max(W,pt),q=Math.min(q,yt),W>q)return 1/0}return W}function et(ct,dt=1/0){if(!s||dt<0||Number.isNaN(dt))return null;C=ct.origin.x,A=ct.origin.y,P=ct.origin.z,L=ct.direction.x,O=ct.direction.y,N=ct.direction.z;let bt=Math.hypot(L,O,N);if(!Number.isFinite(C+A+P+bt)||bt===0)return null;H=1/L,z=1/O,j=1/N;let W=dt/bt,q=-1,pt=X(0,W);if(pt===1/0)return null;for(let J=0;J<e.length;J++){let ht=e[J],st=!0;for(;ht;){if(!ht.visible){st=!1;break}ht=ht.parent}b[J]=st?1:0}let yt=1;for(T[0]=0,S[0]=pt;yt;){let J=--yt,ht=T[J];if(!(S[J]>W))if(x[ht]){let st=p[ht]+x[ht];for(let ut=p[ht];ut<st;ut++){let Ot=c[ut];if(!b[o[Ot]])continue;let Lt=Ot*9,D=r[Lt],R=r[Lt+1],k=r[Lt+2],Y=r[Lt+3]-D,rt=r[Lt+4]-R,Q=r[Lt+5]-k,Et=r[Lt+6]-D,at=r[Lt+7]-R,At=r[Lt+8]-k,Rt=O*At-N*at,ot=N*Et-L*At,wt=L*at-O*Et,Dt=Y*Rt+rt*ot+Q*wt;if(Math.abs(Dt)<1e-12)continue;let Tt=1/Dt,_t=C-D,Bt=A-R,B=P-k,lt=(_t*Rt+Bt*ot+B*wt)*Tt;if(lt<0||lt>1)continue;let mt=Bt*Q-B*rt,Pt=B*Y-_t*Q,ft=_t*rt-Bt*Y,it=(L*mt+O*Pt+N*ft)*Tt;if(it<0||lt+it>1)continue;let Ut=(Et*mt+at*Pt+At*ft)*Tt;Ut>=0&&Ut<=W&&(W=Ut,q=Ot)}}else{let st=y[ht],ut=m[ht],Ot=X(st,W),Lt=X(ut,W);Ot<Lt?(Lt!==1/0&&(T[yt]=ut,S[yt++]=Lt),Ot!==1/0&&(T[yt]=st,S[yt++]=Ot)):(Ot!==1/0&&(T[yt]=st,S[yt++]=Ot),Lt!==1/0&&(T[yt]=ut,S[yt++]=Lt))}}if(q<0)return null;let gt=q*9,Gt=r[gt+3]-r[gt],Wt=r[gt+4]-r[gt+1],F=r[gt+5]-r[gt+2],nt=r[gt+6]-r[gt],tt=r[gt+7]-r[gt+1],K=r[gt+8]-r[gt+2];return{point:new U(C+L*W,A+O*W,P+N*W),distance:W*bt,object:e[o[q]],faceIndex:a[q],normal:new U(Wt*K-F*tt,F*nt-Gt*K,Gt*tt-Wt*nt).normalize()}}let St=r.byteLength+o.byteLength+a.byteLength+c.byteLength+g.byteLength+y.byteLength+m.byteLength+p.byteLength+x.byteLength+T.byteLength+S.byteLength+b.byteLength;return{pick:et,metadata:Object.freeze({meshes:e.length,triangles:s,nodes:v,leaves:_,maxDepth:M,leafLimit:f,bytes:St,buildMilliseconds:+(performance.now()-t).toFixed(2),staticWorldSpace:!0})}}var Ni=1e-9,ds=(i,t,e)=>(t[0]-i[0])*(e[1]-i[1])-(t[1]-i[1])*(e[0]-i[0]);function vv(i,t){let[e,n]=i,s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r],c=t[o];a[1]>n!=c[1]>n&&e<(c[0]-a[0])*(n-a[1])/(c[1]-a[1])+a[0]&&(s=!s)}return s}function Mv(i){let t=i.map((l,h)=>({a:l,b:i[(h+1)%i.length],cuts:[0,1]})),e=0;for(let l=0;l<t.length;l++)for(let h=l+1;h<t.length;h++){if(h===l+1||l===0&&h===t.length-1)continue;let u=t[l],f=t[h],d=u.b[0]-u.a[0],g=u.b[1]-u.a[1],y=f.b[0]-f.a[0],m=f.b[1]-f.a[1],p=d*m-g*y;if(Math.abs(p)<1e-12)continue;let x=f.a[0]-u.a[0],v=f.a[1]-u.a[1],_=(x*m-v*y)/p,M=(x*g-v*d)/p;_>1e-8&&_<1-1e-8&&M>1e-8&&M<1-1e-8&&(u.cuts.push(_),f.cuts.push(M),e++)}if(!e)return{triangles:Be.triangulateShape(i.map(l=>new xt(...l)),[]).map(l=>l.map(h=>i[h])),intersections:e,faces:1};let n=[],s=new Map;function r(l){let h=`${Math.round(l[0]*1e8)},${Math.round(l[1]*1e8)}`;return s.has(h)||(s.set(h,n.length),n.push({point:l,neighbors:new Set})),s.get(h)}for(let l of t){let h=[...new Set(l.cuts)].sort((u,f)=>u-f);for(let u=0;u+1<h.length;u++){let f=y=>[l.a[0]+(l.b[0]-l.a[0])*y,l.a[1]+(l.b[1]-l.a[1])*y],d=r(f(h[u])),g=r(f(h[u+1]));d!==g&&(n[d].neighbors.add(g),n[g].neighbors.add(d))}}for(let l of n)l.neighbors=[...l.neighbors].sort((h,u)=>Math.atan2(n[h].point[1]-l.point[1],n[h].point[0]-l.point[0])-Math.atan2(n[u].point[1]-l.point[1],n[u].point[0]-l.point[0]));let o=new Set,a=[],c=0;for(let l=0;l<n.length;l++)for(let h of n[l].neighbors){if(o.has(`${l}:${h}`))continue;let u=[],f=l,d=h,g=n.length*4;for(;g-- >0&&!o.has(`${f}:${d}`);){o.add(`${f}:${d}`),u.push(n[f].point);let x=n[d].neighbors,v=x.indexOf(f),_=x[(v-1+x.length)%x.length];if(f=d,d=_,f===l&&d===h)break}if(u.length<3||u.reduce((x,v,_)=>{let M=u[(_+1)%u.length];return x+v[0]*M[1]-M[0]*v[1]},0)<=1e-10)continue;let m=Be.triangulateShape(u.map(x=>new xt(...x)),[]).map(x=>x.map(v=>u[v]));if(!m.length)continue;let p=0;for(let x of m){let v=[(x[0][0]+x[1][0]+x[2][0])/3,(x[0][1]+x[1][1]+x[2][1])/3];vv(v,i)&&(a.push(x),p++)}p&&c++}return{triangles:a,intersections:e,faces:c}}function bv(i,t){let e=i,n=Math.sign(ds(t[0],t[1],t[2]))||1;for(let s=0;s<3&&e.length;s++){let r=t[s],o=t[(s+1)%3],a=e;e=[];let c=a[a.length-1],l=n*ds(r,o,c);for(let h of a){let u=n*ds(r,o,h),f=u>=-Ni,d=l>=-Ni;if(f!==d){let g=l/(l-u);e.push([c[0]+(h[0]-c[0])*g,c[1]+(h[1]-c[1])*g])}f&&e.push(h),c=h,l=u}}return e}function ho(i){if(!i?.geometry?.attributes?.position||!i.userData.water||i.userData.falls)throw new TypeError("Water-surface effects require a horizontal lake mesh.");i.updateWorldMatrix(!0,!1);let t=i.geometry.attributes.position,e=new U;e.set(t.getX(0),t.getY(0),t.getZ(0)).applyMatrix4(i.matrixWorld);let n=e.y,s=t.getY(0),r=[],o=i.userData.surfaceContour,a={intersections:0,faces:0},c=(x,v)=>{if(e.set(x,s,v).applyMatrix4(i.matrixWorld),Math.abs(e.y-n)>1e-5)throw new TypeError("Ripple masks must be horizontal.");return[e.x,e.z]};if(o?.length>=3){let x=o.map(_=>c(_[0],_[1])),v=Mv(x);r.push(...v.triangles),a={intersections:v.intersections,faces:v.faces}}else{let x=i.geometry.index,v=x?.count??t.count;for(let _=0;_<v;_+=3){let M=[];for(let w=0;w<3;w++){let E=x?x.getX(_+w):_+w;M.push(c(t.getX(E),t.getZ(E)))}r.push(M)}}let l=new Map,h=.65,u=[],f=1/0,d=-1/0,g=1/0,y=-1/0;for(let x=0;x<r.length;x++){let v=r[x],_=Math.min(...v.map(T=>T[0])),M=Math.max(...v.map(T=>T[0])),w=Math.min(...v.map(T=>T[1])),E=Math.max(...v.map(T=>T[1]));u.push([_,M,w,E]),f=Math.min(f,_),d=Math.max(d,M),g=Math.min(g,w),y=Math.max(y,E);for(let T=Math.floor(_/h);T<=Math.floor(M/h);T++)for(let S=Math.floor(w/h);S<=Math.floor(E/h);S++){let b=`${T}:${S}`;l.has(b)||l.set(b,[]),l.get(b).push(x)}}function m(x,v){let _=l.get(`${Math.floor(x/h)}:${Math.floor(v/h)}`);if(!_)return!1;let M=[x,v];return _.some(w=>{let[E,T,S]=r[w],b=ds(E,T,M),C=ds(T,S,M),A=ds(S,E,M);return!((b<-Ni||C<-Ni||A<-Ni)&&(b>Ni||C>Ni||A>Ni))})}function p(x){if(x.length<3)return[];let v=Math.min(...x.map(S=>S[0])),_=Math.max(...x.map(S=>S[0])),M=Math.min(...x.map(S=>S[1])),w=Math.max(...x.map(S=>S[1]));if(_<f||v>d||w<g||M>y)return[];let E=new Set,T=[];for(let S=Math.floor(v/h);S<=Math.floor(_/h);S++)for(let b=Math.floor(M/h);b<=Math.floor(w/h);b++)for(let C of l.get(`${S}:${b}`)||[])E.add(C);for(let S of E){let b=u[S];if(b[1]<v||b[0]>_||b[3]<M||b[2]>w)continue;let C=bv(x,r[S]);for(let A=1;A+1<C.length;A++){let P=[C[0],C[A],C[A+1]];Math.abs(ds(...P))>1e-10&&T.push(P)}}return T}return{mesh:i,id:i.userData.basin,y:n,x0:f,x1:d,z0:g,z1:y,contains:m,clipPolygon:p,clipTriangle:(x,v,_)=>p([x,v,_]),triangles:r,maskStats:a}}function Gf(i,t,e,n,s=72){let r=[],o=t.x??t[0],a=t.z??t[1],c=e+n,l=Math.max(.001,e-n);for(let h=0;h<s;h++){let u=h/s*Math.PI*2,f=(h+1)/s*Math.PI*2,d=Math.cos(u),g=Math.sin(u),y=Math.cos(f),m=Math.sin(f);r.push(...i.clipPolygon([[o+d*l,a+g*l],[o+d*c,a+g*c],[o+y*c,a+m*c],[o+y*l,a+m*l]]))}return r}var Pc=Math.PI*2,Cc=me.clamp,uo=me.lerp;var Ic=i=>i-Math.floor(i),ae=(i,t=0)=>Ic(Math.sin(i*127.1+t*311.7)*43758.5453123),Sv=[{id:"pearl",x:7.45,z:.57,width:3.12,top:3.4,bottom:1.78,depth:1.02,curve:.07,count:28},{id:"nuorilang",x:-.35,z:4.54,width:5.15,top:1.78,bottom:.26,depth:.72,curve:.08,count:40},{id:"shuzheng-one",x:1,z:6.94,width:2.1,top:.26,bottom:.08,depth:.23,curve:.025,count:10},{id:"shuzheng-two",x:2.25,z:8.54,width:2.4,top:.08,bottom:-.08,depth:.23,curve:.025,count:10}];function Dc(i,t=1){return new He({color:i,transparent:t<1,opacity:t,side:ie,depthWrite:!1,toneMapped:!1})}function Lc(i,t,e,n){let s=new se,r=new Vt(new Float32Array(e*18),3);r.setUsage(Pi),s.setAttribute("position",r);let o=new jt(s,n);return o.name=t,o.frustumCulled=!1,o.userData.atmosphere=!0,i.add(o),{mesh:o,position:r,array:r.array}}function Wf(i,t,e,n,s,r){i.set(e,t),i.set(n,t+3),i.set(s,t+6),i.set(e,t+9),i.set(s,t+12),i.set(r,t+15)}var wv=ho;function Xf(i,t,e,n){i.array.fill(0);let s=0;for(let r of t)for(let o of e.clipPolygon(r)){if(s+9>i.array.length)throw new Error(`Water-effect capacity exceeded: ${i.mesh.name}`);for(let a of o)i.array[s++]=a[0],i.array[s++]=n,i.array[s++]=a[1]}i.usedVertices=s/3,i.position.needsUpdate=!0}function Ev(i,t){let e={wuhua:11,changhai:5,wucai:3,mirror:4,"nuorilang-head":3,"shuzheng-upper":2,"shuzheng-middle":2,"shuzheng-lower":2};return t.map((n,s)=>{let r=[],o=n.id==="mirror"?.42:n.id==="changhai"?.56:n.id.startsWith("shuzheng")?1.25:1;for(let c=0;r.length<e[n.id]&&c<1200;c++){let l=c+s*1601,h=uo(n.x0,n.x1,ae(l,1)),u=uo(n.z0,n.z1,ae(l,2)),f=n.id==="wuhua"?1.15+ae(l,3)*1.1:.6+ae(l,3)*.85,d=n.id==="wuhua"?.1+ae(l,4)*.12:.06+ae(l,4)*.08,g=.018+ae(l,5)*.012,y=(ae(l,8)-.5)*.44,m=Math.cos(y),p=Math.sin(y),x=!0;for(let v=0;v<=5&&x;v++)for(let _ of[-1,1]){let M=(v/5-.5)*f,w=_*(d+.17+g*1.9);if(!n.contains(h+M*m-w*p,u+M*p+w*m)){x=!1;break}}x&&r.push({x:h,z:u,length:f,bend:d,width:g,co:m,si:p,phase:ae(l,6)*Pc,speed:(.28+ae(l,7)*.17)*o})}return{...Lc(i,`lake-breath-${n.id}`,Math.max(r.length*13,n.id==="nuorilang-head"?72:30),Dc(n.id==="changhai"?"#b2cfc0":"#d5e5c9",.25)),basin:n,lines:r,wake:0}})}function Tv(i,t,e){let n={pearl:"mirror",nuorilang:"shuzheng-upper","shuzheng-one":"shuzheng-middle","shuzheng-two":"shuzheng-lower"};return Sv.map((s,r)=>{let o=t.waterMeshes.find(d=>d.name===`waterfall-${s.id}`),a={...s,...o?.userData.flowSurface,id:s.id},c=a.top-a.bottom>.6,l=Array.from({length:a.count},(d,g)=>({u:.018+(g+.35+ae(g,r+1)*.25)/a.count*.964,phase:ae(g,r+5),speed:.59+ae(g,r+11)*.3,length:.19+ae(g,r+7)*.25,width:.01+ae(g,r+9)*.02})),h=Lc(i,`descending-water-${a.id}`,l.length*3,Dc("#fffff3",.82)),u=Array.from({length:c?7:4},(d,g)=>({u:.03+(g+.5)/(c?7:4)*.94,phase:ae(g,r+13),length:.14+ae(g,r+17)*.19,width:.038+ae(g,r+19)*.055,speed:.37+ae(g,r+23)*.2})),f=Lc(i,`aerated-outflow-${a.id}`,c?176:128,Dc("#f9fbef",.69));return{...a,veil:o,streams:l,flow:h,patches:u,foam:f,laceSegments:c?26:12,receiver:e.find(d=>d.id===n[a.id])}})}function Av(i){return[[7.45,1.84,1.72,3.5,.27],[-.35,.32,5.4,5.3,.3],[-6.8,4.02,-7.35,2.4,.17],[6.2,1.85,3.2,2.4,.13]].map(([e,n,s,r,o],a)=>({x:e,y:n,z:s,length:r,breadth:o,phase:a*2.3,...Lc(i,`vellum-mist-${a}`,8,Dc("#f0e9d3",a<2?.13:.075))}))}function Rv(i,t,e){let n=new se;n.setAttribute("position",new Vt([0,-.1,0,-.075,.005,-.018,0,.14,0,0,-.1,0,0,.14,0,.065,.018,.028],3)),n.computeVertexNormals();let s=t.interactionZones.filter(a=>a.kind==="forest"),r=["#eea38c","#f0c775","#de8f9a","#b2bd88"],o=[];for(let a=0;a<28;a++){let c=s[a%s.length],l=ae(a,3)*Pc,h=.3+ae(a,5)*1,u=c.center.x+Math.cos(l)*h,f=c.center.z+Math.sin(l)*h,d=.65+ae(a,8)*1,g=(ae(a,9)-.5)*.9,y=u+d,m=f+g,p=t.groundHeight(y,m)+.028,x=e.find(E=>E.contains(y,m));x&&(p=Math.max(p,x.y+.025));let v=Math.max(t.groundHeight(u,f)+1.45+ae(a,7)*.65,p+.65),_=Array.from({length:13},(E,T)=>{let S=T/12,b=u+d*S+Math.sin(S*Math.PI)*.25,C=f+g*S;return t.groundHeight(b,C)+.025}),M=new we({color:r[a%r.length],roughness:1,side:ie,transparent:!0,opacity:.9,depthWrite:!1}),w=new jt(n,M);w.name=`drifting-paper-leaf-${a}`,w.castShadow=!1,w.frustumCulled=!1,w.userData.atmosphere=!0,i.add(w),o.push({mesh:w,x:u,z:f,dx:d,dz:g,floor:p,startY:v,samples:_,seed:a*1.618,flight:6.5+ae(a,10)*4,rest:8+ae(a,11)*8,phase:ae(a,12)})}return o}function qf({scene:i,landscape:t,software:e=!1,reducedMotion:n=!1}){let s=new oe;s.name="the-valley-breathes",i.add(s);let r=t.waterMeshes.filter(p=>!p.userData.falls).map(wv),o=Ev(s,r),a=Tv(s,t,r),c=Av(s),l=Rv(s,t,r),h=(t.clouds||[]).map((p,x)=>({cloud:p,x:p.position.x,y:p.position.y,phase:x*2.13})),u={point:new U,strength:0},f=-1/0;function d(p,x=1){u.point.copy(p),u.strength=Math.max(u.strength,Cc(x,0,2));for(let v of o)v.basin.contains(p.x,p.z)&&(v.wake=Math.max(v.wake,x))}function g(p,x,{daylight:v=0}={}){let _=n?0:p;if(_===f)return!1;f=_,u.strength*=Math.exp(-Math.max(0,x)*1.35);for(let M of o){M.wake*=Math.exp(-Math.max(0,x)*1.4);let{lines:w,basin:E}=M,T=[],S=n?0:1;for(let b of w){let L=function(O,N){let H=Math.pow(Math.sin(O*Math.PI),.65),z=(O-.5)*b.length,j=A+Math.sin(O*Math.PI+C*.16)*b.bend+N*b.width*H*P*(1+M.wake*.45);return[b.x+z*b.co-j*b.si,b.z+z*b.si+j*b.co]},C=_*b.speed+b.phase,A=Math.sin(C*.73)*(E.id==="mirror"?.065:.13)*S,P=.48+.52*(.5+.5*Math.sin(C));for(let O=0;O<4;O++){let N=O/4,H=(O+1)/4;T.push([L(N,-1),L(H,-1),L(H,1),L(N,1)])}}Xf(M,T,E,E.y+.008),M.mesh.material.opacity=uo(.22,.19,v)}for(let M of a){M.veil&&df(M.veil,_);for(let T=0;T<M.streams.length;T++){let A=function(P,L){let O=Cc(C-S.length+P*S.length,.002,.998),N=Math.sin(P*Math.PI)*Math.sin(O*Math.PI)*Math.sqrt(Math.sin(b*Math.PI)),H=Cc(S.u+L*S.width*N/M.width,.002,.998),z=tn(M,H,O,_),j=lf(M,H,O,_);return[z[0]+j[0]*.008,z[1]+j[1]*.008,z[2]+j[2]*.008]},S=M.streams[T],b=Ic(_*S.speed+S.phase),C=.005+.99*Math.pow(b,1.22);for(let P=0;P<3;P++){let L=P/3,O=(P+1)/3;Wf(M.flow.array,(T*3+P)*18,A(L,-1),A(O,-1),A(O,1),A(L,1))}}M.flow.position.needsUpdate=!0;let w=M.receiver,E=[];if(w){for(let T=0;T<2;T++)for(let S=0;S<M.laceSegments;S++){let b=function(P,L){let O=tn(M,P,1,_),N=.5+.5*Math.sin(P*47-_*3.1+T*2.3),H=(T?.014:.036)+(T?.01:.032)*N,z=O[2]+.027+T*.14+Math.sin(P*69+_*2.3)*.016;return[O[0],z+L*H]};if(T===1&&ae(S,M.seed+9)>.56||T===0&&ae(S,M.seed+4)>.91)continue;let C=.012+S/M.laceSegments*.976,A=.012+(S+1)/M.laceSegments*.976;E.push([b(C,-1),b(A,-1),b(A,1),b(C,1)])}for(let T of M.patches){let S=Ic(_*T.speed+T.phase),b=Math.sin(S*Math.PI),C=tn(M,T.u,1,_),A=C[0]+Math.sin(S*4+T.phase*Pc)*.025,P=C[2]+.09+S*.31,L=T.length*(.45+.55*b),O=T.width*(.2+.8*b),N=[];for(let H=0;H<8;H++){let z=H/8*Pc;N.push([A+Math.cos(z)*L*.5,P+Math.sin(z)*O])}E.push(N)}}w&&Xf(M.foam,E,w,w.y+.009)}for(let M of c){let E=function(T,S){let b=Math.sin(T*Math.PI),C=Math.sin(T*Math.PI*2+_*.19+M.phase);return[M.x+(T-.5)*M.length+w,M.y+.04+.045*C*b+(S>0?.055*b:0),M.z+C*.07+S*M.breadth*b]},w=Math.sin(_*.13+M.phase)*.17;for(let T=0;T<8;T++){let S=T/8,b=(T+1)/8;Wf(M.array,T*18,E(S,-1),E(b,-1),E(b,1),E(S,1))}M.position.needsUpdate=!0}for(let M of h)M.cloud.position.x=M.x+Math.sin(_*.07+M.phase)*.1,M.cloud.position.y=M.y+Math.sin(_*.095+M.phase)*.035;for(let M of l){let w=M.flight+M.rest,E=Ic(_/w+M.phase)*w,T=Cc(E/M.flight,0,1),S=Math.max(0,E-M.flight),b=Math.exp(-Math.hypot(M.x-u.point.x,M.z-u.point.z)*.6),C=Math.sin(T*Math.PI)*Math.sin(E*2.3+M.seed)*(.22+b*u.strength*.16),A=M.x+M.dx*T+Math.sin(T*Math.PI)*.25,P=M.z+M.dz*T+C,L=T*12,O=Math.floor(L),N=Math.min(O+1,12),H=uo(M.samples[O],M.samples[N],L-O),z=T<1?Math.max(H,uo(M.startY,M.floor,T*T)+Math.sin(T*Math.PI)*.15):M.floor;M.mesh.position.set(A,z,P),T<1?M.mesh.rotation.set(E*1.7+M.seed,E*.65,Math.sin(E*1.3+M.seed)*.6):M.mesh.rotation.set(-Math.PI/2,0,M.seed);let j=Math.min(1,E/.6,Math.max(0,(w-E)/1.6));M.mesh.material.opacity=j*(S>0?.8:.95),M.mesh.scale.setScalar(.65+ae(M.seed)*.7)}return!0}g(0,0);let y=0,m=0;return s.traverse(p=>{p.isMesh&&(m++,y+=p.geometry.attributes.position.count)}),{group:s,update:g,disturb:d,metadata:{meshes:m,dynamicVertices:y,lakeCurrentLines:o.reduce((p,x)=>p+x.lines.length,0),fallingWaterStrokes:a.reduce((p,x)=>p+x.streams.length,0),foamPatches:a.reduce((p,x)=>p+x.patches.length,0),animatedVeilVertices:a.reduce((p,x)=>p+(x.veil?.geometry.attributes.position.count||0),0),foamBands:0,mistRibbons:c.length,fallingAndSettledLeaves:l.length,waterfallSurfaceModel:"continuous thin veil with travelling geometry and aeration",actualBasinClipping:!0,softwareGeometry:e}}}var Cv=new Set(["changhai","wucai","wuhua","pearl","mirror","nuorilang","shuzheng"]),Yf="jiuzhai-paper-memories:v1:",Iv=20*1024*1024,Pv=18e5,Dv=1e6,Lv=new Set(["image/jpeg","image/png","image/webp"]);function Zf(i){if(!Cv.has(i))throw new Error("\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u666F\u70B9\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4E00\u4E2A\u5730\u65B9\u3002")}function Uv(i){if(i==="")return!0;if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;let t=new Date(`${i}T12:00:00.000Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===i}function $f(i){if(typeof i!="string"||i.length>Pv)return!1;let t=/^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(i);if(!t||t[2].length%4!==0)return!1;try{let e=atob(t[2].slice(0,32));return t[1]==="jpeg"?e.startsWith("\xFF\xD8\xFF"):t[1]==="png"?e.startsWith(`\x89PNG\r

`):e.startsWith("RIFF")&&e.slice(8,12)==="WEBP"}catch{return!1}}function Jf(i){if(!i||typeof i!="object"||Array.isArray(i))throw new Error("\u624B\u8BB0\u5185\u5BB9\u6709\u4E9B\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u91CD\u65B0\u586B\u5199\u540E\u4FDD\u5B58\u3002");let{text:t="",date:e="",photo:n=null}=i;if(typeof t!="string"||t.length>1200)throw new Error("\u8FD9\u6BB5\u8BB0\u5FC6\u6700\u591A\u53EF\u4EE5\u5199 1200 \u4E2A\u5B57\uFF0C\u8BF7\u7A0D\u5FAE\u7F29\u77ED\u4E00\u4E9B\u3002");if(!Uv(e))throw new Error("\u8BF7\u9009\u62E9\u4E00\u4E2A\u6709\u6548\u65E5\u671F\uFF0C\u6216\u628A\u65E5\u671F\u7559\u7A7A\u3002");let s=n===""||n===null?null:n;if(s!==null&&!$f(s))throw new Error("\u7167\u7247\u683C\u5F0F\u6216\u5927\u5C0F\u4E0D\u5408\u9002\uFF0C\u8BF7\u901A\u8FC7\u201C\u653E\u5165\u7167\u7247\u201D\u91CD\u65B0\u9009\u62E9 JPG\u3001PNG \u6216 WebP \u56FE\u7247\u3002");return{text:t,date:e,photo:s}}function Oh(i){Zf(i);try{let t=globalThis.localStorage.getItem(Yf+i);if(t===null)return null;let e=JSON.parse(t),n=Jf(e);return typeof e.updatedAt!="string"||!Number.isFinite(Date.parse(e.updatedAt))?null:{...n,updatedAt:e.updatedAt}}catch{return null}}function Kf(i,t){Zf(i);let e={...Jf(t),updatedAt:new Date().toISOString()};try{globalThis.localStorage.setItem(Yf+i,JSON.stringify(e))}catch(n){throw n?.name==="QuotaExceededError"||n?.name==="NS_ERROR_DOM_QUOTA_REACHED"?new Error("\u8FD9\u4E2A\u6D4F\u89C8\u5668\u7684\u4FDD\u5B58\u7A7A\u95F4\u4E0D\u591F\u4E86\u3002\u53EF\u4EE5\u6362\u4E00\u5F20\u66F4\u5C0F\u7684\u7167\u7247\uFF0C\u6216\u5148\u53EA\u4FDD\u5B58\u6587\u5B57\u3002"):new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u4FDD\u5B58\u624B\u8BB0\u3002\u8BF7\u68C0\u67E5\u9690\u79C1\u6216\u5B58\u50A8\u8BBE\u7F6E\uFF0C\u7136\u540E\u91CD\u8BD5\u3002")}return e}async function Fv(i){if(typeof globalThis.createImageBitmap=="function")try{let t=await createImageBitmap(i,{imageOrientation:"from-image"});return{image:t,width:t.width,height:t.height,dispose:()=>t.close()}}catch{}return new Promise((t,e)=>{let n=URL.createObjectURL(i),s=new Image;s.decoding="async",s.onload=()=>t({image:s,width:s.naturalWidth,height:s.naturalHeight,dispose:()=>URL.revokeObjectURL(n)}),s.onerror=()=>{URL.revokeObjectURL(n),e(new Error("\u8FD9\u5F20\u7167\u7247\u6682\u65F6\u65E0\u6CD5\u6253\u5F00\u3002\u8BF7\u6362\u4E00\u5F20 JPG\u3001PNG \u6216 WebP \u56FE\u7247\u3002"))},s.src=n})}async function jf(i){if(!i||typeof i.size!="number"||typeof i.type!="string"||typeof i.slice!="function")throw new Error("\u8BF7\u5148\u9009\u62E9\u4E00\u5F20\u7167\u7247\u3002");if(!Lv.has(i.type.toLowerCase()))throw new Error("\u6682\u65F6\u652F\u6301 JPG\u3001PNG \u548C WebP \u56FE\u7247\uFF0C\u8BF7\u6362\u4E00\u79CD\u683C\u5F0F\u540E\u518D\u8BD5\u3002");if(i.size===0)throw new Error("\u8FD9\u5F20\u7167\u7247\u662F\u7A7A\u6587\u4EF6\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002");if(i.size>Iv)throw new Error("\u7167\u7247\u9700\u8981\u5C0F\u4E8E\u6216\u7B49\u4E8E 20 MB\uFF0C\u8BF7\u9009\u62E9\u4E00\u5F20\u5C0F\u4E00\u4E9B\u7684\u56FE\u7247\u3002");if(typeof document>"u")throw new Error("\u5F53\u524D\u73AF\u5883\u65E0\u6CD5\u5904\u7406\u7167\u7247\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5730\u56FE\u540E\u518D\u8BD5\u3002");let t,e;try{if(t=await Fv(i),!t.width||!t.height)throw new Error("\u8FD9\u5F20\u7167\u7247\u7684\u5C3A\u5BF8\u4E0D\u6B63\u786E\uFF0C\u8BF7\u6362\u4E00\u5F20\u56FE\u7247\u3002");let n=Math.min(1,1200/Math.max(t.width,t.height)),s=Math.max(1,Math.round(t.width*n)),r=Math.max(1,Math.round(t.height*n));e=document.createElement("canvas");let o=e.getContext("2d");if(!o)throw new Error("\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u5904\u7406\u7167\u7247\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002");o.imageSmoothingEnabled=!0;for(let a=0;a<7;a+=1){e.width=s,e.height=r,o.imageSmoothingQuality="high",o.fillStyle="#ffffff",o.fillRect(0,0,s,r),o.drawImage(t.image,0,0,s,r);for(let c of[.82,.7,.58,.46,.34]){let l=e.toDataURL("image/jpeg",c);if(l.length<=Dv&&$f(l))return l}s=Math.max(1,Math.round(s*.8)),r=Math.max(1,Math.round(r*.8))}throw new Error("\u8FD9\u5F20\u7167\u7247\u6682\u65F6\u65E0\u6CD5\u538B\u7F29\u5230\u5408\u9002\u5927\u5C0F\uFF0C\u8BF7\u6362\u4E00\u5F20\u56FE\u7247\u3002")}catch(n){throw n instanceof Error&&/[\u4e00-\u9fff]/.test(n.message)?n:new Error("\u7167\u7247\u5904\u7406\u5931\u8D25\uFF0C\u8BF7\u9009\u62E9\u53E6\u4E00\u5F20 JPG\u3001PNG \u6216 WebP \u56FE\u7247\u91CD\u8BD5\u3002")}finally{t?.dispose(),e&&(e.width=0,e.height=0)}}var Nv=me.lerp,Ov=me.clamp;function Qf(){let i=new oe;i.name="a-handful-of-daylight";let t=new jt(new ri(.77,.77,.045,48),new He({color:"#dca96c",side:ie}));t.rotation.x=Math.PI/2,i.add(t);let e=new yn;e.moveTo(0,.69),e.absarc(0,0,.69,Math.PI/2,Math.PI*1.5,!1),e.lineTo(0,.69);let n=new jt(new Hs(e),new He({color:"#edc08a",side:ie}));return n.position.z=.026,i.add(n),i.position.set(6.7,12,-9.4),i.userData.sun=!0,{group:i,disk:t,fold:n}}function tp(i,{landscape:t,reducedMotion:e=!1}={}){let n=new Map,s=[],r=1024;for(let u of t?.waterMeshes||[])u.userData.falls||n.set(u,ho(u));for(let u=0;u<2;u++){let f=new oe;f.name=`water-touch-${u}`,f.visible=!1,i.add(f);let d=[];for(let g=0;g<2;g++){let y=[];for(let m=0;m<2;m++){let p=new se,x=new Vt(new Float32Array(r*9),3);x.setUsage(Pi),p.setAttribute("position",x);let v=new He({color:m?"#dcf2df":"#b9e4d6",transparent:!0,opacity:0,side:ie,depthTest:!0,depthWrite:!1,toneMapped:!1}),_=new jt(p,v);_.name=`water-touch-${u}-front-${g}-${m?"crest":"soft-edge"}`,_.frustumCulled=!1,_.userData={waterEffect:!0,atmosphere:!0},f.add(_),y.push({mesh:_,attribute:x,array:x.array,triangles:0})}d.push({layers:y,delay:g*.29})}s.push({group:f,rings:d,age:99,life:e?.72:2.25,point:new U,surface:null})}let o=new yn;o.moveTo(0,-.105),o.quadraticCurveTo(-.09,-.02,0,.105),o.quadraticCurveTo(.09,.02,0,-.105);let a=new Hs(o),c=[],l=["#d1a36b","#c9866c","#e0bd82","#9ea88c"];for(let u=0;u<26;u++){let f=new jt(a,new we({color:l[u%l.length],side:ie,roughness:1}));f.visible=!1,i.add(f),c.push({mesh:f,age:99,origin:new U,seed:u*1.618})}let h=0;return{ripple(u,f){if(!f?.userData.water||f.userData.falls)return!1;let d=n.get(f);if(d||(d=ho(f),n.set(f,d)),!d.contains(u.x,u.z))return!1;let g=s[h++%s.length];return g.point.copy(u),g.surface=d,g.group.visible=!0,g.age=0,!0},wind(u){c.forEach((f,d)=>{f.origin.copy(u).add(new U(Math.sin(d*2.1)*1.1,.2+d%5*.24,Math.cos(d*1.7)*.8)),f.age=-d*.027,f.mesh.visible=!0})},update(u){let f=!1;for(let d of s)if(!(d.age>=d.life||!d.surface)){f=!0,d.age+=Math.max(0,u);for(let g=0;g<d.rings.length;g++){let y=d.rings[g],m=d.age-y.delay,p=d.life-y.delay,x=Ov(m/p,0,1),v=Math.min(1,x/.12)*Math.pow(1-x,1.3),_=e?.16:.065+x*1.12,M=e?.011:.008+.008*x;for(let w=0;w<y.layers.length;w++){let E=y.layers[w];if(E.mesh.visible=m>0&&x<1&&(!e||g===0),!E.mesh.visible)continue;let T=Gf(d.surface,d.point,_,M*(w?1:2.8));E.triangles=Math.min(r,T.length);let S=0,b=d.surface.y+.005;for(let C=0;C<E.triangles;C++)for(let A of T[C])E.array[S++]=A[0],E.array[S++]=b,E.array[S++]=A[1];for(;S<E.array.length;S+=3)E.array[S]=d.point.x,E.array[S+1]=b,E.array[S+2]=d.point.z;E.mesh.material.opacity=(w?.22:.045)*v*(g?.72:1),E.mesh.userData.surface=d.surface.id,E.mesh.userData.visibleTriangles=E.triangles,E.attribute.needsUpdate=!0}}d.age>=d.life&&(d.group.visible=!1)}for(let d of c){if(d.age>3.6)continue;f=!0,d.age+=u;let g=Math.max(0,d.age);d.mesh.visible=d.age>=0&&g<3.6,d.mesh.position.copy(d.origin).add(new U(g*.58+Math.sin(g*2.5+d.seed)*.3,Math.sin(g/3.6*Math.PI)*.7-g*.25,Math.cos(g*1.6+d.seed)*.38)),d.mesh.rotation.set(g*2.4+d.seed,g*1.6,d.seed+g*2),d.mesh.scale.setScalar(Math.min(1,Math.max(0,(3.6-g)*2)))}return f}}}function ep(i,t){let e=new Set;i.traverse(n=>{if(n.isMesh)for(let s of Array.isArray(n.material)?n.material:[n.material]){if(e.has(s)||!s.isMeshStandardMaterial)continue;e.add(s);let r=!!n.geometry.attributes.windWeight;s.onBeforeCompile=o=>{o.uniforms.uPaperTime=t.time,o.uniforms.uWindCenter=t.center,o.uniforms.uWindForce=t.force,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPaperPosition;
${r?`attribute float windWeight;
uniform float uPaperTime;
uniform vec3 uWindCenter;
uniform float uWindForce;`:""}`),o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vPaperPosition=transformed;
${r?`float reach=exp(-distance(transformed.xz,uWindCenter.xz)*.5);
float breeze=sin(uPaperTime*.74+transformed.x*.35+transformed.z*.21)*.075+sin(uPaperTime*1.18+transformed.z*.7)*.022;
transformed.x+=(breeze+sin(uPaperTime*3.+transformed.z*1.4)*uWindForce*reach*.16)*windWeight;
transformed.z+=(cos(uPaperTime*.61+transformed.x*.27)*.034+cos(uPaperTime*2.3+transformed.x)*uWindForce*reach*.08)*windWeight;`:""}`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vPaperPosition;
float paperFiber(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453123);}`),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float fiber=paperFiber(floor(vPaperPosition*210.));
diffuseColor.rgb*=.978+.044*fiber;`)},s.customProgramCacheKey=()=>`paper-fiber-v3-${r}`}})}function np(i,t,e,n,s=null){let r=new Map,o=document.getElementById("photo-overlays"),a=new we({color:"#f9eed8",roughness:1,side:ie}),c=new we({color:"#a78c66",roughness:1});for(let d of e){let g=t.stopProgress[d.id],y=Math.round(g*(t.route.length-1)),m=t.route[y].clone(),p=t.route[Math.min(y+3,t.route.length-1)],x=p.clone().sub(m).normalize(),v=new U(x.z,0,-x.x);m.addScaledVector(v,.55),m.y=t.groundHeight(m.x,m.z)+.62;let _=new oe;_.position.copy(m),_.rotation.y=Math.atan2(v.x,v.z),_.rotation.z=-.06,_.visible=!1,_.userData.memoryId=d.id,i.add(_);let M=new jt(new Qe(.88,1.02,.024),a);M.castShadow=!0,M.receiveShadow=!0,_.add(M);let w=new jt(new ai(.75,.7),new He({color:"#fffaf0",side:ie}));w.position.set(0,.065,.016),_.add(w);let E=new jt(new Qe(.07,.12,.055),c);E.position.set(0,.48,.022),_.add(E);let T=new jt(new Qe(.025,.62,.025),c);T.position.set(0,-.7,-.02),_.add(T);let S=document.createElement("div");S.className="photo-leaf",S.hidden=!0,S.style.cssText="position:absolute;left:0;top:0;width:240px;height:224px;transform-origin:0 0;backface-visibility:hidden;overflow:hidden;pointer-events:none;";let b=document.createElement("img");b.style.cssText="width:100%;height:100%;object-fit:cover;display:block;",S.append(b),o.append(S),r.set(d.id,{group:_,picture:w,label:S,img:b,memory:null,corners:[[-.375,.415,.018],[.375,.415,.018],[-.375,-.285,.018],[.375,-.285,.018]].map(C=>new U(...C))})}async function l(d,g){let y=r.get(d);if(!y)return;let m=(y.revision||0)+1;if(y.revision=m,y.memory=g,y.group.visible=!!(g&&(g.photo||g.text)),y.label.hidden=!0,!y.group.visible)return;let p=document.createElement("canvas");p.width=600,p.height=560;let x=p.getContext("2d");if(x.fillStyle="#f4e9d1",x.fillRect(0,0,600,560),g.photo){let _=new Image;if(_.src=g.photo,await _.decode(),y.revision!==m)return;let M=Math.max(600/_.width,560/_.height);x.drawImage(_,(600-_.width*M)/2,(560-_.height*M)/2,_.width*M,_.height*M)}else{x.fillStyle="#5a6251",x.font='28px Georgia, "Songti SC", serif';let _=[...g.text],M=55,w=110;for(let E=0;E<Math.min(_.length,84);E++)x.fillText(_[E],M,w),M+=31,M>530&&(M=55,w+=48);g.date&&(x.font="19px Georgia",x.fillStyle="#9a7860",x.fillText(g.date,55,510))}let v=new Pr(p);v.colorSpace=Te,y.picture.material.map?.dispose(),y.picture.material.map=v,y.picture.material.needsUpdate=!0,y.img.src=p.toDataURL("image/jpeg",.9)}function h(d,g,y){if(n)for(let m of r.values()){if(!m.group.visible){m.label.hidden=!0;continue}m.group.updateWorldMatrix(!0,!1);let p=m.corners.map(X=>X.clone().applyMatrix4(m.group.matrixWorld));if(s?.isWorldPointVisible){let X=new U(0,.065,.019).applyMatrix4(m.group.matrixWorld),et=p.filter(St=>s.isWorldPointVisible(St,d)).length;if(!s.isWorldPointVisible(X,d)||et<3){m.label.hidden=!0;continue}}let x=p.map(X=>X.project(d));if(x.some(X=>X.z>1||X.z<-1)){m.label.hidden=!0;continue}let[v,_,M,w]=x.map(X=>({x:(X.x*.5+.5)*g,y:(-.5*X.y+.5)*y}));if((_.x-v.x)*(M.y-v.y)-(_.y-v.y)*(M.x-v.x)<0){m.label.hidden=!0;continue}let E=_.x-w.x,T=M.x-w.x,S=v.x-_.x-M.x+w.x,b=_.y-w.y,C=M.y-w.y,A=v.y-_.y-M.y+w.y,P=E*C-T*b,L=Math.abs(P)>1e-8?(S*C-T*A)/P:0,O=Math.abs(P)>1e-8?(E*A-S*b)/P:0,N=_.x-v.x+L*_.x,H=M.x-v.x+O*M.x,z=_.y-v.y+L*_.y,j=M.y-v.y+O*M.y;m.label.style.transform=`matrix3d(${N/240},${z/240},0,${L/240},${H/224},${j/224},0,${O/224},0,0,1,0,${v.x},${v.y},0,1)`,m.label.hidden=!1}}function u(d,g,y,m){let[p,x,v]=y,[_,M,w]=m,E=(x.x-p.x)*(v.y-p.y)-(v.x-p.x)*(x.y-p.y);if(Math.abs(E)<1e-8)return;let T=((M.x-_.x)*(v.y-p.y)-(w.x-_.x)*(x.y-p.y))/E,S=((M.y-_.y)*(v.y-p.y)-(w.y-_.y)*(x.y-p.y))/E,b=((x.x-p.x)*(w.x-_.x)-(v.x-p.x)*(M.x-_.x))/E,C=((x.x-p.x)*(w.y-_.y)-(v.x-p.x)*(M.y-_.y))/E;d.save(),d.beginPath(),d.moveTo(_.x,_.y),d.lineTo(M.x,M.y),d.lineTo(w.x,w.y),d.closePath(),d.clip(),d.transform(T,S,b,C,_.x-T*p.x-b*p.y,_.y-S*p.x-C*p.y),d.drawImage(g,0,0),d.restore()}function f(d,g,y,m,p,x,v){if(n)for(let _ of r.values()){if(!_.group.visible||_.label.hidden||!_.img.complete)continue;let M=_.corners.map(T=>T.clone().applyMatrix4(_.group.matrixWorld).project(g)).map(T=>({x:x+(T.x*.5+.5)*y*p,y:v+(1-T.y)*.5*m*p})),w=_.img.naturalWidth,E=_.img.naturalHeight;u(d,_.img,[{x:0,y:0},{x:w,y:0},{x:w,y:E}],[M[0],M[1],M[3]]),u(d,_.img,[{x:0,y:0},{x:w,y:E},{x:0,y:E}],[M[0],M[3],M[2]])}}return{records:r,set:l,update:h,drawToPostcard:f}}var Uc=class{constructor(){this.enabled=!1,this.context=null}async toggle(){if(!this.context){let t=window.AudioContext||window.webkitAudioContext;if(!t)throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u64AD\u653E\u73AF\u5883\u58F0\u3002");let e=this.context=new t,n=e.createBuffer(1,e.sampleRate*5,e.sampleRate),s=n.getChannelData(0),r=0;for(let a=0;a<s.length;a++)r=(r+(Math.random()*2-1)*.035)/1.018,s[a]=r*3.8;let o=e.createBufferSource();o.buffer=n,o.loop=!0,this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=1550,this.gain=e.createGain(),this.gain.gain.value=0,this.pan=e.createStereoPanner(),o.connect(this.filter).connect(this.pan).connect(this.gain).connect(e.destination),o.start()}return await this.context.resume(),this.enabled=!this.enabled,this.gain.gain.setTargetAtTime(this.enabled?.1:0,this.context.currentTime,.7),this.enabled}update(t,e,n){if(!this.context||!this.enabled)return;let s=this.context,r=Math.exp(-n*.17);this.gain.gain.setTargetAtTime(.055+r*.18,s.currentTime,.8),this.filter.frequency.setTargetAtTime(Nv(850,2200,r),s.currentTime,1),this.pan.pan.setTargetAtTime(Math.sin(t*Math.PI*3)*.28,s.currentTime,.6)}suspend(){this.context&&this.context.suspend()}resume(){this.context&&this.enabled&&this.context.resume().catch(()=>{})}};var zt=i=>document.getElementById(i),{clamp:ip,lerp:Zn}=me,go=matchMedia("(prefers-reduced-motion: reduce)").matches,kh=[{id:"changhai",name:"\u957F\u6D77",en:"Long Lake",line:"\u6DF1\u84DD\u7559\u5728\u7FA4\u5C71\u4E4B\u95F4\uFF0C\u8584\u96FE\u7F13\u7F13\u8D8A\u8FC7\u6C34\u5CB8\u3002"},{id:"wucai",name:"\u4E94\u5F69\u6C60",en:"Five-Color Pond",line:"\u4E00\u679A\u6F84\u6F88\u7684\u84DD\uFF0C\u85CF\u5728\u5C42\u5C42\u7EB8\u53F6\u7684\u95F4\u9699\u3002"},{id:"wuhua",name:"\u4E94\u82B1\u6D77",en:"Five Flower Lake",line:"\u9752\u78A7\u968F\u6C34\u7EB9\u6D41\u8F6C\uFF0C\u6C89\u6728\u9690\u7EA6\u6D6E\u73B0\u5728\u5149\u91CC\u3002"},{id:"pearl",name:"\u73CD\u73E0\u6EE9\u7011\u5E03",en:"Pearl Shoal",line:"\u6E05\u6D41\u8D8A\u8FC7\u77F3\u6CBF\uFF0C\u8F7B\u8F7B\u788E\u6210\u4E00\u7247\u767D\u3002"},{id:"mirror",name:"\u955C\u6D77",en:"Mirror Lake",line:"\u98CE\u628A\u5012\u5F71\u8F7B\u8F7B\u5C55\u5F00\uFF0C\u53C8\u6162\u6162\u629A\u5E73\u3002"},{id:"nuorilang",name:"\u8BFA\u65E5\u6717\u7011\u5E03",en:"Nuorilang Falls",line:"\u4E00\u9053\u5BBD\u9614\u7684\u6C34\u5E18\uFF0C\u6258\u8D77\u6797\u95F4\u7EC6\u7EC6\u7684\u96FE\u3002"},{id:"shuzheng",name:"\u6811\u6B63\u7FA4\u6D77",en:"Shuzheng Lakes",line:"\u6D45\u6C34\u7A7F\u8FC7\u79CB\u6797\uFF0C\u91D1\u8272\u7EB8\u53F6\u5728\u5CB8\u8FB9\u505C\u7559\u3002"}],ar=Object.fromEntries(kh.map(i=>[i.id,i])),Bv={name:"\u4E5D\u5BE8\u5C71\u6C34",en:"JIUZHAI VALLEY",line:"\u98CE\u8FC7\u6797\u68A2\uFF0C\u6C34\u6709\u56DE\u58F0\u3002"},We=zt("scene-container"),pn=new Ir,Bc=new Jr,sp=new xt,gi={time:{value:0},center:{value:new U},force:{value:0}},zc=new Uc,qh=new Mt("#fff0df"),dp=new Mt("#eed5c3"),fp=new Mt("#fff7ed"),zv=new Mt("#ffc18d"),Hn=new Zr(fp,2.65),pp=new qr("#f4f8ff","#ded3b9",1.75),mp=new $r("#f1f6f5",.24),ee,Sn,he,nn,gp,Hi,Bi,Yh,ki,rp,En=1,$n=1,Xe=0,_o=0,fo=!0,Oi=null,Ee=0,mi=0,ps=null,cr=null,sn=null,zi=null,zn=0,po=!1,pe=null,Yn=null,pi=null,op=-1,Bh=-1,_p,or=null,bn=null,Fc=0,ap,cp,Vh=0,zh=null,Mn=new Map,Ue=zt("cursor-feedback");function xo(i){zt("toast").textContent=i,zt("toast").hidden=!1,zt("toast").classList.add("visible"),clearTimeout(cp),cp=setTimeout(()=>{zt("toast").classList.remove("visible"),setTimeout(()=>zt("toast").hidden=!0,300)},3500)}function wn(i,t){zt(i).textContent!==t&&(zt(i).textContent=t)}function Hc(){document.body.classList.add("exploring")}function rr(){cr=null,pi=null,Hc()}function lr(i){ps=ar[i]?i:null;let t=ar[ps]||Bv;wn("scene-title",t.name),wn("scene-en",t.en),wn("scene-line",t.line),We.dataset.focus=ps||"valley"}function kc(i){let t="wuhua",e=1/0;for(let[n,s]of Object.entries(nn.anchors)){let r=s.distanceToSquared(i);r<e&&(t=n,e=r)}return t}function Nc(i){let t=We.getBoundingClientRect();return{x:i.clientX-t.left,y:i.clientY-t.top}}function Hv(i){return sp.set(i.x/En*2-1,1-i.y/$n*2),Bc.setFromCamera(sp,Sn),Bc.ray}function kv(i){let t=i.clone().project(Sn);return{x:(t.x*.5+.5)*En,y:(1-t.y)*.5*$n,z:t.z}}function Oc(i,t=!0){if(t){let o=kv(Bi.group.position);if(o.z<1&&Math.hypot(i.x-o.x,i.y-o.y)<28)return{kind:"sun",point:Bi.group.position.clone()}}Hv(i);let e=gp.pick(Bc.ray),n=[...ki.records.values()].filter(o=>o.group.visible).map(o=>o.group);if(n.length){let o=Bc.intersectObjects(n,!0)[0];if(o&&(!e||o.distance<e.distance+.03)){let a=o.object;for(;a&&!a.userData.memoryId;)a=a.parent;if(a)return{...o,kind:"memory",id:a.userData.memoryId}}}if(!e)return null;let s=e.object.userData,r=s.water?s.falls||e.object.name.includes("fall")?"falls":"water":s.kind==="foliage"?"forest":"land";return{...e,kind:r,id:ar[s.stopId]?s.stopId:kc(e.point)}}function Vv(i,t){if(!t||t.kind==="land"||sn){Ue.hidden=!0,ee.domElement.style.cursor="grab";return}let e=t.kind==="falls"?"water":t.kind==="memory"?"focus":t.kind;Ue.hidden=!1,Ue.dataset.kind=e,Ue.style.transform=`translate(${i.x}px,${i.y}px)`,Ue.classList.toggle("is-right",i.x>En-150),Ue.classList.toggle("is-bottom",i.y>$n-65),wn("cursor-label",t.kind==="sun"?"\u62D6\u52A8\u5149\u7EBF":t.kind==="forest"?"\u98CE\u8FC7\u6797\u68A2":t.kind==="memory"?"\u7559\u5728\u8FD9\u91CC\u7684\u4E00\u9875":ar[t.id]?.name||"\u6C34\u58F0"),ee.domElement.style.cursor=t.kind==="sun"?"ew-resize":t.kind==="memory"?"pointer":"grab"}function Gv(i){!i||Xe-Bh<.34||(i.kind==="forest"?(gi.center.value.copy(i.point),gi.force.value=Math.min(1,gi.force.value+.6),Hi.disturb(i.point,.55),Bh=Xe):i.kind==="water"&&(Hi.disturb(i.point,.22),Bh=Xe))}function fs(){clearTimeout(_p),or=null}function Wv(i){i?.kind==="water"&&(bn&&bn!==i.object&&(bn.material.opacity=1,bn.material.transparent=!1,bn.material.depthWrite=!0),or=bn=i.object,or.material.transparent=!0,or.material.depthWrite=!1,Ue.hidden=!0)}function lp(i){if(!i||i.kind==="sun")return;if(Hc(),fs(),i.kind==="memory"){Zh(i.id);return}let t=i.id||kc(i.point),e=i.kind==="water"||i.kind==="falls"?nn.anchors[t]:i.point,n=En<650?t==="wuhua"?24:19:t==="wuhua"?17:12.5;he.focus(e,{radius:n,phi:i.kind==="falls"?1.04:.84}),cr=t,lr(t),Vh=Xe}function Gh(){fs(),mo(!1),he.home(),cr=null,pi=null,Ue.hidden=!0,lr(null),document.body.classList.remove("exploring")}function Hh(){let[i,t]=[...Mn.values()];return{distance:Math.max(5,Math.hypot(i.x-t.x,i.y-t.y)),center:{x:(i.x+t.x)/2,y:(i.y+t.y)/2}}}function Xv(){let i=ee.domElement;i.addEventListener("contextmenu",e=>e.preventDefault()),i.addEventListener("pointerdown",e=>{if(e.button>2)return;e.preventDefault();let n=Nc(e);if(Mn.set(e.pointerId,n),i.setPointerCapture(e.pointerId),i.focus({preventScroll:!0}),Mn.size>=2){Yn=Hh(),pe=null,fs(),Ue.hidden=!0,rr();return}let s=Oc(n),r=e.button!==0||e.shiftKey;pe={pointerId:e.pointerId,start:n,last:n,moved:!1,hit:s,pan:r,sun:!r&&s?.kind==="sun",light:mi,down:Xe,touch:e.pointerType==="touch"},s?.kind==="water"&&!r&&(_p=setTimeout(()=>{pe&&!pe.moved&&Wv(s)},520)),r&&(i.style.cursor="grabbing")}),i.addEventListener("pointermove",e=>{let n=Nc(e);if(Mn.has(e.pointerId)&&Mn.set(e.pointerId,n),Mn.size>=2){let o=Hh();Yn&&(he.zoom(Math.log(Yn.distance/o.distance)/.00125),he.pan(o.center.x-Yn.center.x,o.center.y-Yn.center.y)),Yn=o;return}if(!pe){if(e.pointerType==="touch"||Xe-op<.075)return;op=Xe,pi=Oc(n),Vv(n,pi),Gv(pi);return}if(pe.pointerId!==e.pointerId)return;let s=n.x-pe.last.x,r=n.y-pe.last.y;pe.last=n,!pe.moved&&Math.hypot(n.x-pe.start.x,n.y-pe.start.y)>4&&(pe.moved=!0,fs(),pe.sun||rr()),pe.moved&&(Ue.hidden=!0,pe.sun?(mi=ip(pe.light-(n.x-pe.start.x)/Math.max(180,En*.45),0,1),i.style.cursor="ew-resize"):(pe.pan||e.shiftKey?he.pan(s,r):he.rotate(s,r),i.style.cursor="grabbing"))});function t(e,n=!1){if(Mn.delete(e.pointerId),fs(),Mn.size===1){let[o,a]=[...Mn.entries()][0];pe={pointerId:o,start:a,last:a,moved:!0,hit:null,pan:!1,sun:!1,down:Xe,touch:!0},Yn=null;return}if(Mn.size>1){pe=null,Yn=Hh();return}let s=pe;if(pe=null,Yn=null,i.style.cursor="grab",n||!s||s.moved||s.pan)return;let r=s.hit;if(r?.kind==="sun"?mi=mi<.5?1:0:r?.kind==="water"?(Yh.ripple(r.point,r.object),Hi.disturb(r.point,1),cr=r.id,lr(r.id)):r?.kind==="forest"?(Hi.disturb(r.point,1),gi.center.value.copy(r.point),gi.force.value=1):r?.kind==="memory"&&Zh(r.id),s.touch){let o=zh;o&&Xe-o.time<.36&&Math.hypot(o.point.x-s.start.x,o.point.y-s.start.y)<28?(lp(r),zh=null):zh={time:Xe,point:s.start}}}i.addEventListener("pointerup",e=>t(e)),i.addEventListener("pointercancel",e=>t(e,!0)),i.addEventListener("lostpointercapture",e=>{Mn.has(e.pointerId)&&t(e,!0)}),i.addEventListener("pointerleave",()=>{pe||(pi=null,Ue.hidden=!0)}),i.addEventListener("dblclick",e=>{e.preventDefault(),lp(Oc(Nc(e)))}),i.addEventListener("wheel",e=>{e.preventDefault(),fs(),rr(),Ue.hidden=!0,pi=null;let n=Nc(e),s=Oc(n,!1),r=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?$n:1);he.zoom(ip(r,-400,400),s?.point)},{passive:!1}),i.addEventListener("keydown",e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","+","=","-","_"].includes(e.key))if(e.preventDefault(),rr(),Ue.hidden=!0,e.key==="Home")Gh();else if(["+","="].includes(e.key))he.zoom(-180);else if(["-","_"].includes(e.key))he.zoom(180);else{let n=e.key==="ArrowLeft"?-35:e.key==="ArrowRight"?35:0,s=e.key==="ArrowUp"?-28:e.key==="ArrowDown"?28:0;e.shiftKey?he.pan(n,s):he.rotate(n,s)}})}function Zh(i){let t=ki.records.get(i);if(!t?.group.visible)return;Hc(),cr=i,lr(i);let e=new U(0,0,1).applyQuaternion(t.group.quaternion);he.focus(t.group.position,{radius:En<650?11:7.5,theta:Math.atan2(e.x,e.z),phi:1.18})}function qv(){Hc(),sn=ps||kc(he.target);let i=Oh(sn);wn("memory-place",ar[sn].name),zt("memory-line").value=i?.text||"",zt("memory-date").value=i?.date||"",zi=i?.photo||null,zn++,po=!1,zt("memory-save").disabled=!1,zt("memory-photo").value="",wn("memory-status",""),zt("memory-studio").hidden=!1,document.body.classList.add("writing"),zt("studio-toggle").setAttribute("aria-expanded","true"),Ue.hidden=!0,Wh(),zt("memory-line").focus({preventScroll:!0})}function mo(i=!0){sn&&(zn++,sn=null,zt("memory-studio").hidden=!0,document.body.classList.remove("writing"),zt("studio-toggle").setAttribute("aria-expanded","false"),i&&zt("studio-toggle").focus({preventScroll:!0}))}function Wh(){zt("memory-photo-preview").hidden=!zi,zt("memory-remove-photo").hidden=!zi,zi?zt("memory-photo-preview").src=zi:zt("memory-photo-preview").removeAttribute("src")}function hp(){zt("about-sheet").hidden=!0,document.querySelector(".experience").inert=!1,zt("about-toggle").setAttribute("aria-expanded","false"),zt("about-toggle").focus({preventScroll:!0})}function Yv(){zt("home-view").onclick=Gh,document.querySelector(".brand").onclick=i=>{i.preventDefault(),Gh()},zt("zoom-in").onclick=()=>{rr(),he.zoom(-220)},zt("zoom-out").onclick=()=>{rr(),he.zoom(220)},zt("time-toggle").onclick=()=>{mi=mi<.5?1:0},zt("sound-toggle").onclick=async()=>{try{let i=await zc.toggle();zt("sound-toggle").setAttribute("aria-pressed",String(i)),zt("sound-toggle").setAttribute("aria-label",i?"\u5173\u95ED\u5C71\u8C37\u73AF\u5883\u58F0":"\u6253\u5F00\u5C71\u8C37\u73AF\u5883\u58F0"),zt("sound-toggle").title=i?"\u5173\u95ED\u5C71\u8C37\u73AF\u5883\u58F0":"\u6253\u5F00\u5C71\u8C37\u73AF\u5883\u58F0"}catch(i){xo(i.message)}},zt("studio-toggle").onclick=()=>sn?mo():qv(),zt("memory-close").onclick=()=>mo(),zt("memory-photo").addEventListener("change",async i=>{let t=i.target.files?.[0];if(!t||!sn)return;let e=++zn;po=!0,zt("memory-save").disabled=!0,wn("memory-status","\u6B63\u5728\u628A\u7167\u7247\u505A\u6210\u4E00\u5F20\u5C0F\u5C0F\u7684\u7EB8\u7247\u2026");try{let n=await jf(t);if(e!==zn)return;zi=n,Wh(),wn("memory-status","\u7167\u7247\u51C6\u5907\u597D\u4E86\u3002")}catch(n){e===zn&&wn("memory-status",n.message)}finally{e===zn&&(po=!1,zt("memory-save").disabled=!1)}}),zt("memory-remove-photo").onclick=()=>{zn++,zi=null,po=!1,zt("memory-save").disabled=!1,zt("memory-photo").value="",Wh()},zt("memory-save").onclick=async()=>{if(!sn||po)return;let i=sn,t=zn;zt("memory-save").disabled=!0;try{let e=Kf(i,{text:zt("memory-line").value,date:zt("memory-date").value,photo:zi});await ki.set(i,e),sn===i&&zn===t&&(mo(),Zh(i)),xo("\u8FD9\u4E00\u9875\u5DF2\u7ECF\u7559\u5728\u5C71\u6C34\u4E4B\u95F4\u3002")}catch(e){sn===i&&zn===t?wn("memory-status",e.message):xo(e.message)}finally{sn===i&&zn===t&&(zt("memory-save").disabled=!1)}},zt("about-toggle").onclick=()=>{Ue.hidden=!0,zt("about-sheet").hidden=!1,zt("about-toggle").setAttribute("aria-expanded","true"),document.querySelector(".experience").inert=!0,zt("about-close").focus({preventScroll:!0})},zt("about-close").onclick=hp,document.addEventListener("keydown",i=>{i.key==="Escape"&&(zt("about-sheet").hidden?mo():hp())}),zt("capture-postcard").onclick=Zv}async function Zv(){ee.render(pn,Sn),ki.update(Sn,En,$n);let i=document.createElement("canvas");i.width=1800,i.height=1300;let t=i.getContext("2d");t.fillStyle=`#${qh.clone().lerp(dp,Ee).getHexString()}`,t.fillRect(0,0,1800,1300);let e=ee.domElement.width,n=ee.domElement.height,s=Math.min(1700/e,1080/n),r=e*s,o=n*s;t.drawImage(ee.domElement,(1800-r)/2,(1120-o)/2,r,o),ki.drawToPostcard(t,Sn,En,$n,s*ee.getPixelRatio(),(1800-r)/2,(1120-o)/2),t.strokeStyle="#aaa18b",t.lineWidth=1,t.beginPath(),t.moveTo(65,1158),t.lineTo(1735,1158),t.stroke(),t.fillStyle="#4c5446",t.font='36px Georgia,"Songti SC",serif',t.fillText(`\u4E5D\u5BE8 \xB7 \u6C34\u884C\u8BB0${ps?" / "+ar[ps].name:""}`,70,1210),t.font="17px Georgia",t.fillText("JIUZHAI \u2014 THE SHAPE OF WATER",72,1251),t.textAlign="right",t.fillText(new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date),1728,1245);let a=await new Promise(l=>i.toBlob(l,"image/png"));if(!a){xo("\u8FD9\u5E45\u753B\u9762\u6682\u65F6\u65E0\u6CD5\u5BFC\u51FA\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u3002");return}let c=document.createElement("a");c.href=URL.createObjectURL(a),c.download="jiuzhai-the-shape-of-water.png",c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),5e3),xo("\u6B64\u523B\u5C71\u6C34\uFF0C\u5DF2\u505A\u6210\u4E00\u5F20\u660E\u4FE1\u7247\u3002")}function up(){let i=We.getBoundingClientRect();En=Math.max(1,i.width),$n=Math.max(1,i.height),ee.setSize(En,$n),he.resize(En,$n),Ue.hidden=!0}function xp(i){Ee=Math.abs(mi-Ee)<1e-4?mi:Zn(Ee,mi,go?1:1-Math.exp(-i*3)),pn.background.copy(qh).lerp(dp,Ee),Hn.color.copy(fp).lerp(zv,Ee),Hn.intensity=Zn(2.65,2.15,Ee),pp.intensity=Zn(1.75,1.1,Ee),mp.intensity=Zn(.24,.16,Ee),Hn.position.set(Zn(-13,12,Ee),Zn(24,12,Ee),10),Bi.group.position.set(Zn(6.7,-6.5,Ee),Zn(12,11.3,Ee),-9.4),Bi.group.quaternion.copy(Sn.quaternion),Bi.disk.material.color.set(Ee>.5?"#ce8c65":"#dca96c"),Bi.fold.material.color.set(Ee>.5?"#e2a779":"#edc08a");let t=Ee>.5?"\u66AE\u8272":"\u6674\u65E5",e=zt("time-toggle").querySelector("span");e.textContent!==t&&(e.textContent=t),zt("time-toggle").setAttribute("aria-pressed",String(Ee>.5)),zt("time-toggle").setAttribute("aria-label",Ee>.5?"\u5207\u6362\u4E3A\u6668\u5149":"\u5207\u6362\u4E3A\u66AE\u8272")}function Xh(i){if(Oi=null,!fo)return;Oi=requestAnimationFrame(Xh);let t=ee.isSoftwareRenderer?he.moving||pe?42:62:0;if(i-_o<t)return;let e=Math.min((i-_o)/1e3||.016,.16);if(_o=i,Xe+=e,!zt("about-sheet").hidden)return;if(he.update(e),xp(e),gi.time.value=go?0:Xe,gi.force.value=Math.max(0,gi.force.value-e*.45),Fc=Zn(Fc,or?1:0,1-Math.exp(-e*5)),bn&&(bn.material.opacity=Zn(.99,.46,Fc),!or&&Fc<.004&&(bn.material.opacity=1,bn.material.transparent=!1,bn.material.depthWrite=!0,bn=null)),Yh.update(e),Hi.update(Xe,e,{focus:he.target,daylight:Ee,hoverPoint:pi?.point,hoverKind:pi?.kind}),ee.render(pn,Sn),ki.update(Sn,En,$n),!cr&&!sn&&!pe&&!he.moving&&Xe-Vh>.75){let s=he.radius<he.homeRadius*.7?kc(he.target):null;s!==ps&&lr(s),Vh=Xe}let n=Math.min(he.target.distanceTo(nn.anchors.pearl),he.target.distanceTo(nn.anchors.nuorilang));zc.update((Math.sin(he.theta)+1)/2,Ee,n),We.dataset.cameraRadius=he.radius.toFixed(2),We.dataset.atmosphereTime=Xe.toFixed(1),We.dataset.renderQuality=ee.info.render.quality||"webgl",We.dataset.frameMs=(ee.info.render.frameMilliseconds||0).toFixed(1)}async function $v(){let i=document.createElement("canvas"),t=null;try{t=i.getContext("webgl2",{alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{}ee=t?new fc({canvas:i,context:t,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}):new Rc,ee.setPixelRatio(ee.isSoftwareRenderer?1.25:Math.min(devicePixelRatio||1,2)),ee.setClearColor("#fff0df",1),ee.outputColorSpace=Te,ee.toneMapping=Ea,ee.toneMappingExposure=1.08,ee.shadowMap.enabled=!0,ee.shadowMap.type=_a,ee.domElement.setAttribute("aria-label","\u4E5D\u5BE8\u6C9F\u7EB8\u96D5\u5C71\u6C34\u3002\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0CShift \u6216\u9F20\u6807\u53F3\u952E\u62D6\u52A8\u5E73\u79FB\uFF0C\u53CC\u51FB\u9760\u8FD1\u98CE\u666F\u3002\u65B9\u5411\u952E\u73AF\u987E\uFF0C\u52A0\u51CF\u952E\u7F29\u653E\uFF0CHome \u56DE\u5230\u5168\u666F\u3002"),ee.domElement.tabIndex=0,ee.domElement.style.touchAction="none",We.append(ee.domElement),Sn=new Oe(38,1,.1,240),pn.background=qh.clone(),Hn.castShadow=!0,Hn.shadow.mapSize.set(2048,2048),Object.assign(Hn.shadow.camera,{left:-19,right:19,top:19,bottom:-19,near:1,far:70}),Hn.shadow.bias=-18e-5,Hn.shadow.normalBias=.022,Hn.shadow.radius=3,pn.add(Hn,pp,mp,Hn.target);let e=new jt(new ai(160,160),new Wr({opacity:.19}));e.rotation.x=-Math.PI/2,e.position.y=-1.08,e.receiveShadow=!0,pn.add(e),wn("loading-message","\u5C71\u5DDD\u4E0E\u6E56\u5CB8\uFF0C\u6B63\u5728\u627E\u5230\u5F7C\u6B64");let n=fetch("./assets/paper-light-v4-water-light.bin").then(o=>o.ok?o.arrayBuffer():null).catch(()=>null);await new Promise(o=>requestAnimationFrame(o)),nn=Df(),pn.add(nn.group);let s=await n;rp=s?Nf(nn.group,s,{software:!!ee.isSoftwareRenderer,aoStrength:.27,shadowStrength:.19,minimumBrightness:.66,waterWeight:.12}):{applied:!1},ep(nn.group,gi),gp=Vf(nn.group),Bi=Qf(),pn.add(Bi.group),Yh=tp(pn,{landscape:nn,reducedMotion:go}),Hi=qf({scene:pn,landscape:nn,software:!!ee.isSoftwareRenderer,reducedMotion:go}),ki=np(pn,nn,kh,!!ee.isSoftwareRenderer,ee),await Promise.all(kh.map(o=>ki.set(o.id,Oh(o.id))));let r=We.getBoundingClientRect();he=kf({camera:Sn,groundHeight:nn.groundHeight,width:r.width,height:r.height,reducedMotion:go}),up(),xp(0),Hi.update(0,0,{focus:he.target,daylight:0}),Xv(),Yv(),lr(null),ee.compile(pn,Sn),ee.render(pn,Sn),document.body.classList.add("ready"),zt("loading").hidden=!0,We.dataset.renderer=ee.isSoftwareRenderer?"software-geometry":"webgl2",We.dataset.paperLight=rp.applied?"ready":"fallback",We.dataset.people="0",We.dataset.navigation="free",We.dataset.sceneVersion="4-water-light",We.dataset.triangles=String(nn.metadata.triangles),We.dataset.atmosphere=JSON.stringify(Hi.metadata),window.addEventListener("resize",()=>{clearTimeout(ap),ap=setTimeout(up,80)}),document.addEventListener("visibilitychange",()=>{fo=!document.hidden,fo?(_o=performance.now(),zc.resume(),Oi===null&&(Oi=requestAnimationFrame(Xh))):(fs(),Mn.clear(),pe=null,Yn=null,Ue.hidden=!0,Oi!==null&&cancelAnimationFrame(Oi),Oi=null,zc.suspend())}),fo=!document.hidden,_o=performance.now(),fo&&(Oi=requestAnimationFrame(Xh))}$v().catch(i=>{console.error(i),wn("loading-message","\u5C71\u6C34\u6682\u65F6\u6CA1\u6709\u5C55\u5F00\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u518D\u8BD5\u3002"),zt("loading").querySelector(".loading-subline").textContent=i.message});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

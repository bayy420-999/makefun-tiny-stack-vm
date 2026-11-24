import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as K}from"fs";
let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
R(I).map(d=>{d=I+"/"+d;let[a,z]=run(F(d+"/program.bin"),F(d+"/input.bin"));d=d.replace(I,O);K(d);W(d+"/stdout.bin",a);W(d+"/exit.txt",""+z)});
function run(p,q){
let D=[],C=[],M=[],o=new Uint8Array(65536),s=0,c=0,u=0,t=1e6,l=0,i=0,T="0Aq46:;?zzzzzzzz999999959995999z999zzzzzzzzzzzzzPTTP0zzzzzzzzzzz58zzzzzzzzzzzzzz4414",E=x=>[o.slice(0,l),x];
for(;;){
if(!t--|u<0|u>=p.length)return E(9+!~t);
let b=p[u],k=T.charCodeAt(b)-48;
if(!(k<66))return E(5);
let m=k>>4,f=k>>2&3;
if((u+=1+m)>p.length)return E(9);
if(s<f|s-f+(k&3)>256)return E(s<f?2:3);
if(!b)return E(0);
else if(b<3)D[s++]=b==1?p.readInt8(u-1):p.readInt32LE(u-4);
else if(b==3)s--;
else if(b==4|b==6)D[s]=D[s-b/2+1],s++;
else if(b==5)[D[s-1],D[s-2]]=[D[s-2],D[s-1]];
else if(b==7)[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];
else if(b==23|b==27)D[s-1]=b==23?-D[s-1]|0:~D[s-1];
else if(b<35){
let a=D[s-2],d=D[s-1],j=b-16;
if(j>2&j<7&!d)return E(4);
D[--s-1]=j<3?j<1?a+d|0:j<2?a-d|0:Math.imul(a,d):j<7?j<4?(a/d)|0:j<5?a%d:j<6?(a>>>0)/(d>>>0)|0:(a>>>0)%(d>>>0)|0:j<11?j<9?a&d:j<10?a|d:a^d:j<15?j<13?a<<d:j<14?a>>d:a>>>d|0:j<17?+(a==d):+(j<18?a<d:a>>>0<d>>>0);
}else if(b<53){
let w=p[u-2]|p[u-1]<<8;
if(b<49)u+=w<<16>>16;
else if(b<51){if((b==49)==!D[--s])u+=w<<16>>16}
else if(b==51){if(c>63)return E(7);C[c++]=u;u=w}
else{if(!c)return E(8);u=C[--c]}
}else if(b<66){
let a=D[s-1];
if(a>>>0>255)return E(6);
if(b<65)D[s-1]=M[a]|0;else M[a]=D[s-=2];
}else{
if(b==80){let v=""+D[--s];if(l+v.length>65536)return E(11);o.set(Buffer.from(v),l),l+=v.length}
else if(b==81){if(l>>16)return E(11);o[l++]=D[--s]&255}
else if(b==82)D[s++]=q[i++]??-1;
else return E(D[--s]&255);
}
}
}

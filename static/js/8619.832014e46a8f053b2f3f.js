(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8619,6969],{78619:(e,s,a)=>{"use strict";a.r(s),a.d(s,{titre:()=>l,default:()=>n});var t=a(66969),r=a(55339),i=a(44393);const l="Construire des quadrilatères particuliers";function n(){t.default.call(this),this.titre=l,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,s,a,t,l,n,$,o,u,m,c,p,h,d,x,b,g,y,C,D,M,P,I,q,R,k,S,F,f,Y,Q,K,w,L,H,B,X,z,v,W,G,V,J="",N="",E=function(e){return(0,r.Gag)((0,r.nSR)(1,e))+Number((0,r.nSR)(1,e)).toString()},T=(0,r.GVn)(5,"QO",!0),A=`$${T[0]+T[1]+T[2]+T[3]}$`,O=[],j=[];switch(L=1==this.sup?[1,2,3]:2==this.sup?[4,5,6,7]:[1,2,3,4,5,6,7],w=(0,r.q$q)(L),w){case 1:e=(0,i.xmu)(0,0,T[0]),u=2*(0,r.nSR)(20,25),p=(0,r.n0o)((0,r.nSR)(20,30,u/2)/5),u=(0,r.n0o)(u/10),$=5*(Math.abs(p-u)+2),o=5*(u+p-3),$=(0,r.n0o)((0,r.nSR)(Math.min($,o),Math.max($,o))/5),s=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[1]),t=(0,i.asV)((0,i.z7e)(e,p),(0,i.z7e)(s,$),T[3]),l=(0,i.Q2H)(s,t,T[4]),a=(0,i.Wnp)(e,l,180,T[2]),J=`${A} est un parallélogramme tel que `,J+=`$${T[0]+T[1]}=${(0,r.euh)(u)}$ cm, $${T[0]+T[3]}=${(0,r.euh)(p)}$ cm, $${T[1]+T[3]}=${(0,r.euh)($)}$ cm.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,s),(0,i.BD1)(e,s)),this.correctionDetaillee&&(N+=`Comme ${A} est un parallélogramme, ses diagonales se coupent en leur milieu.<br>`,N+=`Soit $${T[4]}$ le milieu de $[${T[1]+T[3]}]$. $${T[2]}$ est le symétrique de $${T[0]}$ par rapport à $${T[4]}$.`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[3]}$.<br>Puis $${T[4]}$, le milieu de $[${T[1]+T[3]}]$ et enfin le point $${T[2]}$.<br>`),(0,i.InT)(s,t)!=(0,i.InT)(e,a)?(N+=`Comme $${T[0]+T[3]}\\ne ${T[0]+T[1]}$ et que $${T[0]+T[2]}\\ne ${T[3]+T[1]}$, le paralélogramme ${A} n'est ni un losange, ni un rectangle.<br>`,N+=`${A} ${(0,r.HzX)("est un simple paraléllogramme")}.<br>`):N+=`Comme $$${T[0]+T[2]} = ${T[3]+T[1]}$ et que $${T[0]+T[3]}\\ne ${T[0]+T[1]}$, le paralélogramme ${A} est un rectangle.<br>`,j.push((0,i.Y2F)(e,s,"black",-.5),(0,i.Y2F)(e,t,"black",.5)),C=(0,i.ItP)(e,t,15),D=(0,i.ItP)(s,t,15),M=(0,i.ItP)(l,a,20),y=(0,i.uGk)(e,s,t),v=Math.min(e.x,s.x,t.x)-.8,W=Math.min(e.y,s.y,t.y)-.8,G=Math.max(e.x,s.x,t.x)+.8,V=Math.max(e.y,s.y,t.y)+.8;break;case 2:l=(0,i.xmu)(0,0,T[4]),u=2*(0,r.nSR)(25,35),p=(0,r.n0o)((0,r.nSR)((u+4)/2,45)/5),u=(0,r.n0o)(u/10),g=(0,r.nSR)(100,130),e=(0,i.dJt)(l,u/2,(0,r.nSR)(-30,30),T[0]),s=(0,i.$7o)(e,l,g,p/u,T[1]),t=(0,i.Wnp)(s,l,180,T[3]),a=(0,i.Wnp)(e,l,180,T[2]),J=`${A} est un parallélogramme de centre $${T[4]}$ tel que `,J+=`$${T[0]+T[2]}=${(0,r.euh)(u)}$ cm, $${T[1]+T[3]}=${(0,r.euh)(p)}$ cm et $\\widehat{${T[0]+T[4]+T[1]}}=${g}\\degree$  dans le sens inverse des aiguilles d'une montre.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,l),(0,i.BD1)(e,l)),this.correctionDetaillee&&(N+=`Comme ${A} est un parallélogramme, ses diagonales se coupent en leur milieu $${T[4]}$.<br>`,N+=`$${T[2]}$ est le symétrique de $${T[0]}$ par rapport à $${T[4]}$. La distance ${T[4]+T[1]} est égale à la moitié de ${T[1]+T[3]}.<br>`,N+=`Construisons tout d'abord le point $${T[2]}$ symétrique de $${T[0]}$ par rapport à $${T[4]}$.<br>`,N+=`Construisons ensuite un angle $\\widehat{${T[0]+T[4]+"x"}}$ de mesure $${g}\\degree$ dans le sens inverse des aiguilles d'une montre.<br>`,N+=`Puis le point $${T[1]}$ sur $[${T[4]}x)$ et son symétrique $${T[3]}$ par rapport à $${T[4]}$ situés tous les deux à $${(0,r.k$K)((0,r.vbX)(p/2))}$ cm de $${T[4]}$.<br>`),v=Math.min(e.x,s.x,a.x)-.8,W=Math.min(e.y,s.y,a.y)-.8,G=Math.max(e.x,s.x,a.x)+.8,V=Math.max(e.y,s.y,a.y)+.8;break;case 3:e=(0,i.xmu)(0,0,T[0]),u=2*(0,r.nSR)(26,40),p=(0,r.n0o)((0,r.nSR)(15,25)/5),u=(0,r.n0o)(u/10),s=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[1]),t=(0,i.$7o)(s,e,90,p/u,T[3]),l=(0,i.Q2H)(s,t,T[4]),a=(0,i.Wnp)(e,l,180,T[2]),J=`${A} est un parallélogramme tel que `,J+=`$${T[0]+T[1]}=${(0,r.euh)(u)}$ cm, $${T[0]+T[3]}=${(0,r.euh)(p)}$ cm, $${T[1]+T[3]}=${T[0]+T[2]}$.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,s),(0,i.BD1)(e,s)),N+=`Comme ${A} est un parallélogramme, ses diagonales se coupent en leur milieu et comme de plus elles ont la même longueur, ${(0,r.HzX)(A)} ${(0,r.HzX)(" est donc un rectangle")}.<br>`,this.correctionDetaillee&&(N+=`Soit $${T[4]}$ le milieu de $[${T[1]+T[3]}]$. $${T[2]}$ est le symétrique de $${T[0]}$ par rapport à $${T[4]}$.<br>`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[3]}$ puis $${T[4]}$ au milieu de $[${T[1]+T[3]}]$.<br>`,N+=`Les quatre sommets de ${A} sont sur le cercle de centre $${T[4]}$ passant par $${T[0]}$. $[${T[0]}${T[2]}]$ et $[${T[1]}${T[3]}]$ sont des diamètres de ce cercle.<br>`),j.push((0,i.Y2F)(e,s,"black",-.5),(0,i.Y2F)(e,t,"black",.5)),C=(0,i.LL6)(l,e),C.color="gray",C.opacite=.5,M=(0,i.ItP)(l,a,20),y=(0,i.uGk)(e,s,t),v=Math.min(e.x,s.x,t.x)-.8,W=Math.min(e.y,s.y,t.y)-.8,G=Math.max(e.x,s.x,t.x)+.8,V=Math.max(e.y,s.y,t.y)+.8;break;case 4:e=(0,i.xmu)(0,0,T[0]),u=(0,r.nSR)(15,30),p=(0,r.n0o)((0,r.nSR)(15,20,u)/5),u=(0,r.n0o)(u/5),s=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[1]),t=(0,i.asV)((0,i.z7e)(e,u),(0,i.z7e)(s,p),T[3]),l=(0,i.Q2H)(s,t,T[4]),a=(0,i.Wnp)(e,l,180,T[2]),J=`${A} est un parallélogramme tel que `,J+=`$${T[0]+T[1]}=${(0,r.euh)(u)}$ cm, $${T[1]+T[3]}=${(0,r.euh)(p)}$ cm, $[${T[0]+T[2]}]\\perp [${T[1]+T[3]}]$.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,s),(0,i.BD1)(e,s)),N+=`Comme ${A} est un parallélogramme dont les diagonales $[${T[0]+T[2]}]$ et $[${T[1]+T[3]}]$ sont perpendiculaires, ${A}${(0,r.HzX)(" est un losange")}.<br>`,this.correctionDetaillee&&(N+=`Il en résulte que le triangle $${T[0]+T[1]+T[3]}$ est isoclèle en $${T[0]}$.<br>`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[3]}$ puis $${T[4]}$, le milieu de $[${T[1]+T[3]}]$ et enfin le point $${T[2]}$.<br>`),j.push((0,i.Y2F)(e,s,"black",-.5),(0,i.Y2F)(e,t,"black",.5)),C=(0,i.ItP)(e,t,15),D=(0,i.ItP)(s,t,15),M=(0,i.ItP)(l,a,20),y=(0,i.uGk)(e,s,t),v=Math.min(e.x,s.x,t.x)-.8,W=Math.min(e.y,s.y,t.y)-.8,G=Math.max(e.x,s.x,t.x)+.8,V=Math.max(e.y,s.y,t.y)+.8;break;case 5:e=(0,i.xmu)(0,0,T[0]),u=2*(0,r.nSR)(20,35),p=(0,r.n0o)((0,r.nSR)((u-4)/2,35)/5),u=(0,r.n0o)(u/10),g=(0,r.nSR)(95,120),s=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[1]),t=(0,i.$7o)(s,e,g,p/u,T[3]),l=(0,i.Q2H)(s,t,T[4]),a=(0,i.Wnp)(e,l,180,T[2]),J=`${A} est un parallélogramme de centre $${T[4]}$ tel que `,J+=`$${T[0]+T[1]}=${(0,r.euh)(u)}$ cm, $${T[0]+T[3]}=${(0,r.euh)(p)}$ cm et $\\widehat{${T[1]+T[2]+T[3]}}=${g}\\degree$  dans le sens inverse des aiguilles d'une montre.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,s),(0,i.BD1)(e,s)),this.correctionDetaillee&&(N+=`Comme ${A} est un parallélogramme, ses angles opposés ont la même mesure, donc $\\widehat{${T[3]+T[0]+T[1]}}=${g}\\degree$.<br>`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[3]}$.<br>`,N+=`Puis le point $${T[2]}$ symétrique  de $${T[0]}$ par rapport à $${T[4]}$, milieu de $[${T[1]+T[3]}]$.<br>`),N+=`Comme ${A} est un parallélogramme qui ne possède pas d'angle droit et que ses côtés consécutifs sont de longueurs différentes, ${(0,r.HzX)("c'est un simple parallélogramme")}.<br>`,C=(0,i.ItP)(e,t,15),D=(0,i.ItP)(e,s,15),M=(0,i.ItP)(l,a,20),y=(0,i.uGk)(e,s,t),v=Math.min(e.x,s.x,t.x)-.8,W=Math.min(e.y,s.y,t.y)-.8,G=Math.max(e.x,s.x,t.x)+.8,V=Math.max(e.y,s.y,t.y)+.8;break;case 6:e=(0,i.xmu)(0,0,T[0]),u=2*(0,r.nSR)(20,35),m=2*(0,r.nSR)(15,20),c=(0,r.n0o)(u+2*(0,r.nSR)(5,10))-m,u=(0,r.n0o)(u/10),m=(0,r.n0o)(m/10),c=(0,r.n0o)(c/10),s=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[1]),l=(0,i.asV)((0,i.z7e)(e,m),(0,i.z7e)(s,c),T[4]),a=(0,i.Wnp)(e,l,180,T[2]),t=(0,i.Wnp)(s,l,180,T[3]),J=`${A} est un parallélogramme de centre $${T[4]}$ tel que `,J+=`$${T[0]+T[1]}=${(0,r.euh)(u)}$ cm, $${T[4]+T[2]}=${(0,r.euh)(m)}$ cm et $${T[4]+T[3]}=${(0,r.euh)(c)}$ cm.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,s),(0,i.BD1)(e,s)),this.correctionDetaillee&&(N+=`Comme ${A} est un parallélogramme, ses diagonales se coupent en leur milieu $${T[4]}$.<br>`,N+=`On en déduit que $${T[0]+T[4]}=${T[4]+T[2]}=${(0,r.euh)(m)}$ cm et que $${T[1]+T[4]}=${T[4]+T[3]}=${(0,r.euh)(c)}$ cm.<br>`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[4]}$.<br>`,N+=`Puis les points $${T[2]}$ et $${T[3]}$ symétriques respectifs de $${T[0]}$ et $${T[1]}$ par rapport à $${T[4]}$.<br>`),u*u!=m*m+c*c?(N+=`le triangle $${T[0]+T[1]+T[4]}$ n'est pas un triangle rectangle, donc les diagonales ne sont pas perpendiculaires.<br>`,N+=m==c?`Les diagonales ont la même longueur. ${A} est un parallélogramme dont les diagonales sont de même longueur, ${(0,r.HzX)("c'est donc un rectangle")}.<br>`:`De plus elles n'ont pas la même longueur, donc ${A} ${(0,r.HzX)("est un simple parallélogramme")}.<br>`):(N+=`Le triangle $${T[0]+T[1]+T[4]}$ est un triangle rectangle, donc les diagonales sont perpendiculaires.<br>`,m==c&&(N+=`de plus les diagonales ont même longueur. ${A} est un parallélogramme dont les diagonales sont perpendiculaires et de même longueur, ${(0,r.HzX)("c'est donc un carré")}.<br>`)),C=(0,i.ItP)(e,l,20),D=(0,i.ItP)(s,l,20),M=(0,i.ItP)(l,a,30),P=(0,i.ItP)(l,t,30),y=(0,i.uGk)(e,s,l),v=Math.min(e.x,s.x,l.x)-.8,W=Math.min(e.y,s.y,l.y)-.8,G=Math.max(e.x,s.x,l.x)+.8,V=Math.max(e.y,s.y,l.y)+.8;break;case 7:e=(0,i.xmu)(0,0,T[0]),u=(0,r.n0o)((0,r.nSR)(30,40)/5),m=(0,r.nSR)(25,40),c=(0,r.nSR)(30,45,m),a=(0,i.dJt)(e,u,(0,r.nSR)(-30,30),T[2]),l=(0,i.Q2H)(e,a,T[4]),s=(0,i.Wnp)(a,e,m),h=(0,i.VTK)(e,s),t=(0,i.Wnp)(e,a,-c),d=(0,i.VTK)(a,t),s=(0,i.H$o)(h,d,T[1]),t=(0,i.Wnp)(s,l,180,T[3]),J=`${A} est un parallélogramme de centre $${T[4]}$ tel que `,J+=`$${T[0]+T[2]}=${(0,r.euh)(u)}$ cm.<br>$\\widehat{${T[4]+T[0]+T[1]}}=${m}\\degree$  dans le sens inverse des aiguilles d'une montre.<br>$\\widehat{${T[4]+T[2]+T[1]}}=${c}\\degree$  dans le sens des aiguilles d'une montre.<br>`,J+=`Construire le parallélogramme ${A} et préciser si c'est un paraléllogramme particulier.<br>`,O.push((0,i.L6P)(e,a),(0,i.BD1)(e,a)),this.correctionDetaillee&&(N+=`Comme ${A} est un parallélogramme, ses côtés opposés sont parallèles.<br>`,N+=`La diagonale $[${T[0]}${T[2]}]$ forme des angles $\\widehat{${T[4]+T[0]+T[1]}}$ et $\\widehat{${T[4]+T[2]+T[3]}}$ alternes-internes égaux.<br>`,N+=`De même les angles $\\widehat{${T[4]+T[0]+T[3]}}$ et $\\widehat{${T[4]+T[2]+T[1]}}$ sont alternes-internes égaux eux aussi.<br>`,N+=`On en déduit que $\\widehat{${T[4]+T[0]+T[3]}}=\\widehat{${T[4]+T[2]+T[1]}}=${(0,r.b1)(c,"red")}\\degree$ et que $\\widehat{${T[4]+T[0]+T[1]}}=\\widehat{${T[4]+T[2]+T[3]}}=${(0,r.b1)(m,"blue")}\\degree$.<br>`,N+=`Construisons tout d'abord le triangle $${T[0]+T[1]+T[2]}$.<br>`,N+=`Puis le points $${T[3]}$ symétrique de $${T[1]}$ par rapport à $${T[4]}$.<br>`),N+=`Le triangle $${T[0]+T[1]+T[2]}$ n'est pas un triangle isocèle car ses angles ne sont pas égaux.<br>`,N+=`De plus dans ce triangle  l'angle $\\widehat{${T[0]+T[1]+T[2]}}$ mesure $${180-m-c}\\degree$ donc ${A} ${(0,r.HzX)("est un simple parallélogramme")}.<br>`,C=(0,i.DQC)(l,e,s,"blue",1,(0,r.euh)(m)+"°"),D=(0,i.DQC)(l,a,s,"red",1,(0,r.euh)(c)+"°"),M=(0,i.ItP)(l,t,30),I=(0,i.L6P)(l),I.style="+",j.push(C,D),y=(0,i.uGk)(e,s,a),v=Math.min(e.x,s.x,a.x)-.8,W=Math.min(e.y,s.y,a.y)-.8,G=Math.max(e.x,s.x,a.x)+.8,V=Math.max(e.y,s.y,a.y)+.8}switch(n=(0,i.uGk)(e,s,a,t),H=Math.min(e.x,s.x,a.x,t.x)-2,B=Math.min(e.y,s.y,a.y,t.y)-2,X=Math.max(e.x,s.x,a.x,t.x)+2,z=Math.max(e.y,s.y,a.y,t.y)+2,f=E(5),Y=E(5),Q=E(5),R=(0,i.Ihq)(s.x,s.y,5,.3,Q),q=(0,i.Ihq)(a.x,a.y,5,.3,f),K=(0,i.Ihq)(t.x,t.y,5,.3,Y),k=(0,i.cqN)({x:R[0],y:R[1],rang:5,num:"",taille:.4}),k.taille=.3,k.color="gray",k.opacite=.7,S=(0,i.cqN)({x:q[0],y:q[1],rang:5,num:"",taille:.4}),S.taille=.3,S.color="gray",S.opacite=.7,F=(0,i.cqN)({x:K[0],y:K[1],rang:5,num:"",taille:.4}),F.taille=.3,F.color="gray",F.opacite=.7,h=(0,i.EXn)(l,e),d=(0,i.EXn)(l,s),x=(0,i.EXn)(l,a),b=(0,i.EXn)(l,t),w){case 1:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},j,C,D,y[0],y[1],(0,i.Y2F)(t,s))+"<br>"),O.push(F,S),j.push(n[0],n[1],M),j.push(F,S,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t),(0,i.Y2F)(l,s));break;case 2:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},(0,i.KoI)("||","red",e,l,l,a),M,h,x,d,(0,i.DQC)(e,l,s,"black",1,g+"°"),(0,i.L6P)(e,l,a),(0,i.BD1)(e,l,a),(0,i.Ots)("x",s.x-.5,s.y),(0,i.Y2F)(e,l),(0,i.Y2F)(l,a))+"<br>"),O.push(F,S,k),j.push(n[0],n[1],M,(0,i.Y2F)(l,t)),j.push(F,S,k,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t),(0,i.DQC)(e,l,s,"black",1,g+"°"));break;case 3:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},j,y[0],y[1],(0,i.lvA)(t,e,s))+"<br>"),O.push(F,S),j.push(n[0],n[1],C,M),j.push(F,S,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("||","red",s,l,l,t));break;case 4:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},j,y[0],y[1],(0,i.Y2F)(t,s),D,(0,i.ItP)(e,s,60),(0,i.ItP)(e,t,60))+"<br>"),O.push(F,S),j.push(n[0],n[1],M,(0,i.Y2F)(l,s)),j.push((0,i.lvA)(e,l,t),F,S,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t));break;case 5:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},y[0],y[1],(0,i.H2X)(e,s),(0,i.H2X)(e,t),(0,i.DQC)(s,e,t,"black",1,g+"°"),(0,i.Y2F)(e,s),(0,i.Y2F)(e,t))+"<br>"),O.push(F,S),j.push(n[0],n[1],M),j.push(F,S,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t),(0,i.DQC)(s,e,t,"black",1,g+"°"),(0,i.Y2F)(s,e),(0,i.Y2F)(e,t),(0,i.Y2F)(a,s),(0,i.Y2F)(t,a));break;case 6:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},j,y[0],y[1],(0,i.Y2F)(s,e),(0,i.Y2F)(l,s),(0,i.Y2F)(e,l),C,D,I)+"<br>"),O.push(F,S),j.push(n[0],n[1],M,P),j.push(F,S,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t));break;case 7:this.correctionDetaillee&&(N+=(0,i.iR9)({xmin:v,ymin:W,xmax:G,ymax:V,pixelsParCm:25,scale:1},j,y[0],y[1],(0,i.Y2F)(a,l),(0,i.Y2F)(l,e),(0,i.BD1)(l),I,(0,i.KoI)("||","red",e,l,l,a))+"<br>"),O.push(F,k),j.push(n[0],n[1],M),j.push(F,C,D,M,k,h,d,x,b,(0,i.BD1)(l),(0,i.KoI)("||","red",e,l,l,a),(0,i.KoI)("|||","blue",s,l,l,t),(0,i.DQC)(l,e,t,"red",1,(0,r.euh)(c)+"°"),(0,i.DQC)(l,a,t,"blue",1,(0,r.euh)(m)+"°"))}J+=(0,i.iR9)({xmin:H,ymin:B,xmax:X,ymax:z,pixelsParCm:25,scale:1},O),N+=(0,i.iR9)({xmin:H,ymin:B,xmax:X,ymax:z,pixelsParCm:25,scale:1},j),this.listeQuestions.push(J),this.listeCorrections.push(N),(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de diffculté",3,"1 : Figures faciles\n2 : Figures plus difficiles\n3 : Figure au hasard"]}},66969:(e,s,a)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}a.r(s),a.d(s,{default:()=>t})}}]);
//# sourceMappingURL=8619.832014e46a8f053b2f3f.js.map
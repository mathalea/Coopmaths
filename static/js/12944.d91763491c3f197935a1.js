"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[12944],{12944:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>c,interactifReady:()=>u,amcReady:()=>h,interactifType:()=>m,amcType:()=>p,default:()=>b});var t=s(25523),a=s(22380),r=s(25482),n=s(71250),o=s(93661),l=s(11945);const c="Déterminer le volume de pavés droit par dénombrement",u=!0,h=!0,m="mathLive",p="AMCNum";function b(){t.default.call(this),this.nbQuestions=1,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],a.Do.anglePerspective=30,a.Do.coeffPerspective=.5;const e=[];for(let i,s,t,c,u,h,m,p,b,d,x=0,y=0;x<this.nbQuestions&&y<50;){i=(0,r.nSR)(5,10),s=(0,r.nSR)(2,5),t=(0,r.nSR)(3,6),c=(0,o.y$)(0,0,0,1,i,s,t,"black"),u=[],h=[],p=[],m=[],b="Donner le nombre de petits cubes qui constituent ce pavé droit<br>"+(0,n.iR9)({xmin:-1,ymin:-1,xmax:i+.9*s,ymax:t+.6*s},...c.c2d),a.Do.isAmc||(b+=(0,l.G5)(this,x,"largeur25"));for(let e=0;e<t-1;e++)u.push(...(0,o.VY)(0,0,1.5*e,1,i,s,"black").c2d),m.push(...(0,o.VY)(0,0,1.5*e,1,i,s).c2d);m.push(...(0,o.VY)(0,0,1.5*(t-1),1,i,s).c2d);for(let e=s-1;e>0;e--)u.push(...(0,o.sV)(0,1.5*e,1.5*t-1.5,1,i,"black").c2d),p.push(...(0,o.sV)(0,1.5*e,0,1,i).c2d);p.push(...(0,o.sV)(0,0,0,1,i).c2d);for(let e=0;e<i;e++)u.push(...(0,o.oO)(1.2*e-.06*i,0,1.5*t-1.5,1,"black").c2d),h.push(...(0,o.oO)(1.5*e-.06*i,0,0,1).c2d);this.correctionDetaillee?(d=`Il y a ${i} cubes par barre :<br>`,d+=(0,n.iR9)({xmin:-.5,xmax:1.5*i+2,ymin:-.5,ymax:1.5},h),d+=`<br>Il y a ${s} barres par plaque :<br>`,d+=(0,n.iR9)({xmin:-.5,xmax:1.5*i+2,ymin:-.5,ymax:1.5+.75*s},p),d+=`<br>Enfin, il y a ${t} plaques empilées :<br>`,d+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:15,ymax:1*t*1.5+.75*s+.5},m),d+=`<br>Il y a donc $${i} \\times ${s} \\times ${t} = ${t*i*s}$ cubes.<br>`):(d=`Il y a  ${i} cubes par barre, ${s} barres par plaque et ${t} plaques. Il y a donc $${i} \\times ${s} \\times ${t} = ${t*i*s}$ cubes.<br>`,d+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:Math.max(1.2*i+1,i+.8*s),ymax:1.5*t+.8*s},u)),-1===e.indexOf([i,s,t])&&((0,l.Iq)(this,x,i*s*t),this.listeQuestions.push(b),this.listeCorrections.push(d),e.push([i,s,t]),x++),y++}(0,r.K1R)(this)}}}}]);
//# sourceMappingURL=12944.d91763491c3f197935a1.js.map
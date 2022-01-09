/*! For license information please see 16333.bccca9c552bd4b88ec00.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[16333,83133,25523],{83133:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>n,interactifType:()=>u,amcReady:()=>$,amcType:()=>b,titre:()=>h,default:()=>c});var s=t(25523),r=t(22380),a=t(25482),o=t(11945);const n=!0,u="mathLive",$=!0,b="AMCNum",h="Équation du premier degré à solutions entières";function c(){s.default.call(this),this.titre=h,this.consigne="Résoudre les équations suivantes.",this.spacing=2,r.Do.isHtml?this.spacingCorr=3:this.spacingCorr=2,this.correctionDetailleeDisponible=!0,r.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.sup=!0,this.sup2=4,this.nbQuestions=6,this.nouvelleVersion=function(){let e;switch(this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup2.toString()){case"1":e=["ax=b","x+b=c"];break;case"2":e=["ax+b=c"];break;case"3":e=["ax+b=cx+d"];break;default:e=["ax+b=0","ax+b=c","ax=b","x+b=c","ax+b=cx+d"]}e=(0,a.SRM)(e,this.nbQuestions);for(let i,t,s,r,n,u,$,b=0,h=0;b<this.nbQuestions&&h<50;){switch(e[b]){case"ax+b=0":case"ax+b=c":s="ax+b=0"===e[b]?0:(0,a.nSR)(-9,9,[0]),n=(0,a.nSR)(-5,5,[0,-1,1]),i=(0,a.nSR)(-5,5,[-1,0,1]),this.sup||(n=Math.abs(n),i=Math.abs(i),s=Math.abs(s)),t=s-i*n,u=`$${i}x${(0,a.tPu)(t)}=${s}$`,$=u+"<br>",this.correctionDetaillee&&($+=t>0?`On soustrait $${t}$ aux deux membres.<br>`:`On ajoute $${-1*t}$ aux deux membres.<br>`),$+=`$${i}x${(0,a.tPu)(t)}${(0,a.b1)((0,a.tPu)(-1*t))}=${s}${(0,a.b1)((0,a.tPu)(-1*t))}$<br>`,$+=`$${i}x=${s-t}$<br>`,this.correctionDetaillee&&($+=`On divise les deux membres par $${i}$.<br>`),$+=`$${i}x${(0,a.b1)("\\div"+(0,a.PMY)(i))}=${s-t+(0,a.b1)("\\div"+(0,a.PMY)(i))}$<br>`,$+=`$x=${(0,a.qaf)(s-t,i)}=${n}$`,$+=`<br> La solution est $${n}$.`;break;case"x+b=c":t=(0,a.nSR)(-9,9,[0]),s=(0,a.nSR)(-16,15,0),this.sup||(s=Math.abs(s)),n=s-t,u=`$x${(0,a.tPu)(t)}=${s}$`,$=u+"<br>",this.correctionDetaillee&&($+=t>0?`On soustrait $${t}$ aux deux membres.<br>`:`On ajoute $${-1*t}$ aux deux membres.<br>`),$+=`$x${(0,a.tPu)(t)}${(0,a.b1)((0,a.tPu)(-1*t))}=${s}${(0,a.b1)((0,a.tPu)(-1*t))}$<br>`,$+=`$x=${n}$`,$+=`<br> La solution est $${n}$.`;break;case"ax=b":this.sup?(i=(0,a.nSR)(-9,9,[0,-1,1]),n=(0,a.nSR)(-9,9,[-1,0,1])):(i=(0,a.nSR)(2,15),n=(0,a.nSR)(2,9)),t=i*n,u=`$${i}x=${t}$`,$=u+"<br>",this.correctionDetaillee&&($+=`On divise les deux membres par $${i}$.<br>`),$+=`$${i}x${(0,a.b1)("\\div"+(0,a.PMY)(i))}=${t+(0,a.b1)("\\div"+(0,a.PMY)(i))}$<br>`,$+=`$x=${(0,a.qaf)(t,i)}=${n}$`,$+=`<br> La solution est $${n}$.`;break;case"ax+b=cx+d":n=(0,a.nSR)(-9,9,[0,-1,1]),r=(0,a.nSR)(-15,15),s=(0,a.nSR)(-5,5,[-1,0,1]),this.sup?i=(0,a.nSR)(-5,5,[-s,1-s,-s-1,0])+s:(n=Math.abs(n),s=Math.abs(s),i=(0,a.nSR)(2,5)+s),t=(s-i)*n+r,u=`$${(0,a.wO4)(i)}x${(0,a.tPu)(t)}=${(0,a.wO4)(s)}x${(0,a.tPu)(r)}$`,$=u+"<br>",this.correctionDetaillee&&($+=s>0?`On soustrait $${(0,a.wO4)(s)}x$ aux deux membres.<br>`:`On ajoute $${(0,a.wO4)(-1*s)}x$ aux deux membres.<br>`),$+=`$${(0,a.wO4)(i)}x${(0,a.tPu)(t)}${(0,a.b1)((0,a.mKt)(-1*s)+(0,a.wO4)((0,a.WnP)(s))+"x")}=${s}x${(0,a.tPu)(r)}${(0,a.b1)((0,a.mKt)(-1*s)+(0,a.wO4)((0,a.WnP)(s))+"x")}$<br>`,$+=`$${(0,a.wO4)(i-s)}x${(0,a.tPu)(t)}=${r}$<br>`,this.correctionDetaillee&&($+=t>0?`On soustrait $${t}$ aux deux membres.<br>`:`On ajoute $${-1*t}$ aux deux membres.<br>`),$+=`$${(0,a.wO4)(i-s)}x${(0,a.tPu)(t)}${(0,a.b1)((0,a.tPu)(-1*t))}=${r}${(0,a.b1)((0,a.tPu)(-1*t))}$<br>`,$+=`$${(0,a.wO4)(i-s)}x=${r-t}$<br>`,this.correctionDetaillee&&($+=`On divise les deux membres par $${i-s}$.<br>`),$+=`$${(0,a.wO4)(i-s)}x${(0,a.b1)("\\div"+(0,a.PMY)(i-s))}=${r-t+(0,a.b1)("\\div"+(0,a.PMY)(i-s))}$<br>`,$+=`$x=${(0,a.qaf)(r-t,i-s)}=${n}$`,$+=`<br> La solution est $${n}$.`}u+=(0,o.G5)(this,b,"largeur10 inline",{texte:(0,a.sp)(10)+"La solution est : $x=$"}),this.sup?(0,o.Iq)(this,b,n,{signe:!0}):(0,o.Iq)(this,b,n,{signe:!1}),this.questionJamaisPosee(b,i,t,s)&&(this.listeQuestions.push(u),this.listeCorrections.push($),b++),h++}(0,a.K1R)(this)},this.besoinFormulaireCaseACocher=["Avec des nombres relatifs"],this.besoinFormulaire2Numerique=["Type d'équations",4,"1 : ax=b ou x+a=b ou x-a=b\n2: ax+b=c\n3: ax+b=cx+d\n4: Mélange"]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},16333:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,titre:()=>r,default:()=>a});var s=t(83133);const r="Résoudre une équation ax+b=c";function a(){s.default.call(this),this.nbQuestions=1,this.correctionDetaillee=!1,this.sup=!1,this.sup2=2,this.spacingCorr=1,this.consigne="Résoudre l’équation :"}}}]);
//# sourceMappingURL=16333.bccca9c552bd4b88ec00.js.map
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[68181,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},68181:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,interactifReady:()=>a,interactifType:()=>h,default:()=>l});var s=t(25523),n=t(25482),r=t(71250);const o="Calculer un côté avec le théorème de Pythagore",a=!0,h="mathLive";function l(){s.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){const e=(0,n.wnJ)(3,["Q"]),i=(0,n.nSR)(2,5),t=(0,n.nSR)(6,10),s=t**2-i**2,o=(0,r.xmu)(0,0,e[0]),a=(0,r.dJt)(o,i,-90,e[1]),h=(0,r.dJt)(a,Math.sqrt(s),0,e[2]),l=(0,r.uGk)(o,a,h),u=[],c=Math.min(o.x,a.x,h.x)-1,$=Math.min(o.y,a.y,h.y)-1,m=Math.max(o.x,a.x,h.x)+1,b=Math.max(o.y,a.y,h.y)+1,d=1!==(0,n.uV4)(s)[0];u.push(l[0],l[1],(0,r.lvA)(o,a,h)),u.push((0,r.Ots)(`${(0,n.k$K)(t)}`,(0,r.Q2H)(h,o).x,(0,r.Q2H)(h,o).y+.4,"milieu","black",1,"middle",!0),(0,r.Ots)(`${(0,n.k$K)(i)}`,(0,r.Q2H)(a,o).x-.3,(0,r.Q2H)(a,o).y+.2,"milieu","black",1,"middle",!0)),this.question=`Sur cette figure, déterminer la valeur exacte de $${e[1]}${e[2]}$.<br>`,this.question+=(0,r.iR9)({xmin:c,ymin:$,xmax:m,ymax:b,pixelsParCm:25,mainlevee:!1,amplitude:.3,scale:.5,style:"margin: auto"},u),this.correction=` On utilise le théorème de Pythagore dans le triangle $${e[0]}${e[1]}${e[2]}$,  rectangle en $${e[1]}$.<br>\n      On obtient :<br>\n      $\\begin{aligned}\n\n        ${e[0]}${e[1]}^2+${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2\\\\\n\n        ${e[1]}${e[2]}^2&=${e[0]}${e[2]}^2-${e[0]}${e[1]}^2\\\\\n\n        ${e[1]}${e[2]}^2&=${t}^2-${i}^2\\\\\n\n        ${e[1]}${e[2]}^2&=${t**2}-${i**2}\\\\\n\n        ${e[1]}${e[2]}^2&=${s}\\\\\n\n        ${e[1]}${e[2]}&=\\sqrt{${s}}\n        ${d?"\\\\\n"+e[1]+e[2]+"&="+(0,n.BSg)(s):""}\n        \n\\end{aligned}$\n        `,this.correction+=(0,n.pRK)(`<br> Mentalement : <br>\n    La longueur $${e[1]}${e[2]}$ est donnée par la racine carrée de la différence des carrés de $${t}$ et de $${i}$.<br>\n    Cette différence vaut $${t**2}-${i**2}=${s}$. <br>\n    La valeur cherchée est donc : $\\sqrt{${s}}${d?"="+(0,n.BSg)(s):""}$.`),this.reponse=[`\\sqrt{${s}}`,`${Math.sqrt(s)}`,(0,n.BSg)(s)]}}}}]);
//# sourceMappingURL=68181.6ba50531b3a15a8d99cd.js.map
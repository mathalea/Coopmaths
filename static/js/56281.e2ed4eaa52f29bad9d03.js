"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[56281,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},56281:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>a,interactifType:()=>h,default:()=>l});var s=t(25523),o=t(25482),n=t(71250);const r="Calculer une longueur avec le théorème de Pythagore",a=!0,h="mathLive";function l(){s.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){const i=(0,o.wnJ)(3,["Q"]),e=(0,o.nSR)(1,5),t=(0,o.nSR)(6,10),s=(0,n.xmu)(0,0,i[0]),r=(0,n.dJt)(s,e,90,i[1]),a=(0,n.dJt)(r,Math.sqrt(t**2-e**2),0,i[2]),h=(0,n.uGk)(s,r,a),l=[],u=Math.min(s.x,r.x,a.x)-1,c=Math.min(s.y,r.y,a.y)-1,m=Math.max(s.x,r.x,a.x)+1,b=Math.max(s.y,r.y,a.y)+1;l.push(h[0],h[1],(0,n.lvA)(s,r,a)),l.push((0,n.Ots)(`${(0,o.k$K)(t)}`,(0,n.Q2H)(s,a).x+.2,(0,n.Q2H)(s,a).y-.3,"milieu","black",1,"middle",!0),(0,n.Ots)(`${(0,o.k$K)(e)}`,(0,n.Q2H)(s,r).x-.3,(0,n.Q2H)(s,r).y,"milieu","black",1,"middle",!0),(0,n.Ots)("x",(0,n.Q2H)(r,a).x,(0,n.Q2H)(r,a).y+.3,"milieu","black",1,"middle",!0)),this.question="Sur cette figure $x=\\sqrt{a}$ avec $a=$<br>",this.question+=(0,n.iR9)({xmin:u,ymin:c,xmax:m,ymax:b,pixelsParCm:25,mainlevee:!1,amplitude:.3,scale:.7,style:"margin: auto"},l),this.correction=` En utilisant le théorème de Pythagore, on a :<br>\n        $${i[0]}${i[1]}^2+${i[1]}${i[2]}^2=${i[0]}${i[2]}^2$, soit\n        $${i[1]}${i[2]}^2=${i[0]}${i[2]}^2-${i[0]}${i[1]}^2$. <br>\n        On en déduit : $x^2=${t}^2-${e}^2$, d'où $x=\\sqrt{${t}^2-${e}^2}=\\sqrt{${t**2-e**2}}$\n       <br>\n       Ainsi, $a=${t**2-e**2}$.`,this.reponse=(0,o.n0o)(t**2-e**2)}}}}]);
//# sourceMappingURL=56281.e2ed4eaa52f29bad9d03.js.map
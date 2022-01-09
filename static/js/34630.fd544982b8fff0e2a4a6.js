"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[34630,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},34630:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,interactifReady:()=>a,interactifType:()=>l,default:()=>u});var s=t(25523),r=t(25482),n=t(71250);const o="Rechercher une valeur avec le théorème de Pythagore",a=!0,l="mathLive";function u(){s.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){let e,i,t,s,o,a,l;switch((0,r.q$q)(["a","b"])){case"a":a=(0,r.wnJ)(3,["Q"]),e=2*(0,r.nSR)(1,5),i=(0,n.xmu)(0,0,a[0]),t=(0,n.xmu)(4,0,a[1]),s=(0,n.xmu)(1.58,3.7,a[2]),l=(0,n.uGk)(i,t,s),o=[],o.push((0,n.EXn)(i,t),(0,n.EXn)(t,s),(0,n.EXn)(i,s)),o.push(l[0],l[1]),o.push((0,n.Ots)(`${(0,r.k$K)(e)}`,(0,n.Q2H)(t,s).x+.5+0,(0,n.Q2H)(t,s).y,"milieu","black",1,"middle",!0),(0,n.Ots)("x",(0,n.Q2H)(i,s).x-.5,(0,n.Q2H)(i,s).y,"milieu","black",1,"middle",!0),(0,n.Ots)("x",(0,n.Q2H)(i,t).x,(0,n.Q2H)(i,t).y-.5,"milieu","black",1,"middle",!0)),this.question="Déterminer $x$ pour que le triangle soit rectangle.<br>\n      (donner le résultat sous la forme $\\sqrt{a}$)<br>",this.question+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:6,ymax:5,pixelsParCm:25,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},o),this.correction=` Le plus grand côté est $${e}$ (autrement il y aurait deux hypoténuses). On cherche $x$ tel que $x^2+x^2=${e}^2$, soit $2x^2=${e*e}$.<br>\n      En divisant par $2$ chacun des membres, on obtient : $x^2=${e*e/2}$.<br>\n      Comme la valeur de $x$ cherchée est positive, on a  $x=\\sqrt{${(0,r.k$K)(e**2/2)}}$.\n  <br>`,this.reponse=[`\\sqrt{${e**2/2}}`,`${Math.sqrt(e**2/2)}`];break;case"b":a=(0,r.wnJ)(3,["Q"]),e=(0,r.q$q)([8,18,32,50,72,98,128,162,200]),i=(0,n.xmu)(0,0,a[0]),t=(0,n.xmu)(4,0,a[1]),s=(0,n.xmu)(1.58,3.7,a[2]),l=(0,n.uGk)(i,t,s),o=[],o.push(l[0],l[1]),o.push((0,n.EXn)(i,t),(0,n.EXn)(t,s),(0,n.EXn)(i,s)),o.push((0,n.Ots)(`$\\tiny{\\sqrt{${e}}}$`,(0,n.Q2H)(t,s).x+.8+0,(0,n.Q2H)(t,s).y+1,"milieu","black",1,"middle",!0),(0,n.Ots)("x",(0,n.Q2H)(i,s).x-.5,(0,n.Q2H)(i,s).y,"milieu","black",1,"middle",!0),(0,n.Ots)("x",(0,n.Q2H)(i,t).x,(0,n.Q2H)(i,t).y-.5,"milieu","black",1,"middle",!0)),this.question="Déterminer $x$ pour que le triangle soit rectangle.<br>",this.question+=(0,n.iR9)({xmin:-1,ymin:-1,xmax:6,ymax:5,pixelsParCm:22,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},o),this.correction=` Le plus grand côté est $\\sqrt{${e}}$ (autrement il y aurait deux hypoténuses).\n        On cherche $x$ tel que $x^2+x^2=\\sqrt{${e}}^2$, soit $2x^2=${e}$.<br>\n      En divisant par $2$ chacun des membres, on obtient : $x^2=${e/2}$.<br>\n      Comme la valeur de $x$ cherchée est positive, on a  $x=\\sqrt{${(0,r.k$K)(e/2)}}=${Math.sqrt(e/2)}$.\n  `,this.reponse=[Math.sqrt(e/2),`\\sqrt{${e/2}}`]}}}}}]);
//# sourceMappingURL=34630.fd544982b8fff0e2a4a6.js.map
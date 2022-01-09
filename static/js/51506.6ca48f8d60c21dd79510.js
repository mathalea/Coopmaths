"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[51506,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},51506:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>r,interactifReady:()=>o,interactifType:()=>h,default:()=>c});var s=t(25523),a=t(25482),n=t(71250);const r="Utiliser la trigonométrie",o=!0,h="mathLive";function c(){s.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){const e=(0,a.q$q)([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29],[12,35,37],[9,40,41],[11,60,61]]),i=(0,a.wnJ)(3,["Q"]),t=e[0],s=e[1],r=e[2],o=(0,n.xmu)(0,0,i[0]),h=(0,a.nSR)(0,135),c=(0,n.Wnp)((0,n.dJt)(o,t,0),o,h,i[1]),$=(0,n.$7o)(o,c,90,s/t,i[2]),l=(0,n.uGk)(o,c,$),u=Math.min(o.x,c.x,$.x)-.1*r,m=Math.min(o.y,c.y,$.y)-.1*r,d=Math.max(o.x,c.x,$.x)+.1*r,b=Math.max(o.y,c.y,$.y)+.1*r,x=[];switch(x.push((0,n.EXn)(o,c),(0,n.EXn)(c,$),(0,n.EXn)(o,$),(0,n.lvA)(o,c,$)),x.push((0,n.Y2F)(o,c,"black",.5,""),(0,n.Y2F)(c,$,"black",.5,""),(0,n.Y2F)($,o,"black",.5,"")),x.push(l[0],l[1]),(0,a.q$q)(["a","b","c","d","e","f"])){case"a":this.question=`$\\cos\\widehat{${i[2]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[1]}$, on a : <br>\n        $\\cos\\widehat{${i[2]}}=\\dfrac{\\text{Côté adjacent à } \\widehat{${i[2]}}}{\\text{Hypoténuse}}=\\dfrac{${s}}{${r}}.$\n      <br>`,this.reponse=`\\dfrac{${s}}{${r}}`;break;case"b":this.question=`$\\sin\\widehat{${i[2]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[1]}$, on a : <br>\n        $\\sin\\widehat{${i[2]}}=\\dfrac{\\text{Côté opposé à } \\widehat{${i[2]}}}{\\text{Hypoténuse}}=\\dfrac{${t}}{${r}}.$\n      <br>`,this.reponse=`\\dfrac{${t}}{${r}}`;break;case"c":this.question=`$\\tan\\widehat{${i[2]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[1]}$, on a : <br>\n        $\\tan\\widehat{${i[2]}}=\\dfrac{\\text{Côté opposé à } \\widehat{${i[2]}}}{\\text{Côté adjacent à } \\widehat{${i[2]}}}=\\dfrac{${t}}{${s}}.$\n      <br>`,this.reponse=`\\dfrac{${t}}{${s}}`;break;case"d":this.question=`$\\cos\\widehat{${i[0]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[1]}$, on a : <br>\n        $\\cos\\widehat{${i[0]}}=\\dfrac{\\text{Côté adjacent à } \\widehat{${i[0]}}}{\\text{Hypoténuse}}=\\dfrac{${t}}{${r}}.$\n      <br>`,this.reponse=`\\dfrac{${t}}{${r}}`;break;case"e":this.question=`$\\sin\\widehat{${i[0]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[1]}$, on a :<br> \n        $\\sin\\widehat{${i[0]}}=\\dfrac{\\text{Côté opposé à } \\widehat{${i[0]}}}{\\text{Hypoténuse}}=\\dfrac{${s}}{${r}}.$\n      <br>`,this.reponse=`\\dfrac{${s}}{${r}}`;break;case"f":this.question=`$\\tan\\widehat{${i[0]}}=$<br>\n        (Sous forme d'une fraction irréductible)<br>`,this.question+=(0,n.iR9)({xmin:u,ymin:m,xmax:d,ymax:b,pixelsParCm:170/r,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},x),this.correction=` Dans le triangle $${i[0]}${i[1]}${i[2]}$ rectangle en $${i[0]}$, on a : <br>\n        $\\tan\\widehat{${i[0]}}=\\dfrac{\\text{Côté opposé à } \\widehat{${i[0]}}}{\\text{Côté adjacent à } \\widehat{${i[0]}}}=\\dfrac{${s}}{${t}}.$\n      <br>`,this.reponse=`\\dfrac{${s}}{${t}}`}}}}}]);
//# sourceMappingURL=51506.6ca48f8d60c21dd79510.js.map
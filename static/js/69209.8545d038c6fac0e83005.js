/*! For license information please see 69209.8545d038c6fac0e83005.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[69209,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},69209:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>a,interactifType:()=>h,amcReady:()=>l,amcType:()=>u,titre:()=>c,default:()=>m});var s=t(71250),o=t(13898),n=t(25482),r=t(25523);const a=!0,h="mathLive",l=!0,u="AMCNum",c="Lire une image graphiquement";function m(){r.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=(0,n.nSR)(-5,5),i=[];for(let s=-6;s<=6;s++)i[s+6]=(0,n.nSR)(-4,4);const t=(0,o.Q9)({tabY:i,x0:-6,step:1}),r=(0,s.sYn)({xMin:-7,xMax:7,yMin:-6,yMax:6}),a=(0,s.YvU)(t,{repere:r,step:.1,color:"red",xMin:-6,xMax:6,traceNoeuds:!0});this.reponse=t.image(e),this.question=`Quelle est l'image de $${e}$ ?<br>${(0,s.iR9)({xmin:-7,xmax:7,ymin:-6,ymax:6,pixelsParCm:17,style:"margin: auto"},r,a)}`,this.correction=`Pour lire l'image de $${e}$, on place la valeur de $${e}$ sur l'axe des abscisses (axe de lecture  des antécédents) et on lit \n    son image $${t.image(e)}$ sur l'axe des ordonnées (axe de lecture des images).`}}}}]);
//# sourceMappingURL=69209.8545d038c6fac0e83005.js.map
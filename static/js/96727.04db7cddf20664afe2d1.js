"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[96727,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},96727:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>a,interactifReady:()=>l,interactifType:()=>u,default:()=>h});var s=t(25523),o=t(41154),n=t(25482),r=t(71250);const a='Calculer le "milieu" entre 1 et une fraction',l=!0,u="mathLive";function h(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const i=(0,n.q$q)([[10,3],[5,4],[7,4],[10,7],[11,7],[12,7],[9,7],[13,7],[11,8],[11,9],[7,6],[12,11],[4,3],[7,5],[13,7],[13,9],[13,11],[13,12],[14,11]]),e=i[0],t=i[1],s=(0,r.xmu)(0,0,"1","below"),a=(0,r.xmu)(4,0,"M","below"),l=(0,r.xmu)(8,0),u=[];u.push((0,r.PGN)(s,a),(0,r.PGN)(a,l),(0,r.BD1)(a),(0,r.KoI)("||","blue",s,a,a,l)),u.push((0,r.Ots)("1",0,-.6,"milieu","black",1,"middle",!0)),u.push((0,r.T7E)({x:8,y:-1,fraction:(0,o.Pj)(e,t),couleur:"black"})),this.question="Donner l'abscisse du point $M$ sous forme d’une fraction irréductible.<br>",this.question+=(0,r.iR9)({xmin:-1,ymin:-2,xmax:10,ymax:1,pixelsParCm:20,mainlevee:!1,amplitude:.5,scale:.7,style:"margin: auto"},u),this.correction=`On calcule la moyenne de $1$ et $${(0,n.qaf)(e,t)}$ :<br>  \n    $x_I=\\dfrac{1+${(0,n.qaf)(e,t)}}{2}=\n    \\dfrac{${(0,n.qaf)(t,t)}+${(0,n.qaf)(e,t)}}{2}=\n        ${(0,n.qaf)(e+t,t)}\\times \\dfrac{1}{2}=\n        ${(0,n.qaf)(t+e,2*t)} ${(0,n.t7m)(t+e,2*t)}$ <br><br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n        On calcule d'abord  $1+${(0,n.qaf)(e,t)}$ en n'oubliant pas que $1=\\dfrac{${t}}{${t}}$, puis on multiplie le résultat par $\\dfrac{1}{2}$. `),this.reponse=(0,n.xau)(t+e,2*t)}}}}]);
//# sourceMappingURL=96727.04db7cddf20664afe2d1.js.map
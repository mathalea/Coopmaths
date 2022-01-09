"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[47691,25523],{47691:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>o,default:()=>a});var s=i(25523),n=i(25482),r=i(71250);const o="Mettre en équation un problème sans objectif de résolution";function a(){let e;s.default.call(this),this.debug=!1,this.sup=1,this.debug?this.nbQuestions=9:this.nbQuestions=2,this.titre=o,this.consigne="Donner une équation qui permet de résoudre le problème.<br>On ne demande pas de résoudre l'équation.",this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){e=this.debug?[1]:[1,2],this.listeQuestions=[],this.listeCorrections=[],e=[1];const t=(0,n.SRM)(e,this.nbQuestions);for(let e,i,s=0,o=0;s<this.nbQuestions&&o<50;){function a(e){const t={article:"",name:"",nameParSommets:""};switch(e){case 3:t.article="du ",t.name="triangle équilatéral",t.nameParSommets="ABC";break;case 4:t.article="du ",t.name="carré",t.nameParSommets="ABCD";break;case 5:t.article="du ",t.name="pentagone régulier",t.nameParSommets="ABCDE";break;case 6:t.article="de l'",t.name="hexagone régulier",t.nameParSommets="ABCDEF";break;case 7:t.article="de l'",t.name="heptagone régulier",t.nameParSommets="ABCDEFG";break;case 8:t.article="de l'",t.name="octogone régulier",t.nameParSommets="ABCDEFGH"}return t}const l=(0,n.nSR)(3,8),u=["t","u","v","w","y","z"],c=u[(0,n.nSR)(0,u.length-1)],m=["mm","cm","dm","m","dam","hm","km"],h=m[(0,n.nSR)(0,m.length-1)],$=(0,r.EZ_)((0,r.xmu)(0,0),4,l);$.opacite=.5,$.epaisseur=2;const b=(0,r.EXn)($.listePoints[0],$.listePoints[1]);let d;b.styleExtremites="<->",d=4===l?(0,r.LNy)($):{};const p=[$,(0,r.KoI)("X","blue",$.listePoints),(0,r.gI5)(b,`${c}`,1,"red",2,.5,"black"),(0,r.NVL)($,a(l).nameParSommets),d],g={nb_cotes:l,unite:h,article:a(l).article,nom:a(l).name,let_cote:c,perimetre:(0,n.nSR)(200,500),fig:(0,r.iR9)({xmin:-7,ymin:-5,xmax:7,ymax:5,pixelsParCm:20,scale:.5},p)},C=[];C.push({enonce:`On considère la figure suivante où l'unité est le $${g.unite}$.<br>${(0,n.rV2)()} se demande pour quelle valeur de ${g.let_cote}, exprimée en $${g.unite}$, le périmètre ${g.article}${g.nom} est égal à $${g.perimetre}$ $${g.unite}$ .<br> ${g.fig}`,question:"",correction:`La figure est un ${g.nom}, il a donc ${g.nb_cotes} côtés de même longueur.<br>\n        Cette longueur est notée ${g.let_cote}, le périmètre de la figure, exprimé en fonction de ${g.let_cote}, vaut donc $${g.nb_cotes}\\times$ ${g.let_cote}.<br>\n        D'après l'énoncé, ce périmètre vaut $${g.perimetre}$ $${g.unite}$.<br>\n        L'équation suivante permet donc de résoudre le problème : <br>\n        ${(0,n.pRK)(`$${g.nb_cotes}\\times$ ${g.let_cote} $= ${g.perimetre}$.`)}`});const f=(0,n.nSR)(3,8,[l]);switch(g.nb_cotes=f,C.push({enonce:`On considère la figure suivante où l'unité est le $${g.unite}$.<br>${(0,n.rV2)()} se demande pour quelle valeur de ${g.let_cote}, exprimée en $${g.unite}$, le périmètre ${g.article}${g.nom} est égal à $${g.perimetre}$ $${g.unite}$ .<br> ${g.fig}`,question:"",correction:`La figure est un ${g.nom}, il a donc ${g.nb_cotes} côtés de même longueur.<br>\n        Cette longueur est notée ${g.let_cote}, le périmètre de la figure, exprimé en fonction de ${g.let_cote}, vaut donc $${g.nb_cotes}\\times$ ${g.let_cote}.<br>\n        D'après l'énoncé, ce périmètre vaut $${g.perimetre}$ $${g.unite}$.<br>\n        L'équation suivante permet donc de résoudre le problème : <br>\n        ${(0,n.pRK)(`$${g.nb_cotes}\\times$ ${g.let_cote} $= ${g.perimetre}$.`)}`}),t[s]){case 1:e=`${C[0].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${C[0].correction}`,i=""):i=`${C[0].correction}`;break;case 2:e=`${C[1].enonce}`,this.debug?(e+="<br>",e+=`<br> =====CORRECTION======<br>${C[1].correction}`,i=""):i=`${C[1].correction}`}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(i),s++),o++}(0,n.K1R)(this)}}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=47691.58ac333714aa00c703f0.js.map
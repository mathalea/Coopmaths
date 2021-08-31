"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[53806,58496,17007],{53806:(s,i,e)=>{e.r(i),e.d(i,{titre:()=>r,default:()=>o});var t=e(58496);const r="Traduire une expression par une phrase";function o(){t.default.call(this),this.version=2,this.titre=r}},58496:(s,i,e)=>{e.r(i),e.d(i,{interactifReady:()=>u,interactifType:()=>h,amcReady:()=>c,amcType:()=>p,default:()=>$});var t=e(17007),r=e(24791),o=e(41043),n=e(30169),a=e(75664),l=e(66170);const u=!0,h="mathLive",c=!0,p="AMCOpenNum";function $(){t.default.call(this),this.consigne="",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup2=!1,this.sup=!1,this.sup3=!0,this.version=1,this.nouvelleVersion=function(){this.autoCorrection=[];let s,i,e,t,u=[];this.listeQuestions=[],this.listeCorrections=[],this.sup?"number"==typeof this.sup?u[0]=this.sup%6:u=this.sup.split("-"):u=[1,2,3,4,5];let h,c,p,$=1;const b=(0,n.SRM)(u,this.nbQuestions);this.sup2&&($=10);for(let d,f,m,C,x=0,g=0;x<this.nbQuestions&&g<50;){switch(this.autoCorrection[x]={},c=parseInt(b[x]%6),m=(0,n.nSR)(2,5),C=(0,n.nSR)(6,9),this.version>2&&1===c&&!this.litteral&&c++,p=this.litteral?(0,o.default)(c,$,m,C,this.sup3):(0,r.default)(c,$,this.sup3),i=p[0],e=p[1],t=p[2],h=p[3],this.version){case 1:this.consigne="Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul).",d=`${i}.`,f=`${i} s'écrit<br>${e}.`;break;case 2:e.indexOf("ou")>0&&(e=e.substring(0,e.indexOf("ou"))),this.consigne="Traduire le calcul par une phrase en français.",d=`${e}`,i="l"+i.substring(1),f=`${e} est ${i}.`;break;case 3:this.consigne="Traduire la phrase par un calcul et effectuer ce calcul en respectant les priorités opératoires.",d=this.litteral?2===h?`${i} puis calculer pour $x=${m}$ et $y=${C}$.`:`${i} puis calculer pour $x=${m}$.`:`${i}.`,f=`${i} s'écrit ${e}.<br>`,this.litteral?f+=2===h?`Pour $x=${m}$ et $y=${C}$ :<br> ${t}.`:`Pour $x=${m}$ :<br>${t}.`:f=`${t}.`,s=parseInt(t.split("=")[t.split("=").length-1]);break;case 4:e.indexOf("ou")>0&&(e=e.substring(0,e.indexOf("ou"))),this.consigne="Calculer en respectant les priorités opératoires.",d=this.litteral?2===h?`Pour $x=${m}$ et $y=${C}$, calculer ${e}.`:`Pour $x=${m}$, calculer ${e}.`:`${e}.`,f=this.litteral?2===h?`Pour $x=${m}$ et $y=${C}$ :<br>${t}.`:`Pour $x=${m}$ :<br>${t}.`:`${t}.`,s=parseInt(t.split("=")[t.split("=").length-1])}this.questionJamaisPosee(x,e,i)&&(this.version>2&&(l.Do.isAmc?d+="<br>Détailler les calculs dans le cadre et coder le résultat.<br>":d+="<br>"+(0,a.G5)(this,x,"largeur25 inline",{texte:" Résultat : "}),(0,a.Iq)(this,x,s)),this.listeQuestions.push(d),this.listeCorrections.push(f),x++),g++}(0,n.K1R)(this)},this.besoinFormulaireTexte=["Choix des expressions","Nombres séparés par des tirets\n 1 : Expressions de base à une opération\n2 : Expressions à deux opérations\n3 : Expressions à 3 opérations\n4 : Expressions à 4 opérations\n5 : Expressions complexes"],this.besoinFormulaire2CaseACocher=["Avec décimaux.",!1],this.besoinFormulaire3CaseACocher=["Avec le signe × devant les parenthèses",!0]}},17007:(s,i,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(s){},this.questionJamaisPosee=function(s,...i){0===s&&(this.listeArguments=[]);let e="";for(const t of i)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=53806.4a03f3cd9a24f7340b79.js.map
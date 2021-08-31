"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[84874,58496,17007],{84874:(s,e,i)=>{i.r(e),i.d(e,{interactifReady:()=>t.interactifReady,interactifType:()=>t.interactifType,amcType:()=>t.amcType,amcReady:()=>t.amcReady,titre:()=>r,default:()=>o});var t=i(58496);const r="Traduire une phrase par une expression et la calculer";function o(){t.default.call(this),this.version=3,this.titre=r,this.besoinFormulaireTexte=["Choix des expressions","Nombres séparés par des tirets\n2 : Expressions à deux opérations\n3 : Expressions à 3 opérations\n4 : Expressions à 4 opérations\n5 : Expressions complexes"]}},58496:(s,e,i)=>{i.r(e),i.d(e,{interactifReady:()=>u,interactifType:()=>h,amcReady:()=>c,amcType:()=>p,default:()=>b});var t=i(17007),r=i(24791),o=i(41043),n=i(30169),a=i(75664),l=i(66170);const u=!0,h="mathLive",c=!0,p="AMCOpenNum";function b(){t.default.call(this),this.consigne="",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup2=!1,this.sup=!1,this.sup3=!0,this.version=1,this.nouvelleVersion=function(){this.autoCorrection=[];let s,e,i,t,u=[];this.listeQuestions=[],this.listeCorrections=[],this.sup?"number"==typeof this.sup?u[0]=this.sup%6:u=this.sup.split("-"):u=[1,2,3,4,5];let h,c,p,b=1;const $=(0,n.SRM)(u,this.nbQuestions);this.sup2&&(b=10);for(let d,m,f,x,C=0,g=0;C<this.nbQuestions&&g<50;){switch(this.autoCorrection[C]={},c=parseInt($[C]%6),f=(0,n.nSR)(2,5),x=(0,n.nSR)(6,9),this.version>2&&1===c&&!this.litteral&&c++,p=this.litteral?(0,o.default)(c,b,f,x,this.sup3):(0,r.default)(c,b,this.sup3),e=p[0],i=p[1],t=p[2],h=p[3],this.version){case 1:this.consigne="Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul).",d=`${e}.`,m=`${e} s'écrit<br>${i}.`;break;case 2:i.indexOf("ou")>0&&(i=i.substring(0,i.indexOf("ou"))),this.consigne="Traduire le calcul par une phrase en français.",d=`${i}`,e="l"+e.substring(1),m=`${i} est ${e}.`;break;case 3:this.consigne="Traduire la phrase par un calcul et effectuer ce calcul en respectant les priorités opératoires.",d=this.litteral?2===h?`${e} puis calculer pour $x=${f}$ et $y=${x}$.`:`${e} puis calculer pour $x=${f}$.`:`${e}.`,m=`${e} s'écrit ${i}.<br>`,this.litteral?m+=2===h?`Pour $x=${f}$ et $y=${x}$ :<br> ${t}.`:`Pour $x=${f}$ :<br>${t}.`:m=`${t}.`,s=parseInt(t.split("=")[t.split("=").length-1]);break;case 4:i.indexOf("ou")>0&&(i=i.substring(0,i.indexOf("ou"))),this.consigne="Calculer en respectant les priorités opératoires.",d=this.litteral?2===h?`Pour $x=${f}$ et $y=${x}$, calculer ${i}.`:`Pour $x=${f}$, calculer ${i}.`:`${i}.`,m=this.litteral?2===h?`Pour $x=${f}$ et $y=${x}$ :<br>${t}.`:`Pour $x=${f}$ :<br>${t}.`:`${t}.`,s=parseInt(t.split("=")[t.split("=").length-1])}this.questionJamaisPosee(C,i,e)&&(this.version>2&&(l.Do.isAmc?d+="<br>Détailler les calculs dans le cadre et coder le résultat.<br>":d+="<br>"+(0,a.G5)(this,C,"largeur25 inline",{texte:" Résultat : "}),(0,a.Iq)(this,C,s)),this.listeQuestions.push(d),this.listeCorrections.push(m),C++),g++}(0,n.K1R)(this)},this.besoinFormulaireTexte=["Choix des expressions","Nombres séparés par des tirets\n 1 : Expressions de base à une opération\n2 : Expressions à deux opérations\n3 : Expressions à 3 opérations\n4 : Expressions à 4 opérations\n5 : Expressions complexes"],this.besoinFormulaire2CaseACocher=["Avec décimaux.",!1],this.besoinFormulaire3CaseACocher=["Avec le signe × devant les parenthèses",!0]}},17007:(s,e,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(s){},this.questionJamaisPosee=function(s,...e){0===s&&(this.listeArguments=[]);let i="";for(const t of e)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>t})}}]);
//# sourceMappingURL=84874.6f72e09dbfcae3217f9b.js.map
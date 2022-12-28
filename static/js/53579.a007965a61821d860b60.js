"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[53579,43465,25523],{53579:(i,e,s)=>{s.r(e),s.d(e,{interactifReady:()=>t.interactifReady,interactifType:()=>t.interactifType,amcType:()=>t.amcType,amcReady:()=>t.amcReady,titre:()=>r,default:()=>o});var t=s(43465);const r="Traduire une phrase par une expression et la calculer";function o(){t.default.call(this),this.version=3,this.titre=r,this.sup4=!1,this.besoinFormulaireTexte=["Choix des expressions","Nombres séparés par des tirets\n2 : Expressions à 2 opérations\n3 : Expressions à 3 opérations\n4 : Expressions à 4 opérations\n5 : Expressions complexes"],this.besoinFormulaire2CaseACocher=["Utilisation de décimaux (pas de calcul mental)",!1],this.besoinFormulaire4CaseACocher=["Présentation des corrections en colonnes",!1]}},43465:(i,e,s)=>{s.r(e),s.d(e,{interactifReady:()=>u,interactifType:()=>h,amcReady:()=>c,amcType:()=>p,default:()=>$});var t=s(25523),r=s(97710),o=s(72529),n=s(25482),a=s(11945),l=s(22380);const u=!0,h="mathLive",c=!0,p="AMCOpenNum";function $(i){t.default.call(this),this.consigne="",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup2=!1,this.sup=!1,this.sup3=!0,this.version=1,this.nouvelleVersion=function(){this.autoCorrection=[];let e,s,t,u,h,c,p,$,b=[];this.listeQuestions=[],this.listeCorrections=[],this.sup?"number"==typeof this.sup?b[0]=this.sup%6:b=this.sup.split("-"):b=[1,2,3,4,5];const f=(0,n.SRM)(b,this.nbQuestions);h=i?1:10,h=this.sup2?10:1;for(let d,m,C,x,g=0,y=0;g<this.nbQuestions&&y<50;){switch(this.autoCorrection[g]={},p=parseInt(f[g]%6),C=(0,n.nSR)(2,5),x=(0,n.nSR)(6,9),this.version>2&&1===p&&!this.litteral&&p++,$=this.litteral?(0,o.default)(p,h,C,x,this.sup3,i):(0,r.default)(p,h,this.sup3,i),s=$[0],t=$[1],u=$[2],c=$[3],this.version){case 1:this.consigne="Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul).",d=`${s}.`,m=`${s} s'écrit<br>${t}.`;break;case 2:t.indexOf("ou")>0&&(t=t.substring(0,t.indexOf("ou"))),this.consigne="Traduire le calcul par une phrase en français.",d=`${t}`,s="l"+s.substring(1),m=`${t} est ${s}.`;break;case 3:if(this.interactif?this.consigne="Traduire la phrase par un calcul et effectuer ce calcul au brouillon en respectant les priorités opératoires.<br> Saisir uniquement le résultat.":this.consigne="Traduire la phrase par un calcul et effectuer ce calcul en respectant les priorités opératoires.",d=this.litteral?2===c?`${s} puis calculer pour $x=${C}$ et $y=${x}$.`:`${s} puis calculer pour $x=${C}$.`:`${s}.`,m=`${s} s'écrit ${t}.<br>`,this.litteral)m+=2===c?`Pour $x=${C}$ et $y=${x}$ :<br> ${u}.`:`Pour $x=${C}$ :<br>${u}.`;else if(this.sup4){m="";u.split("=").forEach((function(i){i=i.replace("$",""),l.Do.isHtml&&(m+="<br>"),m+=`${(0,n.Gag)(g+1)} = $${i}$ <br>`}))}else m=`${u}`;e=u.split("=")[u.split("=").length-1].replace("$","");break;case 4:t.indexOf("ou")>0&&(t=t.substring(0,t.indexOf("ou"))),this.consigne="Calculer en respectant les priorités opératoires.",d=this.litteral?2===c?`Pour $x=${C}$ et $y=${x}$, calculer ${t}.`:`Pour $x=${C}$, calculer ${t}.`:`${t}`,m=this.litteral?2===c?`Pour $x=${C}$ et $y=${x}$ :<br>${u}.`:`Pour $x=${C}$ :<br>${u}.`:`${u}`,e=parseInt(u.split("=")[u.split("=").length-1])}this.questionJamaisPosee(g,t,s)&&(this.version>2&&(l.Do.isAmc?d+="<br>Détailler les calculs dans le cadre et coder le résultat.<br>":d+="<br>"+(0,a.G5)(this,g,"largeur25 inline",{texte:" Résultat : "}),(0,a.Iq)(this,g,e)),this.listeQuestions.push(d),this.listeCorrections.push(m),g++),y++}(0,n.K1R)(this)}}},25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=53579.a007965a61821d860b60.js.map
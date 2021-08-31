"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3886,17007],{3886:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>r,default:()=>u});var s=e(17007),o=e(66170),n=e(30169),a=e(92329);const r="Calcul du discriminant d’une équation du second degré";function u(){s.default.call(this),this.titre=r,this.consigne="Pour chaque équation, calculer le discriminant et déterminer le nombre de solutions de cette équation dans $\\mathbb{R}$.",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=2,o.Do.isHtml&&(this.spacingCorr=2),this.nouvelleVersion=function(i){this.listeQuestions=[],this.listeCorrections=[];const t=(0,n.SRM)(["0solution","1solution","2solutions"],this.nbQuestions);for(let e,s,r,u,l,h,$,c,m=0,b=0;m<this.nbQuestions&&b<50;){let d;switch(t[m]){case"0solution":d="n'a aucun point d'intersection",c=(0,n.nSR)(1,5),h=(0,n.nSR)(-3,3,[0]),$=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?(r=c,u=-2*c*h,l=c*h*h+$):(r=-c,u=2*c*h,l=-c*h*h-$),e=`$${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x${(0,n.tPu)(l)}=0$`,0===u&&(e=`$${(0,n.wO4)(r)}x^2${(0,n.tPu)(l)}=0$`),s=`$\\Delta = ${(0,n.PMY)(u)}^2-4\\times${(0,n.PMY)(r)}\\times${(0,n.PMY)(l)}=${u*u-4*r*l}$`,s+="<br>$\\Delta<0$ donc l'équation n'admet pas de solution.",s+="<br>$\\mathcal{S}=\\emptyset$";break;case"1solution":d="n'a qu'un seul point d'intersection",c=(0,n.nSR)(-5,5,[0]),h=(0,n.nSR)(-5,5,[0]),r=c,u=-2*c*h,l=c*h*h,e=`$${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x${(0,n.tPu)(l)}=0$`,0===u&&(e=`$${(0,n.wO4)(r)}x^2${(0,n.tPu)(l)}=0$`),0===l&&(e=`$${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x=0$`),s=`$\\Delta = ${(0,n.PMY)(u)}^2-4\\times${(0,n.PMY)(r)}\\times${(0,n.PMY)(l)}=${u*u-4*r*l}$`,s+="<br>$\\Delta=0$ donc l'équation admet une unique solution.";break;case"2solutions":d="a deux points d'intersection",c=(0,n.nSR)(1,5),h=(0,n.nSR)(-3,3),$=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?($*=-1,r=c,u=-2*c*h,l=c*h*h+$):(r=-c,u=2*c*h,l=-c*h*h+$),e=`$${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x${(0,n.tPu)(l)}=0$`,0===u&&(e=`$${(0,n.wO4)(r)}x^2${(0,n.tPu)(l)}=0$`),0===l&&(e=`$${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x=0$`),s=`$\\Delta = ${(0,n.PMY)(u)}^2-4\\times${(0,n.PMY)(r)}\\times${(0,n.PMY)(l)}=${u*u-4*r*l}$`,s+="<br>$\\Delta>0$ donc l'équation admet deux solutions."}if(o.Do.isHtml){const t=i=>r*i**2+u*i+l,e=(0,a.hhm)(t);e.color="blue";const o=(0,a.EXn)((0,a.xmu)(-10,0),(0,a.xmu)(10,0));o.epaisseur=3,o.color="red";const h=(0,a.sYn)({afficheLabels:!1,xLabelListe:[],yLabelListe:[]});let $=`Notons $f : x \\mapsto ${(0,n.wO4)(r)}x^2${(0,n.Zvy)(u)}x${(0,n.tPu)(l)}$.`;$+=`<br>On observe que la courbe représentative de $f$ ${d} avec l'axe des abscisses.`,$+="<br>",$+=(0,a.iR9)({xmin:-10.1,ymin:-10.1,xmax:10.1,ymax:10.1,pixelsParCm:15},e,h,o),s+=(0,n.He0)(i,"Complément graphique",$,"Complément graphique","info circle")}this.questionJamaisPosee(m,r,u,l)&&(this.listeQuestions.push(e),this.listeCorrections.push(s),m++),b++}(0,n.K1R)(this)}}},17007:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=3886.0a858e2c1f428c5718d3.js.map
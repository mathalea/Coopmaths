"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[39128,17007],{39128:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>r,default:()=>h});var t=s(17007),n=(s(66170),s(30169)),o=s(41043);const r="Déterminer la dernière opération à effectuer dans une expression numérique";function h(){t.default.call(this),this.debug=!1,this.consigne="",this.nbQuestions=4,this.nbCols=1,this.nbColsCorr=1,this.sup=!0,this.sup2=!1,this.titre=r,this.nouvelleVersion=function(){let i;this.listeQuestions=[],this.listeCorrections=[],i=[5];let e,s,t,r,h,l,a,u=1,c=(0,n.SRM)(i,this.nbQuestions);this.sup2&&(u=10);for(let b,f,d,C,m=0,g=0;m<this.nbQuestions&&g<50;){h=parseInt(c[m]),d=(0,n.nSR)(2,5),C=(0,n.nSR)(6,9),l=(0,o.default)(h,u,d,C,this.sup),e=l[0],s=l[1],t=l[2],r=l[3],a=l[4];let i=t.split("=");switch(c[m]){case 5:if(s.indexOf("ou")>0&&(s=s.substring(0,s.indexOf("ou"))),this.consigne="Déterminer la dernière opération à effectuer .",b=`$${i[1]}$`,this.debug){b+="<br><br>=====CORRECTION======<br>",b+="$";for(let e=1;e<i.length-1;e++)b+=`${i[e]}=`;b+=`${i[i.length-1]}`,b+=`<br>$\\textbf{La dernière opération dans $${i[1]}$ est donc une ${a}.}$`,f=""}else{f="$";for(let e=1;e<i.length-1;e++)f+=`${i[e]}=`;f+=`${i[i.length-1]}`,f+=`<br>$\\textbf{La dernière opération dans $${i[1]}$ est donc une ${a}.}$`}}-1===this.listeQuestions.indexOf(b)&&(this.listeQuestions.push(b),this.listeCorrections.push(f),m++),g++}(0,n.K1R)(this)},this.besoinFormulaire2CaseACocher=["Avec décimaux.",!1],this.besoinFormulaireCaseACocher=["Avec le signe × devant les parenthèses",!0]}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=39128.5eaafac2c1ea5eab82d7.js.map
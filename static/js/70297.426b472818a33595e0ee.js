"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[70297,17007],{70297:(t,e,i)=>{i.r(e),i.d(e,{titre:()=>h,default:()=>$});var s=i(30169),n=i(17007),o=i(66170);const h="Additionner des durées";function $(){n.default.call(this),this.titre=h,this.consigne="Compléter les égalités suivantes",this.sup=1,this.spacing=2,this.nbQuestions=5,this.nbColsCorr=1,this.nouvelleVersion=function(t){let e;this.listeQuestions=[],this.listeCorrections=[],e=1===parseInt(this.sup)?(0,s.SRM)([1,3],this.nbQuestions):(0,s.SRM)([1,2,3,4,5],this.nbQuestions);for(let i,n,h,$,x,r,l,a,u=0,m=0;u<this.nbQuestions&&m<50;)1===e[u]&&(x=(0,s.nSR)(11,39),r=(0,s.nSR)(1,20),h=(0,s.nSR)(20,59),$=(0,s.nSR)(40,59),l=`$${h}~\\text{min}~${x}~\\text{s}+${$}~\\text{min}~${r}~\\text{s}=\\dotfill$`,a=`$${h}~\\text{min}~${x}~\\text{s}+${$}~\\text{min}~${r}~\\text{s}= ${h+$}~\\text{min}~${x+r}~\\text{s}= 1~\\text{h}~${h+$-60}~\\text{min}~${x+r}~\\text{s}$`),2===e[u]&&(x=(0,s.nSR)(21,39),r=(0,s.nSR)(40,59),h=(0,s.nSR)(20,59),$=(0,s.nSR)(40,59),l=`$${h}~\\text{min}~${x}~\\text{s}+${$}~\\text{min}~${r}~\\text{s}=\\dotfill$`,a=`$${h}~\\text{min}~${x}~\\text{s}+${$}~\\text{min}~${r}~\\text{s}= ${h+$}~\\text{min}~${x+r}~\\text{s} = ${h+$+1}~\\text{min}~${x+r-60}~\\text{s} = 1~\\text{h}~${h+$-60}~\\text{min}~${x+r-60}~\\text{s}$`),3===e[u]&&(i=(0,s.nSR)(2,12),n=(0,s.nSR)(2,11),h=(0,s.nSR)(30,50),$=(0,s.nSR)(30,50),l=`$${i}~\\text{h}~${h}~\\text{min}+${n}~\\text{h}~${$}~\\text{min}=\\dotfill$`,a=`$${i}~\\text{h}~${h}~\\text{min}+${n}~\\text{h}~${$}~\\text{min}= ${i+n}~\\text{h}~${h+$}~\\text{min} = ${i+n+1}~\\text{h}~${h+$-60}~\\text{min}$`),4===e[u]&&(i=(0,s.nSR)(2,12),n=(0,s.nSR)(2,11),h=(0,s.nSR)(30,50),$=(0,s.nSR)(30,50),x=(0,s.nSR)(2,55),r=(0,s.nSR)(1,60-x-1),l=`$${i}~\\text{h}~${h}~\\text{min}~${x}~\\text{s}+${n}~\\text{h}~${$}~\\text{min}~${r}~\\text{s}=\\dotfill$`,a=`$${i}~\\text{h}~${h}~\\text{min}~${x}~\\text{s}+${n}~\\text{h}~${$}~\\text{min}~${r}~\\text{s}= ${i+n}~\\text{h}~${h+$}~\\text{min}~${x+r}~\\text{s} = ${i+n+1}~\\text{h}~${h+$-60}~\\text{min}~${x+r}~\\text{s}$`),5===e[u]&&(i=(0,s.nSR)(2,12),n=(0,s.nSR)(2,11),h=(0,s.nSR)(30,50),$=(0,s.nSR)(30,50),x=(0,s.nSR)(2,55),r=(0,s.nSR)(60-x,59),l=`$${i}~\\text{h}~${h}~\\text{min}~${x}~\\text{s}+${n}~\\text{h}~${$}~\\text{min}~${r}~\\text{s}=\\dotfill$`,a=`$${i}~\\text{h}~${h}~\\text{min}~${x}~\\text{s}+${n}~\\text{h}~${$}~\\text{min}~${r}~\\text{s}=`,a+=` ${i+n}~\\text{h}~${h+$}~\\text{min}~${x+r}~\\text{s} = ${i+n}~\\text{h}~${h+$+1}~\\text{min}~${x+r-60}~\\text{s} =${i+n+1}~\\text{h}~${h+$+1-60}~\\text{min}~${x+r-60}~\\text{s}$`),-1===this.listeQuestions.indexOf(l)&&(o.Do.isDiaporama&&(l=l.replace("=\\dotfill","")),this.listeQuestions.push(l),this.listeCorrections.push(a),u++),m++;(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2]}},17007:(t,e,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let i="";for(const s of e)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=70297.426b472818a33595e0ee.js.map
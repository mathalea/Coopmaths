"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[40645,25523],{40645:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>h,default:()=>u});var t=s(25523),n=s(22380),r=s(25482),o=s(71250),a=s(41154);const h="Représenter une fraction de l’unité";function u(){t.default.call(this),this.nbQuestions=5,this.consigne="Colorier en bleu un segment de longueur ...",n.Do.isHtml?this.spacingCorr=3.5:this.spacingCorr=2,n.Do.isHtml,this.spacing=2,this.sup=1,this.sup2=1,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){let i,e,s,t,n;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let h=[];i=this.sup<5?[parseInt(this.sup)]:[1,2,3,4],h=(0,r.SRM)(i,this.nbQuestions);for(let u,l,c,b,m,C=0,p=0;C<this.nbQuestions&&p<50;){switch(h[C]){case 1:u=(0,r.q$q)([4,5,6,10]),l=(0,r.nSR)(1,u-1);break;case 2:u=(0,r.q$q)([2,3,4]),l=3===u?(0,r.nSR)(3,2*u-1,u):(0,r.nSR)(3,3*u-1,u);break;case 3:u=(0,r.q$q)([4,5,6,10]),l=4===u?(0,r.nSR)(5,3*u-1,u):(0,r.nSR)(5,2*u-1,u);break;case 4:u=(0,r.q$q)([2,3,4,5,6,10]),l=2===u||4===u?(0,r.nSR)(u+1,3*u-1,u):(0,r.nSR)(u+1,2*u-1,u)}n=u%3==0?12:u%5==0?10:8,c=(0,a.Pj)(l,u),b=`$${c.texFraction}$ unité en prenant ${n} carreaux pour une unité.`,e=this.sup2<3?(0,o.flY)(0,0,26,2,"gray",.7):"",2===parseInt(this.sup2)?(t=.6,s=(0,o.Sl2)(0,0,26,2)):(t=.5,s=""),m=(0,o.iR9)({xmin:0,ymin:0,xmax:26,ymax:2,pixelsParCm:20,scale:t},c.representation(1,1,n,0,"segment","blue",0,1),e,s),-1===this.listeQuestions.indexOf(b)&&(this.listeQuestions.push(b),this.listeCorrections.push(m),C++),p++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Type d'exercices",4,"1 : Fraction inférieure à 1\n2 : Demis, tiers et quarts\n3 : Quarts, cinquièmes, sixièmes et dixièmes\n4 : Toutes les fractions précédentes entre 1 et 3"],this.besoinFormulaire2Numerique=["Type de cahier",2,"1 : Cahier à petits carreaux\n2 : Cahier à gros carreaux (Seyes)"]}},25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=40645.71fc073ae0c5d91bc91b.js.map
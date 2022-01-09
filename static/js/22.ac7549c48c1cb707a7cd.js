"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[22,25523],{22:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>u,default:()=>l});var s=e(25523),o=e(22380),n=e(25482),r=e(71250);const u="Résoudre une équation avec des valeurs absolues";function l(){s.default.call(this),this.titre=u,this.consigne="Résoudre dans $\\mathbb{R}$ les équations suivantes  :",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.correction_detaille_disponible=!0,o.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i;const t=(0,n.SRM)([1,2,2,2,2,2],this.nbQuestions);for(let e,s,o,u,l,a=0,h=0;a<this.nbQuestions&&h<50;){switch(i=t[a],i){case 1:e=(0,n.nSR)(1,15)*(0,n.q$q)([-1,1]),s=-1*(0,n.nSR)(1,15),u=`$\\vert x ${(0,n.tPu)(e)}\\vert =${s}$`,l=` ${s} étant négatif, il n'existe pas de solution à cette équation. $S=\\emptyset$`;break;case 2:if(e=(0,n.nSR)(1,15)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(1,15),o=-e,u=`$\\vert x ${(0,n.tPu)(e)}\\vert =${s}$`,l=`Résoudre cette équation est équivalent à résoudre ces deux équations :<br>\n                    $x ${(0,n.tPu)(e)} =${s}$ et    $x ${(0,n.tPu)(e)} =${-s}$<br>\n                    Il existe donc deux solutions à cette équation :<br>\n                    $x_1=${o} ${(0,n.tPu)(s)}$ et $x_2=${o} -${(0,n.PMY)(s)}$<br>\n                    $S=\\{${o-s};${o+s}\\}$`,this.correctionDetaillee){const i=(0,r.EXn)((0,r.xmu)(0,0),(0,r.xmu)(12,0));i.styleExtremites="->";const t=(0,r.xmu)(3,0);t.nom=o-s,t.positionLabel="below";const e=(0,r.xmu)(6,0,o);e.nom=o,e.positionLabel="below";const n=(0,r.xmu)(9,0,o+s,"below");n.nom=o+s,n.positionLabel="below";const u=(0,r.PGN)(t,n);u.color="blue",u.epaisseur=2;const a=(0,r.PGN)(t,e),h=(0,r.BD1)(e,t,n),c=(0,r.EXn)((0,r.xmu)(3,1),(0,r.xmu)(5.95,1));c.styleExtremites="<->";const b=(0,r.Ots)(s,4.5,1.6),m=(0,r.EXn)((0,r.xmu)(6.05,1),(0,r.xmu)(9,1));m.styleExtremites="<->";const $=(0,r.Ots)(s,7.5,1.6);l+=(0,r.iR9)({xmin:-1,xmax:13,ymin:-2,ymax:2.5},i,u,a,h,c,b,m,$)}}-1===this.listeQuestions.indexOf(u)&&(this.listeQuestions.push(u),this.listeCorrections.push(l),a++),h++}(0,n.K1R)(this)}}},25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=22.ac7549c48c1cb707a7cd.js.map
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[53569,17007],{17007:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})},53569:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>a,default:()=>l});var t=s(17007),r=s(66170),o=s(30169),n=s(92329);const a="Fabriquer des pavages pour travailler les transformations";function l(){t.default.call(this),this.titre=a,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=4,this.sup2="1-1",this.sup3=!0,this.correctionDetaillee=!1,this.correctionDetailleeDisponible=!0,r.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(){const e=[];let i,s;this.sup2?"number"==typeof parseInt(this.sup2)?([i,s]=[this.sup2,this.sup2],this.nbQuestions=1):[i,s]=this.sup2.split("-"):[i,s]=[1,1],this.listeCorrections=[],this.listeQuestions=[];let t,r="",a="";const l=(0,n.T0Y)();if(t=parseInt(this.sup),l.construit(t,i,s,3),this.sup3)for(let h=0;h<l.nb_polygones;h++)e.push((0,n.Ots)((0,o.x9Z)(h+1),l.barycentres[h].x+.5,l.barycentres[h].y,"milieu","black",.04*l.echelle,0,!0));if(this.correctionDetaillee)for(let o=0;o<l.nb_polygones;o++)e.push(l.tracesCentres[o]);for(let o=0;o<l.nb_polygones;o++)e.push(l.polygones[o]);r=(0,n.iR9)(l.fenetre,e),a="Le premier paramètre permet de choisir le pavage.<br>",a+="Le deuxième permet de choisir le nombre de répétitions en x et y. Exemple : 3-2<br>",a+="Le troisième permet d'afficher un Numéro distinct sur chaque figure.<br>",a+="En activant la correction détaillée, on affiche les barycentres de celles-ci.",this.listeQuestions.push(r),this.listeCorrections.push("Le premier paramètre permet de choisir le pavage.<br>Le deuxième permet de choisir le nombre de répétitions en x et y. Exemple : 3-2<br>Le troisième permet d'afficher un Numéro distinct sur chaque figure.<br>En activant la correction détaillée, on affiche les barycentres de celles-ci."),(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Type de pavage",7,"1 : Triangles équilatéraux\n2 : Carrés\n3 : Hexagones\n4 : Pavage 3².4.3.4\n5 : Pavage 8².4\n6 : Pavage hexagonal d'écolier\n7 : Pavage 6.3.6.3"],this.besoinFormulaire2Texte=["Nombre de répétitions du motif (2 entiers séparés par un tiret)"],this.besoinFormulaire3CaseACocher=["Présence de numéros"]}}}]);
//# sourceMappingURL=53569.28742597a77a14d90099.js.map
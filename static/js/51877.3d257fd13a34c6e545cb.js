"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[51877,90321,62566,78938,25523],{25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})},42704:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>o,default:()=>a});var t=s(25523),n=s(71250),r=s(33378);const o="Construis mon triangle";function a(){t.default.call(this),this.titre=o,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!0,this.pas_de_version_HMTL=!1,this.sup=1,this.sup2="ABC",this.sup3="3 4 5",this.typeExercice="IEP",this.nouvelleVersion=function(){const e=this.sup3.split(" "),i=parseInt(this.sup),s=this.sup2,t=new r.Z;let o;const a=[];for(let n=0;n<e.length;n++)e[n]=parseFloat(e[n]);switch(i){case 1:o=t.triangle3longueurs(s,e[0],e[1],e[2],!0,!0),a.push((0,n.Y2F)(o[1],o[0]),(0,n.Y2F)(o[2],o[1]),(0,n.Y2F)(o[0],o[2]));break;case 2:o=t.triangle1longueur2angles(s,e[0],e[1],e[2],!0,!0),a.push((0,n.Y2F)(o[1],o[0]),(0,n.DQC)(o[2],o[0],o[1]),(0,n.DQC)(o[0],o[1],o[2]));break;case 3:o=t.triangleRectangle2Cotes(s,e[0],e[1],!0),a.push((0,n.Y2F)(o[1],o[0]),(0,n.Y2F)(o[2],o[1]),(0,n.lvA)(o[0],o[1],o[2]));break;case 4:o=t.triangleRectangleCoteHypotenuse(s,e[0],e[1],!0),a.push((0,n.Y2F)(o[1],o[0]),(0,n.Y2F)(o[0],o[2]),(0,n.lvA)(o[0],o[1],o[2]));break;case 5:o=t.triangleEquilateral(s,e[0],!0),a.push((0,n.Y2F)(o[1],o[0]),(0,n.KoI)("||","red",o[0],o[1],o[2],o[0],o[1],o[2]));break;case 6:o=t.triangle2longueurs1angle(s,e[0],e[1],e[2],!0),a.push((0,n.Y2F)(o[0],o[1]),(0,n.Y2F)(o[0],o[2]),(0,n.DQC)(o[1],o[0],o[2]))}const l=(0,n.uGk)(o);a.push(l[0],l[1]);const h={xmin:Math.min(o[0].x-1,o[1].x-1,o[2].x-1),ymin:Math.min(o[0].y-1,o[1].y-1,o[2].y-1),xmax:Math.max(o[0].x+1,o[1].x+1,o[2].x+1),ymax:Math.max(o[0].y+1,o[1].y+1,o[2].y+1),pixelsParCm:20,scale:1,mainlevee:!0,amplitude:.5},u=(0,n.iR9)(h,a)+"<br>"+t.htmlBouton(this.numeroExercice);this.contenu=u},this.besoinFormulaireNumerique=["Type de triangle",6,"1 : Triangle par 3 longueurs\n 2 : Triangle par 1 longueur et 2 angles\n 3 : Triangle rectangle 2 côtés angle droit\n 4 : Triangle rectangle 1 coté et l'hypoténuse\n 5 : Triangle équilatéral\n 6 : Triangle 2 longueurs et l'angle entre ces côtés"],this.besoinFormulaire2Texte=["Nom du triangle","ABC par exemple"],this.besoinFormulaire3Texte=["paramètres séparés par des espaces","3 4 5"]}}}]);
//# sourceMappingURL=51877.3d257fd13a34c6e545cb.js.map
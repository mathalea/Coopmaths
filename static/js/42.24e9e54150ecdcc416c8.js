(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[42,975,9678,6969],{66969:(e,i,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(i),s.d(i,{default:()=>t})},72262:(e,i,s)=>{"use strict";s.r(i),s.d(i,{titre:()=>r,default:()=>l});var t=s(66969),n=(s(55339),s(44393)),a=s(859);const r="Construis mon triangle";function l(){t.default.call(this),this.titre=r,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!0,this.pas_de_version_HMTL=!1,this.sup=1,this.sup2="ABC",this.sup3="3 4 5",this.typeExercice="IEP",this.nouvelleVersion=function(){let e,i=this.sup3.split(" "),s=parseInt(this.sup),t=this.sup2,r=new a.Z,l=[];for(let n=0;n<i.length;n++)i[n]=parseFloat(i[n]);switch(s){case 1:e=r.triangle3longueurs(t,i[0],i[1],i[2],!0,!0),l.push((0,n.Y2F)(e[1],e[0]),(0,n.Y2F)(e[2],e[1]),(0,n.Y2F)(e[0],e[2]));break;case 2:e=r.triangle1longueur2angles(t,i[0],i[1],i[2],!0,!0),l.push((0,n.Y2F)(e[1],e[0]),(0,n.DQC)(e[2],e[0],e[1]),(0,n.DQC)(e[0],e[1],e[2]));break;case 3:e=r.triangleRectangle2Cotes(t,i[0],i[1],!0),l.push((0,n.Y2F)(e[1],e[0]),(0,n.Y2F)(e[2],e[1]),(0,n.lvA)(e[0],e[1],e[2]));break;case 4:e=r.triangleRectangleCoteHypotenuse(t,i[0],i[1],!0),l.push((0,n.Y2F)(e[1],e[0]),(0,n.Y2F)(e[0],e[2]),(0,n.lvA)(e[0],e[1],e[2]));break;case 5:e=r.triangleEquilateral(t,i[0],!0),l.push((0,n.Y2F)(e[1],e[0]),(0,n.KoI)("||","red",e[0],e[1],e[2],e[0],e[1],e[2]));break;case 6:e=r.triangle2longueurs1angle(t,i[0],i[1],i[2],!0),l.push((0,n.Y2F)(e[0],e[1]),(0,n.Y2F)(e[0],e[2]),(0,n.DQC)(e[1],e[0],e[2]))}let o=(0,n.uGk)(e);l.push(o[0],o[1]);let h={xmin:Math.min(e[0].x-1,e[1].x-1,e[2].x-1),ymin:Math.min(e[0].y-1,e[1].y-1,e[2].y-1),xmax:Math.max(e[0].x+1,e[1].x+1,e[2].x+1),ymax:Math.max(e[0].y+1,e[1].y+1,e[2].y+1),pixelsParCm:20,scale:1,mainlevee:!0,amplitude:.5},u=(0,n.iR9)(h,l)+"<br>"+r.htmlBouton();this.contenu=u},this.besoinFormulaireNumerique=["Type de triangle",6,"1 : Triangle par 3 longueurs\n 2 : Triangle par 1 longueur et 2 angles\n 3 : Triangle rectangle 2 côtés angle droit\n 4 : Triangle rectangle 1 coté et l'hypoténuse\n 5 : Triangle équilatéral\n 6 : Triangle 2 longueurs et l'angle entre ces côtés"],this.besoinFormulaire2Texte=["Nom du triangle","ABC par exemple"],this.besoinFormulaire3Texte=["paramètres séparés par des espaces","3 4 5"]}}}]);
//# sourceMappingURL=42.24e9e54150ecdcc416c8.js.map
(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[25644,71129],{25644:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>o,default:()=>a});var t=e(71129),n=(e(62259),e(63861)),r=e(55802);const o="Labyrinthe de multiples basé sur les critères de divisibilité";function a(){t.default.call(this),this.titre=o,this.consigne="",this.niveau="6e",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.sup3=3,this.sup=9,(this.niveau="CM")?(this.sup2=1,this.sup3=3):(this.sup2=2,this.sup3=4),this.nouvelleVersion=function(){let i,s,e,t;this.listeCorrections=[],this.listeQuestions=[];let o=(0,r.DRD)();o.niveau=parseInt(this.sup3),o.chemin=o.choisitChemin(o.niveau),o.murs2d=o.construitMurs(o.chemin),o.chemin2d=o.traceChemin(o.chemin);let a=o.chemin,h=parseInt(this.sup);2==this.sup2?h%2!=0&&(h*=2):3==this.sup2?h%3!=0&&(h*=3):4==this.sup2?h%4!=0&&(h*=h%2!=0?4:2):5==this.sup2?h%5!=0&&(h*=5):6==this.sup2&&(h%9!=0?h%3!=0&&(h*=9):h*=3),s=`${(0,n.PH8)("Trouve la sortie en ne passant que par les cases contenant un nombre divisible par ","black")}$${h}$.<br>`,e=`${(0,n.PH8)(`Voici le chemin en marron et la sortie était la numéro $${2-a[a.length-1][1]+1}$.`,"black")}<br>`;let u=[],l=0;for(let r=200;r<=12e3;r+=(0,n.nSR)(1,100))u.push(h*r);u=(0,n.SRM)(u,12);for(let n=1;n<7;n++)o.nombres.push([0,0,0]);for(let r=1;r<7;r++)for(let i=0;i<3;i++){t=!1;for(let s=0;s<a.length;s++)a[s][0]==r&&a[s][1]==i&&(t=!0);t?(o.nombres[r-1][i]=u[l],l++):o.nombres[r-1][i]=(0,n.nSR)(200,5e3)*h+(0,n.nSR)(1,h-1)}o.nombres2d=o.placeNombres(o.nombres,1),i={xmin:-4,ymin:0,xmax:22,ymax:11,pixelsParCm:20,scale:.7},s+=(0,r.iR9)(i,o.murs2d,o.nombres2d),e+=(0,r.iR9)(i,o.murs2d,o.nombres2d,o.chemin2d),this.listeQuestions.push(s),this.listeCorrections.push(e),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Critère de divisibilité ",5,"1 : Par 2\n2 : Par 3\n3 : Par 4\n4 : Par 5\n5 : Par 9"],this.besoinFormulaire2Numerique=["Critère de divisibilité supplémentaire ",6,"1 : Aucun\n2 : Par 2\n3 : Par 3\n4 : Par 4\n5 : Par 5\n6 : Par 9"],this.besoinFormulaire3Numerique=["Niveau de rapidité",6,"1 : Escargot\n 2 : Tortue\n 3 : Lièvre\n 4 : Antilope\n 5 : Guépard\n 6 : Au hasard"]}},71129:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(s),e.d(s,{default:()=>t})}}]);
//# sourceMappingURL=25644.d30bf42a87ffa71761a8.js.map
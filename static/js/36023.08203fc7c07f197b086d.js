"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36023,85218,17007],{85218:(i,e,s)=>{s.r(e),s.d(e,{amcReady:()=>r,amcType:()=>a,interactifReady:()=>h,titre:()=>u,default:()=>l});var t=s(17007),n=s(30169),o=s(92329);const r=!0,a="AMCOpen",h=!1,u="Labyrinthe de multiples";function l(){t.default.call(this),this.titre=u,this.consigne="",this.niveau="6e",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.tailleDiaporama=100,this.sup3=3,this.sup=9,"CM"===this.niveau?(this.sup2=10,this.sup3=3):(this.sup2=13,this.sup3=4),this.nouvelleVersion=function(){let i,e,s;this.listeCorrections=[],this.listeQuestions=[];const t=(0,o.DRD)();t.niveau=parseInt(this.sup3),t.chemin=t.choisitChemin(t.niveau),t.murs2d=t.construitMurs(t.chemin),t.chemin2d=t.traceChemin(t.chemin);const r=t.chemin,a=parseInt(this.sup),h=parseInt(this.sup2);i=`${(0,n.PH8)("Trouve la sortie en ne passant que par les cases contenant un multiple de ","black")}$${a}$.<br>`,e=`${(0,n.PH8)(`Voici le chemin en marron et la sortie était la numéro $${2-r[r.length-1][1]+1}$.`,"black")}<br>`;let u=[],l=0;for(let n=2;n<=h;n++)u.push(a*n);u=(0,n.SRM)(u,12);for(let n=1;n<7;n++)t.nombres.push([0,0,0]);for(let o=1;o<7;o++)for(let i=0;i<3;i++){s=!1;for(let e=0;e<r.length;e++)r[e][0]===o&&r[e][1]===i&&(s=!0);s?(t.nombres[o-1][i]=u[l],l++):t.nombres[o-1][i]=(0,n.nSR)(2,h)*a+(0,n.nSR)(1,a-1)}t.nombres2d=t.placeNombres(t.nombres,1.5);const c={xmin:-4,ymin:0,xmax:22,ymax:11,pixelsParCm:20,scale:.7};i+=(0,o.iR9)(c,t.murs2d,t.nombres2d),e+=(0,o.iR9)(c,t.murs2d,t.nombres2d,t.chemin2d),this.autoCorrection=[{enonce:i,propositions:[{texte:e,statut:3,feedback:""}]}],this.listeQuestions.push(i),this.listeCorrections.push(e),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Table "],this.besoinFormulaire2Numerique=["Facteur maximum "],this.besoinFormulaire3Numerique=["Niveau de rapidité",6,"1 : Guépard\n 2 : Antilope\n 3 : Lièvre\n 4 : Tortue\n 5 : Escargot\n 6 : Au hasard"]}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},36023:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>o});var t=s(85218);const n="Labyrinthe de multiples";function o(){t.default.call(this),this.niveau="CM",this.sup=5,this.sup2=10,this.sup3=3}}}]);
//# sourceMappingURL=36023.08203fc7c07f197b086d.js.map
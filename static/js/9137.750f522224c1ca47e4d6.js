(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9137,7567],{19137:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>h,default:()=>a});var t=e(67567),n=e(24477),o=e(17199),r=e(41118);const h="Labyrinthe de fractions égales";function a(){t.default.call(this),this.titre=h,this.consigne="",this.niveau="6e",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.sup2=3,this.sup=10,(this.niveau="CM")?(this.sup=10,this.sup2=3):(this.sup=13,this.sup2=4),this.nouvelleVersion=function(){this.listeCorrections=[],this.listeQuestions=[];let i,s,e,t,h=[],a=(0,o.DRD)();a.niveau=parseInt(this.sup2),a.chemin=a.choisitChemin(a.niveau),a.murs2d=a.construitMurs(a.chemin),a.chemin2d=a.traceChemin(a.chemin);let l=a.chemin,u=(0,n.nSR)(1,7)+1,c=(0,n.nSR)(1,2*u-1);for(;1!=(0,n.Md9)(c,u);)c=(0,n.nSR)(2,2*u-1);let m=parseInt(this.sup);s=`${(0,n.MZ9)("Trouve la sortie en ne passant que par les cases contenant des fractions égales à ","black")}$${(0,n.xau)(c,u)}$.<br>`,e=`${(0,n.MZ9)(`Voici le chemin en marron et la sortie était la numéro $${2-l[l.length-1][1]+1}$.`,"black")}<br>`;let b=[],p=0;for(let i=2;i<=m;i++)b.push(u*i);b=(0,n.SRM)(b,12);for(let i=0;i<12;i++)h.push((0,r.Pj)((0,n.n0o)(c*b[i]/u),b[i]));for(let i=0;i<12;i++)switch((0,n.nSR)(1,3)){case 1:h.push((0,r.Pj)(b[i],c*b[i]/u));break;case 2:case 3:h.push((0,r.Pj)((0,n.n0o)(c*b[i]/u),b[i]-u))}for(let i=1;i<7;i++)a.nombres.push([(0,r.Pj)(1,1),(0,r.Pj)(1,1),(0,r.Pj)(1,1)]);for(let i=1;i<7;i++)for(let s=0;s<3;s++){t=!1;for(let e=0;e<l.length;e++)l[e][0]==i&&l[e][1]==s&&(t=!0);t?(a.nombres[i-1][s]=h[p],p++):a.nombres[i-1][s]=h[p+12]}a.nombres2d=a.placeNombres(a.nombres,1.5),i={xmin:-4,ymin:0,xmax:22,ymax:11,pixelsParCm:20,scale:.7},s+=(0,o.iR9)(i,a.murs2d,a.nombres2d),e+=(0,o.iR9)(i,a.murs2d,a.nombres2d,a.chemin2d),this.listeQuestions.push(s),this.listeCorrections.push(e),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Facteur maximum "],this.besoin_formulaire2_numerique=["Niveau de rapidité",6,"1 : Guépard\n 2 : Antilope\n 3 : Lièvre\n 4 : Tortue\n 5 : Escargot\n 6 : Au hasard"]}},67567:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(s),e.d(s,{default:()=>t})}}]);
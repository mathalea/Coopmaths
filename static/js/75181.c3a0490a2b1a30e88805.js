"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[75181,56126,17007],{56126:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>r,default:()=>l});var t=s(17007),o=s(30169),n=s(92329);const r="Déterminer les coordonnées (relatives) d’un point";function l(){t.default.call(this),this.titre=r,this.consigne="Donner les coordonnées des points représentés",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.sup=1,this.sup2=!0,this.quartDePlan=!1,this.listePackages="tkz-euclide",this.nouvelleVersion=function(){let i,e;this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let s=[];const t=[];let r,l,h,a;const u=Math.pow(2,parseInt(this.sup)-1),c=[],d=[];this.quartDePlan?(r=0,h=0,l=10,a=10):(r=-5,h=-5,l=5,a=5);const p=[],b=[];for(let n=(0,o.n0o)(r+1/u);n<(0,o.n0o)(l-(parseInt(this.sup)-1)/u);n=(0,o.n0o)(n+1/u))p.push(n);for(let n=(0,o.n0o)(h+1/u);n<(0,o.n0o)(a-(parseInt(this.sup)-1)/u);n=(0,o.n0o)(n+1/u))b.push(n);let m=!1,f=!1;s=(0,o.RZ9)(p,b,10*u);for(let n=0,C=(0,o.nSR)(1,20);n<5;n++)c.push((0,o.Gag)(n+C));for(let o=0;o<5;o++)t.push((0,n.xmu)(s[o][0],s[o][1],c[o],"above left")),0===t[o].x&&(m=!0),0===t[o].y&&(f=!0);m||(t[0].x=0),f||(t[1].y=0),(0,o.Xsq)(t,c),console.log(t),i="Déterminer les coordonnées des points",e="Les coordonnées des points sont :<br>";for(let n=0;n<4;n++)i+=` $${c[n]}$,`,e+=` $${c[n]}(${(0,o.euh)(t[n].x)};${(0,o.euh)(t[n].y)})$, `;i+=` $${c[4]}$.<br>`,e+=` $${c[4]}(${(0,o.euh)(t[4].x)};${(0,o.euh)(t[4].y)})$.`,this.sup2?d.push((0,n.sYn)({xMin:r-1,yMin:h-1,xMax:l+1,yMax:a+1,grilleSecondaire:!0,grilleSecondaireDistance:1/u,grilleSecondaireXMin:r-1,grilleSecondaireYMin:h-1,grilleSecondaireXMax:l+1,grilleSecondaireYMax:a+1})):d.push((0,n.sYn)({xMin:r-1,yMin:h-1,xMax:l+1,yMax:a+1}));for(let o=0;o<5;o++)d.push(t[o],(0,n.L6P)(t[o],"red"),(0,n.BD1)(t[o]));i+=(0,n.iR9)({xmin:r-1,ymin:h-1,xmax:l+1,ymax:a+1,pixelsParCm:30,scale:.75},d),this.listeQuestions.push(i),this.listeCorrections.push(e),(0,o.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Coordonnées entières\n2 : Coordonnées 'en demis'\n3 : Coordonnées 'en quarts'"],this.besoinFormulaire2CaseACocher=["Grille de lecture"]}},75181:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>o,default:()=>n});var t=s(56126);const o="Déterminer les coordonnées (positives) d’un point";function n(){t.default.call(this),this.titre=o,this.quartDePlan=!0}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=75181.c3a0490a2b1a30e88805.js.map
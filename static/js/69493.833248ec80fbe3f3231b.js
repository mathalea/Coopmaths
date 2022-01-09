"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[69493,25523],{69493:(e,$,t)=>{t.r($),t.d($,{titre:()=>r,default:()=>d});var i=t(25523),s=t(22380),a=t(25482);const r="Somme des angles dans un triangle";function d(){let e;i.default.call(this),this.sup=1,this.titre=r,this.consigne="",s.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1.5,s.Do.isHtml,this.spacing=2,this.nbQuestions=5,this.consigneModifiable=!1,this.correctionDetailleeDisponible=!0,this.nbCols=1,this.nbColsCorr=1;const $=function(e,$){return e+$<=180?180-(e+$):-1};this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],e=1===this.sup?[1,2,4,5,9]:2===this.sup?[3,6,7,8,10,11,12]:[1,2,3,4,5,6,7,8,9,10,11,12];const t=(0,a.SRM)(e,this.nbQuestions);let i,s,r,d,n,l,h,o;this.consigne="Calculer l'angle demandé dans les triangles suivants :";for(let e,g,w=0,u=0;w<this.nbQuestions&&u<50;){switch(i=(0,a.nSR)(1,26),s=(0,a.nSR)(1,26,[i]),d=(0,a.Gag)(i),n=(0,a.Gag)(s),r=(0,a.nSR)(1,24,[i,s]),l=(0,a.Gag)(r),g=this.correctionDetaillee?"Dans un triangle, la somme des angles est égale à $180\\degree$.<br>":"",t[w]){case 1:h=(0,a.nSR)(10,40),o=(0,a.nSR)(20,100),e=`$${d+n+l}$ est un triangle quelconque. L'angle $\\widehat{${d+n+l}}$ mesure $${h}\\degree$ et l'angle $\\widehat{${n+d+l}}$ mesure $${o}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${n+l+d}}$ ?`,this.correctionDetaillee&&(g+=`$\\widehat{${d+n+l}} + \\widehat{${n+l+d}} + \\widehat{${n+d+l}}=180\\degree$<br>`,g+=`Donc $\\widehat{${n+l+d}}=180- \\left(\\widehat{${d+n+l}} + \\widehat{${n+d+l}}\\right)$.<br>D'où `),g+=`$\\widehat{${n+l+d}}$= $180\\degree-\\left(${h}\\degree+${o}\\degree\\right)=180\\degree-${h+o}\\degree=${$(h,o)}\\degree$.<br>`,g+=`L'angle $\\widehat{${n+l+d}}$ mesure $${$(h,o)}\\degree$.`;break;case 2:h=90,o=(0,a.nSR)(5,85),e=`$${d+n+l}$ est un triangle rectangle en $${n}$ et l'angle $\\widehat{${n+d+l}}$ mesure $${o}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${n+l+d}}$ ?`,this.correctionDetaillee&&(g+=`Comme l'angle $\\widehat{${d+n+l}}$ est droit, les angles $\\widehat{${n+l+d}}$ et $\\widehat{${n+d+l}}$ sont complémentaires.<br>`,g+=`On a donc : $\\widehat{${n+l+d}}+ \\widehat{${n+d+l}}=90\\degree$<br>D'où `),g+=`$\\widehat{${n+l+d}}=90\\degree-${o}\\degree=${90-o}\\degree$<br>`,g+=`L'angle $\\widehat{${n+l+d}}$ mesure $${90-o}\\degree$.`;break;case 3:h=(0,a.nSR)(10,170),o=(180-h)/2,e=`$${d+n+l}$ est un triangle isocèle en $${d}$. L'angle $\\widehat{${n+d+l}}$ mesure $${h}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${n+l+d}}$ ?`,this.correctionDetaillee&&(g+="Les angles à la base d'un triangle isocèle sont de même mesure.<br>",g+=`D'où $\\widehat{${d+n+l}}=\\widehat{${n+l+d}}$.<br>`,g+=`On a donc : $\\widehat{${n+d+l}}+2\\times  \\widehat{${n+l+d}}=180\\degree$.<br>`,g+=`Soit  $${h}\\degree+2\\times  \\widehat{${n+l+d}}=180\\degree$.<br>`,g+=`D'où $2\\times  \\widehat{${n+l+d}}=180\\degree-${h}\\degree$.<br>D'où `),g+=`$\\widehat{${n+l+d}}=\\left(180\\degree-${h}\\degree\\right)\\div  2=${180-h}\\degree\\div  2=${(0,a.k$K)((180-h)/2)}\\degree$<br>`,g+=`L'angle $\\widehat{${n+l+d}}$ mesure $${(0,a.k$K)((180-h)/2)}\\degree$.`;break;case 4:o=(0,a.nSR)(10,80),h=180-2*o,e=`$${d+n+l}$ est un triangle isocèle en $${d}$. L'angle $\\widehat{${d+n+l}}$ mesure $${o}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${n+d+l}}$ ?`,this.correctionDetaillee&&(g+="Les deux angles à la base d'un triangle isocèle sont égaux.<br>",g+=`Donc $\\widehat{${d+n+l}}=\\widehat{${n+l+d}}=${o}\\degree$.<br>D'où `),g+=`$\\widehat{${n+d+l}}=180\\degree-2\\times ${o}\\degree=180\\degree-${2*o}\\degree=${180-2*o}\\degree$.<br>`,g+=`L'angle $\\widehat{${n+d+l}}$ mesure $${180-2*o}\\degree$.`;break;case 5:h=90,o=45,e=`$${d+n+l}$ est un triangle rectangle en $${n}$ et $\\widehat{${n+d+l}}=\\widehat{${n+l+d}}$.<br>Quelle est la mesure de l'angle $\\widehat{${n+l+d}}$ ?`,this.correctionDetaillee&&(g+=`Comme $\\widehat{${n+d+l}}=\\widehat{${n+l+d}}$,<br>`,g+=`on a : $2 \\times  \\widehat{${n+d+l}} + 90\\degree=180\\degree$.<br>D'où `,g+=` $2 \\times  \\widehat{${n+d+l}}=180\\degree-90\\degree=90\\degree$.<br>D'où `),g+=`$\\widehat{${n+d+l}}=90\\degree \\div  2=45\\degree$.<br>`,g+=`L'angle $\\widehat{${n+d+l}}$ mesure $45\\degree$.`;break;case 6:e=`$${d+n+l}$ est un triangle rectangle en $${d}$. L'angle $\\widehat{${d+n+l}}$ mesure le double de l'angle $\\widehat{${d+l+n}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ ?`,this.correctionDetaillee&&(g+=`Comme $\\widehat{${d+n+l}}=2\\times \\widehat{${d+l+n}}$ et comme $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ sont complémentaires,<br>`,g+=`on a : $2 \\times  \\widehat{${d+l+n}} + \\widehat{${d+l+n}}=90\\degree$.<br>D'où `,g+=` $3 \\times  \\widehat{${d+l+n}}=90\\degree$.<br>D'où `),g+=`$\\widehat{${d+l+n}}=90\\degree \\div  3=30\\degree$.<br>`,g+=`$\\widehat{${d+n+l}}=2\\times \\widehat{${d+l+n}}=2\\times  30\\degree=60\\degree$<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $30\\degree$ et l'angle $\\widehat{${d+n+l}}$ mesure $60\\degree$.`;break;case 7:e=`$${d+n+l}$ est un triangle rectangle en $${d}$. L'angle $\\widehat{${d+l+n}}$ mesure le quart de l'angle $\\widehat{${d+n+l}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ ?`,this.correctionDetaillee&&(g+=`Comme $\\widehat{${d+n+l}}=\\dfrac{\\widehat{${d+l+n}}}{4}$, on a $\\widehat{${d+l+n}}=4\\times \\widehat{${d+n+l}}$.<br>`,g+=`De plus $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ sont complémentaires.<br>`,g+=`D'où : $4 \\times  \\widehat{${d+n+l}} + \\widehat{${d+n+l}}=90\\degree$.<br>D'où `,g+=` $5 \\times  \\widehat{${d+n+l}}=90\\degree$.<br>D'où `),g+=`$\\widehat{${d+n+l}}=90\\degree \\div  5=18\\degree$.<br>`,g+=`$\\widehat{${d+l+n}}=4\\times \\widehat{${d+n+l}}=4\\times  18\\degree=72\\degree$.<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $72\\degree$ et l'angle $\\widehat{${d+n+l}}$ mesure $18\\degree$.`;break;case 8:e=`$${d+n+l}$ est un triangle rectangle en $${d}$. L'angle $\\widehat{${d+n+l}}$ est cinq fois plus grand que l'angle $\\widehat{${d+l+n}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ ?`,this.correctionDetaillee&&(g+=`$\\widehat{${d+n+l}}=5\\times \\widehat{${d+l+n}}$ et comme $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ sont complémentaires,<br>`,g+=` on a : $5 \\times  \\widehat{${d+l+n}} + \\widehat{${d+l+n}}=90\\degree$.<br>D'où `,g+=` $6 \\times  \\widehat{${d+l+n}}=90\\degree$.<br>D'où `),g+=`$\\widehat{${d+l+n}}=90\\degree \\div  6=15\\degree$<br>`,g+=`$\\widehat{${d+n+l}}=5\\times \\widehat{${d+l+n}}=5\\times  15\\degree=75\\degree$<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $15\\degree$ et l'angle $\\widehat{${d+n+l}}$ mesure $75\\degree$.`;break;case 9:e=`$${d+n+l}$ est un triangle dont les trois angles sont égaux. Quelles sont les mesures de ses angles ?`,this.correctionDetaillee&&(g+=`De plus, $\\widehat{${d+n+l}}=\\widehat{${d+l+n}}=\\widehat{${n+d+l}}$<br>`,g+=`D'où $3\\times \\widehat{${d+n+l}}=180\\degree$.<br>`,g+=`D'où : $\\widehat{${d+n+l}}=180\\degree\\div  3=60\\degree$.<br>`),g+=`On a donc $\\widehat{${d+n+l}}=\\widehat{${d+l+n}}=\\widehat{${n+d+l}}=60\\degree$.<br>`,g+=`Le triangle $${d+n+l}$ est un triangle équilatéral.`;break;case 10:e=`$${d+n+l}$ est un triangle rectangle en $${d}$. L'angle $\\widehat{${d+l+n}}$ mesure le tiers de l'angle $\\widehat{${d+n+l}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ ?`,this.correctionDetaillee&&(g+=`Comme $\\widehat{${d+n+l}}=\\dfrac{\\widehat{${d+l+n}}}{3}$, on a $\\widehat{${d+l+n}}=3\\times \\widehat{${d+n+l}}$.<br>`,g+=`De plus $\\widehat{${d+n+l}}$ et $\\widehat{${d+l+n}}$ sont complémentaires.<br>`,g+=`D'où : $3 \\times  \\widehat{${d+n+l}} + \\widehat{${d+n+l}}=90\\degree$.<br>D'où `,g+=` $4 \\times  \\widehat{${d+n+l}}=90\\degree$.<br>D'où `),g+=`$\\widehat{${d+n+l}}=90\\degree \\div  4=22,5\\degree$.<br>`,g+=`$\\widehat{${d+l+n}}=3\\times \\widehat{${d+n+l}}=3\\times  22,5\\degree=67,5\\degree$<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${d+n+l}}$ mesure $22,5\\degree$.`;break;case 11:e=`$${d+n+l}$ est un triangle isocèle en $${d}$. L'angle $\\widehat{${n+d+l}}$ mesure les deux tiers de l'angle $\\widehat{${d+n+l}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$, $\\widehat{${d+l+n}}$ et $\\widehat{${n+d+l}}$ ?`,this.correctionDetaillee&&(g+=`Comme $\\widehat{${n+d+l}}=\\dfrac{2\\times  \\widehat{${d+l+n}}}{3}$, on a $\\widehat{${d+l+n}}=\\dfrac{3\\times \\widehat{${n+d+l}}}{2}$.<br>`,g+=`De plus $\\widehat{${d+l+n}}$ et $\\widehat{${d+n+l}}$ sont égaux, alors $\\widehat{${d+n+l}}=\\dfrac{3\\times \\widehat{${n+d+l}}}{2}$.<br>`,g+=`D'où : $\\dfrac{3 \\times  \\widehat{${n+d+l}}}{2}\\times  2 + \\widehat{${n+d+l}}=180\\degree$.<br>`,g+=`D'où : $3 \\times  \\widehat{${n+d+l}} + \\widehat{${n+d+l}}=180\\degree$.<br>D'où `,g+=` $4 \\times  \\widehat{${n+d+l}}=180\\degree$.<br>D'où `),g+=`$\\widehat{${n+d+l}}=180\\degree \\div  4=45\\degree$.<br>`,g+=`$\\widehat{${d+l+n}}=\\dfrac{3\\times \\widehat{${n+d+l}}}{2}=\\dfrac{3\\times  45\\degree}{2}=\\dfrac{135\\degree}{2}=67,5\\degree$<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $67,5\\degree$, l'angle $\\widehat{${d+n+l}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${n+d+l}}$ mesure $45\\degree$`;break;case 12:e=`$${d+n+l}$ est un triangle isocèle en $${d}$. L'angle $\\widehat{${d+n+l}}$ mesure le double de l'angle $\\widehat{${n+d+l}}$.<br>Quelles sont les mesures des angles $\\widehat{${d+n+l}}$, $\\widehat{${d+l+n}}$ et $\\widehat{${n+d+l}}$ ?`,this.correctionDetaillee&&(g+=`On a $\\widehat{${d+n+l}}=2\\times  \\widehat{${n+d+l}}$.<br>`,g+=`De plus $\\widehat{${d+l+n}}$ et $\\widehat{${d+n+l}}$ sont égaux, alors $\\widehat{${d+l+n}}=2\\times \\widehat{${n+d+l}}$.<br>`,g+=`D'où : $2 \\times  \\widehat{${n+d+l}}\\times  2 + \\widehat{${n+d+l}}=180\\degree$.<br>`,g+=`D'où : $4 \\times  \\widehat{${n+d+l}} + \\widehat{${n+d+l}}=180\\degree$.<br>D'où `,g+=` $5 \\times  \\widehat{${n+d+l}}=180\\degree$.<br>D'où `),g+=`$\\widehat{${n+d+l}}=180\\degree \\div  5=36\\degree$.<br>`,g+=`$\\widehat{${d+l+n}}=2\\times \\widehat{${n+d+l}}=2\\times  36\\degree=72\\degree$<br>`,g+=`L'angle $\\widehat{${d+l+n}}$ mesure $72\\degree$, l'angle $\\widehat{${d+n+l}}$ mesure $72\\degree$ et l'angle $\\widehat{${n+d+l}}$ mesure $36\\degree$`}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(g),w++),u++}(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficuté",3," 1 : Facile \n 2 : Difficile \n 3 : Mélange"]}},25523:(e,$,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...$){0===e&&(this.listeArguments=[]);let t="";for(const i of $)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r($),t.d($,{default:()=>i})}}]);
//# sourceMappingURL=69493.833248ec80fbe3f3231b.js.map
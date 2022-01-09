"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[78301,25523],{78301:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>h,interactifReady:()=>u,interactifType:()=>a,amcReady:()=>l,amcType:()=>c,default:()=>b});var s=t(25523),o=t(22380),r=t(25482),n=t(11945);const h="Résoudre des problèmes de courses au marché",u=!0,a="mathLive",l=!0,c="AMCNum";function b(){s.default.call(this),this.titre=h,this.consigne="",this.spacing=2,this.spacingCorr=2,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const e=(0,r.q$q)(["Benjamin","Léa","Aude","Julie","Corinne","Mehdi","Joaquim"]);let i;i=this.sup?(0,r.nSR)(2,5):(0,r.n0o)((0,r.nSR)(2,5)+(0,r.nSR)(1,9)/10);const t=(0,r.n0o)((0,r.nSR)(2,4)+(0,r.nSR)(1,9)/10),s=(0,r.q$q)(["courgettes","carottes","pommes"]);let h,u;this.sup?(u=(0,r.nSR)(15,25),h=500*(0,r.nSR)(2,7)):(u=(0,r.n0o)((0,r.nSR)(12,23)+(0,r.nSR)(1,9)/10),h=10*(0,r.nSR)(21,97));const a=(0,r.q$q)(["boeuf","veau","poulet"]),l=(0,r.n0o)(i*t),c=(0,r.n0o)(h*u/1e3),b=(0,r.n0o)(l+c),m=(0,r.n0o)(h/1e3);let $=`${e} achète ${(0,r.euh)(i)} kg de ${s} à ${(0,r.i6h)(t)} €/kg `;$+=`et ${h} g de ${a} à ${(0,r.i6h)(u)} €/kg. Quel est le prix total à payer ?`;let g=`Prix des ${s} : ${(0,r.euh)(i)} kg × ${(0,r.i6h)(t)} €/kg = ${(0,r.i6h)(l)} €<br>`;g+=`Prix du ${a} : ${(0,r.euh)(m)} kg × ${(0,r.i6h)(u)} €/kg = ${(0,r.euh)(c)} € <br>`,g+=`Prix total à payer : ${(0,r.euh)(l)} € + ${(0,r.euh)(c)} €`,Number.isInteger((0,r.n0o)(100*(l+c)))?g+=" = ":g+=" ≈ ",g+=`${(0,r.S1u)(b)} €<br>`,g+=`<br><i>Le prix total aurait aussi pu être trouvé en un seul calcul</i> : ${(0,r.euh)(i)} kg × ${(0,r.i6h)(t)} €/kg + ${(0,r.euh)(m)} kg × ${(0,r.i6h)(u)} €/kg `,Number.isInteger(100*b)?g+=" = ":g+=" ≈ ",g+=`${(0,r.S1u)(b)} €<br>`,o.Do.isHtml||(g=`Prix des ${s} : $${(0,r.euh)(i)}~\\text{kg}\\times${(0,r.i6h)(t)}~\\text{\\euro{}/kg} = ${(0,r.i6h)(l)}~\\text{\\euro}$<br>`,g+=`Prix du ${a} : $${(0,r.euh)(m)}~\\text{kg}\\times${(0,r.i6h)(u)}~\\text{\\euro{}/kg} = ${(0,r.euh)(c)}~\\text{\\euro}$<br>`,g+=`Prix total à payer : $${(0,r.euh)(l)}~\\text{\\euro} + ${(0,r.euh)(c)}~\\text{\\euro}`,Number.isInteger(100*b)?g+="=":g+="\\approx",g+=` ${(0,r.S1u)(b)}~\\text{\\euro}$<br>`);const p=(0,r.S1u)(b),C=[p,`${p}0`];(0,n.Iq)(this,0,C),o.Do.isAmc&&(this.autoCorrection[0].reponse.valeur[0]=(0,r.vbX)(b,2),this.autoCorrection[0].reponse.param.digits=5,this.autoCorrection[0].reponse.param.decimals=2),this.interactif&&($+=`<br> ${(0,n.G5)(this,0,"largeur20 inline",{texteApres:" €",texte:"Le prix total à payer sera de "})}`),this.listeQuestions.push($),this.listeCorrections.push(g),(0,r.FRy)(this)},this.besoinFormulaireCaseACocher=["Calculs faciles"]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=78301.a5b3a038ed67803bdc97.js.map
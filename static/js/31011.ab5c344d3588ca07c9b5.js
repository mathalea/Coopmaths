"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[31011,17007],{31011:(t,e,i)=>{i.r(e),i.d(e,{amcReady:()=>a,amcType:()=>h,interactifReady:()=>u,interactifType:()=>l,titre:()=>c,default:()=>m});var s=i(17007),o=i(66170),r=i(30169),n=i(75664);const a=!0,h="qcmMono",u=!0,l=["qcm","mathLive"],c="Tables de multiplications et multiples de 10";function m(t="2-3-4-5-6-7-8-9"){s.default.call(this),this.sup=t,this.sup2=1,this.titre=c,this.consigne="Calculer",this.spacing=2,this.tailleDiaporama=100,this.nouvelleVersion=function(){this.interactifType=2===parseInt(this.sup2)?"mathLive":"qcm",this.autoCorrection=[];let t=[];this.listeQuestions=[],this.listeCorrections=[],this.sup||(this.sup="2-3-4-5-6-7-8-9"),"number"==typeof this.sup?t[0]=this.sup:t=this.sup.split("-");const e=(0,r.RZ9)(t,[2,3,4,5,6,7,8,9,10],this.nbQuestions);for(let i,s,o,a,h,u,l,c=0;c<this.nbQuestions;c++){if(this.autoCorrection[c]={},i=e[c][0],s=e[c][1],o=i>1?(0,r.q$q)([1,10,100,1e3]):(0,r.q$q)([10,100,1e3]),a=(0,r.q$q)([1,10,100,1e3]),i*=o,s*=a,l=(0,r.nSR)(0,1),1===l){const t=i;i=s,s=t}h="$ "+(0,r.euh)(i)+" \\times "+(0,r.euh)(s)+" = \\dotfill $",u="$ "+(0,r.euh)(i)+" \\times "+(0,r.euh)(s)+" = "+(0,r.euh)(i*s)+" $",this.autoCorrection[c].enonce=`${h}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,r.Pbm)(i*s)}$`,statut:!0,feedback:"Correct !"},{texte:`$${(0,r.Pbm)((0,r.n0o)(i*s/10))}$`,statut:!1,feedback:"Compte le nombre de zéros dans chaque facteur"},{texte:`$${(0,r.Pbm)((0,r.n0o)(i*s*10))}$`,statut:!1,feedback:"Compte le nombre de zéros dans chaque facteur"},{texte:`$${(0,r.Pbm)((0,r.n0o)(i*s/100))}$`,statut:!1,feedback:"Compte le nombre de zéros dans chaque facteur"},{texte:`$${(0,r.Pbm)((0,r.n0o)(i*s*100))}$`,statut:!1,feedback:"Compte le nombre de zéros dans chaque facteur"}],this.autoCorrection[c].options={ordered:!1,lastChoice:5},this.interactif&&"qcm"===this.interactifType?h+=(0,n.l3)(this,c).texte:(h+=(0,n.G5)(this,c),(0,n.Iq)(this,c,i*s),h=h.replace("\\dotfill","")),this.listeQuestions.push(h),this.listeCorrections.push(u)}(0,r.K1R)(this)},this.besoinFormulaireTexte=["Choix des tables","Nombres séparés par des tirets"],o.Do.isHtml&&!o.Do.isDiaporama&&(this.besoinFormulaire2Numerique=["Exercice interactif",2,"1 : QCM\n2 : Numérique"])}},17007:(t,e,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let i="";for(const s of e)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=31011.ab5c344d3588ca07c9b5.js.map
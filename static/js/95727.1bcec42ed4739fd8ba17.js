(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[95727,71129],{95727:(e,i,s)=>{"use strict";s.r(i),s.d(i,{amcReady:()=>a,amcType:()=>h,interactifReady:()=>r,interactifType:()=>u,titre:()=>c,default:()=>l});var t=s(71129),n=s(62259),o=s(63861),$=s(10229);const a=!0,h=4,r=!0,u="numerique",c="Multiplications d’un nombre décimal par 10, 100 ou 1 000.";function l(){t.default.call(this),this.titre=c,this.amcReady=a,this.interactifReady=r,this.interactifType=u,this.amcType=h,this.consigne="Calculer.",this.sup=3,this.sup2=!1,this.spacing=2,this.spacingCorr=2,this.nbQuestions=8,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];let e,i,s=[];1!==this.sup||this.sup2||(s=[1,2]),1===this.sup&&this.sup2&&(s=[1,2,5,6]),2!==this.sup||this.sup2||(s=[3,4]),2===this.sup&&this.sup2&&(s=[3,4,3,4,7,8,9,10]),3!==this.sup||this.sup2||(s=[1,2,3,4]),3===this.sup&&this.sup2&&(s=[1,2,3,4,5,6,7,8,9,10]),this.sup2&&(this.consigne="Calculer et compléter.");const t=(0,o.SRM)(s,this.nbQuestions),a=(0,o.SRM)([10,100,1e3],this.nbQuestions);for(let h,r,u,c,l,q=0,m=0;q<this.nbQuestions&&m<50;){switch(e=t[q],e){case 1:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999)]),u=(0,o.n0o)(u/(0,o.q$q)([10,100,1e3,1e4])),c=a[q],h=`$${(0,o.euh)(u)}\\times${(0,o.euh)(c)}=\\ldots$`,r=`$${(0,o.euh)(u)} \\times ${(0,o.euh)(c)} = ${(0,o.k$K)(u*c)}$`,i=(0,o.n0o)(u*c);break;case 2:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999)]),u=(0,o.n0o)(u/(0,o.q$q)([10,100,1e3,1e4])),c=a[q],h=`$${(0,o.euh)(c)}\\times${(0,o.euh)(u)}=\\ldots$`,r=`$${(0,o.euh)(c)} \\times ${(0,o.euh)(u)} = ${(0,o.k$K)(u*c)}$`,i=(0,o.n0o)(u*c);break;case 3:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$${(0,o.qaf)(u,l)}\\times${(0,o.euh)(c)}=\\ldots$`,r=`$${(0,o.qaf)(u,l)} \\times ${(0,o.euh)(c)} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=(0,o.n0o)(u*c/l);break;case 4:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$${(0,o.euh)(c)}\\times${(0,o.qaf)(u,l)}=\\ldots$`,r=`$${(0,o.euh)(c)} \\times ${(0,o.qaf)(u,l)} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=(0,o.n0o)(u*c/l);break;case 5:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999)]),u=(0,o.n0o)(u/(0,o.q$q)([10,100,1e3,1e4])),c=a[q],h=`$\\ldots \\times${(0,o.euh)(c)} = ${(0,o.k$K)(u*c)}$`,r=`$${(0,o.b1)((0,o.euh)(u))} \\times ${(0,o.euh)(c)} = ${(0,o.k$K)(u*c)}$`,i=u;break;case 6:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999)]),u=(0,o.n0o)(u/(0,o.q$q)([10,100,1e3,1e4])),c=a[q],h=`$${(0,o.euh)(c)} \\times \\ldots = ${(0,o.k$K)(u*c)}$`,r=`$${(0,o.euh)(c)} \\times ${(0,o.b1)((0,o.euh)(u))}  = ${(0,o.k$K)(u*c)}$`,i=c;break;case 7:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$${(0,o.qaf)(u,l)}\\times \\ldots = ${(0,o.k$K)(u/l*c)}$`,r=`$${(0,o.qaf)(u,l)} \\times ${(0,o.b1)((0,o.euh)(c))} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=c;break;case 8:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$ \\ldots \\times${(0,o.qaf)(u,l)}= ${(0,o.k$K)(u/l*c)}$`,r=`$${(0,o.b1)((0,o.euh)(c))} \\times ${(0,o.qaf)(u,l)} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=c;break;case 9:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$${(0,o.qaf)(u,"\\ldots")}\\times${(0,o.euh)(c)} = ${(0,o.k$K)(u/l*c)}$`,r=`$${(0,o.qaf)(u,(0,o.b1)((0,o.euh)(l)))} \\times ${(0,o.euh)(c)} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=l;break;case 10:u=(0,o.q$q)([(0,o.nSR)(11,99),(0,o.nSR)(100,999),(0,o.nSR)(2,9)]),l=(0,o.q$q)([10,100,1e3]),c=a[q],h=`$${(0,o.euh)(c)}\\times${(0,o.qaf)(u,"\\ldots")} = ${(0,o.k$K)(u/l*c)}$`,r=`$${(0,o.euh)(c)} \\times ${(0,o.qaf)(u,(0,o.b1)((0,o.euh)(l)))} = ${(0,o.qaf)(u*c,l)} = ${(0,o.k$K)(u/l*c)}$`,i=l}n.Do.isHtml&&this.interactif&&(h+="$~=$"+(0,$.te)(this,q)),(0,$.Iq)(this,q,i),n.Do.isAmc&&(this.autoCorrection[q].enonce=h,this.autoCorrection[q].propositions=[{texte:r,statut:""}],this.autoCorrection[q].reponse={valeur:i,param:{digits:(0,o.WW7)(i)+(0,o.D4$)(i)+2,decimals:(0,o.D4$)(i)+1,signe:!1,exposantNbChiffres:0}}),-1===this.listeQuestions.indexOf(h)&&(this.listeQuestions.push(h),this.listeCorrections.push(r),q++),m++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Types de calculs",3,"1 : Écriture décimale\n2 : Écriture fractionnaire\n3 : Écritures décimales et fractionnaires"],this.besoinFormulaire2CaseACocher=["Avec des calculs à trous"]}},71129:(e,i,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=95727.1bcec42ed4739fd8ba17.js.map
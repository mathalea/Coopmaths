(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2900,5216],{72900:(i,t,e)=>{"use strict";e.r(t),e.d(t,{amcReady:()=>n,interactifReady:()=>r,interactifType:()=>c,amcType:()=>h,titre:()=>l,default:()=>u});var s=e(75216),$=e(89459),a=e(55339),o=e(32964);const n=!0,r=!0,c=" ",h=4,l="Substitution";function u(i=1){s.default.call(this),this.sup=i,this.titre=l,this.amcType=h,this.interactif=!0,this.interactifReady=r,this.consigne="Calculer",this.spacing=1,this.consigneModifiable=!1,this.nouvelleVersion=function(){let i;this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[];const t=(0,a.SRM)([1,2,3,4,5,6,7,8,9,10],this.nbQuestions);let e=(0,a.nSR)(2,9),s=(0,a.nSR)(2,9),n=(0,a.nSR)(2,9);this.sup>1&&(e*=(0,a.q$q)([-1,1]),s*=(0,a.q$q)([-1,1]),n*=(0,a.q$q)([-1,1]));const r=(0,a.w6H)(9,[0,1]),c=(0,a.q$q)(r);(0,a.XzT)(r,c);const h=(0,a.q$q)(r);(0,a.XzT)(r,h);const l=(0,a.q$q)(r);$.Do.isHtml?this.consigne=`Calculer pour $\\boldsymbol{x=${c}}$, $\\boldsymbol{y=${h}}$ et $\\boldsymbol{z=${l}}$.`:this.consigne=`Calculer pour $x=${c}$, $y=${h}$ et $z=${l}$.`;for(let $,u,b=0,m=0;b<this.nbQuestions&&m<50;){switch(this.autoCorrection[b]={},t[b]){case 1:$=`$${(0,a.Gag)(b+1)}=${e}x$`,u=`$${(0,a.Gag)(b+1)}=${e}x=${e}\\times  ${c}=${e*c}$`,i=e*c;break;case 2:$=`$${(0,a.Gag)(b+1)}=${e}x-y$`,u=`$${(0,a.Gag)(b+1)}=${e}x-y=${e}\\times  ${c}-${h}=${e*c-h}$`,i=e*c-h;break;case 3:$=`$${(0,a.Gag)(b+1)}=xy$`,u=`$${(0,a.Gag)(b+1)}=xy=${c}\\times  ${h}=${c*h}$`,i=c*h;break;case 4:$=`$${(0,a.Gag)(b+1)}=x+y$`,u=`$${(0,a.Gag)(b+1)}=x+y=${c}+${h}=${c+h}$`,i=c+h;break;case 5:$=`$${(0,a.Gag)(b+1)}=xy+z$`,u=`$${(0,a.Gag)(b+1)}=xy+z=${c}\\times  ${h}+${l}=${c*h+l}$`,i=c*h+l;break;case 6:$=`$${(0,a.Gag)(b+1)}=x(y+z)$`,u=`$${(0,a.Gag)(b+1)}=x(y+z)=${c}\\times (${h}+${l})=${c*(h+l)}$`,i=c*(h+l);break;case 7:$=`$${(0,a.Gag)(b+1)}=x^2+${(0,a.PMY)(e)}y$`,u=`$${(0,a.Gag)(b+1)}=x^2+${(0,a.PMY)(e)}y=${c}^2+${(0,a.PMY)(e)}\\times  ${h}=${c*c}+${(0,a.PMY)(e)}\\times  ${h}=${c*c+e*h}$`,i=c*c+e*h;break;case 8:$=`$${(0,a.Gag)(b+1)}=x^2+y^2$`,u=`$${(0,a.Gag)(b+1)}=x^2+y^2=${c}^2+${h}^2=${c*c}+${h*h}=${c*c+h*h}$`,i=c*c+h*h;break;case 9:$=`$${(0,a.Gag)(b+1)}=${e}x^2+y^2$`,u=`$${(0,a.Gag)(b+1)}=${e}x^2+y^2=${e}\\times  ${c}^2+${h}^2=${e}\\times  ${c*c}+${h*h}=${e*c*c+h*h}$`,i=e*c*c+h*h;break;case 10:$=`$${(0,a.Gag)(b+1)}=${e}x^2+${(0,a.PMY)(s)}x+${(0,a.PMY)(n)}$`,u=`$${(0,a.Gag)(b+1)}=${e}x^2+${(0,a.PMY)(s)}x+${(0,a.PMY)(n)}=${e}\\times  ${c}^2+${(0,a.PMY)(s)}\\times  ${(0,a.PMY)(c)}+${(0,a.PMY)(n)}=${e}\\times  ${c*c}+${(0,a.PMY)(s)}\\times  ${c}+${(0,a.PMY)(n)}=${e*c*c+s*c+n}$`,i=e*c*c+s*c+n}this.interactif&&($+=(0,o.te)(this,b,{texte:"$~=$"})),this.autoCorrection[b]={enonce:$+"\\\\"+this.consigne,propositions:[{texte:u,statut:"emplacement à louer",feedback:""}],reponse:{texte:"résultat",valeur:i,param:{digits:3,decimals:0,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:0}}},-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(u),b++),m++}$.Do.isAmc,(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif"],(0,o.Sq)(this)}},75216:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=2900.57b887ec9a2254ec927a.js.map
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[27554,17007],{27554:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>a,interactifReady:()=>$,interactifType:()=>h,amcReady:()=>x,amcType:()=>u,default:()=>l});var s=e(17007),o=e(30169),n=e(75664),r=e(66170);const a="Utiliser la double distributivité",$=!0,h="mathLive",x=!0,u="AMCOpenNum✖︎3";function l(){s.default.call(this),this.titre=a,this.interactifReady=$,this.interactifType=h,this.amcReady=x,this.amcType=u,this.consigne="Développer et réduire les expressions suivantes.",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=5,this.sup=1,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];let i=[1,2];2===this.sup&&(i=[3,4]),3===this.sup&&(i=[1,2,3,4]);const t=(0,o.SRM)(i,this.nbQuestions);for(let e,s,a,$,h,x,u,l,c,b,p,m=0,d=0;m<this.nbQuestions&&d<50;){switch(p=t[m],u=(0,o.nSR)(2,9),l=(0,o.nSR)(2,9),c=(0,o.nSR)(2,9,[u]),b=(0,o.nSR)(2,9,[l]),p){case 1:l=(0,o.nSR)(2,10),b=(0,o.nSR)(2,12),e=`$(x+${l})(x+${b})$`,s=`$(x+${l})(x+${b})=x^2+${l}x+${b}x+${l*b}=x^2+${l+b}x+${l*b}$`,a=`x^2+${l+b}x+${l*b}`,$=1,h=l+b,x=l*b;break;case 2:e=`$(${u}x+${l})(${c}x+${b})$`,s=`$(${u}x+${l})(${c}x+${b})=${u*c}x^2+${u*b}x+${l*c}x+${l*b}=${u*c}x^2+${u*b+l*c}x+${l*b}$`,a=`${u*c}x^2+${u*b+l*c}x+${l*b}`,$=u*c,h=u*b+l*c,x=l*b;break;case 3:e=`$(${u}x-${l})(${c}x+${b})$`,(0,o.h$R)(u*b-l*c,0)?(s=`$(${u}x-${l})(${c}x+${b})=${u*c}x^2+${b*u}x-${l*c}x-${l*b}=${(0,o.eyN)(`${u*c}*x^2-${l*b}`)}$`,a=(0,o.eyN)(`${u*c}*x^2-${l*b}`),$=u*c,h=0,x=-l*b):(s=`$(${u}x-${l})(${c}x+${b})=${u*c}x^2+${b*u}x-${l*c}x-${l*b}=${(0,o.eyN)(`${u*c}*x^2+(${b*u-l*c})*x-${l*b}`)}$`,a=(0,o.eyN)(`${u*c}*x^2+(${b*u-l*c})*x-${l*b}`),$=u*c,h=u*b-l*c,x=-l*b);break;case 4:e=`$(${u}x-${l})(${c}x-${b})$`,s=`$(${u}x-${l})(${c}x-${b})=${u*c}x^2-${u*b}x-${l*c}x+${l*b}=${u*c}x^2-${u*b+l*c}x+${l*b}$`,a=`${u*c}x^2-${u*b+l*c}x+${l*b}`,$=u*c,h=-u*b-l*c,x=l*b}e+=(0,n.G5)(this,m),(0,n.Iq)(this,m,a),r.Do.isAmc&&(this.autoCorrection[m].enonce=e,this.autoCorrection[m].propositions=[{texte:s,statut:4}],this.autoCorrection[m].reponse={texte:"$x^2 $ ",textePosition:"right",valeur:$,param:{digits:2,decimals:0,approx:0,signe:!1,exposantNbChiffres:0,vertical:!0}},this.autoCorrection[m].reponse2={texte:"$x $ ",textePosition:"right",valeur:h,param:{digits:3,decimals:0,approx:0,signe:!0,exposantNbChiffres:0,vertical:!0}},this.autoCorrection[m].reponse3={texte:"",textePosition:"right",valeur:x,param:{digits:2,decimals:0,approx:0,signe:!0,exposantNbChiffres:0,vertical:!0}}),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(s),m++),d++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : (x+a)(x+b) et (ax+b)(cx+d)\n 2 : (ax-b)(cx+d) et (ax-b)(cx-d)\n 3 : Tous les types"]}},17007:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=27554.a0ddcfb30509adbc104c.js.map
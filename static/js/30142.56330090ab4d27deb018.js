"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[30142,76612,25523],{76612:(i,t,e)=>{e.r(t),e.d(t,{interactifReady:()=>u,interactifType:()=>a,titre:()=>l,default:()=>c});var s=e(25523),r=e(22380),o=e(25482),n=e(11945),h=e(13898);const u=!0,a="mathLive",l="Arrondir une racine carrée";function c(){s.default.call(this),this.titre=l,this.nbQuestions=3,this.nbCols=2,this.nbColsCorr=1,this.sup=1,this.interactifType=a,this.interactifReady=u,r.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=3.5,this.nouvelleVersion=function(){let i,t,e,s,r;this.sup=parseInt(this.sup),this.autoCorrection=[],this.consigne="Arrondir chaque nombre à l'unité, puis au dixième, puis au centième.",this.listeQuestions=[],this.listeCorrections=[];for(let u=0,a="",l="",c=0;u<this.nbQuestions&&c<50;)this.autoCorrection[3*u]={},this.autoCorrection[3*u+1]={},this.autoCorrection[3*u+2]={},1===this.sup?(e=(0,o.nSR)(2,300,[4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289]),i=Math.sqrt(e),t=`\\sqrt{${e}}`):2===this.sup&&(r=(0,o.nSR)(11,99)/10,s=(0,o.nSR)(1,89,60),(0,o.q$q)([!0,!1])?(i=r*(0,h.mC)(s),t=`${(0,o.euh)(r)}\\cos(${s})`):(i=r/(0,h.mC)(s),t=`\\dfrac{${(0,o.euh)(r)}}{\\cos(${s})}`)),a=`$\\text{Quand~on~écrit~sur~la~calculatrice~} ${t}, \\text{~elle~renvoie} : ${(0,o.euh)(i)}$`,a+="<br>Arrondi à l'unité : ",a+=(0,n.G5)(this,3*u),l=`$\\text{Quand~on~écrit~sur~la~calculatrice~} ${t}, \\text{~elle~renvoie} : ${(0,o.euh)(i)}$`,l+="<br>Arrondi à l'unité : ",l+=`$${(0,o.euh)((0,o.vbX)(i,0))}$`,(0,n.Iq)(this,3*u,(0,o.vbX)(i,0)),a+="<br>Arrondi au dixième : ",a+=(0,n.G5)(this,3*u+1),l+="<br>Arrondi au dixième : ",l+=`$${(0,o.euh)((0,o.vbX)(i,1))}$`,(0,n.Iq)(this,3*u+1,(0,o.vbX)(i,1)),a+="<br>Arrondi au centième : ",a+=(0,n.G5)(this,3*u+2),l+="<br>Arrondi au centième : ",l+=`$${(0,o.euh)((0,o.vbX)(i,2))}$`,(0,n.Iq)(this,3*u+2,(0,o.vbX)(i,2)),-1===this.listeQuestions.indexOf(a)&&(this.listeQuestions.push(a),this.listeCorrections.push(l),u++),c++;(0,o.K1R)(this)}}},30142:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>r,default:()=>o});var s=e(76612);const r="Arrondir une valeur comprenant un cosinus";function o(){s.default.call(this),this.titre=r,this.sup=2,this.sup2=!0,this.spacing=3,this.besoinFormulaireNumerique=!1}},25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=30142.56330090ab4d27deb018.js.map
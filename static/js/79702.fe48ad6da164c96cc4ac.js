"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[79702,95365,17007],{95365:(t,i,e)=>{e.r(i),e.d(i,{amcReady:()=>h,amcType:()=>u,interactifReady:()=>c,interactifType:()=>l,titre:()=>f,default:()=>$});var s=e(17007),o=e(66170),a=e(30169),n=e(75664),r=e(64709);const h=!0,u="qcmMono",c=!0,l="mathLive",f="Additionner ou soustraire deux fractions (dénominateurs multiples)";function $(t=11){s.default.call(this),this.amcReady=h,this.amcType=u,this.interactifReady=c,this.interactifType=l,this.sup=t,this.sup2=!1,this.titre=f,this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée",this.spacing=2,this.spacingCorr=2,this.nbQuestions=5,this.nbColsCorr=1,this.sup2=3,this.qcmDisponible=!0,this.modeQcm=!1,this.nouvelleVersion=function(){let t;this.sup=parseInt(this.sup),this.qcm=["5N20",[],"Additionner ou soustraire deux fractions (dénominateurs multiples)",1],6===this.level&&(this.qcm[0]="6C23"),this.listeQuestions=[],this.listeCorrections=[],1===parseInt(this.sup2)&&(t=(0,a.SRM)(["+"],this.nbQuestions)),2===parseInt(this.sup2)&&(t=(0,a.SRM)(["-"],this.nbQuestions)),3===parseInt(this.sup2)&&(t=(0,a.SRM)(["+","-"],this.nbQuestions));for(let i,e,s,h,u,c,l,f=0;f<this.nbQuestions;f++){for(this.autoCorrection[f]={},c="",l="",i=(0,a.nSR)(1,9),e=(0,a.nSR)(2,9,i);e===i;)e=(0,a.nSR)(2,9);if(u=this.sup>1?(0,a.nSR)(2,this.sup):1,h=e*u,s="-"===t[f]?(0,a.q$q)([(0,a.nSR)(1,e*u),(0,a.nSR)(e*u,9*u)]):(0,a.nSR)(1,19,h),"+"===t[f]){this.autoCorrection[f].propositions=[{texte:`$${(0,a.xau)(i*h+s*e,e*h)}$`,statut:!0},{texte:`$${(0,a.qaf)(i+s,e+h)}$`,statut:!1},{texte:`$${(0,a.qaf)(i+s,e*h)}$`,statut:!1},{texte:`$${(0,a.qaf)(i*s,e*h)}$`,statut:!1}],this.autoCorrection[f].options={ordered:!1,lastChoice:5},6===this.level&&(this.autoCorrection[f].propositions[0].texte=`$${(0,a.qaf)(i+s,e)}$`);const t=(0,a.nSR)(1,2);1===t?(c=`$${(0,a.qaf)(i,e)}+${(0,a.qaf)(s,h)}=$`,this.autoCorrection[f].enonce=`${c}\n`):(c=`$${(0,a.qaf)(s,h)}+${(0,a.qaf)(i,e)}=$`,this.autoCorrection[f].enonce=`${c}\n`),1===t?(l=`$${(0,a.qaf)(i,e)}+${(0,a.qaf)(s,h)}=`,6!==this.level&&(l+=`${(0,a.qaf)(i+(0,a.b1)("\\times "+u),e+(0,a.b1)("\\times "+u))}+${(0,a.qaf)(s,h)}=${(0,a.qaf)(i*u,e*u)}+${(0,a.qaf)(s,h)}=`),l+=`${(0,a.qaf)(i*u+"+"+s,h)}=${(0,a.qaf)(i*u+s,h)}$`):(l=`$${(0,a.qaf)(s,h)}+${(0,a.qaf)(i,e)}=`,6!==this.level&&(l+=`${(0,a.qaf)(s,h)}+${(0,a.qaf)(i+(0,a.b1)("\\times "+u),e+(0,a.b1)("\\times "+u))}=${(0,a.qaf)(s,h)}+${(0,a.qaf)(i*u,e*u)}=`),l+=`${(0,a.qaf)(s+"+"+i*u,h)}=${(0,a.qaf)(i*u+s,h)}$`);const $=(0,a.Md9)(i*u+s,h);1!==$&&(l+=`$=${(0,a.qaf)((0,a.n0o)((i*u+s)/$)+(0,a.b1)("\\times "+$),(0,a.n0o)(h/$)+(0,a.b1)("\\times "+$))}=${(0,a.xau)((0,a.n0o)((i*u+s)/$),(0,a.n0o)(h/$))}$`),(this.modeQcm&&!o.Do.isAmc||this.interactif&&"qcm"===this.interactifType)&&(c+="<br>"+(0,n.l3)(this,f).texte),o.Do.isHtml&&"mathLive"===this.interactifType&&(0,n.Iq)(this,f,new r.Z(i*h+s*e,e*h),{formatInteractif:"fractionEgale"})}else{this.autoCorrection[f].propositions=[{texte:`$${(0,a.xau)(Math.abs(i*h-s*e),Math.abs(e*h))}$`,statut:!0},{texte:`$${(0,a.qaf)(Math.abs(i-s),Math.abs(e-h))}$`,statut:!1},{texte:`$${(0,a.qaf)(Math.abs(i-s),e*h)}$`,statut:!1},{texte:`$${(0,a.qaf)(i*s,e*h)}$`,statut:!1}],this.autoCorrection[f].options={ordered:!1,lastChoice:5},6===this.level&&(this.autoCorrection[f].propositions[0].texte=`$${(0,a.qaf)(Math.abs(i-s),e)}$`),c=i/e>s/h?`$${(0,a.qaf)(i,e)}-${(0,a.qaf)(s,h)}=$`:`$${(0,a.qaf)(s,h)}-${(0,a.qaf)(i,e)}=$`,i/e>s/h?(l=`$${(0,a.qaf)(i,e)}-${(0,a.qaf)(s,h)}=`,6!==this.level&&(l+=`${(0,a.qaf)(i+(0,a.b1)("\\times "+u),e+(0,a.b1)("\\times "+u))}-${(0,a.qaf)(s,h)}=${(0,a.qaf)(i*u,e*u)}-${(0,a.qaf)(s,h)}=`),l+=`${(0,a.qaf)(i*u+"-"+s,h)}=${(0,a.qaf)(i*u-s,h)}$`):(l=`$${(0,a.qaf)(s,h)}-${(0,a.qaf)(i,e)}=`,6!==this.level&&(l+=`${(0,a.qaf)(s,h)}-${(0,a.qaf)(i+(0,a.b1)("\\times "+u),e+(0,a.b1)("\\times "+u))}=${(0,a.qaf)(s,h)}-${(0,a.qaf)(i*u,e*u)}=${(0,a.qaf)(s+"-"+i*u,h)}=`),l+=`${(0,a.qaf)(s-i*u,h)}$`);const t=(0,a.Md9)(i*u-s,h);this.modeQcm||((0,a.WnP)(i*u-s)%h==0?l+=`$=${(0,a.n0o)((0,a.WnP)(i*u-s)/h)}$`:1!==t&&(l+=`$=${(0,a.qaf)((0,a.n0o)((0,a.WnP)(i*u-s)/t)+(0,a.b1)("\\times "+t),(0,a.n0o)(h/t)+(0,a.b1)("\\times "+t))}=${(0,a.xau)((0,a.n0o)((0,a.WnP)(i*u-s)/t),(0,a.n0o)(h/t))}$`)),(this.modeQcm&&!o.Do.isAmc||this.interactif&&"qcm"===this.interactifType)&&(c+="<br>"+(0,n.l3)(this,f).texte),o.Do.isHtml&&"mathLive"===this.interactifType&&(0,n.Iq)(this,f,new r.Z(Math.abs(i*h-s*e),e*h),{formatInteractif:"fractionEgale"})}o.Do.isHtml&&"mathLive"===this.interactifType&&(c+=(0,n.G5)(this,f)),c=c.replaceAll("$$"," "),l=l.replaceAll("$$"," "),o.Do.isAmc&&(this.autoCorrection[f].enonce=c),this.listeQuestions.push(c),this.listeCorrections.push(l)}(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale du coefficient multiplicateur",99999],this.besoinFormulaire2Numerique=["Types de calculs ",3,"1 : Additions\n2 : Soustractions\n3 : Additions et soustractions"]}},79702:(t,i,e)=>{e.r(i),e.d(i,{amcReady:()=>o,interactifReady:()=>a,interactifType:()=>n,amcType:()=>r,titre:()=>h,default:()=>u});var s=e(95365);const o=!0,a=!0,n="qcm",r="qcmMono",h="Additionner ou soustraire des fractions de même dénominateur";function u(){s.default.call(this),this.sup=1,this.sup2=3,this.level=6,this.titre=h,this.besoinFormulaireNumerique2=!1}},17007:(t,i,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...i){0===t&&(this.listeArguments=[]);let e="";for(const s of i)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(i),e.d(i,{default:()=>s})}}]);
//# sourceMappingURL=79702.fe48ad6da164c96cc4ac.js.map
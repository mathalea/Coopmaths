"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[14092,17651,25523],{14092:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>r});var s=t(17651);const n="Additionner ou soustraire deux fractions";function r(){s.default.call(this)}},17651:(i,e,t)=>{t.r(e),t.d(e,{amcReady:()=>u,amcType:()=>l,titre:()=>h,interactifReady:()=>c,interactifType:()=>m,default:()=>d});var s=t(25523),n=t(25482),r=t(11945),o=t(41154),a=t(22380);const u=!0,l="AMCNum",h="Additionner ou soustraire deux fractions",c=!0,m="mathLive";function d(){s.default.call(this),this.sup=2,this.sup2=!1,this.sup3=!0,this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée.",this.spacing=2,this.spacingCorr=2,this.nbQuestions=5,this.nbColsCorr=1,this.nouvelleVersion=function(){let i;this.sup3||a.Do.isAmc?this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée.":this.consigne="Calculer :",this.sup=parseInt(this.sup),this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[],1===this.sup&&(i=["b_multiple_de_d","d_multiple_de_b","b_multiple_de_d","d_multiple_de_b","entier"]),2===this.sup&&(i=["ppcm","ppcm","premiers_entre_eux",(0,n.q$q)(["b_multiple_de_d","d_multiple_de_b"]),"entier"]);const e=(0,n.SRM)(i,this.nbQuestions),t=(0,n.SRM)(["-","-","+","+"],this.nbQuestions),s=[[6,9],[4,6],[8,12],[9,12],[10,15],[10,25],[6,21],[12,30],[6,8],[50,75]];for(let u,l,h,c,m,d,f,b,p,$,_,q,C,g,R=0;R<this.nbQuestions;R++){const i=t[R];switch(g=e[R],g){case"ppcm":C=(0,n.q$q)(s),(0,n.q$q)([!0,!1])?(l=C[0],c=C[1]):(l=C[1],c=C[0]),d=(0,n.U8t)(l,c)/l,f=(0,n.U8t)(l,c)/c;break;case"premiers_entre_eux":for(l=(0,n.nSR)(2,9),c=(0,n.nSR)(2,9);1!==(0,n.Md9)(l,c);)l=(0,n.nSR)(2,9),c=(0,n.nSR)(2,9);d=(0,n.U8t)(l,c)/l,f=(0,n.U8t)(l,c)/c;break;case"d_multiple_de_b":l=(0,n.nSR)(2,9),m=(0,n.nSR)(2,11),c=l*m;break;case"b_multiple_de_d":c=(0,n.nSR)(2,9),m=(0,n.nSR)(2,11),l=c*m}if(u=(0,n.nSR)(1,9,[l]),h=(0,n.nSR)(1,9,[c]),this.sup2&&(u*=(0,n.q$q)([-1,1]),h*=(0,n.q$q)([-1,1])),!this.sup2&&"-"===i&&u/l<h/c&&([u,l,h,c]=[h,c,u,l],d=(0,n.U8t)(l,c)/l,f=(0,n.U8t)(l,c)/c,"d_multiple_de_b"===g?(g="b_multiple_de_d",m=l/c):"b_multiple_de_d"===g&&(g="d_multiple_de_b",m=c/l)),$=`$${(0,n.qaf)(u,l)}${i}${(0,n.qaf)(h,c)}=$`,_=`$${(0,n.qaf)(u,l)}${i}${(0,n.qaf)(h,c)}`,"ppcm"!==g&&"premiers_entre_eux"!==g||(_+=`=${(0,n.qaf)(u+(0,n.b1)("\\times "+d),l+(0,n.b1)("\\times "+d))}${i}${(0,n.qaf)(h+(0,n.b1)("\\times "+f),c+(0,n.b1)("\\times "+f))}`,b=(0,n.n0o)(u*d+i+(0,n.aIp)(h*f)),p=l*d,_+=`=${(0,n.qaf)(u*d+i+(0,n.PMY)(h*f),p)}`),"d_multiple_de_b"===g&&(_+=`=${(0,n.qaf)(u+(0,n.b1)("\\times "+m),l+(0,n.b1)("\\times "+m))}${i}${(0,n.qaf)(h,c)}`,b=(0,n.n0o)(u*m+i+(0,n.aIp)(h)),p=l*m,_+=`=${(0,n.qaf)(u*m+i+(0,n.PMY)(h),p)}`),"b_multiple_de_d"===g&&(_+=`=${(0,n.qaf)(u,l)}${i}${(0,n.qaf)(h+(0,n.b1)("\\times "+m),c+(0,n.b1)("\\times "+m))}`,b=(0,n.n0o)(u+i+(0,n.aIp)(h*m)),p=l,_+=`=${(0,n.qaf)(u+i+(0,n.PMY)(h*m),p)}`),"entier"===g){u=(0,n.nSR)(1,9),l=(0,n.nSR)(2,9,[u]);let e=(0,n.nSR)(1,9);this.sup2&&(u*=(0,n.q$q)([-1,1]),e*=(0,n.q$q)([-1,1])),(0,n.q$q)([!0,!1])?(!this.sup2&&"-"===i&&e<u/l&&(e=(0,n.nSR)(5,9)),$=`$${e}${i}${(0,n.qaf)(u,l)}=$`,_=$,_+=`$${(0,n.qaf)(e+(0,n.b1)("\\times "+l),(0,n.b1)(l))}${i}${(0,n.qaf)(u,l)}`,_+=`=${(0,n.qaf)(e*l+i+(0,n.PMY)(u),l)}`,b=(0,n.n0o)(e*l+i+(0,n.PMY)(u))):(!this.sup2&&"-"===i&&e>u/l&&(e=(0,n.nSR)(1,4),u=e*l+(0,n.nSR)(1,9)),$=`$${(0,n.qaf)(u,l)}${i}${(0,n.PMY)(e)}=`,_=$,$+="$",_+=`${(0,n.qaf)(u,l)}${i}${(0,n.qaf)(e+(0,n.b1)("\\times "+l),(0,n.b1)(l))}`,_+=`=${(0,n.qaf)(u+i+(0,n.PMY)(e*l),l)}`,b=(0,n.n0o)((0,n.PMY)(u)+i+(0,n.PMY)(e*l))),p=l}this.sup3?(_+=`=${(0,n.qaf)(b,p)}`,_+=(0,n.t7m)(b,p)+"$"):(_+=`=${(0,n.qaf)(b,p)}`,_+="$"),this.interactif&&($+=(0,r.G5)(this,R,"largeur25 inline")),q=(0,o.Pj)(b,p).simplifie(),(0,r.Iq)(this,R,q,{digits:4,digitsNum:2,digitsDen:2,formatInteractif:"fraction"}),a.Do.isAmc&&($="Calculer et donner le résultat sous forme irréductible\\\\\n"+$),this.listeQuestions.push($),this.listeCorrections.push(_)}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Un dénominateur multiple de l'autre\n2 : Cas général"],this.besoinFormulaire2CaseACocher=["Avec des nombres relatifs"],this.besoinFormulaire3CaseACocher=["Avec l'écriture simplifiée de la fraction résultat"]}},25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=14092.1550d02715dddb1b85a9.js.map
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[54776,17007],{54776:(e,i,t)=>{t.r(i),t.d(i,{amcReady:()=>l,amcType:()=>u,titre:()=>h,interactifReady:()=>m,interactifType:()=>c,default:()=>p});var s=t(17007),n=t(66170),o=t(30169),r=t(75664),a=t(1870);const l=!0,u="AMCOpenNum✖︎2",h="Additionner ou soustraire deux fractions",m=!0,c="mathLive";function p(){s.default.call(this),this.sup=2,this.sup2=!1,this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée.",this.spacing=2,this.spacingCorr=2,this.nbQuestions=5,this.nbColsCorr=1,this.nouvelleVersion=function(){let e;this.autoCorrection=[],this.listeQuestions=[],this.listeCorrections=[],1===this.sup&&(e=["b_multiple_de_d","d_multiple_de_b","b_multiple_de_d","d_multiple_de_b","entier"]),2===this.sup&&(e=["ppcm","ppcm","premiers_entre_eux",(0,o.q$q)(["b_multiple_de_d","d_multiple_de_b"]),"entier"]);const i=(0,o.SRM)(e,this.nbQuestions),t=(0,o.SRM)(["-","-","+","+"],this.nbQuestions),s=[[6,9],[4,6],[8,12],[9,12],[10,15],[10,25],[6,21],[12,30],[6,8],[50,75]];for(let l,u,h,m,c,p,b,d,f,$,_,q,C,g,S=0;S<this.nbQuestions;S++){const e=t[S];switch(g=i[S],g){case"ppcm":C=(0,o.q$q)(s),(0,o.q$q)([!0,!1])?(u=C[0],m=C[1]):(u=C[1],m=C[0]),p=(0,o.U8t)(u,m)/u,b=(0,o.U8t)(u,m)/m;break;case"premiers_entre_eux":for(u=(0,o.nSR)(2,9),m=(0,o.nSR)(2,9);1!==(0,o.Md9)(u,m);)u=(0,o.nSR)(2,9),m=(0,o.nSR)(2,9);p=(0,o.U8t)(u,m)/u,b=(0,o.U8t)(u,m)/m;break;case"d_multiple_de_b":u=(0,o.nSR)(2,9),c=(0,o.nSR)(2,11),m=u*c;break;case"b_multiple_de_d":m=(0,o.nSR)(2,9),c=(0,o.nSR)(2,11),u=m*c}if(l=(0,o.nSR)(1,9,[u]),h=(0,o.nSR)(1,9,[m]),this.sup2&&(l*=(0,o.q$q)([-1,1]),h*=(0,o.q$q)([-1,1])),!this.sup2&&"-"===e&&l/u<h/m&&([l,u,h,m]=[h,m,l,u],p=(0,o.U8t)(u,m)/u,b=(0,o.U8t)(u,m)/m,"d_multiple_de_b"===g?(g="b_multiple_de_d",c=u/m):"b_multiple_de_d"===g&&(g="d_multiple_de_b",c=m/u)),$=`$${(0,o.qaf)(l,u)}${e}${(0,o.qaf)(h,m)}=$`,_=`$${(0,o.qaf)(l,u)}${e}${(0,o.qaf)(h,m)}`,"ppcm"!==g&&"premiers_entre_eux"!==g||(_+=`=${(0,o.qaf)(l+(0,o.b1)("\\times "+p),u+(0,o.b1)("\\times "+p))}${e}${(0,o.qaf)(h+(0,o.b1)("\\times "+b),m+(0,o.b1)("\\times "+b))}`,d=(0,o.n0o)(l*p+e+(0,o.aIp)(h*b)),f=u*p,_+=`=${(0,o.qaf)(l*p+e+(0,o.PMY)(h*b),f)}`),"d_multiple_de_b"===g&&(_+=`=${(0,o.qaf)(l+(0,o.b1)("\\times "+c),u+(0,o.b1)("\\times "+c))}${e}${(0,o.qaf)(h,m)}`,d=(0,o.n0o)(l*c+e+(0,o.aIp)(h)),f=u*c,_+=`=${(0,o.qaf)(l*c+e+(0,o.PMY)(h),f)}`),"b_multiple_de_d"===g&&(_+=`=${(0,o.qaf)(l,u)}${e}${(0,o.qaf)(h+(0,o.b1)("\\times "+c),m+(0,o.b1)("\\times "+c))}`,d=(0,o.n0o)(l+e+(0,o.aIp)(h*c)),f=u,_+=`=${(0,o.qaf)(l+e+(0,o.PMY)(h*c),f)}`),"entier"===g){l=(0,o.nSR)(1,9),u=(0,o.nSR)(2,9,[l]);let i=(0,o.nSR)(1,9);this.sup2&&(l*=(0,o.q$q)([-1,1]),i*=(0,o.q$q)([-1,1])),(0,o.q$q)([!0,!1])?(!this.sup2&&"-"===e&&i<l/u&&(i=(0,o.nSR)(5,9)),$=`$${i}${e}${(0,o.qaf)(l,u)}=$`,_=$,_+=`$${(0,o.qaf)(i+(0,o.b1)("\\times "+u),(0,o.b1)(u))}${e}${(0,o.qaf)(l,u)}`,_+=`=${(0,o.qaf)(i*u+e+(0,o.PMY)(l),u)}`):(!this.sup2&&"-"===e&&i>l/u&&(i=(0,o.nSR)(1,4),l=i*u+(0,o.nSR)(1,9)),$=`$${(0,o.qaf)(l,u)}${e}${(0,o.PMY)(i)}=$`,_=$,_+=`$${(0,o.qaf)(l,u)}${e}${(0,o.qaf)(i+(0,o.b1)("\\times "+u),(0,o.b1)(u))}`,_+=`=${(0,o.qaf)(l+"+"+(0,o.PMY)(i*u),u)}`),d=(0,o.n0o)(i*u+e+(0,o.PMY)(l)),f=u}_+=`=${(0,o.qaf)(d,f)}`,_+=(0,o.t7m)(d,f)+"$",n.Do.isAmc?this.autoCorrection[S]={enonce:`Calculer $${$.substring(1,$.length-2)}$ et donner le résultat sous forme irreductible`,propositions:[{texte:_,statut:3,feedback:""}],reponse:{texte:"numérateur",valeur:(0,o.OlJ)(d,f)[0],param:{digits:2,decimals:0,exposantNbChiffres:0,exposantSigne:!1,signe:!0,approx:0}},reponse2:{texte:"dénominateur",valeur:(0,o.OlJ)(d,f)[1],param:{digits:2,decimals:0,exposantNbChiffres:0,exposantSigne:!1,signe:!1,approx:0}}}:(q=(0,a.Pj)(d,f).simplifie(),$+=(0,r.G5)(this,S,"largeur25 inline"),(0,r.Iq)(this,S,q,{formatInteractif:"fraction"})),this.listeQuestions.push($),this.listeCorrections.push(_)}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Un dénominateur multiple de l'autre\n2 : Cas général"],this.besoinFormulaire2CaseACocher=["Avec des nombres relatifs"]}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=54776.cfbdbed6259fa67ec3da.js.map
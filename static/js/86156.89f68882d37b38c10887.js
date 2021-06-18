(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[86156,65044,71129],{86156:(i,e,s)=>{"use strict";s.r(e),s.d(e,{titre:()=>o,default:()=>n});var t=s(65044);const o="Conversions avec tous les préfixes de milli à tera.";function n(){t.default.call(this),this.sup=5,this.titre=o}},65044:(i,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var t=s(71129),o=s(62259),n=s(63861);function r(i=1){t.default.call(this),this.sup=i,this.sup2=!1,this.titre="Conversions de longueurs, masses, contenance, prix ou unités informatiques",this.consigne="Compléter",this.spacing=2,this.correction_avec_des_fractions=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[["da",10],["h",100],["k",1e3]],e=[["d",10],["c",100],["m",1e3]];for(let s,t,r,h,l,u,a,c,d,m=0,f=0;m<this.nbQuestions&&f<50;){if(u=this.sup<5?this.sup:(0,n.nSR)(1,4),t=(0,n.nSR)(0,2),1==u?r=!1:2==u?r=!0:3==u?r=(0,n.q$q)([!0,!1]):4==u&&(d=["o","ko","Mo","Go","To"]),s=this.sup2?(0,n.q$q)([(0,n.vbX)((0,n.nSR)(1,19)+(0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/100,2),(0,n.vbX)((0,n.nSR)(1,9)+(0,n.nSR)(1,9)/10+(0,n.nSR)(1,9)/100,2)]):(0,n.q$q)([(0,n.nSR)(1,9),10*(0,n.nSR)(1,9),100*(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),!r&&u<4)l=t<2?(0,n.q$q)(["m","L","g"]):2==t?o.Do.isHtml?(0,n.q$q)(["m","L","g"]):(0,n.q$q)(["m","L","g","€"]):"o",h=(0,n.n0o)(s*i[t][1]).toString(),a="$ "+(0,n.euh)(s)+(0,n.Nr_)(i[t][0]+l)+" = \\dotfill "+(0,n.Nr_)(l)+"$",c="$ "+(0,n.euh)(s)+(0,n.Nr_)(i[t][0]+l)+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(i[t][1])+(0,n.Nr_)(l)+" = "+(0,n.k$K)(h)+(0,n.Nr_)(l)+"$";else if(r&&u<4&&this.correction_avec_des_fractions)l=(0,n.q$q)(["m","L","g"]),h=(0,n.n0o)(s/e[t][1]).toString(),a="$ "+(0,n.euh)(s)+(0,n.Nr_)(e[t][0]+l)+" = \\dotfill "+(0,n.Nr_)(l)+"$",c="$ "+(0,n.euh)(s)+(0,n.Nr_)(e[t][0]+l)+" =  "+(0,n.qaf)((0,n.euh)(s),(0,n.euh)(e[t][1]))+(0,n.Nr_)(l)+" = "+(0,n.euh)(h)+(0,n.Nr_)(l)+"$";else if(r&&u<4)l=(0,n.q$q)(["m","L","g"]),h=(0,n.n0o)(s/e[t][1]).toString(),a="$ "+(0,n.euh)(s)+(0,n.Nr_)(e[t][0]+l)+" = \\dotfill "+(0,n.Nr_)(l)+"$",c="$ "+(0,n.euh)(s)+(0,n.Nr_)(e[t][0]+l)+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(e[t][1])+(0,n.Nr_)(l)+" = "+(0,n.k$K)(h)+(0,n.Nr_)(l)+"$";else{let i=(0,n.nSR)(0,3),e=(0,n.nSR)(1,2);e>4-i&&(e=4-i);let t=i+e;(0,n.nSR)(0,1)>0?(h=(0,n.n0o)(s*Math.pow(10,3*e)),a="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[t])+" = \\dotfill "+(0,n.Nr_)(d[i])+"$",c="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[t])+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(Math.pow(10,3*e))+(0,n.Nr_)(d[i])+" = "+(0,n.k$K)(h)+(0,n.Nr_)(d[i])+"$"):(h=(0,n.n0o)(s/Math.pow(10,3*e)),a="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[i])+" = \\dotfill "+(0,n.Nr_)(d[t])+"$",c="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[i])+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(Math.pow(10,3*e))+(0,n.Nr_)(d[t])+" = "+(0,n.k$K)(h)+(0,n.Nr_)(d[t])+"$")}-1===this.listeQuestions.indexOf(a)&&(o.Do.isDiaporama&&(a=a.replace("= \\dotfill","\\text{ en }")),o.Do.isHtml&&(a=a.replace("\\dotfill","................................................")),this.listeQuestions.push(a),this.listeCorrections.push(c),m++),f++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : De da, h, k vers l'unité de référence\n2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions"],this.besoinFormulaire2CaseACocher=["Avec des nombres décimaux"]}},71129:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=86156.89f68882d37b38c10887.js.map
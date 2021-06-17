(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4221,6969],{74221:(i,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>o});var t=s(66969),n=s(55339);function o(i=1){t.default.call(this),this.sup=i,this.sup2=!1,this.titre="Conversions de longueurs, masses, contenance, prix ou unités informatiques",this.consigne="Compléter",this.spacing=2,this.correction_avec_des_fractions=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[["da",10],["h",100],["k",1e3]],e=[["d",10],["c",100],["m",1e3]];for(let s,t,o,h,l,r,u,a,c,b=0,p=0;b<this.nbQuestions&&p<50;){if(r=this.sup<5?this.sup:(0,n.nSR)(1,4),t=(0,n.nSR)(0,2),1==r?o=!1:2==r?o=!0:3==r?o=(0,n.q$q)([!0,!1]):4==r&&(c=["o","ko","Mo","Go","To"]),s=this.sup2?(0,n.q$q)([(0,n.vbX)((0,n.nSR)(1,19)+(0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/100,2),(0,n.vbX)((0,n.nSR)(1,9)+(0,n.nSR)(1,9)/10+(0,n.nSR)(1,9)/100,2)]):(0,n.q$q)([(0,n.nSR)(1,9),10*(0,n.nSR)(1,9),100*(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),!o&&r<4)l=t<2?(0,n.q$q)(["m","L","g"]):2==t?sortieHtml?(0,n.q$q)(["m","L","g"]):(0,n.q$q)(["m","L","g","€"]):"o",h=(0,n.n0o)(s*i[t][1]).toString(),u="$ "+(0,n.euh)(s)+(0,n.nbp)(i[t][0]+l)+" = \\dotfill "+(0,n.nbp)(l)+"$",a="$ "+(0,n.euh)(s)+(0,n.nbp)(i[t][0]+l)+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(i[t][1])+(0,n.nbp)(l)+" = "+(0,n.k$K)(h)+(0,n.nbp)(l)+"$";else if(o&&r<4&&this.correction_avec_des_fractions)l=(0,n.q$q)(["m","L","g"]),h=(0,n.n0o)(s/e[t][1]).toString(),u="$ "+(0,n.euh)(s)+(0,n.nbp)(e[t][0]+l)+" = \\dotfill "+(0,n.nbp)(l)+"$",a="$ "+(0,n.euh)(s)+(0,n.nbp)(e[t][0]+l)+" =  "+(0,n.qaf)((0,n.euh)(s),(0,n.euh)(e[t][1]))+(0,n.nbp)(l)+" = "+(0,n.euh)(h)+(0,n.nbp)(l)+"$";else if(o&&r<4)l=(0,n.q$q)(["m","L","g"]),h=(0,n.n0o)(s/e[t][1]).toString(),u="$ "+(0,n.euh)(s)+(0,n.nbp)(e[t][0]+l)+" = \\dotfill "+(0,n.nbp)(l)+"$",a="$ "+(0,n.euh)(s)+(0,n.nbp)(e[t][0]+l)+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(e[t][1])+(0,n.nbp)(l)+" = "+(0,n.k$K)(h)+(0,n.nbp)(l)+"$";else{let i=(0,n.nSR)(0,3),e=(0,n.nSR)(1,2);e>4-i&&(e=4-i);let t=i+e;(0,n.nSR)(0,1)>0?(h=(0,n.n0o)(s*Math.pow(10,3*e)),u="$ "+(0,n.euh)(s)+(0,n.nbp)(c[t])+" = \\dotfill "+(0,n.nbp)(c[i])+"$",a="$ "+(0,n.euh)(s)+(0,n.nbp)(c[t])+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(Math.pow(10,3*e))+(0,n.nbp)(c[i])+" = "+(0,n.k$K)(h)+(0,n.nbp)(c[i])+"$"):(h=(0,n.n0o)(s/Math.pow(10,3*e)),u="$ "+(0,n.euh)(s)+(0,n.nbp)(c[i])+" = \\dotfill "+(0,n.nbp)(c[t])+"$",a="$ "+(0,n.euh)(s)+(0,n.nbp)(c[i])+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(Math.pow(10,3*e))+(0,n.nbp)(c[t])+" = "+(0,n.k$K)(h)+(0,n.nbp)(c[t])+"$")}-1==this.listeQuestions.indexOf(u)&&(est_diaporama&&(u=u.replace("= \\dotfill","\\text{ en }")),sortieHtml&&(u=u.replace("\\dotfill","................................................")),this.listeQuestions.push(u),this.listeCorrections.push(a),b++),p++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : De da, h, k vers l'unité de référence\n2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions"],this.besoinFormulaire2CaseACocher=["Avec des nombres décimaux"]}},66969:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=4221.cd3aff9e0efe3cb7b82f.js.map
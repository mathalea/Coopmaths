"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36676,93200,17007],{36676:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>r});var s=t(93200);const n="Conversions avec tous les préfixes de milli à tera.";function r(){s.default.call(this),this.sup=5}},93200:(i,e,t)=>{t.r(e),t.d(e,{interactifReady:()=>h,interactifType:()=>a,amcReady:()=>l,amcType:()=>u,default:()=>c});var s=t(17007),n=t(66170),r=t(30169),o=t(75664);const h=!0,a="mathLive",l=!0,u="AMCNum";function c(i=1){s.default.call(this),this.sup=i,this.sup2=!1,this.titre="Conversions de longueurs, masses, contenance, prix ou unités informatiques",this.consigne="Compléter",this.spacing=2,this.correction_avec_des_fractions=!1,this.interactif=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=[],e=[["da",10],["h",100],["k",1e3]],t=[["d",10],["c",100],["m",1e3]];for(let s,h,a,l,u,c,f,m,$,d=0,p=0;d<this.nbQuestions&&p<50;){if(c=this.sup<5?this.sup:(0,r.nSR)(1,4),h=(0,r.nSR)(0,2),1===c?a=!1:2===c?a=!0:3===c?a=(0,r.q$q)([!0,!1]):4===c&&($=["o","ko","Mo","Go","To"]),s=this.sup2?(0,r.q$q)([(0,r.vbX)((0,r.nSR)(1,19)+(0,r.nSR)(1,9)/10,1),(0,r.vbX)((0,r.nSR)(1,9)/10,1),(0,r.vbX)((0,r.nSR)(1,9)/100,2),(0,r.vbX)((0,r.nSR)(1,9)+(0,r.nSR)(1,9)/10+(0,r.nSR)(1,9)/100,2)]):(0,r.q$q)([(0,r.nSR)(1,9),10*(0,r.nSR)(1,9),100*(0,r.nSR)(1,9),10*(0,r.nSR)(1,9)+(0,r.nSR)(1,9)]),!a&&c<4)u=h<2?(0,r.q$q)(["m","L","g"]):2===h?n.Do.isHtml?(0,r.q$q)(["m","L","g"]):(0,r.q$q)(["m","L","g","€"]):"o",l=(0,r.n0o)(s*e[h][1]).toString(),f="$ "+(0,r.euh)(s)+(0,r.Nr_)(e[h][0]+u)+" = "+(this.interactif&&n.Do.isHtml?`$ ${(0,o.G5)(this,d,"largeur10 inline",{texteApres:"$"+(0,r.Nr_)(u)+"$"})}`:`\\dotfill ${(0,r.Nr_)(u)}$`),m="$ "+(0,r.euh)(s)+(0,r.Nr_)(e[h][0]+u)+" =  "+(0,r.euh)(s)+"\\times"+(0,r.euh)(e[h][1])+(0,r.Nr_)(u)+" = "+(0,r.k$K)(l)+(0,r.Nr_)(u)+"$";else if(a&&c<4&&this.correction_avec_des_fractions)u=(0,r.q$q)(["m","L","g"]),l=(0,r.n0o)(s/t[h][1]).toString(),f="$ "+(0,r.euh)(s)+(0,r.Nr_)(t[h][0]+u)+" = "+(this.interactif&&n.Do.isHtml?`$ ${(0,o.G5)(this,d,"largeur25 inline",{texteApres:" $"+(0,r.Nr_)(u)+"$"})}`:` \\dotfill ${(0,r.Nr_)(u)}$`),m="$ "+(0,r.euh)(s)+(0,r.Nr_)(t[h][0]+u)+" =  "+(0,r.qaf)((0,r.euh)(s),(0,r.euh)(t[h][1]))+(0,r.Nr_)(u)+" = "+(0,r.euh)(l)+(0,r.Nr_)(u)+"$";else if(a&&c<4)u=(0,r.q$q)(["m","L","g"]),l=(0,r.n0o)(s/t[h][1]).toString(),f="$ "+(0,r.euh)(s)+(0,r.Nr_)(t[h][0]+u)+" = "+(this.interactif&&n.Do.isHtml?`$ ${(0,o.G5)(this,d,"largeur25 inline",{texteApres:" $"+(0,r.Nr_)(u)+"$"})}`:` \\dotfill ${(0,r.Nr_)(u)}$`),m="$ "+(0,r.euh)(s)+(0,r.Nr_)(t[h][0]+u)+" =  "+(0,r.euh)(s)+"\\div"+(0,r.euh)(t[h][1])+(0,r.Nr_)(u)+" = "+(0,r.k$K)(l)+(0,r.Nr_)(u)+"$";else{const i=(0,r.nSR)(0,3);let e=(0,r.nSR)(1,2);e>4-i&&(e=4-i);const t=i+e;(0,r.nSR)(0,1)>0?(l=(0,r.n0o)(s*Math.pow(10,3*e)),u=$[i],f="$ "+(0,r.euh)(s)+(0,r.Nr_)($[t])+" = "+(this.interactif&&n.Do.isHtml?`$ ${(0,o.G5)(this,d,"largeur25 inline",{texteApres:" $"+(0,r.Nr_)(u)+"$"})}`:` \\dotfill ${(0,r.Nr_)(u)}$`),m="$ "+(0,r.euh)(s)+(0,r.Nr_)($[t])+" =  "+(0,r.euh)(s)+"\\times"+(0,r.euh)(Math.pow(10,3*e))+(0,r.Nr_)(u)+" = "+(0,r.k$K)(l)+(0,r.Nr_)(u)+"$"):(l=(0,r.n0o)(s/Math.pow(10,3*e)),u=$[t],f="$ "+(0,r.euh)(s)+(0,r.Nr_)($[i])+" = "+(this.interactif&&n.Do.isHtml?`$ ${(0,o.G5)(this,d,"largeur25 inline",{texteApres:" $"+(0,r.Nr_)(u)+"$"})}`:` \\dotfill ${(0,r.Nr_)(u)}$`),m="$ "+(0,r.euh)(s)+(0,r.Nr_)($[i])+" =  "+(0,r.euh)(s)+"\\div"+(0,r.euh)(Math.pow(10,3*e))+(0,r.Nr_)(u)+" = "+(0,r.k$K)(l)+(0,r.Nr_)(u)+"$")}-1===i.indexOf(l)&&((0,o.Iq)(this,d,l),i[d]=l,n.Do.isDiaporama&&(f=f.replace("= \\dotfill","\\text{ en }")),n.Do.isHtml&&(f=f.replace("\\dotfill","................................................")),console.log(f),this.listeQuestions.push(f),this.listeCorrections.push(m),d++),p++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : De da, h, k vers l'unité de référence\n2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions"],this.besoinFormulaire2CaseACocher=["Avec des nombres décimaux"]}},17007:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=36676.191ee19c519704bd7b71.js.map
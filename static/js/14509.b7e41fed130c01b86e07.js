"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[14509,26561,25523],{14509:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>r,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>n});var s=t(26561);const r="Effectuer des conversions avec tous les préfixes de milli à tera";function n(){s.default.call(this),this.sup=5}},26561:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>u,interactifType:()=>c,amcReady:()=>m,amcType:()=>f,default:()=>$});var s=t(25523),r=t(22380),n=t(25482),o=t(11945),a=t(56018),h=t(77074);const l={format:a.WUZ,evaluate:h.ku},u=!0,c="mathLive",m=!0,f="AMCNum";function $(e=1){s.default.call(this),this.sup=e,this.sup2=!1,this.titre="Convertir des longueurs, masses, contenance, prix ou unités informatiques",this.consigne="Compléter : ",this.spacing=2,this.correction_avec_des_fractions=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=[],i=[["da",10],["h",100],["k",1e3]],t=[["d",10],["c",100],["m",1e3]];for(let s,a,h,u,c,m,f,$,d,b=0,p=0;b<this.nbQuestions&&p<50;){if(m=this.sup<5?this.sup:(0,n.nSR)(1,4),a=(0,n.nSR)(0,2),1===m?h=!1:2===m?h=!0:3===m?h=(0,n.q$q)([!0,!1]):4===m&&(d=["o","ko","Mo","Go","To"]),s=this.sup2?(0,n.q$q)([(0,n.vbX)((0,n.nSR)(1,19)+(0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/100,2),(0,n.vbX)((0,n.nSR)(1,9)+(0,n.nSR)(1,9)/10+(0,n.nSR)(1,9)/100,2)]):(0,n.q$q)([(0,n.nSR)(1,9),10*(0,n.nSR)(1,9),100*(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),!h&&m<4)c=a<2?(0,n.q$q)(["m","L","g"]):2===a?r.Do.isHtml?(0,n.q$q)(["m","L","g"]):(0,n.q$q)(["m","L","g","€"]):"o",u=(0,n.n0o)(s*i[a][1]).toString(),f="$ "+(0,n.euh)(s)+(0,n.Nr_)(i[a][0]+c)+" = "+(this.interactif&&r.Do.isHtml?`$ ${(0,o.G5)(this,b,"largeur25 inline",{texteApres:"$"+(0,n.Nr_)(c)+"$"})}`:`\\dotfill ${(0,n.Nr_)(c)}$`),$="$ "+(0,n.euh)(s)+(0,n.Nr_)(i[a][0]+c)+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(i[a][1])+(0,n.Nr_)(c)+" = "+(0,n.k$K)(u)+(0,n.Nr_)(c)+"$";else if(h&&m<4&&this.correction_avec_des_fractions)c=(0,n.q$q)(["m","L","g"]),u=l.evaluate(s/t[a][1]),f="$ "+(0,n.euh)(s)+(0,n.Nr_)(t[a][0]+c)+" = "+(this.interactif&&r.Do.isHtml?`$ ${(0,o.G5)(this,b,"largeur25 inline",{texteApres:" $"+(0,n.Nr_)(c)+"$"})}`:` \\dotfill ${(0,n.Nr_)(c)}$`),$="$ "+(0,n.euh)(s)+(0,n.Nr_)(t[a][0]+c)+" =  "+(0,n.qaf)((0,n.euh)(s),(0,n.euh)(t[a][1]))+(0,n.Nr_)(c)+" = "+(0,n.Pbm)(u)+(0,n.Nr_)(c)+"$";else if(h&&m<4)c=(0,n.q$q)(["m","L","g"]),u=l.evaluate(s/t[a][1]),f="$ "+(0,n.euh)(s)+(0,n.Nr_)(t[a][0]+c)+" = "+(this.interactif&&r.Do.isHtml?`$ ${(0,o.G5)(this,b,"largeur25 inline",{texteApres:" $"+(0,n.Nr_)(c)+"$"})}`:` \\dotfill ${(0,n.Nr_)(c)}$`),$="$ "+(0,n.euh)(s)+(0,n.Nr_)(t[a][0]+c)+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(t[a][1])+(0,n.Nr_)(c)+" = "+(0,n.Pbm)(u)+(0,n.Nr_)(c)+"$";else{const e=(0,n.nSR)(0,3);let i=(0,n.nSR)(1,2);i>4-e&&(i=4-e);const t=e+i;(0,n.nSR)(0,1)>0?(u=(0,n.n0o)(s*Math.pow(10,3*i)),c=d[e],f="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[t])+" = "+(this.interactif&&r.Do.isHtml?`$ ${(0,o.G5)(this,b,"largeur25 inline",{texteApres:" $"+(0,n.Nr_)(c)+"$"})}`:` \\dotfill ${(0,n.Nr_)(c)}$`),$="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[t])+" =  "+(0,n.euh)(s)+"\\times"+(0,n.euh)(Math.pow(10,3*i))+(0,n.Nr_)(c)+" = "+(0,n.k$K)(u)+(0,n.Nr_)(c)+"$"):(u=l.evaluate(s/Math.pow(10,3*i)),c=d[t],f="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[e])+" = "+(this.interactif&&r.Do.isHtml?`$ ${(0,o.G5)(this,b,"largeur25 inline",{texteApres:" $"+(0,n.Nr_)(c)+"$"})}`:` \\dotfill ${(0,n.Nr_)(c)}$`),$="$ "+(0,n.euh)(s)+(0,n.Nr_)(d[e])+" =  "+(0,n.euh)(s)+"\\div"+(0,n.euh)(Math.pow(10,3*i))+(0,n.Nr_)(c)+" = "+(0,n.Pbm)(u)+(0,n.Nr_)(c)+"$")}-1===e.indexOf(u)&&((0,o.Iq)(this,b,u),e[b]=u,r.Do.isDiaporama&&(f=f.replace("= \\dotfill","\\text{ en }")),r.Do.isHtml&&(f=f.replace("\\dotfill","................................................")),this.listeQuestions.push(f),this.listeCorrections.push($),b++),p++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : De da, h, k vers l'unité de référence\n2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5 : Mélange"],this.besoinFormulaire2CaseACocher=["Avec des nombres décimaux"]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=14509.b7e41fed130c01b86e07.js.map
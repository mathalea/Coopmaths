(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[715,2006],{50715:(i,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var t=s(2006),o=s(89846),n=s(91030);function h(i=1){t.default.call(this),this.sup=i,this.sup2=!1,this.titre="Conversions de longueurs",this.consigne="Compléter",this.spacing=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[[" da",10],[" h",100],[" k",1e3]],e=[[" d",10],[" c",100],[" m",1e3]],s="m",t=["mm","cm","dm","m","dam","hm","km"],h=(0,n.SRM)([0,1,2,3,4,5,6],this.nbQuestions),r=(0,n.SRM)([0,1,2],this.nbQuestions);for(let l,u,a,c,m,d,b=0,f=0;b<this.nbQuestions&&f<50;){let p;if(p=this.sup<5?this.sup:(0,n.nSR)(1,4),u=r[b],a=1!=p&&(2==p||(0,n.q$q)([!0,!1])),l=this.sup2?(0,n.q$q)([(0,n.vbX)((0,n.nSR)(1,19)+(0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/10,1),(0,n.vbX)((0,n.nSR)(1,9)/100,2),(0,n.vbX)((0,n.nSR)(1,9)+(0,n.nSR)(1,9)/10+(0,n.nSR)(1,9)/100,2)]):(0,n.q$q)([(0,n.nSR)(1,9),10*(0,n.nSR)(1,9),100*(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),!a&&p<4)c=(0,n.n0o)(l*i[u][1]).toString(),m="$ "+(0,n.euh)(l)+(0,n.Nr_)(i[u][0]+s)+" = \\dotfill "+(0,n.Nr_)(s)+"$",d="$ "+(0,n.euh)(l)+(0,n.Nr_)(i[u][0]+s)+" =  "+(0,n.euh)(l)+"\\times"+(0,n.euh)(i[u][1])+(0,n.Nr_)(s)+" = "+(0,n.euh)(c)+(0,n.Nr_)(s)+"$";else if(a&&p<4)c=(0,n.n0o)(l/e[u][1]).toString(),m="$ "+(0,n.euh)(l)+(0,n.Nr_)(e[u][0]+s)+" = \\dotfill "+(0,n.Nr_)(s)+"$",d="$ "+(0,n.euh)(l)+(0,n.Nr_)(e[u][0]+s)+" =  "+(0,n.euh)(l)+"\\div"+(0,n.euh)(e[u][1])+(0,n.Nr_)(s)+" = "+(0,n.euh)(c)+(0,n.Nr_)(s)+"$";else{let i=h[b],e=(0,n.nSR)(Math.max(0,i-3),Math.min(i+3,6),i);i>e&&([i,e]=[e,i]);let s=e-i;(0,n.nSR)(0,1)>0?(c=(0,n.n0o)(l*Math.pow(10,s)),m="$ "+(0,n.euh)(l)+(0,n.Nr_)(t[e])+" = \\dotfill "+(0,n.Nr_)(t[i])+"$",d="$ "+(0,n.euh)(l)+(0,n.Nr_)(t[e])+" =  "+(0,n.euh)(l)+"\\times"+(0,n.euh)(Math.pow(10,s))+(0,n.Nr_)(t[i])+" = "+(0,n.euh)(c)+(0,n.Nr_)(t[i])+"$"):(c=(0,n.n0o)(l/Math.pow(10,s)),m="$ "+(0,n.euh)(l)+(0,n.Nr_)(t[i])+" = \\dotfill "+(0,n.Nr_)(t[e])+"$",d="$ "+(0,n.euh)(l)+(0,n.Nr_)(t[i])+" =  "+(0,n.euh)(l)+"\\div"+(0,n.euh)(Math.pow(10,s))+(0,n.Nr_)(t[e])+" = "+(0,n.euh)(c)+(0,n.Nr_)(t[e])+"$")}-1===this.listeQuestions.indexOf(m)&&(o.Do.isDiaporama&&(m=m.replace("= \\dotfill","\\text{ en }")),o.Do.isHtml&&(m=m.replace("\\dotfill","................................................")),this.listeQuestions.push(m),this.listeCorrections.push(d),b++),f++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : De dam, hm, km vers m\n2 : De dm, cm, mm vers m\n3 : Conversions en mètres\n4 : Toutes les conversions de longueurs"],this.besoinFormulaire2CaseACocher=["Avec des nombres décimaux"]}},2006:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=715.c815b58c457cf1661efc.js.map
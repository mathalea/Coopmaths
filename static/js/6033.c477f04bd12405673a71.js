(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6033,7567],{46033:(s,e,i)=>{"use strict";i.r(e),i.d(e,{amcReady:()=>n,titre:()=>h,default:()=>o});var t=i(67567),$=i(24477);const n=!0,h="Multiplications d’un nombre décimal par 10, 100 ou 1 000.";function o(){t.default.call(this),this.titre=h,this.consigne="Calculer.",this.sup=3,this.sup2=!1,this.spacing=2,this.spacingCorr=2,this.nbQuestions=8,this.nouvelleVersion=function(){this.qcm=["6C30-1",[],"Multiplications d'un nombre décimal par 10, 100 ou 1 000.",4],this.listeQuestions=[],this.listeCorrections=[];let s,e,i=[];1!=this.sup||this.sup2||(i=[1,2]),1==this.sup&&this.sup2&&(i=[1,2,5,6]),2!=this.sup||this.sup2||(i=[3,4]),2==this.sup&&this.sup2&&(i=[3,4,3,4,7,8,9,10]),3!=this.sup||this.sup2||(i=[1,2,3,4]),3==this.sup&&this.sup2&&(i=[1,2,3,4,5,6,7,8,9,10]),this.sup2&&(this.consigne="Calculer et compléter.");let t=(0,$.SRM)(i,this.nbQuestions),n=(0,$.SRM)([10,100,1e3],this.nbQuestions);for(let i,h,o,a,u,r=0,c=0;r<this.nbQuestions&&c<50;){switch(s=t[r],s){case 1:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999)]),o=(0,$.n0o)(o/(0,$.q$q)([10,100,1e3,1e4])),a=n[r],i=`$${(0,$.euh)(o)}\\times${(0,$.euh)(a)}$`,h=`$${(0,$.euh)(o)} \\times ${(0,$.euh)(a)} = ${(0,$.k$K)(o*a)}$`,e=(0,$.n0o)(o*a);break;case 2:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999)]),o=(0,$.n0o)(o/(0,$.q$q)([10,100,1e3,1e4])),a=n[r],i=`$${(0,$.euh)(a)}\\times${(0,$.euh)(o)}$`,h=`$${(0,$.euh)(a)} \\times ${(0,$.euh)(o)} = ${(0,$.k$K)(o*a)}$`,e=(0,$.n0o)(o*a);break;case 3:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$${(0,$.qaf)(o,u)}\\times${(0,$.euh)(a)}$`,h=`$${(0,$.qaf)(o,u)} \\times ${(0,$.euh)(a)} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,e=(0,$.n0o)(o*a/u);break;case 4:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$${(0,$.euh)(a)}\\times${(0,$.qaf)(o,u)}$`,h=`$${(0,$.euh)(a)} \\times ${(0,$.qaf)(o,u)} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,e=(0,$.n0o)(o*a/u);break;case 5:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999)]),o=(0,$.n0o)(o/(0,$.q$q)([10,100,1e3,1e4])),a=n[r],i=`$\\ldots \\times${(0,$.euh)(a)} = ${(0,$.k$K)(o*a)}$`,h=`$${(0,$.b1)((0,$.euh)(o))} \\times ${(0,$.euh)(a)} = ${(0,$.k$K)(o*a)}$`,e=(0,$.n0o)(o*a);break;case 6:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999)]),o=(0,$.n0o)(o/(0,$.q$q)([10,100,1e3,1e4])),a=n[r],i=`$${(0,$.euh)(a)} \\times \\ldots = ${(0,$.k$K)(o*a)}$`,h=`$${(0,$.euh)(a)} \\times ${(0,$.b1)((0,$.euh)(o))}  = ${(0,$.k$K)(o*a)}$`,e=o;break;case 7:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$${(0,$.qaf)(o,u)}\\times \\ldots = ${(0,$.k$K)(o/u*a)}$`,h=`$${(0,$.qaf)(o,u)} \\times ${(0,$.b1)((0,$.euh)(a))} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,e=a;break;case 8:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$ \\ldots \\times${(0,$.qaf)(o,u)}= ${(0,$.k$K)(o/u*a)}$`,h=`$${(0,$.b1)((0,$.euh)(a))} \\times ${(0,$.qaf)(o,u)} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,e=(0,$.n0o)(a);break;case 9:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$${(0,$.qaf)(o,"\\ldots")}\\times${(0,$.euh)(a)} = ${(0,$.k$K)(o/u*a)}$`,h=`$${(0,$.qaf)(o,(0,$.b1)((0,$.euh)(u)))} \\times ${(0,$.euh)(a)} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,(0,$.n0o)(o*a/u);break;case 10:o=(0,$.q$q)([(0,$.nSR)(11,99),(0,$.nSR)(100,999),(0,$.nSR)(2,9)]),u=(0,$.q$q)([10,100,1e3]),a=n[r],i=`$${(0,$.euh)(a)}\\times${(0,$.qaf)(o,"\\ldots")} = ${(0,$.k$K)(o/u*a)}$`,h=`$${(0,$.euh)(a)} \\times ${(0,$.qaf)(o,(0,$.b1)((0,$.euh)(u)))} = ${(0,$.qaf)(o*a,u)} = ${(0,$.k$K)(o/u*a)}$`,(0,$.n0o)(o*a/u)}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(h),this.qcm[1].push([i,[h,e],{digits:0,decimals:0,signe:!1,exposant_nb_chiffres:0,exposant_signe:!1,approx:0}]),r++),c++}(0,$.K1R)(this)},this.besoinFormulaireNumerique=["Types de calculs",3,"1 : Écriture décimale\n2 : Écriture fractionnaire\n3 : Écritures décimales et fractionnaires"],this.besoin_formulaire2_case_a_cocher=["Avec des calculs à trous"]}},67567:(s,e,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(s){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>t})}}]);
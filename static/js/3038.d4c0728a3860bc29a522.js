(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3038,7567],{3038:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>n,default:()=>h});var e=t(67567),o=t(24477);const n="Tables de divisions";function h(i="2-3-4-5-6-7-8-9"){e.default.call(this),this.sup=i,this.sup2=1,this.titre=n,this.consigne="Calculer",this.spacing=2,this.tailleDiaporama=100,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.sup||(this.sup="2-3-4-5-6-7-8-9");let i=[];"number"==typeof this.sup?i[0]=this.sup:i=this.sup.split("-");let s=(0,o.RZ9)(i,[2,3,4,5,6,7,8,9,10],this.nbQuestions),t=(0,o.SRM)(["classique","a_trous"],this.nbQuestions);for(let i,e,n,h,l=0;l<this.nbQuestions;l++)i=s[l][0],e=s[l][1],n="classique"==(1==this.sup2?"classique":2==this.sup2?"a_trous":t[l])?"$ "+i*e+" \\div "+i+" = \\dotfill $":(0,o.q$q)([!0,!1])?`$ ${i*e} \\div \\ldots\\ldots = ${e}$`:`$ \\ldots\\ldots \\div ${i}  = ${e}$`,h=`$ ${i*e} \\div ${i} = ${e}$`,est_diaporama&&(n=n.replace("= \\dotfill","")),this.listeQuestions.push(n),this.listeCorrections.push(h);(0,o.K1R)(this)},this.besoinFormulaireTexte=["Choix des tables","Nombres séparés par des tirets"],this.besoin_formulaire2_numerique=["Style de questions",3,"1 : Classique\n2: À trous\n3: Mélangé"]}},67567:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>e})}}]);
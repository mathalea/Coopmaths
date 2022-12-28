"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[61801,25523],{61801:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>a,interactifReady:()=>h,interactifType:()=>u,amcReady:()=>c,amcType:()=>l,default:()=>m});var s=t(25482),n=t(25523),o=t(22380),r=t(11945);const a="Notation scientifique",h=!0,u="mathLive",c=!0,l="AMCNum";function m(){n.default.call(this),this.sup=1,this.sup2=1,this.nbCols=1,this.nbColsCorr=1,this.nbQuestions=5,this.interactif=!1,this.nouvelleVersion=function(){let i,e;1===parseInt(this.sup)?this.consigne="Donner l'écriture scientifique des nombres suivants.":this.consigne="Donner l'écriture décimale des nombres suivants.",this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],e=1===parseInt(this.sup2)?[0,0,0,1,1]:2===parseInt(this.sup2)?[0,1,1,2,2]:[2,2,3,3,3];const t=(0,s.SRM)(e,this.nbQuestions);for(let n,a,h,u,c,l,m=0,$=0;m<this.nbQuestions&&$<50;){switch(t[m]){case 0:h=(0,s.nSR)(1,9),u=o.Do.isAmc?(0,s.nSR)(1,3):(0,s.nSR)(1,5);break;case 1:h=(0,s.n0o)((0,s.nSR)(11,99)/10),u=o.Do.isAmc?(0,s.nSR)(1,3):(0,s.nSR)(1,5);break;case 2:h=1===(0,s.nSR)(0,1)?(0,s.n0o)((0,s.nSR)(111,999)/100):(0,s.n0o)((100*(0,s.nSR)(1,9)+(0,s.nSR)(1,9))/100),u=o.Do.isAmc?(0,s.nSR)(1,3)*(0,s.q$q)([-1,1]):(0,s.nSR)(1,7)*(0,s.q$q)([-1,1]);break;case 3:h=1===(0,s.nSR)(0,1)?(0,s.n0o)((1e3*(0,s.nSR)(1,9)+5*(0,s.nSR)(1,19))/1e3):(0,s.n0o)((0,s.nSR)(1111,9999)/1e3),u=o.Do.isAmc?(0,s.nSR)(1,3)*(0,s.q$q)([-1,1]):(0,s.nSR)(1,7)*(0,s.q$q)([-1,1])}i=(0,s.n0o)(h*10**u),l=`${(0,s.k$K)(h)}\\times 10^{${u}}`,c=(0,s.Ran)(h,u),1===this.sup?(i=u>9||u<0?`${(0,s.k$K)(h)}\\times10^{${u}}`:`${(0,s.k$K)(h)}\\times10^${u}`,n=`$${c}${(0,s.sp)()}=$`,a=`$${c} = ${l}$`,this.interactif?n+=(0,r.G5)(this,m,"largeur25 inline"):n+=`$${(0,s.sp)()}\\dots$`):(i=h*10**u,a=`$${l} = ${c}$`,n=`$${l}${(0,s.sp)()}=$`,this.interactif?n+=(0,r.G5)(this,m,"largeur25 inline"):n+=`$${(0,s.sp)()}\\dots$`),-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(a),1===parseInt(this.sup)?(0,r.Iq)(this,m,i.replace(/\\thickspace /g,"").replace(/ /g,""),{formatInteractif:"ecritureScientifique",digits:t[m]+1,decimals:t[m],signe:!1,exposantNbChiffres:1,exposantSigne:!0,approx:0}):(0,r.Iq)(this,m,i,{formatInteractif:"calcul"}),o.Do.isAmc&&(this.autoCorrection[m].reponse.valeur=[(0,s.n0o)(h*10**u)],1===parseInt(this.sup)?(this.amcType="AMCNum",this.autoCorrection[m].enonce="Donner l'écriture scientifique du nombre "+n+"."):(this.amcType="qcmMono",this.autoCorrection[m].enonce="Donner l'écriture décimale du nombre "+n+".",this.autoCorrection[m].options={ordered:!1,lastChoice:5},this.autoCorrection[m].propositions=[{texte:`$${c}$`,statut:!0},{texte:`$${(0,s.k$K)(h*10**(u-1))}$`,statut:!1},{texte:`$${(0,s.k$K)(h*10**(u+1))}$`,statut:!1},{texte:`$${(0,s.k$K)(h*10**-u)}$`,statut:!1}])),m++),$++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Type d'exercices",2,"1 : Traduire en notation scientifique\n2 : Traduire en notation décimale"],this.besoinFormulaire2Numerique=["Niveau de difficulté",3,"1 : Facile\n2 : Moyen\n3 : Difficile"]}},25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=61801.8c32fc4c20a0f13ebf0d.js.map
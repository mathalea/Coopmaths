"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[43648,25523],{43648:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>a,interactifReady:()=>h,interactifType:()=>u,amcReady:()=>l,amcType:()=>c,default:()=>m});var s=t(22380),n=t(11945),o=t(25482),r=t(25523);const a="Convertir en min vers h et min ou en s vers min et s",h=!0,u="mathLive",l=!0,c="AMCHybride";function m(e=!1){r.default.call(this),this.nbQuestions=5,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.sup=1,this.nouvelleVersion=function(){this.sup=(0,o.QmD)(1,2,this.sup,1),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];for(let i,t,r,a,h,u=0,l=0;u<this.nbQuestions&&l<50;)i=(0,o.nSR)(2,4),t=(0,o.nSR)(10,59),r=(0,o.n0o)(60*i+t),a=1===this.sup?`Convertir $${r}$ minutes en heures(h) et minutes(min) :`+(0,n.G5)(this,2*u,"largeur10 inline",{texte:(0,o.sp)(5),texteApres:" h "})+(0,n.G5)(this,2*u+1,"largeur10 inline",{texte:(0,o.sp)(5),texteApres:" min "}):`Convertir $${r}$ secondes en minutes(min) et secondes(s) :`+(0,n.G5)(this,2*u,"largeur10 inline",{texte:(0,o.sp)(5),texteApres:" min "})+(0,n.G5)(this,2*u+1,"largeur10 inline",{texte:(0,o.sp)(5),texteApres:" s "}),h=e?1===this.sup?(0,o.pRK)(`\n    <br> Mentalement : <br>\nOn cherche le multiple de $60$ inférieur à $${r}$ le plus grand possible. C'est $${Math.floor(r/60)}\\times 60 = ${60*Math.floor(r/60)}$.<br>\nAinsi $${r} = ${60*Math.floor(r/60)} + ${r%60}$ donc $${r}$min $= ${Math.floor(r/60)}$h$${r%60}$min.`)+"<br>":(0,o.pRK)(`\n          <br> Mentalement : <br>\n      On cherche le multiple de $60$ inférieur à $${r}$ le plus grand possible. C'est $${Math.floor(r/60)}\\times 60 = ${60*Math.floor(r/60)}$.<br>\n      Ainsi $${r} = ${60*Math.floor(r/60)} + ${r%60}$ donc $${r}$s $= ${Math.floor(r/60)}$min$${r%60}$s.`)+"<br>":this.correctionDetaillee?`On doit effectuer la division euclidienne de ${r} par 60 car il y a 60 minutes dans une heure.<br>Le quotient entier donne le nombre d'heures et le reste enter donne le nombre de minutes.<br>`:"",1===this.sup?h+=`$${r} = ${i} \\times 60 + ${t}$ donc $${r}$ minutes = ${i}h ${t}min.`:h+=`$${r} = ${i} \\times 60 + ${t}$ donc $${r}$ s = ${i}min ${t}s.`,this.questionJamaisPosee(u,i,t,r)&&(this.listeQuestions.push(a),this.listeCorrections.push(h),s.Do.isAmc?1===this.sup?this.autoCorrection[u]={enonce:a,options:{multicols:!0},propositions:[{type:"AMCNum",propositions:[{texte:h,statut:"",reponse:{texte:"Heure(s)",valeur:i,param:{digits:1,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"Minute(min)",valeur:t,param:{digits:2,decimals:0,signe:!1,approx:0}}}]}]}:this.autoCorrection[u]={enonce:a,options:{multicols:!0},propositions:[{type:"AMCNum",propositions:[{texte:h,statut:"",reponse:{texte:"Minutes(min)",valeur:i,param:{digits:1,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"Secondes(s)",valeur:t,param:{digits:2,decimals:0,signe:!1,approx:0}}}]}]}:((0,n.Iq)(this,2*u,i),(0,n.Iq)(this,2*u+1,t)),u++),l++;(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Type d'unité de départ",2,"1 : Minutes\n2 : Secondes"]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=43648.54ef5430378739621b58.js.map
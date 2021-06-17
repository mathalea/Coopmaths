(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7970,2006],{2006:(e,s,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>t})},27970:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>$,default:()=>o});var t=i(2006),r=i(89846),n=i(91030);const $="Passer de la base 10 à une autre base et inversement";function o(){t.default.call(this),this.titre=$,this.consigne="",this.nbQuestions=3,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,r.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=["vers_base_10",(0,n.q$q)(["vers_base_n_3_chiffres","vers_base_n_4_chiffres"]),(0,n.q$q)(["plus_grand_4_chiffres","plus_grand_3_chiffres","plus_petit_4_chiffres","plus_petit_3_chiffres"])];this.nbQuestions>3&&(e=["vers_base_10","vers_base_n_3_chiffres","vers_base_n_4_chiffres","plus_grand_4_chiffres","plus_grand_3_chiffres","plus_petit_4_chiffres","plus_petit_3_chiffres"]);let s=(0,n.SRM)(e,this.nbQuestions);for(let i,t,r,$,o,a,c,l,h,b=0,u=0;b<this.nbQuestions&&u<50;){switch(r=(0,n.nSR)(2,7),s[b]){case"vers_base_10":$=10*(0,n.nSR)(1,r-1)+(0,n.nSR)(0,r-1),o=1e3*(0,n.nSR)(1,r-1)+100*(0,n.nSR)(0,r-1)+10*(0,n.nSR)(0,r-1)+(0,n.nSR)(0,r-1),i=`Les nombre $(${$})_${r}$ et $(${o})_${r}$ sont écrits en base ${r}. Donner leur écriture en base 10.`,t=`$(${$})_${r}=${$.toString()[0]}\\times${r}+${$.toString()[1]}=${parseInt($,r)}$`,t+=`<br>$(${o})_${r}=${o.toString()[0]}\\times${r}^3+${o.toString()[1]}\\times${r}^2+${o.toString()[2]}\\times${r}+${o.toString()[3]}=${parseInt(o,r)}$`;break;case"vers_base_n_3_chiffres":a=(0,n.nSR)(1,r-1),c=(0,n.nSR)(0,r-1),l=(0,n.nSR)(0,r-1),$=a*r**2+c*r+l,i=`Écrire en base ${r} le nombre ${$}.`,t=`$${$}=${r}\\times${Math.floor($/r)}+${(0,n.b1)($%r)}$`,t+=`<br>$${Math.floor($/r)}=${r}\\times${(0,n.b1)(a)}+${(0,n.b1)(c)}$`,t+=`<br> Finalement $${$}=(${a}${c}${l})_${r}$`;break;case"vers_base_n_4_chiffres":a=(0,n.nSR)(1,r-1),c=(0,n.nSR)(0,r-1),l=(0,n.nSR)(0,r-1),h=(0,n.nSR)(0,r-1),$=a*r**3+c*r**2+l*r+h,i=`Écrire en base ${r} le nombre ${$}.`,t=`$${$}=${r}\\times${Math.floor($/r)}+${(0,n.b1)($%r)}$`,t+=`<br>$${Math.floor($/r)}=${r}\\times${Math.floor(Math.floor($/r)/r)}+${(0,n.b1)(Math.floor($/r)%r)}$`,t+=`<br>$${Math.floor(Math.floor($/r)/r)}=${r}\\times${(0,n.b1)(a)}+${(0,n.b1)(c)}$`,t+=`<br> Finalement $${$}=(${a}${c}${l}${h})_${r}$`;break;case"plus_grand_4_chiffres":i=`Quel est le plus grand nombre à 4 chiffres que l'on peut écrire en base ${r}.`,i+=`<br>Comment s'écrit son successeur immédiat en base ${r} ? En déduire l'écriture en base 10 de ces 2 nombres.`,t=`En base ${r} les chiffres sont 0`;for(let e=1;e<r;e++)t+=`, ${e}`;t+=` donc le plus grand nombre à 4 chiffres est $(${r-1}${r-1}${r-1}${r-1})_${r}$ et son successeur immédiat est $(10000)_${r}$.`,t+=`<br> $(10000)_${r}=1\\times${r}^4=${(0,n.euh)(r**4)}$ donc $(${r-1}${r-1}${r-1}${r-1})_${r}=${r**4}-1=${(0,n.euh)(r**4-1)}$.`;break;case"plus_grand_3_chiffres":i=`Quel est le plus grand nombre à 3 chiffres que l'on peut écrire en base ${r}.`,i+=`<br>Comment s'écrit son successeur immédiat en base ${r} ? En déduire l'écriture en base 10 de ces 2 nombres.`,t=`En base ${r} les chiffres sont 0`;for(let e=1;e<r;e++)t+=`, ${e}`;t+=` donc le plus grand nombre à 3 chiffres est $(${r-1}${r-1}${r-1})_${r}$ et son successeur immédiat est $(1000)_${r}$.`,t+=`<br> $(1000)_${r}=1\\times${r}^3=${(0,n.euh)(r**3)}$ donc $(${r-1}${r-1}${r-1})_${r}=${r**3}-1=${(0,n.euh)(r**3-1)}$.`;break;case"plus_petit_4_chiffres":i=`Quel est le plus petit nombre à 4 chiffres que l'on peut écrire en base ${r}.`,i+=`<br>Comment s'écrit son prédécesseur immédiat en base ${r} ? En déduire l'écriture en base 10 de ces 2 nombres.`,t=`En base ${r} les chiffres sont 0`;for(let e=1;e<r;e++)t+=`, ${e}`;t+=` donc le plus petit nombre à 4 chiffres est $(1000)_${r}$ et son prédécesseur immédiat est $(${r-1}${r-1}${r-1})_${r}$.`,t+=`<br> $(1000)_${r}=1\\times${r}^3=${(0,n.euh)(r**3)}$ donc $(${r-1}${r-1}${r-1})_${r}=${r**3}-1=${(0,n.euh)(r**3-1)}$.`;break;case"plus_petit_3_chiffres":i=`Quel est le plus petit nombre à 3 chiffres que l'on peut écrire en base ${r}.`,i+=`<br>Comment s'écrit son prédécesseur immédiat en base ${r} ? En déduire l'écriture en base 10 de ces 2 nombres.`,t=`En base ${r} les chiffres sont 0`;for(let e=1;e<r;e++)t+=`, ${e}`;t+=` donc le plus petit nombre à 3 chiffres est $(100)_${r}$ et son prédécesseur immédiat est $(${r-1}${r-1})_${r}$.`,t+=`<br> $(100)_${r}=1\\times${r}^2=${(0,n.euh)(r**2)}$ donc $(${r-1}${r-1})_${r}=${r**2}-1=${(0,n.euh)(r**2-1)}$.`}-1===this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(t),b++),u++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=7970.01e8d3936e747ccd7def.js.map
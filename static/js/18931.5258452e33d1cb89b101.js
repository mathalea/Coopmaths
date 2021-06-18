(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[18931,71129],{18931:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>o,default:()=>r});var s=t(71129),n=(t(62259),t(63861));const o="Multiplications et quotients de relatifs : signe avec une lettre";function r(){s.default.call(this),this.sup=3,this.titre=o,this.consigne="",this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,this.spacing=2,this.nbQuestions=3,this.nbQuestionsModifiable=!0,this.nouvelleVersion=function(){let e;switch(this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[],this.sup){case 1:e=[1];break;case 2:e=[2];break;case 3:e=[1,2];break;case 4:e=[3,4];break;case 5:e=[1,2,3,4]}const i=(0,n.SRM)(e,this.nbQuestions);for(let t,s,o=0,r=0;o<this.nbQuestions&&r<50;){const e=20,$=new n.Mjk((0,n.nSR)(-1,1,[0])*(0,n.nSR)(1,e),(0,n.nSR)(-1,1,[0])*(0,n.nSR)(1,e),(0,n.nSR)(-1,1,[0])*(0,n.nSR)(1,e),(0,n.nSR)(-1,1,[0])*(0,n.nSR)(1,e),(0,n.nSR)(-1,1,[0])*(0,n.nSR)(1,e)),u=["n","x","y","a","m"],l=u[(0,n.nSR)(0,u.length-1)],a=(0,n.Gag)(o+1),g=(0,n.nSR)(-1,1,[0]),b=1==i[o]?(0,n.nSR)(3,5):(0,n.nSR)(4,6);let c=(0,n.nSR)(0,b-1);const f=$.relatifs.slice(0,b-1),p=[];for(let i=0;i<f.length;i++)p.push((0,n.aIp)(f[i]));p.splice(c,0,l);let h,d,S="";switch(t=`Donne le signe de $ ${l} $ pour que ${a} soit ${-1==g?"negatif":"positif"}. <br>`,s=`${(0,n.PH8)("Supposons que "+l+" soit positif : ")}`,i[o]){case 1:S+=`${p[0]} `;for(let t=1;t<b;t++)S+=`\\times ${p[t]}`;t+=` ${a} = $ ${S} $ <br>`,this.correctionDetaillee?(f.push(1),s+=`<br> ${$.setRegleSigneProduit(...f)}`,s+=`<br><br> Donc si ${(0,n.PH8)(l+" est positif","black")} $ ${S} $ est ${(0,n.PH8)($.getSigneProduitString(...f),"black")}.`,s+=`<br><br> ${(0,n.PH8)("Supposons maintenant que "+l+" soit négatif : ")}`,f.push(-1),s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,s+=`<br><br> Donc si ${(0,n.PH8)(l+" est négatif","black")} $ ${S} $ est ${(0,n.PH8)($.getSigneProduitString(...f),"black")}.`,s+=`<br><br> ${(0,n.PH8)("Conclusion :")} <br>`+(0,n.PH8)(`Il faut donc que $ ${l} $ soit ${g==$.getSigneProduitNumber(...f)?"négatif":"positif"} pour que ${a} soit ${-1==g?"négatif":"positif"}`,"black")):s=`<br> Il faut que $ ${l} $ soit ${g==$.getSigneProduitNumber(...f)?"positif":"négatif"} pour que ${a} soit ${-1==g?"négatif":"positif"}.`;break;case 2:S+="\\dfrac {"+p[0];const e=(0,n.nSR)(2,b-2);for(let t=1;t<e+1;t++)S+=`\\times ${p[t]}`;S+="}{"+p[e+1];for(let t=e+2;t<b;t++)S+=`\\times ${p[t]}`;S+="}",t+=` ${a} = $ ${S} $ <br>`,this.correctionDetaillee?(s+=`<br> ${$.setRegleSigneQuotient(...f)}`,s+=`<br><br> Donc si ${(0,n.PH8)(l+" est positif","black")} $ ${S} $ est ${(0,n.PH8)($.getSigneProduitString(...f),"black")}.`,s+=`<br><br> ${(0,n.PH8)("Supposons maintenant que "+l+" soit négatif : ")}`,f.push(-1),s+=`<br> ${$.setRegleSigneQuotient(...f)}`,s+=`<br><br> Donc si ${(0,n.PH8)(l+" est négatif","black")} $ ${S} $ est ${(0,n.PH8)($.getSigneProduitString(...f),"black")}.`,s+=`<br><br> ${(0,n.PH8)("Conclusion :")} <br>`+(0,n.PH8)(`Il faut donc que $ ${l} $ soit ${g==$.getSigneProduitNumber(...f)?"négatif":"positif"} pour que ${a} soit ${-1==g?"négatif":"positif"}`,"black")):s=`<br> Il faut que $ ${l} $ soit ${g==$.getSigneProduitNumber(...f)?"positif":"négatif"} pour que ${a} soit ${-1==g?"négatif":"positif"}.`;break;case 3:h=(0,n.nSR)(-1,1,[0]),t=`Donne le signe de ${a} si $ ${l} $ est ${-1==h?"négatif":"positif"}. <br>`,s="";const i=(0,n.nSR)(1,3);c=(0,n.nSR)(0,b-1);for(let t=0;t<i;t++)p.splice(c,0,l);S+=`${p[0]} `;for(let t=1;t<b+i;t++)S+=`\\times ${p[t]}`;d=`${f[0]} `;for(let t=1;t<b-1;t++)d+=`\\times ${f[t]}`;t+=` ${a} = $ ${S} $ <br>`,this.correctionDetaillee?1==i||3==i?(s+=`On trouve ${i+1} fois le facteur $ ${l} $.<br> Or ${i+1} est pair donc leur produit sera positif.`,s+=`<br>Le signe de l'expression a donc le signe de : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quelque soit le signe de $ ${l} $.`,"black")):(s+=`On trouve ${i+1} fois le facteur $ ${l} $. <br> Or ${i+1} est impair donc leur produit est du signe de $ ${l} $ soit ${-1==h?"négatif":"positif"}.`,-1==h?(s+=`<br>Le signe de l'expression a donc le signe opposé à : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,f.push(-1),s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quand $ ${l} $ est ${-1==h?"négatif":"positif"}.`,"black")):(s+=`<br>Le signe de l'expression a donc le signe opposé à : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quand $ ${l} $ est ${-1==h?"négatif":"positif"}.`,"black"))):1==i||3==i?s=`${a} est ${$.getSigneProduitString(...f)} quelque soit le signe de $ ${l} $.<br>`:-1==h?(f.push(-1),s=`${a} est ${$.getSigneProduitString(...f)} si $ ${l} $ est négatif.<br>`):s=`${a} est ${$.getSigneProduitString(...f)} si $ ${l} $ est positif.<br>`;break;case 4:h=(0,n.nSR)(-1,1,[0]),t=`Donne le signe de ${a} si $ ${l} $ est ${-1==h?"négatif":"positif"}. <br>`,s="";const o=(0,n.nSR)(2,7);S+=0==c?p[0]+"^{"+o+"}":p[0];for(let t=1;t<b;t++)S+=t==c?"\\times "+p[t]+"^{"+o+"}":"\\times "+p[t];d=`${f[0]} `;for(let t=1;t<b-1;t++)d+=`\\times ${f[t]}`;t+=` ${a} = $ ${S} $ <br>`,this.correctionDetaillee?o%2==0?(s+=`On trouve ${o} fois le facteur $ ${l} $.<br> Or ${o} est pair donc leur produit sera positif.`,s+=`<br>Le signe de l'expression a donc le signe de : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quelque soit le signe de $ ${l} $.`,"black")):(s+=`On trouve ${o} fois le facteur $ ${l} $. <br> Or ${o} est impair donc leur produit est du signe de $ ${l} $ soit ${-1==h?"négatif":"positif"}.`,-1==h?(s+=`<br>Le signe de l'expression a donc le signe opposé à : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,f.push(-1),s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quand $ ${l} $ est ${-1==h?"négatif":"positif"}.`,"black")):(s+=`<br>Le signe de l'expression a donc le signe opposé à : $ ${d} $`,s+=`<br><br> ${$.setRegleSigneProduit(...f)}`,s+="<br><br>"+(0,n.PH8)(`Donc ${a} est ${$.getSigneProduitString(...f)} quand $ ${l} $ est ${-1==h?"négatif":"positif"}.`,"black"))):o%2==0?s=`${a} est ${$.getSigneProduitString(...f)} quelque soit le signe de $ ${l} $.<br>`:-1==h?(f.push(-1),s=`${a} est ${$.getSigneProduitString(...f)} si $ ${l} $ est négatif.<br>`):s=`${a} est ${$.getSigneProduitString(...f)} si $ ${l} $ est positif.<br>`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),o++),r++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : Multiplications\n2 : Quotients \n3 : Multiplications et quotients \n4 : Multiplications avec plusieurs fois la lettre (dont puissances) \n5 : Mélange "]}},71129:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=18931.5258452e33d1cb89b101.js.map
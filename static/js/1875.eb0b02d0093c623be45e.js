(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1875,7567],{67567:(i,s,$)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}$.r(s),$.d(s,{default:()=>e})},61875:(i,s,$)=>{"use strict";$.r(s),$.d(s,{titre:()=>n,default:()=>o});var e=$(67567),t=$(24477);const n="Parenthèses manquantes";function o(){e.default.call(this),this.titre=n,this.consigne="Si besoin, ajoute des parenthèses pour rendre l'égalité correcte. <br> S'il y a plusieurs fois la même égalité trouve des solutions différentes.",this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.spacing=3,this.spacingCorr=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];var i,s,$,e,n,o,r,a,h,l,d,b,c,u,v,m,f,C=0;for(i="",s="",r=0;r<this.nbQuestions&&C<50;){for(a=(0,t.nSR)(1,3),h=(0,t.nSR)(1,3),l=(0,t.nSR)(1,6),d=(0,t.nSR)(1,4),b=(0,t.nSR)(1,4),c=(0,t.nSR)(2,3),u=(0,t.n0o)(d*a),n=(0,t.n0o)(h*a),$=(0,t.n0o)(l*n),e=(0,t.n0o)(u*n),o=(0,t.n0o)(n*a*b),m=[],i="",s="",v=0;v<3;v++)switch(f=(0,t.nSR)(0,6,m),m.push(f),f){case 0:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+e/n+(o/a+d)*c)} $ <br> `,s+=`$${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+e/n+(o/a+d)*c)} $<br>`;break;case 1:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)(($+e)/n+o/a+d*c)}  $<br>`,s+=`$ (${$} + ${e}) \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)(($+e)/n+o/a+d*c)} $<br>`;break;case 2:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)(($+e/n+o/a+d)*c)} $<br>`,s+=`$ ( ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} ) \\times ${c} = ${(0,t.n0o)(($+e/n+o/a+d)*c)} $<br>`;break;case 3:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)(($+e/n+o)/a+d*c)} $<br>`,s+=`$ (${$} + ${e} \\div ${n} + ${o}) \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)(($+e/n+o)/a+d*c)} $<br>`;break;case 4:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)((($+e)/n+o/a+d)*c)} $<br>`,s+=`$ ((${$} + ${e}) \\div ${n} + ${o} \\div ${a} + ${d}) \\times ${c} = ${(0,t.n0o)((($+e)/n+o/a+d)*c)} $<br>`;break;case 5:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+(e/n+o)/a+d*c)} $<br>`,s+=`$ ${$} + ( ${e} \\div ${n} + ${o} ) \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+(e/n+o)/a+d*c)} $<br>`;break;case 6:i+=`$ ${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+e/n+o/a+d*c)} $ <br> `,s+=`$${$} + ${e} \\div ${n} + ${o} \\div ${a} + ${d} \\times ${c} = ${(0,t.n0o)($+e/n+o/a+d*c)} $<br>`}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(s),r++),C++}(0,t.K1R)(this)}}}}]);